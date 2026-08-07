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

## Group actions by scope

Visual grouping implies functional grouping. Actions placed together should share a context, object, or scope. Separate an action when it applies more broadly than the task represented by the group.

Keep a completion action close to the input it acts on, and arrange the group so reading order reflects the intended interaction sequence. See [`group-actions-by-scope.md`](group-actions-by-scope.md) for the full principle.

## Working rules

- Use spacing to express grouping before adding dividers or boxes.
- Use Gestalt principles to judge how spacing and other visual relationships group elements.
- Make repeated gaps consistent so exceptions carry meaning.
- Align to shared axes whenever elements should feel related.
- Preserve an existing spacing system unless replacing it is part of the task.
- Apply optical compensation deliberately and document it when encoding a component.
- Establish a consistent rhythm before introducing variation.
- Use repeated gestures to build stable meaning across comparable contexts.
- Keep the outcome of a repeated gesture consistent.
- Group actions only when they share a context, object, or scope.
- Separate broader actions from controls that belong to one step or object.
- Keep completion actions close to the inputs they act on.
- Make reading order reflect interaction order.
- Use swing as a limited exception with a documented reason.
- If a layout communicates the relationship alone, do not add another signal without a reason.
