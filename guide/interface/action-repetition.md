# Repeat actions when repetition adds meaning

## In brief

Avoid showing visually identical actions at the same time when their outcomes differ. Use context, content, or progressive disclosure to separate them. Repeat an action deliberately when repetition improves access or teaches a stable interface convention.

## Resolve ambiguous duplicates with context

Two visible controls that use the same label and icon can be easy to confuse even when they act on different objects. A desktop application might offer both “Add project” and “Add file” through controls labeled “Add” with a plus icon.

Start with Gestalt. Place each action close to the heading, object, or container that defines its context. The spatial relationship should make the target of the action clear before the person reads the label.

## Make the content specific when proximity is insufficient

If similar actions must remain grouped together, name the object in the label. “Add project” and “Add file” communicate more than two controls labeled “Add.”

Specific labels may still be visually easy to confuse when their structure and icon are almost identical. Content improves the distinction but does not replace layout or grouping.

## Use progressive disclosure when both actions are not needed

Keep one action visible and reveal the other only when its context is active. The secondary action might appear on hover, inside a modal, or after the person selects the relevant object.

Do not hide an action only to reduce visual density. Progressive disclosure is useful when the action becomes more relevant or more clearly scoped at the moment it appears.

## Use repetition to teach conventions

Repeated actions are useful when they preserve the same meaning and improve access. An application that displays many filenames might show one fully labeled “Open in” control with a down chevron, then use the same chevron beside other filenames. The labeled control teaches the shorthand used elsewhere.

The same principle applies to a repeated plus button. When the plus consistently means “add or create something,” repetition gives the symbol a stable interface meaning.

Repetition should reinforce one behavior. Do not repeat the same symbol for different actions and expect context to repair an inconsistent convention.

This repetition is also a form of rhythm. Each consistent instance strengthens the association between the gesture and its outcome. See [`../rhythm/repetition-builds-meaning.md`](../rhythm/repetition-builds-meaning.md) for the full principle.

## Working rules

- Avoid simultaneous controls that look the same but produce different outcomes.
- Use proximity and containers to associate an action with its object.
- Add the object to the label when similar actions must appear together.
- Reveal an action progressively when its context is not always active.
- Repeat an action when repetition improves access or teaches a stable convention.
- Keep the meaning of a repeated icon or control consistent throughout the interface.
