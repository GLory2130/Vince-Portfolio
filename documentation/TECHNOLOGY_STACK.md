# Technology Stack

**Status:** current for v5.4.0

---

## Production runtime

| Layer | Choice |
|---|---|
| Markup | Hand-written HTML route shells |
| Rendering | Vanilla JavaScript template literals |
| Styling | Hand-written CSS with custom properties |
| Fonts | Source Serif 4 + Plus Jakarta Sans via Google Fonts |
| Icons | Lucide 0.468.0 via deferred CDN script |
| Hosting | Static, currently Vercel |
| Production build | None |

The deployed portfolio does not require Node, npm, a framework, a bundler or compilation.

---

## Development and QA

| Tool | Purpose |
|---|---|
| Node 22 in CI | static validation and syntax checks |
| `scripts/validate-site.mjs` | route, asset, version and syntax validation |
| `@playwright/test` 1.52.0 | browser-level responsive smoke tests |
| Python `http.server` in CI | serves the static repository during browser tests |
| GitHub Actions | validates pull requests |

`package.json` exists for QA only. It does not change the production architecture.

---

## Stylesheet order

`executive.css → utilities.css → design-system.css`

- `executive.css`: legacy compatibility layer.
- `utilities.css`: reset and remaining utility classes.
- `design-system.css`: authoritative current design and responsive system.

New component work belongs in `design-system.css`.

---

## JavaScript order

`config.js → data.js → gallery-data.js → layout.js → pages.js → site.js`

The modules share the `window.VM` namespace. There is no transpilation.

---

## Third-party requests

| Request | Use | Treatment |
|---|---|---|
| Google Fonts | editorial/sans typography | preconnect + display swap |
| unpkg Lucide 0.468.0 | icons | pinned version; deferred |

The former `@latest` Lucide dependency is no longer used.

---

## Why no framework

The site has a small number of content-driven routes, no authentication, no server state and no interactive application workflow. A production framework would add deployment and maintenance complexity without solving a current product requirement.

The central data modules already provide the important separation between content and rendering.
