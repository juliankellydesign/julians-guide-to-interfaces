---
type: method
tags: [color]
prompt: opt-in
scaffold: true
---

# Build gray scales perceptually

## In brief

Use a 13-stop gray scale: `0`, `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`, and `1000`. Stop `0` is pure white. Stop `1000` performs the role of black but is never pure black.

## The scale

Use these stop names in this order:

```text
0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000
```

The endpoints have explicit rules:

- `0` is pure white: `oklch(1 0 0)`.
- `1000` is called black because of its role in the system, but its value should remain a near-black.
- Never use literal black as the `1000` value.

## Distribute lightness perceptually

Generate the scale in OKLCH. Use the stop number divided by `1000` as the input position for the lightness curve. This means `50` and `950` remain half-steps near the endpoints rather than being treated as full intervals.

Use this cubic Bézier curve as the starting point:

```text
cubic-bezier(0.35, 0.2, 0.55, 0.6)
```

The handles can change when the context requires a different distribution. The 13 stop names and endpoint rules remain fixed unless there is a specific reason to change the system.

## Generate the transparent twins

Whenever the gray scale is generated, also generate its transparent twins: scales of transparent whites and transparent blacks that visually match the opaque stops, for scrims and elements over content. See [`transparent-scales.md`](transparent-scales.md).

## Judge the rendered scale

The curve is a model of perceived lightness, not a complete representation of vision. Displays can reproduce dark tones differently, and the human eye may distinguish parts of the scale differently depending on surrounding colors and viewing conditions.

Review the scale on the displays and in the contexts where it will be used. If a calculated tone does not create the intended perceptual difference, adjust it. Question why the adjustment feels better, but do not reject the observation because it falls outside the curve.

## Current implementation default

The current system uses OKLCH lightness `0.05`, or `L 5`, for stop `1000`. This is dark enough to perform the role of black without becoming literal black.

## Documentation site usage

This documentation site uses the same gray scale for its neutral interface colors:

| Role | Stop |
| --- | ---: |
| Page background and inverse text | `0` |
| Subtle panel background | `50` |
| Standard border | `100` |
| Strong border | `300` |
| Muted text | `600` |
| Primary text and dark surfaces | `1000` |

The interface itself stays pure gray. Diagrams take their accent from the blue scale at stop `500`; accent colors remain separate from the neutral hierarchy because they communicate emphasis and identity.

## Working rules

- Always generate all 13 stops when this method is selected.
- Generate the transparent twins alongside the opaque scale.
- Keep stop `0` pure white.
- Keep stop `1000` near-black rather than pure black.
- Use OKLCH so changes are based on perceived lightness.
- Use `stop ÷ 1000` as the curve position.
- Adjust the curve or near-black endpoint when the interface provides a reason.
- Do not apply this scale to an existing interface unless replacing its color system is part of the task.
