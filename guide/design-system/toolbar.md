---
type: component-spec
prompt: opt-in
scaffold: true
---

# Toolbar

## When to use it

For a persistent row of controls acting on the content beside or beneath it—an editor's formatting row, a canvas's tools, the actions above a table. Reach for it when the same small set of actions is needed repeatedly while the person works, and a click of hunting each time would be a tax. Group by scope: what each control acts on. One group per scope, ordered by how often it is reached.

Not this: a toolbar is not navigation—that is a navigation menu. It is not the complete index of everything the app can do; that is a menubar, and a toolbar is the shortlist pulled out of it. A single action next to the thing it affects is a button. And a set of options that are one decision—alignment, a view mode—is a toggle group, which lives inside a toolbar rather than replacing it.

## Sources

Bar heights derived from the button ladder plus padding from the spacing ladder; control sizes, padding, and radius 10 from the button spec; icon sizes from the icon pairings; the intra-group gap from the toggle-group cluster; divider color from the gray scale; overflow behavior from the menu spec; states from the press scale and the hover, focus, and disabled defaults. The methods do not yet document a toolbar, so the bar heights, group gap, and divider are a first pass.

## Bar

The bar is its controls plus padding—no independent height:

| Input | Controls | Padding | Bar height |
| --- | --- | --- | --- |
| Pointer | S (32) | 4 | 40 |
| Touch | M (40) | 8 | 56 |

gray-0 fill. Spanning an edge of the window: 1px gray-200 border on the side facing the content, radius **0**, no shadow. Floating over the content: radius **12**, controls inside staying at 10, and the overlay shadow `0 12px 32px` black at 14%—a floating toolbar is an overlay, a docked one is not. First pass.

## Groups

- Controls inside a group sit **2** apart, the cluster gap from the toggle group.
- Groups sit **12** apart. Space first. Add a 1px gray-200 divider, inset **8** from the top and bottom of the bar, only where the space alone stops reading—a divider between every pair is a picket fence. First pass.
- Controls are tertiary buttons: no fill, gray-900 content. A toolbar full of secondary fills is a wall of boxes. At most one control may be primary, and only if the screen's main action genuinely lives here.
- Icon-only controls take uniform padding per control padding—**20** icon at M, **16** at S, in a square the height of the control—and every one of them gets a tooltip. If it cannot be named in two words, it needs a label instead.

When the bar runs out of room, the least-reached group collapses—whole, never item by item, from the trailing edge inward—behind one icon-only button with a 20 ellipsis, opening the menu spec's popup. Nothing silently disappears.

## States

- **Press** — scale to 0.9 on the control, never the bar.
- **Hover** (pointer only) — gray-100 fill at the control's radius **10**. One step along the gray scale.
- **Active** (a pressed tool or applied format) — gray-200 fill, gray-1000 content, held. Fill carries it; do not also change the icon.
- **Focus-visible** — 2px highlight outline, offset 2, on the control the roving focus lands on.
- **Disabled** — 40% opacity, no press. Disable in place; a toolbar whose controls move as state changes cannot be learned.
