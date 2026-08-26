---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Drawer

## When to use it

For a focused task or a panel of content anchored to an edge of the screen: filters, a detail view, a settings pane, a create form. It is the modal's shape when the content runs longer or lives longer than a centered box should. On iOS it is the natural answer for a focused task—a sheet from the edge is the platform's habit, and a centered box is not.

Not this: if the decision is one irreversible yes or no, that is an alert dialog. If the content is small and belongs to one specific control, that is a popover, and it does not block. If the person needs the content beneath while they work, it does not belong in a drawer at all—put it beside the content.

## Sources

Padding, radius, shadow, and scrim from the modal spec; grabber dimensions from the spacing and radius ladders; ordering from top-and-bottom; motion timing from the modal's entrance. The methods do not yet document a drawer, so its widths and the grabber are a first pass.

## Surface

- Anchored to one edge and full-bleed along it: a side drawer runs the full height, a bottom sheet the full width.
- Padding **24**, the modal's interior padding, held across every drawer.
- Radius **16** on the two exposed corners only; the edges meeting the screen stay square. A drawer rounded on all four corners is floating, and a floating drawer is a modal.
- Side width `min(400px, calc(100vw - 32px))`; a bottom sheet is sized by its content, capped so a strip of the scrim always shows behind it. First pass.
- Shadow `0 12px 32px` black at 14% and the 20% white scrim, both reused from the modal. Overlays are a documented shadow use.

## Grabber

On touch bottom sheets: a **4** tall, **40** wide bar in gray-300, radius full, centered, **8** below the top edge. It says the sheet can be dragged. Side drawers do not get one—they do not drag down, and a control that lies about what it does is worse than no control. First pass.

## Anatomy

Top to bottom: title at the top, content in the middle, primary action pinned to the bottom inside the same 24 padding. On a tall drawer the content scrolls and the action does not; an action that scrolls out of reach is an action the person has to hunt for.

## States

- **Motion** — slides in from its own edge over 160ms, under the 200ms web ceiling; exit faster. It enters from where it lives—a drawer that fades in has thrown away the one cue its shape gives you. Respect reduced motion: keep the state change, drop the movement.
- **Focus-visible** — controls inside keep their own treatment, 2px highlight outline at offset 2. The surface itself never takes a ring.
