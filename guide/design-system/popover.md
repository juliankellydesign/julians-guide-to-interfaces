---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Popover

## When to use it

For secondary content anchored to the control that opened it—a filter panel, a details card, a short form that belongs to one button. The content beneath stays the subject: the person can look away and nothing is waiting on them. Reach for it when the content earns room but not the whole screen.

Not this: a popover is not for a label naming a control—that is a tooltip, and a tooltip is text only. It is not for a decision that must resolve before continuing—that is a modal, or an alert dialog when the decision is destructive. And it is not a list of values to choose from; a select already does that, with keyboard behavior a popover does not carry.

## Sources

Offset, fill, border, and shadow from the select spec's popup—one popup language, used again. Padding and radius from the spacing and radius ladders; shadow use from the shadows principle; motion and title placement reused from the modal spec; states from the press scale and the focus default. The methods do not yet document a popover surface, so its geometry is a first pass.

## Surface

- Anchored to its trigger, offset **4**, the same gap the select popup takes. First pass.
- Padding **16** on all sides; radius **12**, with controls inside staying at 10—the container rounder than its contents, as in the modal. First pass.
- gray-0 fill, 1px gray-200 border, and the modal's overlay shadow, `0 12px 32px` black at 14%. Overlays are a documented shadow use; one shadow value for one job.
- Width `min(320px, calc(100vw - 32px))`. First pass. A popover wider than that is a modal that has not admitted it.
- No arrow. Being anchored is what says which control it belongs to; an arrow is a second element saying the same thing.
- No scrim. Nothing is blocked, so nothing gets dimmed.

## Anatomy

Title at the top when the content needs naming, body beneath, actions at the bottom—the modal's ordering at a smaller scale, with the title closer to its body than the body is to the actions. Buttons inside are S (32); a popover is not the place for an L. First pass on the button size.

## States

- **Trigger press** — scale to 0.9, the standard press default.
- **Focus-visible** — 2px highlight outline, offset 2, on the trigger; inside the popover, focus lands on the controls themselves, never on the surface.
- **Motion** — fade and scale from 0.96 to 1 over 160ms, the modal's entrance. Respect reduced motion: keep the state change, drop the movement.
