# Accessibility

**Target:** WCAG 2.2 AA  
**Status:** current for v5.4.0

---

## Contrast

The design system uses separate semantic tokens for decorative gold and gold text. Muted text and inverse-surface text are designed for AA contrast against their rendered surfaces.

Contrast must be checked against the actual opaque background, not an assumed parent token.

---

## Structure

- one `h1` per page,
- no deliberate heading-level skips,
- semantic header/nav/main/footer landmarks,
- skip link on every route,
- gallery captions are not promoted to headings.

---

## Navigation

The mobile navigation provides:

- real button toggle,
- synchronized `aria-expanded`,
- synchronized drawer `aria-hidden`,
- Escape close,
- focus containment,
- focus return,
- active page via `aria-current`,
- background scroll lock,
- resize/orientation handling.

At 900px the drawer is removed from layout and desktop navigation takes over.

---

## Interactive targets

Buttons, filters, mobile links and desktop navigation links use a 44px minimum target.

Responsive Playwright tests fail the PR if tested controls render below the threshold.

---

## Focus visibility

Global `:focus-visible` styles remain enabled. Gallery cards and lightbox controls have dedicated focus treatment.

Focus is never intentionally removed.

---

## Reduced motion

`prefers-reduced-motion: reduce` collapses animation and transition durations and changes back-to-top scrolling from smooth to instant.

Content is not gated behind animation.

---

## Lightboxes

Project and gallery lightboxes:

- are modal dialogs,
- provide accessible names on controls,
- support Escape and arrow keys,
- support swipe,
- return focus to the opener,
- constrain media inside the dynamic viewport.

---

## Automated coverage

PR CI covers:

- JavaScript runtime errors,
- horizontal overflow,
- navigation mode,
- target size,
- all seven public routes at five representative viewport sizes.

Automated tests do not replace manual assistive-technology testing.

---

## Known gap

A manual pass with NVDA, JAWS or VoiceOver has not yet been completed. This remains an open verification item.
