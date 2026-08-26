---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Fieldset

## When to use it

For two or more fields that answer one question together—a mailing address, a date split across three inputs, a card number with its expiry and security code. The legend names the thing the group collects, so each field inside can carry a short label instead of repeating the context.

Not this: one control and its label is a field, and a fieldset around a single field is a legend doing a label's job. The whole submittable set with its actions is a form. A set of radios or checkboxes already has a group label from its own spec—wrap fields in a fieldset when the group holds different controls.

## Sources

Legend size from the type scale and weight from font-weight roles; the gap under the legend from the headings-take-more-space-above rule and the radio group's group label; field spacing unchanged from the field spec; panel fill and border from the documented gray usage; panel radius from the radius ladder and the container-rounder-than-content rule. The methods do not yet document a fieldset, so the gaps, the row layout, and the optional panel are a first pass.

## Anatomy

- **Legend** — 19 at medium, gray-1000. One step up the type scale from the 17 base and clearly above the 16 field labels; 17 next to 16 is a difference nobody perceives and a size nobody needs.
- **Description** (optional) — 14 at regular, gray-600, **4** below the legend.
- **Fields** — first field **8** below the legend or its description, then **20** apart, per the field spec.
- **Between fieldsets** — **32**, and **32** above the first one.

Each level of grouping takes a visibly larger gap than the level inside it: 4–8 inside a field, 20 between fields, 32 between fieldsets. That ladder is the whole structure of the form; if two of those numbers land close together, the grouping stops meaning anything. First pass.

## Rows

A fieldset may run its fields across a row when the values are short and read as one string—expiry and security code, or city, state, and postal code. Column gap **12**. Every control in the row takes the same height so the labels above them and the messages below them land on shared keylines. First pass.

If a row needs a scrollbar or wraps, it was never a row.

## Panel

No border and no fill by default. A fieldset is a grouping, not a card, and space already groups it.

When the group genuinely must be detached from something adjacent, it takes a panel: gray-50 fill or 1px gray-100 border, radius **12**—one step above the 10 its controls use, since a container is rounder than its content—and **16** of interior padding on all sides. First pass. One panel on a form is a grouping; five panels is a stack of cards with a submit button underneath.

## States

- **Disabled** — 40% opacity across the legend and every field in it. A fieldset disables as a unit; one dead field among live ones is the field's own state, not the group's.
