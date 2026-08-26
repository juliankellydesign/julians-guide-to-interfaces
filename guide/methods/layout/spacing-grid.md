---
type: method
tags: [rhythm]
prompt: opt-in
scaffold: true
---

# Build a spacing grid

## In brief

Use a 2px grid for values through 20px and a 4px grid for values above 20px. This provides finer control for small relationships and a consistent rhythm for larger layout values. Take working tokens from the spacing ladder, which doubles its step as values grow.

## Generate spacing values

- At 20px and below, use increments of 2px.
- Above 20px, use increments of 4px.

The change in increment prevents small spacing decisions from becoming too coarse while keeping larger layout values manageable.

## The spacing ladder

Start from this token ladder rather than the full grid:

```text
1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128
```

The step doubles as values grow: by 2 through 12, by 4 through 32, by 8 through 64, and by 16 through 128. A fixed step becomes imperceptible as values grow; doubling keeps each move on the ladder roughly proportional to the size it adjusts. Extend past 128 by continuing to double the step.

`1` is the hairline exception to the 2px grid. Reserve it for borders, dividers, and optical nudges rather than layout spacing.

Every other value sits on the grid. When a needed value falls between tokens, prefer the nearest token; use an off-ladder grid value only as a recorded optical correction.

## Compensate optically

The grid establishes rhythm but does not override perception. Text contains irregular shapes and invisible metrics. Adjust a value when geometric alignment does not create the intended visible relationship.

When text sits above a container, align the text’s visible edge toward the midpoint of the container’s interior padding rather than mechanically matching the exterior edge.

## Working rules

- Use the grid when constructing a new spacing system.
- Start from the spacing ladder and prefer its tokens over arbitrary grid values.
- Reserve `1` for hairlines rather than layout spacing.
- Preserve an existing interface’s spacing tokens unless replacing them is part of the task.
- Keep repeated relationships consistent.
- Make optical corrections deliberately and record them when encoding a component.
