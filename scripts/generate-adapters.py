#!/usr/bin/env python3
"""Generate the /adapters/ color artifacts from data/foundations.json.

Outputs:
  adapters/shadcn/julian.json   - shadcn registry:theme item (one-click install)
  adapters/shadcn/julian.css    - the same tokens as plain CSS for non-registry projects
  adapters/uikit/Sources/JulianKit/JulianColors.swift - scales + semantic roles as UIColor

The guide Markdown and data/foundations.json are the source of truth; these files
are generated representations. Rerun this script instead of hand-editing them.

The dark mappings below are a mechanical first pass (same scales, roles mirrored
with elevation preserved). The guide documents no dark-mode opinion yet; see
guide/design-system/README.md#adapters.
"""

import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FOUNDATIONS = json.loads((ROOT / "data" / "foundations.json").read_text())

# ---------------------------------------------------------------- scales

STOPS = FOUNDATIONS["color"]["grayScale"]["stops"]
GRAY_L = FOUNDATIONS["color"]["grayScale"]["lightnessByStop"]
SCALE_L = FOUNDATIONS["color"]["colorScales"]["lightnessByStop"]
SCALES = FOUNDATIONS["color"]["colorScales"]["scales"]

def oklch(scale, stop):
    """(L, C, H) for scale name ('gray', 'blue', ...) at a stop."""
    s = str(stop)
    if scale == "gray":
        return (GRAY_L[s], 0.0, 0.0)
    return (SCALE_L[s], SCALES[scale]["chromaByStop"][s], SCALES[scale]["hue"])

def css_oklch(ref):
    scale, stop = ref
    L, C, H = oklch(scale, stop)
    if C == 0:
        return f"oklch({fmt(L)} 0 0)"
    return f"oklch({fmt(L)} {fmt(C)} {fmt(H)})"

def fmt(x):
    return f"{x:.5f}".rstrip("0").rstrip(".") if isinstance(x, float) else str(x)

def oklch_to_srgb(L, C, H):
    """OKLCH -> gamma-encoded sRGB in 0..1 (Björn Ottosson's OKLab matrices)."""
    h = math.radians(H)
    a, b = C * math.cos(h), C * math.sin(h)
    l_ = L + 0.3963377774 * a + 0.2158037573 * b
    m_ = L - 0.1055613458 * a - 0.0638541728 * b
    s_ = L - 0.0894841775 * a - 1.2914855480 * b
    l, m, s = l_ ** 3, m_ ** 3, s_ ** 3
    lin = (
        +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
    )
    def gamma(c):
        c = min(1.0, max(0.0, c))
        return 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055
    return tuple(gamma(c) for c in lin)

# ------------------------------------------------- shadcn token mapping
# Light values come from the documented semantic roles
# (designSystem.colorContract.semanticColors); dark is the mechanical first pass.

RADIUS = "0.625rem"  # radius 10 from the button spec / radius ladder

SHADCN_LIGHT = {
    "background": ("gray", 50),        # canvas
    "foreground": ("gray", 1000),      # textPrimary
    "card": ("gray", 0),               # surface
    "card-foreground": ("gray", 1000),
    "popover": ("gray", 0),
    "popover-foreground": ("gray", 1000),
    "primary": ("blue", 500),          # actionPrimary
    "primary-foreground": ("gray", 0), # textInverse
    "secondary": ("gray", 100),        # actionSecondary
    "secondary-foreground": ("gray", 900),  # secondary button label (button spec)
    "muted": ("gray", 100),
    "muted-foreground": ("gray", 600), # textSecondary
    "accent": ("gray", 100),           # actionSecondary; see adapter README
    "accent-foreground": ("gray", 1000),
    "destructive": ("red", 600),       # danger
    "destructive-foreground": ("gray", 0),
    "border": ("gray", 100),           # borderSubtle (the hairline)
    "input": ("gray", 300),            # borderDefault
    "ring": ("blue", 500),             # borderFocus
    "chart-1": ("blue", 500),
    "chart-2": ("green", 500),
    "chart-3": ("orange", 500),
    "chart-4": ("purple", 500),
    "chart-5": ("red", 500),
    "sidebar": ("gray", 0),
    "sidebar-foreground": ("gray", 1000),
    "sidebar-primary": ("blue", 500),
    "sidebar-primary-foreground": ("gray", 0),
    "sidebar-accent": ("gray", 100),
    "sidebar-accent-foreground": ("gray", 1000),
    "sidebar-border": ("gray", 100),
    "sidebar-ring": ("blue", 500),
}

