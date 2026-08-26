---
type: method
tags: [interface, color]
prompt: opt-in
scaffold: true
---

# Dim beneath modals with a scrim

## In brief

When a modal appears over content, pair its shadow with a scrim—the theater term: a translucent layer laid over the background content. Use 20% white as the starting point, drawn from the transparent-white scale. The shadow says the modal is on top; the scrim says the content beneath is temporarily not the subject.

## The starting value

```text
scrim: white at 20% opacity, laid over the background content
```

Implement the dimming as one overlay element rather than by changing the content's own opacity: the scrim covers everything beneath the modal uniformly, and the content renders untouched under it. The visual result matches dimming the content to roughly 80% on a light interface, and the value comes from [`../color/transparent-scales.md`](../color/transparent-scales.md).

The dimming is deliberately slight. The content beneath stays legible and present—the person should know where they are—while clearly reading as inactive. Judge the rendered pair on the actual background; busy content can need slightly more, and near-white surfaces slightly less.

## Working rules

- Pair a modal's shadow with a scrim; the two communicate the layering together.
- Implement the scrim as an overlay layer, not by changing the content's opacity.
- Start at 20% white and adjust to the rendered surface.
- Keep the dimmed content legible; the scrim marks inactivity, not removal.
- Preserve an existing interface's overlay treatment unless replacing it is part of the task.
