import SwiftUI

struct ColorMethodView: View {
  @Environment(\.guideColors) private var colors
  @AppStorage("colorScale.family") private var family = ColorScale.blue
  @AppStorage("colorScale.hue") private var hue = ColorScale.blue.hue
  @AppStorage("colorScale.peakChroma") private var peakChroma = 0.16
  @AppStorage("colorScale.gamutClamp") private var gamutClamp = 0.95
  @AppStorage("colorScale.grayX1") private var grayX1 = 0.35
  @AppStorage("colorScale.grayY1") private var grayY1 = 0.2
  @AppStorage("colorScale.grayX2") private var grayX2 = 0.55
  @AppStorage("colorScale.grayY2") private var grayY2 = 0.6
  @AppStorage("colorScale.saturatedX1") private var saturatedX1 = 0.5
  @AppStorage("colorScale.saturatedY1") private var saturatedY1 = 0.3
  @AppStorage("colorScale.saturatedX2") private var saturatedX2 = 0.6
  @AppStorage("colorScale.saturatedY2") private var saturatedY2 = 0.5
  @AppStorage("colorScale.locked") private var paletteLocked = false

  private var stops = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000]

  private var grayCurve: CubicBezierCurve {
    CubicBezierCurve(x1: grayX1, y1: grayY1, x2: grayX2, y2: grayY2)
  }

  private var saturatedCurve: CubicBezierCurve {
    CubicBezierCurve(x1: saturatedX1, y1: saturatedY1, x2: saturatedX2, y2: saturatedY2)
  }

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Working palette", note: "Lock the current values before testing components. The lock persists when the app closes.") {
          Toggle(isOn: $paletteLocked) {
            Label(paletteLocked ? "Palette locked" : "Palette unlocked", systemImage: paletteLocked ? "lock.fill" : "lock.open")
          }
          .tint(colors.actionPrimary)
          ShareLink(item: paletteSummary) {
            Label("Share token values", systemImage: "square.and.arrow.up")
          }
        }
        MethodSection(title: "Perceptual gray", note: "Thirteen OKLCH stops run from pure white to near-black—not literal black.") {
          swatchRow(colors: stops.map { OKLCHColor(lightness: lightness(at: $0, curve: grayCurve), chroma: 0, hue: 0).color })
          labels
        }

        MethodSection(title: "Lightness curves", note: "The curve controls how quickly each scale travels from white to near-black. Both endpoints remain fixed.") {
          LightnessCurveEditor(
            title: "Gray · cubic-bezier",
            x1: $grayX1,
            y1: $grayY1,
            x2: $grayX2,
            y2: $grayY2,
            reset: resetGrayCurve
          )
          .disabled(paletteLocked)

          Divider()

          LightnessCurveEditor(
            title: "Saturated · cubic-bezier",
            x1: $saturatedX1,
            y1: $saturatedY1,
            x2: $saturatedX2,
            y2: $saturatedY2,
            reset: resetSaturatedCurve
          )
          .disabled(paletteLocked)
        }

        MethodSection(title: "Color families", note: "All six families respond to the saturated curve above while sharing hues, stops, and endpoints.") {
          ForEach(ColorScale.allCases) { scale in
            VStack(alignment: .leading, spacing: 6) {
              Text(scale.title)
                .font(.caption.weight(.medium))
                .foregroundStyle(colors.mutedText)
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
        .disabled(paletteLocked)
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Color")
  }

  private var paletteSummary: String {
    "Action: oklch(0.634 \(peakChroma.formatted(.number.precision(.fractionLength(2)))) \(Int(hue))); gray curve: cubic-bezier(\(grayX1), \(grayY1), \(grayX2), \(grayY2)); saturated curve: cubic-bezier(\(saturatedX1), \(saturatedY1), \(saturatedX2), \(saturatedY2)); gamut clamp: \(gamutClamp)"
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
    .foregroundStyle(colors.mutedText)
  }

  private func swatchRow(colors swatches: [Color]) -> some View {
    HStack(spacing: 2) {
      ForEach(Array(swatches.enumerated()), id: \.offset) { _, color in
        Rectangle().fill(color)
      }
    }
    .frame(height: 44)
    .clipShape(RoundedRectangle(cornerRadius: 10))
    .overlay { RoundedRectangle(cornerRadius: 10).stroke(colors.border) }
  }

  private func colors(hue: Double, peakChroma: Double, gamutClamp: Double) -> [Color] {
    stops.map { stop in
      let lightness = lightness(at: stop, curve: saturatedCurve)
      let t = Double(stop) / 1000
      let requestedChroma = peakChroma * 4 * t * (1 - t)
      let maximumChroma = OKLCHColor.maximumSRGBChroma(lightness: lightness, hue: hue)
      let chroma = min(requestedChroma, gamutClamp * maximumChroma)
      return OKLCHColor(lightness: lightness, chroma: chroma, hue: hue).color
    }
  }

  private func lightness(at stop: Int, curve: CubicBezierCurve) -> Double {
    1 - 0.95 * curve.value(atX: Double(stop) / 1000)
  }

  private func resetGrayCurve() {
    grayX1 = 0.35
    grayY1 = 0.2
    grayX2 = 0.55
    grayY2 = 0.6
  }

  private func resetSaturatedCurve() {
    saturatedX1 = 0.5
    saturatedY1 = 0.3
    saturatedX2 = 0.6
    saturatedY2 = 0.5
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
