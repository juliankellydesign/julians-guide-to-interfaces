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

const GRAY_CURVE = {
  x1: 0.35,
  y1: 0.2,
  x2: 0.55,
  y2: 0.6,
  steps: 9,
  lightest: 0.97,
  darkest: 0.18,
  chroma: 0.008,
  hue: 95
};

const typeScaleElement = document.querySelector("#type-scale");
const baseButtons = [...document.querySelectorAll("[data-base]")];

function renderTypeScale(base) {
  typeScaleElement.replaceChildren(...TYPE_SCALE.steps.map((step) => {
    const size = Math.round(base * TYPE_SCALE.ratio ** step);
    const item = document.createElement("div");
    item.className = `type-step${step === 0 ? " base" : ""}`;

    const sample = document.createElement("span");
    sample.textContent = TYPE_SCALE.sample;
    sample.style.fontSize = `${size}px`;

    const label = document.createElement("small");
    label.textContent = `${step > 0 ? "+" : ""}${step} / ${size}px`;
    item.append(sample, label);
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
    renderTypeScale(Number(button.dataset.base));
  });
});

function cubicCoordinate(t, firstHandle, secondHandle) {
  const inverse = 1 - t;
  return 3 * inverse ** 2 * t * firstHandle + 3 * inverse * t ** 2 * secondHandle + t ** 3;
}

function solveCurveAtX(x) {
  let low = 0;
  let high = 1;
  let t = x;
  for (let index = 0; index < 14; index += 1) {
    t = (low + high) / 2;
    const estimate = cubicCoordinate(t, GRAY_CURVE.x1, GRAY_CURVE.x2);
    if (estimate < x) low = t;
    else high = t;
  }
  return cubicCoordinate(t, GRAY_CURVE.y1, GRAY_CURVE.y2);
}

function renderGrayRamp() {
  const ramp = document.querySelector("#gray-ramp");
  const swatches = Array.from({ length: GRAY_CURVE.steps }, (_, index) => {
    const x = index / (GRAY_CURVE.steps - 1);
    const curveValue = solveCurveAtX(x);
    const lightness = GRAY_CURVE.lightest - curveValue * (GRAY_CURVE.lightest - GRAY_CURVE.darkest);
    const percent = Math.round(lightness * 100);
    const swatch = document.createElement("div");
    swatch.className = "gray-swatch";
    swatch.style.background = `oklch(${lightness} ${GRAY_CURVE.chroma} ${GRAY_CURVE.hue})`;
    swatch.style.color = lightness < 0.56 ? "#f2f0e9" : "#181816";
    swatch.innerHTML = `<span>G${index}</span><span>L ${percent}</span>`;
    return swatch;
  });
  ramp.replaceChildren(...swatches);
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
renderGrayRamp();
