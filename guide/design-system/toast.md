---
type: component-spec
prompt: opt-in
scaffold: true
---

# Toast

## When to use it

For a short confirmation that something already happened, out of band and after the fact—saved, sent, copied, undone. The person is not waiting on it and does not have to read it: the work is done either way, and the toast is a receipt. Reach for it when the result would otherwise be invisible.

Not this: a toast is not where an error that blocks the task belongs. If a field is wrong, say so at the field; if the operation cannot proceed, say so where the person is looking. It is not a decision either—anything that must resolve is a modal, or an alert dialog when it destroys something. And it is never the only place a piece of information appears, because a toast that is missed is gone.

## Sources

Surface fill, border, radius, and shadow reused from the popover—one popup language, used again. Padding and stack gaps from the spacing ladder; text from the type scale and the font-weight roles; the action from the button scaffold; motion from the modal entrance. The methods do not yet document a toast, so the width, the position, and the dwell time are a first pass.

## Surface

- gray-0 fill, 1px gray-200 border, radius **12**, and the overlay shadow `0 12px 32px` black at 14%. Overlays are a documented shadow use, and this one is genuinely floating over everything.
- Padding **16** on all sides. Width `min(360px, calc(100vw - 32px))`. First pass.
- No scrim. Nothing is blocked, so nothing gets dimmed.
- No status icon and no colored bar down the edge. A check mark next to the word "Saved" is a second element saying the first element's job; if the words need a color to be understood, rewrite the words.

## Anatomy

Title **15** at medium, gray-1000. An optional second line at **15** regular, gray-700, sitting **2** beneath it—title closer to its own subtitle than to anything else. At most one action, a tertiary S (32) button, **12** below the text. Two actions in a toast means it was a decision all along.

## Position and stacking

One corner, the same corner every time, **16** from both edges of the viewport; bottom on touch, where the reach is. Toasts stack **8** apart with the newest nearest the edge, and three visible is the ceiling—beyond that they are a log, and a log belongs on a screen. First pass.

Dwell roughly 5 seconds, longer when a toast carries an action, and never while the pointer is over it. First pass; Base UI owns the timers.

## States

- **Action press** — scale to 0.9, the standard press default.
- **Focus-visible** — 2px highlight outline, offset 2, on the action. Focus lands on the controls, never on the surface.
- **Motion** — fade and scale from 0.96 to 1 over 160ms, the modal's entrance, arriving from the edge it sits against. Exit faster. Respect reduced motion: keep the appearance, drop the travel.
