---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Preview card

## When to use it

For showing what is behind a link before the person commits to following it—who a mentioned person is, what a linked document contains, what a repository does. The card answers "what is this" so the decision to click is an informed one. Reach for it when the link's text alone does not identify its destination and the destination is expensive to visit and come back from.

Not this: naming a control is a tooltip, and a tooltip is text only. Content the person opens deliberately by clicking is a popover. And nothing here may be required: it is hover-triggered, so touch users will never see it and keyboard users see it only in passing. If the interface stops working without the card, that content belonged in the layout.

## Sources

Surface fill, border, radius, shadow, and offset reused wholesale from the popover—one popup language, used again. Avatar sizes from the avatar spec; text from the type scale and the font-weight roles; the gaps from the spacing ladder and the padding principle; delay behavior from the tooltip; motion from the modal entrance. The methods do not yet document a preview surface, so the width and the gaps are a first pass.

## Surface

Identical to the popover, on purpose: gray-0 fill, 1px gray-200 border, radius **12**, the overlay shadow `0 12px 32px` black at 14%, anchored to its link at offset **4**, padding **16**. Width `min(320px, calc(100vw - 32px))`. First pass.

No arrow—being anchored already says which link it belongs to. No scrim; nothing is blocked.

## Anatomy

Top to bottom, and short:

- An identifying image at the top: an M (32) avatar for a person, or a 20 icon for a thing. **8** beneath it.
- Title **15** at medium, gray-1000—the name of the destination, not a sentence about it.
- Body **13** at regular, gray-700, sitting **2** under the title. Two lines, then truncate. The title sits closer to its own body than the body sits to anything below it.
- At most one row of facts—counts, a date, a role—at **13** gray-500, **12** below the body.

Four lines is the ceiling. A preview that scrolls is the page, and the person can just go to the page.

## Actions

Usually none: the link is the action, and the card exists to help someone decide whether to take it. Where a second action genuinely belongs—follow, star—one tertiary S (32) button, and only one.

## States

- **Open** — after a short hover pause, immediately on keyboard focus, the same rule the tooltip follows. A pointer crossing a link is not a request to be told about it.
- **Touch** — none. There is no hover, and the card is never load-bearing, so nothing is lost.
- **Motion** — fade and scale from 0.96 to 1 over 160ms, the modal's entrance. Respect reduced motion: keep the appearance, drop the movement.
