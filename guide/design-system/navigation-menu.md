---
type: component-spec
prompt: opt-in
scaffold: true
---

# Navigation menu

## When to use it

For the top-level navigation of a site or app: a row of section triggers, each opening a panel of links to what lives inside that section. Reach for it when there are more destinations than fit in a row of plain links, and grouping them is genuinely useful to someone deciding where to go. This is the broadest wayfinding on the screen, so it sits at the very top, per top-and-bottom.

Not this: every item here goes somewhere—nothing in a navigation menu performs an action. A list of actions from a trigger is a menu; application commands are a menubar; actions on the content below are a toolbar. Switching a view within the page you are already on is a toggle group, not navigation. And on mobile, this collapses into a drawer rather than shrinking.

## Sources

Trigger heights, padding, and radius from the button ladder and the shared control radius 10; panel fill, border, shadow, and offset from the menu spec's popup; text sizes from the button spec's pairings; weights from the font-weight roles; the title-to-description gap from the padding principle ("headings take more space above than below"); placement from top-and-bottom. The methods do not yet document a navigation menu, so the bar height and the panel geometry are a first pass.

## Bar

Height **64** from the spacing ladder, gray-0 fill, 1px gray-200 bottom border, no shadow. First pass. Triggers are M (**40**) so they share a keyline with any button beside them: padding-x **16**, label **16** at medium in gray-900, radius **10**, sitting **4** apart. A trigger that opens a panel takes a 20 chevron in gray-500; a trigger that is just a link takes none—the chevron is what distinguishes the two, so it must never appear on both.

## Panel

- The menu spec's surface at a larger scale: gray-0 fill, 1px gray-200 border, radius **12**, the overlay shadow `0 12px 32px` black at 14%, offset **4** below the bar.
- Padding **16**, not the menu's 4—these are link groups with descriptions, not a tight list of rows. First pass.
- Width `min(640px, calc(100vw - 32px))`, laid out in columns of at most three. First pass. A panel that needs a fourth column is a sitemap; put that on a page.
- Link title **16** at medium in gray-1000, description **14** at regular in gray-500, **2** between them and **12** between links—the title sits closer to its own description than to the next link, which is the whole reason the grouping reads.
- A column heading sits above its links at **13** medium in gray-500, with **8** below it and **20** above the next column heading.
- No scrim. Navigation is not an interruption, and one panel is open at a time.

## States

- **Hover** (pointer only) — trigger gains a gray-100 fill; a link inside the panel takes the same gray-100 fill at radius **8**, its title going to gray-1000. One step along the gray scale.
- **Open** — the trigger holds the gray-100 fill for as long as its panel is open.
- **Current section** — trigger label at semibold in gray-1000. Weight carries it; do not also add a rule, a fill, and a color. Concentrate weight, never max every source.
- **Focus-visible** — 2px highlight outline, offset 2, on the trigger or the link.
- **Motion** — fade and scale from 0.96 to 1 over 160ms, the modal's entrance. Moving between two open triggers slides the panel rather than re-entering it. Respect reduced motion.
