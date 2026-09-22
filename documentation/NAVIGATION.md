# Navigation

**Status:** current as of v5.0.4 · **Owner files:** `assets/js/layout.js` (markup), `assets/css/design-system.css` (styling), `assets/js/site.js` (behaviour)

---

## 1. Principle

Visibility is owned by **one media query** in `design-system.css`. Nothing else decides whether a navigation element is shown.

This is not a stylistic preference — it is the fix for a class of bug that broke this navbar twice:

1. The markup used `hidden lg:inline-flex`. A component rule (`.vm-btn { display: inline-flex }`) in a later stylesheet overrode `.hidden`, so the desktop CTA appeared on mobile.
2. Hardening `.hidden` with `!important` then beat the non-important `.lg:flex` variants, hiding the desktop nav **at every width**. The site was unnavigable above 1024px.

Both failures came from a utility and a component fighting over one `display` property across two stylesheets. Semantic classes with a single owning media query remove the contest entirely.

> **Rule:** never control navigation visibility with utility classes. Add it to the media query in the `NAVIGATION v2` block.

---

## 2. Breakpoint

**900px.** Below it, the hamburger and drawer; at and above, the inline nav and CTA.

900 rather than 1024 because the content genuinely fits: measured at exactly 900px, the brand (129px), links (433px) and actions (239px) occupy **801px of 895px**. Tablets get real navigation instead of a hamburger.

Three places must agree on this number. They did **not** agree at one point, which meant a user resizing from 899px to 950px got the desktop nav *and* an open drawer simultaneously:

| Location | Purpose |
|---|---|
| `design-system.css` → `@media (min-width: 900px)` | Shows links + CTA, hides toggle |
| `design-system.css` → drawer/overlay `display: none` | Prevents a stale open drawer rendering |
| `site.js` → `initHeader` resize listener | Closes the drawer if the viewport crosses upward |

**If you change the breakpoint, change all three.**

---

## 3. Structure

```
header.site-header            fixed, full width, hairline bottom border
└── nav.vm-nav
    ├── a.vm-nav__brand       logo + name — name visible at every width
    ├── ul.vm-nav__links      ≥900px only
    │   └── a.vm-nav__link    .is-active + aria-current="page"
    └── div.vm-nav__actions
        ├── a.vm-nav__cta     ≥900px only
        └── button.vm-nav__toggle   <900px only, 44×44

div#nav-overlay               click-to-close scrim
div#nav-drawer[tabindex="-1"] off-canvas panel
└── .nav-drawer__panel
    ├── nav links (incl. Appendix)
    └── actions: WhatsApp · Call · Discuss a Partnership
```

The header is styled **entirely** in the `HEADER — authoritative layout` block. It does not rely on `executive.css`, which still carries rules for the previous floating-pill design.

### The pointer-events trap

`executive.css` sets `pointer-events: none` on `.site-header`. In the old design a pill child re-enabled them. The rebuilt header has no such child, so that inherited `none` made **every control unclickable** — brand, links, CTA and toggle — while still looking correct.

Programmatic `.click()` bypasses `pointer-events`, so scripted tests all passed. Only a hit test caught it:

```js
const r = el.getBoundingClientRect();
document.elementFromPoint(r.left + r.width/2, r.top + r.height/2);
// returned BODY, not the button
```

`design-system.css` now sets `pointer-events: auto` on the header and its descendants. **Verify navigation with a hit test, not a synthetic click.**

---

## 4. Active state

The active item is **ink-coloured text with a 2px gold underline** — not gold text. The underline alone carries the signal, keeping gold scarce per `DESIGN.md` §3.

Marked in `renderHeader` from `currentPage` (from `document.body.dataset.page`), which is set per page shell. Both desktop and mobile links receive `.is-active` and `aria-current="page"`.

---

## 5. Drawer behaviour

Implemented in `site.js`: `openNav`, `closeNav`, `toggleNav`, `handleNavKeydown`.

| Behaviour | Implementation |
|---|---|
| Open / close | `#nav-toggle` click → `toggleNav` |
| Close on Escape | `handleNavKeydown` |
| Close on overlay click | listener in `initNav` |
| Close on link click | listener on `.nav-mobile-link` |
| Close on resize ≥900px | `initHeader` resize listener |
| Focus trap | `handleNavKeydown` cycles `[toggle, ...focusables]` |
| Scroll lock | `body.nav-open` + `body.style.top` offset |
| Scroll restore | `window.scrollTo(0, _navScrollY)` on close |
| Focus in on open | first focusable, else the drawer itself |
| Focus out on close | the element that opened it, else the toggle |

### Why `visibility` is not transitioned

`executive.css` transitions `visibility` alongside `transform`. During that window the drawer is `visibility: hidden`, and **hidden elements silently reject `.focus()`** — so opening the menu left focus stranded behind it.

`design-system.css` overrides the transition to `transform` only. The drawer is focusable the instant `.is-open` lands, so focus management no longer depends on frame timing. `openNav` still retries on `requestAnimationFrame` and a 60ms timeout as belt-and-braces for throttled frames.

---

## 6. Touch targets

Every control meets 44×44px:

| Control | How |
|---|---|
| `.vm-nav__toggle` | fixed 44×44 |
| `.vm-btn` | `min-height: 44px` |
| `.vm-btn--tertiary` | padded to 44px; underline moved to `::after` pinned under the *text*, so the target grows without the rule drifting from the words |
| `.vm-filter` | `min-height: 44px` |

---

## 7. Testing navigation

The browser pane used during development **pauses the animation timeline while hidden**: `requestAnimationFrame` never fires and CSS transitions freeze at `currentTime: 0`. A correct drawer therefore *appears* stuck off-screen.

To test reliably:

```js
// Neutralise transitions. Note the explicit .nav-drawer selector: `*` has
// specificity 0,0,0 and loses to `.nav-drawer` (0,1,0), so a universal
// selector alone will NOT disable the drawer's transition.
const kill = document.createElement('style');
kill.textContent = '*,*::before,*::after,.nav-drawer,.nav-overlay{transition:none !important;animation:none !important}';
document.head.appendChild(kill);

// Wait with setTimeout, never requestAnimationFrame.
const w = ms => new Promise(r => setTimeout(r, ms || 90));
```

Cover: open, close, Escape, overlay click, link click, focus in, focus out, focus trap, scroll lock and restore, ARIA sync, hit-testability, and the 899/900 boundary.

---

## 8. Changing the navigation

Items come from `VM.site.nav` in `assets/js/config.js`. Each entry:

```js
{ href: 'leadership.html', label: 'Leadership', page: 'leadership' }
```

`page` must match the target shell's `data-page` for the active state to work. `cta: true` marks the entry rendered as the header button rather than a link.

**Keep the top level to six items** (`DESIGN.md` §8). Secondary destinations — Appendix is the current example — belong in the footer and the mobile drawer, not the top bar.
