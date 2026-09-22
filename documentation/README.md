# Vicent Manila — Portfolio

**Status:** current as of v5.4.0

A static executive portfolio for Vicent Manila. The current product direction emphasizes evidence-backed management consulting, research and evaluation, strategic partnerships and organizational leadership.

## Runtime

The deployed site uses:

- vanilla HTML,
- vanilla JavaScript,
- hand-written CSS,
- Source Serif 4 + Plus Jakarta Sans,
- pinned Lucide icons,
- static hosting.

There is no production build step.

## Development QA

Node/npm are used only for repository validation and responsive browser testing.

```bash
npm install
npm run validate
npm run test:responsive
```

## Public routes

`index` · `leadership` · `projects` · `project?slug=` · `gallery` · `speaking` · `appendix`

## Product rules

1. **Never publish a professional claim that cannot be sourced.**  
   Use [CONTENT_VERIFICATION.md](./CONTENT_VERIFICATION.md) and [CONTENT_NEEDS_VERIFICATION.md](./CONTENT_NEEDS_VERIFICATION.md).

2. **The design system is authoritative.**  
   [`../DESIGN.md`](../DESIGN.md) defines the visual language. Current CSS implementation lives in `assets/css/design-system.css`.

3. **Mobile is a designed state, not a fallback.**  
   Every public route must pass the responsive matrix in [MOBILE_QA_MATRIX.md](./MOBILE_QA_MATRIX.md).

4. **Small commits, feature branches, PR at the end.**  
   See [CONTRIBUTING.md](./CONTRIBUTING.md) and [`../AGENTS.md`](../AGENTS.md).

## Before merge

- no horizontal overflow at 320px,
- all grouped CTAs usable by touch,
- 44px interactive targets,
- mobile drawer keyboard/touch behavior verified,
- responsive browser suite passes,
- static validator passes,
- asset version matches `VM.version`,
- documentation updated for behavior changes.

## Documentation map

Start with [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md).
