---
type: component-spec
prompt: opt-in
scaffold: true
---

# Meter

## When to use it

For a measurement sitting somewhere in a known range—storage used of storage available, battery level, a score out of a maximum, how full a plan's quota is. It is a reading, not an event. The value can go up or down or sit still for a year, and nothing is pending.

Not this: a meter is not progress. Progress is a task advancing toward a finish with someone waiting on it; a meter is a fact about the current state, and dressing a fact as a task makes the interface look busy when it is idle. A value the person sets is a slider. And a measurement with no defined maximum is a number, not a bar—there is nothing to fill.

## Sources

Geometry shared with the progress bar so the two stay on the same keyline; fill colors from the gray scale; segment gap from the spacing ladder; label sizes from the type scale; tabular numerals from the numeric-figures principle; the restraint on threshold color from the visual-weight principle. The methods do not yet document a meter or a semantic warning color, so both are a first pass.

## Bar

- Height **6**, radius full, track gray-200—the progress bar's geometry, reused deliberately so a meter and a progress bar in the same layout share their edges.
- Fill **gray-700**, not the highlight. This is the whole distinction: the highlight is reserved for the thing the person is waiting on, and a meter is not that. Same shape, different voice.
- The fill carries the full radius. At very low values it still renders a visible nub rather than disappearing—a meter reading almost-zero must look different from a meter that failed to load.

## Threshold

A meter may change color when the reading crosses a line that actually matters—a quota nearly spent, a battery about to die. One threshold, not three, and only where the person can do something about it. The methods do not yet document a warning color, so the value is yours to slot in; keep it a single step of alarm, and never let a normal reading carry it. A dashboard where every meter is colored has taught the person to ignore the color.

## Label

The reading in words next to the bar—"18.2 GB of 25 GB"—at **13** regular gray-700, in tabular numerals, **8** above it. A bare percentage under a bar says the same thing twice; a bar plus its units says two different things.

## Segmented variant

For a coarse reading with named steps—password strength is the honest example—use four segments of equal width sitting **2** apart, filled left to right, unfilled segments at gray-200. Four, because a person can count four at a glance. First pass.

## States

Not interactive: no press, no hover, no focus ring. If a meter needs to respond to the pointer, what you have is a slider.
