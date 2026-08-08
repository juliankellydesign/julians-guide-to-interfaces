---
type: method
prompt: opt-in
scaffold: true
---

# Calculate tracking from the type scale

## In brief

Start with the difference between the base size and the rendered size. Divide that difference by `3` to produce a raw tracking percentage, then pass it through a cubic soft limit. The result stays nearly linear close to the base and tapers toward `±6%` at distant sizes. Add a shift for the font, add `4` percentage points for all caps, then make manual corrections where the rendered type requires them.

This method assumes one font without optical sizing.

For fluid type, recalculate this curve from the current rendered size as described in [`responsive-type.md`](responsive-type.md). Do not interpolate between values calculated only for the minimum and maximum sizes.

## Begin with the major-second scale

Generate and round the rendered size using the type-scale method:

```text
ratio = 1.125
renderedSize(step) = round(base × ratio^step)
```

Tracking uses the rendered size rather than the unrounded scale value:

```text
rawPercent = (base - renderedSize) / 3
```

At the base size, `rawPercent` is `0`. Smaller sizes produce positive tracking. Larger sizes produce negative tracking.

## Taper the result

Use a cubic soft limit with a `6%` taper limit:

```text
taperLimit = 6

taperedPercent = rawPercent
               / ∛(1 + (|rawPercent| / taperLimit)^3)

allCapsAdjustment = isAllCaps ? 4 : 0
manualAdjustment = 0

trackingPercent = trackingShift
                + taperedPercent
                + allCapsAdjustment
                + manualAdjustment
letterSpacingEm = trackingPercent / 100
```

The same taper can be written as:

```text
taperedPercent = taperLimit × rawPercent
               / ∛(taperLimit^3 + |rawPercent|^3)
```

Close to the base, the denominator remains near `1`, so the result is nearly identical to `(base - renderedSize) / 3`. Farther away, the cubic term grows and progressively limits the result. The curve approaches `+6%` below the base and `-6%` above it instead of increasing without limit.

## Default values at a 17px base

With a 17px base, a `6%` taper limit, and no font or manual shift:

| Rendered size | Tapered tracking | Sentence-case `em` | All-caps tracking | All-caps `em` |
| ---: | ---: | ---: | ---: | ---: |
| 11px | +1.98% | `0.01976em` | +5.98% | `0.05976em` |
| 12px | +1.65% | `0.01655em` | +5.65% | `0.05655em` |
| 13px | +1.33% | `0.01328em` | +5.33% | `0.05328em` |
| 15px | +0.67% | `0.00666em` | +4.67% | `0.04666em` |
| 17px | 0.00% | `0em` | +4.00% | `0.04000em` |
| 19px | -0.67% | `-0.00666em` | +3.33% | `0.03334em` |
| 22px | -1.65% | `-0.01655em` | +2.35% | `0.02345em` |
| 24px | -2.29% | `-0.02289em` | +1.71% | `0.01711em` |
| 27px | -3.16% | `-0.03162em` | +0.84% | `0.00838em` |
| 31px | -4.10% | `-0.04104em` | -0.10% | `-0.00104em` |
| 34px | -4.62% | `-0.04622em` | -0.62% | `-0.00622em` |

## Shift the base amount

`trackingShift` is measured in percentage points. It moves the entire curve without changing its shape.

- A positive shift opens the tracking.
- A negative shift tightens the tracking.
- At the base size, tracking equals `trackingShift`.
- A font with wide or airy forms may need a negative shift.
- A dense font may need a positive shift.
- Keep the font shift separate from capitalization and individual corrections.

## Add four percentage points for all caps

After calculating the size-dependent curve, add a flat `4` percentage points to all-caps text:

```text
allCapsAdjustment = 4
```

This adjustment is additive. If the curve produces `+1.65%`, the initial all-caps value is `+5.65%`. If it produces `-4.62%`, the initial all-caps value is `-0.62%`.

## Correct individual roles manually

The formula establishes rhythm across the type system, but it cannot fully account for a font’s drawing, a particular word, its surrounding space, or how the browser renders it. I often adjust letter spacing manually after applying the curve.

Store that correction separately from the font shift and all-caps adjustment:

```text
finalTrackingPercent = trackingShift
                     + taperedPercent
                     + allCapsAdjustment
                     + manualAdjustment
```

A manual adjustment should correct a specific rendered role. It should not silently change the underlying curve for every size.

## Working rules

- Generate the rendered size with the major-second scale before calculating tracking.
- Use `(base - renderedSize) / 3` as the raw tracking percentage.
- Use a cubic soft limit with `6%` as the default taper limit.
- Assume one font without optical-size substitutions.
- Shift the whole curve to adapt it to the font.
- Add a flat `4` percentage points for all caps.
- Keep manual role corrections separate from the global font shift.
- Convert the final percentage to `em` by dividing by `100`.
- Judge the rendered result optically after calculation.
- Recalculate from the current rendered size when font size changes responsively.
- Do not apply this curve to an existing interface unless replacing its tracking system is part of the task.
