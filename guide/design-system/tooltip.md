---
type: component-spec
prompt: opt-in
scaffold: true
---

# Tooltip

## When to use it

For naming a control that carries no visible label—an icon button, a truncated value, a mark on a chart. Text only, a few words, and never anything the person has to act on. A tooltip is a courtesy: if the interface stops working without it, the label belonged on the surface.

Not this: if it holds a control, a link, or more than a line or two, it is a popover. If the information is required to finish the task, put it in the layout where everyone sees it. And a tooltip never reports the result of something the person did—that is not hover-triggered.

## Sources

Text size from the type scale; padding from the spacing ladder, following the control-padding pattern of more horizontal than vertical; colors from the gray scale; label weight from the font-weight roles; offset reused from the popup offset in the select spec. The methods do not yet document a tooltip surface, so its geometry is a first pass.

## Surface

- gray-900 fill, gray-0 label at **13**, regular weight. Inverted on purpose: a tooltip is a transient label floating over the interface, not a surface you can work in, and it should never be mistaken for one.
- Padding **6** vertical, **8** horizontal; radius **6**. First pass.
- Offset **4** from its trigger, and the same side every time for the same kind of control. First pass.
- No shadow. The dark fill already separates it from everything beneath, and concentrating two sources of weight on one small element is exactly what the weight principle forbids.
- No scrim, no arrow, no title, no second line where one will do.

## States

- **Delay** — appears after a short pause on hover, immediately on keyboard focus. Base UI owns the timing; the rule is that a pointer crossing a control is not a request to be told about it.
- **Touch** — no tooltip. There is no hover, and long-press belongs to the platform. If touch users need the label, the control needed a label.
- **Motion** — fade in under 200ms, no movement. Respect reduced motion.
