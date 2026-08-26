---
type: method
tags: [typography]
prompt: opt-in
scaffold: true
---

# Generate a type scale

## In brief

Begin with a 16px or 17px base size and derive the rest of the system with a major-second ratio of `1.125`. Generate the scale before assigning semantic roles, then judge the rendered hierarchy and adjust optically.

## Start at the base

Visual design begins with the base type size—usually 16px or 17px. The base anchors the type scale and the spacing around type.

Use a major-second scale:

```text
ratio = 1.125
size(step) = base × ratio^step
```

Starting at 17px and rounding to whole pixels produces:

| Direction | Sizes |
| --- | --- |
| Smaller | 15, 13, 12 |
| Base | 17 |
| Larger | 19, 22, 24, 27, 31, 34 |

The scale is deliberately restrained. Interface hierarchy rarely needs dramatic jumps between every level. A step that looks small as a height change still produces a much larger change in occupied area, because text boxes are almost always wider than they are tall.

## Derive tracking from the same steps

When constructing tracking alongside the scale, round the rendered size first and pass that value to [`tracking-curve.md`](tracking-curve.md). Tracking is calculated from the difference between the base size and the size that actually renders.

When a role changes continuously between scale values, use [`responsive-type.md`](responsive-type.md) to recalculate tracking and line height from its current rendered size.

## Judge the result

The calculated values are a starting structure. Adjust a size, weight, line height, or alignment when the rendered type does not create the intended hierarchy.

## Working rules

- Use a 16px or 17px base unless the platform or audience provides a reason to change it.
- Generate the full scale before assigning semantic roles.
- Use as few distinct roles as the interface needs.
- Treat rounding as an intentional choice.
- Calculate tracking from the rounded rendered size.
- Do not apply this scale to an existing interface unless replacing its type system is part of the task.
