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
            Button("Primary action") {}
              .buttonStyle(.borderedProminent)
            Button("Secondary action") {}
              .buttonStyle(.bordered)
            Button("Tertiary action") {}
              .buttonStyle(.plain)
          }
          .fontWeight(.semibold)
          .controlSize(selectedSize.controlSize)
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
}

private enum ButtonSize: String, CaseIterable, Identifiable {
  case extraSmall, small, medium, large, extraLarge

  var id: Self { self }
  var title: String { ["XS", "S", "M", "L", "XL"][Self.allCases.firstIndex(of: self)!] }
  var controlSize: ControlSize {
    switch self {
    case .extraSmall: .mini
    case .small: .small
    case .medium: .regular
    case .large, .extraLarge: .extraLarge
    }
  }
}
