# Practice

## In brief

Practice files are normative guidance for the designer, not the design. They document how I sustain and structure the work itself—managing altitude, holding the user's voice on a team, letting simplicity be earned by exploration. A person following them designs better; an agent reading them does nothing differently, so they are excluded from agent prompts, working guidance, and structured foundations.

This is what separates practice from the guide's other classes. Principles change what gets made and load for agents by default. Asides are non-normative context—history and anecdote. Practice is normative like a principle but addressed to the person doing the designing, which is why it lives here rather than in either.

## Files

Read them in this order; each builds on the one before.

1. [`altitude.md`](altitude.md) — jump between the narrow view and the wide view; make at low altitude, edit at high; be harsh on the work and gentle on yourself.
2. [`voice-of-the-user.md`](voice-of-the-user.md) — engineering, product, and design are three voices; yours is the user's, and the tension between them is healthy.
3. [`earned-simplicity.md`](earned-simplicity.md) — explore the crazy versions and show them to people; the simple, obvious result is earned by everything that was tried.

## Rules

- Practice files carry `type: practice` and `prompt: exclude` in their frontmatter, and no tags—like asides, they are outside agent retrieval.
- Do not include practice content in agent prompts, discipline summaries, working rules, or `data/foundations.json`.
- The website may teach practice content, presented as guidance for the designer rather than rules for the interface.
- When a practice file contains a kernel that would change an agent's design decisions, that kernel belongs in a principle; interrogating the ask lives in [`../principles/core-principles.md`](../principles/core-principles.md) for exactly this reason.
