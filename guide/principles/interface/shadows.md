# Keep shadows distinct from their containers

## In brief

A shadow only works when it reads apart from the container that casts it. When the shadow color blends with the container background, the edge disappears and the interface looks mushy. And when the two are close enough to blend, the first question is not how to fix the shadow—it is whether the container needs a shadow at all.

## The blend failure

Take a shadow of 20% `#000000` under a container at `hsl(0, 0%, 20%)`. The darkened ring the shadow casts lands almost exactly on the container's own color, so the shadow and the container blend together. The edge that the shadow was supposed to define disappears into it, and the interface looks mushy: darkness has been added, but no depth.

The failure is quiet because everything is technically rendering. The shadow costs contrast against the background, muddies the silhouette, and communicates nothing in return.

## Question the shadow before tuning it

In this case I would ask whether the container even needs a shadow. A shadow is one signal of elevation, and it earns its place only when it visibly separates the container from what lies beneath. If the palette cannot support a shadow that reads, the shadow was not communicating—remove it rather than force it, and let the container's own contrast with its surroundings carry the edge.

## Working rules

- Keep the shadow color distinct from the container background it touches.
- Expect a dark shadow around a dark container to read as mush rather than depth.
- When shadow and container are close in color, ask whether the shadow is needed before adjusting it.
- Keep a shadow only when it visibly communicates elevation or edge.
- Judge shadows on the rendered surface, against the actual background colors.
