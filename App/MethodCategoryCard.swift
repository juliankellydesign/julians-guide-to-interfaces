import SwiftUI

struct MethodCategoryCard: View {
  @Environment(\.guideColors) private var colors
  var category: MethodCategory

  var body: some View {
    VStack(alignment: .leading, spacing: 16) {
      Image(systemName: category.symbol)
        .font(.title2)
        .foregroundStyle(.tint)
        .frame(width: 44, height: 44)
        .background(.tint.opacity(0.12), in: RoundedRectangle(cornerRadius: 12))

      VStack(alignment: .leading, spacing: 5) {
        Text(category.title)
          .font(.headline)
        Text(category.summary)
          .font(.subheadline)
          .foregroundStyle(colors.mutedText)
          .fixedSize(horizontal: false, vertical: true)
      }
    }
    .frame(maxWidth: .infinity, minHeight: 154, alignment: .topLeading)
    .padding(16)
    .background(colors.subtlePanel, in: RoundedRectangle(cornerRadius: 20))
    .contentShape(RoundedRectangle(cornerRadius: 20))
  }
}
