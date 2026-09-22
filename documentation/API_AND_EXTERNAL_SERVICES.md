# API and External Services

**Status:** current for v5.4.0

The portfolio has no first-party HTTP API. External integrations are public links and CDN-hosted assets.

## Contact channels

Configured in `assets/js/config.js`.

| Channel | Endpoint |
|---|---|
| WhatsApp | `https://wa.me/255713582606` |
| Phone | `tel:+255713582606` |
| Email | `mailto:manilavicent@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/vicent-manila` |

## Runtime third parties

| Service | Purpose | Treatment |
|---|---|---|
| Google Fonts | Source Serif 4 + Plus Jakarta Sans | preconnect + display swap |
| Lucide 0.468.0 | icons | version pinned; deferred |

Tailwind CDN is not used.

## External editorial links

Verified external resources live in `VM.data.externalResources`. Current examples include:

- Full Shangwe coverage of the Barrick/UDOM university conference.
- Mzumbe University Career Fair Instagram post.
- Men's Circle event page.

External links opened in a new tab use `rel="noopener noreferrer"`.

## Analytics and storage

No analytics package is installed.

The site ships a single light theme and does not store a theme preference in local storage.

## Hosting

Static hosting only. No server-side API keys or runtime secrets are required.
