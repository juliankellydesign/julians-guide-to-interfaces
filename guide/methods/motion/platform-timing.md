---
type: method
prompt: opt-in
---

# Choose platform motion timing

## In brief

Keep most web interface transitions under 200 milliseconds. Touch interfaces can use slower timing when distance, gesture velocity, or direct manipulation needs physical continuity.

## Web

Web interactions should feel immediate. Keep most interface transitions below 200 milliseconds. Hover, press, and disclosure responses often benefit from shorter durations.

## Touch

Touch interfaces can use slower animation when direct manipulation creates a clear physical model. Choose the duration in relation to travel distance, gesture velocity, and the continuity a person needs to follow.

## Working rules

- Protect responsiveness before adding motion.
- Treat 200 milliseconds as a useful web ceiling, not a universal law.
- Preserve an existing motion system unless replacing it is part of the task.
- Respect reduced-motion preferences at every duration.
