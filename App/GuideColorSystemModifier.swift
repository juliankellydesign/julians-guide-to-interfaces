import SwiftUI

struct GuideColorSystemModifier: ViewModifier {
  @AppStorage("colorScale.grayX1") private var grayX1 = 0.35
  @AppStorage("colorScale.grayY1") private var grayY1 = 0.2
  @AppStorage("colorScale.grayX2") private var grayX2 = 0.55
  @AppStorage("colorScale.grayY2") private var grayY2 = 0.6

  private var colors: GuideColors {
    GuideColors(curve: CubicBezierCurve(x1: grayX1, y1: grayY1, x2: grayX2, y2: grayY2))
  }

  func body(content: Content) -> some View {
    content
      .environment(\.guideColors, colors)
      .foregroundStyle(colors.primaryText)
      .background(colors.pageBackground.ignoresSafeArea())
      .toolbarBackground(colors.pageBackground, for: .navigationBar)
      .preferredColorScheme(.light)
  }
}

extension View {
  func guideColorSystem() -> some View {
    modifier(GuideColorSystemModifier())
  }
}
