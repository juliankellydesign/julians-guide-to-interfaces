---
type: method
prompt: opt-in
scaffold: true
---

# Scale controls on press

## In brief

Scale a pressed control down to 0.9. This is the starting value for the juicy press state the motion principles call for, and like every method value it is a scaffold—a design system slotted in alongside the guide overrules it.

## The default

- Pressed scale: **0.9** (`transform: scale(0.9)`)
- The press-in response is immediate; see [`platform-timing.md`](platform-timing.md) for duration defaults.

## Working rules

- Start pressed controls at scale 0.9.
- Keep the press-in immediate per platform timing; the release can carry the character.
- Preserve an existing press language unless replacing it is part of the task.
- Respect reduced-motion preferences; keep the pressed state legible without the transition.
