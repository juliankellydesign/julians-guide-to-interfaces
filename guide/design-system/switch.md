---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Switch

## When to use it

For a binary setting that takes effect immediately—no confirm step. If the choice is part of a form submitted later, or one of several options, it is not a switch.

## Sources

Track height from the touch minimum visible affordance; thumb from the workhorse icon size; on-color from the highlight scaffold; drag shadow from the shadows principle; press from the press scale. Dimensions are a first pass—the methods do not yet document a switch.

## Dimensions

- Track: **24 × 40**, radius full. 24 is the documented minimum visible interactive affordance on touch; 40 sits on the spacing ladder.
- Thumb: **20**, the workhorse icon size, inset 2 from the track edge.

## Color

- Off: gray-300 track.
- On: highlight color track (scaffold: blue 500).
- Thumb: white, with a small shadow—the switch is directly manipulable, and physical properties are a documented shadow use.

## States

- **Press** — scale to 0.9, the standard press default.
- **Focus-visible** — 2px highlight outline, offset 2.
- **Motion** — the thumb slides in under 200ms; respect reduced motion.
