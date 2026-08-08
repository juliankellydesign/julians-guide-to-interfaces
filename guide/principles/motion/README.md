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

## Continuously transition only between elements that do the same thing

A continuous transition communicates that an element is the same—it is just moving, growing, or changing form. So we do not continuously transition between elements that do different things: a floating chip can become the reply bar it abbreviates, while the tab bar making room for it moves away as itself. When elements do different things, use a fade, push, or replacement so each keeps its own identity.

See [`continuous-transitions.md`](continuous-transitions.md) for the full principle.

## Animate the level that changes

Transitions communicate structure. A tab switch fades through with a small x translation, giving sibling tabs a spatial relationship—while the search bar that searches the whole app, and the tab bar itself, hold still because they sit at a level above the changing content. Stillness communicates scope: what moves reads as content, what stays reads as structure. Animate an element only with its own level's transitions.

See [`transition-levels.md`](transition-levels.md) for the full principle.

## Respect the platform

### Web

Web interactions should feel immediate. The response should acknowledge the action without delaying the next one.

### Touch

Touch-based devices can use slower animation when direct manipulation creates a clear physical model. Distance, gesture velocity, and continuity can justify longer timing.

Adapting is an obligation, not an allowance: touch timing carried onto desktop reads as mushy. The fidelity of the input must match the interface—see [`../interface/input-fidelity.md`](../interface/input-fidelity.md).

For concrete duration defaults, see [`../methods/motion/platform-timing.md`](../../methods/motion/platform-timing.md).

## Protect performance

Do not use an effect at the expense of responsiveness. Remove or simplify animation that drops frames or delays a response.

## Preserve established systems

When working in an existing interface, use its motion language unless the task is to rebuild it. Apply continuity, causality, responsiveness, and accessibility within that system.

For a concrete complex-animation scaffold, see [`../methods/motion/animation-rhythm-and-swing.md`](../../methods/motion/animation-rhythm-and-swing.md).

## Accessibility

Respect reduced-motion preferences. Preserve the state change and information even when the transitional movement is removed.
