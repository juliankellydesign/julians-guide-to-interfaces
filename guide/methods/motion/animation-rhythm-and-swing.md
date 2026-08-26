---
type: method
tags: [motion]
prompt: opt-in
scaffold: true
---

# Build animation rhythm and swing

## In brief

For complex animation, use a 48-frame loop at 60 frames per second as a default scaffold. The loop lasts 0.8 seconds and corresponds to 75 BPM. Place initial keyframes at 12-frame intervals, then move selected internal keyframes slightly earlier or later to add swing while preserving the 48-frame loop.

## Frame and time calculations

At 60 frames per second:

```text
one frame = 1 ÷ 60 seconds
          = 0.016667 seconds
          = 16.667 milliseconds

48 frames = 48 ÷ 60 seconds
          = 0.8 seconds
          = 800 milliseconds

equivalent tempo = 60 ÷ 0.8
                 = 75 BPM
```

## Twelve-frame subdivisions

Divide the base loop into four equal 12-frame sections:

| Frame | Seconds | Milliseconds | Position |
| ---: | ---: | ---: | --- |
| 0 | 0.0 | 0 | Start |
| 12 | 0.2 | 200 | 1/4 loop |
| 24 | 0.4 | 400 | 1/2 loop |
| 36 | 0.6 | 600 | 3/4 loop |
| 48 | 0.8 | 800 | Loop boundary |

## Add swing inside the loop

Start with internal keyframes at frames 12, 24, and 36. Move selected keyframes slightly earlier or later when the motion needs a less mechanical rhythm.

A one-frame adjustment changes the timing by 16.667 milliseconds:

- Frame 12 moved to frame 11 occurs at 0.183 seconds.
- Frame 12 moved to frame 13 occurs at 0.217 seconds.
- Frame 24 moved to frame 23 occurs at 0.383 seconds.
- Frame 24 moved to frame 25 occurs at 0.417 seconds.

These are examples, not a required swing pattern. The amount and direction of the adjustment should respond to the motion. Keep the start and loop boundary at frames 0 and 48 so related animations still synchronize.

## Working rules

- Use 48 frames at 60 fps as the default loop for complex animation.
- Use frames 0, 12, 24, 36, and 48 as the initial timing grid.
- Swing selected internal keyframes rather than changing every interval.
- Keep the overall loop at 48 frames when synchronization matters.
- Treat the scaffold as a starting point and change it when the interaction requires different timing.
- Do not apply this scaffold to an existing motion system unless replacing it is part of the task.
- Preserve reduced-motion behavior and performance requirements.
