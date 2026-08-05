---
type: method
prompt: opt-in
---

# Build a spacing grid

## In brief

Use a 2px grid for values through 20px and a 4px grid for values above 20px. This provides finer control for small relationships and a consistent rhythm for larger layout values.

## Generate spacing values

- At 20px and below, use increments of 2px.
- Above 20px, use increments of 4px.

The change in increment prevents small spacing decisions from becoming too coarse while keeping larger layout values manageable.

## Compensate optically

The grid establishes rhythm but does not override perception. Text contains irregular shapes and invisible metrics. Adjust a value when geometric alignment does not create the intended visible relationship.

When text sits above a container, align the text’s visible edge toward the midpoint of the container’s interior padding rather than mechanically matching the exterior edge.

## Working rules

- Use the grid when constructing a new spacing system.
- Preserve an existing interface’s spacing tokens unless replacing them is part of the task.
- Keep repeated relationships consistent.
- Make optical corrections deliberately and record them when encoding a component.
