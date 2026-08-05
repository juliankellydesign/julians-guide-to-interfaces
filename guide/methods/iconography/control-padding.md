---
type: method
prompt: opt-in
---

# Pad icon and text controls

## In brief

Change a control’s padding according to whether it contains an icon, text, or both. Icon-only controls generally use uniform padding. Text needs more horizontal padding than vertical padding. A control with text on the left and an icon on the right usually needs more padding on the left than on the other three sides.

## Icon-only controls

Use the same padding on all four sides. The visible icon should have an even relationship to the top, right, bottom, and left edges of its container.

## Text-only controls

Use more padding on the left and right and less on the top and bottom. Lowercase letters and font metrics create visible white space inside the text box, so mechanically uniform padding can make a text control feel too tall and too narrow.

## Text with a trailing icon

For a control with text on the left and an icon on the right:

- Keep the top, bottom, and right padding approximately equal.
- Add slightly more padding on the left.

The icon provides a stronger visible edge on the right. The text side needs more room to balance the control optically.

## Adjust optically

These are proportional patterns, not fixed token values. Font metrics, icon bounds, stroke weight, and container shape all affect the visible result. Start with the pattern that matches the content, then adjust until the control feels balanced.

## Working rules

- Use uniform padding for icon-only controls.
- Use more horizontal than vertical padding for text-only controls.
- For text followed by an icon, begin with equal top, bottom, and right padding and slightly more left padding.
- Compare visible shapes rather than relying only on font or SVG bounds.
- Preserve an existing component system unless changing its control padding is part of the task.
