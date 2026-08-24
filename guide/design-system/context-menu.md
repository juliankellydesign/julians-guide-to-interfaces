---
type: component-spec
prompt: opt-in
scaffold: true
---

# Context menu

## When to use it

For actions scoped to one specific object, opened on that object by right-click or long-press—a file, a row, a shape on a canvas, a selection of text. What makes it a context menu is not the popup but the target: the person pointed at a thing first, and every item acts on that thing. Reach for it in tools where people work on many objects and the actions would clutter every one of them.

Not this: a context menu is never the only route to an action. It is an accelerator for people who already know it exists, so everything in it must also be reachable from a visible control—a menu, a toolbar, or a keyboard shortcut. If the action has no other path, it needs a button. If the popup is opened from a visible trigger, that is a menu. If it holds settings rather than actions, it is a popover.

## Sources

The entire surface—popup fill, border, radius, padding, shadow, item heights, icons, shortcuts, separators, and states—is the menu spec, reused unchanged. Only the positioning and the target treatment are specific to this component, and both are a first pass; the methods do not yet document a context menu.

## Surface

Identical to [`menu.md`](menu.md): gray-0 fill, 1px gray-200 border, radius **12**, padding **4**, items at radius **8**, the modal's overlay shadow. Items are M (40) with 16 text and 20 leading icons, S (32) with 14 and 16 in dense pointer tools. Nothing new enters on open—a context menu that looks different from a menu is two things to learn for one idea.

## Position

- Positioned at the pointer, not anchored to a control, offset **4** down and to the right of the click point so the cursor does not sit on the first item.
- Flips side or corner to stay on screen; the corner nearest the click point is the one that stays put. First pass.
- On long-press, the popup opens clear of the finger rather than under it, and items take the M (40) height with the 44 touch minimum honored on the row.

## Target

The object that was right-clicked shows it is the target for as long as the menu is open: a 2px highlight-color outline, offset 2—the focus treatment, doing the same job. Without it a person with two rows under the cursor cannot tell which one the menu belongs to. First pass.

## States

- **Hover** (pointer only) and **highlighted** (keyboard) — gray-100 fill, as in the menu.
- **Focus-visible** — focus lives on the highlighted item; the menu never draws a ring around itself.
- **Disabled** — 40% opacity, no press. Keep disabled items in place: the shape of the menu is how people learn where things are.
