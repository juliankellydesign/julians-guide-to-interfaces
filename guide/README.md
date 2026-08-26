# Guide index

## In brief

Use this file as a router. The guide is deliberately dual-purpose: a tool for agents (pass the principles alone, or principles and methods together) and a teaching guide for humans learning interaction design—working rules and specs are the agent-facing kernel, while prose, examples, and the website carry the teaching. The guide splits into two layers: theory and practice. Principles are the theory—how I approach and judge interface design. Methods and structured foundations are the applied layer—my design system, expressed as recipes and exact values. Read the core principles, then choose the layer the task requires. Theory is the default. The applied layer is opt-in.

## Two modules

| Module | Location | Contains | Read it when |
| --- | --- | --- | --- |
| Principles | [`principles/`](principles/README.md) | How I approach and judge interface design | Working in an existing interface, critiquing work, or deciding what a choice should communicate |
| Methods | [`methods/`](methods/README.md) with [`../data/foundations.json`](../data/foundations.json) | How I construct systems: recipes, scaffold values, and their machine-readable form | Building a new system, replacing an existing one deliberately, or requesting my preferred starting values |

Each module is self-contained. Pass an agent the principles alone for judgment inside an existing visual system, the methods alone to build from my starting values, or both for greenfield work in my style.

## Tags

Every principle, method, and component-spec file declares what it is and what it covers in its frontmatter: a `type` and a `tags` list drawn from one shared taxonomy. The two axes are deliberate—type says which module a file belongs to and when it loads; tags say which disciplines it informs. Tags are a list because an idea can belong to more than one discipline: grouping actions by scope is rhythm and interface, scroll-under alignment is rhythm and motion. Retrieve by tag, not by directory alone. Asides carry `type: aside` and no tags—they are excluded from retrieval entirely—and the README indexes carry no frontmatter.

The taxonomy:

| Tag | Covers | Principle index | Method directory |
| --- | --- | --- | --- |
| `process` | Stance and judgment before pixels: purpose, the ask, altitude, the user's voice, earned simplicity | [Foundations](principles/README.md#foundations) | — |
| `content` | Interface writing, labels, capitalization, punctuation | [`principles/content/`](principles/content/README.md) | [`methods/content/`](methods/content/) |
| `typography` | Type hierarchy, weight, spacing, alignment, figures | [`principles/typography/`](principles/typography/README.md) | [`methods/typography/`](methods/typography/) |
| `color` | Color scales and their use (methods only for now) | — | [`methods/color/`](methods/color/) |
| `rhythm` | Spacing, Gestalt, alignment, keylines, visual weight | [`principles/rhythm/`](principles/rhythm/README.md) | [`methods/layout/`](methods/layout/) |
| `interface` | Actions, controls, conventions, states, product framing | [`principles/interface/`](principles/interface/README.md) | [`methods/interface/`](methods/interface/) |
| `imagery` | Iconography and imagery in relation to type and interface | [`principles/imagery/`](principles/imagery/README.md) | [`methods/iconography/`](methods/iconography/) |
| `motion` | Animation purpose, continuity, timing, press feedback | [`principles/motion/`](principles/motion/README.md) | [`methods/motion/`](methods/motion/) |

To retrieve guidance: identify the task's tags, filter by `type` (principles by default, methods opt-in), then match `tags` in frontmatter. The layer indexes carry per-file tag tables—[principles](principles/README.md#file-index) and [methods](methods/README.md#current-methods)—and each discipline README summarizes its principles and points to its paired methods.

## Scaffolds

When a method explicitly lays out a system—the type scale, the gray curve, the spacing ladder, button sizes—those exact values are a scaffold: a starting point, not a requirement. Method files carry `scaffold: true` in their frontmatter, and `data/foundations.json` is the machine-readable form of the scaffold values, grouped by discipline.

A design system slotted in alongside the guide overrules scaffold values wherever they conflict. The principles and each method's reasoning still apply; only the numbers yield.

