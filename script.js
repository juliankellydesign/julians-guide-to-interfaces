/* ─────────────────────────────────────────────────────────
 * INTERACTION STORYBOARD
 *
 *    0ms   control receives input
 *    0ms   type scale and labels update immediately
 *  140ms   web motion reaches its completed state
 *  520ms   touch motion travels with a fluid physical arc
 * ───────────────────────────────────────────────────────── */

const TIMING = {
  webResponse: 140,
  touchResponse: 520,
  navClose: 150
};

const TYPE_SCALE = {
  ratio: 1.125,
  steps: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
  sample: "Purpose"
};

const TRACKING = {
  documentationBase: 17,
  documentationShift: 0,
  differenceDivisor: 3,
  taperLimit: 6,
  taperExponent: 3,
  allCapsAdjustment: 4,
  shiftStep: 0.25,
  sample: "Ag"
};

const GRAY_CURVE = {
  x1: 0.35,
  y1: 0.2,
  x2: 0.55,
  y2: 0.6,
  stops: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000],
  maximumStop: 1000,
  lightest: 1,
  darkest: 0.05,
  chroma: 0.008,
  hue: 95
};

const typeScaleElement = document.querySelector("#type-scale");
const trackingScaleElement = document.querySelector("#tracking-scale");
const trackingShiftOutput = document.querySelector("#tracking-shift");
const baseButtons = [...document.querySelectorAll("[data-base]")];
const trackingButtons = [...document.querySelectorAll("[data-tracking-action]")];
const authoredInlineLineHeights = new WeakMap();
let selectedBase = 17;
let trackingShift = 0;

function signedNumber(value, fractionDigits = 0) {
  const rounded = value.toFixed(fractionDigits);
  return `${value >= 0 ? "+" : ""}${rounded}`;
}

function calculateTrackingPercent(base, renderedSize, shift = 0, allCaps = false, manualAdjustment = 0) {
  const rawPercent = (base - renderedSize) / TRACKING.differenceDivisor;
  const taperRatio = Math.abs(rawPercent) / TRACKING.taperLimit;
  const taperedPercent = rawPercent / Math.cbrt(1 + taperRatio ** TRACKING.taperExponent);
  const capsAdjustment = allCaps ? TRACKING.allCapsAdjustment : 0;
  return shift + taperedPercent + capsAdjustment + manualAdjustment;
}

function directTextContent(element) {
  return [...element.childNodes]
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent)
    .join(" ")
    .trim();
}

function rendersAsAllCaps(element, computedStyle, text) {
  if (element.hasAttribute("data-all-caps") || computedStyle.textTransform === "uppercase") return true;
  const letters = text.match(/[A-Za-z]/g);
  return Boolean(letters && letters.length > 1 && letters.every((letter) => letter === letter.toUpperCase()));
}

function calculateResponsiveLineHeight(renderedSize, ratio, manualAdjustment = 0) {
  const grid = renderedSize > 20 ? 4 : 2;
  const rawLineHeight = renderedSize * ratio;
  const snappedLineHeight = Math.round(rawLineHeight / grid) * grid;
  return Math.max(grid, snappedLineHeight + manualAdjustment);
}

function applyDocumentationTypography() {
  const candidates = [...document.body.querySelectorAll("*")].flatMap((element) => {
    if (element instanceof SVGElement || element.closest("#tracking-scale, [data-tracking-ignore], [data-typography-ignore]")) return [];
    const text = directTextContent(element);
    if (!text) return [];

    if (!authoredInlineLineHeights.has(element)) {
      authoredInlineLineHeights.set(element, element.style.lineHeight);
    }
    element.style.lineHeight = authoredInlineLineHeights.get(element);
    return [{ element, text }];
  });

  const measurements = candidates.flatMap(({ element, text }) => {
    const computedStyle = getComputedStyle(element);
    const renderedSize = Number.parseFloat(computedStyle.fontSize);
    if (!Number.isFinite(renderedSize)) return [];

    const base = Number.parseFloat(element.dataset.trackingBase) || TRACKING.documentationBase;
    const manualTrackingAdjustment = Number.parseFloat(element.dataset.trackingAdjust) || 0;
    const allCaps = rendersAsAllCaps(element, computedStyle, text);
    const trackingPercent = calculateTrackingPercent(
      base,
      renderedSize,
      TRACKING.documentationShift,
      allCaps,
      manualTrackingAdjustment
    );

    const computedLineHeight = Number.parseFloat(computedStyle.lineHeight);
    const ratioOverride = Number.parseFloat(element.dataset.lineHeightRatio);
    const lineHeightRatio = Number.isFinite(ratioOverride)
      ? ratioOverride
      : Number.isFinite(computedLineHeight)
        ? computedLineHeight / renderedSize
        : null;
    const manualLineHeightAdjustment = Number.parseFloat(element.dataset.lineHeightAdjust) || 0;
    const lineHeight = Number.isFinite(lineHeightRatio)
      ? calculateResponsiveLineHeight(renderedSize, lineHeightRatio, manualLineHeightAdjustment)
      : null;

    return [{ element, trackingPercent, lineHeight }];
  });

  measurements.forEach(({ element, trackingPercent, lineHeight }) => {
    element.style.letterSpacing = `${(trackingPercent / 100).toFixed(5)}em`;
    if (lineHeight !== null) element.style.lineHeight = `${lineHeight}px`;
  });
}

