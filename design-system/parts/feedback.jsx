import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Toast } from "@base-ui/react/toast";
import { Progress } from "@base-ui/react/progress";
import { Meter } from "@base-ui/react/meter";
import { Avatar } from "@base-ui/react/avatar";
import { Separator } from "@base-ui/react/separator";
import { Slider } from "@base-ui/react/slider";
import { PreviewCard } from "@base-ui/react/preview-card";
import { Button } from "@base-ui/react/button";

/* Portraits as inline data URIs so the sheet stays self-contained. */
const FACE_DANA =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Crect%20width='64'%20height='64'%20fill='%23dfe6ee'/%3E%3Ccircle%20cx='32'%20cy='24'%20r='11'%20fill='%237d97b4'/%3E%3Ccircle%20cx='32'%20cy='56'%20r='18'%20fill='%237d97b4'/%3E%3C/svg%3E";
const FACE_MARIS =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Crect%20width='64'%20height='64'%20fill='%23efe3dc'/%3E%3Ccircle%20cx='32'%20cy='24'%20r='11'%20fill='%23b08b74'/%3E%3Ccircle%20cx='32'%20cy='56'%20r='18'%20fill='%23b08b74'/%3E%3C/svg%3E";
const FACE_TOMAS =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%3E%3Crect%20width='64'%20height='64'%20fill='%23e3ecdf'/%3E%3Ccircle%20cx='32'%20cy='24'%20r='11'%20fill='%2386a476'/%3E%3Ccircle%20cx='32'%20cy='56'%20r='18'%20fill='%2386a476'/%3E%3C/svg%3E";

/* No image and no initials: a 20 person glyph, gray-500 on gray-100. */
function PersonGlyph() {
  return (
    <svg
      className="ds-avatar-glyph"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="7" r="3.25" />
      <path d="M4 16.5c0-2.6 2.7-4.2 6-4.2s6 1.6 6 4.2" strokeLinecap="round" />
    </svg>
  );
}

/* A 20 icon for a thing — the preview card's identifying image when the
   destination is a repository rather than a person. */
function RepoIcon() {
  return (
    <svg
      className="ds-preview-icon"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 3h9a1 1 0 0 1 1 1v13H5.5A1.5 1.5 0 0 1 4 15.5v-11A1.5 1.5 0 0 1 5.5 3Z" />
      <path d="M4 14.5A1.5 1.5 0 0 1 5.5 13H15" />
    </svg>
  );
}

/* ---------- Toast ---------- */

function ToastTriggers() {
  const toastManager = Toast.useToastManager();
  const [savedCount, setSavedCount] = React.useState(0);

  return (
    <React.Fragment>
      <Button
        className="ds-button ds-button-m ds-button-secondary"
        onClick={() => {
          const n = savedCount + 1;
          setSavedCount(n);
          toastManager.add({
            title: "Draft saved",
            description: `Version ${n} · just now`,
          });
        }}
      >
        Save draft
      </Button>
      {/* A toast that carries an action dwells longer. */}
      <Button
        className="ds-button ds-button-m ds-button-secondary"
        onClick={() => {
          toastManager.add({
            title: "Message archived",
            description: "Moved out of the inbox.",
            timeout: 8000,
            actionProps: { children: "Undo" },
          });
        }}
      >
        Archive message
      </Button>
      <Button
        className="ds-button ds-button-m ds-button-secondary"
        onClick={() => {
          toastManager.add({ title: "Link copied" });
        }}
      >
        Copy link
      </Button>
    </React.Fragment>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();
  return toasts.map((toast) => (
    <Toast.Root key={toast.id} toast={toast} className="ds-toast">
      <Toast.Content className="ds-toast-content">
        <Toast.Title className="ds-toast-title" />
        <Toast.Description className="ds-toast-description" />
        {/* At most one action — and it renders only when the toast carries one. */}
        <Toast.Action className="ds-button ds-button-s ds-button-tertiary ds-toast-action" />
      </Toast.Content>
    </Toast.Root>
  ));
}

function Toasts() {
  return (
    /* Three visible is the ceiling; roughly 5 seconds of dwell, and never while
       the pointer is over the stack. Base UI owns the timers. */
    <Toast.Provider limit={3} timeout={5000}>
      <ToastTriggers />
      <Toast.Portal>
        <Toast.Viewport className="ds-toast-viewport">
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  );
}

/* ---------- Progress ---------- */

function ImportProgress() {
  const [value, setValue] = React.useState(8);

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue((current) => (current >= 100 ? 0 : Math.min(100, current + 7)));
    }, 700);
    return () => clearInterval(id);
  }, []);

  const records = Math.round((value / 100) * 1284);

  return (
    <Progress.Root className="ds-progress" value={value}>
      <div className="ds-progress-header">
        <Progress.Label className="ds-progress-label">
          {`Importing ${records.toLocaleString("en-US")} of 1,284 records`}
        </Progress.Label>
        <Progress.Value className="ds-progress-value">
          {(formattedValue) => formattedValue}
        </Progress.Value>
      </div>
      <Progress.Track className="ds-progress-track">
        <Progress.Indicator className="ds-progress-indicator" />
      </Progress.Track>
    </Progress.Root>
  );
}

