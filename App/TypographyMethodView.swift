import SwiftUI

struct TypographyMethodView: View {
  @Environment(\.guideColors) private var colors
  @State private var baseSize = 17.0
  @State private var isUppercase = false

  private var steps: [Int] { Array(-3...6) }

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Major-second scale", note: "Start at 16 or 17, multiply by 1.125, then round before assigning roles.") {
          Slider(value: $baseSize, in: 16...17, step: 1) {
            Text("Base type size")
          } minimumValueLabel: {
            Text("16")
          } maximumValueLabel: {
            Text("17")
          }
          Text("Base \(Int(baseSize)) pt")
            .font(.caption.monospacedDigit())
            .foregroundStyle(colors.mutedText)

          ForEach(steps.reversed(), id: \.self) { step in
            let size = renderedSize(step)
            HStack(alignment: .firstTextBaseline) {
              Text(isUppercase ? "Purpose".uppercased() : "Purpose")
                .font(.system(size: size, weight: weight(for: step)))
                .tracking(tracking(for: size) * size / 100)
                .lineLimit(1)
                .minimumScaleFactor(0.7)
              Spacer()
              Text("\(Int(size))")
                .font(.caption.monospacedDigit())
                .foregroundStyle(colors.mutedText)
            }
          }
        }

        MethodSection(title: "Tracking curve", note: "Smaller type opens, larger type tightens, and all caps adds four percentage points.") {
          Toggle("Use all caps", isOn: $isUppercase)
          HStack {
            Text("Calculated at base")
            Spacer()
            Text(tracking(for: baseSize), format: .number.precision(.fractionLength(2)))
              .monospacedDigit()
            Text("%")
              .foregroundStyle(colors.mutedText)
          }
        }
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Typography")
  }

  private func renderedSize(_ step: Int) -> Double {
    round(baseSize * pow(1.125, Double(step)))
  }

  private func tracking(for size: Double) -> Double {
    let raw = (baseSize - size) / 3
    let tapered = raw / pow(1 + pow(abs(raw) / 6, 3), 1 / 3)
    return tapered + (isUppercase ? 4 : 0)
  }

  private func weight(for step: Int) -> Font.Weight {
    step >= 5 ? .bold : step >= 1 ? .medium : .regular
  }
}
