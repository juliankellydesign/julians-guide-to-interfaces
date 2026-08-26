# Interface

## In brief

Start with a clear problem or a specific interaction—and when the work is someone else's brief, interrogate the ask first (see [`../core-principles.md`](../core-principles.md)). Define the core interaction and core visual elements before styling the whole surface. Action hierarchy, vertical placement, control size, corner language, conventions, responsiveness, perceived speed, and deliberate empty and error states all communicate how the interface should be used. Repeating controls is governed by rhythm's repetition principle: repetition clarifies when meaning stays consistent (see [`../rhythm/repetition-builds-meaning.md`](../rhythm/repetition-builds-meaning.md)).

## Start with the problem or interaction

The best interfaces begin from one of two places:

- A clear problem that needs to be solved.
- A specific interaction worth exploring.

An interaction may initially be searching for a problem. That is acceptable when the work is described as an exploration.

## Every element earns its spot

Leaning on conventions versus diverging from them is a delicate, temporal dance—patterns become conventions and the line moves. When a conventional interface gains novel elements, introduce them one at a time and require each to prove itself. Never admit a pattern because it is shorthand for the technology behind it; if the capability is weak, fix the capability. The example: let search be search, then let conversational elements in one by one as they earn it.

See [`every-element-earns-its-spot.md`](every-element-earns-its-spot.md) for the full principle.

## Core interaction, core visuals

Before expanding the system, name:

1. The action the person takes.
2. The response the interface gives.
3. The visual elements required to make that exchange understandable.

Do not resolve the surrounding interface before the core interaction is clear.

## Layer communication deliberately

Use the simplest sufficient combination of layout, type, color, imagery, depth, and motion. Each added channel should contribute new information rather than repeat decoration.

## Give actions a clear hierarchy

Highlight one primary action on a surface, then reduce the prominence of secondary and tertiary actions according to their importance. A surface can contain as many secondary actions as it needs, but only one action should read as primary. Keep visually grouped controls to two or three hierarchy levels and generally use the same control size within the group. Use fill, contrast, and stroke to communicate priority before changing dimensions.

When another element needs attention, first confirm which action is primary. Then determine whether the competing element is better represented as an error, warning, or notification. Use grouping or size to separate actions only when they belong to different scopes.

See [`action-hierarchy.md`](action-hierarchy.md) for the full principle.

## Size controls for the input method

Mouse input supports denser controls than touch input. Choose control size according to the actual input method, intended density, and importance of the action. On touch interfaces, the visible affordance can be smaller than its interactive target, but adjacent targets must remain distinct and reliable to hit.

See [`interactive-control-sizing.md`](interactive-control-sizing.md) for the principle. Load [`../methods/interface/control-sizes.md`](../../methods/interface/control-sizes.md) only when exact starting values are needed.

## Match the interface to the fidelity of the input

Adaptation is an obligation, not an allowance. Desktop products built with mobile values feel mushy—animations too long, buttons too big—because the input got more precise while the interface stayed the same. Control sizes, density, and motion timing should change with input method and screen size; roles, hierarchy, and meaning stay constant.

See [`input-fidelity.md`](input-fidelity.md) for the full principle.

## Put wayfinding at the top and primary actions at the bottom

A rule of thumb for the vertical anatomy of a screen or container: broader navigation controls, settings, and wayfinding content—anything answering "where am I"—go at the top. Primary actions—submit, save, continue, send—go at the bottom, where the task ends. Orient at the top, complete at the bottom, and the same holds inside a modal.

See [`top-and-bottom.md`](top-and-bottom.md) for the full principle.

## Use corner rounding as interface language

The amount of corner rounding is mostly a matter of taste, but rounded controls have become a familiar signal of interactivity. Nested elements should generally be less rounded than their containers, with more attention paid to concentricity as the outer radius grows.

See [`corner-rounding.md`](corner-rounding.md) for the principle. Load [`../methods/interface/nested-corner-radii.md`](../../methods/interface/nested-corner-radii.md) only when constructing or replacing a radius system.

## Use shadows as a tool

Shadows are a tool, not a theme—never all-or-nothing. Hold one meaning per shadow everywhere it applies and leave everything else flat: overlays get shadows, elements on media get shadows, physically manipulable elements get shadows, and an attention shadow applies to every element of its type. Strokes follow the same selective consistency. A shadow must also read apart from its container—a 20% black shadow around a 20%-lightness container blends muddily, and an unreadable shadow gets questioned before it gets tuned.

See [`shadows.md`](shadows.md) for the full principle. Load [`../../methods/interface/scrim.md`](../../methods/interface/scrim.md) only for the exact scrim default.

## Design both the map and the landscape

The product’s functionality is the landscape and the interface is the map that explains it. Use familiar conventions when they describe the behavior accurately. When no established shorthand exists, define a local convention, teach it clearly, and apply it consistently.

See [`map-and-landscape.md`](map-and-landscape.md) for the full principle.

## Design for perceived speed

Immediate acknowledgment, stable layout, clear sequencing, and short transitions affect how fast an interface feels. Protect responsiveness before adding visual effects.

## Treat empty and error states as opportunities

Empty states, 404s, and no-network pages are opportunities for a little delight and for user education. Soften the dead end, teach what the state means and what to do next, and let the explanation lead the flourish. The no-network page deserves particular care—I usually invest in a really great animation there, since the person is waiting with nothing to do.

See [`empty-and-error-states.md`](empty-and-error-states.md) for the full principle.

## A musing: nesting buttons in inputs

An open lean rather than a settled principle: buttons are best nested inside inputs when they take action on the content within—a send button in a composer, a submit in a search field. Nesting is the strongest grouping claim an interface can make, so a button whose action reaches beyond the input's content stays outside.

See [`nesting-buttons-in-inputs.md`](nesting-buttons-in-inputs.md) for the musing and its status.

## Use personal taste as scaffolding

Personal references and preferences can reduce decision load and provide useful starting constraints. They can include a pet font, an animation style worth exploring, or a meaningful piece of music used to establish timing.

Use taste to begin making decisions faster, then test those decisions against the actual problem. See [`personal-taste-as-scaffolding.md`](personal-taste-as-scaffolding.md) for the full principle.
