# Vicent Manila — Portfolio Design System

**Status:** v1.0 · Source of truth for all visual decisions in this repository.
**Companion:** [documentation/DESIGN_REFERENCE_ANALYSIS.md](./documentation/DESIGN_REFERENCE_ANALYSIS.md) — the research this system is derived from.

---

## 1. Visual theme and brand atmosphere

A warm paper canvas, near-square geometry, and a disciplined serif/sans split — where the photography and the evidence carry the authority, and the gold is spent rarely enough to still mean something.

The site reads as **a printed executive profile that happens to be on the web**. Paper-toned rather than screen-white; sharply set rather than softly rounded; generously spaced rather than densely carded.

**The atmosphere is:** global · strategic · intelligent · credible · human · executive · diplomatic · results-oriented.

**It is not:** playful, energetic, disruptive, minimal-for-its-own-sake, or corporate-stiff.

**Confidence without self-importance.** The design never claims what the content has not demonstrated. Words like *visionary*, *world-class* and *transformational* do not appear unless a verifiable outcome sits directly beside them.

---

## 2. Colour tokens

All colour is declared as semantic tokens. **Never write a raw hex value in a component.**

### Colour tokens (`:root`)

| Token | Value | Role |
|---|---|---|
| `--vm-canvas` | `#F7F5F1` | Page floor. Warm paper, not cool white. |
| `--vm-canvas-subtle` | `#F1EEE8` | Alternating band; one step deeper than canvas. |
| `--vm-surface` | `#FDFCFA` | Lifted surface — paper laid on paper. |
| `--vm-ink` | `#14243A` | Headlines and body. Warm navy-black, never jet. |
| `--vm-ink-secondary` | `#40506A` | Supporting copy, lead paragraphs. |
| `--vm-ink-muted` | `#5A6675` | Metadata, captions, eyebrows. 5.37:1 — measured. |
| `--vm-navy` | `#0B1F3A` | Inverse surfaces, footer, dark bands. |
| `--vm-navy-soft` | `#16304F` | Second dark step for nested inverse surfaces. |
| `--vm-accent` | `#B4893C` | Gold. Prestige accent only — see §3. |
| `--vm-accent-hover` | `#96702E` | Gold interaction state. |
| `--vm-accent-subtle` | `#EFE3CB` | Gold at wash strength; rules and fills only. |
| `--vm-border` | `#DED8CD` | The 1px hairline. Warm, matches the canvas. |
| `--vm-border-strong` | `#B9AF9F` | Emphasised rule; section openers. |

### Gold as text

Gold splits into two tokens, and the distinction is not cosmetic.

| Token | Use | Contrast |
|---|---|---|
| `--vm-accent` `#B4893C` | Rules, borders, decoration — **never words** | 2.93:1 — fails AA as text |
| `--vm-accent-text` `#7E6029` | Anywhere gold carries text | 5.37:1 on canvas |

On inverse (navy) surfaces, gold text lifts to `#D0A857` — the light-theme text gold measures only 2.83:1 against navy.

### One theme

The site ships **a single light theme**. A dark theme previously existed and was removed at the owner's preference.

If a second theme is ever reintroduced, it must be a *designed* theme rather than an inversion — every token redefined deliberately, and contrast re-measured against the rendered surfaces in both modes. A half-maintained second theme is worse than not having one.

**Do not add `@media (prefers-color-scheme: dark)` overrides.** `executive.css` still contains inert `.dark` rules; the class is never applied.

### Semantic

`--vm-success #2F6F4F` · `--vm-warning #8A6516` · `--vm-error #9B2C2C`. Form validation only. These never appear as decoration.

---

## 3. The gold rule

Gold is the scarcest resource in this system. Its power is entirely a function of how rarely it appears.

**Gold IS for:**
- The active navigation indicator (one at a time).
- The rule above a section eyebrow.
- A single emphasised figure inside a metric.
- The primary CTA border or underline.
- Pull-quote opening marks.

**Gold is NOT for:**
- Every heading, or any heading by default.
- Icons, or icon containers.
- Card borders.
- Button fills (a solid gold button reads as a discount badge).
- Hover states on ordinary links.
- More than **two** appearances in a single viewport.

> **Test:** if removing a gold element does not weaken the page, it should not be gold.

---

## 4. Typography

Two families. The split between them is a **hard structural rule**, not a stylistic preference.

### The rule — serif for narrative, sans for structure

