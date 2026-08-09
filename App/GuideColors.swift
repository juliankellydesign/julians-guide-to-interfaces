import SwiftUI

struct GuideColors {
  var curve = CubicBezierCurve(x1: 0.35, y1: 0.2, x2: 0.55, y2: 0.6)

  var pageBackground: Color { gray(0) }
  var inverseText: Color { gray(0) }
  var subtlePanel: Color { gray(50) }
  var border: Color { gray(100) }
  var strongBorder: Color { gray(300) }
  var mutedText: Color { gray(600) }
  var primaryText: Color { gray(1000) }
  var darkSurface: Color { gray(1000) }

  func gray(_ stop: Int) -> Color {
    let progress = curve.value(atX: Double(stop) / 1000)
    let lightness = 1 - 0.95 * progress
    return OKLCHColor(lightness: lightness, chroma: 0, hue: 0).color
  }
}

extension EnvironmentValues {
  @Entry var guideColors = GuideColors()
}
