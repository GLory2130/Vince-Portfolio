# Design System

> **The source of truth is [`../DESIGN.md`](../DESIGN.md).**
> It defines tokens, typography, geometry, photography, motion, accessibility and the do/don't rules.

This file exists to point there and to record where the system lives in code.

---

## Where it lives

| File | Role |
|---|---|
| [`../DESIGN.md`](../DESIGN.md) | The system — decisions and rationale |
| [`DESIGN_REFERENCE_ANALYSIS.md`](./DESIGN_REFERENCE_ANALYSIS.md) | The research it derives from, and what was rejected |
| `assets/css/design-system.css` | The implementation |
| [`COMPONENT_DOCUMENTATION.md`](./COMPONENT_DOCUMENTATION.md) | Component inventory |
| [`NAVIGATION.md`](./NAVIGATION.md) | Navigation, in depth |

---

## The short version

**A warm paper canvas, near-square geometry, and a disciplined serif/sans split — where the photography and the evidence carry the authority, and the gold is spent rarely enough to still mean something.**

Five rules that break the design if ignored:

1. **Serif for narrative, sans for structure.** Section headings are sans by default.
2. **Radius never exceeds 8px.** Editorial imagery is square.
3. **One shadow**, on photographs only.
4. **Gold is scarce** — at most two appearances per viewport, and `--vm-accent-text` whenever it carries words.
5. **Never a raw hex value in a component.** Use the tokens.

---

## Note

An earlier version of this file described `executive.css` and an inline Tailwind config as the source of truth. Both are superseded: Tailwind was removed, and `executive.css` is legacy retained only because deleting it wholesale is riskier than overriding it.
