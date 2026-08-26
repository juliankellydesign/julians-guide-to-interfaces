---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Menubar

## When to use it

For a persistent horizontal row of top-level menus at the top of a window—File, Edit, View and their kin. Reach for it in a document-shaped desktop application with more commands than any toolbar could hold, where people need a complete, stable, browsable index of everything the app can do. Its value is completeness: if a command exists, it is in here, in the same place every time.

Not this: a menubar is not navigation—moving between sections of a site or app is a navigation menu. It is not for a handful of frequent actions; those go in a toolbar, where they are one click away instead of two. It is not a single button-triggered menu, and it is not for touch or mobile, where 14px triggers and hover-to-switch behavior do not survive.

## Sources

Trigger heights and padding from the button ladder and control padding; the open and hover fills from the gray scale; every popup and item value reused from the menu spec; text sizes from the button spec's pairings; weights from the font-weight roles; placement from the top-and-bottom principle. The methods do not yet document a menubar, so the bar height, the trigger radius, and the gap are a first pass.

## Bar

- Height **32**, spanning the top of the window, above any toolbar—broad wayfinding at the top, per top-and-bottom. gray-0 fill with a 1px gray-200 bottom border, no radius, no shadow. The bar is a boundary, not a raised object.
- This is a pointer control at the dense end of the control-size range, and it is meant to be: the menubar is for people who already know their way around.

## Triggers

- Each top-level trigger is XS (**24**) tall, centered in the bar with **4** above and below, padding-x **8**, radius **6**—smaller than the control radius 10 because the control itself is smaller. First pass.
- Label **14** at medium in gray-900. No icons, no chevrons: a word in a menubar already means "there is a menu here," and a chevron on every one of them is six elements saying nothing.
- Triggers sit **2** apart, the cluster gap. Order them by convention first, frequency second; the order never changes between sessions.

## Popups

The menu spec's popup, unchanged: gray-0 fill, 1px gray-200 border, radius **12**, padding **4**, items at radius **8** and 32 (S) tall with 14 text and 16 leading icons, shortcuts and submenus as documented there. The popup aligns to its trigger's leading edge, offset **4** below the bar. Once one menu is open, moving across the bar switches menus without a second click.

## States

- **Hover** (pointer only) — trigger gains a gray-100 fill, one step along the gray scale.
- **Open** — gray-200 fill held for as long as its popup is open. One step further, so the open trigger reads as the source of the popup rather than merely hovered. First pass.
- **Press** — scale to 0.9, the standard press default, on the trigger only. The bar itself never moves.
- **Focus-visible** — 2px highlight outline, offset 2, on the trigger the roving focus lands on.
- **Disabled** — 40% opacity. Whole menus rarely disable; individual items do.
