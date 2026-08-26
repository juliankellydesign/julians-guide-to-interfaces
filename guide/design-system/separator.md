---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Separator

## When to use it

Almost never, and only after space has failed. Grouping is spacing's job: things that belong together sit close, things that do not sit apart, and a layout that reads correctly on spacing alone needs no lines. Reach for a separator when the space required to make the boundary read is more space than the layout can give—a dense list, a compact toolbar, a settings sheet where every row is the same height and the sections would otherwise blur together.

Not this: a separator is not decoration under a heading. It is not a frame around a section—that is a card, and a card is a surface with padding, not four lines. It is not a substitute for a layout that never established a rhythm. And it is not a divider between every item in a list; a line between each of ten rows is a picket fence, and the fence is louder than the rows.

## Sources

Width from the spacing grid's `1` hairline exception, which the grid reserves exactly for borders and dividers; color from the gray scale, with the transparent twin from the transparent-scales method for unknown backgrounds; insets from the spacing ladder and the toolbar spec's group divider; the last-resort framing from every-element-earns-its-spot and the rhythm principle's rule to express grouping with spacing first.

## Dimensions

- **1px.** Never 2. A separator that needs to be thicker to be seen is a separator that has been asked to do a container's job.
- **gray-200** inside a surface. Over media, a photograph, or anything whose background is unknown, use the transparent twin so the value holds.
- Horizontal: full-bleed when it divides two regions of a surface; inset to the container's own horizontal padding when it divides items inside one padded region. Pick one pattern per screen—both at once reads as a mistake, because it is.
- Vertical: same hairline, inset **8** from the top and bottom of the bar it sits in, matching the toolbar's group divider.

## Spacing around it

Equal space on both sides at the ladder value the surrounding rhythm already uses—**16** in a padded region is the common case. A separator does not replace that space; it sits inside it. Crowding a line against the content above it makes the line look like it belongs to that content rather than between the two.

Headings are the exception the padding principle already covers: where a separator sits above a section heading, the gap between the line and the heading is larger than the gap between the heading and its content. Headings take more space above than below, and the line does not change that.

## States

None. A separator is not interactive, never focusable, and carries no hover. It is 1px of gray whose entire argument for existing is that spacing could not make the boundary read—if it can, delete it.
