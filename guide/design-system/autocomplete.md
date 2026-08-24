---
type: component-spec
prompt: opt-in
scaffold: true
---

# Autocomplete

## When to use it

For free text where the person's own words are a valid answer and the list is only help—tags, labels, a street address, a search box that remembers. The person can always ignore every suggestion and submit what they typed. That is the whole distinction: an autocomplete assists typing, it does not constrain it.

Not this: if the value must come from the list, use a combobox—suggesting an answer you will then reject is a trap. If the set is short and fixed, use a select. If nothing useful can be suggested, use a plain input; a suggestion popup that is empty most of the time is a promise the interface cannot keep.

## Sources

Field heights, padding, text sizes, border, and focus from the input spec; radius 10 from the shared control decision; popup geometry, shadow, item sizing, matched-text weight, and hover from the select and combobox specs. The methods do not yet document a popup surface, so those values are a first pass.

## Field

A plain input, spec unchanged: S 32 / M 40 / L 48, padding-x 12 / 16 / 20, text 14 / 16 / 16, 1px gray-300 border, gray-0 fill, radius 10. M is the default.

No chevron. A select or combobox has a closed list behind it and the chevron says so; here there is nothing to open, only something that may appear. The field should look exactly like an input, because that is what it is.

## Popup

The select popup, unchanged: matched to the field's width, offset 4 below it, padding 4, radius 12, items at radius 8 (12 − 4, per the nested-radius formula), gray-0 fill, 1px gray-200 border, and the modal's `0 12px 32px` black at 14%. Items take the field's height and text size, padding-x 8. Matched substrings render at semibold within an otherwise regular label.

Three differences from the combobox, all of them consequences of the value being free:

- **No check marks.** Nothing is selected; a suggestion is accepted by taking it, and the field then shows it.
- **No empty state.** When nothing matches, the popup closes. There is no failure here—what the person typed is already a valid answer.
- **Nothing is highlighted on open.** The first item is not preselected. Preselecting means Enter would overwrite what the person typed, which is the one thing this component must never do.

## States

- **Focus** — border and 2px outline in the highlight color, offset 0, hugging the field.
- **Hover** (pointer only) — border to gray-400; items to a gray-100 fill, matching the keyboard-highlighted item.
- **Disabled** — gray-50 fill, 40% opacity content, no interaction.
