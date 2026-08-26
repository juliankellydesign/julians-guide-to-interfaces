---
type: principle
tags: [process]
---

# Core principles

## In brief

Every element in an interface should serve a purpose. Start with a clear problem or a specific interaction. Use layout and typography to communicate before reaching for effects. Optimize for performance and the feeling of speed.

## Everything serves a purpose

Everything in an interface should serve a purpose. This does not require stark minimalism—often the opposite. A flourish is valuable when it communicates something to the user.

- A shift in font weight should express hierarchy or a change in function.
- Space should reveal grouping, separation, or rhythm.
- A shadow should explain elevation, overlap, or interactivity.
- Motion should show continuity, causality, or state change.

For every decision, ask: “What is this doing?”

## Content serves a purpose

Content is part of the interface and should be designed by the same standard as every visual element. It should be direct and informative. Each sentence should help someone understand the interface, make a decision, or complete an action.

Style in content is useful only when it communicates something. Tone can establish context, emphasis can clarify priority, and a metaphor can explain an unfamiliar idea. Style that does not add meaning makes the content harder to use.

## Begin with the problem or interaction

The best interfaces begin with a clear problem or a specific interaction. Sometimes an interaction is searching for the right problem. That is acceptable as long as the exploration is described accurately.

Before visual styling, identify:

1. The core problem the interface intends to solve.
2. The core interaction a person will perform.
3. The core visual elements needed to make that interaction legible.

## Interrogate the ask

When the work arrives as someone else's brief, the same discipline applies from a higher altitude. An ask arrives at some elevation—"design a chat interface for this bot" prescribes the interface; "add AI to my product" prescribes almost nothing. Either way, step back and work the chain in order:

1. **What is the value?** "We want a chat interface" → why? What is it for? "Add AI" → what value does the AI actually provide to the people using this product?
2. **What are the capabilities?** Capabilities are the things a user wants done by the system that it can now do. The value names them.
3. **What interface surfaces them best?** Only now choose. A prescribed interface might ultimately be the right approach—treat it as one candidate, not the requirement. Once the surface is chosen, keep asking the same questions at each lower altitude: a chat surface still has to decide between traditional message bubbles and a turn-by-turn treatment that is less obviously a chat.

If the underlying capability is weak, fix the capability—do not dress it in a novel interface.

## Use the simplest sufficient tool

If a relationship can be communicated purely with layout and typography, communicate it with layout and typography. Effects are added only when those tools cannot express the idea as clearly.

This is a hierarchy of means, not a prohibition:

1. Layout and proximity
2. Typography
3. Color and contrast
4. Depth and imagery
5. Motion and effects

## Performance is part of the design

Performance and the feeling of speed trump everything else. Decorative detail is acceptable only while the product remains responsive.

## Defaults are starting points

The numerical systems in this guide are strong defaults, not laws. They create coherence quickly and make exceptions visible. Customize them when the problem, platform, or content provides a reason.

## Design for people, not the model

Grids, color curves, type scales, and timing systems are tools. They are simplified representations of perception and cannot account for every display, eye, culture, or context.

When something feels better outside the system, question the feeling but do not discard it. It may identify information the mathematical model missed. See [`human-judgment.md`](human-judgment.md) for the full principle.

## Use personal taste as scaffolding

Design involves too many possible decisions to reconsider every choice from zero. Personal taste can provide useful starting constraints: a familiar font, an animation technique worth exploring, or a reference from outside design.

These preferences are scaffolding, not justification. They help the work start faster and develop a point of view, but they should change when the problem, content, platform, accessibility, or performance requires something else.

See [`interface/personal-taste-as-scaffolding.md`](interface/personal-taste-as-scaffolding.md) for the full principle.
