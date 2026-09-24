# Vicent Manila Portfolio

Executive editorial portfolio for Vicent Manila, focused on management consulting, research and evaluation, strategic partnerships and organizational leadership.

**Current version:** `5.5.1`

## Start here

| Resource | Link |
|---|---|
| Product documentation | [documentation/README.md](./documentation/README.md) |
| Site-wide responsive revision | [documentation/SITE_REVISION_2026-09.md](./documentation/SITE_REVISION_2026-09.md) |
| Mobile QA matrix | [documentation/MOBILE_QA_MATRIX.md](./documentation/MOBILE_QA_MATRIX.md) |
| Content verification | [documentation/CONTENT_VERIFICATION.md](./documentation/CONTENT_VERIFICATION.md) |
| Architecture | [documentation/ARCHITECTURE.md](./documentation/ARCHITECTURE.md) |
| Changelog | [documentation/CHANGELOG.md](./documentation/CHANGELOG.md) |

## Run locally

The production site is static and requires no build step.

```bash
python -m http.server 8899
```

Open `http://localhost:8899/index.html`.

## Validate

QA tooling is development-only:

```bash
npm install
npm run validate
npm run test:responsive
```

Pull requests run both static validation and browser-level responsive smoke tests.

## Repository rules

See [AGENTS.md](./AGENTS.md) and [documentation/CONTRIBUTING.md](./documentation/CONTRIBUTING.md).

Professional claims must remain grounded in [documentation/CONTENT_VERIFICATION.md](./documentation/CONTENT_VERIFICATION.md).
