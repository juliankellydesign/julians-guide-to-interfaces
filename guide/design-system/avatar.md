---
type: component-spec
prompt: opt-in
scaffold: true
---

# Avatar

## When to use it

For identifying a specific person or organization where knowing *who* is part of the content—a comment's author, an assignee, who is in a call, whose account is signed in. An avatar is a face used as a name: it earns its spot when the person scanning is looking for people.

Not this: an avatar is not a bullet point. A picture on every row of a list nobody scans by person is decoration, and the name alone does the job for less. It is also not an icon—a project, a file, or a repository gets an icon at 20, not a portrait. And more than a handful together stops being identification: past four, show four and a count.

## Sources

Diameters taken from the icon sizes and the button height ladder, so an avatar always matches something next to it; radius from the corner-radius scale; fallback colors from the gray scale; initials from the font-weight roles; ring and stack values from the spacing ladder; trigger states from the button defaults. The methods do not yet document an avatar, so the stack overlap, the status dot, and the initials sizes are a first pass.

## Sizes

Five, each borrowed rather than invented: the small ones are icon sizes, the large ones are button heights. M is the default.

| Size | Diameter | Comes from | Pairs with |
| --- | --- | --- | --- |
| XS | 20 | workhorse icon size | 16 text, inline in a sentence |
| S | 24 | icon size | a dense list row |
| M | 32 | S button height | the default: list rows, comments |
| L | 40 | M button height | a card header |
| XL | 48 | L button height | a profile, one per screen |

## Shape and fallback

- A person is a **circle** (radius full). An organization, team, or workspace is a **rounded square** at radius **10**, the control radius. The shape carries the type, so nothing has to say it in words. First pass.
- No image: initials, one or two letters at medium, gray-700 on gray-100, sized with the diameter—12 at XS and S, 13 at M, 15 at L, 19 at XL. First pass. No initials either: a 20 person glyph, gray-500 on gray-100.
- If you tint the fallback, derive the tint from the identity so it is stable for that person forever, and keep it a light stop from the color scales. A color that changes between sessions is noise wearing a hat.

## Stack

Overlapping avatars sit **8** apart at M (a quarter of the diameter, scaled proportionally at other sizes), each with a **2** gray-0 ring so the edges stay legible. Four at most, then a fifth circle carrying **+N** in the initials treatment. First pass.

A presence dot goes on an avatar only where presence is the point—a quarter of the diameter, bottom-trailing, with the same 2px gray-0 ring. Everywhere else it is a second element earning nothing. First pass.

## States

A static avatar has no states; it is a picture. When it is the trigger for a menu or a link it takes the button defaults: press scale to 0.9, focus-visible 2px highlight outline at offset 2, disabled at 40% opacity. No hover treatment either way—dimming someone's face says nothing about what will happen.
