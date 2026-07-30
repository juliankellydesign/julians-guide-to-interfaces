# Agent instructions

This repository is Julian Kelly’s evolving interface-design handbook. Preserve his point of view: opinionated, concrete, purposeful, and open to revision.

## Reading order

Do not read the entire repository by default.

1. Read `guide/00-core-principles.md` for the governing philosophy.
2. Read `guide/README.md` to locate the relevant discipline.
3. Read only the discipline file(s) needed for the task.
4. Use `data/foundations.json` when exact starting values are required.

## Writing rules

- Treat “everything serves a purpose” as the through-line, not as a slogan pasted into every section.
- Explain what a choice communicates, not only what it looks like.
- Distinguish a principle from a useful default. Defaults can be changed when context gives a reason.
- Keep one primary idea per file. Split a file before it becomes expensive for an agent to retrieve.
- Prefer exact values, examples, and comparisons over vague adjectives.
- Preserve first-person claims when they express Julian’s taste or process.
- Mark undeveloped areas as placeholders; do not invent Julian’s opinions.
- Update `guide/README.md` whenever files are added, moved, or renamed.
- Update `data/foundations.json` whenever a documented foundation changes.

## Interface rules

- Begin with a problem or a specific interaction.
- Establish typography and layout before adding effects.
- Use the 2px grid through 20px, then the 4px grid above 20px.
- Compensate optically when mathematical alignment looks wrong.
- Keep web motion exceptionally quick, generally under 200ms.
- Favor perceived performance and responsiveness over decorative motion.
- Respect `prefers-reduced-motion` in any implementation.

## Source of truth

The prose in `guide/` is the source of truth. The website and machine-readable data are representations of it and should stay synchronized.
