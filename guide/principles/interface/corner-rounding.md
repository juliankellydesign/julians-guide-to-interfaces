---
type: principle
tags: [interface]
---

# Use corner rounding as interface language

## In brief

The amount of corner rounding is mostly a matter of personal taste. Its functional value is that rounded containers have become a familiar shorthand for interactivity. Use nested radii deliberately, especially when a large outer radius calls attention to the relationship between two corners.

## Treat the amount as taste

There is no universal radius that makes an interface correct. A square, slightly rounded, or highly rounded visual language can all work when it is consistent with the product and the intended tone.

Corner rounding still communicates. Interactive fields, buttons, and controls commonly use rounded boundaries. Removing all radii can be a useful design exercise, but the interface may need other signals to compensate and identify which elements can be acted on.

## Preserve concentricity when it becomes visible

The rounder a containing corner is, the more obvious it becomes when a nested corner does not follow the same center. Nested elements look more coherent when the inner radius accounts for the inset between their edges.

Containing elements can generally use a greater corner radius than the elements inside them. The difference helps the two curves remain concentric rather than appearing to compete.

This relationship matters less at small radii. A subtle corner does not call enough attention to its geometry to require the same precision.

## Adjust the geometry optically

The calculated concentric radius is a scaffold. The nested element’s size, border, fill, surrounding content, and visual weight can make a nearby value look better.

Use the formula to establish the relationship, then judge the rendered corners. See [`../../methods/interface/nested-corner-radii.md`](../../methods/interface/nested-corner-radii.md) for the calculation, and [`../../methods/interface/corner-radius-scale.md`](../../methods/interface/corner-radius-scale.md) for my ladder of starting radii when constructing a radius system.

## Working rules

- Choose the overall amount of rounding according to the interface’s tone and visual language.
- Treat rounded corners as one available signal of interactivity.
- Expect a zero-radius system to require other clear interaction signals.
- Give containing elements greater radii than their nested elements when the corners need to read concentrically.
- Match nested curves more carefully as the outer radius becomes larger and more visible.
- Use the calculated inner radius as a scaffold and adjust it optically.
- Preserve an existing radius system unless changing it is part of the task.