## Design system components

The methods module now has an applied edge: semantic tokens and a cross-platform set of design system components in [`design-system/`](design-system/README.md). Each component is a written visual spec assembled from the methods' values, plus a web reference implementation in [`/design-system/`](../design-system/) and a native iOS playground in [`/App/`](../App/). The spec is the contract; on platforms where an implementation cannot run, implement the spec natively. Load component specs only when building or restyling those components.

## Reading path for people

Agents get routed by task below; a person learning interaction design reads in concept order—each concept builds on the ones before it, so the sequence crosses disciplines where the dependencies do:

1. **Stance** — how to approach the work before any pixels. [`principles/00-core-principles.md`](principles/00-core-principles.md) (everything serves a purpose; begin with the problem; interrogate the ask), then [`01-human-judgment.md`](principles/01-human-judgment.md), [`02-altitude.md`](principles/02-altitude.md), [`03-voice-of-the-user.md`](principles/03-voice-of-the-user.md), and [`04-earned-simplicity.md`](principles/04-earned-simplicity.md).
2. **Words** — the interface's words come before its visuals: [`principles/content/`](principles/content/README.md) for purpose-driven writing, directness, capitalization, and punctuation, with [`dashes.md`](principles/content/dashes.md) as the worked case.
3. **How people see** — perception before construction. Gestalt and proximity in the [rhythm README](principles/rhythm/README.md), then [`visual-weight.md`](principles/rhythm/visual-weight.md) (weight and its sources), [`balancing-left-heavy-layouts.md`](principles/rhythm/balancing-left-heavy-layouts.md) (weight balancing a composition), [`consistency-and-keylines.md`](principles/rhythm/consistency-and-keylines.md) (why consistency reads as calm), and [`repetition-builds-meaning.md`](principles/rhythm/repetition-builds-meaning.md) (how patterns teach).
4. **Typography** — hierarchy is visual weight applied to words: the [typography README](principles/typography/README.md) for hierarchy and weight, then [`text-alignment.md`](principles/typography/text-alignment.md), [`all-caps.md`](principles/typography/all-caps.md), [`responsive-type.md`](principles/typography/responsive-type.md), and the numeric and punctuation details ([`numeric-figures.md`](principles/typography/numeric-figures.md), [`quotation-apostrophe-prime-marks.md`](principles/typography/quotation-apostrophe-prime-marks.md)).
5. **Space in practice** — the spatial system at work: spacing and optical alignment in the [rhythm README](principles/rhythm/README.md), then [`margins-and-padding.md`](principles/rhythm/margins-and-padding.md) (padding, text spacing, heading asymmetry), [`rhythm-and-swing.md`](principles/rhythm/rhythm-and-swing.md) (breaking rhythm on purpose), [`scroll-under-alignment.md`](principles/rhythm/scroll-under-alignment.md) (layers in motion), and [`adding-styles.md`](principles/rhythm/adding-styles.md) (when the system grows).
6. **Interface** — actions and controls: [`action-hierarchy.md`](principles/interface/action-hierarchy.md), then [`group-actions-by-scope.md`](principles/rhythm/group-actions-by-scope.md) (grouping is an action concept, filed under rhythm), [`interactive-control-sizing.md`](principles/interface/interactive-control-sizing.md) with [`input-fidelity.md`](principles/interface/input-fidelity.md), [`top-and-bottom.md`](principles/interface/top-and-bottom.md), [`corner-rounding.md`](principles/interface/corner-rounding.md), [`shadows.md`](principles/interface/shadows.md), then conventions—[`map-and-landscape.md`](principles/interface/map-and-landscape.md) and [`every-element-earns-its-spot.md`](principles/interface/every-element-earns-its-spot.md)—and finally [`empty-and-error-states.md`](principles/interface/empty-and-error-states.md), [`personal-taste-as-scaffolding.md`](principles/interface/personal-taste-as-scaffolding.md), and the [nesting musing](principles/interface/nesting-buttons-in-inputs.md).
7. **Icons** — images that behave like type: [`iconography-and-type.md`](principles/imagery/iconography-and-type.md), then [`icon-sizing.md`](principles/imagery/icon-sizing.md).
8. **Motion** — the last channel, because it depends on everything else: the [motion README](principles/motion/README.md) for purpose and platform, then [`continuous-transitions.md`](principles/motion/continuous-transitions.md), [`transition-levels.md`](principles/motion/transition-levels.md), and [`press-states.md`](principles/motion/press-states.md).
9. **The applied layer, last** — [`methods/`](methods/README.md) and the [design system components](design-system/README.md) show the principles compiled into one working system.

