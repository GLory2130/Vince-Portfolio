# Architecture

**Status:** current for v5.4.0

The production site is static and data-driven. There is no application framework and no production build step. Development-only tooling exists for validation and responsive browser testing.

---

## 1. Runtime shape

Each route is a thin HTML shell containing metadata and three mount points:

```text
index.html  leadership.html  projects.html  project.html
gallery.html  speaking.html  appendix.html
        │
        ├─ #site-header
        ├─ #main-content
        └─ #site-footer
```

Shared runtime modules:

```text
assets/js/
  config.js        identity, navigation, contact, central image paths
  data.js          professional content and case studies
  gallery-data.js  gallery manifest
  layout.js        shared header, drawer and footer
  pages.js         route renderers, filters and lightboxes
  site.js          navigation, reveal and back-to-top behavior
```

Stylesheets:

```text
assets/css/
  executive.css      legacy compatibility layer
  utilities.css      reset + small retained utility vocabulary
  design-system.css  authoritative tokens, components and responsive rules
```

---

## 2. Load order

Styles load in this order:

`executive.css → utilities.css → design-system.css`

The order is load-bearing. `design-system.css` is authoritative and intentionally loads last.

Scripts load in this order:

`config.js → data.js → gallery-data.js → layout.js → pages.js → site.js`

All modules attach to `window.VM`.

---

## 3. Rendering

`pages.js` maps `body[data-page]` to the corresponding renderer.

| data-page | Renderer |
|---|---|
| home | renderHome |
| leadership | renderLeadership |
| projects | renderProjects |
| project | renderProject / initProjectRedirect |
| gallery | renderGallery |
| speaking | renderSpeaking |
| appendix | renderAppendix |

The project route resolves a case study from `?slug=`. Unknown slugs redirect to `projects.html`.

Because content renders after `DOMContentLoaded`, `applyInitialHash()` re-applies anchor navigation after the target exists.

---

## 4. Content model

Professional content lives in `VM.data`. Site identity and contact configuration live in `VM.site`. Gallery records live in `VM.galleryImages`.

Professional claims must follow the source hierarchy in [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md).

---

## 5. Responsive architecture

The responsive system follows one rule: **desktop structure may enhance mobile structure, but must never be required for readability.**

Authoritative rules are in the final sections of `design-system.css`:

- site-wide responsive hardening,
- page-specific responsive contracts,
- navigation target corrections.

See [RESPONSIVE_GUIDE.md](./RESPONSIVE_GUIDE.md) and [MOBILE_QA_MATRIX.md](./MOBILE_QA_MATRIX.md).

---

## 6. Legacy stylesheet

`executive.css` still ships and is the largest technical debt item. It contains older component rules and many `!important` declarations.

New work must **not** extend the legacy layer. New fixes belong in `design-system.css`, which already neutralizes known legacy problems such as header pointer events, drawer transitions and obsolete rounded-card styling.

---

## 7. QA tooling

Runtime remains dependency-free. QA tooling is development-only:

- `scripts/validate-site.mjs` — static repository validation,
- `@playwright/test` — responsive browser smoke tests,
- `.github/workflows/ci.yml` — PR validation.

The static site can still be deployed directly without npm.

---

## 8. Deployment

The site is deployed as static files, currently through Vercel.

Asset URLs carry a `?v=` cache key. Every HTML shell must use the same version as `VM.version`.

`robots.txt` and `sitemap.xml` are maintained by hand.
