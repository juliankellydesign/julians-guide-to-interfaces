---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# OTP field

## When to use it

For a short code of known, fixed length that the person copies in from somewhere else—a six-digit SMS code, an emailed sign-in code, an authenticator token. The separate slots earn their place by doing two jobs at once: they say how many characters to expect, and they show how far along the person is. Reach for it when the code is the only thing on the screen.

Not this: a password is an input—variable length, secret, and filled by a password manager that this control will fight. A phone number, card number, or postal code only looks numeric; it is an identifier and belongs in an input. A quantity someone adjusts is a number field. If the length is not fixed and known in advance, the slots are lying and you want an input.

## Sources

Slot height from the button and input t-shirt sizes; radius, border, and fill from the input spec; digit size from the type scale; tabular numerals from the number field spec; gaps from the spacing ladder; the error color from the field spec; focus and disabled from the input defaults. The methods do not yet document an OTP field, so the slot width, the digit size, and the group gaps are a first pass.

## Dimensions

- **Slot** — **48** tall, the L control height, and **40** wide from the spacing ladder. This control is usually the only thing on the screen, so it takes the large size rather than the default. First pass.
- **Digit** — **22** from the type scale, regular, gray-1000, centered, in tabular numerals so a filled slot and an empty one are the same width and nothing shifts as the person types.
- **Gap between slots** — **8**. When the issuing system groups the code, mirror that grouping: **16** between groups, 8 within them. Never invent a grouping the code does not have—if the message says `482913`, the field does not say `482 913`.
- On touch a 48 slot already clears the 44 minimum target. The gaps keep adjacent targets distinct without shrinking anything.

## Shape and color

- Empty: gray-0 fill, 1px gray-300 border, radius **10**—the same trio the input uses, so the slots read as fields rather than as a decorative row of boxes.
- Filled: unchanged chrome, gray-1000 digit. The digit is the only thing that changes; a slot that also gains a fill and a heavier border is three signals for one event.

## States

- **Focus** — 2px highlight outline, offset 0, on the active slot only, hugging it exactly as the input's focus ring hugs a field.
- **Error** — every slot takes a red 600 border, and the message sits **6** below the group at 14 regular in red 600, per the field spec. The code is one value, so the whole group errors; marking a single slot suggests one character is wrong, which is never what the server said.
- **Verifying** — the whole group goes to 40% opacity and stops accepting input while the code is checked.
- **Disabled** — 40% opacity. No press state; there is nothing here to press.
