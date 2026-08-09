import SwiftUI

struct MotionMethodView: View {
  @Environment(\.guideColors) private var colors
  @Environment(\.accessibilityReduceMotion) private var reduceMotion
  @State private var phase = false
  @State private var swing = 0.0

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "48-frame rhythm", note: "At 60 fps, 48 frames make a 0.8-second loop with four 12-frame subdivisions.") {
          TimelineView(.animation(paused: reduceMotion)) { context in
            let progress = context.date.timeIntervalSinceReferenceDate.truncatingRemainder(dividingBy: 0.8) / 0.8
            GeometryReader { proxy in
              Circle()
                .fill(.tint)
                .frame(width: 24, height: 24)
                .offset(x: (proxy.size.width - 24) * progress)
            }
            .frame(height: 24)
          }
          HStack {
            ForEach([0, 12, 24, 36, 48], id: \.self) { frame in
              Text("\(frame)")
              if frame != 48 { Spacer() }
            }
          }
          .font(.caption.monospacedDigit())
          .foregroundStyle(colors.mutedText)
        }

        MethodSection(title: "Swing", note: "Move internal beats by a frame or two while preserving the loop boundary.") {
          Slider(value: $swing, in: -2...2, step: 1) {
            Text("Frame offset")
          } minimumValueLabel: {
            Text("−2")
          } maximumValueLabel: {
            Text("+2")
          }
          LabeledContent("Internal offset", value: "\(Int(swing)) frames")
        }
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Motion")
  }
}
