---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Slider

## When to use it

For setting an approximate value in a bounded, continuous range where the person cares about direction more than digits—volume, brightness, opacity, a price filter, playback position. The whole range is visible and the thumb's position answers "how far along am I" without anyone reading a number. That visibility is the reason to pick it.

Not this: if the exact figure matters—a quantity, a duration someone will type, a price they know—use a number field, where the value can be entered directly. If there are two states, it is a switch. If the value is reported rather than set, it is a progress bar or a meter, and neither of those gets a thumb.

## Sources

Track height and radius shared with the progress bar so the two sit on the same keyline; fill from the highlight scaffold; thumb size from the icon sizes and the touch minimums in the control-sizes method; thumb shadow from the shadows principle, matching the switch; the refusal of a press scale from the scroll-area spec; tabular numerals from the numeric-figures principle. The methods do not yet document a slider, so the label placement and the range minimum gap are a first pass.

## Anatomy

- **Track** — height **6**, radius full, gray-200, spanning its container. The progress bar's geometry, reused.
- **Fill** — from the range's start to the thumb, in the highlight color (scaffold: blue 500), carrying the full radius so its leading edge is round under the thumb.
- **Thumb** — **20**, the workhorse icon size and the same diameter as the switch thumb, radius full, white with a small shadow. Directly manipulable objects get physical properties; that is a documented shadow use. No border as well—one source of weight, not two.

## Touch

On touch the thumb goes to **24**, the documented minimum visible interactive affordance; below that the method says do not make it interactive at all, and a 20 thumb under a fingertip is exactly that case. The interactive target stays **44** on every platform, centered on the thumb and invisible—the affordance and the target are allowed to be different sizes, and here they must be.

## Value and ticks

An optional reading at **13** in tabular numerals, gray-700, above the track's trailing end—tabular so the number holds its width while dragging. No ticks by default. Add them only when the steps are few and named, as 2px gray-300 dots on the track; a tick per unit is a ruler, and a ruler is a number field. First pass.

Two thumbs for a range, never closer than one thumb width apart. First pass.

## States

- **Drag** — no press scale. The thumb is dragged, not pressed, and shrinking the thing under the finger breaks the grab; the scroll-area thumb refuses it for the same reason.
- **Hover** (pointer only) — the unfilled track to gray-300. One step, and only the track: the thumb is already the loudest thing in the row.
- **Focus-visible** — 2px highlight outline, offset 2, on the thumb. Arrow keys move it; the ring has to be on the thing that moves.
- **Disabled** — 40% opacity across track, fill, and thumb, no interaction.
