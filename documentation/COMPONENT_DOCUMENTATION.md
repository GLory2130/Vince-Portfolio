# Components

**Status:** current as of v5.4.0  
**Implementation:** `assets/css/design-system.css`, `assets/js/pages.js`, `assets/js/layout.js`

The full visual rules live in [`../DESIGN.md`](../DESIGN.md).

## Layout primitives

| Class | Purpose |
|---|---|
| `.vm-container` | primary content width and responsive gutters |
| `.vm-container--wide` | wide media/gallery container |
| `.vm-section` | standard vertical rhythm |
| `.vm-section--expansive` | hero/work/media rhythm |
| `.vm-section--compact` | compact evidence/contact rhythm |
| `.vm-section--subtle` | alternate paper surface |
| `.vm-section--navy` | inverse surface |

## Typography

| Class | Use |
|---|---|
| `.vm-display*` | editorial/narrative headings |
| `.vm-heading` | structural sans heading |
| `.vm-eyebrow` | small uppercase label |
| `.vm-lead` | lead paragraph |
| `.vm-prose` | bounded prose |
| `.vm-caption` | metadata |

Long editorial headings and body content are allowed to shrink/wrap on mobile; grid/flex children use `min-width:0`.

## Buttons and targets

- primary: navy fill,
- secondary: bordered,
- tertiary: editorial text/underline,
- inverse modifier for navy surfaces.

Interactive targets are at least 44px high. Grouped CTA buttons become full-width on narrow phones.

## Content components

| Component | Responsive behavior |
|---|---|
| `.vm-feature` | stacked below 900px; editorial split above |
| `.vm-profile` | one column below 900px |
| `.vm-index` | number/title/content stack with desktop 3-column structure |
| `.vm-chrono` | period above role on mobile; period rail on desktop |
| `.vm-metrics` | single column on small phone; fluid row above |
| `.vm-publication-grid` | one column mobile; two columns from 800px |
| `.vm-event-feature` | one column below 800px |
| `.vm-doc` | stacked narrow phone; structured row at larger widths |
| `.vm-filter` | horizontal control rail below 600px |

## Navigation

One breakpoint owns navigation:

- below 900px: mobile drawer,
- 900px and above: inline navigation.

Do not reintroduce utility-class visibility logic.

## Lightboxes

Gallery and project lightboxes use dynamic viewport constraints, keyboard controls, swipe, Escape close and focus return.

## Adding components

1. Reuse existing layout/type primitives first.
2. Use semantic design tokens.
3. Add current styles to `design-system.css`, never the legacy stylesheet.
4. Verify 320px layout and 44px targets.
5. Add/update responsive browser coverage when behavior is new.
