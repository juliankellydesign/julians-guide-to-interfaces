// JulianTypography.swift
// The type scale, tracking taper, and weight roles from the typography methods.
// Values from data/foundations.json (typography).

#if canImport(UIKit)
import UIKit

public enum JulianType {

    /// Preferred base size. 16 is the alternative; 17 is the default.
    public static let baseSize: CGFloat = 17

    /// Major second.
    public static let scaleRatio: CGFloat = 1.125

    /// Rendered size for a scale step. Documented steps run -3...+6
    /// (12, 13, 15, 17, 19, 22, 24, 27, 31, 34 at base 17); the formula extends.
    public static func size(step: Int) -> CGFloat {
        CGFloat((Double(baseSize) * pow(Double(scaleRatio), Double(step))).rounded())
    }

    /// Tracking as a percentage of the rendered size: the raw difference from
    /// the base divided by 3, run through the cubic soft-limit taper (limit 6%),
    /// plus 4% for all-caps runs and any per-role manual correction.
    /// Positive below the base, negative above it, zero at the base.
    public static func trackingPercent(
        forRenderedSize size: CGFloat,
        base: CGFloat = baseSize,
        allCaps: Bool = false,
        manualAdjustment: CGFloat = 0
    ) -> CGFloat {
        let raw = (Double(base) - Double(size)) / 3
        let tapered = raw / cbrt(1 + pow(abs(raw) / 6, 3))
        return CGFloat(tapered) + (allCaps ? 4 : 0) + manualAdjustment
    }

    /// Tracking in points for the rendered size, ready for
    /// `NSAttributedString.Key.kern`.
    public static func tracking(
        forRenderedSize size: CGFloat,
        base: CGFloat = baseSize,
        allCaps: Bool = false,
        manualAdjustment: CGFloat = 0
    ) -> CGFloat {
        trackingPercent(
            forRenderedSize: size,
            base: base,
            allCaps: allCaps,
            manualAdjustment: manualAdjustment
        ) / 100 * size
    }

    /// Line height snapped to the grid: 2pt at or below 20pt type, 4pt above.
    public static func lineHeight(forRenderedSize size: CGFloat, ratio: CGFloat) -> CGFloat {
        let raw = size * ratio
        let grid: CGFloat = size > 20 ? 4 : 2
        return (raw / grid).rounded() * grid
    }

    // Weight roles. Adapt to the typeface in use; these are the system-font roles.
    public static let bodyWeight: UIFont.Weight = .regular
    public static let headerWeight: UIFont.Weight = .medium
    public static let interactiveWeight: UIFont.Weight = .semibold
    public static let buttonLabelMinimumWeight: UIFont.Weight = .medium
    public static let reversedButtonLabelMinimumWeight: UIFont.Weight = .semibold
    public static let strongAttentionWeight: UIFont.Weight = .bold

    /// System font at a scale step. Visual review is still required;
    /// the math is a tool, not the verdict.
    public static func font(step: Int, weight: UIFont.Weight = .regular) -> UIFont {
        .systemFont(ofSize: size(step: step), weight: weight)
    }
}
#endif
