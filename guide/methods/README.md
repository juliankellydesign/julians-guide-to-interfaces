# Methods

## In brief

Methods document how I construct specific interface systems. They contain repeatable procedures, numerical defaults, and implementation starting points. Read them only when the task calls for building or deliberately replacing a system.

This directory plus [`../../data/foundations.json`](../../data/foundations.json) is the applied layer: my design system. The layer stands alone—an agent can implement the system from these files without reading the theory. The principles explain the judgment behind these recipes, but no method depends on them to be executable.

## Current methods

| Method | Use it for |
| --- | --- |
| [Apply capitalization and punctuation](content/capitalization-and-punctuation.md) | Establishing casing and punctuation defaults for interface content |
| [Generate a type scale](typography/type-scale.md) | Creating a restrained interface type system from a base size |
| [Calculate tracking from the type scale](typography/tracking-curve.md) | Deriving size-dependent tracking with a shiftable font baseline |
| [Recalculate responsive type](typography/responsive-type.md) | Keeping tracking and line height coupled to the current rendered size |
| [Assign font weights by role](typography/font-weight-roles.md) | Mapping body, header, interactive, and attention roles to weights |
| [Build gray scales perceptually](color/perceptual-gray-scales.md) | Generating the 13-stop OKLCH neutral scale |
| [Build a spacing grid](layout/spacing-grid.md) | Choosing spacing values on the 2px and 4px grid |
| [Pad icon and text controls](iconography/control-padding.md) | Balancing icon-only, text-only, and mixed controls |
| [Choose control sizes by input method](interface/control-sizes.md) | Selecting numerical starting sizes for mouse and touch controls |
| [Calculate nested corner radii](interface/nested-corner-radii.md) | Establishing concentric radii for nested containers |
| [Choose platform motion timing](motion/platform-timing.md) | Selecting default web and touch durations |
| [Build animation rhythm and swing](motion/animation-rhythm-and-swing.md) | Using the 48-frame timing scaffold for complex animation |

## Retrieval rules

- Do not read methods by default.
- Use a method for greenfield work, an explicit system-building task, or a request for my preferred procedure or values.
- Preserve an existing interface’s system unless the task explicitly includes replacing it.
- Treat every numerical value as a starting point, not a migration requirement.
- Read [`../../data/foundations.json`](../../data/foundations.json) only when exact machine-readable values are needed after selecting a method.
