import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Tabs } from "@base-ui/react/tabs";
import { Accordion } from "@base-ui/react/accordion";
import { Collapsible } from "@base-ui/react/collapsible";
import { ScrollArea } from "@base-ui/react/scroll-area";

/* Chevron: 20, drawn to point down and rotated 180° on open, so one glyph
   covers both states. */
function Chevron({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

function TabIcon({ children }) {
  return (
    <svg
      className="ds-tab-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ChartIcon = () => (
  <TabIcon>
    <path d="M4 20V10M10 20V4M16 20v-7" />
    <path d="M3 20h18" />
  </TabIcon>
);

const FileIcon = () => (
  <TabIcon>
    <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
    <path d="M13 3v6h6" />
  </TabIcon>
);

const ClockIcon = () => (
  <TabIcon>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.5 2" />
  </TabIcon>
);

function AccordionSectionItem({ value, title, children, disabled }) {
  return (
    <Accordion.Item className="ds-accordion-item" value={value} disabled={disabled}>
      <Accordion.Header className="ds-accordion-header">
        <Accordion.Trigger className="ds-accordion-trigger">
          {title}
          <Chevron className="ds-accordion-chevron" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className="ds-accordion-panel">
        <div className="ds-accordion-content">{children}</div>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

const TEAM = [
  ["Ana Ruiz", "Owner", "ana@northfield.co"],
  ["Marcus Bell", "Admin", "marcus@northfield.co"],
  ["Priya Raman", "Editor", "priya@northfield.co"],
  ["Tomás Oliveira", "Editor", "tomas@northfield.co"],
  ["Junie Park", "Viewer", "junie@northfield.co"],
  ["Wes Okonkwo", "Viewer", "wes@northfield.co"],
  ["Hanna Lindqvist", "Viewer", "hanna@northfield.co"],
  ["Cyrus Nazari", "Billing only", "cyrus@northfield.co"],
];

export function DisclosureSection() {
  return (
    <Section
      eyebrow="Disclosure"
      title="Tabs, accordion, collapsible, scroll area"
      note="Tabs for sibling views of one subject; an accordion for a stack of peer sections opened one or two at a time; a collapsible for a single block most people won’t need; a scroll area for a bounded region that scrolls on its own."
    >
      <Row label="Tabs — M, the default" align="stretch">
        <Tabs.Root className="ds-tabs" defaultValue="overview">
          <Tabs.List className="ds-tab-list">
            <Tabs.Tab className="ds-tab ds-tab-m" value="overview">
              Overview
            </Tabs.Tab>
            <Tabs.Tab className="ds-tab ds-tab-m" value="files">
              Files
            </Tabs.Tab>
            <Tabs.Tab className="ds-tab ds-tab-m" value="activity">
              Activity
            </Tabs.Tab>
            <Tabs.Indicator className="ds-tab-indicator" />
          </Tabs.List>
          <div className="ds-tab-panels">
            <Tabs.Panel className="ds-tab-panel" value="overview">
              Northfield Rebrand is 68% through its second milestone. Two reviews are
              waiting on Ana.
            </Tabs.Panel>
            <Tabs.Panel className="ds-tab-panel" value="files">
              41 files, 2.3 GB. The last upload was “Wordmark exploration v6.ai,”
              yesterday at 4:12 PM.
            </Tabs.Panel>
            <Tabs.Panel className="ds-tab-panel" value="activity">
              Marcus renamed the Type specimens folder, Priya closed three comments,
              and Tomás joined the project.
            </Tabs.Panel>
          </div>
        </Tabs.Root>
      </Row>

      <Row label="Sizes — the button heights, so the row lines up" align="stretch">
        <Col>
          <Tabs.Root className="ds-tabs" defaultValue="week">
            <Tabs.List className="ds-tab-list">
              <Tabs.Tab className="ds-tab ds-tab-s" value="day">
                Day
              </Tabs.Tab>
              <Tabs.Tab className="ds-tab ds-tab-s" value="week">
                Week
              </Tabs.Tab>
              <Tabs.Tab className="ds-tab ds-tab-s" value="month">
                Month
              </Tabs.Tab>
              <Tabs.Indicator className="ds-tab-indicator" />
            </Tabs.List>
          </Tabs.Root>
          <Tabs.Root className="ds-tabs" defaultValue="week">
            <Tabs.List className="ds-tab-list">
              <Tabs.Tab className="ds-tab ds-tab-m" value="day">
                Day
              </Tabs.Tab>
              <Tabs.Tab className="ds-tab ds-tab-m" value="week">
                Week
              </Tabs.Tab>
              <Tabs.Tab className="ds-tab ds-tab-m" value="month">
                Month
              </Tabs.Tab>
              <Tabs.Indicator className="ds-tab-indicator" />
            </Tabs.List>
          </Tabs.Root>
          <Tabs.Root className="ds-tabs" defaultValue="week">
            <Tabs.List className="ds-tab-list">
              <Tabs.Tab className="ds-tab ds-tab-l" value="day">
                Day
              </Tabs.Tab>
              <Tabs.Tab className="ds-tab ds-tab-l" value="week">
                Week
              </Tabs.Tab>
              <Tabs.Tab className="ds-tab ds-tab-l" value="month">
                Month
              </Tabs.Tab>
              <Tabs.Indicator className="ds-tab-indicator" />
            </Tabs.List>
          </Tabs.Root>
        </Col>
      </Row>

      <Row label="Icons lead the label, 6 apart" align="stretch">
        <Tabs.Root className="ds-tabs" defaultValue="reports">
          <Tabs.List className="ds-tab-list">
            <Tabs.Tab className="ds-tab ds-tab-m" value="reports">
              <ChartIcon />
              Reports
            </Tabs.Tab>
            <Tabs.Tab className="ds-tab ds-tab-m" value="exports">
              <FileIcon />
              Exports
            </Tabs.Tab>
            <Tabs.Tab className="ds-tab ds-tab-m" value="schedules" disabled>
              <ClockIcon />
              Schedules
            </Tabs.Tab>
            <Tabs.Indicator className="ds-tab-indicator" />
          </Tabs.List>
          <div className="ds-tab-panels">
            <Tabs.Panel className="ds-tab-panel" value="reports">
              Six saved reports. “Weekly revenue by region” ran this morning at 6:00.
            </Tabs.Panel>
            <Tabs.Panel className="ds-tab-panel" value="exports">
              Exports are kept for 30 days. The oldest one here expires on 12 September.
            </Tabs.Panel>
            <Tabs.Panel className="ds-tab-panel" value="schedules">
              Scheduling is off for this workspace.
            </Tabs.Panel>
          </div>
        </Tabs.Root>
      </Row>

      <Row label="Accordion — flush list, L rows" align="stretch">
        <Accordion.Root className="ds-accordion" defaultValue={["refunds"]}>
          <AccordionSectionItem value="refunds" title="How do refunds work?">
            <p>
              Ask for a refund within 30 days of the charge and we return the full
              amount to the original card. It lands in three to five business days.
            </p>
          </AccordionSectionItem>
          <AccordionSectionItem value="seats" title="What happens when I add a seat mid-month?">
            <p>
              You are charged a prorated amount for the days remaining in the billing
              period, and the seat renews with everyone else on the first.
            </p>
          </AccordionSectionItem>
          <AccordionSectionItem value="invoices" title="Can I get invoices sent somewhere else?">
            <p>
              Add a billing contact under Workspace settings. Invoices go to that
              address, and receipts still go to the person who paid.
            </p>
          </AccordionSectionItem>
          <AccordionSectionItem value="tax" title="Tax exemption" disabled>
            <p>Handled by your organization’s admin.</p>
          </AccordionSectionItem>
        </Accordion.Root>
      </Row>

      <Row label="Cards — radius 10, dividers gone" align="stretch">
        <Accordion.Root className="ds-accordion ds-accordion-cards" multiple defaultValue={["notifications"]}>
          <AccordionSectionItem value="notifications" title="Notifications">
            <p>
              Mentions and review requests reach you by email. Everything else stays
              in the inbox until you open it.
            </p>
          </AccordionSectionItem>
          <AccordionSectionItem value="sharing" title="Sharing and links">
            <p>
              Anyone with the link can view. Editing still requires an invitation to
              the workspace.
            </p>
          </AccordionSectionItem>
        </Accordion.Root>
      </Row>

      <Row label="Collapsible — a tertiary button, panel 8 below" align="stretch">
        <Collapsible.Root className="ds-collapsible">
          <Collapsible.Trigger className="ds-button ds-button-m ds-button-tertiary ds-collapsible-trigger">
            Advanced settings
            <Chevron className="ds-collapsible-chevron" />
          </Collapsible.Trigger>
          <Collapsible.Panel className="ds-collapsible-panel">
            <div className="ds-collapsible-content">
              <p>
                Requests retry twice before the job is marked failed. The webhook
                signing secret rotates every 90 days.
              </p>
              <p>
                Leaving these alone is the right call for almost every workspace.
              </p>
            </div>
          </Collapsible.Panel>
        </Collapsible.Root>
      </Row>

      <Row label="Scroll area — 6 thumb, 10 gutter" align="stretch">
        {/* The 168 height is the demo's, not the spec's: a scroll area is only
            ever as tall as the layout around it decides. */}
        <ScrollArea.Root className="ds-scroll-area ds-scroll-area-boxed" style={{ height: 168 }}>
          <ScrollArea.Viewport className="ds-scroll-viewport">
            <ScrollArea.Content className="ds-scroll-content">
              <table className="ds-scroll-table">
                <tbody>
                  {TEAM.map(([name, role, email]) => (
                    <tr key={email}>
                      <td>{name}</td>
                      <td>{role}</td>
                      <td>{email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar className="ds-scroll-bar">
            <ScrollArea.Thumb className="ds-scroll-thumb" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar className="ds-scroll-bar" orientation="horizontal">
            <ScrollArea.Thumb className="ds-scroll-thumb" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="ds-scroll-corner" />
        </ScrollArea.Root>
      </Row>
    </Section>
  );
}
