---
type: principle
tags: [motion, interface]
---

# Give controls a juicy press state

## In brief

A press state is the interface acknowledging contact. I love a nice juicy press state, especially on touch-based devices—and they are so often overlooked. My preferred flavor is a scale-down; the exact value is a method default.

## The moment of contact

Press is the most direct feedback an interface gives: a finger or cursor comes down, and the surface responds under it. On touch there is no hover, so the press state is the only feedback between intent and result—which makes it most valuable exactly where it is most often skipped. A control with no press state feels dead under the finger.

## Juicy, not slow

A press state acknowledges the action; it never delays it. Keep the response immediate per the platform's timing, and let the juice come from the quality of the motion rather than its duration. A scale-down reads as the surface yielding under pressure—physical, direct, alive.

## Working rules

- Give every interactive control a press state.
- Treat press states as most important on touch, where there is no hover.
- Keep press feedback immediate; it acknowledges the action, never delays it.
- Load [`../../methods/motion/press-scale.md`](../../methods/motion/press-scale.md) only for the exact scale default.
