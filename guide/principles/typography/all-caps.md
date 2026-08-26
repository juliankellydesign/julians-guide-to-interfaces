---
type: principle
tags: [typography]
---

# Use all caps for compact legibility

## In brief

I use all caps when text must remain legible at a size where sentence case no longer works. It is a functional response to limited space, not a stylistic choice.

## Use all caps when space limits legibility

All caps is useful for small labels that must communicate within a constrained area. Common uses include:

- Labels in diagrams
- Controls that need to fit substantial text into a small space
- Unit or abbreviated time labels, including `AM` and `PM`

Use sentence case when it remains readable at the available size. Do not introduce all caps merely to make a label look different.

## Let the brand provide a reason

I do not use all caps as a stylistic choice unless the brand specifically calls for it. In that case, the capitalization communicates the brand’s established voice rather than arbitrary visual variation.

## Increase letter spacing

Increase letter spacing when setting text in all caps. The added space should keep the uppercase forms readable at the intended size and in the actual interface.

When constructing a type system, begin with the size-dependent curve in [`../methods/typography/tracking-curve.md`](../../methods/typography/tracking-curve.md). Shift the curve’s base amount to suit the font. All-caps text should receive a more open value than the equivalent sentence-case text.

I use one flat additional amount for all caps after calculating the size-dependent curve. The exact default belongs to the tracking method. Adjust it manually when the font’s uppercase forms need a different result.

The curve opens smaller text and tightens larger text relative to the base size. Its taper keeps sizes far from the base from becoming excessively loose or tight.

The calculated value remains a starting point. The appropriate amount depends on the typeface, text size, rendering, and available space. Judge the rendered label optically after applying it.

## Working rules

- Use all caps when constrained size makes sentence case difficult to read.
- Prefer sentence case when it remains legible.
- Use all caps for compact diagram labels, dense control labels, and appropriate unit or time abbreviations.
- Do not use all caps for style alone unless the brand provides a specific reason.
- Increase letter spacing whenever text is set in all caps.
- Shift the calculated tracking curve to suit the font and capitalization.
- Apply the all-caps adjustment consistently, then correct individual roles when needed.
- Adjust the result optically.