**Source Serif 4** carries *authored thought*:
hero name · page titles · case-study titles · the leadership philosophy statement · pull quotes · editorial standfirsts.

**Plus Jakarta Sans** carries *everything the interface says about itself*:
navigation · body copy · labels · eyebrows · metrics · buttons · metadata · captions · forms · filters.

**Serif never labels a control. Sans never sets an editorial statement.**
Section headings are **sans** by default — the serif is reserved so that when it appears, it signifies.

### Scale

Display sizes run at **weight 400** with negative tracking. Calm at scale, per IBM and WIRED.

| Token | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| `--vm-display-xl` | `clamp(2.75rem, 6vw, 4.5rem)` | 400 | 1.04 | `-0.02em` |
| `--vm-display-lg` | `clamp(2.25rem, 4.4vw, 3.25rem)` | 400 | 1.08 | `-0.018em` |
| `--vm-display-md` | `clamp(1.75rem, 3vw, 2.375rem)` | 400 | 1.15 | `-0.014em` |
| `--vm-heading` | `clamp(1.25rem, 2vw, 1.5rem)` | 600 | 1.3 | `-0.01em` |
| `--vm-lead` | `clamp(1.125rem, 1.6vw, 1.3125rem)` | 400 | 1.6 | `0` |
| `--vm-body` | `1rem` | 400 | 1.65 | `0.01em` |
| `--vm-body-sm` | `0.875rem` | 400 | 1.55 | `0.01em` |
| `--vm-eyebrow` | `0.75rem` | 600 | 1.2 | `0.14em` uppercase |
| `--vm-caption` | `0.8125rem` | 400 | 1.45 | `0.01em` |

### Measure

Long-form copy is constrained to **62–72 characters** (`max-width: 68ch`). This is enforced on the profile, philosophy, and all case-study prose. Copy that runs the full width of a 1360px container is unreadable and is treated as a defect.

---

## 5. Grid and layout

- **Max width:** `1320px`. Editorial prose: `68ch`. Wide media: `1440px`.
- **Columns:** 12 desktop · 8 tablet · 4 mobile.
- **Gutter:** `clamp(1rem, 2vw, 1.75rem)`.
- **Page padding:** `clamp(1.25rem, 4vw, 4rem)`.

### Section rhythm — deliberately uneven

Uniform padding on every section is what makes a page feel templated. Pacing is assigned by narrative role:

| Role | Vertical padding |
|---|---|
| Expansive (hero, selected work, photography) | `clamp(5rem, 10vw, 9rem)` |
| Standard (profile, expertise, chronology) | `clamp(4rem, 7vw, 6.5rem)` |
| Compact (credibility strip, organisations, contact) | `clamp(2.5rem, 4vw, 3.5rem)` |

---

## 6. Geometry, borders, elevation

### Radius — near-square

```
--vm-radius-sm:  2px   /* inputs, filter controls */
--vm-radius-md:  4px   /* buttons */
--vm-radius-lg:  8px   /* the largest radius in the system */
--vm-radius-img: 0     /* editorial imagery is square */
--vm-radius-pill: 999px /* genuine status chips ONLY */
```

Nothing exceeds 8px. The previous `18px` / `26px` values are removed: they are the primary reason the site read as a SaaS template.

### Borders

The **1px hairline is the main structural device**, replacing cards throughout. Section openers may use a `2px` `--vm-border-strong` rule.

### Elevation

**One shadow exists in this system:**

```
--vm-shadow-image: 0 18px 44px rgba(11, 31, 58, 0.14);
```

It is applied **only** to a photograph that needs to sit on a surface. Text, cards, buttons and navigation never carry a shadow. Hierarchy comes from layout, surface change, contrast and typography.

---

## 7. Photography

Photography carries the visual sophistication of this site. It is the reason the UI can afford to recede.

### Aspect classes

| Class | Ratio | Use |
|---|---|---|
| `.vm-img--portrait-exec` | 4:5 | Hero portrait |
| `.vm-img--portrait-ed` | 3:4 | Profile, speaking |
| `.vm-img--case-hero` | 3:2 | Case-study heroes |
| `.vm-img--event` | 4:3 | Event and editorial imagery |
| `.vm-img--gallery` | native | Gallery archive |

### Rules

