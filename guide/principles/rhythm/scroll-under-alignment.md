---
type: principle
tags: [rhythm, motion]
---

# Offset the padding of scrolling layers

## In brief

When an element scrolls under another element, do not give both layers the exact same edge padding. Edges that coincide exactly meet as the content passes, and the two independent layers read as one awkward join. Offset one layer's padding so the edges clearly pass each other.

## Example: the awkward join

Imagine a 402px-wide device with search results padded 16px on the left and right. The results scroll under a nav containing circle buttons that also sit 16px from the screen edges. The moment a result passes the nav, the edges of the circle buttons perfectly hit the edges of the search results—two unrelated shapes kiss, and the coincidence reads as a designed connection that then breaks as scrolling continues.

**Transferable point:** layers that scroll past each other must not share exact edge padding; offset one decisively and judge the pair in motion.

## Why coincident edges fail between layers

Alignment communicates relationship. Within one plane, shared edges tell the reader that elements belong together, and that is exactly why the same alignment misfires across planes: a scrolling layer and a fixed layer are not related, but at the moment of overlap their shared edge claims they are. The join draws attention precisely because everything else in a well-aligned interface makes shared edges meaningful.

A static layout cannot show this failure. Two layers with equal padding look correct in a mock and only collide in motion.

## Offset deliberately

Give one layer a different inset so the edges pass rather than meet. The offset does not need to be large, but it should be decisive enough that the passing edges read as intentionally independent rather than nearly aligned.

Judge the result by scrolling it. Like other optical decisions, the failure and the fix are only visible in the rendered, moving interface.

## Working rules

- Check every pair of layers where content scrolls under a fixed element.
- Do not give the fixed layer and the scrolling layer the exact same edge padding.
- Make the offset decisive; nearly equal padding still reads as a failed join.
- Judge scroll-under relationships in motion, not in static mocks.
- Keep alignment within a single plane; shared edges remain the rule for elements on the same layer.
