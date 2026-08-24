---
type: component-spec
prompt: opt-in
scaffold: true
---

# Semantic tokens

## Rule

Components use semantic tokens, never a numbered color-scale token. A scale describes how colors relate; a semantic token describes why a component uses one. Change a scale stop or remap a semantic token without searching through component CSS.

Primitive scales remain available only inside the token definition layer. The component layer consumes these roles:

| Group | Roles |
| --- | --- |
| Surfaces | canvas, surface, surface-subtle, surface-raised, surface-disabled, surface-inverse |
| Content | text-primary, text-secondary, text-placeholder, text-disabled, text-inverse |
| Borders | border-subtle, border-default, border-strong, border-focus |
| Actions | action-primary, action-primary-hover, action-secondary, action-secondary-hover, action-quiet-hover |
| Status | success, warning, danger, and their subtle surfaces |
| Effects | focus-ring, overlay-scrim, shadow-color |

Semantic aliases may initially point to scaffold stops. That mapping is the only place where a raw stop belongs. Component state tokens may then alias semantic roles—for example, `button-primary-background` maps to `action-primary`—when a component needs an explicit contract.

## Platform and appearance

Roles survive changes in input method, screen size, and appearance. Desktop may use denser control dimensions while touch uses larger hit areas; both use `action-primary`, not separate blue values. Dark appearance remaps the roles rather than reversing numbered stops inside components.

## Color lab handoff

The iOS playground stores the working hue, peak chroma, gamut clamp, and lightness curves. Locking the palette freezes those values for component testing: controls continue to consume the semantic roles generated from the locked palette until it is unlocked. This makes the comparison deliberate instead of allowing a slider gesture to change the interface being judged.
