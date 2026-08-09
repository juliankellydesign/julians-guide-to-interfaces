import SwiftUI

struct ColorMethodView: View {
  @AppStorage("colorScale.family") private var family = ColorScale.blue
  @AppStorage("colorScale.hue") private var hue = ColorScale.blue.hue
  @AppStorage("colorScale.peakChroma") private var peakChroma = 0.16
  @AppStorage("colorScale.gamutClamp") private var gamutClamp = 0.95

  private var stops = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000]
  private var grayLightness = [1.0, 0.97098, 0.93812, 0.86065, 0.76845, 0.66472, 0.55453, 0.4433, 0.33532, 0.23316, 0.13798, 0.0931, 0.05]
  private var colorLightness = [1.0, 0.97103, 0.94102, 0.87712, 0.80638, 0.72628, 0.63419, 0.52906, 0.41332, 0.29211, 0.17012, 0.10973, 0.05]

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Perceptual gray", note: "Thirteen OKLCH stops run from pure white to near-black—not literal black.") {
          swatchRow(colors: grayLightness.map { OKLCHColor(lightness: $0, chroma: 0, hue: 0).color })
          labels
        }

        MethodSection(title: "Documented scales", note: "Six OKLCH families use the guide’s hues, shared lightness curve, 0.16 chroma arch, and 95% sRGB clamp.") {
          ForEach(ColorScale.allCases) { scale in
            VStack(alignment: .leading, spacing: 6) {
              Text(scale.title)
                .font(.caption.weight(.medium))
                .foregroundStyle(.secondary)
              swatchRow(colors: colors(hue: scale.hue, peakChroma: 0.16, gamutClamp: 0.95))
            }
          }
        }

        MethodSection(title: "Scale lab", note: "Change one input at a time, then compare the result with the documented family above.") {
          Picker("Starting family", selection: $family) {
            ForEach(ColorScale.allCases) { scale in
              Text(scale.title).tag(scale)
            }
          }
          .pickerStyle(.menu)
          .onChange(of: family) { _, newValue in
            hue = newValue.hue
          }

          swatchRow(colors: colors(hue: hue, peakChroma: peakChroma, gamutClamp: gamutClamp))
          labels

          valueSlider(title: "Hue", value: $hue, range: 0...360, step: 1, valueText: "\(Int(hue))°")
          valueSlider(title: "Peak chroma", value: $peakChroma, range: 0...0.3, step: 0.01, valueText: peakChroma.formatted(.number.precision(.fractionLength(2))))
          valueSlider(title: "Gamut clamp", value: $gamutClamp, range: 0.5...1, step: 0.01, valueText: gamutClamp.formatted(.percent.precision(.fractionLength(0))))

          Button("Reset to \(family.title)", systemImage: "arrow.counterclockwise") {
            hue = family.hue
            peakChroma = 0.16
            gamutClamp = 0.95
          }
          .buttonStyle(.bordered)
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

  private func colors(hue: Double, peakChroma: Double, gamutClamp: Double) -> [Color] {
    zip(stops, colorLightness).map { stop, lightness in
      let t = Double(stop) / 1000
      let requestedChroma = peakChroma * 4 * t * (1 - t)
      let maximumChroma = OKLCHColor.maximumSRGBChroma(lightness: lightness, hue: hue)
      let chroma = min(requestedChroma, gamutClamp * maximumChroma)
      return OKLCHColor(lightness: lightness, chroma: chroma, hue: hue).color
    }
  }

  private func valueSlider(
    title: String,
    value: Binding<Double>,
    range: ClosedRange<Double>,
    step: Double,
    valueText: String
  ) -> some View {
    VStack(spacing: 6) {
      LabeledContent(title, value: valueText)
      Slider(value: value, in: range, step: step) {
        Text(title)
      } minimumValueLabel: {
        Image(systemName: "minus")
      } maximumValueLabel: {
        Image(systemName: "plus")
      }
    }
  }
}
