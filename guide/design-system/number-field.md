---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Number field

## When to use it

For a bounded quantity the person types or nudges—quantity, duration, count, percentage, price. Reach for it when the value has a unit and a sensible range, and when one-at-a-time adjustment is a real thing someone would do. The steppers are the tell: if nobody would ever press them, this is an input with a numeric keyboard, not a number field.

Not this: an identifier that only looks numeric—phone number, zip code, card number, year—is text; incrementing it is meaningless. If the range is short and the exact figure does not matter, a slider shows the range itself and does it better.

## Sources

Heights, padding, and text sizes from the input spec; the stepper geometry from the nesting musing and the nested-radius formula, exactly as the input spec's nested action derives them; stepper styling from the button scaffold's tertiary style; icon sizes from the icon pairings; states from the input and button defaults. The methods do not yet document numerals or field width, so those are a first pass.

## Field

An input, spec unchanged: S 32 / M 40 / L 48, padding-x 12 / 16 / 20, text 14 / 16 / 16, 1px gray-300 border, gray-0 fill, radius 10. M is the default.

The value renders in tabular numerals so digits do not shift width as they change—a number that jitters while you hold the stepper is a number you cannot read. Value gray-1000 at regular, centered between the steppers. Any unit suffix sits inline at gray-500. First pass.

Width is sized to the largest value the field expects plus its padding, never stretched to fill the row. A four-character field stretched to 600px is 596px of nothing.

## Steppers

Two nested buttons, decrement leading and increment trailing, derived the same way the input spec derives its nested action: inset **4** from the field's edge, radius 10 − 4 = **6**, height = field height − 8. In an M (40) field each stepper is a 32 square—an S button, carrying its own spec.

Tertiary style: no fill, gray-900 glyph, a 16 minus and plus (the S button's icon size). They are adjustments, not the subject of the screen; the value is. Never give them a fill that competes with the number they change.

At the range's limit the relevant stepper goes to 40% opacity and stops responding, while the field itself stays live—one disabled control, not a disabled field.

## States

- **Press** (stepper) — scale to 0.9, the standard press default.
- **Focus** — border and 2px outline in the highlight color, offset 0, hugging the field. Focus lives on the field; the steppers do not take their own ring.
- **Hover** (pointer only) — field border to gray-400; stepper gains a gray-50 fill, matching the tertiary button's hover.
- **Disabled** — gray-50 fill, 40% opacity content, both steppers inert.
