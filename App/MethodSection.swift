import SwiftUI

struct MethodSection<Content: View>: View {
  @Environment(\.guideColors) private var colors
  var title: String
  var note: String
  @ViewBuilder var content: Content

  var body: some View {
    VStack(alignment: .leading, spacing: 16) {
      VStack(alignment: .leading, spacing: 4) {
        Text(title)
          .font(.headline)
        Text(note)
          .font(.subheadline)
          .foregroundStyle(colors.mutedText)
      }
      content
    }
    .frame(maxWidth: .infinity, alignment: .leading)
    .padding(16)
    .background(colors.subtlePanel, in: RoundedRectangle(cornerRadius: 20))
  }
}
