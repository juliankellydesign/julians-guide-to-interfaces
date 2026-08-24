---
type: component-spec
prompt: opt-in
scaffold: true
---

# Field controls

## Text area

A text area uses the Input's border, fill, type, focus, placeholder, disabled, and radius roles. It starts at 96 high, uses 12 vertical and 16 horizontal padding, and grows when content requires it. A label sits 8 above; supporting or error text sits 6 below. Error state uses the semantic danger border and text roles without removing a written explanation.

## Select

A select uses the Input's S, M, and L dimensions. Its trailing chevron is 16, uses secondary text, and reserves the same horizontal padding on both sides so the label does not collide with it. Native or Base UI behavior owns keyboard navigation, focus, and announcement.

## Checkbox and radio

Both controls expose a 44 × 44 touch target on touch screens even though the visible mark is smaller. Desktop keeps the target at least 32 × 32.

- Checkbox: 20 × 20, radius 6, default border, primary action fill when selected.
- Radio: 20 × 20, full radius, default border, with an 8 × 8 primary-action dot when selected.
- Labels use primary text; supporting copy uses secondary text.
- Focus, disabled, and danger states use semantic roles shared with other controls.

The visible geometry communicates selection type: a checkbox permits independent choices; a radio communicates one choice in a set.
