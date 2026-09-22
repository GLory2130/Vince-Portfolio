# Agent & Contributor Working Agreement

This repository is a static, data-driven portfolio for Vicent Manila.

## Branching and commits

- Never implement substantial work directly on `main`.
- Use a short-lived feature branch.
- Make small, coherent commits that each leave the site in a valid state.
- Preserve Vicent/Valence's Git identity. Do not add AI or tool attribution to commits, files, PR descriptions or source comments.
- Open a pull request at the end. Do not auto-merge it.

## Content integrity

Professional claims must remain grounded in the source hierarchy documented in `documentation/CONTENT_VERIFICATION.md`.

Do not:
- invent metrics,
- infer missing dates,
- add placeholder external links,
- publish third-party private contact information.

## Responsive requirements

Every implementation must remain usable at:
`320, 360, 375, 390, 430, 768, 900, 1024, 1280, 1440, 1920px`.

P0 requirements:
- no horizontal page overflow,
- no clipped headings or CTAs,
- 44px minimum interactive target height,
- mobile navigation usable with keyboard and touch,
- images remain inside their containers,
- content order remains logical on mobile,
- lightboxes fit within the dynamic viewport.

Before opening a PR, run the validation steps in `documentation/MOBILE_QA_MATRIX.md` and the repository CI checks.
