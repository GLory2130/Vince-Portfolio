# Contributing

**Status:** current for v5.4.0

## Workflow

1. Branch from the latest `main`.
2. Use a focused branch name such as `feature/...`, `fix/...`, `content/...` or `chore/...`.
3. Make small, coherent commits.
4. Keep all professional claims source-backed.
5. Run validation.
6. Push and open a pull request.
7. Do not auto-merge.

## Commit style

Use concise imperative subjects:

```text
fix: prevent project hero clipping on small phones
feat: add verified external resource
docs: refresh responsive QA matrix
ci: validate portfolio when pull requests open
```

Do not add AI/tool attribution or co-author lines.

## Frontend rules

- Edit content in `data.js` / `gallery-data.js` rather than duplicating claims in templates.
- New visual rules belong in `design-system.css`, not the legacy `executive.css`.
- Maintain the 900px navigation breakpoint.
- Maintain 44px interactive targets.
- Respect `prefers-reduced-motion`.
- Provide accessible names for icon-only controls.
- Keep every layout usable at 320px.

## Required responsive checks

Automated:

```bash
npm install
npm run validate
npm run test:responsive
```

Manual:

- 320px phone,
- 375px phone,
- 430px phone,
- 768px tablet,
- 900px navigation transition,
- one desktop width,
- mobile menu,
- project and gallery lightboxes.

See [MOBILE_QA_MATRIX.md](./MOBILE_QA_MATRIX.md).

## Pull requests

PR descriptions should include:

- implementation summary,
- responsive impact,
- validation results,
- Vercel preview,
- documentation changes,
- known exceptions.

## Images

- prefer web-optimized assets,
- use descriptive production filenames,
- provide alt text,
- verify portrait focal points,
- do not hotlink third-party imagery when a local portfolio asset is available.

## Content

Before publishing a role, metric, testimonial, external article or case-study claim, record its source in [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md).
