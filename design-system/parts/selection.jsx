import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Checkbox } from "@base-ui/react/checkbox";
import { CheckboxGroup } from "@base-ui/react/checkbox-group";
import { Radio } from "@base-ui/react/radio";
import { RadioGroup } from "@base-ui/react/radio-group";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";

/* Marks and icons. Drawn to the box they sit in: 16 inside the 20 checkbox,
   16 in an XS/S toggle, 20 in an M toggle. */

function CheckMark() {
  return (
    <svg className="ds-checkbox-check" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToggleIcon({ children }) {
  return (
    <svg
      className="ds-toggle-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const BoldIcon = () => (
  <ToggleIcon>
    <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7z" />
    <path d="M7 12h7a3.5 3.5 0 0 1 0 7H7z" />
  </ToggleIcon>
);

const ItalicIcon = () => (
  <ToggleIcon>
    <path d="M15 5H9" />
    <path d="M15 19H9" />
    <path d="M14 5l-4 14" />
  </ToggleIcon>
);

const UnderlineIcon = () => (
  <ToggleIcon>
    <path d="M7 4v6a5 5 0 0 0 10 0V4" />
    <path d="M5 20h14" />
  </ToggleIcon>
);

const GridIcon = () => (
  <ToggleIcon>
    <path d="M4 4h16v16H4z" />
    <path d="M4 10h16M4 16h16M10 4v16M16 4v16" />
  </ToggleIcon>
);

/* A checkbox and its label. The label wraps the control, so the words are part
   of the target and the label dims when the box is dead. */
function CheckboxItem({ label, ...props }) {
  return (
    <label className="ds-checkbox-item">
      <Checkbox.Root className="ds-checkbox" {...props}>
        <Checkbox.Indicator className="ds-checkbox-indicator">
          <CheckMark />
          <span className="ds-checkbox-dash" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className="ds-checkbox-label">{label}</span>
    </label>
  );
}

function RadioItem({ value, label }) {
  return (
    <label className="ds-radio-item">
      <Radio.Root className="ds-radio" value={value}>
        <Radio.Indicator className="ds-radio-indicator" />
      </Radio.Root>
      <span className="ds-radio-label">{label}</span>
    </label>
  );
}

function Segment({ value, label }) {
  return (
    <Toggle className="ds-segment" value={value} data-label={label}>
      <span className="ds-segment-label">{label}</span>
    </Toggle>
  );
}

const FILES = ["Q3 forecast.csv", "Roadmap.pdf", "Payroll.xlsx"];

export function SelectionSection() {
  const [files, setFiles] = React.useState([FILES[0]]);
  const [range, setRange] = React.useState(["week"]);
  const [view, setView] = React.useState(["board"]);

  return (
    <Section
      eyebrow="Selection"
      title="Checkbox, radio, toggle"
      note="Checkboxes for choices that don’t exclude each other, a radio group for one of a few options worth comparing, a toggle for a mode that stays pressed near the thing it affects."
    >
      <Row label="Checkbox — 20 box, 16 mark" align="flex-start">
        <Col>
          <div className="ds-checkbox-list">
            <CheckboxItem label="Email me a receipt" defaultChecked />
            <CheckboxItem label="Remember this device" />
            <CheckboxItem label="Ship to my billing address" defaultChecked disabled />
          </div>
        </Col>
      </Row>

      <Row label="Indeterminate — a parent partly selected" align="flex-start">
        <Col>
          <CheckboxGroup allValues={FILES} value={files} onValueChange={setFiles}>
            <div className="ds-checkbox-list">
              <CheckboxItem label="All three files" parent />
              <div className="ds-checkbox-sublist">
                {FILES.map((file) => (
                  <CheckboxItem key={file} label={file} name={file} />
                ))}
              </div>
            </div>
          </CheckboxGroup>
        </Col>
      </Row>

      <Row label="Radio group — one of several, compared" align="flex-start">
        <Col>
          <div className="ds-radio-field">
            <span className="ds-radio-group-title" id="ds-delivery-label">
              Delivery speed
            </span>
            <RadioGroup
              className="ds-radio-group"
              defaultValue="standard"
              aria-labelledby="ds-delivery-label"
            >
              <RadioItem value="standard" label="Standard — arrives Friday" />
              <RadioItem value="express" label="Express — arrives Wednesday" />
              <RadioItem value="overnight" label="Overnight — arrives tomorrow" />
            </RadioGroup>
          </div>
        </Col>
      </Row>

      <Row label="Radio group — disabled as a whole" align="flex-start">
        <Col>
          <div className="ds-radio-field">
            <span className="ds-radio-group-title" id="ds-plan-label">
              Billing period
            </span>
            <RadioGroup
              className="ds-radio-group"
              defaultValue="annual"
              disabled
              aria-labelledby="ds-plan-label"
            >
              <RadioItem value="monthly" label="Monthly" />
              <RadioItem value="annual" label="Annual — set by your admin" />
            </RadioGroup>
          </div>
        </Col>
      </Row>

      <Row label="Toggle — a button that stays pressed" align="flex-end">
        <Toggle className="ds-toggle ds-toggle-xs" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle className="ds-toggle ds-toggle-s" aria-label="Bold" defaultPressed>
          <BoldIcon />
        </Toggle>
        <Toggle className="ds-toggle ds-toggle-m" aria-label="Bold">
          <BoldIcon />
        </Toggle>
        <Toggle className="ds-toggle ds-toggle-m ds-toggle-text" defaultPressed>
          <GridIcon />
          Show grid
        </Toggle>
        <Toggle className="ds-toggle ds-toggle-m" aria-label="Bold" disabled>
          <BoldIcon />
        </Toggle>
      </Row>

      <Row label="Cluster — several may be pressed, 2 apart">
        <ToggleGroup
          className="ds-toggle-cluster"
          aria-label="Text formatting"
          multiple
          defaultValue={["bold"]}
        >
          <Toggle className="ds-toggle ds-toggle-s" value="bold" aria-label="Bold">
            <BoldIcon />
          </Toggle>
          <Toggle className="ds-toggle ds-toggle-s" value="italic" aria-label="Italic">
            <ItalicIcon />
          </Toggle>
          <Toggle className="ds-toggle ds-toggle-s" value="underline" aria-label="Underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
      </Row>

      <Row label="Segmented — exactly one, acts at once" align="flex-end">
        <ToggleGroup
          className="ds-segmented"
          aria-label="Time range"
          value={range}
          onValueChange={(next) => next.length > 0 && setRange(next)}
        >
          <Segment value="day" label="Day" />
          <Segment value="week" label="Week" />
          <Segment value="month" label="Month" />
        </ToggleGroup>
        <ToggleGroup
          className="ds-segmented ds-segmented-l"
          aria-label="View"
          value={view}
          onValueChange={(next) => next.length > 0 && setView(next)}
        >
          <Segment value="list" label="List" />
          <Segment value="board" label="Board" />
          <Segment value="timeline" label="Timeline" />
        </ToggleGroup>
      </Row>
    </Section>
  );
}
