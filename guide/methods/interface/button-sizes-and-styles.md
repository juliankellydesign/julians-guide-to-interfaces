---
type: method
tags: [interface]
prompt: opt-in
scaffold: true
---

# Size and style buttons with t-shirt sizes

## In brief

Use five button sizes—`24`, `32`, `40`, `48`, `56`—named XS, S, M, L, and XL, and three styles: Primary, Secondary, and Tertiary. The ranges are deliberately finite, and the naming is the alarm system: needing a size outside the t-shirt range, or a Quaternary style, is the system telling you it has too many variants.

This scaffold is newer than the others and still settling; expect its values to keep moving.

## The sizes

| Name | Height |
| --- | ---: |
| XS | `24px` |
| S | `32px` |
| M | `40px` |
| L | `48px` |
| XL | `56px` |

T-shirt sizes are useful shorthand for two reasons. The vocabulary is finite—if I need to add sizes outside that range, I know I've got too many. And names decouple the reference from the value: we don't refer to sizes by their numeric value, so the values can change underneath. A spec that says M doesn't break when M's height nudges. All five heights land on the spacing ladder, so buttons share their rhythm with the rest of the layout.

## The styles

| Style | Treatment | Communicates |
| --- | --- | --- |
| Primary | Highlight color | The main action |
| Secondary | Gray | Supporting actions |
| Tertiary | Outlined, or just text | Low-emphasis actions |

If I have to add Quaternary, I usually know I'm too far out in the woods. The three styles map onto the action hierarchy: one primary action per surface, secondary actions as needed, tertiary for everything that should recede.

## Nudge the values on web and desktop

The five roles are the invariant; the exact heights are not. On web and desktop I often nudge the sizes around to fit the screen better—a denser layout or a wider viewport can pull a role a few pixels off its scaffold value. The mouse base heights in [`control-sizes.md`](control-sizes.md), `24` and `28`, are an example: `28` is a nudged consumer base living inside the same role structure, not a sixth size.

A nudge adjusts a role's value; it does not add a role. The alarm still fires on new names, not new numbers.

## Choosing within the scaffold

Choose a size by input method and density: the smaller sizes suit dense mouse interfaces, and touch needs its target minimums even when the visible control is smaller. See [`control-sizes.md`](control-sizes.md) for the input-method starting points.

These values are a scaffold. A design system slotted in alongside the guide overrules them; keep the finite-range discipline even when the numbers change.

## Working rules

- Use the five t-shirt sizes; treat a needed sixth size as a signal to consolidate.
- Nudge a role's height on web and desktop to fit the screen; a nudge changes a value, never adds a role.
- Refer to sizes by name, never by numeric value, so the values stay free to change.
- Use Primary, Secondary, and Tertiary; treat a needed Quaternary the same way.
- Keep one Primary action per surface, consistent with the action hierarchy.
- Choose sizes within the range by input method and density.
- Preserve an existing interface's button system unless replacing it is part of the task.
