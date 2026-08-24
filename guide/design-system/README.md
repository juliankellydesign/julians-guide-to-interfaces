# Design system components

## In brief

A basic set of design system components, expressed twice: as written visual specs, and as a reference implementation built on [Base UI](https://base-ui.com) (`@base-ui/react`), the headless component library. The spec is the contract; the implementation is one rendering of it. On platforms where the implementation cannot run—iOS, Android, anything non-web—the spec serves as the visual source of truth to implement natively.

Every value here is assembled from the methods module: the gray and color scales, the spacing ladder, the radius scale, button sizes and styles, control padding, icon pairings, modal padding, the scrim, and the press scale. Where a component needed a value the methods do not yet document, the spec says so and marks it as a first pass. Like everything in the methods layer, all of it is scaffold—a slotted-in design system overrules it.

## Components

[`semantic-tokens.md`](semantic-tokens.md) defines the boundary between primitive scales and components. Numbered scale values exist only in the definition layer; every component consumes a semantic role instead.

Thirty-six components covering Base UI's basic set. Every spec opens with "When to use it"—selection guidance is what an agent needs from a spec, and the tables below carry the one-line form so a component can be chosen without opening anything.

### Actions and text entry

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Button | A discrete action—submit, save, continue, send | [`button.md`](button.md) | `@base-ui/react/button` |
| Input | Freeform text entered or edited | [`input.md`](input.md) | `@base-ui/react/input` |
| Number field | A bounded quantity typed or nudged one step at a time | [`number-field.md`](number-field.md) | `@base-ui/react/number-field` |
| OTP field | A short code of fixed, known length is transcribed in | [`otp-field.md`](otp-field.md) | `@base-ui/react/otp-field` |

### Selection

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Checkbox | Independent choices, or a binary state submitted with a form | [`checkbox.md`](checkbox.md) | `@base-ui/react/checkbox` |
| Radio group | Exactly one choice out of a few visible options | [`radio-group.md`](radio-group.md) | `@base-ui/react/radio-group` |
| Switch | A binary setting that takes effect immediately | [`switch.md`](switch.md) | `@base-ui/react/switch` |
| Toggle | A button that stays pressed to hold a mode, usually in a toolbar | [`toggle.md`](toggle.md) | `@base-ui/react/toggle` |
| Toggle group | Several toggles that belong to one decision—a cluster or a segmented track | [`toggle-group.md`](toggle-group.md) | `@base-ui/react/toggle-group` |
| Slider | Setting an approximate value across a visible range | [`slider.md`](slider.md) | `@base-ui/react/slider` |

### Choosers

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Select | One value from a short, fixed list, no typing | [`select.md`](select.md) | `@base-ui/react/select` |
| Combobox | One value from a list too long to scan, filtered by typing | [`combobox.md`](combobox.md) | `@base-ui/react/combobox` |
| Autocomplete | Free text where suggestions help but any value is valid | [`autocomplete.md`](autocomplete.md) | `@base-ui/react/autocomplete` |

### Forms

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Field | A single control needs a label, description, and validation message | [`field.md`](field.md) | `@base-ui/react/field` |
| Fieldset | Two or more fields answer one question together | [`fieldset.md`](fieldset.md) | `@base-ui/react/fieldset` |
| Form | A set of values is committed in one step | [`form.md`](form.md) | `@base-ui/react/form` |

### Overlays

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Modal | A focused interruption that must resolve before continuing | [`modal.md`](modal.md) | `@base-ui/react/dialog` |
| Alert dialog | Confirming a consequence the person cannot walk back | [`alert-dialog.md`](alert-dialog.md) | `@base-ui/react/alert-dialog` |
| Drawer | A focused task or panel anchored to an edge of the screen | [`drawer.md`](drawer.md) | `@base-ui/react/drawer` |
| Popover | Secondary content anchored to the control that opened it | [`popover.md`](popover.md) | `@base-ui/react/popover` |
| Tooltip | A few words naming a control that has no visible label | [`tooltip.md`](tooltip.md) | `@base-ui/react/tooltip` |
| Preview card | Previewing a link's destination before following it | [`preview-card.md`](preview-card.md) | `@base-ui/react/preview-card` |

### Menus and navigation

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Menu | A list of actions opened from a visible trigger | [`menu.md`](menu.md) | `@base-ui/react/menu` |
| Context menu | Actions scoped to one object, opened on that object | [`context-menu.md`](context-menu.md) | `@base-ui/react/context-menu` |
| Menubar | A desktop app needs a complete, browsable index of its commands | [`menubar.md`](menubar.md) | `@base-ui/react/menubar` |
| Navigation menu | Top-level navigation with more destinations than fit in a row | [`navigation-menu.md`](navigation-menu.md) | `@base-ui/react/navigation-menu` |
| Toolbar | Frequent actions on the content beside or beneath them | [`toolbar.md`](toolbar.md) | `@base-ui/react/toolbar` |
| Tabs | Switching between sibling views of one subject | [`tabs.md`](tabs.md) | `@base-ui/react/tabs` |

### Disclosure

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Accordion | A stack of peer sections opened one or two at a time | [`accordion.md`](accordion.md) | `@base-ui/react/accordion` |
| Collapsible | One optional block of supplementary detail | [`collapsible.md`](collapsible.md) | `@base-ui/react/collapsible` |
| Scroll area | A bounded region inside a page that scrolls on its own | [`scroll-area.md`](scroll-area.md) | `@base-ui/react/scroll-area` |

### Feedback and display

| Component | Use it when | Spec | Built on |
| --- | --- | --- | --- |
| Toast | A short confirmation that something already happened | [`toast.md`](toast.md) | `@base-ui/react/toast` |
| Progress | A task advancing toward a finish someone is waiting on | [`progress.md`](progress.md) | `@base-ui/react/progress` |
| Meter | A static measurement sitting inside a known range | [`meter.md`](meter.md) | `@base-ui/react/meter` |
| Avatar | Identifying a specific person or organization | [`avatar.md`](avatar.md) | `@base-ui/react/avatar` |
| Separator | A boundary spacing alone cannot make read—a last resort | [`separator.md`](separator.md) | `@base-ui/react/separator` |

### Grouped specs

Two specs cover several controls at once where the reference sheet uses native HTML rather than a Base UI part:

| Components | Spec | Notes |
| --- | --- | --- |
| Text area, Select, Checkbox, Radio | [`field-controls.md`](field-controls.md) | Native HTML controls in the reference sheet |
| Card, Tabs, Badge, Alert | [`content-components.md`](content-components.md) | Native HTML semantics in the reference sheet |

## Reference implementation

The implementation lives in [`/design-system/`](../../design-system/) at the repository root:

- `design-system.css` — the visual spec as CSS, tokens first, one section per component
- `sheet.jsx` — the demo page's own chrome (Section, Row, Col); not part of any component spec
- `parts/*.jsx` — the demos, one file per component group
- `app.jsx` — composes the parts into the sheet
- `app.js` — the committed bundle (esbuild), so the page serves statically with no build step
- `components.html` — the rendered component sheet

Validation errors, destructive items and a meter past its threshold use the `danger` and `warning` semantic roles.

Rebuild the bundle after editing `app.jsx`: `npm run build:ds`.

## Rules

- The spec files are the source of truth; the CSS implements them, never the reverse.
- Components never consume raw numbered color tokens. They consume semantic or component-role aliases.
- Every spec opens with a "When to use it" section—selection guidance is what an agent needs from a spec, and the table above carries the one-line form.
- Components take exact values only from `data/foundations.json` and these specs.
- Behavior, focus management, and accessibility come from Base UI; the guide neither restyles nor re-documents it. What a component does is static—the spec covers when to reach for it and what it looks like.
- A platform that cannot run the implementation follows the spec visually, using its native equivalents for behavior.
