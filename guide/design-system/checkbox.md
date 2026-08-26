---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Checkbox

## When to use it

For a choice the person can make independently of its neighbors: selecting several items from a list, agreeing to a term, marking rows for a bulk action. Also for a binary choice inside a form that is submitted later—the checkbox states an intent, the submit acts on it.

Not this: a setting that takes effect the moment it is touched is a switch. One-of-several is a radio group. A control that stays pressed while it holds a mode—usually in a toolbar—is a toggle.

## Sources

Box size from the workhorse icon size; label pairing from the icon-and-text pairing; touch target from the control-sizes minimum; border and fill colors shared with the input spec; checked fill from the highlight scaffold; weights from font-weight roles; press, focus, and disabled from the button spec's states. The methods do not yet document a checkbox, so the box radius, the internal marks, and the gaps are a first pass.

## Dimensions

- Box: **20**, the workhorse icon size, so it aligns with icons and 16 text on the same keylines.
- Radius **4** from the ladder. A 20px square takes far less rounding than a 40px control; the 10 used for buttons and inputs would read as a lozenge at this size. First pass.
- Label: **16** at regular, the documented pairing for a 20 mark. Gap **8** between box and label. First pass.
- Stacked options sit **12** apart. First pass.
- On touch the interactive target extends to **44**; the visible box stays 20.

## Color

- Unchecked: gray-0 fill, 1px gray-300 border—the same pair the input uses, so fields and checkboxes read as one family.
- Checked: highlight fill (scaffold: blue 500), no border, white checkmark drawn to **16** inside the box—the same 20-holds-16 inset as the switch thumb.
- Indeterminate: same highlight fill, a white bar **10 × 2**, radius full. First pass. Use it only for a parent whose children are partly selected.

## States

- **Press** — scale to 0.9, the standard press default.
- **Hover** (pointer only) — border one step to gray-400 unchecked, fill one step to blue 600 checked. First pass.
- **Focus-visible** — 2px highlight outline, offset 2.
- **Disabled** — 40% opacity, no press state. The label dims with the box; a live label above a dead control is a lie.
