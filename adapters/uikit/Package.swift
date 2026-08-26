// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "JulianKit",
    platforms: [
        .iOS(.v15)
    ],
    products: [
        .library(name: "JulianKit", targets: ["JulianKit"])
    ],
    targets: [
        .target(name: "JulianKit", path: "Sources/JulianKit")
    ]
)
