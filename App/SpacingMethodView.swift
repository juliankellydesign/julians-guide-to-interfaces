import SwiftUI

struct SpacingMethodView: View {
  @Environment(\.guideColors) private var colors
  private var values = [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128]

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Spacing ladder", note: "The step grows with the value: 2 through 12, 4 through 32, 8 through 64, then 16.") {
          ForEach(values, id: \.self) { value in
            HStack(spacing: 12) {
              Text("\(value)")
                .font(.caption.monospacedDigit())
                .foregroundStyle(colors.mutedText)
                .frame(width: 28, alignment: .trailing)
              Capsule()
                .fill(.tint)
                .frame(width: max(1, CGFloat(value) * 1.7), height: value == 1 ? 1 : 6)
              Spacer(minLength: 0)
            }
          }
        }
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Rhythm")
  }
}
