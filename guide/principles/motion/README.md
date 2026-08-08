# Motion

## In brief

Motion should communicate continuity, causality, or state change while respecting the platform. It should explain what changed without making the interface feel slow.

## Motion has a job

An extra animation must mean something. Useful purposes include:

- Connecting an action to its result
- Preserving spatial continuity
- Explaining where an element came from or went
- Directing attention to a meaningful change
- Communicating physicality on a touch surface

If motion does not add understanding, it competes with the interaction.

## Morph only between elements that share a meaning

A continuous transition is a claim of identity: when one element morphs into another, the person carries everything the first form meant onto the second. Morph only when the two elements do the same thing or mean the same thing—a floating chip becoming the reply bar it abbreviates. When the arriving element behaves differently, use a fade, push, or replacement instead.

See [`continuous-transitions.md`](continuous-transitions.md) for the full principle.

## Respect the platform

### Web

Web interactions should feel immediate. The response should acknowledge the action without delaying the next one.

### Touch

Touch-based devices can use slower animation when direct manipulation creates a clear physical model. Distance, gesture velocity, and continuity can justify longer timing.

For concrete duration defaults, see [`../methods/motion/platform-timing.md`](../../methods/motion/platform-timing.md).

## Protect performance

Do not use an effect at the expense of responsiveness. Remove or simplify animation that drops frames or delays a response.

## Preserve established systems

When working in an existing interface, use its motion language unless the task is to rebuild it. Apply continuity, causality, responsiveness, and accessibility within that system.

For a concrete complex-animation scaffold, see [`../methods/motion/animation-rhythm-and-swing.md`](../../methods/motion/animation-rhythm-and-swing.md).

## Accessibility

Respect reduced-motion preferences. Preserve the state change and information even when the transitional movement is removed.
