# Continuously transition only between elements that do the same thing

## In brief

I use animation heavily to communicate how interfaces work. A continuous transition communicates that an element is the same—it is just moving, growing, or changing form. So we do not continuously transition between elements that do different things: if tapping the destination does something different from tapping the origin, the two are different elements, and connecting them with a continuous transition teaches something false.

## A continuous transition says "same element"

A fade or a replacement says one thing left and another arrived. A continuous transition says nothing left: this is the same element, moving or expanding. The person watches it persist through the change, and everything they learned about it—what it is, what tapping it does—stays attached to it.

That persistence is the point. Use it deliberately, and only when it is true.

## Example: a chip that becomes a reply bar

In a search interface, a compact floating chip labeled with the current action hovers above the tab bar. When the person moves to refine, the chip continuously descends and expands into the reply bar—the composer—at the bottom of the screen. Tapping the chip and tapping the composer do the same thing: they begin a reply that refines the search.

The transition works because the chip *is* the composer in a compact state. The transition teaches exactly that—one object with two forms, condensed when the results need the room and expanded when the person's attention returns to refining. The shared label reinforces what the shared motion claims.

In the same moment, the tab bar moves down and out of the way to make room. It stays the tab bar for its whole exit—no transition connects it to the composer, because tapping the tab bar does something different. Each element's motion tells its own story: the chip expands because it is the composer; the tab bar is simply leaving.

The size relationship is what makes all of this legible. The tab bar and the composer are the same size and occupy the same slot between the same neighbors; as two static designs side by side, nothing would explain how one becomes the other. The chip is visibly smaller than both, so its expansion reads unmistakably as one element growing into place. The transition carries information the static frames cannot.

**Transferable point:** connect elements with a continuous transition only when they do the same thing; let everything else move as itself.

## When the elements do different things

Do not connect elements that do different things with a continuous transition. Let one leave and the other arrive—a fade, a push, a replacement—so each element keeps its own identity through the change. The weaker transition is the honest one.

## Working rules

- Continuously transition between two forms only when they do the same thing or mean the same thing.
- Use a compact and expanded form of the same element to teach that two surfaces are one object.
- Keep the action consistent across both forms; whatever tapping meant before the transition, it means after.
- Carry a shared label or visual signature through the transition when one fits.
- Let a visible change such as size carry the identity; two same-size forms read as a swap, not a transformation.
- Use a fade, push, or replacement—not a continuous transition—when the elements do different things.
- Let an element that is only making room move away as itself.
- Respect reduced-motion preferences; the state change must survive without the transition.
