# Agent instructions

This repository is Julian Kelly’s evolving interface-design handbook. Preserve his point of view: opinionated, concrete, purposeful, and open to revision.

## Reading order

Do not read the entire repository by default.

1. Read `guide/principles/00-core-principles.md` for the governing philosophy.
2. Read `guide/README.md` to choose the relevant layer.
3. Read `guide/principles/README.md` and only the relevant principle file(s) for the task.
4. Read `guide/methods/README.md` only when the task requires constructing or replacing a system, applying Julian’s defaults, or retrieving exact values.
5. Use `data/foundations.json` only after selecting an applicable method and when exact starting values are required.

Principles are the default layer. For an existing interface, preserve its established type, color, spacing, and motion systems unless Julian asks to change them. Do not load methods or structured foundations merely because the task involves the same discipline.

Do not read `guide/asides/` by default. Asides provide context for people but are excluded from agent prompts and working guidance.

## Writing rules

- Treat “everything serves a purpose” as the through-line, not as a slogan pasted into every section.
- Explain what a choice communicates, not only what it looks like.
- Distinguish a principle from a useful default. Defaults can be changed when context gives a reason.
- Classify guidance about how to judge or approach a decision as a principle. Classify a repeatable recipe, generated system, or exact default as a method.
- Keep one primary idea per file. Split a file before it becomes expensive for an agent to retrieve.
- Prefer exact values, examples, and comparisons over vague adjectives.
- Write direct, informative content. Add style only when it communicates something.
- Preserve first-person claims when they express Julian’s taste or process.
- Mark undeveloped areas as placeholders; do not invent Julian’s opinions.
- Update `guide/README.md` whenever files are added, moved, or renamed.
- Update the relevant layer index whenever a principle or method is added, moved, or renamed.
- Update `data/foundations.json` whenever a documented foundation changes.

## Turning notes into documentation

When Julian provides unstructured notes or a stream-of-consciousness explanation, treat it as source material for the guide.

1. Identify the primary idea, its discipline, and whether it is a principle or a method.
2. Convert the notes into direct, structured documentation without removing Julian’s point of view.
3. Separate principles, methods, defaults, examples, and open questions.
4. Create a focused file when the idea is substantial enough to retrieve independently.
5. Finish updating the applicable principle Markdown and its indexes before changing any representation of it.
6. Add or update method Markdown after the principle pass when the note includes a recipe, generated system, or exact default.
7. After the guide Markdown is complete, reread the updated guide files and use them—not Julian’s original prompt—as the source for website copy, examples, and structured data.
8. Update structured foundations and the website only from the completed guide documentation.
9. Preserve uncertainty. Do not complete an unfinished opinion on Julian’s behalf.

## Documentation-first propagation

For every addition or revision, the guide Markdown must change before the website or machine-readable data changes. Complete the work in this order:

1. Update the applicable principle files and principle indexes.
2. Update any applicable method files and method indexes.
3. Reread the resulting guide documentation as the current source material.
4. Derive `data/foundations.json` from documented methods when exact values changed.
5. Derive the website representation from the updated guide files.
6. Verify that the representations do not introduce guidance, examples, or certainty absent from the guide.

Once the documentation pass is complete, do not use the original conversational note to draft the website. This separation is deliberate: it tests whether the documented principles are clear enough to propagate on their own.

## Principles and methods

The guide is split into a theory layer and an applied layer, and each layer must remain passable to an agent on its own.

Principles are the theory. They explain how Julian approaches and judges interface design and can guide work without replacing an existing product’s visual system. All principle files live under `guide/principles/`, and that directory is the complete theory layer.

Methods are the applied layer. Together with `data/foundations.json`, they are Julian’s design system: recipes, numerical defaults, and implementation starting points that an agent can execute without reading the theory. Method files use `type: method` and `prompt: opt-in` in their frontmatter.

Three bundles cover how the layers are passed to an agent:

1. Theory only: `guide/principles/`.
2. Theory plus tokens: `guide/principles/` with `data/foundations.json`, whole or as selected discipline groups.
3. Design system only: `guide/methods/` with `data/foundations.json`.

Preserve this separability when writing. A principle file must stay understandable without any method, and a method file must stay executable without any principle. Cross-references between layers are pointers for deeper reading, never dependencies. Keep exact values out of principle files, and keep the tokens in `data/foundations.json` grouped by discipline so a subset of groups can be passed on its own.

- Use principles by default for critique, iteration, and work inside an established interface.
- Add methods for greenfield work, explicit system-building tasks, or when Julian asks for his preferred procedure or values.
- Do not use a method as a migration requirement. Its values remain defaults unless Julian explicitly asks to replace an existing system.
- If a note mixes an approach with a recipe, split the principle from the method.
- If the classification is unclear and would change what an agent modifies, ask Julian before proceeding.

## Asides

Asides are documented context that should not affect an agent’s prompt or working rules.

- Store asides in `guide/asides/` with `type: aside` and `prompt: exclude` in the frontmatter.
- If Julian explicitly calls something an aside, classify it there.
- Do not include aside content in generated prompts, discipline summaries, working rules, normative guidance, or `data/foundations.json`.
- If a note combines a principle or default with an anecdote, split the working guidance from the aside.
- If the classification is unclear and would affect agent behavior, ask Julian whether the material is an aside.
- An aside may use a more personal or reflective tone when that tone helps communicate why the context matters. Keep it clear and purposeful.
- Keep the website representation visibly separate from the guide’s disciplines and identify asides as context rather than guidance.

## Interface rules

- Begin with a problem or a specific interaction.
- Establish typography and layout before adding effects.
- Use space and alignment to communicate relationships before adding containers or effects.
- Compensate optically when mathematical alignment looks wrong.
- Match motion to the platform and use it to explain continuity, causality, or state change.
- Favor perceived performance and responsiveness over decorative motion.
- Respect `prefers-reduced-motion` in any implementation.

Exact type, color, spacing, and motion values belong to the opt-in methods layer and must not be inferred from these principle-level rules.

## Source of truth

The prose in `guide/` is the source of truth. The website and machine-readable data are downstream representations of it and should stay synchronized. Never update a representation first and backfill the guide afterward.
