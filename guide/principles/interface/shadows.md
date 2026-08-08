# Use shadows as a tool

## In brief

Shadows are a tool to be used, not a theme to adopt. Far too many interfaces take an all-or-nothing approach—either everything is dimensional and shadowed or nothing is. Interfaces should be internally consistent: if shadows are used to mean something, they mean the same thing everywhere, but everything does not need a shadow just because one thing has one. And a shadow must read apart from its container; when the two blend, the interface goes muddy, and the shadow gets questioned before it gets tuned.

## Consistency of meaning, not uniformity of application

A shadow is a signal, and signals stay legible by keeping one meaning. Use shadows to mean something, hold that meaning everywhere it applies, and leave everything else flat. Selective application is not inconsistency—applying the signal to elements it does not describe is.

Strokes follow the same rule: be consistent in how strokes are applied and what they mean, and let some elements carry strokes while others do not.

## When an element gets a shadow

- **It sits on top of other content.** A sheet or a modal appearing over another element gets a shadow; the shadow communicates what is on top. For modals I often pair the shadow with a scrim—a slight dimming of the content beneath.
- **It sits on media.** A button or container on top of media or a complex background gets a shadow to hold its edge against the noise.
- **It has physical properties.** When something can be directly manipulated—dragged, for instance—a shadow communicates that physicality.
- **It needs attention.** A shadow can call attention to something, applied as a stylistic rule for all elements of that type—never as a one-off on a single instance.

For the exact scrim starting point, see [`../../methods/interface/scrim.md`](../../methods/interface/scrim.md).

## Keep the shadow distinct from its container

Take a shadow of 20% `#000000` under a container at `hsl(0, 0%, 20%)`. The darkened ring lands almost exactly on the container's own color, the two blend together, and the edge the shadow was supposed to define disappears. The interface goes muddy: darkness added, no depth gained.

A good amount of tonality can give an interface a painterly feel, but you need some hard edges to keep the definition. When the shadow and the container are close enough to blend, ask whether the container needs a shadow at all—if the palette cannot support a shadow that reads, the shadow was not communicating, and the container's own contrast should carry the edge.

## Working rules

- Use shadows selectively; never all-or-nothing.
- Hold one meaning per shadow treatment everywhere it appears.
- Give shadows to overlays, to elements sitting on media or complex backgrounds, to physically manipulable elements, and to element types that need attention.
- Apply an attention shadow to every element of the type, never to a single instance.
- Apply the same selective consistency to strokes.
- Keep the shadow color distinct from the container it touches; expect dark-on-dark to read as mud.
- Keep some hard edges; tonality without edges loses definition.
- Question an unreadable shadow before tuning it.
