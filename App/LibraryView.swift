import SwiftUI

struct LibraryView: View {
  private var columns = [GridItem(.adaptive(minimum: 156), spacing: 12)]

  var body: some View {
    NavigationStack {
      ScrollView {
        VStack(alignment: .leading, spacing: 24) {
          VStack(alignment: .leading, spacing: 8) {
            Text("A working playground for the systems behind the guide.")
              .font(.title2.weight(.medium))
            Text("Values are scaffolds. Change them, compare the result, and judge what the interface communicates.")
              .foregroundStyle(.secondary)
          }

          LazyVGrid(columns: columns, spacing: 12) {
            ForEach(MethodCategory.allCases) { category in
              NavigationLink {
                category.destination
              } label: {
                MethodCategoryCard(category: category)
              }
              .buttonStyle(.plain)
            }
          }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding()
      }
      .navigationTitle("Methods")
    }
  }
}
