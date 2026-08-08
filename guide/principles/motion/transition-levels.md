# Animate the level that changes

## In brief

Animation is a tool for communicating structure. When content changes inside a container, animate that content and keep everything at higher levels still. In an app with four tabs, switching tabs fades through with a small x-axis translation—but the search bar above the tabs does not fade or move, because it searches the whole app. It sits at a level above the tab content, just like the tab bar does, and its stillness says so.

## Give sibling surfaces a spatial relationship

Tapping a new tab runs a small fade-through with a translation on the x axis. The translation gives the tabs a spatial relationship to one another: they read as places arranged side by side, and the motion's direction tells the person which way they moved. Without it, a tab switch is a teleport; with it, the app has a geography.

## Stillness communicates scope

The search bar at the top of every tab searches everything in the app. When a tab changes, the search bar does not fade out or move. If it animated with the content, it would read as part of the tab that just left—and its scope would shrink to match. By staying still while content changes beneath it, the search bar communicates that it belongs to the app, not to any tab.

The same is true of the tab bar itself. Elements that hold still through a transition read as the structure; elements that move read as the content the structure holds.

## Participate at the right level

Every element belongs to a level, and it should animate with that level's transitions—not with its children's. Tab content animates when the tab changes. App-level elements animate when the app-level context changes, such as entering or leaving a full-screen mode. Matching participation to level is what lets motion draw the interface's structure without a single line of explanation.

## Working rules

- Animate the content that changed; keep every higher level still.
- Use a fade-through with a small x translation to give sibling tabs a spatial relationship.
- Keep the translation direction consistent with the tabs' order, so motion and geography agree.
- Keep elements whose scope spans the app—search, tab bar, persistent chrome—still during content transitions.
- Animate an element only with its own level's transitions, never with its children's.
- Respect reduced-motion preferences; the structure must stay clear when the movement is removed.
