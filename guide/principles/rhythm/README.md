# Rhythm

## In brief

Establish rhythm through consistent baselines, grids, tokens, and type sizes. Use space to communicate relationships. Break the established rhythm only when the exception has a purpose.

## What Gestalt means

`Gestalt` is a German word commonly translated as “form” or “shape.” In design, Gestalt is a common term for describing how people perceive separate elements as related groups or as a whole.

Spacing is one of the clearest ways to communicate those relationships. Elements placed close together appear related. More distance indicates separation. Alignment, similarity, continuity, and enclosure can reinforce or change the same grouping.

This guide uses Rhythm as the discipline name because it describes the practical work: establishing repeatable spatial relationships, then changing them when the content provides a reason.

## Establish a spatial system

Use a consistent set of spacing relationships so repeated gaps carry the same meaning. The specific values belong to the interface’s spatial system.

When constructing a new system or explicitly replacing one, see [`../methods/layout/spacing-grid.md`](../../methods/layout/spacing-grid.md).

## Use proximity to show relationships

The distance between elements indicates whether they belong together. More space indicates separation. Less space indicates a closer relationship.

## Mathematical alignment, optical correction

Elements should align to a grid, but text contains irregular shapes and invisible metrics. Purely geometric alignment can appear wrong.

When text sits above a container, align the text’s visible edge toward the midpoint of the container’s interior padding rather than matching the container’s exterior edge. This relates the label to the content inside the container.

## Rhythm and swing

Standardize the interface as far as possible before introducing exceptions. Consistent baselines, grids, spacing tokens, type sizes, and repeated structures create rhythm.

Swing is a limited, purposeful break from that rhythm. It prevents a repeated layout from becoming monotonous and restores the reader’s attention. The exception may break a convention established elsewhere in the interface, but it still needs a functional reason.

See [`rhythm-and-swing.md`](rhythm-and-swing.md) for the full principle and a four-section example.

## Repetition builds meaning

Repeated gestures create rhythm as well as visual consistency. When the same gesture appears in comparable contexts and produces the same outcome, each repetition strengthens its meaning and reduces how much explanation later instances require.

Teach the complete meaning in one clear instance, then preserve the gesture and outcome as it repeats. See [`repetition-builds-meaning.md`](repetition-builds-meaning.md) for the full principle.

## Keep elements consistent so variation carries meaning

Elements should share consistent style, sizing, and spacing—tokens make this practical. Too many sizes add visual noise, while consistently sized elements fall onto shared keylines (the invisible lines that align elements) and reduce cognitive overhead. Color follows the same logic in both directions: every button the same color is as confusing as every button a different color. Vary size and color only to communicate importance, function, or context.

See [`consistency-and-keylines.md`](consistency-and-keylines.md) for the full principle.

## Ask twice before adding a style

A new style gets two questions: have I seen something similar elsewhere in this interface, and can the new thing be repurposed elsewhere. The first reuses and strengthens an existing pattern; the second designs the addition as a type rather than a one-off. Treatments bind to types, never to instances—the rule that attention shadows, icon sizes, and color meanings each enforce in their own discipline.

See [`adding-styles.md`](adding-styles.md) for the full principle.

## Keep padding consistent

Margins and padding do different jobs when the screen changes. Padding is part of a component's identity and usually stays consistent across screens; margins, gutters, and layout absorb the change in available space. A padding change reads as a different component—make it deliberately or not at all. Consistency also runs across components: components of the same size share the same padding, so their contents land on the same keylines. Text follows the same rule—same-size text keeps consistent gaps between inline strings and between lines and blocks—with one deliberate asymmetry: headings take more space above than below, so proximity binds them to the content they introduce.

See [`margins-and-padding.md`](margins-and-padding.md) for the full principle.

## Offset the padding of scrolling layers

When content scrolls under a fixed element, the two layers should not share the exact same edge padding. Coincident edges meet as the content passes—a 16px-padded result hitting a 16px-padded nav button—and the accidental join reads as designed, then breaks. Offset one layer decisively and judge the relationship in motion. Shared edges remain the rule within a single plane.

See [`scroll-under-alignment.md`](scroll-under-alignment.md) for the full principle.

## Concentrate visual weight by importance

Start a design by ranking importance: the most important thing, then the second, then the third. The most important element gets decisively more visual weight than anything else—an order of magnitude, not an increment. Size, color, and motion are all sources of weight that add up: a small but brightly colored button can be the loudest element on screen, and a large surface carries weight through area alone, so its other sources stay quiet. Never max every source on one element—it loses all interplay with the composition—and use white space as a counterweight with weight of its own.

See [`visual-weight.md`](visual-weight.md) for the full principle.

## Group actions by scope

Visual grouping implies functional grouping. Actions placed together should share a context, object, or scope. Separate an action when it applies more broadly than the task represented by the group.

Keep a completion action close to the input it acts on, and arrange the group so reading order reflects the intended interaction sequence. See [`group-actions-by-scope.md`](group-actions-by-scope.md) for the full principle.

## Working rules

- Use spacing to express grouping before adding dividers or boxes.
- Use Gestalt principles to judge how spacing and other visual relationships group elements.
- Make repeated gaps consistent so exceptions carry meaning.
- Keep component padding consistent across screens; let margins absorb the change.
- Give same-size components the same padding so their contents share keylines.
- Keep gaps between same-size text consistent on both axes.
- Give headings more space above than below.
- Size elements from a shared token set so they fall onto shared keylines.
- Vary size and color only to communicate importance, function, or context.
- Reuse a similar existing treatment before adding a style, and design new styles for repurposing.
- Bind treatments to types, never to instances.
- Align to shared axes whenever elements should feel related.
- Offset the edge padding of layers that scroll under each other.
- Preserve an existing spacing system unless replacing it is part of the task.
- Apply optical compensation deliberately and document it when encoding a component.
- Establish a consistent rhythm before introducing variation.
- Rank importance first, then give the top of the ranking decisively more visual weight.
- Spend weight sources—size, color, motion—one or two per element, and balance the composition with white space.
- Use repeated gestures to build stable meaning across comparable contexts.
- Keep the outcome of a repeated gesture consistent.
- Group actions only when they share a context, object, or scope.
- Separate broader actions from controls that belong to one step or object.
- Keep completion actions close to the inputs they act on.
- Make reading order reflect interaction order.
- Use swing as a limited exception with a documented reason.
- If a layout communicates the relationship alone, do not add another signal without a reason.
