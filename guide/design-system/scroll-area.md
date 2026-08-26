---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Scroll area

## When to use it

For a bounded region inside a page that scrolls on its own—a select's popup list, a sidebar, a long code block, a table body. Use it when the platform's scrollbar would look different on every OS in an interface that is meant to look like one thing, or would sit on top of content that has to stay readable.

Not this: the page's main scroll belongs to the browser or the OS. Taking it over costs the person momentum, rubber-banding, and every habit they arrived with—leave it alone. A scroll area is also not a fix for a region that is too small. If content overflows because the layout gave it no room, change the layout.

## Sources

The methods do not yet document a scrollbar, so every dimension here is a first pass. The widths and insets come off the spacing ladder, the colors off the gray scale, the minimum thumb length off the 24 minimum visible affordance in the touch method, and the focus ring off the focus default.

## Scrollbar

- Thumb **6** wide, radius full, gray-400. Minimum length **24**, so a very long region still leaves something to grab.
- Inset **2** from the region's edge, which makes the gutter **10**.
- No track. A groove behind the thumb is one more thing to perceive and it says nothing the thumb does not already say.
- Reserve the gutter as padding on the region, always. Content that reflows the moment a scrollbar appears is worse than a scrollbar.
- If the region is clipped by a rounded container, its own radius follows the nested-radius formula: container radius minus the inset.

## Visibility

The scrollbar shows while the person scrolls and while a pointer is over the region, then fades out roughly 500ms after both stop. On touch it exists only during the scroll—there it is an indicator, not a control. A region that shows its scrollbar permanently is showing chrome.

## States

- **Hover** (pointer only) — thumb to gray-500. One step.
- **Drag** — thumb to gray-600. No press scale: the thumb is dragged, not pressed, and shrinking the thing under the finger would break the grab.
- **Focus-visible** — when the region is keyboard-scrollable, the region takes the 2px highlight outline at offset 2. The ring goes on the region, never on the thumb.
