---
type: method
prompt: opt-in
---

# Build color scales perceptually

## In brief

Use six base color scales: blue, red, orange, yellow, purple, and green. Each scale reuses the gray scale's 13 stops and lightness curve, holds one OKLCH hue constant, and shapes chroma with a cubic Bézier arch clamped to the sRGB gamut. Equal stops have equal lightness across every scale, including gray.

## The scales

Generate each scale in OKLCH with a constant hue angle:

| Scale | Hue |
| --- | ---: |
| Blue | `250` |
| Red | `28` |
| Orange | `65` |
| Yellow | `100` |
| Purple | `305` |
| Green | `145` |

These hues are starting points. Adjust a hue when the rendered scale does not read as its name or when the brand provides a specific color to match.

## Share the gray scale's lightness

Use the same 13 stops as [`perceptual-gray-scales.md`](perceptual-gray-scales.md)—`0` through `1000`—and the same lightness curve, `cubic-bezier(0.35, 0.2, 0.55, 0.6)`, with `stop ÷ 1000` as the curve position.

Sharing the lightness curve is the point of the system. A stop means the same perceived lightness in every scale, so text that meets contrast requirements on `blue 100` also meets them on `red 100`, and scales can swap roles without re-checking hierarchy.

## Shape chroma with an arch

Chroma rises from zero at white, peaks mid-scale, and returns to zero at near-black. Use a cubic Bézier arch from `(0, 0)` to `(1, 0)` with control points `(1/3, 4/3)` and `(2/3, 4/3)`, which evaluates to:

```text
t = stop ÷ 1000
arch(t) = 4 × t × (1 − t)
chroma(stop) = peakChroma × arch(t)
```

Use a peak chroma of `0.16` as the starting point for every scale.

## Respect the gamut

The arch requests chroma; the gamut disposes. Clamp each stop to `95%` of the maximum chroma that stays inside sRGB at that stop's lightness and hue.

The clamp shapes each hue differently, and that is expected. Red and purple keep the full arch. Blue, orange, and yellow are gamut-limited through the middle of the scale—a mid-lightness yellow is an olive, because vivid yellow only exists at high lightness. Do not fight this by raising the lightness of one scale; the shared lightness curve matters more than maximum vividness at every stop.

## Endpoints converge with gray

The arch is zero at both ends, so every scale starts at pure white `oklch(1 0 0)` and ends at the same `L 0.05` near-black as the gray scale. The scales tint the middle of the range and agree with gray at the extremes.

## Judge the rendered scales

Constant hue is a model, not a guarantee. OKLCH holds the hue number steady, but a hue can appear to drift as lightness changes—dark blues can read violet, light yellows can read green. Review each scale against its name and against the other scales on the displays where it will be used, and adjust the hue of individual stops when the drift is visible.

Accent colors remain separate from these scales. An accent may deliberately exceed the scale's chroma because it communicates emphasis, not hierarchy.

## Working rules

- Always generate all 13 stops for every scale this method is selected for.
- Use OKLCH with one hue angle per scale.
- Reuse the gray scale's stops and lightness values exactly.
- Shape chroma with the arch and clamp it to `95%` of the sRGB gamut.
- Keep stop `0` pure white and stop `1000` equal to the gray near-black.
- Accept gamut-limited chroma in the middle of a scale rather than changing its lightness.
- Adjust individual hues or chroma values when perceptual review requires it.
- Do not apply these scales to an existing interface unless replacing its color system is part of the task.
