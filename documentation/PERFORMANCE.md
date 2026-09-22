# Performance

**Status:** current for v5.4.0

---

## Runtime profile

The production site remains static with no framework and no build step.

Current runtime assets include:

- legacy `executive.css`,
- `utilities.css`,
- authoritative `design-system.css`,
- six small vanilla JavaScript modules,
- local portfolio imagery,
- appendix PDFs loaded only when requested.

---

## Images

- hero images use `fetchpriority="high"`,
- below-fold imagery uses lazy loading,
- key images provide intrinsic width/height,
- gallery thumbnails load in the grid while full images load in the lightbox,
- object-position is controlled for editorial crops.

Large source gallery files remain in the repository, but web-optimized copies are used where available.

---

## Third-party requests

Production makes two third-party classes of request:

1. Google Fonts.
2. Pinned Lucide 0.468.0.

Lucide is pinned so an upstream release no longer changes production implicitly.

---

## Responsive performance

Phone layouts avoid loading alternate mobile-specific assets or JavaScript bundles. The same semantic markup is reflowed through CSS.

Dynamic lightbox media remains contained rather than generating separate responsive image requests.

---

## Development-only tooling

Playwright and Node are QA dependencies only. They are not shipped to the browser and do not change Vercel's static runtime.

---

## Largest remaining optimization

`executive.css` is still the primary technical debt item. It contains a large amount of superseded styling and should eventually be retired through measured extraction, not deleted wholesale.

The appendix PDFs are intentionally download-only and therefore do not affect initial page load.