- **Square corners.** Editorial photography is never rounded.
- **Explicit focal point** via `object-position` on every cropped image — no face may be cropped at the chin or forehead.
- **No decorative rings, glows, floating shapes or oversized borders** around the portrait. The hero portrait is a large, well-cropped photograph with negative space — not a headshot inside a card.
- **Never upscale.** An image below its display size is replaced or dropped.
- **Meaningful alt text** describing the professional context, not "photo of Vicent."
- **Captions** are sans, `--vm-caption`, `--vm-ink-muted`, and carry real event context where known.

---

## 8. Components

### Buttons

| Variant | Treatment |
|---|---|
| Primary | Navy fill, canvas text, `--vm-radius-md`. |
| Secondary | Transparent, 1px `--vm-border-strong`, ink text. |
| Tertiary | Text with a 1px gold underline that thickens on hover. |

Minimum target `44×44px`. **No gold-filled buttons.** No pills.

### Links

Body links: ink, 1px underline at 60% opacity, going full opacity on hover. Never gold by default.

### Navigation

A calm horizontal bar, hairline bottom border, **no floating rounded pill container**. Active item marked by a 2px gold underline. Six destinations maximum.

### Metrics

Figure in **serif**, `--vm-display-md`, weight 400. Label in **sans**, `--vm-eyebrow`, muted. Separated by hairlines in a row — **never boxed in cards**, never on a full-width dark band, never animated by count-up. Every metric must carry a label that states what it measures.

### Case-study cards

Not cards. A **full-bleed image**, then beneath it: index number and category in sans eyebrow, title in serif, one measurable outcome, and a tertiary "View Case Study" link. Separated by hairlines and whitespace.

### Career chronology

A single continuous vertical rule. Period on a left rail in sans eyebrow. Role in serif; organisation and location in sans; a one-line mandate; up to three outcomes. **No cards, no nested boxes.** Mobile collapses the rail to a left border.

### Pull quotes

Serif, `--vm-display-md`, weight 400, `--vm-ink`, on `--vm-canvas-subtle`, with a gold opening mark and generous space. Attribution in sans eyebrow.

### Expertise index

Numbered `01`–`06`. Number in sans eyebrow gold; title in serif; supporting competencies as a plain comma-separated sans line. **Not cards. Not pills. Not a carousel.**

---

## 9. Motion

Motion is used to introduce, never to decorate.

**Permitted:** a single subtle page-introduction fade; image reveal on first view; hover transitions at `160ms ease-out`; lightbox open/close; navigation drawer.

**Prohibited:** every section fading upward on scroll; any autoplay carousel; count-up number animation; parallax; decorative movement of any kind.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is a hard requirement, not an enhancement.

---

## 10. Accessibility

Target **WCAG 2.2 AA**.

- Body text meets 4.5:1; large display meets 3:1 — measured against the rendered surface, not assumed.
- A visible focus ring on every interactive element: `2px solid var(--vm-accent)` at `2px` offset. Focus is never removed.
- One `<h1>` per page; heading levels never skip.
- Landmarks: `header` / `nav` / `main` / `footer`. Skip link retained.
- Buttons are `<button>`; links are `<a>`. Never a `div` with a click handler.
- Lightbox: focus trapped, `Escape` closes, focus returns to the trigger.
- Filters expose `aria-pressed`; results announced via a polite live region.
- Targets at least `44×44px`.
- Colour is never the only carrier of meaning.

---

## 11. Responsive

Verified at **320 · 360 · 375 · 390 · 430 · 768 · 900 · 1024 · 1280 · 1440 · 1920**.

**Navigation switches at 900px** — inline links above, drawer below. Three places must agree on that number; see [documentation/NAVIGATION.md](./documentation/NAVIGATION.md).

**No horizontal overflow at 320px** — treated as a P0 defect.

Mobile is designed, not stacked: the portrait leads, selected work becomes image-first, the chronology becomes a single vertical rail, metrics reduce to the strongest three, and long headlines get controlled wrapping via `text-wrap: balance`.

---

## 12. Do and do not

**Do**
- Let photography and whitespace carry the page.
- Use hairlines and surface changes to separate content.
- Keep gold scarce.
- Constrain prose to a readable measure.
- Vary section pacing by narrative role.
- Let evidence establish credibility.

**Do not**
- Add blurred background circles, glass effects, gradient text, or abstract shapes.
- Wrap philosophy, mission, education or metrics in rounded cards.
- Nest a card inside a card.
- Autoplay anything.
- Put an icon in a rounded box beside a heading.
- Use radius above 8px.
- Add a shadow to anything that is not a photograph.
- Centre every section.
- **Publish any claim, metric, testimonial or media item that is not verifiable.**
