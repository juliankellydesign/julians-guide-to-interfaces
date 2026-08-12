# Methods

## In brief

Methods document how I construct specific interface systems. They contain repeatable procedures, numerical defaults, and implementation starting points. Read them only when the task calls for building or deliberately replacing a system.

This directory plus [`../../data/foundations.json`](../../data/foundations.json) is the methods module: my design system as recipes and starting values. The module stands alone—an agent can implement the system from these files without reading the principles. The principles explain the judgment behind these recipes, but no method depends on them to be executable.

## Scaffolds

When a method explicitly lays out a system—the type scale, the gray curve, the ladders, the button sizes—those exact values are a **scaffold**: a starting point that gets a new interface up and running quickly, marked with `scaffold: true` in the method's frontmatter. A design system slotted in alongside the guide overrules scaffold values wherever they conflict. The recipes' reasoning and the principles still apply; only the numbers yield. Every scaffold value also remains subject to context and optical judgment.

## Current methods

| Method | Use it for |
| --- | --- |
| [Apply capitalization and punctuation](content/capitalization-and-punctuation.md) | Establishing casing and punctuation defaults for interface content |
| [Generate a type scale](typography/type-scale.md) | Creating a restrained interface type system from a base size |
| [Calculate tracking from the type scale](typography/tracking-curve.md) | Deriving size-dependent tracking with a shiftable font baseline |
| [Recalculate responsive type](typography/responsive-type.md) | Keeping tracking and line height coupled to the current rendered size |
| [Assign font weights by role](typography/font-weight-roles.md) | Mapping body, header, interactive, and attention roles to weights |
| [Build gray scales perceptually](color/perceptual-gray-scales.md) | Generating the 13-stop OKLCH neutral scale |
| [Build color scales perceptually](color/perceptual-color-scales.md) | Generating the six base 13-stop OKLCH hue scales from the gray lightness curve |
| [Generate transparent twins of the gray scale](color/transparent-scales.md) | Alpha whites and alpha near-blacks that visually match the opaque stops |
| [Build a spacing grid](layout/spacing-grid.md) | Choosing spacing tokens from the ladder on the 2px and 4px grid |
| [Pad icon and text controls](iconography/control-padding.md) | Balancing icon-only, text-only, and mixed controls |
| [Size icons from the tapering scale](iconography/icon-sizes.md) | The workhorse icon size, its tapering companions, and text pairings |
| [Choose control sizes by input method](interface/control-sizes.md) | Selecting numerical starting sizes for mouse and touch controls |
| [Build a corner-radius scale](interface/corner-radius-scale.md) | Choosing base corner radii from the laddered token scale |
| [Size and style buttons with t-shirt sizes](interface/button-sizes-and-styles.md) | The five button sizes and three styles, with finite ranges as the alarm |
| [Pad modal interiors more generously](interface/modal-padding.md) | Applying the modal interior padding default |
| [Dim beneath modals with a scrim](interface/scrim.md) | The 20% white scrim that pairs with a modal's shadow |
| [Calculate nested corner radii](interface/nested-corner-radii.md) | Establishing concentric radii for nested containers |
| [Choose platform motion timing](motion/platform-timing.md) | Selecting default web and touch durations |
| [Build animation rhythm and swing](motion/animation-rhythm-and-swing.md) | Using the 48-frame timing scaffold for complex animation |
| [Scale controls on press](motion/press-scale.md) | Applying the press-state scale default |

## Retrieval rules

- Do not read methods by default.
- Use a method for greenfield work, an explicit system-building task, or a request for my preferred procedure or values.
- Preserve an existing interface’s system unless the task explicitly includes replacing it.
- Treat every numerical value as a starting point, not a migration requirement.
- Read [`../../data/foundations.json`](../../data/foundations.json) only when exact machine-readable values are needed after selecting a method.
