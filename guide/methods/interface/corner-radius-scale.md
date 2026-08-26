---
type: method
tags: [interface]
prompt: opt-in
scaffold: true
---

# Build a corner-radius scale

## In brief

Choose base corner radii from a ladder that follows the same scheme as the spacing ladder: `0`, `1`, `2`, `4`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `28`, `32`, and `full`. The ladder supplies starting radii for containers and controls; nested elements derive their radii from the nested-radius formula instead.

## The ladder

```text
0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, full
```

The step doubles as values grow, exactly as in [`../layout/spacing-grid.md`](../layout/spacing-grid.md): by 2 through 12, and by 4 through 32. A 2px difference reads clearly on an 8px corner and disappears on a 28px corner, so the ladder keeps each move roughly proportional to the radius it adjusts.

Radii above 32 are uncommon as base values. When the interface calls for them, extend the ladder by continuing to double the step: 40, 48, 56, 64.

## The endpoints are semantic

`0` and `full` are meanings, not steps.

- `0` is the square corner. It is a deliberate visual language, and an interface built on it may need other signals to identify what can be acted on.
- `full` produces pills and circles. Implement it as an arbitrarily large radius so the corner resolves to half the element's smaller dimension.

## Nested radii leave the ladder

Choose a container's base radius from the ladder, then derive its nested radii with [`nested-corner-radii.md`](nested-corner-radii.md). The calculated inner radius may fall between tokens, and that is correct: concentricity matters more than staying on the ladder. Judge the rendered corner and adjust optically.

## Working rules

- Choose base radii for containers and controls from the ladder.
- The overall amount of rounding remains taste; the ladder standardizes the available amounts, not the choice.
- Treat `0` and `full` as semantic endpoints rather than steps in the progression.
- Let the nested-radius formula produce off-ladder inner values.
- Extend past 32 by continuing to double the step.
- Preserve an existing radius system unless replacing it is part of the task.
