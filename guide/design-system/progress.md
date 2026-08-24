---
type: component-spec
prompt: opt-in
scaffold: true
---

# Progress

## When to use it

For a task that is advancing toward completion—an upload, an import, a render, a multi-step flow. Two things have to be true: the value only moves one direction, and there is a finish. The person is waiting on it, which is why it earns pixels at all.

Not this: a static measurement inside a range—disk used, battery left, score, capacity—is not advancing toward anything. That is a meter, and the two look different on purpose. A value the person can change is a slider. And if the wait is under a moment, show nothing; a bar that flashes and vanishes reads as a glitch, not as feedback.

## Sources

Bar height and radius from the spacing and radius ladders, the height matched to the scroll-area thumb; fill from the highlight scaffold; track from the gray scale; label sizes from the type scale and the font-weight roles; tabular numerals from the numeric-figures principle; motion from the transition-levels principle. The methods do not yet document a progress bar, so the geometry is a first pass.

## Bar

- Height **6**, radius full, spanning the width of its container. First pass.
- Track gray-200; fill the highlight color (scaffold: blue 500). The fill is the highlight because this is the thing the person is waiting on—it is allowed to be the loudest element in its row.
- The fill carries the full radius, so its leading edge is round, not chopped.
- No stripes, no gloss, no shimmer over the fill. The bar's job is to say how far along it is; texture is one more thing to perceive that says nothing.

## Label

Optional, and one line: a description at **13** regular gray-700 on the left, the percentage at **13** in tabular numerals on the right, both sitting **8** above the bar. Tabular figures so the number does not jitter as it climbs. Pick a side and keep it: a percentage that migrates between labels on different screens is two systems.

## Motion

The fill advances continuously rather than snapping between reported values—the value is continuous, so the movement should be. Respect reduced motion: keep the state change, drop the easing flourish.

**Indeterminate:** when there is no percentage to report, a segment about a third of the track travels along it on a loop. Under reduced motion, hold a static filled track at reduced opacity instead—the fact that something is happening still has to be visible.

## States

Progress is not interactive: no press, no hover, no focus ring. Nothing about the bar responds to the pointer, because nothing about it can be changed.

- **Disabled** — does not exist. A task is either running or it is not on screen.
