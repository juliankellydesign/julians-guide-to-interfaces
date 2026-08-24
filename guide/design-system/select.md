---
type: component-spec
prompt: opt-in
scaffold: true
---

# Select

## When to use it

For choosing one value from a short, fixed, known set—country, status, role, sort order. The list is closed: every valid answer is already in it, and the person never types. Reach for it when showing all the options at once would cost more room than the choice deserves.

Not this: if the list is long enough that scanning it is work, the person needs to filter by typing—that is a combobox. If the value can be something not on the list, that is an autocomplete. If there are two or three options and the room exists, show them all as radios or a segmented control; a select that hides three options is hiding nothing worth hiding.

## Sources

Trigger heights, padding, and text sizes from the button scaffold and control padding; radius 10 from the control decision shared with buttons and inputs; popup radius from the nested-radius formula; popup shadow reused from the modal spec; chevron from the icon sizes; states from the press scale and the focus and disabled defaults. The methods do not yet document a popup surface, so the popup values below are a first pass.

## Trigger

The trigger is an input that cannot be typed into: same heights, same padding, same border. S 32 / M 40 / L 48, M the default; padding-x 12 / 16 / 20; text 14 / 16 / 16. 1px gray-300 border, gray-0 fill, radius 10.

Value text gray-1000 at regular; placeholder gray-500. A 20 chevron in gray-500 sits at the trailing edge (16 at S, per the icon taper in the button table). The chevron is the only decoration the trigger gets—it says "there is more here," and that is its whole purpose.

## Popup

- Aligned to the trigger and matched to its width, offset **4** below it. First pass.
- Padding **4**, radius **12**, so the items inside land on radius **8** by the nested-radius formula (12 − 4). First pass.
- gray-0 fill, 1px gray-200 border, and the modal's overlay shadow—`0 12px 32px` black at 14%. Overlays are a documented shadow use; reusing the modal's value keeps one shadow for one job.
- Items take the trigger's own height and text size, padding-x **8**, so a 40 trigger opens a list of 40 items. No new sizes enter on open.
- Selected item: gray-900 label at medium, with a 20 check at the trailing edge. Everything else stays regular. The check does the work; do not also tint the row.
- No scrim. A select is not an interruption, and the content beneath is still the subject.

## States

- **Press** (trigger) — scale to 0.9, the standard press default.
- **Hover** (pointer only) — trigger border to gray-400; item gains a gray-100 fill. One step along the gray scale, no more.
- **Highlighted item** (keyboard) — gray-100 fill, the same treatment as hover. Two names for one state would be two things to perceive.
- **Focus-visible** — 2px highlight outline, offset 2 on the trigger; the open popup's focus lives on the highlighted item, not a second ring.
- **Disabled** — 40% opacity, no press state.
