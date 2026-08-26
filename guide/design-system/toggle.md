---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Toggle

## When to use it

For a button that stays pressed: bold, mute, pin, show-grid. It lives near the thing it affects—a toolbar, a formatting bar, the edge of a canvas—and its pressed state is the readout of a mode the person is working inside. It is usually icon-only, because a toolbar full of words stops being a toolbar.

Not this: a labelled setting on a settings screen is a switch. A choice inside a form is a checkbox. An action that runs once and returns to rest is a button. Several toggles that belong to one decision go in a toggle group.

## Sources

Heights and radius from the button spec; icon size from the icon-sizes taper; padding from the control-padding pattern; fills stepped along the documented gray scale; press, focus, and disabled from the button spec's states. The methods do not yet document a toggle, so the pressed fill and its hover step are a first pass.

## Sizes

Button heights, and square when the toggle is icon-only:

| Size | Box | Icon | Padding-x with label |
| --- | --- | --- | --- |
| XS | 24 | 16 | 8 |
| S | 32 | 16 | 12 |
| M | 40 | 20 | 16 |

S is the default in a toolbar; M when the toggle sits among M buttons. Radius **10**, shared with buttons and inputs. On touch the target extends to **44** even when the visible box is 24 or 32.

## Color

One step per state along the gray scale, so unpressed, hover, and pressed are legible as three rungs of one ladder:

- **Unpressed** — no fill, gray-700 icon. The button's tertiary style with the outline dropped; a toolbar of outlined boxes is noise.
- **Pressed** — gray-100 fill, gray-1000 icon. First pass.

Reach for the highlight color on a pressed toggle only when the mode it holds is the most important thing on the surface. Most toolbars do not qualify.

## States

- **Press** — scale to 0.9.
- **Hover** (pointer only) — one step: gray-50 fill unpressed, gray-200 fill pressed. First pass.
- **Focus-visible** — 2px highlight outline, offset 2.
- **Disabled** — 40% opacity, no press state.

An icon-only toggle always carries a text label for assistive technology and, on pointer platforms, a tooltip. An icon nobody can name is decoration.
