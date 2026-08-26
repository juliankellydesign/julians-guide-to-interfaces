---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Modal

## When to use it

For a focused interruption: a decision or small task that must resolve before the person continues, where the content beneath becomes temporarily not the subject. If the person should keep their context and the task can happen in place, do not reach for a modal.

## Sources

Interior padding from the modal-padding method; scrim from the scrim method; shadow use from the shadows principle; title placement and action placement from top-and-bottom; title/subtitle/body gaps from the padding principle.

## Surface

- Interior padding **24** on all sides, held consistent across modals.
- Radius **16** from the ladder—the container rounder than its contents (buttons and inputs inside stay at 10). First pass.
- Width: `min(480px, calc(100vw - 32px))`. First pass.
- Shadow: soft and large—`0 12px 32px` black at 14%. Overlays are one of the four documented shadow uses; the scrim beneath keeps it reading apart from the content.

## Scrim

20% white laid over the background content as one overlay element. The shadow says the modal is on top; the scrim says the content beneath is temporarily not the subject.

## Anatomy

Top to bottom, per the top-and-bottom principle: title at the top (wayfinding—what is this), body in the middle, primary action at the bottom. With a title and subtitle, less space between them than before the body. Actions sit at the bottom edge, primary rightmost on pointer platforms. First pass on the alignment.

## Motion

Enter with a quick fade and scale from 0.96 to 1, 160ms—under the 200ms web ceiling. Exit faster. Respect reduced motion: keep the state change, drop the movement. First pass on the exact values.
