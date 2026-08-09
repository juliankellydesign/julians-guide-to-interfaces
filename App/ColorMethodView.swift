import SwiftUI

struct ColorMethodView: View {
  private var stops = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000]
  private var lightness = [1.0, 0.97098, 0.93812, 0.86065, 0.76845, 0.66472, 0.55453, 0.4433, 0.33532, 0.23316, 0.13798, 0.0931, 0.05]
  private var hues = [250.0, 28, 65, 100, 305, 145]

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Perceptual gray", note: "Thirteen OKLCH stops run from pure white to near-black—not literal black.") {
          swatchRow(colors: lightness.map { Color(.displayP3, white: $0, opacity: 1) })
          labels
        }

        MethodSection(title: "Color families", note: "Six constant-hue scales share stops and endpoints; their middle tones use a lighter curve.") {
          ForEach(hues, id: \.self) { hue in
            swatchRow(colors: stops.map { color(stop: $0, hue: hue) })
          }
        }
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Color")
  }

  private var labels: some View {
    HStack {
      Text("0")
      Spacer()
      Text("500")
      Spacer()
      Text("1000")
    }
    .font(.caption.monospacedDigit())
    .foregroundStyle(.secondary)
  }

  private func swatchRow(colors: [Color]) -> some View {
    HStack(spacing: 2) {
      ForEach(Array(colors.enumerated()), id: \.offset) { _, color in
        Rectangle().fill(color)
      }
    }
    .frame(height: 44)
    .clipShape(RoundedRectangle(cornerRadius: 10))
    .overlay { RoundedRectangle(cornerRadius: 10).stroke(.primary.opacity(0.08)) }
  }

  private func color(stop: Int, hue: Double) -> Color {
    let t = Double(stop) / 1000
    let brightness = 1 - (0.95 * t)
    let saturation = min(1, 4 * t * (1 - t) * 0.9)
    return Color(hue: hue / 360, saturation: saturation, brightness: brightness)
  }
}
