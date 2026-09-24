# Responsive Guide

**Status:** current for v5.5.1  
**Mobile floor:** 320px  
**Navigation breakpoint:** 900px

---

## 1. Viewport matrix

Every public route is covered by the responsive browser smoke suite at:

- 320 × 720
- 375 × 812
- 430 × 932
- 768 × 1024
- 900 × 900
- 1280 × 800

Manual visual review should also include 360, 390, 1024, 1440 and 1920 widths.

The acceptance floor is simple: **no horizontal page overflow at any supported width**.

```js
document.documentElement.scrollWidth <= document.documentElement.clientWidth
```

The full manual route matrix lives in [MOBILE_QA_MATRIX.md](./MOBILE_QA_MATRIX.md).

---

## 2. Breakpoints

The site uses a small set of deliberate breakpoints instead of one breakpoint per component.

| Range | Behavior |
|---|---|
| `< 480px` | small-phone type/spacing, stacked action groups, compact document rows |
| `480–599px` | phone composition with normal type scale |
| `600–899px` | tablet composition, mobile navigation still active |
| `≥ 900px` | desktop navigation and editorial multi-column layouts |
| `≥ 1024px` | gallery/project grids may expand to three columns |

**900px is the only navigation breakpoint.** The drawer and desktop links must never be active at the same time.

---

## 3. Global responsive contract

`design-system.css` owns the authoritative responsive rules and loads after the legacy stylesheet.

Site-wide protections include:

- `box-sizing: border-box`,
- `min-width: 0` on grid/flex children,
- safe-area padding for fixed navigation,
- `overflow-wrap` on long editorial text,
- horizontal page clipping,
- dynamic viewport units for lightboxes,
- full-width grouped CTAs on narrow phones,
- horizontally scrollable filter rails on phones,
- 44px minimum interactive targets.

---

## 4. Route behavior

| Route | Phone | Tablet | Desktop |
|---|---|---|---|
| Home | portrait-first; one-column work/publications/profile | selective 2-column image grids | editorial split layouts |
| Leadership | chronology and footprint stack | wider single-column reading | chronology uses period rail |
| Projects | filter rail scrolls; case studies stack | stacked features with more breathing room | alternating two-column features |
| Project detail | hero copy contained; 1-column gallery/impact | gallery may become 2 columns | full editorial case-study layout |
| Gallery | 1-column masonry and scrollable filters | 2 columns | 3 columns |
| Speaking | portrait-first; event/meta stack; booking CTAs stack | event may split near 800px | two-column hero/event |
| Appendix | documents stack; download actions full width | number/body/action flow | 3-column document rows |

---

### Face-safe portrait media

Photographs flagged as portraits in `VM.data` have dedicated aspect ratios:
featured case studies use 5:4, article imagery uses 4:3 and both use 4:5 on
phones below 600px. The image focal point travels through to Executive
Profile thumbnails and case-study heroes. Confirm image loading and top-of-head
visibility in the mobile and desktop QA matrix; a centered crop on the
original portrait image is not acceptable.

## 5. Touch targets

Automated browser tests check these selectors for a minimum rendered height of 44px:

```text
button
a.vm-btn
.vm-filter
.nav-mobile-link
.vm-nav__link
```

Tertiary links and desktop navigation explicitly carry a 44px minimum even though their visual treatment remains light.

---

## 6. Filter behavior

Below 600px, project and gallery filters become a horizontal scroll rail. This is intentional: a single-line rail is more usable than a tall wall of wrapped pills and cannot widen the page because the scroll is contained inside the control region.

---

## 7. Dynamic viewport behavior

Mobile navigation and lightboxes use `100dvh` in addition to legacy `vh` fallbacks.

The drawer:

- locks body position while open,
- retains the original scroll position,
- restores it on close,
- responds to resize, orientation change and `visualViewport` resize.

Lightboxes constrain images and controls inside the dynamic viewport, including safe-area insets.

---

## 8. Automated testing

Run:

```bash
npm install
node scripts/validate-site.mjs
npm run test:responsive
```

The Playwright suite starts against a local static server in CI and checks all seven routes for:

- horizontal overflow,
- navigation mode at the 900px breakpoint,
- runtime JavaScript errors,
- 44px interactive targets.

CI is triggered when a pull request is opened, synchronized, reopened or marked ready for review.
