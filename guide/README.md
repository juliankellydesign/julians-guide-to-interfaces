# Guide index

## In brief

Use this file as a router. The guide splits into two layers: theory and practice. Principles are the theory—how I approach and judge interface design. Methods and structured foundations are the applied layer—my design system, expressed as recipes and exact values. Read the core principles, then choose the layer the task requires. Theory is the default. The applied layer is opt-in.

## Two modules

| Module | Location | Contains | Read it when |
| --- | --- | --- | --- |
| Principles | [`principles/`](principles/README.md) | How I approach and judge interface design | Working in an existing interface, critiquing work, or deciding what a choice should communicate |
| Methods | [`methods/`](methods/README.md) with [`../data/foundations.json`](../data/foundations.json) | How I construct systems: recipes, scaffold values, and their machine-readable form | Building a new system, replacing an existing one deliberately, or requesting my preferred starting values |

Each module is self-contained. Pass an agent the principles alone for judgment inside an existing visual system, the methods alone to build from my starting values, or both for greenfield work in my style.

## Scaffolds

When a method explicitly lays out a system—the type scale, the gray curve, the spacing ladder, button sizes—those exact values are a scaffold: a starting point, not a requirement. Method files carry `scaffold: true` in their frontmatter, and `data/foundations.json` is the machine-readable form of the scaffold values, grouped by discipline.

A design system slotted in alongside the guide overrules scaffold values wherever they conflict. The principles and each method's reasoning still apply; only the numbers yield.

## Choose by task

- For an existing product, read the relevant principles and preserve its established visual system.
- For greenfield work, read the relevant principles, then add only the methods needed to build the system.
- To retrieve exact defaults, select the relevant method before reading [`../data/foundations.json`](../data/foundations.json).
- Do not load methods solely because a task mentions typography, color, layout, or motion.
- Typography principles explain what weight communicates. Load the font-weight method only when assigning or changing weight roles.
- Typography principles also define all caps as a functional choice for compact legibility. Load the tracking-curve method only when constructing or replacing size-dependent letter spacing.
- Responsive typography principles keep size, tracking, and line height coupled. Load the responsive-type method only when constructing or replacing that behavior.
- Typography principles also cover numeric figure styles, numeric alignment, quotation marks, apostrophes, and primes. Apply these within the existing type system.
- Text-alignment principles assume a left-to-right language. Adapt the starting edge and reading flow for other writing directions.
- Interface principles define how primary, secondary, and tertiary actions communicate priority. Apply that hierarchy through the product’s established control styles.
- Interface principles also cover sizing controls for mouse and touch input and deciding when repeated actions clarify or confuse. Load the control-size method only when exact numerical starting points are needed.
- Interface principles require the interface to match the fidelity of the input: control sizes, density, and motion timing change with input method and screen size, while roles and hierarchy stay constant.
- Interface principles also treat empty states, 404s, and no-network pages as opportunities for delight and user education.
- Corner rounding and interface conventions are principles. Load the radius-scale and nested-radius methods only when constructing or replacing a radius system.
- Color exists only as methods for now. Load the gray-scale and color-scale methods only when constructing or replacing a color system; the color scales share the gray scale's stops and endpoints but distribute lightness with their own curve.
- Rhythm principles cover Gestalt, spacing relationships, alignment, contextual action grouping, repetition that builds meaning, purposeful exceptions, ranking importance and concentrating visual weight (size, color, and motion as addable sources, balanced with white space), offsetting the padding of layers that scroll under each other, and keeping elements consistent so keylines emerge and variation carries meaning. Load the spacing-grid method only when constructing or replacing the spatial system.
- Load the button-scaffold method only when sizing or styling buttons from my starting values: five t-shirt sizes and three styles.
- Content principles explain why capitalization and punctuation should be consistent and functional, including the distinct jobs of em dashes, en dashes, and hyphens. Load the capitalization and punctuation method only when establishing or changing the interface writing system.
- Find iconography principles under Imagery, including tapered icon sizing paired consistently with text. Load the control-padding method only when constructing or changing controls, and the icon-size method only when my exact sizes and pairings are needed.
- Motion principles cover continuity, causality, responsiveness, accessibility, continuously transitioning only between elements that do or mean the same thing, and animating only the level that changes. Load the timing and animation-scaffold methods only when exact durations or the 48-frame structure are needed.

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
5. Complete the applicable principle Markdown and indexes before updating methods or representations.
6. Complete any applicable method Markdown and indexes before updating representations.
7. Reread the updated guide files, then derive the website and structured data from those files rather than the original note.
8. Update `data/foundations.json` only when a documented method or exact foundation changes.
9. Avoid inventing guidance where Julian has not formed an opinion.
10. Ask follow-up questions when a note is ambiguous, and especially when it appears to contradict a documented principle or method. Raise the tension instead of silently resolving it; Julian decides whether the older guidance is revised or the conflict stays documented as open.
11. Put material Julian identifies as an aside in `asides/` and exclude it from prompts, summaries, working rules, and structured foundations.
12. Split mixed notes into normative guidance and aside context. Ask Julian when the distinction is unclear and would change agent behavior.

This order is mandatory. The separation tests whether the guide documentation is precise enough to propagate into the website without relying on the original conversation.
