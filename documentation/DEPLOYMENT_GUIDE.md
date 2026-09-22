# Deployment Guide

**Status:** current for v5.4.0

## Production requirement

Any static HTTP host is sufficient. There is no production build step.

Node/npm are required only when running repository QA.

## Local serving

### XAMPP

Place the repository under `htdocs/Vince-Portfolio`, start Apache and open:

`http://localhost/Vince-Portfolio/`

### Python

```bash
python -m http.server 8899
```

Open `http://localhost:8899/index.html`.

## Local QA

```bash
npm install
npm run validate
npm run test:responsive
```

The responsive suite expects a local server on port 4173 when run directly through Playwright; CI starts that server automatically.

## Production checklist

- CV exists at the stable public path.
- All local assets resolve.
- Contact details are current.
- `VM.version` matches all shell `?v=` references.
- PR CI passes.
- Vercel preview is reviewed.
- Mobile navigation and lightboxes are manually smoke-tested.
- HTTPS is enabled.
- sitemap/robots remain valid.

## Vercel/static hosts

- framework preset: none,
- build command: none,
- output directory: repository root.

The repository's npm tooling is for CI/QA and does not need to run during production deployment.

## Apache

`.htaccess` includes caching/compression and assumes the XAMPP-style project path. If hosting at a different Apache base path, review `RewriteBase`.

## Troubleshooting

| Symptom | Check |
|---|---|
| stale CSS/JS | verify `?v=` matches `VM.version` |
| missing icon | verify pinned Lucide CDN request |
| mobile overflow | run responsive suite + overflow diagnostic |
| menu scroll issue | verify fixed-body lock and dynamic viewport rules |
| CV 404 | verify `assets/cv/vicent-manila-cv.pdf` |
