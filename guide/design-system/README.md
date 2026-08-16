# Design system components

## In brief

A basic set of design system components, expressed twice: as written visual specs, and as a reference implementation built on [Base UI](https://base-ui.com) (`@base-ui/react`), the headless component library. The spec is the contract; the implementation is one rendering of it. On platforms where the implementation cannot run—iOS, Android, anything non-web—the spec serves as the visual source of truth to implement natively.

Every value here is assembled from the methods module: the gray and color scales, the spacing ladder, the radius scale, button sizes and styles, control padding, icon pairings, modal padding, the scrim, and the press scale. Where a component needed a value the methods do not yet document, the spec says so and marks it as a first pass. Like everything in the methods layer, all of it is scaffold—a slotted-in design system overrules it.

## Components

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Button | A discrete action—submit, save, continue, send | [`button.md`](button.md) | `@base-ui/react/button` |
| Input | Freeform text entered or edited | [`input.md`](input.md) | `@base-ui/react/input` |
| Modal | A focused interruption that must resolve before continuing | [`modal.md`](modal.md) | `@base-ui/react/dialog` |
| Switch | A binary setting that takes effect immediately | [`switch.md`](switch.md) | `@base-ui/react/switch` |

## Reference implementation

The implementation lives in [`/design-system/`](../../design-system/) at the repository root:

- `design-system.css` — the visual spec as CSS, tokens first, one section per component
- `app.jsx` — the demo page source, using Base UI for behavior and accessibility
- `app.js` — the committed bundle (esbuild), so the page serves statically with no build step
- `components.html` — the rendered component sheet

Rebuild the bundle after editing `app.jsx`: `npm run build:ds`.

## Rules

- The spec files are the source of truth; the CSS implements them, never the reverse.
- Every spec opens with a "When to use it" section—selection guidance is what an agent needs from a spec, and the table above carries the one-line form.
- Components take exact values only from `data/foundations.json` and these specs.
- Behavior, focus management, and accessibility come from Base UI; the guide neither restyles nor re-documents it. What a component does is static—the spec covers when to reach for it and what it looks like.
- A platform that cannot run the implementation follows the spec visually, using its native equivalents for behavior.
