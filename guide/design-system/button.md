---
type: component-spec
prompt: opt-in
scaffold: true
---

# Button

## When to use it

For a discrete action the person takes—submit, save, continue, send, and their kin. Style ranks the action: one primary per surface, secondary for the rest, tertiary or text-only when the action should recede. If the element's job is entering content rather than acting on it, it is an input, not a button.

## Sources

Sizes and styles from the button scaffold; padding pattern from control padding; icon pairings from icon sizes; press from the press scale; label weight from font-weight roles.

## Sizes

Five heights, referred to by name: XS 24, S 32, M 40, L 48, XL 56. M is the default. On web and desktop the values nudge per screen; a nudge changes a value, never adds a role.

| Size | Height | Padding-x | Label | Icon |
| --- | --- | --- | --- | --- |
| XS | 24 | 8 | 14 | 16 |
| S | 32 | 12 | 14 | 16 |
| M | 40 | 16 | 16 | 20 |
| L | 48 | 20 | 16 | 20 |
| XL | 56 | 24 | 17 | 20 |

Padding-x values sit on the spacing ladder and follow the control-padding pattern (more horizontal than vertical; text-only shown). They are a first pass. Label sizes follow the documented 20-icon-with-16-text pairing; the 14/16 pairing at XS and S is a first-pass extrapolation down the icon taper.

## Styles

Three styles, one primary per surface:

- **Primary** — highlight color fill (scaffold: blue 500, `oklch(0.634 0.16 250)`), white label at semibold (reversed-label minimum).
- **Secondary** — gray-100 fill, gray-900 label at medium.
- **Tertiary** — no fill: 1px gray-300 outline or text only, gray-900 label at medium.

Needing a Quaternary style means too many styles.

## Shape

Corner radius 10 from the radius ladder, one value across all sizes so buttons share keylines; a pill variant (radius full) is allowed. First pass.

## States

- **Press** — scale to 0.9, immediate per platform timing. Every button gets it.
- **Hover** (pointer input only) — one step along the scale: primary to blue 600, secondary to gray-200, tertiary gains gray-50 fill. First pass.
- **Focus-visible** — 2px highlight-color outline, offset 2. First pass; an accessibility floor, not a decoration.
- **Disabled** — 40% opacity, no press state. First pass.
