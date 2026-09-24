# Image Assets

**Status:** current for v5.5.1

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

## Independent case-study photography

The production case-study folder is `assets/images/case-studies/`. Images were
reused from the owner's 23 September 2026 branch contribution and given stable
lowercase filenames rather than leaving dated WhatsApp export names in markup.

- `innovex-consulting.jpeg` — one INNOVEX photograph (the two uploaded originals were identical).
- `mo-dewji-livelihoods-01.jpeg` through `-07.jpeg` — a curated sample from the owner's Mo Dewji Foundation folder; image 01 is the case-study hero, images 02–07 are the detail gallery.

Photo descriptions remain general unless an owner-approved caption identifies
the exact event and participants. See [CASE_STUDIES_2026-09.md](./CASE_STUDIES_2026-09.md).

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

For portrait-oriented photographs displayed inside landscape cards, set the focal point to `top` when the subject's face sits in the upper half of the source. Do not rely on the default centered crop: it can remove the face when `object-fit: cover` adapts a portrait image to 3:2, 16:10 or similar editorial frames.

Primary portraits intentionally crop above distracting wrist accessories.

Always verify:
- full face visibility before decorative/background content,
- 320px mobile crop,
- desktop crop,
- aspect-ratio transitions.

### Face-safe editorial photography

The Barrick article photograph (`assets/images/Vince/web/gallery/event-11.jpg`)
and the Mo Dewji Foundation case-study hero
(`assets/images/case-studies/mo-dewji-livelihoods-01.jpeg`) were being
center-cropped into wide containers, cutting off Vicent's face. They now use
explicit `imageFraming: 'portrait'` and `imagePosition: 'top'` in
`assets/js/data.js`. The Rwanda leadership feature uses the same portrait
framing.

The renderers in `assets/js/pages.js` assign
`.vm-feature--portrait` / `.vm-publication--portrait` only to
portrait-marked records; `assets/css/design-system.css` gives those records
taller frames (5:4 features, 4:3 publications, and 4:5 on phones). Profile
thumbnails inherit their parent case-study focal point. Landscape images
retain their original layout. The original photographs are unchanged.

For future photographs, review the complete original first, choose an
appropriate framing marker, set an explicit focal point and visually check
320px, 375px, tablet and desktop crops. Never fix an editorial crop by
distorting the image aspect ratio. Existing detailed gallery lightboxes retain
the full originals.

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
