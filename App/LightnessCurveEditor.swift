import SwiftUI

struct LightnessCurveEditor: View {
  var title: String
  @Binding var x1: Double
  @Binding var y1: Double
  @Binding var x2: Double
  @Binding var y2: Double
  var reset: () -> Void

  private var curve: CubicBezierCurve {
    CubicBezierCurve(x1: x1, y1: y1, x2: x2, y2: y2)
  }

  var body: some View {
    VStack(alignment: .leading, spacing: 14) {
      HStack {
        Text(title)
          .font(.subheadline.weight(.semibold))
        Spacer()
        Button("Reset", systemImage: "arrow.counterclockwise", action: reset)
          .labelStyle(.iconOnly)
          .accessibilityLabel("Reset \(title.lowercased())")
      }

      curvePreview

      controlPoint(title: "First handle", x: $x1, y: $y1)
      controlPoint(title: "Second handle", x: $x2, y: $y2)
    }
  }

  private var curvePreview: some View {
    Canvas { context, size in
      let frame = CGRect(origin: .zero, size: size).insetBy(dx: 1, dy: 1)
      var grid = Path()
      grid.move(to: CGPoint(x: frame.minX, y: frame.maxY))
      grid.addLine(to: CGPoint(x: frame.maxX, y: frame.minY))
      context.stroke(grid, with: .color(.secondary.opacity(0.2)), style: StrokeStyle(lineWidth: 1, dash: [4]))

      var path = Path()
      for index in 0...80 {
        let x = Double(index) / 80
        let point = CGPoint(
          x: frame.minX + frame.width * x,
          y: frame.maxY - frame.height * curve.value(atX: x)
        )
        index == 0 ? path.move(to: point) : path.addLine(to: point)
      }
      context.stroke(path, with: .color(Color.accentColor), style: StrokeStyle(lineWidth: 3, lineCap: .round))
    }
    .frame(height: 120)
    .padding(12)
    .background(.background, in: RoundedRectangle(cornerRadius: 12))
    .accessibilityElement(children: .ignore)
    .accessibilityLabel("\(title) preview")
    .accessibilityValue("Control points \(x1.formatted()), \(y1.formatted()), \(x2.formatted()), \(y2.formatted())")
  }

  private func controlPoint(title: String, x: Binding<Double>, y: Binding<Double>) -> some View {
    VStack(alignment: .leading, spacing: 8) {
      Text(title)
        .font(.caption.weight(.medium))
        .foregroundStyle(.secondary)
      coordinateSlider(label: "X", value: x)
      coordinateSlider(label: "Y", value: y)
    }
  }

  private func coordinateSlider(label: String, value: Binding<Double>) -> some View {
    HStack {
      Text(label)
        .font(.caption.monospaced())
        .frame(width: 16)
      Slider(value: value, in: 0...1, step: 0.01) {
        Text("\(label) coordinate")
      } minimumValueLabel: {
        Text("0")
      } maximumValueLabel: {
        Text("1")
      }
      Text(value.wrappedValue, format: .number.precision(.fractionLength(2)))
        .font(.caption.monospacedDigit())
        .frame(width: 34, alignment: .trailing)
    }
  }
}
