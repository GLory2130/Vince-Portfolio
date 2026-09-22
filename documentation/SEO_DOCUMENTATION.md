# SEO Documentation

**Status:** current for v5.4.0

## Current implementation

| Capability | Status |
|---|---|
| Unique page titles | yes |
| Meta descriptions | yes |
| Canonical links | yes on all route shells |
| Open Graph title/description/url/type/image | yes on all route shells |
| Twitter summary-large-image metadata | yes on all route shells |
| JSON-LD Person | homepage |
| Web manifest | yes |
| robots.txt | yes, linked to production sitemap |
| sitemap.xml | yes |

The current production base URL is `https://vince-portfolio-xi.vercel.app/`.

## Social metadata

Every route shell publishes:

- `og:title`
- `og:description`
- `og:url`
- `og:type=website`
- `og:image`
- `twitter:card=summary_large_image`
- `twitter:title`
- `twitter:description`
- `twitter:image`

The shared social image is `assets/images/Vince/web/og.jpg`.

## Project detail route

`project.html` updates `document.title` after resolving `?slug=`.

The shell-level canonical and social metadata remain generic for the project route because the static HTML head is shared across slugs. Slug-specific canonical/OG rendering would require pre-generated project shells or a server/build step.

## robots.txt and sitemap

`robots.txt` points to the production sitemap.

`sitemap.xml` lists all top-level public routes and current published case-study slug URLs.

When adding/removing a project, update the sitemap.

## Structured data

The homepage includes a `Person` JSON-LD record with current role, employer, location, education and LinkedIn.

Do not add unsupported awards, credentials or organization relationships.

## Image SEO

- meaningful alt text is required,
- a dedicated local OG image is used for social previews,
- gallery grids prefer thumbnails,
- production image filenames should be descriptive where practical.

## Future SEO work

- generate slug-specific project head metadata if a build/pre-render step is ever introduced,
- consider self-hosting fonts if page-performance measurements justify it.
