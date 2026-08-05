# Typography

## In brief

Typography should communicate hierarchy, emphasis, status, and interaction. Use size, weight, spacing, and alignment as related signals, then judge the rendered relationships optically.

## Establish hierarchy deliberately

Start from the reading context and identify the minimum number of typographic roles the interface needs. Each difference between roles should communicate a difference in meaning.

Size is one tool, not the entire hierarchy. Weight, line height, width, alignment, case, and spacing can reinforce or reduce a distinction. Avoid changing several properties when one is sufficient.

## Preserve established systems

When working in an existing interface, use its established type roles unless the task is to rebuild them. Apply the principles in this file within that system rather than replacing it with my preferred scale.

For greenfield work or an explicit type-system task, see [`../methods/typography/type-scale.md`](../methods/typography/type-scale.md).

## Weight carries meaning

A change in font weight is a change in meaning. Use it to indicate hierarchy, attention, or interaction—not to add arbitrary variety.

Start body copy and content at a regular weight. As text moves into header territory, increase the weight to strengthen its separation from the body. The shift can be as subtle as regular to medium.

Interactive elements also merit an increase in weight, whether they appear in a button or inside a block of text. The added weight communicates that the content can be acted on.

## Change weight within a line only for interactivity

I do not mix font weights inside a single heading or sentence for emphasis or decoration. A mid-line weight change divides text that should otherwise read as one unit.

The one reason I change weight mid-string is to indicate interactivity. The weight change communicates that part of the sentence behaves differently and can be acted on.

## Adapt the increase to the system

The amount of weight to add depends on the design system, brand, and typeface. Weight names are not visually consistent across fonts. Choose the smallest increase that creates the intended distinction in the rendered interface.

For my usual starting roles and button-label minimums, see [`../methods/typography/font-weight-roles.md`](../methods/typography/font-weight-roles.md).

## Spacing follows type

Spacing should respond to type size and role, then be adjusted optically. A system can produce rhythm; optical judgment corrects for glyph shape, density, and context.

Calculated letter spacing is a starting point. I often go back into individual type roles and adjust their tracking manually after seeing the font render in the interface. A manual correction is part of applying the system, not evidence that the system failed.

When type changes size responsively, its letter spacing and line height should change with it. Calculate both properties from the size that actually renders rather than assigning values only at the minimum and maximum sizes. See [`responsive-type.md`](responsive-type.md) for the full principle.

## Use all caps for compact legibility

I use all caps when a label must remain legible at a size where sentence case no longer works. This commonly applies to diagram labels, dense controls, and unit or time abbreviations such as `AM` and `PM`.

All caps is not a stylistic default. Use it for a functional reason or because the brand specifically calls for it. Increase letter spacing whenever text is set in all caps. See [`all-caps.md`](all-caps.md) for the full principle.

When constructing a type system, use [`../methods/typography/tracking-curve.md`](../methods/typography/tracking-curve.md) to derive size-dependent tracking from the major-second scale. Shift the curve’s base amount to suit the font and open it further for all-caps text. Treat the result as a starting point and judge it optically.

The default curve is neutral at the base size. It opens text below the base and tightens text above it, then tapers so distant sizes do not accumulate extreme spacing. This creates a consistent direction without allowing the mathematical system to overpower the rendered type.

## Choose numeric figures by behavior

Use tabular lining figures when numbers must align or change without moving surrounding content. Use proportional lining figures for fixed numbers in running text. Right-align groups of numeric values in left-to-right interfaces, align decimal points, and keep decimal precision consistent. See [`numeric-figures.md`](numeric-figures.md) for the full principle.

## Distinguish quotation marks, apostrophes, and primes

Use quotation marks for quotations, the right apostrophe for contractions and omissions, and prime marks for measurements. A truncated year uses a right apostrophe: `’26`. When correct curly punctuation cannot be guaranteed, prefer a consistent neutral mark to a curly mark facing the wrong direction. See [`quotation-apostrophe-prime-marks.md`](quotation-apostrophe-prime-marks.md) for the full principle.

## Align text according to its role

In left-to-right interfaces, begin with left alignment. Right-align groups of numeric values, center button labels by default, and use centered title blocks when they need to read as distinct from the content below. Add a visual boundary when centered content transitions to left-aligned content. See [`text-alignment.md`](text-alignment.md) for the full principle.

## Working rules

- Use as few distinct roles as the interface needs.
- Prefer hierarchy through type and space before adding containers or decoration.
- Increase weight when text moves from body content to a header or interactive role.
- Keep one weight within a heading or sentence unless the changed text is interactive.
- Use all caps only for compact legibility or when the brand provides a reason.
- Increase letter spacing when using all caps.
- Use tabular lining figures for aligned or changing numeric values.
- Use proportional lining figures for fixed numbers in running text.
- Right-align comparable numeric values and align their decimal points in left-to-right interfaces.
- Keep decimal precision consistent across comparable values.
- Use quotation marks, apostrophes, and primes according to their function.
- Use the right apostrophe in a truncated year such as `’26`.
- Begin with left alignment in left-to-right interfaces.
- Center button labels unless a right-side element provides a reason to left-align the label.
- Use centered title blocks to establish a distinct introductory mode.
- Add a clear boundary when moving from centered to left-aligned content.
- Open smaller sizes and tighten larger sizes relative to the base, with a taper at the extremes.
- Recalculate letter spacing and line height from the current rendered size when type changes responsively.
- Align responsive line height to the applicable spacing grid.
- Shift calculated tracking to suit the font and judge the result optically.
- Adjust individual tracking values manually when the rendered type requires it.
- Preserve an existing type system unless replacing it is part of the task.
- Question optical adjustments, but do not discard them only because they fall outside the scale.
