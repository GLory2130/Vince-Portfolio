# Changelog

Newest first. Versions track the asset `?v=` query.

---

## 5.4.0 — Site-wide responsive and repository revision — 2026-09-22

### Responsive system
- Added an authoritative site-wide responsive hardening layer in `design-system.css`.
- Added page-specific mobile contracts for Home, Leadership, Selected Work, Project Detail, Gallery, Speaking and Appendix.
- Hardened 320px behavior, tablet layouts, safe-area handling and dynamic viewport lightboxes.
- Added horizontal mobile filter rails and full-width grouped CTAs on narrow phones.
- Standardized desktop navigation links to 44px interaction targets.

### Mobile navigation
- Added explicit fixed-body scroll locking and restoration.
- Added orientation and `visualViewport` synchronization.
- Kept the single 900px navigation breakpoint.

### Repository engineering
- Added `scripts/validate-site.mjs` for route, asset, syntax and version validation.
- Added Playwright responsive smoke tests across all seven public routes at five representative viewport sizes.
- Added PR CI triggered on opened, synchronize, reopened and ready-for-review events.
- Modernized the tagged release workflow.
- Pinned Lucide to version 0.468.0.

### Documentation
- Added `AGENTS.md`, `SITE_REVISION_2026-09.md` and `MOBILE_QA_MATRIX.md`.
- Rebuilt architecture, responsive, technology, page, accessibility, performance, maintenance, deployment and contributor documentation.
- Reconciled stale project/SEO/security/feature/image documentation.
- Updated `robots.txt` to point to the production sitemap.
- Standardized Open Graph and Twitter social metadata across all public route shells.

### Content polish
- Aligned the shared footer with Vicent's current management-consulting positioning.
- Updated Men's Circle accessibility copy to describe only Vicent Manila's host artwork.

---

## 5.3.0 — Homepage external resources — 2026-09-22

- Added the Full Shangwe Barrick/UDOM article and Mzumbe University Career Fair post to the homepage.
- Presented both as large editorial resource cards with relevant portfolio photography.
- Added safe external-link treatment and responsive two-column layout.
- Reused existing local portfolio imagery rather than hotlinking third-party images.
- Bumped static asset cache identifiers to 5.3.0.

---

## 5.2.2 — Men's Circle Vicent-only cleanup — 2026-09-22

- Updated The Men's Circle feature to use only Vicent Manila's host artwork.
- Removed the group lineup, Ram Hadji, Elizabeth Feria and generic cover artwork from the portfolio branch.
- Reduced the gallery to a single Men's Circle entry focused on Vicent.
- Removed guest-focused event copy from the portfolio presentation.
- Updated asset/content documentation and bumped static asset cache identifiers to 5.2.2.

---

## 5.2.1 — External evidence links — 2026-09-22

- Added the Full Shangwe article covering Barrick's sponsorship of the AIESEC university-student conference at UDOM.
- Added the owner-supplied Mzumbe University Career Fair Instagram post.
- Linked both resources from the Tanzania national-partnerships case study.
- Published both in the external resources section.
- Updated content-verification records and bumped static asset cache identifiers to 5.2.1.

---

## 5.2.0 — Final asset integration — 2026-09-22

### Assets
- Replaced the generated web CV with the owner-supplied September 2026 consultant CV at the stable public path.
- Added the complete Men's Circle campaign artwork set under a descriptive event directory.
- Removed the superseded single Men's Circle gallery image.

### Portfolio integration
- Updated the featured Speaking event to use the final lineup artwork.
- Added the lineup, host, Ram Hadji, Elizabeth Feria and cover artwork to the Gallery archive.
- Preserved the stable CV URL used by download actions and case-study evidence links.

### Maintenance
- Documented the event asset structure and current public CV behavior.
- Bumped static asset cache identifiers to 5.2.0.

---

## 5.1.1 — Portrait crop refinement — 2026-09-22

- Tightened the two primary profile portraits to a head-and-upper-torso crop.
- Removed visible wrist accessories, including bracelets or watches, from the primary portrait framing without modifying the source photography.
- Kept the crop responsive and consistent across desktop and mobile.
- Bumped static asset cache identifiers to 5.1.1.

---

## 5.1.0 — Portfolio feedback revision — 2026-09-22

### Content

- Rebuilt the current professional record from the consultant CV dated 04/09/2026.
- Current role is now **Management Consultant, INNOVEX Development Consulting Ltd**, including the Field Monitoring & Evaluation assignment for Tanga Yetu Project Phase 2.
- Closed the Mo Dewji Foundation role at Jun 2026.
- Restored CV-verified AIESEC International and Belarus assignments.
- Added the Digital Lion Program and aligned published languages with the current CV.
- Rewrote core copy into shorter, more direct professional language.

### Evidence & selected work

- Removed empty project filter categories.
- Reworked case-study claims to match primary evidence.
- Added **Evidence & Resources** links to case studies.
- Added a direct bridge from expertise to supporting case studies.
- Added infrastructure for verified external articles and newsletters without publishing placeholder links.

### Speaking & events

- Added **The Men's Circle** (17 Sep 2026) as a featured speaking engagement.
- Added event artwork to the speaking archive.
- Added safe external-link rendering for event and future article/newsletter URLs.

### UI / responsive

- Tightened portrait crops to keep attention on the face and upper torso.
- Fixed the mobile expertise layout that compressed content against the left side.
- Added responsive featured-event and evidence-resource components.

### Metadata & release

- Updated structured data to **Management Consultant** at **INNOVEX Development Consulting Ltd**.
- Removed stale Kinyarwanda structured-data metadata.
- Updated descriptions across site shells.
- Bumped the cache/version identifier to **5.1.0**.

### Documentation

- Added [FEEDBACK_REVISION_2026-09.md](./FEEDBACK_REVISION_2026-09.md).
- Rewrote content verification and open-verification records around the updated CV.

---

## 5.0.4 — Navigation revision, light-only theme, documentation

### Fixed — critical

- **The entire navbar was unclickable.** `executive.css` sets `pointer-events: none` on `.site-header`; the old floating-pill child re-enabled it. The rebuilt header has no such child, so every control — brand, links, CTA, toggle — was inert while looking correct. Synthetic `.click()` bypasses `pointer-events`, so scripted tests passed; only a hit test caught it.
- **The header was not fixed.** The rebuild dropped Tailwind's `fixed inset-x-0 top-0`, and `executive.css` never set `position` itself, so the bar scrolled away.

### Fixed

- Drawer focus no longer depends on frame timing.
- Focus restoration never lands on `document.body`.
- Tertiary buttons 32px → 44px.
- Filter pills 41px → 44px.

### Changed

- Dark theme removed. The site ships a single light theme.
- Navigation breakpoint 1024px → 900px.
- Brand name remains visible down to 320px.

### Documentation

- Added NAVIGATION.md.
- Rewrote architecture, technology, responsive, accessibility, performance, features, component, page and design-system documentation.

---

## 4.6.0 — Header rebuild and contact CTAs

- Rebuilt the header on semantic classes.
- Added WhatsApp and phone CTAs.
- Removed the orphaned contact renderer.
- Added active-navigation state with `aria-current="page"`.

---

## 4.0.0 — Redesign and content correction

### Design

- Introduced the warm editorial design system.
- De-carded profile, philosophy, expertise, metrics and chronology.
- Removed autoplay expertise and testimonial patterns.

### Content

- Repositioned the portfolio around management consulting and broader professional work.
- Introduced primary-source verification as a standing content rule.

### Performance

- Removed the runtime Tailwind CDN.
