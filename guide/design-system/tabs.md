---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Tabs

## When to use it

For switching between sibling views of one subject—peers, arranged side by side, one visible at a time. The row is a place list: each tab is somewhere the person goes, and the row stays put while what sits under it changes. Reach for tabs when the views are equals and the person moves between them rather than reads them in order.

Not this: sections meant to be read in sequence are one scrolling page with headings, not tabs. A single optional block of detail is a collapsible; a stack of such blocks opened one at a time is an accordion. A one-of-several setting that takes effect immediately is the segmented toggle group—that changes a value, tabs change the view. And never split content across tabs that the person needs to compare.

## Sources

Row heights, padding, and text sizes from the button scaffold and control padding; the indicator color from the highlight scaffold; the icon pairing from icon sizes; states from the press scale and the focus and disabled defaults; the motion from the transition-levels principle. The methods do not yet document a tab row, so the indicator, the gap, and the hairline are a first pass.

## Sizes

Tabs take the button heights so the row lines up with the controls beside it: S 32 / M 40 / L 48, M the default. Padding-x 12 / 16 / 20, label 14 / 16 / 16—the same interior space a button of that size gets.

Tabs sit **4** apart. The indicator spans the tab's full width, padding included, so it reads as belonging to the tab and not to the word inside it. A 20 icon with 16 text may lead the label (16 at S), set **6** from it. First pass.

## Shape and color

- A 1px gray-200 hairline runs the full width of the row, under every tab. First pass.
- Active indicator: **2** tall, highlight color (scaffold: blue 500), radius full, sitting on the hairline. First pass.
- Labels stay at medium in every state. Active gray-1000, inactive gray-500.

Weight does not change with selection. The indicator and the color already say which tab is active; a third signal on one element is concentrating weight past the point where it means anything—and it would shift the row's width on every switch.

## Motion

Per the transition-levels principle: a tab switch fades through with a small translation on the x axis, in the direction of the tabs' order, so the views read as places arranged side by side. The indicator slides to the new tab. Everything at or above the row's level—the row itself, a search field above it, the app's chrome—holds still, because its scope did not change. Respect reduced motion: the indicator still moves, the content does not translate.

## States

- **Press** — scale to 0.9, the standard press default.
- **Hover** (pointer only) — inactive label to gray-600. One step, nothing else.
- **Focus-visible** — 2px highlight outline, offset 2.
- **Disabled** — 40% opacity, no press state. A disabled tab is usually a tab that should not be there; remove it instead.
