# Principles

## In brief

Principles explain how I approach and judge interface design. Use them by default. They should guide decisions without forcing an existing interface to adopt my preferred type scale, gray scale, spacing grid, or motion timings.

This directory is the complete principles module. It is self-contained: pass it to an agent on its own for work inside an existing visual system, or pair it with the methods module when my starting values should apply. It never requires the methods to be understood.

## Tags

Every principle file carries `type: principle` and a `tags` list in its frontmatter. Tags come from the shared taxonomy defined in the [guide index](../README.md#tags). A file carries more than one tag when its idea belongs to more than one discipline—grouping actions by scope is both rhythm and interface—so retrieve by tag, not by directory, when the task crosses disciplines.

## Foundations

The `process` tag marks the always-loaded judgment kernel: discipline-independent rules that change what gets made on every task.

- [`core-principles.md`](core-principles.md) — purpose, problems, interactions, interrogating the ask, restraint, and performance. Read it first on every task.
- [`human-judgment.md`](human-judgment.md) — math as a tool, feeling as evidence, and optical judgment across disciplines.

Guidance about sustaining the work itself—altitude, the three voices, earned simplicity—is [practice](../practice/README.md), not principle: normative for the designer rather than the design, and excluded from agent prompts.

## Disciplines

Each discipline README summarizes its principles and points to the methods that pair with them.

| Discipline | Use it for |
| --- | --- |
| [Content](content/README.md) | Interface writing, labels, instructions, tone |
| [Typography](typography/README.md) | Type hierarchy and typographic relationships |
| [Rhythm](rhythm/README.md) | Layout, grouping, alignment, spatial rhythm |
| [Interface](interface/README.md) | Product framing and interaction design |
| [Imagery](imagery/README.md) | Iconography, image selection, and art direction |
| [Motion](motion/README.md) | Animation purpose and platform behavior |

Color has no principles yet; it exists only in the methods module for now.

## File index

| File | Tags | Teaches |
| --- | --- | --- |
| [`content/dashes.md`](content/dashes.md) | content | Em dashes, en dashes, and hyphens by function |
| [`typography/all-caps.md`](typography/all-caps.md) | typography | All caps as a functional response to limited space |
| [`typography/numeric-figures.md`](typography/numeric-figures.md) | typography | Figure styles chosen by the number's behavior |
| [`typography/quotation-apostrophe-prime-marks.md`](typography/quotation-apostrophe-prime-marks.md) | typography, content | The right mark for quotation, omission, or measurement |
| [`typography/responsive-type.md`](typography/responsive-type.md) | typography | Size, tracking, and line height as one responsive system |
| [`typography/text-alignment.md`](typography/text-alignment.md) | typography, rhythm | Alignment by role, starting from the left edge |
| [`rhythm/adding-styles.md`](rhythm/adding-styles.md) | rhythm, process | Ask twice before adding a style; bind treatments to types |
| [`rhythm/balancing-left-heavy-layouts.md`](rhythm/balancing-left-heavy-layouts.md) | rhythm | One right-aligned counterweight rescues a left-heavy layout |
| [`rhythm/consistency-and-keylines.md`](rhythm/consistency-and-keylines.md) | rhythm, color | Consistent sizes and colors so variation carries meaning |
| [`rhythm/group-actions-by-scope.md`](rhythm/group-actions-by-scope.md) | rhythm, interface | Visual grouping must match functional scope |
| [`rhythm/margins-and-padding.md`](rhythm/margins-and-padding.md) | rhythm | Padding stays consistent; margins absorb the screen |
| [`rhythm/repetition-builds-meaning.md`](rhythm/repetition-builds-meaning.md) | rhythm, interface | Repeated gestures accumulate stable meaning |
| [`rhythm/rhythm-and-swing.md`](rhythm/rhythm-and-swing.md) | rhythm | Establish rhythm first, then break it on purpose |
| [`rhythm/scroll-under-alignment.md`](rhythm/scroll-under-alignment.md) | rhythm, motion | Offset the padding of layers that scroll under each other |
| [`rhythm/visual-weight.md`](rhythm/visual-weight.md) | rhythm | Rank importance, then spend weight sources deliberately |
| [`interface/action-hierarchy.md`](interface/action-hierarchy.md) | interface | One primary action per surface, quieter steps below it |
| [`interface/corner-rounding.md`](interface/corner-rounding.md) | interface | Rounding as interface language; concentricity when visible |
| [`interface/empty-and-error-states.md`](interface/empty-and-error-states.md) | interface, content, motion | Dead ends as opportunities for delight and education |
| [`interface/every-element-earns-its-spot.md`](interface/every-element-earns-its-spot.md) | interface, process | Novel elements enter a conventional interface with proof |
| [`interface/input-fidelity.md`](interface/input-fidelity.md) | interface, motion | Density and timing match the input; roles stay constant |
| [`interface/interactive-control-sizing.md`](interface/interactive-control-sizing.md) | interface | Control size follows the input method and intended density |
| [`interface/map-and-landscape.md`](interface/map-and-landscape.md) | interface | Conventions first, internal consistency where none exist |
| [`interface/nesting-buttons-in-inputs.md`](interface/nesting-buttons-in-inputs.md) | interface, rhythm | A musing: nest a button only when it acts on the content |
| [`interface/personal-taste-as-scaffolding.md`](interface/personal-taste-as-scaffolding.md) | process, interface | Taste as starting constraints, never as justification |
| [`interface/shadows.md`](interface/shadows.md) | interface | Shadows as a selective tool with one consistent meaning |
| [`interface/top-and-bottom.md`](interface/top-and-bottom.md) | interface, rhythm | Orient at the top, complete at the bottom; anchor the bottom action with equal margins |
| [`imagery/iconography-and-type.md`](imagery/iconography-and-type.md) | imagery, typography | An icon's role sets its relationship to type |
| [`imagery/icon-sizing.md`](imagery/icon-sizing.md) | imagery, typography | Tapered icon sizes with consistent text pairings |
| [`motion/continuous-transitions.md`](motion/continuous-transitions.md) | motion | Continuity only between elements that do the same thing |
| [`motion/press-states.md`](motion/press-states.md) | motion, interface | Every control gets a juicy, immediate press state |
| [`motion/transition-levels.md`](motion/transition-levels.md) | motion | Animate the level that changes; stillness communicates scope |

## Existing interfaces

Apply these principles through the interface’s established visual language. Do not replace its tokens or generated systems unless the task explicitly includes that change.
