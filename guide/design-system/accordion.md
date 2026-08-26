---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Accordion

## When to use it

For a stack of peer sections where the person wants one or two at a time and the list has to stay scannable—FAQs, grouped settings, a filter panel. The closed state is the point: the headers form a map of what is there, and opening one is the person choosing a detour.

Not this: a single optional block is a collapsible—one section does not need a group. Sibling views of one subject, only one ever visible, is tabs. Content the person must compare, search for, or fill in before submitting a form does not belong behind a closed header; if it earns a place on the screen, show it.

## Sources

Trigger heights and padding from the button scaffold and control padding; header size from the type scale and the header weight role; the chevron from icon sizes, including its exception to the pairing table; dividers and fills from the gray scale; motion from the transition-levels principle. The methods do not yet document an accordion, so the divider, the panel padding, and the press treatment are a first pass.

## Anatomy

- **Trigger row** — a button height: M 40 or L 48, L the default, because a section header carries more weight than a control. Flush on a page the row takes no horizontal padding; inside a bordered or filled container it takes that size's control padding, 16 or 20.
- **Header** — 17 at medium, gray-1000: the base of the type scale, at the weight role for a header start.
- **Chevron** — 20, gray-500, at the trailing edge, rotating 180° on open. Chevrons are the documented exception to the 20-icon-with-16-text pairing; tune it optically against the header if the rendered relationship asks for it.
- **Divider** — 1px gray-200 between sections, full width. First pass.
- **Panel** — content 17 at regular, gray-900. Nothing above it: the trigger row's own height already separates them. **16** below, before the next divider. First pass.

If the sections are cards rather than a flush list, each card takes radius 10—the control radius—and the dividers go away. Pick one or the other; a list of cards with dividers is two systems.

## Motion

The panel's height and opacity animate together and the sections below move down. That is the level that changed; everything above the accordion holds still. Under reduced motion the panel appears without the height animation—the chevron still rotates.

## States

- **Press** — the row takes a gray-100 fill. A full-width row does not scale: the 0.9 press is for objects small enough to read as one pressable thing. First pass, and a deliberate departure.
- **Hover** (pointer only) — gray-50 fill, one step under the press fill.
- **Focus-visible** — 2px highlight outline, offset 2, on the trigger row.
- **Disabled** — 40% opacity, no press state.
