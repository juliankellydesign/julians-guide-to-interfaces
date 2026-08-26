# Adapters

Adapters deliver the Julian look through another stack's own override mechanism, so applying it to an existing project is one install instead of a translation project. They are generated representations of the methods module—every color value derives from [`data/foundations.json`](../data/foundations.json) via [`scripts/generate-adapters.py`](../scripts/generate-adapters.py)—with the same standing as the website: downstream of the guide, never edited into disagreement with it.

| Adapter | Stack | What you get |
| --- | --- | --- |
| [`shadcn/`](shadcn/) | shadcn/ui + Tailwind v4 | A `registry:theme` installable with one `npx shadcn add` command, plus a plain CSS drop-in |
| [`uikit/`](uikit/) | iOS, UIKit | JulianKit, a Swift package: color scales, semantic roles, type scale with tracking, spacing and radius ladders, motion timing, and `JulianButton` |

Everything here is scaffold in the guide's sense: a starting point, not a migration requirement. When the host has a real brand hue, feed it through the color-scale recipe and regenerate the highlight tokens instead of shipping blue 500. And an adapter delivers tokens—after installing one, the pass in [`APPLY.md`](../APPLY.md) still covers what tokens cannot reach: rhythm, action hierarchy, optical judgment.

Dark mode in both adapters is a mechanical first pass (the same scales with the semantic roles mirrored, elevation preserved). The guide documents no dark-mode opinion yet; see the [adapters contract](../guide/design-system/README.md#adapters).
