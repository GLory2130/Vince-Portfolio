# Site-wide Revision — September 2026

**Status:** implementation plan and audit record  
**Scope:** all public routes, shared layout, responsive behavior, repository engineering and documentation.

## Objectives

This revision hardens the portfolio as a complete responsive product rather than a collection of individually styled pages.

Primary goals:

1. Make every public route comfortable to use from 320px phones through large desktop displays.
2. Remove layout assumptions inherited from the legacy `executive.css` layer.
3. Standardize mobile spacing, typography, action groups, filters, galleries and lightboxes.
4. Keep the evidence-first editorial design intact.
5. Improve repository maintainability with CI, validation scripts and current documentation.
6. Preserve the current content model and verified professional record.

## Public routes in scope

| Route | Renderer | Mobile priority |
|---|---|---|
| `index.html` | `renderHome` | hero, selected work, publications, profile, expertise, metrics, chronology, contact |
| `leadership.html` | `renderLeadership` | long chronology, impact metrics, international footprint |
| `projects.html` | `renderProjects` | filters, case-study cards, long titles |
| `project.html?slug=...` | `renderProject` | hero overlay, evidence links, gallery, impact list, related projects |
| `gallery.html` | `renderGallery` | filter controls, masonry, captions, lightbox |
| `speaking.html` | `renderSpeaking` | hero, featured event, topics, engagements, image grid, booking actions |
| `appendix.html` | `renderAppendix` | document rows, long titles, download actions |

## Responsive design decisions

### 320–599px
- One-column composition by default.
- Compact section rhythm and page gutters.
- Full-width primary/secondary actions inside grouped CTA regions.
- Horizontally scrollable filter rows instead of cramped wrapping.
- Tighter editorial type scale.
- Project/lightbox controls remain inside the dynamic viewport.
- Footer navigation becomes a readable vertical grid.

### 600–899px
- Tablet spacing expands without activating desktop navigation.
- Two-column image grids may appear where content length permits.
- Navigation remains the mobile drawer until 900px.

### 900px+
- Existing editorial desktop layout remains the baseline.
- Desktop navigation activates at the single documented 900px breakpoint.

## Architecture constraints

The site remains vanilla HTML/CSS/JavaScript with no build step. The authoritative CSS continues to be `design-system.css`, loaded after the legacy `executive.css` layer.

Legacy CSS is not expanded further. New fixes belong in the design system so the migration path remains one-directional.

## Verification

See `MOBILE_QA_MATRIX.md` for the route-by-route acceptance matrix.

Repository CI validates:
- JavaScript syntax,
- required HTML shell metadata,
- asset/version consistency,
- referenced local files,
- route registration,
- responsive viewport metadata.

Visual mobile review is still required for layout quality; static CI cannot replace a real browser pass.
