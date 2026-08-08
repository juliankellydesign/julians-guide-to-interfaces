---
type: method
prompt: opt-in
scaffold: true
---

# Calculate nested corner radii

## In brief

Subtract the inset between a container and its nested element from the container’s radius. Use the result as a concentric starting point, then adjust the inner radius optically.

## Calculate the inner radius

When a nested element follows the same corner as its container:

```text
inner radius = outer radius - inset
```

The inset is the distance between the relevant outer and inner edges. It may come from the container’s padding or from another fixed gap.

## Example

A modal has a 32px radius. A text field is inset 20px from the modal edge:

```text
inner radius = 32px - 20px
inner radius = 12px
```

The 12px radius is the geometrically concentric starting point. A 16px inner radius can also look correct in this example after optical adjustment.

## Reduce precision with smaller radii

Large outer radii call attention to their geometry and benefit most from concentric nesting. Small radii are less visually dominant, so the exact relationship can be looser.

The containing element should generally remain rounder than the contained element.

## Working rules

- Subtract the inset from the outer radius to establish the inner radius.
- Treat the result as a scaffold rather than a hard requirement.
- Adjust the inner radius after viewing the rendered relationship.
- Match concentricity more carefully when the outer radius is large.
- Keep the containing element rounder than the nested element in the usual case.
- Preserve an existing radius system unless replacing it is part of the task.