SHADCN_DARK = {
    "background": ("gray", 1000),
    "foreground": ("gray", 0),
    "card": ("gray", 950),
    "card-foreground": ("gray", 0),
    "popover": ("gray", 950),
    "popover-foreground": ("gray", 0),
    "primary": ("blue", 400),
    "primary-foreground": ("gray", 1000),
    "secondary": ("gray", 900),
    "secondary-foreground": ("gray", 100),
    "muted": ("gray", 900),
    "muted-foreground": ("gray", 400),
    "accent": ("gray", 900),
    "accent-foreground": ("gray", 0),
    "destructive": ("red", 500),
    "destructive-foreground": ("gray", 0),
    "border": ("gray", 900),
    "input": ("gray", 700),
    "ring": ("blue", 400),
    "chart-1": ("blue", 400),
    "chart-2": ("green", 400),
    "chart-3": ("orange", 400),
    "chart-4": ("purple", 400),
    "chart-5": ("red", 400),
    "sidebar": ("gray", 950),
    "sidebar-foreground": ("gray", 0),
    "sidebar-primary": ("blue", 400),
    "sidebar-primary-foreground": ("gray", 1000),
    "sidebar-accent": ("gray", 900),
    "sidebar-accent-foreground": ("gray", 0),
    "sidebar-border": ("gray", 900),
    "sidebar-ring": ("blue", 400),
}

# Press state (methods/motion/press-scale): scale 0.9, matching the reference
# implementation's timing. Wrapped in a motion-preference guard.
PRESS_CSS = {
    "@layer components": {
        "@media (prefers-reduced-motion: no-preference)": {
            '[data-slot="button"]': {
                "transition": "transform 0.1s ease",
            },
            '[data-slot="button"]:active:not(:disabled)': {
                "transform": "scale(0.9)",
            },
        }
    }
}

def build_shadcn_json():
    def vars_for(mapping):
        out = {k: css_oklch(ref) for k, ref in mapping.items()}
        out["radius"] = RADIUS
        return out

    item = {
        "$schema": "https://ui.shadcn.com/schema/registry-item.json",
        "name": "julian",
        "type": "registry:theme",
        "title": "Julian",
        "description": (
            "The Julian look for shadcn/ui: perceptual gray and color scales, "
            "semantic roles, radius 10, and the 0.9 press scale. Generated from "
            "juliankellydesign/julians-guide-to-interfaces; dark mode is a "
            "mechanical first pass."
        ),
        "cssVars": {
            "light": vars_for(SHADCN_LIGHT),
            "dark": vars_for(SHADCN_DARK),
        },
        "css": PRESS_CSS,
    }
    return json.dumps(item, indent=2) + "\n"

def build_shadcn_css():
    lines = [
        "/* The Julian look for shadcn/ui + Tailwind v4.",
        " * Generated by scripts/generate-adapters.py from data/foundations.json.",
        " * Do not edit by hand; regenerate instead.",
        " *",
        " * Paste below your @import \"tailwindcss\" and shadcn setup, or let",
        " * `npx shadcn add .../julian.json` inject the same values.",
        " * Dark mode is a mechanical first pass; the guide documents no",
        " * dark-mode opinion yet. */",
        "",
        ":root {",
    ]
    for k, ref in SHADCN_LIGHT.items():
        lines.append(f"  --{k}: {css_oklch(ref)};")
    lines.append(f"  --radius: {RADIUS};")
    lines += ["}", "", ".dark {"]
    for k, ref in SHADCN_DARK.items():
        lines.append(f"  --{k}: {css_oklch(ref)};")
    lines.append(f"  --radius: {RADIUS};")
    lines += [
        "}",
        "",
        "/* Press state (press scale 0.9, immediate). */",
        "@layer components {",
        "  @media (prefers-reduced-motion: no-preference) {",
        '    [data-slot="button"] {',
        "      transition: transform 0.1s ease;",
        "    }",
        '    [data-slot="button"]:active:not(:disabled) {',
        "      transform: scale(0.9);",
        "    }",
        "  }",
        "}",
        "",
    ]
    return "\n".join(lines)

