---
type: method
prompt: opt-in
scaffold: true
---

# Build color scales perceptually

## In brief

Use six base color scales: blue, red, orange, yellow, purple, and green. Each scale reuses the gray scale's 13 stops and endpoints, distributes lightness with the saturated curve, holds one OKLCH hue constant, and shapes chroma with a cubic Bézier arch clamped to the sRGB gamut. Equal stops have equal lightness across all six scales.

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

## Distribute lightness with the saturated curve

Use the same 13 stops as [`perceptual-gray-scales.md`](perceptual-gray-scales.md)—`0` through `1000`—and the same endpoints, but not the gray curve. The saturated scales share their own lightness curve:

```text
cubic-bezier(0.5, 0.3, 0.6, 0.5)
```

Use `stop ÷ 1000` as the curve position, exactly as the gray scale does.

The gray curve distributes lightness for neutral hierarchy, and it pulls the middle of the scale too dark for color: sRGB chroma peaks between roughly `L 0.6` and `L 0.75`, so a scale that follows the gray curve spends its middle stops below the vivid range. The saturated curve holds the midtones lighter—stop `500` sits near `L 0.63` instead of the gray scale's `L 0.55`—then descends to the same near-black.

Sharing one curve across the six scales preserves interchangeability where it matters: a stop means the same perceived lightness in every color scale, so text that meets contrast requirements on `blue 100` also meets them on `red 100`, and one hue can replace another without re-checking hierarchy. A color stop no longer matches the gray stop's lightness, so re-check contrast when substituting a color for a gray, or a gray for a color, at the same stop number.

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

The clamp shapes each hue differently, and that is expected. Red, purple, blue, and green keep the full arch through the middle. Orange and yellow remain gamut-limited there—a mid-lightness yellow is an olive, because vivid yellow only exists at high lightness. Do not fight this by raising the lightness of one scale; the curve shared across the six scales matters more than maximum vividness at every stop.

## Endpoints converge with gray

The arch is zero at both ends and both curves meet at the endpoints, so every scale starts at pure white `oklch(1 0 0)` and ends at the same `L 0.05` near-black as the gray scale. The scales tint and lighten the middle of the range and agree with gray at the extremes.

## Judge the rendered scales

Constant hue is a model, not a guarantee. OKLCH holds the hue number steady, but a hue can appear to drift as lightness changes—dark blues can read violet, light yellows can read green. Review each scale against its name and against the other scales on the displays where it will be used, and adjust the hue of individual stops when the drift is visible.

Accent colors remain separate from these scales. An accent may deliberately exceed the scale's chroma because it communicates emphasis, not hierarchy.

## Working rules

- Always generate all 13 stops for every scale this method is selected for.
- Use OKLCH with one hue angle per scale.
- Reuse the gray scale's 13 stops and endpoints exactly.
- Distribute lightness with the saturated curve and keep it identical across all six scales.
- Shape chroma with the arch and clamp it to `95%` of the sRGB gamut.
- Keep stop `0` pure white and stop `1000` equal to the gray near-black.
- Accept gamut-limited chroma in the middle of a scale rather than changing its lightness.
- Re-check contrast when swapping a color stop for a gray stop, because the curves differ between them.
- Adjust individual hues or chroma values when perceptual review requires it.
- Do not apply these scales to an existing interface unless replacing its color system is part of the task.
