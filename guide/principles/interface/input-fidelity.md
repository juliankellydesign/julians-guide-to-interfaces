---
type: principle
tags: [interface, motion]
---

# Match the interface to the fidelity of the input

## In brief

Interfaces should change based on input method and screen size—not merely may, but should. A precise pointer on a large screen calls for denser controls and faster motion than a fingertip on a phone. The fidelity of the input must match the user interface.

## The mushy failure

Desktop apps and websites designed by mobile designers often have a really mushy, mobile-y feel: animations take too long, buttons are too big. Nothing is wrong with those values on a phone. They are wrong on a desktop because the input became more precise and the screen became larger while the interface stayed the same.

The failure is not a broken layout; everything technically works. It is a fidelity mismatch—the interface responds like a touch surface to a person holding a precision instrument, and the whole product feels slower and softer than the hand driving it.

## Fidelity sets the terms

A mouse hits small targets reliably and its interactions expect immediate response, so a pointer interface can be dense and its motion should be snappy. A fingertip is broader and more physical, so a touch interface needs larger targets and can carry slower, more fluid motion when direct manipulation benefits. Neither set of values is better; each is correct for its input.

Adaptation runs in both directions. Porting desktop density and timing to a phone fails just as surely—targets too small to hit, motion too abrupt to follow a gesture.

## What changes and what stays

Control sizes, density, and motion timing adapt to the input and screen. Roles, hierarchy, and meaning stay constant: the same five button roles exist on every platform even as their heights nudge, and the same action is primary everywhere. Adapt the values; preserve the structure.

## Working rules

- Change control sizes, density, and motion timing when the input method or screen size changes.
- Expect unchanged mobile values to feel mushy on desktop, and unchanged desktop values to feel hostile on touch.
- Keep pointer interfaces dense and their motion snappy; give touch its target sizes and fluidity.
- Adapt values while preserving roles, hierarchy, and meaning across platforms.
- Judge the result on the actual device and input, not in a resized browser window.
