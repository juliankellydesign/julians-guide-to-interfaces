import SwiftUI

struct OKLCHColor {
  var lightness: Double
  var chroma: Double
  var hue: Double

  var color: Color {
    let rgb = linearRGB
    return Color(
      .sRGB,
      red: gammaEncode(rgb.red).clamped,
      green: gammaEncode(rgb.green).clamped,
      blue: gammaEncode(rgb.blue).clamped,
      opacity: 1
    )
  }

  var isInSRGBGamut: Bool {
    let rgb = linearRGB
    return (0...1).contains(rgb.red)
      && (0...1).contains(rgb.green)
      && (0...1).contains(rgb.blue)
  }

  static func maximumSRGBChroma(lightness: Double, hue: Double) -> Double {
    var lower = 0.0
    var upper = 0.4
    for _ in 0..<16 {
      let candidate = (lower + upper) / 2
      if OKLCHColor(lightness: lightness, chroma: candidate, hue: hue).isInSRGBGamut {
        lower = candidate
      } else {
        upper = candidate
      }
    }
    return lower
  }

  private var linearRGB: (red: Double, green: Double, blue: Double) {
    let radians = hue * .pi / 180
    let a = chroma * cos(radians)
    let b = chroma * sin(radians)
    let l = pow(lightness + 0.3963377774 * a + 0.2158037573 * b, 3)
    let m = pow(lightness - 0.1055613458 * a - 0.0638541728 * b, 3)
    let s = pow(lightness - 0.0894841775 * a - 1.291485548 * b, 3)

    return (
      4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
      -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
      -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s
    )
  }

  private func gammaEncode(_ component: Double) -> Double {
    component <= 0.0031308
      ? 12.92 * component
      : 1.055 * pow(component, 1 / 2.4) - 0.055
  }
}

private extension Double {
  var clamped: Double { min(1, max(0, self)) }
}
