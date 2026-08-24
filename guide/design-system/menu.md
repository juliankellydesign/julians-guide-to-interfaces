---
type: component-spec
prompt: opt-in
scaffold: true
---

# Menu

## When to use it

For a list of actions opened from a visible trigger—an overflow button, an account button, a "more" affordance on a row. Every item does something; the menu is a place to put actions that have earned a name but not a permanent seat on the surface. Reach for it when three or more actions share a scope and none of them deserves the room a button would take.

Not this: a menu is not for choosing a value—that is a select, and it carries selection semantics a menu does not. It is not for content or controls anchored to a button—that is a popover. It is not opened by right-clicking an object—that is a context menu. And an action that matters on every visit belongs on the surface as a button, not hidden one click deep.

## Sources

Popup fill, border, shadow, offset, padding, and radius reused wholesale from the select spec's popup—one popup language, used again. Item heights and padding from the button ladder and control padding; the leading-icon pairing from icon sizes; separators and gaps from the spacing ladder; label weights from the font-weight roles; states from the press scale and the focus, hover, and disabled defaults. The methods do not yet document a menu, so item geometry is a first pass.

## Popup

- Anchored to its trigger, offset **4**. gray-0 fill, 1px gray-200 border, radius **12**, padding **4**, and the modal's overlay shadow, `0 12px 32px` black at 14%.
- Items land on radius **8** by the nested-radius formula (12 − 4).
- Width sized to the longest label, `min(280px, calc(100vw - 32px))`. First pass. A menu that needs to be wider is holding sentences, not actions.
- No scrim, no arrow. Nothing beneath is blocked, and being anchored already says which trigger it belongs to.

## Items

| Item height | Text | Icon | Padding-x |
| --- | --- | --- | --- |
| 40 (M, default) | 16 | 20 | 8 |
| 32 (S, dense pointer tools) | 14 | 16 | 8 |

- Label gray-1000 at regular. Leading icon gray-500, **8** from the label—the documented 20-icon-with-16-text pairing, tapering to 16/14 at S. First pass on the gap.
- A trailing keyboard shortcut sits in gray-500 at the item's own text size. A submenu takes a 20 chevron in gray-500 at the trailing edge; a submenu opens offset **4** from its parent popup, in the same popup language.
- Destructive items take the label and icon in a red at the 600 stop rather than gray. First pass—the methods document the gray scale and one highlight color, not a destructive color. One red item per menu is a warning; four is a color scheme.
- Separator: 1px gray-200 running the popup's full width, with **4** above and below. Use one only where a group boundary is real. First pass.
- A group label sits above its items at **13** medium in gray-500. Label groups or separate them, never both.

## States

- **Trigger press** — scale to 0.9, the standard press default.
- **Hover** (pointer only) and **highlighted** (keyboard) — gray-100 fill, one step along the gray scale. One treatment, one name to perceive.
- **Focus-visible** — 2px highlight outline, offset 2, on the trigger; inside the open popup, focus lives on the highlighted item, not a second ring.
- **Disabled** — 40% opacity, no hover, no press. A disabled item stays in place; items must not appear and disappear between openings.
