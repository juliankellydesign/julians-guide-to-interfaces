# Julian’s Guide to Interfaces

An evolving record of what I know about designing interfaces, from first principles to implementation details.

The guide begins with one rule:

> Everything in an interface should serve a purpose.

This is not an argument for stark minimalism. Flourishes, shadows, movement, and density are welcome when they communicate something. A change in weight creates hierarchy. Space reveals relationship. Motion explains cause and effect. If layout and typography can carry the message alone, they should.

## Read the guide

Start with [the core principles](guide/00-core-principles.md), then choose the layer the task requires:

- [Principles](guide/principles/README.md) explain how I approach and judge interface design. Use them by default, including when working inside an existing visual system.
- [Methods](guide/methods/README.md) explain how I construct type, color, spacing, and motion systems. Use them when building or deliberately replacing a system.

The [guide index](guide/README.md) routes both people and agents. Methods and exact foundation values are opt-in so an agent can use the principles without trying to redesign an existing product around my defaults.

[Asides](guide/asides/README.md) preserve personal and historical context for readers. They are deliberately excluded from agent prompts and working guidance.

## Explore the visual guide

The repository includes an interactive version of the opening material. It demonstrates the rules instead of only describing them: change the base type size, inspect the generated major-second scale, trace the OKLCH gray curve, and compare web and touch motion.

```sh
npm run dev
```

Then open `http://localhost:4173`.

No install step is required. The site uses plain HTML, CSS, and JavaScript, with Karl hosted locally in the repository.

## Repository map

```text
.
├── AGENTS.md                 # How an agent should navigate and extend the guide
├── guide/
│   ├── 00-core-principles.md # The thesis and default decision rules
│   ├── 01-human-judgment.md  # Math as a tool and feeling as evidence
│   ├── asides/                # Context excluded from agent prompts
│   ├── principles/            # Default retrieval path and principle index
│   ├── methods/               # Opt-in recipes and numerical defaults
│   ├── content/              # Interface writing and communication
│   ├── typography/           # Type and typographic spacing
│   ├── rhythm/               # Spatial relationships, Gestalt, and optical alignment
│   ├── interface/            # Interaction-led product design
│   ├── imagery/              # Image and art-direction principles
│   └── motion/               # Motion principles by platform
├── data/
│   └── foundations.json      # Machine-readable starting values
├── fonts/                    # Local Karl font files used by the visual guide
├── index.html                # Interactive guide
├── styles.css
└── script.js
```

## Status

This is a living handbook, not a finished doctrine. The sections and taxonomy will change as the thinking becomes more complete. Principles should remain opinionated, examples should remain concrete, and every addition should explain what it is trying to communicate.

## License

All rights reserved unless noted otherwise.
