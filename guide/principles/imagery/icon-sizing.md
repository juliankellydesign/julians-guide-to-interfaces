---
type: principle
tags: [imagery, typography]
---

# Taper icon sizes and pair them with text

## In brief

Icon sizes follow a tapering frequency: mostly one workhorse size, a few in a second size, one or two in a third, and keep tapering off. When an icon accompanies text, size it relative to that text and keep the pairing consistent—the same icon size always accompanies the same text size. Chevrons and arrows are the exception.

## Mostly one size

An interface does not need many icon sizes; it needs one size that does most of the work and a short tail of others. The taper is the discipline: each step away from the workhorse size should appear less often, and a size that appears everywhere alongside the workhorse is a sign the system has split in two.

The same consistency logic that governs element sizing applies here—every additional icon size is visual noise unless its difference communicates something.

## Size icons against their text

When an icon accompanies text, its size should derive from that text, and the pairing should hold everywhere: one icon size always accompanies one text size. A consistent pairing means icon-and-label rows across the interface agree with each other without per-instance tuning, and a reader learns the relationship once.

## Chevrons and arrows are the exception

Carets, chevrons, and directional arrows behave like punctuation rather than interface shorthand, and they are tuned optically against the specific text they complete. They may leave the pairing table when the rendered relationship requires it. See [`iconography-and-type.md`](iconography-and-type.md) for the underlying role distinction.

## Working rules

- Use one workhorse icon size for most of the interface, tapering the frequency of every other size.
- Treat a second heavily-used size as a sign the system has split.
- Derive an accompanying icon's size from its text, and keep each pairing consistent everywhere it appears.
- Allow chevrons and arrows to leave the pairing for optical tuning against their text.
- Judge rendered icon-and-text relationships optically; boxes and metrics are starting points.
