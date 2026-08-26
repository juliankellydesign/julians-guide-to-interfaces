---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Alert dialog

## When to use it

For a consequence the person cannot walk back: delete, discard, revoke, overwrite, leave without saving. It blocks, and it should—standing in front of an irreversible action is the whole job. Use it sparingly. An alert dialog in front of a reversible action teaches people to dismiss alert dialogs.

Not this: if the action can be undone, do not confirm it—do it, and offer undo. If the person is choosing, filling in, or reading rather than confirming, that is a modal. If there is only information and one acknowledgement, no dialog is needed at all.

## Sources

The modal spec, unchanged: interior padding from the modal-padding method, scrim from the scrim method, shadow from the shadows principle, ordering from top-and-bottom. Button sizes and styles from the button scaffold; the gap between actions from the spacing ladder. The methods do not yet document a destructive color, so this spec does not use one.

## Surface

Identical to the modal—padding **24**, radius **16**, width `min(480px, calc(100vw - 32px))`, the `0 12px 32px` black at 14% overlay shadow, and the 20% white scrim. An alert dialog is a modal with a narrower job; giving it its own look would be one more thing to perceive for nothing gained.

## Anatomy

- **Title** — the consequence, in the person's own terms: "Delete 3 projects?" Not "Are you sure?" The title is the only part read at speed.
- **Body** — a line or two on what cannot be undone. If there is nothing to add, leave it out.
- **Actions** — two, at the bottom: cancel as a Secondary M (40), confirm as a Primary M (40), gap **8**, confirm rightmost on pointer platforms. On touch, stack them full width with confirm on top. First pass on the stacking.

Never three actions. A third choice means the question was not a confirmation.

## Color

The confirming button stays Primary in the highlight color. The methods do not yet document a destructive red, and I would rather ship no red than an undocumented one—the words carry the danger. Name the action ("Delete", "Discard"), never "OK"; a button that says OK confirms nothing in particular.

## States

The buttons keep their own spec: press scale 0.9, focus-visible 2px highlight outline offset 2, disabled at 40% opacity. The dialog enters with the modal's fade and scale from 0.96 to 1 over 160ms; exit faster. Respect reduced motion.
