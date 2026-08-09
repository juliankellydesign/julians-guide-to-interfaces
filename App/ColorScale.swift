import SwiftUI

enum ColorScale: String, CaseIterable, Identifiable {
  case blue, red, orange, yellow, purple, green

  var id: Self { self }
  var title: String { rawValue.capitalized }

  var hue: Double {
    switch self {
    case .blue: 250
    case .red: 28
    case .orange: 65
    case .yellow: 100
    case .purple: 305
    case .green: 145
    }
  }
}
