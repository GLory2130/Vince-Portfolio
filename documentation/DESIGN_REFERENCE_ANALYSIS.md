# Design Reference Analysis

_Source library: `C:\xampp\htdocs\awesome-design-md\design-md\<brand>\DESIGN.md` (read-only reference; not modified)_

Seven systems inspected. Four were mandated; three additional were evaluated, of which two were rejected.
Each entry records what was **used** and what was **rejected**, with the reason.

---

## APPLE — reference for restraint and photographic primacy

**USED**

- **Photography-first presentation; UI recedes.** This portfolio's greatest untapped asset is a large body of real professional photography. Apple's core lesson — the wall disappears so the artifact takes over — maps directly.
- **Colour change as the section divider.** Apple separates sections with the surface switch itself, using no borders or decorative frames. This lets us delete a large volume of card chrome.
- **Exactly one elevation.** Apple defines a single drop-shadow in the entire system, used only where a photographic subject needs to sit on a surface. We adopt the same discipline.
- **Negative tracking at display sizes.** The "confident but quiet" headline feel comes from tracking, not from weight.

**REJECTED**

- **One-viewport-per-tile pacing.** Apple sells one object at a time. An executive portfolio must let a recruiter scan a career in seconds; enormous empty tiles would obstruct that.
- **Consumer product-launch minimalism.** Apple's near-zero information density would strip out the credibility evidence that is the entire point of this site.
- **The single-blue-accent model.** Correct in principle, but Vicent's gold is a prestige accent, not an interactive-affordance colour. We keep gold scarce but do not make it the click signal.

---

## WIRED — reference for editorial architecture

**USED**

- **"Serif for narrative, sans for structure."** The single most valuable rule extracted from the whole library. It resolves this site's biggest typographic failure — serif applied indiscriminately to every heading. Formalised as a hard rule in `DESIGN.md`.
- **Square geometry.** WIRED uses zero corner radius across the entire UI. Editorial authority reads as sharp, not soft. This directly motivates collapsing the current 18px/26px radii.
- **Hairline dividers instead of cards.** WIRED's story rows are separated by 1px rules, not enclosed in rounded rectangles. This is the primary mechanism for the card-reduction mandate.
- **Display weight 400.** Elegance from letterform proportion, not from weight 700. Applied to Source Serif 4.
- **Eyebrow and byline metadata set in sans with tracking.** Structure without decoration.

**REJECTED**

- **Pure black-and-white duet.** Vicent has an established and appropriate navy-and-gold identity. Discarding it for monochrome would be redesign for its own sake.
- **Magazine story-grid density.** WIRED optimises for many competing headlines. A portfolio has one subject; that density would fragment the narrative.
- **Masthead type at 64–107px and loud graphic treatment.** Inappropriate for this audience.

---

## IBM — reference for structure and institutional credibility

**USED**

- **Light-weight display type.** IBM sets 42–76px headlines at weight **300**, making large type feel calm rather than shouty. This is the antidote to the generic oversized startup heading, and is adopted for the display scale.
- **Square corners, 1px borders, zero shadows.** Hierarchy from surface change and hairlines. Reinforces the WIRED finding from an entirely different sector — a strong signal.
- **Positive letter-spacing on small body text** (0.16px) as a precision detail that reads as careful and trustworthy.
- **Structured grid discipline** for the career chronology and the expertise index.

**REJECTED**

- **Enterprise documentation density.** IBM's utility bars, comparison tables and feature-card grids would make the portfolio read as a product catalogue.
- **Single-family type system.** IBM carries everything on Plex Sans. Vicent's serif and sans pairing is a genuine asset and supplies the editorial voice IBM deliberately forgoes.

---

## MASTERCARD — reference for warmth and international-business confidence

**USED**

