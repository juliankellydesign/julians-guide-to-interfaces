# Guide index

## In brief

Use this file as a router. Read the core principles, then choose principles or methods based on the task. Principles are the default. Methods are opt-in.

## Two layers

| Layer | Contains | Read it when |
| --- | --- | --- |
| [Principles](principles/README.md) | How I approach and judge interface design | Working in an existing interface, critiquing work, or deciding what a choice should communicate |
| [Methods](methods/README.md) | How I construct systems, including recipes and exact defaults | Building a new system, replacing an existing one deliberately, or requesting my preferred values |

The names describe retrieval behavior rather than a permanent taxonomy. They can change as the guide develops.

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
- Corner rounding and interface conventions are principles. Load the nested-radius method only when constructing or replacing a radius system.
- Rhythm principles cover Gestalt, spacing relationships, alignment, contextual action grouping, repetition that builds meaning, and purposeful exceptions. Load the spacing-grid method only when constructing or replacing the spatial system.
- Content principles explain why capitalization and punctuation should be consistent and functional, including the distinct jobs of em dashes, en dashes, and hyphens. Load the capitalization and punctuation method only when establishing or changing the interface writing system.
- Find iconography principles under Imagery. Load the control-padding method only when constructing or changing controls.

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
10. Put material Julian identifies as an aside in `asides/` and exclude it from prompts, summaries, working rules, and structured foundations.
11. Split mixed notes into normative guidance and aside context. Ask Julian when the distinction is unclear and would change agent behavior.

This order is mandatory. The separation tests whether the guide documentation is precise enough to propagate into the website without relying on the original conversation.
