# Keep elements consistent so variation carries meaning

## In brief

Elements in an interface should have consistent style, sizing, and spacing—this is where tokens become really helpful. Everything does not have to be the same size, but too many different sizes add visual noise and distract from the tool the interface is trying to expose. The same logic governs color: every button the same color is as confusing as every button a different color. Vary size and color only to communicate.

## Too many sizes are noise

A limited set of shared sizes is not about uniformity; it is about attention. Each additional distinct size is one more thing to perceive, and past a small number the differences stop communicating anything and start competing with the content. Tokens make the limit practical: when sizes come from a shared set, adding a new one is a visible, deliberate decision instead of a drift.

## Consistent sizes align themselves

Consistently sized elements align with one another without much effort. The invisible lines that align elements are called **keylines**, and elements sitting on shared keylines reduce cognitive overhead: the eye stops re-measuring the layout and reads the content instead. An interface built from a limited size set falls onto its keylines almost automatically; one built from arbitrary sizes must be aligned by hand, edge by edge.

## The rhythm covers unrelated elements

When I size elements, I try to maintain some rhythm in sizing them—even elements that might seem unrelated. An avatar, a search field, and a card thumbnail may never sit in the same group today, but interfaces get rearranged, and elements that seemed unrelated end up side by side. When their sizes already share a rhythm, aligning them later is much easier: they fall onto the same keylines the moment they meet. Sizing to the rhythm is an investment in layouts that do not exist yet.

## Color is confusing in both directions

If every button were the same color, that would increase cognitive overhead just as much as every button being a different color—both are equally confusing. Uniform color hides which action matters; arbitrary color makes every action shout. Use color to highlight different levels of importance, function, or context, and hold it consistent everywhere the same level appears.

## Working rules

- Give elements consistent style, sizing, and spacing through a shared token set.
- Add a new size only when the difference communicates something.
- Let consistent sizing do the aligning; keylines should emerge from the system rather than being enforced edge by edge.
- Size even seemingly unrelated elements to the same rhythm; later alignment comes almost free.
- Use color to mark importance, function, or context—never uniformly, and never arbitrarily.
- Keep the same meaning attached to the same color wherever it appears.

For my starting button sizes and styles, see [`../../methods/interface/button-sizes-and-styles.md`](../../methods/interface/button-sizes-and-styles.md).