function renderTypeScale(base) {
  typeScaleElement.replaceChildren(...TYPE_SCALE.steps.map((step) => {
    const size = Math.round(base * TYPE_SCALE.ratio ** step);
    const item = document.createElement("div");
    item.className = `type-step${step === 0 ? " base" : ""}`;

    const sample = document.createElement("span");
    sample.textContent = TYPE_SCALE.sample;
    sample.style.fontSize = `${size}px`;
    sample.dataset.trackingBase = String(base);

    const label = document.createElement("small");
    label.textContent = `${step > 0 ? "+" : ""}${step} / ${size}px`;
    item.append(sample, label);
    return item;
  }));
}

function renderTrackingScale(base) {
  trackingShiftOutput.textContent = `${signedNumber(trackingShift, 2)}%`;
  trackingScaleElement.replaceChildren(...TYPE_SCALE.steps.map((step) => {
    const size = Math.round(base * TYPE_SCALE.ratio ** step);
    const trackingPercent = calculateTrackingPercent(base, size, trackingShift);
    const item = document.createElement("article");
    item.className = `tracking-step${step === 0 ? " base" : ""}`;

    const label = document.createElement("span");
    label.textContent = `${step > 0 ? "+" : ""}${step} / ${size}px`;

    const sample = document.createElement("strong");
    sample.textContent = TRACKING.sample;
    sample.style.fontSize = `${size}px`;
    sample.style.letterSpacing = `${(trackingPercent / 100).toFixed(5)}em`;

    const value = document.createElement("small");
    value.textContent = `${signedNumber(trackingPercent, 2)}% / ${(trackingPercent / 100).toFixed(4)}em`;
    item.append(label, sample, value);
    return item;
  }));
}

baseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    baseButtons.forEach((candidate) => {
      const selected = candidate === button;
      candidate.classList.toggle("active", selected);
      candidate.setAttribute("aria-pressed", String(selected));
    });
    selectedBase = Number(button.dataset.base);
    renderTypeScale(selectedBase);
    renderTrackingScale(selectedBase);
    applyDocumentationTypography();
  });
});

trackingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.trackingAction;
    if (action === "decrease") trackingShift -= TRACKING.shiftStep;
    if (action === "reset") trackingShift = 0;
    if (action === "increase") trackingShift += TRACKING.shiftStep;
    renderTrackingScale(selectedBase);
  });
});

function cubicCoordinate(t, firstHandle, secondHandle) {
  const inverse = 1 - t;
  return 3 * inverse ** 2 * t * firstHandle + 3 * inverse * t ** 2 * secondHandle + t ** 3;
}

function solveCurveAtX(x, curve = GRAY_CURVE) {
  let low = 0;
  let high = 1;
  let t = x;
  for (let index = 0; index < 20; index += 1) {
    t = (low + high) / 2;
    const estimate = cubicCoordinate(t, curve.x1, curve.x2);
    if (estimate < x) low = t;
    else high = t;
  }
  return cubicCoordinate(t, curve.y1, curve.y2);
}

