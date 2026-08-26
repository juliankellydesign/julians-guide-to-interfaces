---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Collapsible

## When to use it

For one block of supplementary content most people will not need—advanced settings, the full text of a long error, the rest of a truncated description. Closed is the default and open is the exception. If that is backwards, the content should simply be on the screen.

Not this: several such blocks stacked and coordinated is an accordion—the group is what makes it one. Sibling views of one subject is tabs. And a collapsible is not a way to fit too much onto a screen: everything on a screen serves a purpose, and hiding what the person came for is not editing.

## Sources

The trigger is a button and takes the button spec whole—size, padding, radius, states. Chevron from icon sizes and its exception to the pairing table; the panel offset from the spacing ladder; motion from the transition-levels principle. The methods do not yet document a collapsible, so the panel offset and the chevron gap are a first pass.

## Anatomy

- **Trigger** — a tertiary button, S 32 or M 40, M the default. Label at medium, gray-900, radius 10. All of that arrives with the button; none of it is redecided here.
- **Chevron** — 20, gray-500, at the trailing edge, set **6** from the label, rotating 180° on open. It may leave the 20-icon-with-16-text pairing for optical tuning; that is the documented chevron exception. First pass.
- **Panel** — content starts **8** below the trigger and shares a left edge with the trigger's label, so the disclosure and what it reveals line up. First pass.

The label names what opens, not the act of opening: "Advanced settings," not "Show advanced settings." The chevron already says show.

## Motion

Height and opacity animate together and the content below moves down. Only that level moves—everything above the trigger holds still. Under reduced motion the panel appears without the height animation.

## States

It is a button, so it takes the button's states unchanged: press scale 0.9, hover to a gray-50 fill, focus-visible 2px highlight outline at offset 2, disabled at 40% opacity with no press. Opening a panel does not justify a new state.
