---
type: principle
tags: [typography]
---

# Choose figure styles by behavior

## In brief

Use tabular-width figures when numbers need to align or change without shifting surrounding content. Use proportional lining figures when a fixed number appears inside text. Align groups of numeric values for comparison; align a single value according to its context.

## Separate width from vertical style

Tabular and proportional describe the width of figures. Lining and oldstyle describe their height and vertical position. These are separate typographic properties.

The practical choice in most interfaces is between:

- **Tabular lining figures:** Every digit occupies the same width and the figures align with uppercase forms.
- **Proportional lining figures:** Each digit uses the width its shape needs and the figures align with uppercase forms.

Use the combination that communicates the behavior of the number.

## Use tabular figures for stable alignment

Tabular figures behave like numerals in a monospaced font. Every digit occupies the same horizontal space.

Use them for:

- Tables and columns of numeric values
- Timecodes, timers, counters, and changing measurements
- Values that must remain horizontally stable as their digits change
- Any group where vertical comparison is more important than the natural rhythm of individual numerals

Equal widths prevent a changing value from making the interface jump horizontally.

## Align groups of numbers for comparison

In left-to-right interfaces, groups of numeric values are one of the clearest reasons to use right alignment. Right alignment places corresponding magnitudes in a consistent position and makes values easier to compare.

When a group contains decimal values, align the decimal points. Use the same number of decimal places for every value, including whole numbers:

```text
  12.00
   9.50
   0.75
```

Do not render the first value as `12` when the other values show two decimal places. Consistent precision supports both alignment and interpretation.

## Use proportional lining figures in text

Proportional lining figures flow more naturally with surrounding letters because each numeral uses the width its shape requires.

Use them for a number that appears inside a sentence or for a fixed value whose horizontal position does not need to remain stable.

A single numeric value does not need a special alignment rule. Align it according to the surrounding composition and the role it plays.

## Working rules

- Use tabular lining figures for tables, timecodes, counters, and changing values.
- Use proportional lining figures for fixed numbers in running text.
- Right-align groups of numeric values in left-to-right interfaces when comparison matters.
- Align decimal points when displaying multiple decimal values.
- Use a consistent number of decimal places across comparable values.
- Align a single value according to its context.
