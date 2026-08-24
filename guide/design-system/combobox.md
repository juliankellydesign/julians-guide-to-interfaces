---
type: component-spec
prompt: opt-in
scaffold: true
---

# Combobox

## When to use it

For choosing from a list that is too long to scan—typing filters it down. The answer still has to come from the list; the text field is a filter, not a value. Repository, assignee, timezone, city, product SKU. My rule of thumb: past roughly a dozen options, or any list an ordinary person cannot hold in their head, the filter stops being a nicety.

Not this: if the set is short and fixed, use a select—a text field the person never needs to type into is a field that lied about its purpose. If the person's own words are a valid answer and the list is only a suggestion, use an autocomplete. If the point is finding content rather than committing to a value, that is a search input with results, not a combobox.

## Sources

Field heights, padding, and text sizes from the input spec, which takes them from the button scaffold; radius 10 from the shared control decision; popup geometry, shadow, item sizing, and states from the select spec—one popup language, used twice. The methods do not yet document a popup surface or an inline chip, so those values are a first pass.

## Field

An input, spec unchanged: S 32 / M 40 / L 48, padding-x 12 / 16 / 20, text 14 / 16 / 16, 1px gray-300 border, gray-0 fill, radius 10. M is the default.

Text gray-1000 at regular; placeholder gray-500 and phrased as the task—"Search projects"—not as an invitation. A 20 chevron in gray-500 sits at the trailing edge, replaced by a 20 clear control once there is text to clear. Two trailing icons at once is one too many.

## Popup

Identical to the select popup and deliberately so: matched to the field's width, offset 4 below it, padding 4, radius 12, items at radius 8 (12 − 4, per the nested-radius formula), gray-0 fill, 1px gray-200 border, and the modal's `0 12px 32px` black at 14%. Items take the field's height and text size; selected items carry a 20 check.

Two additions the select does not need:

- **Matched text** — the typed substring within an item renders at semibold, the rest at regular. Weight carries it; do not also add a color.
- **Empty state** — one line of gray-500 text at the item's own size, saying what was searched and that nothing matched. An empty popup with nothing in it is a bug the person has to diagnose.

## Multiple selection

Selected values sit as chips inside the field, ahead of the caret: gray-100 fill, gray-900 label at medium, radius **6** (10 − 4 inset, the nested-radius formula), with a 16 remove control. The field grows in whole rows of its own height. First pass.

## States

- **Focus** — border and 2px outline in the highlight color, offset 0, the ring hugging the field. It is an input; it focuses like one.
- **Hover** (pointer only) — border to gray-400; items to a gray-100 fill, the same fill the keyboard-highlighted item gets.
- **Disabled** — gray-50 fill, 40% opacity content, no interaction.
