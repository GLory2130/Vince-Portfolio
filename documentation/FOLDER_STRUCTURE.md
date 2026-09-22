# Folder Structure

**Status:** current for v5.4.0

```text
Vince-Portfolio/
├── AGENTS.md
├── README.md
├── DESIGN.md
├── package.json                  # development/QA only
├── index.html
├── leadership.html
├── projects.html
├── project.html
├── gallery.html
├── speaking.html
├── appendix.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── release.yml
├── scripts/
│   └── validate-site.mjs
├── tests/
│   └── responsive.spec.mjs
├── assets/
│   ├── css/
│   │   ├── executive.css
│   │   ├── utilities.css
│   │   └── design-system.css
│   ├── js/
│   │   ├── config.js
│   │   ├── data.js
│   │   ├── gallery-data.js
│   │   ├── layout.js
│   │   ├── pages.js
│   │   └── site.js
│   ├── cv/
│   ├── documents/
│   └── images/
└── documentation/
    ├── README.md
    ├── DOCUMENTATION_INDEX.md
    ├── SITE_REVISION_2026-09.md
    ├── MOBILE_QA_MATRIX.md
    └── *.md
```

## Ownership

- `config.js`: identity, contact, nav, central image paths, version.
- `data.js`: professional content and case studies.
- `gallery-data.js`: gallery catalogue.
- `layout.js`: shared chrome.
- `pages.js`: route renderers.
- `site.js`: shared behavior.
- `design-system.css`: current design and responsive source of truth.
- `executive.css`: legacy compatibility only.
- `scripts/validate-site.mjs`: static repository checks.
- `tests/responsive.spec.mjs`: browser responsive smoke suite.