- **The warm canvas.** Mastercard replaces white with a putty-cream `#F3F0EE` that "feels like the paper of a premium annual report." This is the key insight for this site: the current `--canvas: #F8FAFC` is a *cool blue-grey* — a SaaS tint that fights the navy-and-gold identity and reads as generic. Moving to a warm paper canvas is one of the highest-leverage changes in this redesign.
- **Warm near-black instead of jet-black ink.** Mastercard's `#141413` pulls toward the canvas so it never feels printed-on. The same principle is applied to our navy ink.
- **Eyebrow labels with uppercase tracking** as the section-category signal.
- **Institutional and editorial tension held simultaneously** — precisely Vicent's positioning.

**REJECTED**

- **The oversized-radius language.** 40px heroes, 99px pills, circular portrait masks. Brand-specific geometry, explicitly out of bounds, and diametrically opposed to the editorial squareness that WIRED and IBM both converge on.
- **Orbital arcs and satellite micro-CTAs.** Distinctive to Mastercard; would read as decorative gimmickry here.
- **Signal orange.** Vicent has gold.

---

## CLAUDE — additional reference, SELECTED: intellectual warmth

Chosen because the Executive Profile and Leadership Philosophy sections need a *literary* register that none of the four mandated references supply.

**USED**

- **Warm tinted canvas with warm dark ink** — independently corroborates the Mastercard finding. Two unrelated brands both reject cool white; that is a strong convergent signal.
- **Serif display at weight 400 with negative letter-spacing, paired with a humanist sans body** — described in its own analysis as feeling "like a literary publication, not a SaaS marketing page." This is the exact target register for the Leadership Philosophy section.
- **Surface-mode alternation as pacing rhythm** rather than uniform section padding.

**REJECTED**

- **Coral accent** — Vicent has gold.
- **Product-chrome dark cards** (code blocks, terminal panels) — no analogue here.
- **Uniform 96px section rhythm** — we deliberately want varied pacing.

---

## NOTION — additional reference, INSPECTED AND REJECTED

Evaluated on the brief's suggestion. **Rejected as a primary reference.**

Notion's actual system is illustration-rich SaaS marketing: scattered sticky-note dots, mesh-wire decorations, a signature purple pill CTA, pastel feature tiles in peach, rose, mint and lavender, and a four-tier pricing table. This is the opposite of the target register and would reintroduce exactly the anti-patterns we are removing.

**Single element retained:** 8px-radius buttons rather than pills — "sober editorial geometry." Consistent with our radius decision, but the same conclusion was reached more convincingly from WIRED and IBM.

---

## THE VERGE — additional reference, INSPECTED AND REJECTED AESTHETICALLY

**Rejected.** Acid-mint and ultraviolet hazard accents, 107px display type, saturated colour-block story tiles, 20–40px radii, no light mode. Categorically wrong for an executive audience.

**One structural idea borrowed:** the **StoryStream timeline** — a vertical feed where entries stack against a continuous vertical rule with uppercase mono timestamps on a left rail. Stripped of all Verge styling, this is a genuinely good model for the **career chronology**: a left rail carrying the period, entries hanging off a single rule, no cards. Adopted in structure only.

---

## Convergent findings

Three independent systems (WIRED, IBM, and via its button geometry Notion) arrive at **square-to-minimal corner radius** for serious editorial and institutional content. Two independent systems (Mastercard, Claude) arrive at a **warm tinted canvas over cool white**. Two (IBM, WIRED) arrive at **low display weight for large type**. Where unrelated brands converge, the finding is treated as a principle rather than a preference.

These three convergences define the redesign:

1. **Warm paper canvas**, replacing the current cool `#F8FAFC` SaaS tint.
2. **Near-square geometry**, replacing the current 18px/26px radii.
3. **Light-weight, tightly-tracked display type**, replacing weight-heavy headings.

---

## Vicent Manila design direction

Everything above resolves into one sentence:

> **A warm paper canvas, near-square geometry, and a disciplined serif/sans split — where the photography and the evidence carry the authority, and the gold is spent rarely enough to still mean something.**

The site should read as a *printed executive profile that happens to be on the web*: paper-toned, sharply set, generously spaced, and entirely free of the rounded-card, blurred-blob, icon-in-a-box vocabulary that marks a template. Authority comes from restraint and from verifiable content, never from decoration.
