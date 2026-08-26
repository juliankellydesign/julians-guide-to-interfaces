// JulianButton.swift
// The button spec (guide/design-system/button.md) as a UIButton:
// five named sizes, three styles, radius 10, the 0.9 press scale,
// and 40% opacity when disabled.

#if canImport(UIKit)
import UIKit

public final class JulianButton: UIButton {

    /// Five heights, referred to by name. Values may be nudged per screen;
    /// a nudge changes a value, never adds a role.
    public enum Size {
        case xs, s, m, l, xl

        public var height: CGFloat {
            switch self {
            case .xs: return 24
            case .s: return 32
            case .m: return 40
            case .l: return 48
            case .xl: return 56
            }
        }

        public var paddingX: CGFloat {
            switch self {
            case .xs: return 8
            case .s: return 12
            case .m: return 16
            case .l: return 20
            case .xl: return 24
            }
        }

        public var labelSize: CGFloat {
            switch self {
            case .xs, .s: return 14
            case .m, .l: return 16
            case .xl: return 17
            }
        }

        /// The paired icon size, if the button carries one.
        public var iconSize: CGFloat {
            switch self {
            case .xs, .s: return 16
            case .m, .l, .xl: return 20
            }
        }
    }

    /// Three styles, one primary per surface. Needing a fourth means too many.
    public enum Style {
        /// Highlight fill, inverse label at semibold.
        case primary
        /// Gray-100 fill, gray-900 label at medium.
        case secondary
        /// No fill: a 1px outline or text only, gray-900 label at medium.
        case tertiary
    }

    public var size: Size {
        didSet { apply() }
    }

    public var style: Style {
        didSet { apply() }
    }

    /// Tertiary is outlined or text only; setting this false drops the outline.
    public var tertiaryShowsOutline = true {
        didSet { apply() }
    }

    /// M is the spec default; on touch the default control height is 48, so L
    /// is the default here. XS and S sit below the 44pt touch target minimum—
    /// keep their hit areas honest if you use them.
    public init(style: Style = .primary, size: Size = .l) {
        self.style = style
        self.size = size
        super.init(frame: .zero)
        apply()
    }

    public required init?(coder: NSCoder) {
        self.style = .primary
        self.size = .l
        super.init(coder: coder)
        apply()
    }

    public override var intrinsicContentSize: CGSize {
        var contentSize = super.intrinsicContentSize
        contentSize.height = size.height
        contentSize.width += size.paddingX * 2
        return contentSize
    }

    public override var isEnabled: Bool {
        didSet { alpha = isEnabled ? 1 : 0.4 }
    }

    // Press: scale to 0.9, immediate. No press state while disabled.
    public override var isHighlighted: Bool {
        didSet {
            guard oldValue != isHighlighted else { return }
            guard isEnabled, !JulianMotion.reduceMotionEnabled else {
                transform = .identity
                return
            }
            let pressed = CGAffineTransform(
                scaleX: JulianMotion.pressedScale,
                y: JulianMotion.pressedScale
            )
            UIView.animate(
                withDuration: JulianMotion.pressDuration,
                delay: 0,
                options: [.allowUserInteraction, .beginFromCurrentState, .curveEaseOut]
            ) {
                self.transform = self.isHighlighted ? pressed : .identity
            }
        }
    }

    public override func traitCollectionDidChange(_ previousTraitCollection: UITraitCollection?) {
        super.traitCollectionDidChange(previousTraitCollection)
        // layer.borderColor is a CGColor and does not follow trait changes.
        if traitCollection.hasDifferentColorAppearance(comparedTo: previousTraitCollection) {
            apply()
        }
    }

    private func apply() {
        layer.cornerRadius = JulianRadius.control
        let weight: UIFont.Weight = style == .primary
            ? JulianType.reversedButtonLabelMinimumWeight
            : JulianType.buttonLabelMinimumWeight
        titleLabel?.font = .systemFont(ofSize: size.labelSize, weight: weight)

        switch style {
        case .primary:
            backgroundColor = JulianColor.actionPrimary
            setTitleColor(JulianColor.textInverse, for: .normal)
            layer.borderWidth = 0
        case .secondary:
            backgroundColor = JulianColor.actionSecondary
            setTitleColor(Self.grayLabel, for: .normal)
            layer.borderWidth = 0
        case .tertiary:
            backgroundColor = .clear
            setTitleColor(Self.grayLabel, for: .normal)
            layer.borderWidth = tertiaryShowsOutline ? 1 : 0
            layer.borderColor = JulianColor.borderDefault.resolvedColor(
                with: traitCollection
            ).cgColor
        }
        invalidateIntrinsicContentSize()
    }

    /// Gray-900 label per the spec; gray-100 in dark is the mechanical first pass.
    private static let grayLabel = UIColor { traits in
        traits.userInterfaceStyle == .dark ? JulianScale.gray100 : JulianScale.gray900
    }
}
#endif