# ------------------------------------------------------ UIKit colors

SEMANTIC_LIGHT = FOUNDATIONS["designSystem"]["colorContract"]["semanticColors"]

# Mechanical dark counterparts of the documented roles: same scales, roles
# mirrored with elevation preserved (background darkest). First pass.
SEMANTIC_DARK = {
    "canvas": "gray.1000",
    "surface": "gray.950",
    "surfaceSubtle": "gray.900",
    "surfaceDisabled": "gray.900",
    "surfaceInverse": "gray.0",
    "textPrimary": "gray.0",
    "textSecondary": "gray.400",
    "textPlaceholder": "gray.500",
    "textDisabled": "gray.500",
    "textInverse": "gray.1000",
    "borderSubtle": "gray.900",
    "borderDefault": "gray.700",
    "borderStrong": "gray.500",
    "borderFocus": "blue.400",
    "actionPrimary": "blue.400",
    "actionPrimaryHover": "blue.300",
    "actionSecondary": "gray.900",
    "actionSecondaryHover": "gray.800",
    "actionQuietHover": "gray.950",
    "success": "green.400",
    "successSubtle": "green.900",
    "warning": "orange.400",
    "warningSubtle": "yellow.900",
    "danger": "red.500",
    "dangerSubtle": "red.900",
}

def parse_ref(ref):
    scale, stop = ref.split(".")
    return scale, int(stop)

def swift_color(ref):
    scale, stop = ref if isinstance(ref, tuple) else parse_ref(ref)
    L, C, H = oklch(scale, stop)
    r, g, b = oklch_to_srgb(L, C, H)
    src = f"oklch({fmt(L)} {fmt(C)} {fmt(H)})" if C else f"oklch({fmt(L)} 0 0)"
    return (
        f"UIColor(red: {r:.4f}, green: {g:.4f}, blue: {b:.4f}, alpha: 1)"
        f"  // {src}"
    )

def build_swift():
    lines = [
        "// JulianColors.swift",
        "// Generated by scripts/generate-adapters.py from data/foundations.json.",
        "// Do not edit by hand; regenerate instead.",
        "//",
        "// Scales are OKLCH converted to sRGB. Semantic dark values are a",
        "// mechanical first pass; the guide documents no dark-mode opinion yet.",
        "",
        "#if canImport(UIKit)",
        "import UIKit",
        "",
        "/// The perceptual gray and color scales. Prefer `JulianColor.semantic`;",
        "/// raw scale values are the definition layer, not the component layer.",
        "public enum JulianScale {",
    ]
    for scale in ["gray", "blue", "red", "orange", "yellow", "purple", "green"]:
        lines.append(f"    // {scale.capitalize()}")
        for stop in STOPS:
            lines.append(
                f"    public static let {scale}{stop} = {swift_color((scale, stop))}"
            )
        lines.append("")
    lines += [
        "}",
        "",
        "/// Semantic color roles from the design system's color contract.",
        "/// Components consume these, never raw scale values.",
        "public enum JulianColor {",
        "    private static func dynamic(light: UIColor, dark: UIColor) -> UIColor {",
        "        UIColor { traits in",
        "            traits.userInterfaceStyle == .dark ? dark : light",
        "        }",
        "    }",
        "",
    ]
    for role, light_ref in SEMANTIC_LIGHT.items():
        dark_ref = SEMANTIC_DARK[role]
        ls, lt = parse_ref(light_ref)
        ds, dt = parse_ref(dark_ref)
        lines.append(
            f"    /// Light: {light_ref} · dark (first pass): {dark_ref}\n"
            f"    public static let {role} = dynamic(light: JulianScale.{ls}{lt}, "
            f"dark: JulianScale.{ds}{dt})"
        )
    lines += ["}", "#endif", ""]
    return "\n".join(lines)

# ------------------------------------------------------------- write

def main():
    targets = {
        ROOT / "adapters/shadcn/julian.json": build_shadcn_json(),
        ROOT / "adapters/shadcn/julian.css": build_shadcn_css(),
        ROOT / "adapters/uikit/Sources/JulianKit/JulianColors.swift": build_swift(),
    }
    for path, content in targets.items():
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content)
        print(f"wrote {path.relative_to(ROOT)} ({len(content)} bytes)")

if __name__ == "__main__":
    main()
