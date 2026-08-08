# Morph only between elements that share a meaning

## In brief

I use animation heavily to communicate how interfaces work. When one UI element continuously transitions into another, the two read as the same object—so they should do the same thing or mean the same thing. If the destination behaves differently from the origin, the morph has taught something false.

## A morph is a claim of identity

Continuity is the strongest statement motion can make. A fade or a replacement says one thing left and another arrived; a continuous transition says *this is that*. The person watches the element persist through the change, and everything they learned about the first form—what it is, what tapping it does—transfers to the second.

That transfer is the point. Use it deliberately, and only when it is true.

## Example: a chip that becomes a reply bar

In a search interface, a compact floating chip labeled with the current action hovers over the results. As the context changes, the chip continuously expands into the full reply bar at the bottom of the screen. Tapping the chip and tapping the bar do the same thing: they begin a reply that refines the search.

The morph works because the chip *is* the reply bar in a compact state. The transition teaches exactly that—one object with two forms, condensed when the results need the room and expanded when the person's attention returns to refining. The shared label reinforces what the shared motion claims.

## When the elements are not the same

If two elements merely swap places on screen but do different things, do not connect them with a morph. Let one leave and the other arrive—a fade, a push, a replacement—so the person does not carry the first element's meaning onto the second. The weaker transition is the honest one.

## Working rules

- Morph one element into another only when they do the same thing or mean the same thing.
- Use a compact and expanded form of the same element to teach that two surfaces are one object.
- Keep the action consistent across both forms; whatever tapping meant before the morph, it means after.
- Carry a shared label or visual signature through the transition when one fits.
- Use a fade, push, or replacement—not a morph—when the arriving element behaves differently.
- Respect reduced-motion preferences; the state change must survive without the transition.
