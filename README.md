# Julian’s Guide to Interfaces

An evolving record of what I know about designing interfaces, from first principles to implementation details.

The guide serves two purposes deliberately. It is a **tool for working with agents**: each module is self-contained, so an agent can receive just the principles for judgment inside an existing system, or the principles and methods together to build in my style. And it is a **teaching guide**: the same material—principles, examples, demos, and the website—supports teaching an introduction to interaction design. The two readings share one source: working rules and specs are the normative kernel agents consume; prose, examples, and demos carry the teaching.

To use it as a drop-in, clone or vendor this repository into a project and point an agent at [`APPLY.md`](APPLY.md)—the playbook for restyling a host project until it looks like something Julian designed.

The guide begins with one rule:

> Everything in an interface should serve a purpose.

This is not an argument for stark minimalism. Flourishes, shadows, movement, and density are welcome when they communicate something. A change in weight creates hierarchy. Space reveals relationship. Motion explains cause and effect. If layout and typography can carry the message alone, they should.

## Read the guide

A person learning interaction design follows the [reading path](guide/README.md#reading-path-for-people)—stance first, then the disciplines in order, the applied layer last. An agent (or a reader with a task in hand) starts with [the core principles](guide/principles/core-principles.md), then chooses the layer the task requires:

- [Principles](guide/principles/README.md) are the theory: how I approach and judge interface design. Use them by default, including when working inside an existing visual system.
- [Methods](guide/methods/README.md) and [structured foundations](data/foundations.json) are the applied layer: my design system, expressed as recipes for type, color, spacing, and motion plus machine-readable tokens. Use them when building or deliberately replacing a system. The layer works as a scaffold for getting new work up and running quickly.

The [guide index](guide/README.md) routes both people and agents. Each module is self-contained, so an agent can receive just the principles, just the methods, or both. Explicit values in methods are scaffolds—starting points that a slotted-in design system overrules—and methods are opt-in so an agent can use the principles without trying to redesign an existing product around my defaults.

[Asides](guide/asides/README.md) preserve personal and historical context for readers. They are deliberately excluded from agent prompts and working guidance.

## Explore the visual guide

The repository includes an interactive version of the opening material. It demonstrates the rules instead of only describing them: change the base type size, inspect the generated major-second scale, trace the OKLCH gray curve, and compare web and touch motion.

```sh
npm run dev
```

Then open `http://localhost:4173`.

No install step is required. The site uses plain HTML, CSS, and JavaScript, with Karl loaded from [jfk.works](https://jfk.works) rather than shipped in the repository.

## Repository map

```text
.
├── AGENTS.md                 # How an agent should navigate and extend the guide
├── APPLY.md                  # Drop-in playbook for restyling a host project
├── guide/
│   ├── README.md             # Router: the two modules, the tag taxonomy, reading paths
│   ├── asides/               # Context excluded from agent prompts
│   ├── practice/             # Guidance for the designer, excluded from agent prompts
│   ├── principles/           # The theory layer, passable on its own
│   │   ├── core-principles.md    # The thesis and default decision rules
│   │   ├── human-judgment.md     # Math as a tool and feeling as evidence
│   │   ├── content/          # Interface writing and communication
│   │   ├── typography/       # Type and typographic spacing
│   │   ├── rhythm/           # Spatial relationships, Gestalt, and optical alignment
│   │   ├── interface/        # Interaction-led product design
│   │   ├── imagery/          # Image and art-direction principles
│   │   └── motion/           # Motion principles by platform
│   ├── methods/              # The applied layer: opt-in recipes and numerical defaults
│   └── design-system/        # Component specs assembled from the methods
├── data/
│   ├── foundations.json      # Machine-readable tokens, grouped by discipline
│   └── foundations.schema.json
├── design-system/            # Base UI reference implementation of the component specs
├── App/                      # Native iOS playground for the methods
├── index.html                # Interactive guide
├── styles.css
└── script.js
```

Every principle, method, and component-spec file carries `type` and `tags` frontmatter; the tag taxonomy in [`guide/README.md`](guide/README.md#tags) is how agents retrieve guidance across disciplines.

## Status

This is a living handbook, not a finished doctrine. The sections and taxonomy will change as the thinking becomes more complete. Principles should remain opinionated, examples should remain concrete, and every addition should explain what it is trying to communicate.

## License

All rights reserved unless noted otherwise.
