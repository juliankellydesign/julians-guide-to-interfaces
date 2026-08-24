import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Select } from "@base-ui/react/select";
import { Combobox } from "@base-ui/react/combobox";
import { Autocomplete } from "@base-ui/react/autocomplete";
import { NumberField } from "@base-ui/react/number-field";

/* ---------- Icons ---------- */

function ChevronIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path d="m5.5 8 4.5 4.5L14.5 8" />
    </svg>
  );
}

function CheckIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}

function XIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path d="m5.5 5.5 9 9m-9 0 9-9" />
    </svg>
  );
}

function MinusIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path d="M3 8h10" />
    </svg>
  );
}

function PlusIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <path d="M3 8h10M8 3v10" />
    </svg>
  );
}

/* The typed substring renders at semibold within an otherwise regular label.
   Weight carries it; there is no second color. */
function MatchedLabel({ label, query }) {
  const at = query ? label.toLowerCase().indexOf(query.trim().toLowerCase()) : -1;
  if (at < 0 || query.trim() === "") {
    return <span className="ds-option-label">{label}</span>;
  }
  const end = at + query.trim().length;
  return (
    <span className="ds-option-label">
      {label.slice(0, at)}
      <span className="ds-option-match">{label.slice(at, end)}</span>
      {label.slice(end)}
    </span>
  );
}

/* ---------- Data ---------- */

const statuses = [
  { value: "open", label: "Open" },
  { value: "in-review", label: "In review" },
  { value: "changes", label: "Changes requested" },
  { value: "merged", label: "Merged" },
  { value: "closed", label: "Closed" },
];

const repositories = [
  { value: "guide", label: "julians-guide-to-interfaces" },
  { value: "base-ui", label: "base-ui" },
  { value: "design-tokens", label: "design-tokens" },
  { value: "icon-set", label: "icon-set" },
  { value: "type-scale", label: "type-scale" },
  { value: "grid-lab", label: "grid-lab" },
  { value: "motion-notes", label: "motion-notes" },
  { value: "color-tools", label: "color-tools" },
  { value: "sheet-renderer", label: "sheet-renderer" },
  { value: "docs-site", label: "docs-site" },
  { value: "release-bot", label: "release-bot" },
  { value: "changelog", label: "changelog" },
  { value: "playground", label: "playground" },
  { value: "handbook", label: "handbook" },
];

const reviewers = [
  { value: "ap", label: "Ada Pierce" },
  { value: "jm", label: "Jonas Meier" },
  { value: "rk", label: "Rina Kobayashi" },
  { value: "tb", label: "Tomás Bell" },
  { value: "sn", label: "Saoirse Nolan" },
  { value: "dv", label: "Dev Varma" },
];

const labelSuggestions = [
  "accessibility",
  "animation",
  "color",
  "documentation",
  "good first issue",
  "layout",
  "needs design",
  "regression",
  "typography",
];

/* ---------- Select ---------- */