The website presents the same material with live demos—read a concept, then study its panel. [Asides](asides/README.md) add the personal and historical context that the working guidance omits.

## Rules and examples

Each principle file has one normative kernel: its working rules. Everything else—prose, comparisons, examples—is explanation and illustration. Substantial examples sit under an `## Example:` heading and end with a transferable point naming the abstraction they teach; extract that structure, never the surface. An example's verdict is an application of the rules at a point in time, not a rule itself—verdicts that depend on what users currently understand carry an "as of" year, and the conventions principle explains why that line moves. Inline illustrations woven into prose follow the same contract: illustrative, never normative.

## Choose by task

1. Identify the task's tags from the [taxonomy](#tags).
2. For an existing product, read the matching principles and preserve its established visual system.
3. For greenfield work or an explicit system-building task, add the matching methods.
4. Load a method only when constructing or replacing that system, or when my exact defaults are requested—never merely because the task mentions the discipline. Each principle file points to its paired method when one exists.
5. To retrieve exact defaults, select the relevant method before reading [`../data/foundations.json`](../data/foundations.json).
6. Load a component spec only when building or restyling that component.

The per-file summaries live in the layer indexes: the [principles file index](principles/README.md#file-index) and the [methods table](methods/README.md#current-methods), each carrying tags. The discipline READMEs are the per-tag summaries, naming their principles and pointing to their paired methods.

The prose remains the source of truth. Structured foundations are an opt-in representation of methods.

## Asides

[`asides/`](asides/README.md) contains personal and historical context that belongs in the documentation but is excluded from agent prompts and working guidance. Do not read asides by default.

## Adding new notes

Julian can add ideas in an unstructured or conversational form. An agent should convert those notes into documentation rather than preserving the transcript as-is.

The agent should:

1. Identify the primary idea, its discipline, and whether it is a principle or method.
2. Preserve Julian’s opinion while rewriting it as direct, informative guidance.
3. Separate principles from methods, defaults, examples, and unresolved questions.
4. Keep one primary idea per file so future agents can retrieve it independently.
5. Give every new or moved file `type` and `tags` frontmatter from the [taxonomy](#tags), and reflect it in its layer index's tag table.
6. Complete the applicable principle Markdown and indexes before updating methods or representations.
7. Complete any applicable method Markdown and indexes before updating representations.
8. Reread the updated guide files, then derive the website and structured data from those files rather than the original note.
9. Update `data/foundations.json` only when a documented method or exact foundation changes.
10. Avoid inventing guidance where Julian has not formed an opinion.
11. Ask follow-up questions when a note is ambiguous, and especially when it appears to contradict a documented principle or method. Raise the tension instead of silently resolving it; Julian decides whether the older guidance is revised or the conflict stays documented as open.
12. Put material Julian identifies as an aside in `asides/` and exclude it from prompts, summaries, working rules, and structured foundations.
13. Split mixed notes into normative guidance and aside context. Ask Julian when the distinction is unclear and would change agent behavior.

This order is mandatory. The separation tests whether the guide documentation is precise enough to propagate into the website without relying on the original conversation.
