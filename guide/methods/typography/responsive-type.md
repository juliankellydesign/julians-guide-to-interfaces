---
type: method
prompt: opt-in
scaffold: true
---

# Recalculate responsive type

## In brief

Treat a fluid font size as the input to the rest of the type system. Whenever the rendered size changes, recalculate tracking from that size and recalculate line height from the role’s intended ratio. Snap the line height to the spacing grid after calculating it.

## Read the rendered size

Use the current computed font size rather than a declared minimum, maximum, or preferred viewport value:

```text
renderedSize = current computed font size in pixels
```

Run the calculation when the type first renders, when fonts finish loading, and whenever the viewport or container changes the rendered size.

## Recalculate tracking

Pass `renderedSize` to [`tracking-curve.md`](tracking-curve.md). Apply the font shift, all-caps adjustment, and any manual role correction after the size-dependent value is calculated.

```text
calculatedTrackingPercent = trackingCurve(renderedSize)
                          + trackingShift
                          + allCapsAdjustment
```

Do not interpolate between two stored tracking values. Calculate from the current rendered size so the relationship remains continuous.

## Recalculate line height

Each type role keeps an intended line-height ratio. Multiply the current rendered size by that ratio, then align the result to the spacing grid:

```text
lineHeightRatio = intended density for the role
rawLineHeightPx = renderedSize × lineHeightRatio

lineHeightGridPx = renderedSize > 20 ? 4 : 2
lineHeightPx = round(rawLineHeightPx / lineHeightGridPx) × lineHeightGridPx
```

Use the `2px` grid through `20px`. Use the `4px` grid above `20px`. The ratio preserves the role’s density; the grid keeps the resulting line box aligned with the rest of the layout.

## Apply manual corrections last

Tracking and line-height calculations are starting points. Apply any optical correction after calculating the responsive value:

```text
finalTrackingPercent = calculatedTrackingPercent + manualTrackingAdjustment
finalLineHeightPx = lineHeightPx + manualLineHeightAdjustmentPx
```

Keep corrections attached to the specific role or breakpoint that needs them. Do not change the global curve or grid to correct one rendered case.

## Working rules

- Use the current computed font size as the input.
- Recalculate after initial render, font loading, and responsive size changes.
- Calculate tracking from the rendered size rather than interpolating between endpoints.
- Preserve each role’s intended line-height ratio.
- Snap line height to the `2px` grid through `20px` and the `4px` grid above `20px`.
- Apply manual tracking and line-height corrections after calculation.
- Do not introduce this system into an existing interface unless replacing its responsive typography behavior is part of the task.
