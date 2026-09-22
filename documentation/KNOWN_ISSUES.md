# Known Issues

**Status:** current as of v5.4.0

## Open

### Legacy `executive.css` still ships

The legacy stylesheet contains a large amount of superseded styling and historical `!important` rules. `design-system.css` loads afterwards and is authoritative.

New work must not extend the legacy layer. Retirement should happen through measured extraction and regression testing.

### Large appendix PDFs remain in Git history

The evidence PDFs are intentional downloads and do not affect initial page load, but they increase repository clone size.

### Google Fonts remain third-party

Fonts are loaded from Google with `display=swap`. Self-hosting would remove this remaining typography dependency.

### Manual screen-reader verification remains outstanding

Keyboard/focus/ARIA behavior is covered programmatically, but no full NVDA/JAWS/VoiceOver review has been documented.

## Resolved in v5.4.0

| Issue | Resolution |
|---|---|
| Lucide used `@latest` | pinned to 0.468.0 |
| Mobile body scroll could leak behind drawer | explicit fixed-body scroll lock with restoration |
| Orientation / dynamic viewport changes could desync mobile header | resize, orientation and `visualViewport` hooks added |
| Responsive behavior depended heavily on legacy CSS | authoritative site-wide and page-specific contracts added to `design-system.css` |
| Responsive checks were manual only | Playwright route/viewport smoke suite added |
| PR validation did not verify page shells/assets | static validator + GitHub Actions CI added |

## Historical resolved issues

- unclickable navbar from inherited `pointer-events: none`,
- unfixed header,
- drawer focus timing failure,
- mismatched 900/1024 navigation breakpoints,
- undersized filter/tertiary targets,
- dead first-load hash links,
- missing CV path,
- stale LinkedIn URL,
- unverifiable testimonials/media.
