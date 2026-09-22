# Features

**Status:** current as of v5.4.0

## Routes

| Route | Purpose |
|---|---|
| `index.html` | positioning, selected work, external resources, profile, expertise, impact, chronology, gallery preview, contact |
| `leadership.html` | leadership philosophy, metrics, complete chronology and international footprint |
| `projects.html` | evidence-led case-study index with filters |
| `project.html?slug=` | case-study detail, evidence links, gallery, impact and related work |
| `gallery.html` | visual archive with filters and lightbox |
| `speaking.html` | speaking positioning, Men's Circle feature, topics, engagements, resources and booking |
| `appendix.html` | primary-source documents and on-request evidence |

## Responsive product behavior

- 320px minimum design floor.
- One navigation breakpoint at 900px.
- Phone filter controls use a contained horizontal rail.
- Grouped CTAs stack on small phones.
- Project/gallery lightboxes fit the dynamic viewport.
- Gallery uses 1 / 2 / 3 columns.
- Appendix document actions stack on narrow screens.
- Automated Playwright coverage spans every public route.

## Navigation

Six top-level destinations plus the contact CTA. Appendix is available in the mobile drawer and footer.

Mobile navigation includes focus containment, Escape close, focus return, body-scroll lock and orientation/dynamic-viewport synchronization.

## Evidence-first content

Case studies expose primary documents and verified public URLs when available.

The homepage also presents verified external articles/event records as visual editorial resources.

## Contact

Email, WhatsApp, phone and LinkedIn are available through shared contact surfaces. No contact form is used because there is no backend requirement.

## Deliberately absent

- unverifiable testimonials,
- autoplay carousels,
- count-up counters,
- dark theme,
- analytics/cookie tracking,
- framework runtime.
