# Keep padding consistent

## In brief

Padding stays consistent along two axes. Across screens: a component keeps the same interior space everywhere it appears, and the change in available space belongs to margins and layout—gutters compress, columns drop—while the inside of components holds steady. And across components: components of the same size share the same padding, so their contents land on the same keylines.

## Padding is part of the component

A card's interior space is part of what makes it that card. Shrink the padding on a small screen and the same component reads as a different, cramped one—its rhythm changes, its keylines move, and every screen size effectively gets its own component library. Consistent padding keeps one component one component, and it keeps interior spacing tokens meaning the same thing at every breakpoint.

## Margins absorb the screen

The outer spaces are where responsive change belongs. Margins and gutters can compress on a narrow screen and open up on a wide one; layouts can drop from three columns to one. These changes reorganize how components share the screen without reaching inside any of them.

## Same size, same padding

Consistency also runs across components. Two components of the same size should share the same padding: a 40px button and a 40px input hold their contents with the same interior space. Padding binds to the size, not to the individual component. This is what makes keylines emerge—same-size elements with matching interiors put their contents on the same invisible lines—and it keeps a size meaning one thing wherever it appears. A same-size component with different padding reads as a mistake or, worse, as a signal that means nothing.

## The usual exceptions

"Usually" is deliberate. When a component genuinely changes role or density between platforms—a control adapting from touch to pointer fidelity—its values may nudge, padding included. That is platform adaptation, a different axis than screen width. Within one platform, across responsive widths, padding holds.

## Working rules

- Keep a component's padding consistent across screen sizes.
- Give components of the same size the same padding; bind padding to the size, not the individual component.
- Absorb screen-size changes with margins, gutters, and layout changes—not with component interiors.
- Expect a padding change to read as a different component, and make it deliberately or not at all.
- Nudge padding only as platform adaptation, not as responsive squeezing.
