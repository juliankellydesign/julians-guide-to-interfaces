---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Toggle group

## When to use it

For several toggles that belong to one decision, arranged so the relationship is visible. Two arrangements, two jobs:

- **Cluster** — multiple toggles can be pressed at once, and grouping them says they are the same kind of control. Text alignment, formatting marks.
- **Segmented** — exactly one is pressed, and the group is a track holding the options. View switching, a time range, a density setting. The change takes effect immediately.

Not this: a one-of-several choice inside a form the person submits later is a radio group—segmented controls act at once. A single mode with no siblings is a plain toggle. If the options need more than a word or an icon each, they are not segments.

## Sources

Child sizes and radius from the button and toggle specs; the track radius and its inset from the nested-corner-radii method; padding and gaps from the spacing ladder; fills from the documented gray scale. The methods do not yet document a toggle group, so the track inset, the cluster gap, and the fills are a first pass.

## Cluster

Toggles at their own size, sitting **2** apart—close enough to read as one unit, far enough that the pressed fills do not merge. No track, no dividers. First pass.

## Segmented

A track holding the options, sized from the button ladder so the group matches the controls beside it:

| Group height | Segment height | Track inset | Segment radius |
| --- | --- | --- | --- |
| 40 | 32 | 4 | 6 |
| 48 | 40 | 4 | 6 |

- Track: gray-100 fill, radius **10**. Segment radius comes from the nested-radius formula—track radius 10 − inset 4 = **6**.
- Segment padding-x follows its height's button padding: 12 at 32, 16 at 40. Segments share a width when their labels are close in length; the group must not resize as the selection moves.
- Labels **14** at 32 and **16** at 40, medium unpressed, semibold pressed. Icon-only segments take the toggle's pairings.

## Color

- Unpressed segment: no fill, gray-700 content—the track behind it is the background.
- Pressed segment: gray-0 fill, gray-1000 content, with a small shadow. The pressed segment is the one raised out of the track; this is the physical-property use of shadow, not a theme. First pass.

## States

- **Press** — scale to 0.9 on the segment, not the track.
- **Hover** (pointer only) — unpressed segment gains a gray-200 fill; the pressed segment does not move. First pass.
- **Focus-visible** — 2px highlight outline, offset 2, on the segment the roving focus lands on.
- **Disabled** — 40% opacity across the group.
