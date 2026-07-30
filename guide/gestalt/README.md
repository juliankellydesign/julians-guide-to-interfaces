# Gestalt and layout

## In brief

Space communicates relationships. Build on a 2px grid, expanding to a 4px grid above 20px. Align rigorously, then compensate optically when geometry and perception disagree.

## The grid

Layout and spacing should follow a mathematical grid:

- At 20px and below, use increments of 2px.
- Above 20px, use increments of 4px.

This provides fine control where small differences matter and a stronger rhythm at larger distances.

## Proximity is language

The distance between elements tells a person whether they belong together. More space is not simply more air; it is a stronger statement of separation. Less space makes a stronger claim of relationship.

## Mathematical alignment, optical correction

Elements should align to a grid, but perception has the final word. Text contains irregular shapes and invisible metrics, so purely geometric alignment can appear wrong.

A recurring optical relationship: when text floats above a container, align the text’s visible edge toward the midpoint of the container’s interior padding rather than mechanically matching both exterior edges. The small offset ties the label to the container’s content, not merely its border.

## Working rules

- Use spacing to express grouping before adding dividers or boxes.
- Make repeated gaps consistent so exceptions carry meaning.
- Align to shared axes whenever elements should feel related.
- Apply optical compensation deliberately and document it when encoding a component.
- If a layout communicates the relationship alone, do not add another signal without a reason.
