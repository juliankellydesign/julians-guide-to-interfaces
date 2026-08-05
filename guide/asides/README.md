# Asides

Asides are part of the documentation but not part of the guidance given to agents. They preserve personal, historical, or contextual material without turning that material into a rule.

## Retrieval policy

- Do not read this directory by default.
- Do not include aside content in generated prompts, discipline summaries, working rules, normative guidance, or `data/foundations.json`.
- Read an aside only when Julian asks about it directly or the task explicitly concerns documented context.
- Keep aside content visually separate from the six disciplines on the website.

Each aside file must begin with:

```yaml
---
type: aside
prompt: exclude
---
```

## Classification

When Julian identifies a note as an aside, store it here. When a note combines working guidance with an anecdote, split the two into separate files. If the distinction is unclear and would change how an agent acts, ask Julian before classifying it.

## Tone

An aside is a useful place to adjust the tone of the writing. Normative guidance should remain direct and literal. An aside may be more personal, reflective, or narrative when that tone helps explain why the context matters.

The change in tone still needs a purpose. It should distinguish context from instruction, preserve Julian’s relationship to the material, or make the relevance of the aside clearer. Do not add personality only to make the writing feel more decorated.

## Current asides

- [`crystal-silence.md`](crystal-silence.md) — the personal history behind the 48-frame animation scaffold
- [`study-design-history.md`](study-design-history.md) — historical study as a way to understand interface design
