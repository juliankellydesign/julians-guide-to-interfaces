---
type: principle
tags: [interface, rhythm]
---

# Put wayfinding at the top and primary actions at the bottom

## In brief

A good rule of thumb for what goes at the top and what goes at the bottom of a screen or container: broader navigation controls and settings go at the top, along with any wayfinding content—anything answering "where am I." Primary actions—submit, save, continue, send—go at the bottom. And a button at the bottom of a container is anchored there, with equal margin to the bottom and the side—both sides if it is full width.

## The top orients

The top of a screen or container is where a person looks to know where they are and how to leave. Navigation that reaches beyond the current screen, settings, and wayfinding content—titles, breadcrumbs, tabs—belong there. This is the same scope logic that governs action grouping: the broader an element's reach, the higher it sits.

## The bottom completes

Primary actions—submit, save, continue, send—end the task, so they sit where the task ends. A person reads and fills a screen top to bottom; the primary action at the bottom lets reading order reflect interaction order: orient, act, complete. The rule holds inside containers too—a modal carries its title at the top and its confirming action at the bottom.

## Anchor the bottom action

A small but important detail: a button at the bottom of a container is anchored to the bottom edge, not left to trail the content above it. Anchored means the button belongs to the container rather than to the content flow—when the content grows, the content flexes or scrolls, and the action holds its position at the edge where the task ends.

The anchor's geometry is what makes it read as deliberate: give the button equal margin to the bottom and to the side it sits against—and to both sides when it is full width. The equal inset traces the container's corner, so the button reads as part of the container's frame. A bottom gap that differs from the side gaps reads as an accident of layout flow rather than a decision, and a button that drifts with its content leaves the container ending in leftover space instead of an action.

## Working rules

- Put broader navigation controls and settings at the top of a screen or container.
- Put wayfinding content—anything answering "where am I"—at the top.
- Put primary actions—submit, save, continue, send—at the bottom.
- Let the vertical order mirror the flow: orient at the top, complete at the bottom.
- Anchor a button at the bottom of a container to the bottom edge; do not let it trail the content flow.
- Give an anchored bottom button equal margin to the bottom and its side—both sides when it is full width.
- When content grows, let the content flex or scroll; the anchored action holds its inset.
