import SwiftUI

enum MethodCategory: String, CaseIterable, Identifiable {
  case typography
  case color
  case rhythm
  case interface
  case imagery
  case motion

  var id: Self { self }

  var title: String {
    switch self {
    case .typography: "Typography"
    case .color: "Color"
    case .rhythm: "Rhythm"
    case .interface: "Interface"
    case .imagery: "Imagery"
    case .motion: "Motion"
    }
  }

  var summary: String {
    switch self {
    case .typography: "Scale, tracking, responsive type, and weight roles"
    case .color: "Perceptual gray and color scales"
    case .rhythm: "Spacing values and their changing intervals"
    case .interface: "Buttons, controls, radii, and nested geometry"
    case .imagery: "A tapering icon scale and consistent text pairings"
    case .motion: "Platform timing, rhythm, and swing"
    }
  }

  var symbol: String {
    switch self {
    case .typography: "textformat.size"
    case .color: "swatchpalette.fill"
    case .rhythm: "ruler.fill"
    case .interface: "switch.2"
    case .imagery: "square.grid.3x3.fill"
    case .motion: "waveform.path"
    }
  }

  @ViewBuilder
  var destination: some View {
    switch self {
    case .typography: TypographyMethodView()
    case .color: ColorMethodView()
    case .rhythm: SpacingMethodView()
    case .interface: InterfaceMethodView()
    case .imagery: IconMethodView()
    case .motion: MotionMethodView()
    }
  }
}
