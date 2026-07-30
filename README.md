# Julian’s Guide to Interfaces

An evolving record of everything I know about designing interfaces—from first principles to the small optical decisions that make a product feel inevitable.

The guide begins with one rule:

> Everything in an interface should serve a purpose.

This is not an argument for stark minimalism. Flourishes, shadows, movement, and density are welcome when they communicate something. A change in weight creates hierarchy. Space reveals relationship. Motion explains cause and effect. If layout and typography can carry the message alone, they should.

## Read the guide

Start with [the core principles](guide/00-core-principles.md), then move through the five working disciplines:

- [Typography](guide/typography/README.md) — type scales, hierarchy, spacing, and optical judgment
- [Gestalt](guide/gestalt/README.md) — grouping, alignment, rhythm, and meaning through layout
- [Interface](guide/interface/README.md) — problems, interactions, systems, and perceived performance
- [Imagery](guide/imagery/README.md) — a placeholder for principles on image-making and art direction
- [Motion](guide/motion/README.md) — timing, platform context, continuity, and restraint

The [guide index](guide/README.md) is optimized for both people and agents. Each file is intentionally narrow in scope and begins with a compact summary.

## Explore the visual guide

The repository includes an interactive version of the opening material. It demonstrates the rules instead of only describing them: change the base type size, inspect the generated major-second scale, trace the OKLCH gray curve, and compare web and touch motion.

```sh
npm run dev
```

Then open `http://localhost:4173`.

No install step is required. The site uses plain HTML, CSS, and JavaScript.

## Repository map

```text
.
├── AGENTS.md                 # How an agent should navigate and extend the guide
├── guide/
│   ├── 00-core-principles.md # The thesis and default decision rules
│   ├── typography/           # Type and typographic spacing
│   ├── gestalt/              # Spatial relationships and optical alignment
│   ├── interface/            # Interaction-led product design
│   ├── imagery/              # Image and art-direction principles
│   └── motion/               # Motion principles by platform
├── data/
│   └── foundations.json      # Machine-readable starting values
├── index.html                # Interactive guide
├── styles.css
└── script.js
```

## Status

This is a living handbook, not a finished doctrine. The sections and taxonomy will change as the thinking becomes more complete. Principles should remain opinionated, examples should remain concrete, and every addition should explain what it is trying to communicate.

## License

All rights reserved unless noted otherwise.