/* ---------- Slider ---------- */

const LEVELS = ["Off", "Low", "Medium", "High"];

function VolumeSlider() {
  const [value, setValue] = React.useState(64);
  return (
    <Slider.Root className="ds-slider" value={value} onValueChange={setValue}>
      <div className="ds-slider-header">
        <Slider.Label className="ds-slider-label">Volume</Slider.Label>
        <Slider.Value className="ds-slider-value" />
      </div>
      <Slider.Control className="ds-slider-control">
        <Slider.Track className="ds-slider-track">
          <Slider.Indicator className="ds-slider-fill" />
          <Slider.Thumb className="ds-slider-thumb" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

function PriceRangeSlider() {
  const [value, setValue] = React.useState([20, 60]);
  return (
    /* Two thumbs for a range, never closer than one thumb width apart —
       20 of a 360 track is about five steps of 1. First pass. */
    <Slider.Root
      className="ds-slider"
      value={value}
      onValueChange={setValue}
      min={0}
      max={100}
      step={1}
      minStepsBetweenValues={5}
      format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
    >
      <div className="ds-slider-header">
        <Slider.Label className="ds-slider-label">Price</Slider.Label>
        <Slider.Value className="ds-slider-value">
          {(formattedValues) => `${formattedValues[0]}–${formattedValues[1]}`}
        </Slider.Value>
      </div>
      <Slider.Control className="ds-slider-control">
        <Slider.Track className="ds-slider-track">
          <Slider.Indicator className="ds-slider-fill" />
          <Slider.Thumb index={0} className="ds-slider-thumb" aria-label="Lowest price" />
          <Slider.Thumb index={1} className="ds-slider-thumb" aria-label="Highest price" />
        </Slider.Track>
      </Slider.Control>
    </Slider.Root>
  );
}

function NamedStepsSlider() {
  const [value, setValue] = React.useState(2);
  return (
    <Slider.Root
      className="ds-slider"
      value={value}
      onValueChange={setValue}
      min={0}
      max={3}
      step={1}
    >
      <div className="ds-slider-header">
        <Slider.Label className="ds-slider-label">Motion</Slider.Label>
        <Slider.Value className="ds-slider-value">
          {(formattedValues, values) => LEVELS[values[0]]}
        </Slider.Value>
      </div>
      <Slider.Control className="ds-slider-control">
        <Slider.Track className="ds-slider-track">
          <Slider.Indicator className="ds-slider-fill" />
          {LEVELS.map((level, index) => (
            <span
              key={level}
              className="ds-slider-tick"
              style={{ insetInlineStart: `${(index / (LEVELS.length - 1)) * 100}%` }}
              aria-hidden="true"
            />
          ))}
          <Slider.Thumb className="ds-slider-thumb" getAriaValueText={(f, v) => LEVELS[v]} />
        </Slider.Track>
      </Slider.Control>
      <div className="ds-slider-ticklabels" aria-hidden="true">
        {LEVELS.map((level) => (
          <span key={level}>{level}</span>
        ))}
      </div>
    </Slider.Root>
  );
}

/* ---------- Section ---------- */

export function FeedbackSection() {
  return (
    <Section
      eyebrow="Feedback and display"
      title="Toast, progress, meter, avatar, separator, slider, preview card"
      note="A toast is a receipt for work already done; progress is a task advancing toward a finish, a meter a reading inside a known range, a slider a value the person sets; an avatar identifies a person, a separator draws a boundary only after spacing has failed, and a preview card says what is behind a link before anyone follows it."
    >
      <Row label="Toast — a receipt, bottom corner">
        <Toasts />
      </Row>

      <Row label="Progress — advancing, with a finish">
        <Col>
          <ImportProgress />
        </Col>
      </Row>

      <Row label="Progress — indeterminate">
        <Col>
          {/* No percentage to report: a segment about a third of the track
              travels along it on a loop. */}
          <Progress.Root className="ds-progress" value={null}>
            <div className="ds-progress-header">
              <Progress.Label className="ds-progress-label">
                Waiting for the server to answer
              </Progress.Label>
            </div>
            <Progress.Track className="ds-progress-track">
              <Progress.Indicator className="ds-progress-indicator" />
            </Progress.Track>
          </Progress.Root>
        </Col>
      </Row>

      <Row label="Meter — a reading, not an event">
        <Col>
          <Meter.Root
            className="ds-meter"
            value={18.2}
            max={25}
            getAriaValueText={(formattedValue, value) => `${value} GB of 25 GB used`}
          >
            <div className="ds-meter-header">
              <Meter.Label className="ds-meter-label">Storage</Meter.Label>
              <Meter.Value className="ds-meter-value">
                {(formattedValue, value) => `${value} GB of 25 GB`}
              </Meter.Value>
            </div>
            <Meter.Track className="ds-meter-track">
              <Meter.Indicator className="ds-meter-indicator" />
            </Meter.Track>
          </Meter.Root>

          {/* One threshold, and only where the person can do something about it. */}
          <Meter.Root
            className="ds-meter ds-meter-warning"
            value={47800}
            max={50000}
            getAriaValueText={(formattedValue, value) =>
              `${value.toLocaleString("en-US")} of 50,000 API calls used`
            }
          >
            <div className="ds-meter-header">
              <Meter.Label className="ds-meter-label">API calls this month</Meter.Label>
              <Meter.Value className="ds-meter-value">
                {(formattedValue, value) =>
                  `${value.toLocaleString("en-US")} of 50,000`
                }
              </Meter.Value>
            </div>
            <Meter.Track className="ds-meter-track">
              <Meter.Indicator className="ds-meter-indicator" />
            </Meter.Track>
          </Meter.Root>

          {/* A meter reading almost-zero still renders a visible nub. */}
          <Meter.Root
            className="ds-meter"
            value={0.4}
            max={100}
            getAriaValueText={() => "0.4 percent of the cache is in use"}
          >
            <div className="ds-meter-header">
              <Meter.Label className="ds-meter-label">Cache in use</Meter.Label>
              <Meter.Value className="ds-meter-value">
                {(formattedValue, value) => `${value}% of 100%`}
              </Meter.Value>
            </div>
            <Meter.Track className="ds-meter-track">
              <Meter.Indicator className="ds-meter-indicator" />
            </Meter.Track>
          </Meter.Root>
        </Col>
      </Row>

      <Row label="Meter — four named steps">
        <Col>
          <Meter.Root className="ds-meter" value={3} max={4} aria-valuetext="Strong">
            <div className="ds-meter-header">
              <Meter.Label className="ds-meter-label">Password strength</Meter.Label>
              <Meter.Value className="ds-meter-value">{() => "Strong"}</Meter.Value>
            </div>
            <div className="ds-meter-segments" aria-hidden="true">
              <span className="ds-meter-segment" data-filled="" />
              <span className="ds-meter-segment" data-filled="" />
              <span className="ds-meter-segment" data-filled="" />
              <span className="ds-meter-segment" />
            </div>
          </Meter.Root>
        </Col>
      </Row>

      <Row label="Avatar — five sizes" align="flex-end">
        <Avatar.Root className="ds-avatar ds-avatar-xs">
          <Avatar.Image className="ds-avatar-image" src={FACE_DANA} alt="Dana Oyelaran" />
          <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="ds-avatar ds-avatar-s">
          <Avatar.Image className="ds-avatar-image" src={FACE_DANA} alt="Dana Oyelaran" />
          <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="ds-avatar ds-avatar-m">
          <Avatar.Image className="ds-avatar-image" src={FACE_DANA} alt="Dana Oyelaran" />
          <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="ds-avatar ds-avatar-l">
          <Avatar.Image className="ds-avatar-image" src={FACE_DANA} alt="Dana Oyelaran" />
          <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="ds-avatar ds-avatar-xl">
          <Avatar.Image className="ds-avatar-image" src={FACE_DANA} alt="Dana Oyelaran" />
          <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
        </Avatar.Root>
      </Row>

      <Row label="Avatar — shape carries the type">
        {/* A person is a circle. */}
        <div className="ds-avatar-row">
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Image className="ds-avatar-image" src={FACE_MARIS} alt="Maris Halvorsen" />
            <Avatar.Fallback className="ds-avatar-fallback">MH</Avatar.Fallback>
          </Avatar.Root>
          <span className="ds-avatar-name">Maris Halvorsen</span>
        </div>
        {/* No image: initials. */}
        <div className="ds-avatar-row">
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Fallback className="ds-avatar-fallback">TR</Avatar.Fallback>
          </Avatar.Root>
          <span className="ds-avatar-name">Tomás Reyes</span>
        </div>
        {/* No initials either: the person glyph. */}
        <div className="ds-avatar-row">
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Fallback className="ds-avatar-fallback">
              <PersonGlyph />
            </Avatar.Fallback>
          </Avatar.Root>
          <span className="ds-avatar-name">Invited teammate</span>
        </div>
        {/* An organization is a rounded square at the control radius. */}
        <div className="ds-avatar-row">
          <Avatar.Root className="ds-avatar ds-avatar-square ds-avatar-m">
            <Avatar.Fallback className="ds-avatar-fallback">NW</Avatar.Fallback>
          </Avatar.Root>
          <span className="ds-avatar-name">Northwind</span>
        </div>
      </Row>

      <Row label="Avatar — stack, presence, trigger">
        {/* Four at most, then a fifth circle carrying +N. */}
        <div className="ds-avatar-stack">
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Image className="ds-avatar-image" src={FACE_DANA} alt="Dana Oyelaran" />
            <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Image className="ds-avatar-image" src={FACE_MARIS} alt="Maris Halvorsen" />
            <Avatar.Fallback className="ds-avatar-fallback">MH</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Image className="ds-avatar-image" src={FACE_TOMAS} alt="Tomás Reyes" />
            <Avatar.Fallback className="ds-avatar-fallback">TR</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root className="ds-avatar ds-avatar-m">
            <Avatar.Fallback className="ds-avatar-fallback">PK</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root className="ds-avatar ds-avatar-m" aria-label="2 more people">
            <Avatar.Fallback className="ds-avatar-fallback">+2</Avatar.Fallback>
          </Avatar.Root>
        </div>

        {/* A presence dot only where presence is the point. */}
        <span className="ds-avatar-presence">
          <Avatar.Root className="ds-avatar ds-avatar-l">
            <Avatar.Image className="ds-avatar-image" src={FACE_MARIS} alt="Maris Halvorsen" />
            <Avatar.Fallback className="ds-avatar-fallback">MH</Avatar.Fallback>
          </Avatar.Root>
          <span className="ds-avatar-dot" role="img" aria-label="Online" />
        </span>

        {/* As a trigger it takes the button defaults: press, focus ring, disabled. */}
        <button type="button" className="ds-avatar-trigger" aria-label="Your account">
          <Avatar.Root className="ds-avatar ds-avatar-l">
            <Avatar.Image className="ds-avatar-image" src={FACE_TOMAS} alt="" />
            <Avatar.Fallback className="ds-avatar-fallback">TR</Avatar.Fallback>
          </Avatar.Root>
        </button>
      </Row>

      <Row label="Separator — after space has failed">
        <Col>
          {/* Every row the same height, so the sections would otherwise blur
              together. The line runs full-bleed past the sheet's own padding,
              and takes 16 on both sides — the rhythm the sheet already uses. */}
          <div className="ds-sheet">
            <p className="ds-sheet-heading">Notifications</p>
            <div className="ds-sheet-group">
              <div className="ds-sheet-row">
                <span>Mentions</span>
                <span className="ds-sheet-detail">Push and email</span>
              </div>
              <div className="ds-sheet-row">
                <span>Replies</span>
                <span className="ds-sheet-detail">Push</span>
              </div>
              <div className="ds-sheet-row">
                <span>Weekly digest</span>
                <span className="ds-sheet-detail">Email</span>
              </div>
            </div>
            <Separator className="ds-separator ds-separator-bleed ds-sheet-rule" />
            <p className="ds-sheet-heading">Account</p>
            <div className="ds-sheet-group">
              <div className="ds-sheet-row">
                <span>Signed in as</span>
                <span className="ds-sheet-detail">maris@northwind.co</span>
              </div>
              <div className="ds-sheet-row">
                <span>Two-factor</span>
                <span className="ds-sheet-detail">On</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row label="Separator — vertical, and over media">
        <Col>
          {/* Vertical: the same hairline, inset 8 from the top and bottom of the
              bar, dividing two groups of controls in a compact toolbar. */}
          <div className="ds-bar">
            <Button className="ds-button ds-button-s ds-button-ghost">Bold</Button>
            <Button className="ds-button ds-button-s ds-button-ghost">Italic</Button>
            <Separator orientation="vertical" className="ds-separator" />
            <Button className="ds-button ds-button-s ds-button-ghost">Link</Button>
            <Button className="ds-button ds-button-s ds-button-ghost">Code</Button>
          </div>

          {/* Over anything whose background is unknown, the transparent twin. */}
          <div className="ds-media">
            <p className="ds-media-caption">Hofplein, Rotterdam · 1962</p>
            <Separator className="ds-separator ds-separator-onmedia" />
            <p className="ds-media-caption">Photograph by the city archive</p>
          </div>
        </Col>
      </Row>

      <Row label="Slider — set an approximate value">
        <Col>
          <VolumeSlider />
        </Col>
      </Row>

      <Row label="Slider — range, named steps, disabled">
        <Col>
          <PriceRangeSlider />
          <NamedStepsSlider />
          <Slider.Root className="ds-slider" defaultValue={35} disabled>
            <div className="ds-slider-header">
              <Slider.Label className="ds-slider-label">Brightness (locked)</Slider.Label>
              <Slider.Value className="ds-slider-value" />
            </div>
            <Slider.Control className="ds-slider-control">
              <Slider.Track className="ds-slider-track">
                <Slider.Indicator className="ds-slider-fill" />
                <Slider.Thumb className="ds-slider-thumb" />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>
        </Col>
      </Row>

      <Row label="Preview card — what is behind the link">
        <Col>
          <p className="ds-feedback-sentence">
            The interface review moves to Thursday, so{" "}
            <PreviewCard.Root>
              <PreviewCard.Trigger className="ds-preview-trigger" href="#dana">
                Dana Oyelaran
              </PreviewCard.Trigger>
              <PreviewCard.Portal>
                <PreviewCard.Positioner className="ds-preview-positioner" sideOffset={4}>
                  <PreviewCard.Popup className="ds-preview-card">
                    <Avatar.Root className="ds-avatar ds-avatar-m ds-preview-figure">
                      <Avatar.Image
                        className="ds-avatar-image"
                        src={FACE_DANA}
                        alt=""
                      />
                      <Avatar.Fallback className="ds-avatar-fallback">DO</Avatar.Fallback>
                    </Avatar.Root>
                    <p className="ds-preview-title">Dana Oyelaran</p>
                    <p className="ds-preview-body">
                      Design engineer on Platform. Owns the component library and runs
                      the weekly interface review.
                    </p>
                    <p className="ds-preview-facts">
                      <span>Joined 2021</span>
                      <span>Lagos · UTC+1</span>
                    </p>
                  </PreviewCard.Popup>
                </PreviewCard.Positioner>
              </PreviewCard.Portal>
            </PreviewCard.Root>{" "}
            will send the agenda instead.
          </p>

          <p className="ds-feedback-sentence">
            The switch and the slider both take their thumb from{" "}
            <PreviewCard.Root>
              <PreviewCard.Trigger className="ds-preview-trigger" href="#base-ui">
                base-ui/react
              </PreviewCard.Trigger>
              <PreviewCard.Portal>
                <PreviewCard.Positioner className="ds-preview-positioner" sideOffset={4}>
                  <PreviewCard.Popup className="ds-preview-card">
                    <span className="ds-preview-figure">
                      <RepoIcon />
                    </span>
                    <p className="ds-preview-title">base-ui/react</p>
                    <p className="ds-preview-body">
                      Unstyled React components and low-level hooks. Behavior and
                      accessibility; the visuals are yours.
                    </p>
                    <p className="ds-preview-facts">
                      <span>MIT</span>
                      <span>Updated 3 days ago</span>
                    </p>
                    {/* Where a second action genuinely belongs, exactly one. */}
                    <Button className="ds-button ds-button-s ds-button-tertiary ds-preview-action">
                      Star
                    </Button>
                  </PreviewCard.Popup>
                </PreviewCard.Positioner>
              </PreviewCard.Portal>
            </PreviewCard.Root>
            .
          </p>
        </Col>
      </Row>
    </Section>
  );
}
