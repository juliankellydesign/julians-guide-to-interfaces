---
type: component-spec
tags: [interface]
prompt: opt-in
scaffold: true
---

# Content and navigation components

## Card

A card groups content only when proximity alone is insufficient. It uses the surface role, subtle border, radius 16, and 20 padding on desktop. Mobile keeps the padding at 16 and lets the page margin absorb the narrower screen. Interactive cards gain a strong border on hover and the standard press state; static cards do not pretend to be controls.

## Tabs

Tabs switch peer views in place. The tab list uses a subtle bottom border. Labels have a 40-high desktop target and a 44-high touch target. The selected tab uses primary text and a 2px primary-action indicator; unselected tabs use secondary text. Horizontal overflow scrolls on mobile rather than squeezing or wrapping labels.

## Badge

Badges communicate status or compact metadata, not actions. They are 24 high, use radius full, 8 horizontal padding, and 12 semibold type. Neutral, success, warning, and danger variants use paired semantic foreground and subtle-surface roles.

## Feedback

An inline alert uses the applicable status surface, status content, radius 12, and 16 padding. A toast uses the inverse surface and inverse content because it floats above unrelated content. Status is always written or paired with an icon; color is not the only signal.
