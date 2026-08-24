import SwiftUI

struct GuideColors {
  var curve = CubicBezierCurve(x1: 0.35, y1: 0.2, x2: 0.55, y2: 0.6)
  var actionHue = 250.0
  var actionChroma = 0.16

  // Semantic roles are the public color API. Components never request a scale stop.
  var canvas: Color { gray(50) }
  var surface: Color { gray(0) }
  var surfaceSubtle: Color { gray(50) }
  var surfaceDisabled: Color { gray(100) }
  var surfaceInverse: Color { gray(1000) }
  var textPrimary: Color { gray(1000) }
  var textSecondary: Color { gray(600) }
  var textPlaceholder: Color { gray(500) }
  var textInverse: Color { gray(0) }
  var borderSubtle: Color { gray(100) }
  var borderDefault: Color { gray(300) }
  var borderStrong: Color { gray(500) }
  var actionPrimary: Color { OKLCHColor(lightness: 0.634, chroma: actionChroma, hue: actionHue).color }
  var actionPrimaryPressed: Color { OKLCHColor(lightness: 0.523, chroma: actionChroma, hue: actionHue).color }
  var actionSecondary: Color { gray(100) }
  var danger: Color { OKLCHColor(lightness: 0.52, chroma: 0.18, hue: 28).color }
  var dangerSubtle: Color { OKLCHColor(lightness: 0.96, chroma: 0.04, hue: 28).color }

  // Compatibility names for method demonstrations; new component code uses roles above.
  var pageBackground: Color { surface }
  var inverseText: Color { textInverse }
  var subtlePanel: Color { surfaceSubtle }
  var border: Color { borderSubtle }
  var strongBorder: Color { borderDefault }
  var mutedText: Color { textSecondary }
  var primaryText: Color { textPrimary }
  var darkSurface: Color { surfaceInverse }

  func gray(_ stop: Int) -> Color {
    let progress = curve.value(atX: Double(stop) / 1000)
    let lightness = 1 - 0.95 * progress
    return OKLCHColor(lightness: lightness, chroma: 0, hue: 0).color
  }
}

extension EnvironmentValues {
  @Entry var guideColors = GuideColors()
}
