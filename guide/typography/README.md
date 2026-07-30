# Typography

## In brief

Begin with a 16px or 17px base size and derive the rest of the system mathematically. A major-second ratio of 1.125 creates a gentle hierarchy suitable for interfaces. Let weight, size, and spacing communicate structure.

## Start at the base

Visual design begins with the base type size—usually 16px or 17px. The base is the anchor for the type scale and the spacing around type.

Use a major-second scale:

```text
ratio = 1.125
size(step) = base × ratio^step
```

Starting at 17px and rounding to whole pixels produces:

| Direction | Sizes |
| --- | --- |
| Smaller | 15, 13, 12 |
| Base | 17 |
| Larger | 19, 22, 24, 27, 31, 34 |

The scale is deliberately restrained. Interface hierarchy rarely needs dramatic jumps between every level.

## Weight carries meaning

A change in font weight is a change in meaning. Use it to indicate hierarchy, emphasis, status, or interaction—not to add arbitrary variety.

## Spacing follows type

Spacing should be calculated in relationship to type size, then adjusted optically. The mathematical system produces rhythm; optical judgment corrects for glyph shape, density, and context.

## Working rules

- Begin with 16px or 17px unless the platform or audience suggests otherwise.
- Generate the full scale before assigning semantic roles.
- Use as few distinct roles as the interface needs.
- Prefer hierarchy through type and space before adding containers or decoration.
- Treat the calculated scale as a framework and rounding as an intentional choice.