function renderGrayRamp() {
  const ramp = document.querySelector("#gray-ramp");
  const swatches = GRAY_CURVE.stops.map((stop) => {
    const x = stop / GRAY_CURVE.maximumStop;
    const curveValue = solveCurveAtX(x);
    const isWhite = stop === 0;
    const isBlack = stop === GRAY_CURVE.maximumStop;
    const generatedLightness = GRAY_CURVE.lightest - curveValue * (GRAY_CURVE.lightest - GRAY_CURVE.darkest);
    const lightness = isWhite ? GRAY_CURVE.lightest : isBlack ? GRAY_CURVE.darkest : generatedLightness;
    const chroma = isWhite ? 0 : GRAY_CURVE.chroma;
    const hue = isWhite ? 0 : GRAY_CURVE.hue;
    const percent = Math.round(lightness * 100);
    const swatch = document.createElement("div");
    swatch.className = "gray-swatch";
    swatch.style.background = `oklch(${lightness} ${chroma} ${hue})`;
    swatch.style.color = lightness < 0.5 ? "var(--gray-0)" : "var(--gray-1000)";
    const endpoint = isWhite ? "WHITE" : isBlack ? "NEAR-BLACK" : `L ${percent}`;
    swatch.innerHTML = `<span>${stop}</span><span>${endpoint}</span>`;
    return swatch;
  });
  ramp.replaceChildren(...swatches);
}

const COLOR_SCALES = {
  peakChroma: 0.16,
  gamutClampFraction: 0.95,
  lightnessCurve: { x1: 0.5, y1: 0.3, x2: 0.6, y2: 0.5 },
  hues: { blue: 250, red: 28, orange: 65, yellow: 100, purple: 305, green: 145 }
};

function oklchToLinearSrgb(lightness, chroma, hueDegrees) {
  const hue = (hueDegrees * Math.PI) / 180;
  const a = chroma * Math.cos(hue);
  const b = chroma * Math.sin(hue);
  const long = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const medium = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const short = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    4.0767416621 * long - 3.3077115913 * medium + 0.2309699292 * short,
    -1.2684380046 * long + 2.6097574011 * medium - 0.3413193965 * short,
    -0.0041960863 * long - 0.7034186147 * medium + 1.707614701 * short
  ];
}

function maxSrgbChroma(lightness, hueDegrees) {
  let low = 0;
  let high = 0.5;
  for (let index = 0; index < 32; index += 1) {
    const middle = (low + high) / 2;
    const inGamut = oklchToLinearSrgb(lightness, middle, hueDegrees).every((channel) => channel >= -0.000001 && channel <= 1.000001);
    if (inGamut) low = middle;
    else high = middle;
  }
  return low;
}

function renderColorRamps() {
  const ramps = document.querySelector("#color-ramps");
  const rows = Object.entries(COLOR_SCALES.hues).map(([name, hue]) => {
    const row = document.createElement("div");
    row.className = "color-scale-row";
    const label = document.createElement("span");
    label.className = "color-scale-name";
    label.innerHTML = `<span>${name.toUpperCase()}</span><span>H ${hue}</span>`;
    const swatches = document.createElement("div");
    swatches.className = "color-scale-swatches";
    GRAY_CURVE.stops.forEach((stop) => {
      const position = stop / GRAY_CURVE.maximumStop;
      const isWhite = stop === 0;
      const isBlack = stop === GRAY_CURVE.maximumStop;
      const generatedLightness = GRAY_CURVE.lightest - solveCurveAtX(position, COLOR_SCALES.lightnessCurve) * (GRAY_CURVE.lightest - GRAY_CURVE.darkest);
      const lightness = isWhite ? GRAY_CURVE.lightest : isBlack ? GRAY_CURVE.darkest : generatedLightness;
      const arch = 4 * position * (1 - position);
      const chroma = Math.min(COLOR_SCALES.peakChroma * arch, COLOR_SCALES.gamutClampFraction * maxSrgbChroma(lightness, hue));
      const swatch = document.createElement("i");
      swatch.style.background = `oklch(${lightness} ${chroma.toFixed(4)} ${hue})`;
      swatch.title = `${name} ${stop} · oklch(${lightness} ${chroma.toFixed(4)} ${hue})`;
      swatches.append(swatch);
    });
    row.append(label, swatches);
    return row;
  });
  ramps.replaceChildren(...rows);
}

const SPACING_LADDER = [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128];
const RADIUS_LADDER = [0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32];

function renderSpacingLadder() {
  const ladder = document.querySelector("#spacing-ladder");
  const rows = SPACING_LADDER.map((value) => {
    const row = document.createElement("div");
    const bar = document.createElement("i");
    bar.style.width = `${value}px`;
    const label = document.createElement("span");
    label.textContent = value;
    row.append(bar, label);
    return row;
  });
  ladder.replaceChildren(...rows);
}

