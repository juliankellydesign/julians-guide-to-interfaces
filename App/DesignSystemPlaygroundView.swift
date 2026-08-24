import SwiftUI

struct DesignSystemPlaygroundView: View {
  @Environment(\.guideColors) private var colors
  @AppStorage("colorScale.locked") private var paletteLocked = false
  @State private var name = "Interface guide"
  @State private var notes = ""
  @State private var notifications = true
  @State private var density = "Comfortable"
  @State private var showModal = false

  var body: some View {
    ScrollView {
      VStack(spacing: 16) {
        MethodSection(title: "Semantic palette", note: "Every sample below uses a named role. Lock color values in Color, then return here to judge the system as a whole.") {
          HStack {
            Label(paletteLocked ? "Locked" : "Live", systemImage: paletteLocked ? "lock.fill" : "slider.horizontal.3")
              .foregroundStyle(paletteLocked ? colors.actionPrimary : colors.textSecondary)
            Spacer()
            NavigationLink("Edit colors") { ColorMethodView() }
          }
          HStack(spacing: 4) {
            roleSwatch("Canvas", colors.canvas)
            roleSwatch("Surface", colors.surface)
            roleSwatch("Action", colors.actionPrimary)
            roleSwatch("Danger", colors.danger)
          }
        }

        MethodSection(title: "Actions", note: "Touch targets stay at least 44 points; hierarchy and semantic colors match the desktop reference.") {
          Button("Primary action") {}.buttonStyle(.borderedProminent).controlSize(.large)
          Button("Secondary action") {}.buttonStyle(.bordered).controlSize(.large)
          Button("Disabled action") {}.buttonStyle(.bordered).disabled(true)
        }

        MethodSection(title: "Fields", note: "Labels, supporting text, choices, and errors can be tested with the keyboard on a phone.") {
          TextField("Project name", text: $name)
            .textFieldStyle(.roundedBorder)
          Text("Visible to everyone in the workspace.").font(.caption).foregroundStyle(colors.textSecondary)
          TextField("Description", text: $notes, axis: .vertical)
            .lineLimit(3...6).textFieldStyle(.roundedBorder)
          Toggle("Weekly summary", isOn: $notifications)
          Picker("Density", selection: $density) {
            Text("Comfortable").tag("Comfortable")
            Text("Compact").tag("Compact")
          }.pickerStyle(.segmented)
        }

        MethodSection(title: "Surfaces and feedback", note: "Cards group related content; status is communicated with words as well as color.") {
          VStack(alignment: .leading, spacing: 8) {
            Text("Ready").font(.caption.weight(.semibold)).foregroundStyle(colors.actionPrimary)
            Text("Color foundations").font(.headline)
            Text("Thirteen perceptual stops mapped into component roles.").foregroundStyle(colors.textSecondary)
          }
          .padding(16).background(colors.surface, in: RoundedRectangle(cornerRadius: 16))
          .overlay { RoundedRectangle(cornerRadius: 16).stroke(colors.borderSubtle) }

          Label("Couldn’t save. Check the project name and try again.", systemImage: "exclamationmark.triangle.fill")
            .font(.subheadline).foregroundStyle(colors.danger).padding(16)
            .background(colors.dangerSubtle, in: RoundedRectangle(cornerRadius: 12))
          Button("Test modal") { showModal = true }.buttonStyle(.bordered)
        }
      }
      .padding()
    }
    .background(colors.canvas)
    .navigationTitle("Components")
    .alert("Clear this draft?", isPresented: $showModal) {
      Button("Keep draft", role: .cancel) {}
      Button("Clear it", role: .destructive) { notes = "" }
    } message: { Text("The reply you started will be discarded.") }
  }

  private func roleSwatch(_ name: String, _ color: Color) -> some View {
    VStack(spacing: 6) {
      RoundedRectangle(cornerRadius: 8).fill(color).frame(height: 44)
        .overlay { RoundedRectangle(cornerRadius: 8).stroke(colors.borderSubtle) }
      Text(name).font(.caption2).foregroundStyle(colors.textSecondary)
    }.frame(maxWidth: .infinity)
  }
}
