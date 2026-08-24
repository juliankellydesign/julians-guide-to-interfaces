# Balance a left-heavy layout with one right-aligned element

## In brief

Sometimes a card needs to be left aligned, and making it full width—filling the width—is too much. This is common in conversational AI interfaces: the user's message sits in a bubble, the AI's reply is free text floating without a container, and a reply that renders a card with controls would look awkward at full width. Left aligned, the card can look really left-heavy—but a single thing aligned to the right balances the composition, and often that is the chat bubble.

## Left-heavy happens

Free text does not tip a layout; a contained card does. In a conversational interface the AI's floating text reads as texture, but the moment a reply renders a card—controls, actions, a picker—the card is a bounded block of visual weight. Full width is too much card, so it sits left at a natural width, the right side goes empty, and the composition tips left.

## One counterweight is enough

The fix does not require symmetry or stretching the card full width. A single element aligned to the right restores the balance—and a conversational interface usually has one already: the user's bubble. Everything else sits left; the bubble is the counterweight. This is visual weight doing composition work (see [`visual-weight.md`](visual-weight.md))—one deliberate weight on the opposite edge, not an equal amount of stuff on both sides.

## Working rules

- When a contained card cannot fill the width, watch for the layout going left-heavy.
- Balance with a single element aligned to the right; one counterweight is enough.
- In conversational interfaces, let the user's bubble be the counterweight.
- Prefer one deliberate counterweight over stretching a card to full width.
