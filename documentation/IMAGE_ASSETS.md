# Image Assets

**Status:** current for v5.4.0

## Source hierarchy

| Path | Purpose |
|---|---|
| `assets/images/Vince/` | source portraits |
| `assets/images/Vince/gallery/` | full gallery sources |
| `assets/images/Vince/gallery/thumbs/` | gallery thumbnails |
| `assets/images/Vince/web/` | web-optimized primary imagery |
| `assets/images/Vince/web/gallery/` | optimized event/team imagery |
| `assets/images/Vince/web/events/` | named event-specific production assets |

Central primary image paths live in `VM.images` in `assets/js/config.js`.

## Current event asset

The Men's Circle portfolio presentation intentionally publishes only:

`assets/images/Vince/web/events/mens-circle-2026/mens-circle-vicent-manila-host.jpg`

Guest/group artwork is not part of the live portfolio.

## Naming

Use descriptive lowercase kebab-case for new production assets.

Avoid WhatsApp/camera-export filenames in final production paths.

## Guidance

| Use | Guidance |
|---|---|
| hero/portrait | long edge ≥1200px where possible |
| project/editorial image | ≥1200px wide for landscape use |
| gallery full | ≥1600px long edge where practical |
| gallery thumb | ~400–800px |
| icons/favicons | use the existing dedicated dimensions |

## Cropping

Portrait and project focal points use `object-position` / `imagePosition`.

Primary portraits intentionally crop above distracting wrist accessories.

Always verify:
- face visibility,
- 320px mobile crop,
- desktop crop,
- aspect-ratio transitions.

## Optimization

- JPEG for photographs,
- PNG for logo/icons,
- lazy-load below-fold images,
- use thumbnails for gallery grids,
- keep full-resolution images for lightbox only.

WebP/AVIF generation is not yet automated.

## CV

Stable public path:

`assets/cv/vicent-manila-cv.pdf`

Replace the binary at the same path so existing download/evidence links stay valid.
