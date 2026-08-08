---
type: method
prompt: opt-in
scaffold: true
---

# Dim content beneath modals

## In brief

When a modal appears over content, pair its shadow with a slight dimming of the background: take the background content's opacity from `100` to `80` percent as the starting point. The shadow says the modal is on top; the dimming says the content beneath is temporarily not the subject.

## The starting values

```text
background content opacity: 100% → 80%
```

The dimming is deliberately slight. The content beneath stays legible and present—the person should know where they are—while clearly reading as inactive. Judge the rendered pair on the actual background; busy content can need slightly more dimming, and near-white surfaces slightly less.

## Working rules

- Pair a modal's shadow with dimming; the two communicate the layering together.
- Start at `80%` background content opacity and adjust to the rendered surface.
- Keep the dimmed content legible; the dimming marks inactivity, not removal.
- Preserve an existing interface's overlay treatment unless replacing it is part of the task.
