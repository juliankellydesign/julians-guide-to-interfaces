# Balance a left-heavy layout with one right-aligned element

## In brief

Sometimes a card needs to be left aligned, and making it full width—filling the width—is too much. This is common in chat interfaces. A column of left-aligned cards can look really left-heavy, but the fix is simple: a single thing aligned to the right balances the composition. In a chat interface, that is often the chat bubble.

## Left-heavy happens

When cards cannot fill the width, left alignment stacks all of the visual weight on one edge and leaves the right side empty. The white space stops reading as a deliberate counterweight and starts reading as a gap—the whole composition tips.

## One counterweight is enough

The fix does not require symmetry or stretching the cards full width. A single element aligned to the right restores the balance. Chat interfaces get this almost for free: everything sits left except the sent bubble, and the bubble is the counterweight. This is visual weight doing composition work—one deliberate weight on the opposite edge, not an equal amount of stuff on both sides.

## Working rules

- When left-aligned cards cannot fill the width, watch for the layout going left-heavy.
- Balance with a single element aligned to the right; one counterweight is enough.
- In chat interfaces, let the sent bubble be the counterweight.
- Prefer one deliberate counterweight over stretching cards to full width.
