---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Radio group

## When to use it

For exactly one choice out of several, where showing all the options at once is part of the point—the person should be able to compare them. Two to five options is the range I trust it in; past that the list becomes scanning work and a select is kinder.

Not this: independent choices that do not exclude each other are checkboxes. A binary setting that applies immediately is a switch. Switching a view or a mode from a toolbar is a toggle group.

## Sources

Circle size from the workhorse icon size; label pairing from the icon-and-text pairing; touch target from the control-sizes minimum; border and fill colors shared with the input and checkbox specs; selected fill from the highlight scaffold; group label weight from font-weight roles; the gap between the group label and its options from the headings principle. The methods do not yet document a radio, so the dot size and the gaps are a first pass.

## Dimensions

- Circle: **20**, radius full. Same footprint as the checkbox—shape carries the meaning, and one control set means one size.
- Dot: **8** from the spacing ladder, centered. First pass.
- Label: **16** at regular, gap **8** from the circle. Options stack **12** apart. First pass.
- Group label above the options at medium, **8** below it—closer to the options it governs than the **24** that separates the group from whatever follows. First pass.
- On touch the target extends to **44** and covers the label as well as the circle.

## Color

- Unselected: gray-0 fill, 1px gray-300 border.
- Selected: highlight fill (scaffold: blue 500), no border, white dot.

Checkbox and radio share their color treatment exactly. If a person has to look twice to tell whether a set is exclusive, the shape has failed and no amount of color will rescue it.

## States

- **Press** — scale to 0.9.
- **Hover** (pointer only) — border one step to gray-400 unselected, fill one step to blue 600 selected. First pass.
- **Focus-visible** — 2px highlight outline, offset 2, on the option the group's roving focus lands on.
- **Disabled** — 40% opacity across the whole group when the group is disabled; a single dead option among live ones needs a reason.
