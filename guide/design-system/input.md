---
type: component-spec
prompt: opt-in
scaffold: true
---

# Input

## When to use it

For freeform text the person enters or edits—search queries, replies, names, values. Nest a button inside only when it acts on the content within; an action that reaches beyond the input sits outside it.

## Sources

Heights shared with the button scaffold (same size, same padding); nested action from the nesting musing and the nested-radius formula; text sizes from the button spec's pairings.

## Sizes

Inputs use the button heights and share their interior space: a 40px input and a 40px button hold their contents with the same horizontal padding. M (40) is the default.

| Size | Height | Padding-x | Text |
| --- | --- | --- | --- |
| S | 32 | 12 | 14 |
| M | 40 | 16 | 16 |
| L | 48 | 20 | 16 |

## Shape and color

- 1px gray-300 border, gray-0 fill, radius 10 (shared with buttons).
- Text gray-1000 at regular; placeholder gray-500.

## States

- **Focus** — border and 2px outline in the highlight color, offset 0 (the ring hugs the field). First pass.
- **Disabled** — gray-50 fill, 40% opacity content, no interaction.

## Nested action

Per the nesting musing: a button nests inside the input only when it acts on the content within (send, submit-this-query). The nested button insets 4px from the input's edge, and the nested-radius formula gives its radius: input radius 10 − inset 4 = **6**. In an M (40) input the nested button is 32 tall—an S button carrying its own spec.

A button whose action reaches beyond the input's content sits outside the input, at the input's own height.
