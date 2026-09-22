# Pages

**Status:** current for v5.4.0  
**Renderer source:** `assets/js/pages.js`

Every public route uses a thin HTML shell and a JavaScript renderer selected by `body[data-page]`.

---

## Shared shell

All shells include:

- UTF-8 charset,
- responsive viewport metadata,
- unique title and description,
- canonical URL,
- theme color,
- favicons and manifest,
- pinned Lucide script,
- versioned CSS and JavaScript assets,
- skip link,
- shared header/main/footer mount points.

The homepage additionally carries `Person` structured data.

---

## Home — `index.html`

Section order:

1. Hero
2. Professional standing
3. Selected work
4. Articles & Events / external resources
5. Executive profile
6. Leadership philosophy
7. Areas of expertise
8. Selected impact
9. Career chronology preview
10. International footprint
11. Visual archive
12. Contact

Phone behavior is portrait-first, one-column and CTA-friendly. External resource cards collapse to one column.

---

## Leadership — `leadership.html`

Leadership philosophy → impact → full career chronology → international footprint → partnership CTA.

On phones, chronology periods sit above roles and long organization/outcome text wraps without affecting the page width.

---

## Selected Work — `projects.html`

Case-study index with `aria-pressed` filters and live result count.

Below 600px filters become a horizontally scrollable control rail and all case studies use one-column editorial features.

---

## Case Study — `project.html?slug=...`

Dynamic route resolved from `VM.getProject(slug)`.

Structure:

hero → overview/challenge/objectives/role/strategy/execution/evidence → gallery → impact → related work.

Phone behavior:

- hero content is contained inside the image/scrim,
- prose uses phone-safe gutters,
- gallery and impact become one column,
- related projects stack,
- lightbox controls fit inside `100dvh`.

---

## Gallery — `gallery.html`

Masonry archive with category filters and lightbox.

Columns:

- 1 below 640px,
- 2 from 640px,
- 3 from 1024px.

The lightbox supports keyboard navigation, swipe, focus return and dynamic-viewport sizing.

---

## Speaking — `speaking.html`

Speaking hero → featured event → topics → engagements → external resources → photography → booking.

The mobile hero is portrait-first; featured-event metadata and booking actions stack cleanly.

---

## Appendix — `appendix.html`

Primary-source downloads plus evidence available on request.

Document rows are:

- fully stacked on very narrow phones,
- number + body with action below on tablet,
- number + body + action at desktop.

Download controls state file weight.

---

## Adding a route

1. Copy an existing shell.
2. Set a unique `data-page`.
3. Register a renderer in `pages.js`.
4. Add unique metadata and canonical URL.
5. Add the route to `sitemap.xml`.
6. Add navigation only if it belongs in the six top-level destinations.
7. Update the QA route list in `tests/responsive.spec.mjs`.
8. Run static and browser validation.