function StatusSelect({ size = "m", defaultValue = null, disabled = false, label }) {
  return (
    <Select.Root items={statuses} defaultValue={defaultValue} disabled={disabled}>
      <Select.Trigger
        className={`ds-select-trigger ds-select-trigger-${size}`}
        aria-label={label}
      >
        <Select.Value className="ds-select-value" placeholder="Choose a status" />
        <Select.Icon className="ds-select-icon">
          <ChevronIcon size={size === "s" ? 16 : 20} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className="ds-popup-positioner"
          sideOffset={4}
          align="start"
          alignItemWithTrigger={false}
        >
          <Select.Popup className={`ds-popup ds-popup-${size}`}>
            <Select.List className="ds-popup-list">
              {statuses.map((status) => (
                <Select.Item key={status.value} value={status.value} className="ds-option">
                  <Select.ItemText className="ds-option-label">{status.label}</Select.ItemText>
                  <Select.ItemIndicator className="ds-option-check">
                    <CheckIcon size={20} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}

/* ---------- Combobox ---------- */

function RepositoryCombobox() {
  const [query, setQuery] = React.useState("");
  return (
    <Combobox.Root items={repositories} inputValue={query} onInputValueChange={setQuery}>
      <Combobox.InputGroup className="ds-field-group ds-field-group-m">
        <Combobox.Input
          className="ds-input ds-input-m"
          placeholder="Search repositories"
          aria-label="Repository"
        />
        <Combobox.Clear className="ds-field-action ds-field-clear" aria-label="Clear repository">
          <XIcon size={20} />
        </Combobox.Clear>
        <Combobox.Trigger className="ds-field-action ds-field-chevron" aria-label="Show all repositories">
          <ChevronIcon size={20} />
        </Combobox.Trigger>
      </Combobox.InputGroup>

      <Combobox.Portal>
        <Combobox.Positioner className="ds-popup-positioner" sideOffset={4} align="start">
          <Combobox.Popup className="ds-popup">
            <Combobox.Empty>
              <div className="ds-popup-empty-line">No repository matches “{query.trim()}”.</div>
            </Combobox.Empty>
            <Combobox.List className="ds-popup-list">
              {(repo) => (
                <Combobox.Item key={repo.value} value={repo} className="ds-option">
                  <MatchedLabel label={repo.label} query={query} />
                  <Combobox.ItemIndicator className="ds-option-check">
                    <CheckIcon size={20} />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

function ReviewerCombobox() {
  return (
    <Combobox.Root items={reviewers} multiple defaultValue={[reviewers[0], reviewers[2]]}>
      <Combobox.InputGroup className="ds-field-chips">
        <Combobox.Chips className="ds-field-chips-list">
          <Combobox.Value>
            {(selected) => (
              <React.Fragment>
                {selected.map((person) => (
                  <Combobox.Chip key={person.value} className="ds-chip" aria-label={person.label}>
                    <span className="ds-chip-label">{person.label}</span>
                    <Combobox.ChipRemove
                      className="ds-chip-remove"
                      aria-label={`Remove ${person.label}`}
                    >
                      <XIcon size={16} />
                    </Combobox.ChipRemove>
                  </Combobox.Chip>
                ))}
                <Combobox.Input
                  className="ds-chip-input"
                  aria-label="Reviewers"
                  placeholder={selected.length > 0 ? "" : "Add a reviewer"}
                />
              </React.Fragment>
            )}
          </Combobox.Value>
        </Combobox.Chips>
      </Combobox.InputGroup>

      <Combobox.Portal>
        <Combobox.Positioner className="ds-popup-positioner" sideOffset={4} align="start">
          <Combobox.Popup className="ds-popup">
            <Combobox.Empty>
              <div className="ds-popup-empty-line">Nobody on the team matches that.</div>
            </Combobox.Empty>
            <Combobox.List className="ds-popup-list">
              {(person) => (
                <Combobox.Item key={person.value} value={person} className="ds-option">
                  <span className="ds-option-label">{person.label}</span>
                  <Combobox.ItemIndicator className="ds-option-check">
                    <CheckIcon size={20} />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

/* ---------- Autocomplete ---------- */

function LabelAutocomplete() {
  const [value, setValue] = React.useState("");
  return (
    <Autocomplete.Root items={labelSuggestions} value={value} onValueChange={setValue}>
      <Autocomplete.Input
        className="ds-input ds-input-m"
        placeholder="Add a label"
        aria-label="Label"
      />
      <Autocomplete.Portal>
        <Autocomplete.Positioner className="ds-popup-positioner" sideOffset={4} align="start">
          <Autocomplete.Popup className="ds-popup ds-popup-suggestions">
            <Autocomplete.List className="ds-popup-list">
              {(suggestion) => (
                <Autocomplete.Item key={suggestion} value={suggestion} className="ds-option">
                  <MatchedLabel label={suggestion} query={value} />
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
          </Autocomplete.Popup>
        </Autocomplete.Positioner>
      </Autocomplete.Portal>
    </Autocomplete.Root>
  );
}

/* ---------- Number field ---------- */

function Quantity({ size = "m", defaultValue = 4, min, max, disabled = false, unit, label, width }) {
  return (
    <NumberField.Root defaultValue={defaultValue} min={min} max={max} disabled={disabled}>
      <NumberField.Group className={`ds-number-field ds-number-field-${size}`}>
        <NumberField.Decrement className="ds-number-stepper">
          <MinusIcon size={16} />
        </NumberField.Decrement>
        <NumberField.Input
          className={width ? `ds-number-input ds-number-input-${width}` : "ds-number-input"}
          aria-label={label}
        />
        {unit ? <span className="ds-number-unit">{unit}</span> : null}
        <NumberField.Increment className="ds-number-stepper">
          <PlusIcon size={16} />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
}

/* ---------- Section ---------- */

export function ChoosersSection() {
  return (
    <Section
      eyebrow="Choosers"
      title="Select, combobox, autocomplete, number field"
      note="A select for a short closed list, a combobox when the list is long enough that typing has to filter it, an autocomplete when the person’s own words are a valid answer, and a number field for a bounded quantity somebody would really nudge one step at a time."
    >
      <Row label="Select · trigger sizes" align="flex-end">
        <Col width={140}>
          <StatusSelect size="s" defaultValue="open" label="Status, small" />
        </Col>
        <Col width={180}>
          <StatusSelect size="m" defaultValue="in-review" label="Status, medium" />
        </Col>
        <Col width={220}>
          <StatusSelect size="l" defaultValue="merged" label="Status, large" />
        </Col>
      </Row>

      <Row label="Select · states">
        <Col width={220}>
          <StatusSelect label="Status, empty" />
        </Col>
        <Col width={220}>
          <StatusSelect defaultValue="changes" label="Status, chosen" />
        </Col>
        <Col width={220}>
          <StatusSelect defaultValue="closed" disabled label="Status, disabled" />
        </Col>
      </Row>

      <Row label="Combobox · typing filters">
        <Col>
          <RepositoryCombobox />
        </Col>
      </Row>

      <Row label="Combobox · multiple" align="flex-start">
        <Col>
          <ReviewerCombobox />
        </Col>
      </Row>

      <Row label="Autocomplete · free text">
        <Col>
          <LabelAutocomplete />
        </Col>
      </Row>

      <Row label="Number field · sizes" align="flex-end">
        <Quantity size="s" defaultValue={2} width="narrow" label="Seats, small" />
        <Quantity size="m" defaultValue={12} width="narrow" label="Seats, medium" />
        <Quantity size="l" defaultValue={120} label="Seats, large" />
      </Row>

      <Row label="Number field · limits and units">
        <Quantity defaultValue={10} min={1} max={10} width="narrow" label="Quantity, at its maximum" />
        <Quantity defaultValue={30} min={5} max={180} unit="min" label="Session length in minutes" />
        <Quantity defaultValue={8} disabled width="narrow" label="Quantity, disabled" />
      </Row>
    </Section>
  );
}
