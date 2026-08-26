---
type: principle
tags: [interface, process]
---

# Every element earns its spot

## In brief

As the voice of the user, one of the tensions you manage is where to leverage what users already know about a pattern and where to diverge from it to signal something new. That dance is delicate because it is temporal: patterns you introduce can become conventions, and conventions someone else introduces can become the standard you should lean on. The discipline that resolves it: when adding novel elements to a conventional interface, each element earns its spot—there is proof of why it should be there.

## Conventions are a moving target

When to lean on a convention is the map-and-landscape question—use it when it describes the behavior accurately and users already carry the understanding (see [`map-and-landscape.md`](map-and-landscape.md)). This principle governs the departure: break a convention to call attention to something genuinely new, and know that the line moves. Something that seemed to warrant a novel interface may turn out to be best served by a conventional one, and a novel pattern that earns adoption elsewhere becomes tomorrow's convention. Judge against what users understand now, not against what was true when the pattern was named.

## Example: let search be search

A company set out to redefine search in their product with AI, and the first guess was a chat interface for search—a familiar interface, novelly applied to one of the most commonly understood interactions there is. It failed the test: users were trying to search and instead got something that looked not-quite-like search, was slower, and returned results that were not much better. Chat had become shorthand for AI, and that was most of the justification. Two well-understood interfaces were mishmashed together in a way that made sense as neither. If the conversational quality had carried outstanding value, chat could have been right—the reality was that search simply wasn't good, and the honest fix was to invest in making search good, with AI powering it if needed.

The proposal instead: **let it be search.** Then bring in elements from conversational interfaces one at a time, each proving itself. Try just the ability to reply to a search to refine it—no message bubbles, no AI prose—and see if that makes searching better. Separately, try a little generative text alongside results. Separately, put a real chat somewhere chat is natural—asking questions about the thing you're looking at, since people always want to ask about what they're already looking at. Compare what each experiment earns, and let the winners in.

**Transferable point:** judge a novel interface by the value it delivers, not by the technology it signals. The verdict on chat-for-search is as of 2026—if conversational search earns broad adoption, the convention moves and the judgment moves with it; the rigor does not.

## The rigor

The alternative is wholesale replacement: everything comes over from the chat interface, and nobody can say why any given piece is there. The rigor is the opposite—each novel element added to a conventional interface (or wilder interface) carries its proof. This is the ask-twice discipline (see [`../rhythm/adding-styles.md`](../rhythm/adding-styles.md)) applied across whole interfaces: reuse what users already understand, and make every departure demonstrate the value that justifies it.

## Working rules

- Lean on a convention when users already carry the understanding it describes.
- Break a convention only to signal something genuinely new, and expect the line to move over time.
- When a conventional interface gains novel elements, introduce them one at a time and require each to prove itself.
- Never let a pattern in because it is shorthand for the technology behind it.
- If the underlying capability is weak, fix the capability—do not dress it in a novel interface.
