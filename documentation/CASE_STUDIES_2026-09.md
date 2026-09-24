# INNOVEX and Mo Dewji Foundation case studies

**Recorded:** 23 September 2026  
**Scope:** Content and photography for the independent consulting and sustainable-livelihoods case studies.

## Purpose

Present two different professional assignments as independent pieces of work so the portfolio is not framed primarily by AIESEC leadership. The homepage features both assignments before one documented leadership case study. Both have independent detail routes, category filters, photo treatments and direct links from the Executive Profile and career chronology.

## Content provenance

- **INNOVEX:** The September 2026 consultant CV, already adopted as the authoritative career source, documents Vicent's Management Consultant role and his current field monitoring and evaluation assignment for Tanga Yetu Project Phase 2 in Tanga. The ongoing assignment does not have publicly confirmed quantitative outcomes.
- **Mo Dewji Foundation:** The consultant CV documents Vicent's Sustainable Livelihoods Coordinator role, September 2025–June 2026, covering youth livelihoods, entrepreneurship, market assessments, private-sector engagement and programme M&E. The site describes vocational pathways as programme context following the client's 23 September direction, without asserting unsupported training-completion or placement outcomes.
- **Photography:** The owner supplied the images through the existing `master-codes-changes` branch on 23 September. Production copies are placed in `assets/images/case-studies/` under stable names. The source contained two duplicate INNOVEX JPEGs; only one is published.

The image captions intentionally do **not** identify specific people, locations, meeting names or dates not established by supporting records. Do not imply every Mo Dewji photograph depicts the same event.

## URL and component contract

| Assignment | Detail URL | Filter category | Hero photo |
|---|---|---|---|
| INNOVEX | `project.html?slug=innovex-consulting` | `consulting` | `innovex-consulting.jpeg` |
| Mo Dewji Foundation | `project.html?slug=mo-dewji-livelihoods` | `livelihoods` | `mo-dewji-livelihoods-01.jpeg` |

Case-study data, activity headings and gallery captions live in `assets/js/data.js`. The shared renderer in `assets/js/pages.js` applies a lighter editorial hero layout to these categories, retaining existing behaviour for the AIESEC studies. Styles live in `assets/css/design-system.css`.

## Editorial safeguards

- The consulting case is explicitly an **ongoing assignment**; do not imply that Tanga Yetu Phase 2 has been completed or that it achieved an unverified metric.
- The Foundation case describes **role responsibilities and programme activities**, not participant counts, placement rates or programme-wide outcomes.
- Reuse the site's existing `assets/cv/vicent-manila-cv.pdf` link in the Executive Profile and both cases; the current approved CV must be reviewed before replacing its binary.
- Do not insert unrelated organization logos or imply third-party endorsement through photographic assets.
- Entrepreneurship can be surfaced through verified work supporting youth entrepreneurship. Standalone **VMAN Enterprises** and **MigLine** product or venture sections remain on hold until their current descriptions, dates and permissible product materials are approved; see `CONTENT_NEEDS_VERIFICATION.md`.

## QA

Check both independent case-study routes, image loading, CV download, programme-category filters and direct links from Executive Profile and Leadership. Portrait-led images must retain a top-biased focal point in homepage features, profile thumbnails, project heroes and portrait gallery tiles so faces remain visible across responsive aspect-ratio changes. The dedicated Playwright test is `tests/case-studies.spec.mjs`, with broader mobile coverage in `tests/responsive.spec.mjs`.
