---
type: method
tags: [color]
prompt: opt-in
scaffold: true
---

# Generate transparent twins of the gray scale

## In brief

Whenever the gray scale is generated, also generate a scale of transparent whites and a scale of transparent blacks—built from gray `1000`, never pure black—whose composited results visually match the opaque stops. The twins hold their role over content the opaque stops cannot sit on: scrims, overlays on media, borders over imagery.

## Derive the alphas

Browsers composite `rgba` colors in gamma-encoded sRGB, so solve there. With `s(stop)` as the sRGB-encoded value of a stop and `s(1000)` as the near-black's:

```text
transparent white alpha(stop) = (s(stop) − s(1000)) ÷ (1 − s(1000))
transparent black alpha(stop) = (1 − s(stop)) ÷ (1 − s(1000))
```

White at its alpha over a gray `1000` background matches the opaque stop; gray `1000` at its alpha over a white background matches the opaque stop. The two alphas at every stop sum to `1`.

| Stop | White α | Black α |
| ---: | ---: | ---: |
| 0 | 1.000 | 0.000 |
| 50 | 0.962 | 0.038 |
| 100 | 0.919 | 0.081 |
| 200 | 0.819 | 0.181 |
| 300 | 0.704 | 0.296 |
| 400 | 0.578 | 0.422 |
| 500 | 0.449 | 0.551 |
| 600 | 0.326 | 0.674 |
| 700 | 0.213 | 0.787 |
| 800 | 0.115 | 0.885 |
| 900 | 0.032 | 0.968 |
| 950 | 0.009 | 0.991 |
| 1000 | 0.000 | 1.000 |

## Use the twins over content

The opaque stops are for surfaces on known backgrounds. The transparent twins keep their role when the background is unknown or variable: a scrim over arbitrary content, a control resting on a photograph, a divider over media. The match is exact over the reference background and stays close elsewhere—judge the rendered result when the underlying content is strongly colored.

Transparent blacks are built from gray `1000` for the same reason stop `1000` is never pure black: the scale's role of black, in transparent form.

## Working rules

- Generate the transparent twins every time the gray scale is generated.
- Build transparent blacks from gray `1000`, never from pure black.
- Use a twin instead of an opaque stop whenever the element sits over variable content.
- Take scrims from the transparent-white scale.
- Judge composited results over strongly colored content; the match is exact only over the reference backgrounds.
