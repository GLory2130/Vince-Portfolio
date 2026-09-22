# Maintenance Guide

**Status:** current for v5.4.0

## Principles

1. Edit central data/config before editing page templates.
2. Keep professional claims source-backed.
3. Keep responsive behavior intact at the 320px floor.
4. Update documentation when behavior changes.
5. Use small commits and a pull request.

## Contact and identity

Edit `assets/js/config.js`:

- name/tagline/brand line,
- email and phone,
- LinkedIn,
- location,
- CV path,
- navigation.

If structured profile facts change, also review the JSON-LD in `index.html`.

## CV

Replace the file at the stable path:

`assets/cv/vicent-manila-cv.pdf`

Keeping the stable path prevents download links and case-study evidence links from breaking.

## Professional content

Edit `assets/js/data.js` for:

- hero/about,
- expertise,
- experience,
- impact metrics,
- projects,
- speaking,
- external resources,
- appendix records.

Record new factual claims in [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md).

## Projects

Each project should provide:

- unique slug,
- category,
- summary,
- full case-study narrative,
- evidence/resources where available,
- image and focal position,
- gallery,
- related work.

Test with:

`project.html?slug=your-slug`

## Gallery

Add optimized media and update `assets/js/gallery-data.js`.

Provide:
- alt text,
- category,
- title,
- caption,
- dimensions when known,
- thumbnail when appropriate.

## Styling

Current visual work belongs in `assets/css/design-system.css`.

Do not add new component logic to `executive.css`; it is a legacy compatibility layer.

## Responsive maintenance

When modifying layout:

1. update CSS,
2. run `npm run validate`,
3. run `npm run test:responsive`,
4. manually inspect at least 320, 375, 430, 768 and 900px,
5. update [MOBILE_QA_MATRIX.md](./MOBILE_QA_MATRIX.md) if the contract changes.

## Version bump

For user-visible releases:

1. update `VM.version`,
2. update `?v=` in every HTML shell,
3. update [CHANGELOG.md](./CHANGELOG.md),
4. keep documentation headers aligned.

## Deploy

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).
