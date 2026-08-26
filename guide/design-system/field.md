---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Field

## When to use it

For any single control a person fills in. The field is the wrapper that binds a label, an optional description, and a validation message to one input, select, checkbox, or switch. If a control collects a value, it gets a field—a bare control with a label floating somewhere near it is a guess about which belongs to which, and the person is the one who pays for the guess.

Not this: several fields that answer one question together belong in a fieldset. The submittable container and its actions is a form. A radio group and a checkbox group already carry their own group label; a field around them would be a second label saying the same thing.

## Sources

Label and description sizes from the icon-and-text pairing; weights from font-weight roles; the label-description-control gaps from the title-subtitle-body proximity rule; control geometry unchanged from the input spec; the message color from the documented red scale; message copy from the content principles. The methods do not yet document validation timing, an error stop on the red scale, or a required marker—those are a first pass and the softest values here.

## Anatomy

Stacked, top to bottom:

- **Label** — 16 at medium, gray-1000. Sentence case, no closing punctuation.
- **Description** (optional) — 14 at regular, gray-600, **4** below the label. It says what to enter, so it sits above the control where it can still change what the person types. First pass.
- **Control** — **8** below whatever precedes it, at its own spec. Unchanged.
- **Message** — 14 at regular, **6** below the control. It reports on what was entered, so it sits after it.

The 4 / 8 pair is the title-subtitle-body ladder: label and description are one cluster, the control is what the cluster introduces. Fields stack **20** apart—the largest gap in the group, so each field reads as one thing.

Mark whichever set is smaller. If most fields are required, tag the optional ones with "Optional" at 14 gray-600 after the label; if most are optional, mark the required ones. An asterisk on every label is decoration. First pass.

## Validation

Error text is red 600, description text is gray-600, and the error replaces the description rather than stacking under it—two lines of guidance under one field is one too many. In error the control's border goes to red 600 as well; the field is wrong, not just the note beneath it.

Error copy is interface writing and follows the content principles: direct and informative. Name what is wrong and what to do about it—"Enter a work email address."—not "Invalid." Sentence case, ends with a period, never an exclamation point, never blame. If the person has to guess which of three rules they broke, the message has not done its job.

**Timing.** First pass, and I have not documented an opinion on this: validate on submit, then re-validate on change once a field has already errored. Do not error a field the person has not finished typing in.

## States

Focus, press, and disabled belong to the control and are specified there. The field adds two:

- **Error** — red 600 border and message, as above.
- **Disabled** — 40% opacity across label, description, control, and message together. A bright label over a dead control promises something the field will not deliver.
