# Treat responsive type as one system

## In brief

When font size changes responsively, letter spacing and line height should change with it. These properties describe one typographic relationship. Updating size alone breaks that relationship.

## Use the rendered size

Responsive type may land at any value between its minimum and maximum sizes. Calculate letter spacing and line height from the size that actually renders, not only from the endpoints declared in the design system.

This keeps the type relationship continuous as the viewport or container changes. A heading should not retain tracking or leading chosen for a different rendered size.

## Keep the relationships continuous

Letter spacing should follow the size-dependent tracking curve. Smaller rendered sizes open relative to the base; larger rendered sizes tighten. Recalculate the result whenever the rendered size changes.

Line height should preserve the role’s intended density while changing with the rendered size. Align the resulting line box to the spacing grid so typography and layout continue to share a rhythm.

## Correct the rendered result

Responsive calculations are starting points. A particular font, word, width, or breakpoint may still need a manual correction. Make the correction after calculating the current state, and keep it attached to the role rather than changing the entire system.

## Working rules

- Treat font size, letter spacing, and line height as one responsive system.
- Calculate from the current rendered size, not only the minimum or maximum size.
- Recalculate tracking whenever the rendered size changes.
- Recalculate line height whenever the rendered size changes.
- Align calculated line height to the applicable spacing grid.
- Apply manual optical corrections after the responsive calculation.
