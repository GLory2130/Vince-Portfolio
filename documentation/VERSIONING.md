# Versioning

**Current version:** `5.4.0`

The canonical runtime version is `VM.version` in `assets/js/config.js`.

## Semantic versioning

| Increment | Use |
|---|---|
| MAJOR | incompatible architecture or major information-architecture redesign |
| MINOR | significant UX revision, new feature set, new route or responsive system upgrade |
| PATCH | bug fix, copy correction, asset swap or small style change |

## Asset cache version

Every HTML shell carries `?v=X.Y.Z` on local CSS and JavaScript references.

The shell version and `VM.version` must match. The static validator fails when they diverge.

## Release checklist

1. Update `VM.version`.
2. Update all shell `?v=` references.
3. Update `CHANGELOG.md`.
4. Update versioned documentation headers when relevant.
5. Run `npm run validate`.
6. Run `npm run test:responsive`.
7. Merge through PR.
8. Tag `vX.Y.Z` when a GitHub Release is required.

The release workflow creates a GitHub Release for pushed tags matching `v*`.
