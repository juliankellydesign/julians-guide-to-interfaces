import SwiftUI

struct MethodSection<Content: View>: View {
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
          .foregroundStyle(.secondary)
      }
      content
    }
    .frame(maxWidth: .infinity, alignment: .leading)
    .padding(16)
    .background(.background.secondary, in: RoundedRectangle(cornerRadius: 20))
  }
}
