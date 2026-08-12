---
type: method
prompt: opt-in
scaffold: true
---

# Pad modal interiors more generously

## In brief

Start modal interior padding at 24. I usually add a little more padding inside modals than inside inline components—the value is a scaffold from the spacing ladder, and a slotted-in design system overrules it.

## The starting value

```text
modal interior padding: 24px
```

The step up is deliberate but small: a little more, not a different world. The modal keeps the interface's spacing rhythm—24 sits on the spacing ladder—while its interior reads a touch more generous than the components on the screen beneath it.

## Working rules

- Start modal interior padding at 24.
- Keep the value on the spacing ladder so the modal stays in the interface's rhythm.
- Keep padding consistent across modals, and across screens, like any other component.
- Preserve an existing interface's modal treatment unless replacing it is part of the task.
