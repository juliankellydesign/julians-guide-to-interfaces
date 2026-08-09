import SwiftUI

struct IconMethodView: View {
  @Environment(\.guideColors) private var colors
  private var sizes = [12, 16, 20, 24, 32]

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Tapering icon scale", note: "Use 20 most often, 16 and 24 sometimes, and 12 and 32 rarely.") {
          HStack(alignment: .bottom) {
            ForEach(sizes, id: \.self) { size in
              VStack(spacing: 10) {
                Image(systemName: "circle.grid.2x2.fill")
                  .font(.system(size: CGFloat(size)))
                  .foregroundStyle(size == 20 ? AnyShapeStyle(.tint) : AnyShapeStyle(colors.primaryText))
                  .frame(maxWidth: .infinity, minHeight: 40)
                Text("\(size)")
                  .font(.caption.monospacedDigit())
                  .foregroundStyle(colors.mutedText)
              }
            }
          }
        }

        MethodSection(title: "Pairing", note: "A 20-point icon always pairs with 16-point text unless punctuation needs optical tuning.") {
          Label("Consistent pairing", systemImage: "checkmark.seal.fill")
            .font(.system(size: 16, weight: .semibold))
            .imageScale(.medium)
            .foregroundStyle(.tint)
        }
      }
      .frame(maxWidth: .infinity)
      .padding()
    }
    .navigationTitle("Imagery")
  }
}
