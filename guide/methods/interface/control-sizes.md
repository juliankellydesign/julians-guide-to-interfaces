---
type: method
prompt: opt-in
---

# Choose control sizes by input method

## In brief

For mouse-controlled interfaces, start with a control height of 24px or 28px. For touch interfaces, maintain at least a 44px interactive target even when the visible affordance is smaller.

## Mouse-controlled interfaces

Use these heights as starting points for websites on desktop and desktop applications:

| Height | Use |
| --- | --- |
| 16px | Acceptable only when the interface requires extreme density |
| 20px | Smallest comfortable mouse target |
| 24px | Default for a dense power-user tool such as an IDE |
| 28px | Default for a consumer-focused application |
| Above 28px | An emphasized exception rather than a general control size |

Controls above 28px are useful for highlighted input fields and emphasized actions in marketing or onboarding. A search field can also be larger when it is the only visible search field.

## Touch interfaces

Maintain a 44px minimum interactive target for finger input.

The visible affordance can be smaller than the target:

| Visible size | Use |
| --- | --- |
| Below 24px | Do not make it interactive |
| 24px | Smallest visible affordance, with a 44px target |
| 44px | Default minimum visible control and interactive target |
| 64px or 72px | Acceptable large controls when the composition supports them |

There is no hard upper bound for touch controls. Choose larger sizes according to the action, layout, reach, and visual hierarchy.

Do not expand adjacent hit areas until they overlap or become difficult to distinguish. Preserve enough separation that a person can reliably select the intended control.

## Working rules

- Use 24px for dense mouse-controlled tools and 28px for consumer-focused mouse interfaces.
- Treat 20px as the smallest comfortable mouse target.
- Use 16px only when necessary.
- Use desktop controls above 28px sparingly and with a reason.
- Maintain a 44px minimum interactive target for touch.
- Do not make a touch affordance smaller than 24px interactive.
- Allow 24px visible affordances only when their targets remain at least 44px and do not compete with adjacent targets.
- Use 64px or 72px touch controls when the composition and interaction benefit.
- Preserve an existing control-size system unless replacing it is part of the task.
