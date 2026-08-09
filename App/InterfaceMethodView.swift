import SwiftUI

struct InterfaceMethodView: View {
  @State private var selectedSize = ButtonSize.medium
  @State private var outerRadius = 32.0
  @State private var inset = 20.0

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Finite button system", note: "Five sizes and three levels make excess variants visible.") {
          Picker("Button size", selection: $selectedSize) {
            ForEach(ButtonSize.allCases) { size in Text(size.title).tag(size) }
          }
          .pickerStyle(.segmented)

          VStack(spacing: 10) {
            methodButton("Primary action", style: .primary)
            methodButton("Secondary action", style: .secondary)
            methodButton("Tertiary action", style: .tertiary)
          }
          .frame(maxWidth: .infinity)
        }

        MethodSection(title: "Nested radii", note: "Subtract the inset from the outer radius, then judge the concentric relationship optically.") {
          VStack {
            RoundedRectangle(cornerRadius: outerRadius)
              .fill(.tint.opacity(0.15))
              .frame(height: 180)
              .overlay {
                RoundedRectangle(cornerRadius: max(0, outerRadius - inset))
                  .fill(.tint)
                  .padding(inset)
              }
          }
          LabeledContent("Outer radius", value: "\(Int(outerRadius))")
          Slider(value: $outerRadius, in: 8...40, step: 2) {
            Text("Outer radius")
          } minimumValueLabel: {
            Image(systemName: "square")
          } maximumValueLabel: {
            Image(systemName: "app")
          }
          LabeledContent("Inset", value: "\(Int(inset))")
          Slider(value: $inset, in: 4...24, step: 2) {
            Text("Inset")
          } minimumValueLabel: {
            Image(systemName: "arrow.down.right.and.arrow.up.left")
          } maximumValueLabel: {
            Image(systemName: "arrow.up.left.and.arrow.down.right")
          }
        }
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Interface")
  }

  private func methodButton(_ title: String, style: MethodButtonStyle) -> some View {
    Button {} label: {
      Text(title)
        .font(.system(size: selectedSize.labelSize, weight: .semibold))
        .foregroundStyle(style.foregroundStyle)
        .frame(maxWidth: .infinity)
        .frame(height: selectedSize.height)
        .background(style.backgroundStyle, in: RoundedRectangle(cornerRadius: selectedSize.radius))
        .overlay {
          if style == .tertiary {
            RoundedRectangle(cornerRadius: selectedSize.radius)
              .stroke(.primary.opacity(0.18))
          }
        }
    }
    .buttonStyle(.plain)
  }
}

private enum ButtonSize: String, CaseIterable, Identifiable {
  case extraSmall, small, medium, large, extraLarge

  var id: Self { self }
  var title: String { ["XS", "S", "M", "L", "XL"][Self.allCases.firstIndex(of: self)!] }
  var height: CGFloat {
    switch self {
    case .extraSmall: 24
    case .small: 32
    case .medium: 40
    case .large: 48
    case .extraLarge: 56
    }
  }

  var labelSize: CGFloat { height < 40 ? 13 : height < 56 ? 15 : 17 }
  var radius: CGFloat { min(14, height / 3) }
}

private enum MethodButtonStyle {
  case primary, secondary, tertiary

  var foregroundStyle: AnyShapeStyle {
    switch self {
    case .primary: AnyShapeStyle(.white)
    case .secondary, .tertiary: AnyShapeStyle(.primary)
    }
  }

  var backgroundStyle: AnyShapeStyle {
    switch self {
    case .primary: AnyShapeStyle(.tint)
    case .secondary: AnyShapeStyle(.primary.opacity(0.1))
    case .tertiary: AnyShapeStyle(.clear)
    }
  }
}
