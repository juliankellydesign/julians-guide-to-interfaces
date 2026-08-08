# Principles

## In brief

Principles explain how I approach and judge interface design. Use them by default. They should guide decisions without forcing an existing interface to adopt my preferred type scale, gray scale, spacing grid, or motion timings.

This directory is the complete principles module. It is self-contained: pass it to an agent on its own for work inside an existing visual system, or pair it with the methods module when my starting values should apply. It never requires the methods to be understood.

## Foundations

- [`00-core-principles.md`](00-core-principles.md) — purpose, problems, interactions, restraint, and performance
- [`01-human-judgment.md`](01-human-judgment.md) — math as a tool, feeling as evidence, and swing across disciplines

## Disciplines

| Discipline | Use it for | Current principles |
| --- | --- | --- |
| [Content](content/README.md) | Interface writing, labels, instructions, tone | Purpose, directness, useful style, capitalization, functional punctuation, dashes |
| [Typography](typography/README.md) | Type hierarchy and typographic relationships | Hierarchy, weight, responsive spacing, numeric figures, punctuation glyphs, alignment, optical judgment |
| [Rhythm](rhythm/README.md) | Layout, grouping, alignment, spatial rhythm | Gestalt, proximity, optical alignment, contextual action grouping, repeated meaning, rhythm, swing, 1-3-9 proportion, scroll-layer offsets, consistency and keylines |
| [Interface](interface/README.md) | Product framing and interaction design | Problems, interactions, action hierarchy, input sizing, input fidelity, repeated actions, corner rounding, conventions, perceived speed, empty and error states, personal taste as scaffolding |
| [Imagery](imagery/README.md) | Iconography, image selection, and art direction | Icons in relation to type, tapered icon sizing paired with text; broader image guidance remains undeveloped |
| [Motion](motion/README.md) | Animation purpose and platform behavior | Continuity, causality, responsiveness, accessibility, continuous transitions only between equivalent elements, animating the level that changes |

## Existing interfaces

Apply these principles through the interface’s established visual language. Do not replace its tokens or generated systems unless the task explicitly includes that change.
