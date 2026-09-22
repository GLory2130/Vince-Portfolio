# Security

**Status:** current for v5.4.0

## Threat model

Static public portfolio with no forms, authentication, database or server-side application code.

Primary risks are:

- unsafe HTML interpolation,
- compromised third-party CDN resources,
- accidental publication of private/source material,
- unsafe external-link behavior.

## XSS posture

Rendered content is repository-controlled, but dynamic strings are still escaped through the existing `esc()` helpers before interpolation.

If a CMS is introduced later, escaping/sanitization requirements become security-critical.

## External links

New-tab external links use `rel="noopener noreferrer"` where applicable.

## Dependencies

Runtime third parties:

- Google Fonts,
- Lucide 0.468.0.

Lucide is pinned; `@latest` is no longer used.

Development-only Playwright dependencies are not shipped to production.

## Secrets

No runtime secrets are required.

Do not commit:
- environment files,
- analytics secrets,
- private API keys,
- SMTP credentials,
- private signed agreements that are not cleared for publication.

## Deployment

- enforce HTTPS,
- prevent directory listing on hosts where relevant,
- never expose `.git`,
- keep static host/platform security settings current.

## Future hardening

A Content-Security-Policy is worth adding when the remaining CDN strategy is finalized.
