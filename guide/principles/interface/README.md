# Interface

## In brief

Start with a clear problem or a specific interaction. Define the core interaction and core visual elements before styling the whole surface. Action hierarchy, control size, repetition, corner language, conventions, responsiveness, perceived speed, and deliberate empty and error states all communicate how the interface should be used.

## Start with the problem or interaction

The best interfaces begin from one of two places:

- A clear problem that needs to be solved.
- A specific interaction worth exploring.

An interaction may initially be searching for a problem. That is acceptable when the work is described as an exploration.

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

## Repeat actions when repetition adds meaning

Avoid showing identical controls at the same time when they perform different actions. Use proximity, containers, specific labels, or progressive disclosure to make their context clear. Repeat controls deliberately when the repeated meaning is consistent and teaches a reusable convention.

See [`action-repetition.md`](action-repetition.md) for the full principle.

## Use corner rounding as interface language

The amount of corner rounding is mostly a matter of taste, but rounded controls have become a familiar signal of interactivity. Nested elements should generally be less rounded than their containers, with more attention paid to concentricity as the outer radius grows.

See [`corner-rounding.md`](corner-rounding.md) for the principle. Load [`../methods/interface/nested-corner-radii.md`](../../methods/interface/nested-corner-radii.md) only when constructing or replacing a radius system.

## Design both the map and the landscape

The product’s functionality is the landscape and the interface is the map that explains it. Use familiar conventions when they describe the behavior accurately. When no established shorthand exists, define a local convention, teach it clearly, and apply it consistently.

See [`map-and-landscape.md`](map-and-landscape.md) for the full principle.

## Design for perceived speed

Immediate acknowledgment, stable layout, clear sequencing, and short transitions affect how fast an interface feels. Protect responsiveness before adding visual effects.

## Treat empty and error states as opportunities

Empty states, 404s, and no-network pages are opportunities for a little delight and for user education. Soften the dead end, teach what the state means and what to do next, and let the explanation lead the flourish. The no-network page deserves particular care—I usually invest in a really great animation there, since the person is waiting with nothing to do.

See [`empty-and-error-states.md`](empty-and-error-states.md) for the full principle.

## Use personal taste as scaffolding

Personal references and preferences can reduce decision load and provide useful starting constraints. They can include a pet font, an animation style worth exploring, or a meaningful piece of music used to establish timing.

Use taste to begin making decisions faster, then test those decisions against the actual problem. See [`personal-taste-as-scaffolding.md`](personal-taste-as-scaffolding.md) for the full principle.
