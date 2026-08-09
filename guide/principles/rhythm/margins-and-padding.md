# Keep padding consistent across screens

## In brief

Margins and padding do different jobs when the screen changes size. Usually you want padding to be consistent across screens: a component keeps the same interior space everywhere it appears. The change in available space belongs to margins and layout—gutters compress, columns drop—while the inside of components holds steady.

## Padding is part of the component

A card's interior space is part of what makes it that card. Shrink the padding on a small screen and the same component reads as a different, cramped one—its rhythm changes, its keylines move, and every screen size effectively gets its own component library. Consistent padding keeps one component one component, and it keeps interior spacing tokens meaning the same thing at every breakpoint.

## Margins absorb the screen

The outer spaces are where responsive change belongs. Margins and gutters can compress on a narrow screen and open up on a wide one; layouts can drop from three columns to one. These changes reorganize how components share the screen without reaching inside any of them.

## The usual exceptions

"Usually" is deliberate. When a component genuinely changes role or density between platforms—a control adapting from touch to pointer fidelity—its values may nudge, padding included. That is platform adaptation, a different axis than screen width. Within one platform, across responsive widths, padding holds.

## Working rules

- Keep a component's padding consistent across screen sizes.
- Absorb screen-size changes with margins, gutters, and layout changes—not with component interiors.
- Expect a padding change to read as a different component, and make it deliberately or not at all.
- Nudge padding only as platform adaptation, not as responsive squeezing.