function renderRadiusLadder() {
  const ladder = document.querySelector("#radius-ladder");
  const tiles = RADIUS_LADDER.map((value) => {
    const tile = document.createElement("div");
    tile.style.borderRadius = `${value}px`;
    tile.innerHTML = `<span>${value}</span>`;
    return tile;
  });
  const full = document.createElement("div");
  full.className = "full";
  full.innerHTML = "<span>FULL</span>";
  ladder.replaceChildren(...tiles, full);
}

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

siteNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  setTimeout(() => {
    siteNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }, TIMING.navClose);
});

const observedSections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a[data-section]")];

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.section === visible.target.id));
}, { rootMargin: "-25% 0px -55%", threshold: [0, 0.25, 0.6] });

observedSections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll("[data-motion]").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.remove("playing");
    requestAnimationFrame(() => {
      button.classList.add("playing");
      const duration = button.dataset.motion === "web" ? TIMING.webResponse : TIMING.touchResponse;
      setTimeout(() => button.classList.remove("playing"), duration + 120);
    });
  });
});

renderTypeScale(17);
renderTrackingScale(17);
function gammaEncode(value) {
  const channel = Math.min(1, Math.max(0, value));
  return channel <= 0.0031308 ? 12.92 * channel : 1.055 * channel ** (1 / 2.4) - 0.055;
}

function renderAlphaRows() {
  const wrap = document.querySelector("#alpha-rows");
  const grayLightness = (stop) => {
    if (stop === 0) return GRAY_CURVE.lightest;
    if (stop === GRAY_CURVE.maximumStop) return GRAY_CURVE.darkest;
    return GRAY_CURVE.lightest - solveCurveAtX(stop / GRAY_CURVE.maximumStop) * (GRAY_CURVE.lightest - GRAY_CURVE.darkest);
  };
  const srgbOf = (lightness) => gammaEncode(lightness ** 3);
  const nearBlack = srgbOf(GRAY_CURVE.darkest);
  const nearBlackCss = `oklch(${GRAY_CURVE.darkest} ${GRAY_CURVE.chroma} ${GRAY_CURVE.hue})`;
  const nearBlackRgb = Math.round(nearBlack * 255);
  const rows = [
    {
      label: "Transparent whites over gray 1000",
      background: nearBlackCss,
      alphaColor: (alphaWhite) => `rgba(255, 255, 255, ${alphaWhite.toFixed(3)})`
    },
    {
      label: "Transparent blacks over white",
      background: "#fff",
      alphaColor: (alphaWhite) => `rgba(${nearBlackRgb}, ${nearBlackRgb}, ${nearBlackRgb}, ${(1 - alphaWhite).toFixed(3)})`
    }
  ];
  const built = rows.map((row) => {
    const strip = document.createElement("div");
    strip.className = "alpha-row";
    const label = document.createElement("span");
    label.textContent = row.label;
    const cells = document.createElement("div");
    cells.className = "alpha-strip";
    cells.style.background = row.background;
    GRAY_CURVE.stops.forEach((stop) => {
      const lightness = grayLightness(stop);
      const alphaWhite = (srgbOf(lightness) - nearBlack) / (1 - nearBlack);
      const opaque = stop === 0 ? "oklch(1 0 0)" : `oklch(${lightness} ${GRAY_CURVE.chroma} ${GRAY_CURVE.hue})`;
      const cell = document.createElement("i");
      cell.style.background = `linear-gradient(to bottom, ${opaque} 0 50%, ${row.alphaColor(alphaWhite)} 50% 100%)`;
      cell.title = `${stop} · opaque above, alpha twin below`;
      cells.append(cell);
    });
    strip.append(label, cells);
    return strip;
  });
  wrap.replaceChildren(...built);
}

renderGrayRamp();
renderColorRamps();
renderAlphaRows();
renderSpacingLadder();
renderRadiusLadder();
applyDocumentationTypography();

let typographyFrame;
function scheduleDocumentationTypography() {
  cancelAnimationFrame(typographyFrame);
  typographyFrame = requestAnimationFrame(applyDocumentationTypography);
}

window.addEventListener("resize", scheduleDocumentationTypography);
document.fonts?.ready.then(scheduleDocumentationTypography);
