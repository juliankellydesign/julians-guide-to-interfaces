---
type: principle
tags: [typography, rhythm]
---

# Align text according to its role

## In brief

In left-to-right interfaces, begin with left alignment. Use right alignment for groups of numeric values, center button labels by default, and use centered title blocks when they need to read as distinct from the content below. Communicate the boundary when alignment changes.

## Scope this guidance to left-to-right languages

The rules in this file assume a left-to-right reading direction. Do not apply them unchanged to right-to-left or vertically written languages. Adapt the starting edge and reading flow to the language.

## Start with left alignment

Left-align text by default. A shared left edge is a reliable scaffold for headings, body copy, labels, and controls. It establishes a consistent reading path before any role needs different treatment.

## Right-align comparable numbers

Right-align numeric values when multiple values appear vertically together. This is one of the clearest reasons to use right alignment in a left-to-right interface.

Use the numeric figure and decimal-alignment rules in [`numeric-figures.md`](numeric-figures.md) when the values need to be compared.

A single numeric value can use whichever alignment best fits its context.

## Center button labels by default

Center a button label within the button by default. The centered label communicates one primary action inside a bounded control.

Left-align the label when the button includes a distinct anchor on the right, such as an icon or secondary label. The right-side element balances the composition and gives the left-aligned label a reason.

## Use centered title blocks to change mode

Center alignment can distinguish a title block from the rest of a page. A centered title, subtitle, and related elements at the top can establish an introductory mode before the interface moves into left-aligned content.

Center alignment should identify a block with a different role. Do not center isolated paragraphs only to add variety.

## Communicate the change in alignment

When centered content transitions to left-aligned content, add a visual boundary that connects the two alignments.

Useful boundaries include:

- A container around the centered content whose visible bounds align with the left-aligned content below, with optical correction where needed
- A horizontal rule above the left-aligned content

Without a boundary, the centered block and left-aligned content can appear unrelated.

## Working rules

- Apply these rules to left-to-right languages.
- Begin with left alignment.
- Right-align vertically grouped numeric values.
- Align a single numeric value according to its context.
- Center button labels by default.
- Left-align a button label when a right-side icon or secondary label provides an anchor.
- Use centered title blocks to distinguish introductory content from the main content.
- Add a container edge, horizontal rule, or another clear boundary when moving from centered to left-aligned content.
