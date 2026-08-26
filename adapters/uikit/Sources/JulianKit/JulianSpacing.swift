// JulianSpacing.swift
// The spacing ladder and radius scale from the layout and interface methods.
// Values from data/foundations.json (layout.spacingLadder, interface.cornerRadii).

#if canImport(UIKit)
import UIKit

public enum JulianSpacing {

    /// 1pt is the hairline: borders, dividers, and optical nudges,
    /// not layout spacing.
    public static let hairline: CGFloat = 1

    /// The spacing ladder. Steps of 2 through 12, 4 through 32, 8 through 64,
    /// 16 through 128; keep doubling the step past 128.
    public static let ladder: [CGFloat] = [
        2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128
    ]

    /// Snap an arbitrary value to the nearest ladder step.
    public static func nearest(_ value: CGFloat) -> CGFloat {
        ladder.min(by: { abs($0 - value) < abs($1 - value) }) ?? value
    }

    /// Modal interior padding, held consistent across modals.
    public static let modalPadding: CGFloat = 24
}

public enum JulianRadius {

    /// The radius scale. Steps of 2 through 12, 4 through 32; keep doubling past 32.
    /// "Full" is any arbitrarily large radius—half the smaller dimension in practice.
    public static let ladder: [CGFloat] = [0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32]

    /// Control radius: one value across all button sizes so controls share keylines.
    public static let control: CGFloat = 10

    /// Nested corners: inner radius equals outer radius minus the inset.
    /// Nested inner radii may leave the scale; optical adjustment is allowed.
    public static func nested(outer: CGFloat, inset: CGFloat) -> CGFloat {
        max(0, outer - inset)
    }
}
#endif
