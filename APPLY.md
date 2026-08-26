# Applying the guide to a host project

This file is the drop-in mode. When this repository sits inside (or beside) another project and the task is to restyle that project, follow this playbook. Your job is to make the host look like Julian designed it. The rest of the guide's agent instructions (`AGENTS.md`) govern editing the guide itself—not this mode.

## Decide the layer first

- The host has a deliberate design system that should survive → apply **principles only**: judge and adjust within its language.
- Julian dropped the guide in to make the project his → **principles and methods both** apply. This is the default reading of "make it look nice": his foundations replace the host's arbitrary values.

One deliberate exception: a real brand hue in the host survives. Feed it through the color-scale recipe as the highlight hue—the scales accept any hue; the lightness and chroma curves are what make it his.

## Fast path: adapters

When the host is on a stack an adapter covers, install the adapter first. It applies the foundations in one step; then run the pass below for everything tokens cannot reach—rhythm, action hierarchy, motion, optical judgment.

- **shadcn/ui + Tailwind** — `npx shadcn@latest add https://juliankellydesign.github.io/julians-guide-to-interfaces/adapters/shadcn/julian.json`, or from a local checkout, `adapters/shadcn/julian.json`. Projects on Tailwind without the registry paste `adapters/shadcn/julian.css` into the global stylesheet instead.
- **UIKit** — add the Swift package at `adapters/uikit/` (JulianKit) and consume its tokens and controls.

Adapters are the methods layer only, and scaffold semantics apply: the brand-hue exception above still means regenerating the highlight tokens from the host's hue rather than shipping blue 500. Each adapter's README documents its mapping and limits. The contract behind them is in [`guide/design-system/README.md`](guide/design-system/README.md).

## The pass, in order

1. **Inventory before touching anything.** Catalog the host's fonts, text sizes, colors, spacing values, radii, control sizes, shadows, and motion. Note what is deliberate and what is drift.
2. **Foundations.** From `data/foundations.json` and the relevant methods: the type scale from a base size, the gray scale, color scales only for hues the host actually needs, the spacing ladder, the radius scale. Map every host value to its nearest scaffold value; do not leave orphan values behind.
3. **Controls.** Buttons onto the t-shirt sizes and three styles (one primary per surface); inputs sharing button interiors; modals at 24 with a scrim; press states at 0.9 on everything interactive; icons mostly 20, paired with 16 text. Component specs live in `guide/design-system/`.
4. **Rhythm.** Consistent padding across screens and same-size components; margins absorb the change; keylines emerge from shared sizes; headings take more space above than below; wayfinding at the top, primary actions at the bottom—anchored to the container's bottom edge with equal margin to the bottom and sides.
5. **Motion.** Web transitions under 200ms; continuous transitions only between elements that do the same thing; animate the level that changes; respect reduced motion.
6. **Review at altitude.** Zoom out and run the working rules of each touched discipline as a checklist. Every changed element earns its change; every kept host convention earns its keep.

## Rules of engagement

- Change values, never roles: nudging is allowed, inventing new size/style/color roles is not.
- Do not restyle content or copy unless asked; content principles inform new text only.
- Verify visually. Screenshot before and after; judge the rendered result, not the diff. Feeling wrong is evidence—investigate it.
- Report the pass as a designer would: what changed, why, and which principle carried each decision.

## Definition of done

The host reads as one system: one primary action per surface, controls on shared keylines, one padding language, selective shadows with consistent meaning, a juicy press state everywhere, motion that explains rather than decorates—and nothing that survives without a reason.
