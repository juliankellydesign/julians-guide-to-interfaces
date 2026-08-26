---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Form

## When to use it

For a set of values committed in one step—sign-in, checkout, an account settings page with a save. The form owns the submit, the disabled-while-submitting moment, and the error that belongs to the whole submission rather than to any one field.

Not this: a setting that takes effect the moment it is touched needs no form and no submit—that is a switch. A lone search input that submits on enter is an input; wrapping it in a form buys nothing. Grouping fields visually is a fieldset, and one control with its label is a field.

## Sources

Action sizes and styles from the button scaffold; one primary per surface from the action hierarchy principle; action placement from the top-and-bottom rule and group-actions-by-scope; field and fieldset spacing from their specs; modal interior from modal padding; error copy from the content principles. The methods do not yet document form width or where a submission error goes—first pass.

## Layout

One column. Every field starts on the same left keyline and ends on the same right one; same-size controls with the same padding put their contents on shared keylines without anyone drawing a grid.

The form is sized to its longest field, not to the screen. A form stretched across a 1440px window is a row of four-character inputs separated by a thousand pixels of nothing. Extra width belongs to the margins around the form.

Spacing comes from the specs below it: **20** between fields, **32** between fieldsets, **32** above the actions. In a modal the form takes the modal's **24** interior padding and adds none of its own.

## Actions

At the bottom, where the task ends. Reading order becomes interaction order: orient, fill, submit.

- **Submit** — one primary button, the only primary on the surface. M (40) inline; L (48) when the form is the whole screen, as in sign-in or checkout.
- **Cancel or back** — secondary, at the same size, leading the submit.
- **Actions with broader scope**—skip, sign in instead, use a different method—sit outside the action group, usually above the form or at the top of the screen. Inside the group they read as a way to finish the form, which they are not.

On touch, a full-width form takes a full-width submit. On pointer, actions align to the form's leading keyline; in a modal they align trailing, where a modal's confirming action lives.

## Submission

- **Submitting** — the submit stays in place and takes a loading treatment; the form's controls go to 40% opacity and stop responding. Never swap the button for a spinner in a different footprint—the row must not resize while the person waits.
- **Submission error** — an error that belongs to the whole form, not a field, sits directly above the actions at 14 regular in red 600, so it is in the same glance as the button that just failed. Field-level errors stay on their fields. First pass.
- Error copy follows the content principles: say what failed and what to do next.

## States

Focus, press, hover, and disabled belong to the buttons and controls and are specified there. The form itself has one: disabled, at 40% opacity across everything it contains.
