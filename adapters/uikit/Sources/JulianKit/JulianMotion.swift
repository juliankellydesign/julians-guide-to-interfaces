// JulianMotion.swift
// Motion timing from the motion methods.
// Values from data/foundations.json (motion).

#if canImport(UIKit)
import UIKit

public enum JulianMotion {

    /// Transitions on web and desktop stay at or under this; touch may run
    /// slower and more fluid when direct manipulation benefits.
    public static let typicalMaximumDuration: TimeInterval = 0.2

    /// Press state: scale to 0.9, effectively immediate. Most important on
    /// touch, where there is no hover.
    public static let pressedScale: CGFloat = 0.9
    public static let pressDuration: TimeInterval = 0.1

    /// Complex-animation scaffold: a 48-frame loop at 60fps (0.8s, 75bpm),
    /// subdivided in 12-frame beats.
    public static let loopDuration: TimeInterval = 0.8
    public static let subdivisionDuration: TimeInterval = 0.2

    /// Reduced motion is a requirement, not a preference to weigh.
    public static var reduceMotionEnabled: Bool {
        UIAccessibility.isReduceMotionEnabled
    }
}
#endif
