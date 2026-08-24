import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Popover } from "@base-ui/react/popover";
import { Tooltip } from "@base-ui/react/tooltip";
import { AlertDialog } from "@base-ui/react/alert-dialog";
import { Drawer } from "@base-ui/react/drawer";
import { Switch } from "@base-ui/react/switch";

/* Icons for the controls that carry no visible label — the case a tooltip is for. */
function Icon({ children, label }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      data-icon={label}
    >
      {children}
    </svg>
  );
}

const ArchiveIcon = (
  <Icon label="archive">
    <rect x="2" y="3" width="12" height="3" rx="1" />
    <path d="M3 6v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6" />
    <path d="M6.5 9h3" />
  </Icon>
);

const StarIcon = (
  <Icon label="star">
    <path d="M8 2.5l1.7 3.5 3.8.5-2.8 2.7.7 3.8L8 11.2 4.6 13l.7-3.8L2.5 6.5l3.8-.5z" />
  </Icon>
);

const LinkIcon = (
  <Icon label="link">
    <path d="M6.5 9.5a2.5 2.5 0 0 0 3.5 0l2-2a2.5 2.5 0 0 0-3.5-3.5l-.8.8" />
    <path d="M9.5 6.5a2.5 2.5 0 0 0-3.5 0l-2 2a2.5 2.5 0 0 0 3.5 3.5l.8-.8" />
  </Icon>
);

function IconButton({ children, label }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        className="ds-button ds-button-s ds-button-tertiary ds-overlay-icon-button"
        aria-label={label}
      >
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner className="ds-tooltip-positioner" side="top" sideOffset={4}>
          <Tooltip.Popup className="ds-tooltip">{label}</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

function FilterPopover() {
  const [failedOnly, setFailedOnly] = React.useState(true);
  const [includeArchived, setIncludeArchived] = React.useState(false);

  return (
    <Popover.Root>
      <Popover.Trigger className="ds-button ds-button-m ds-button-secondary">
        Filter runs
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className="ds-popover-positioner" sideOffset={4} align="start">
          <Popover.Popup className="ds-popover">
            <Popover.Title className="ds-popover-title">Filter runs</Popover.Title>
            <Popover.Description className="ds-popover-body">
              Narrows the table beneath. Nothing is waiting on you here.
            </Popover.Description>
            <div className="ds-popover-fields">
              <label className="ds-popover-field">
                Failed runs only
                <Switch.Root
                  className="ds-switch"
                  checked={failedOnly}
                  onCheckedChange={setFailedOnly}
                >
                  <Switch.Thumb className="ds-switch-thumb" />
                </Switch.Root>
              </label>
              <label className="ds-popover-field">
                Include archived
                <Switch.Root
                  className="ds-switch"
                  checked={includeArchived}
                  onCheckedChange={setIncludeArchived}
                >
                  <Switch.Thumb className="ds-switch-thumb" />
                </Switch.Root>
              </label>
            </div>
            <div className="ds-popover-actions">
              <button
                type="button"
                className="ds-button ds-button-s ds-button-ghost"
                onClick={() => {
                  setFailedOnly(false);
                  setIncludeArchived(false);
                }}
              >
                Reset
              </button>
              <Popover.Close className="ds-button ds-button-s ds-button-primary">
                Apply
              </Popover.Close>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

function DeleteAlert() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="ds-button ds-button-m ds-button-secondary">
        Delete 3 projects
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="ds-scrim" />
        <AlertDialog.Popup className="ds-modal ds-alert">
          <AlertDialog.Title className="ds-modal-title">Delete 3 projects?</AlertDialog.Title>
          <AlertDialog.Description className="ds-modal-body">
            Their runs, logs, and shared links go with them. This cannot be undone.
          </AlertDialog.Description>
          <div className="ds-alert-actions">
            <AlertDialog.Close className="ds-button ds-button-m ds-button-secondary">
              Cancel
            </AlertDialog.Close>
            <AlertDialog.Close className="ds-button ds-button-m ds-button-primary">
              Delete
            </AlertDialog.Close>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

function SideDrawer() {
  const [drafts, setDrafts] = React.useState(true);

  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger className="ds-button ds-button-m ds-button-secondary">
        Open side drawer
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="ds-drawer-scrim" />
        <Drawer.Viewport className="ds-drawer-viewport ds-drawer-viewport-side">
          <Drawer.Popup className="ds-drawer ds-drawer-side">
            <Drawer.Content className="ds-drawer-content">
              <Drawer.Title className="ds-drawer-title">Run settings</Drawer.Title>
              <Drawer.Description className="ds-drawer-subtitle">
                Applies to every run started from this project.
              </Drawer.Description>
              <div className="ds-drawer-body">
                <div className="ds-drawer-list">
                  <div className="ds-drawer-row">
                    Region
                    <span className="ds-drawer-row-value">us-east-1</span>
                  </div>
                  <div className="ds-drawer-row">
                    Timeout
                    <span className="ds-drawer-row-value">30 minutes</span>
                  </div>
                  <div className="ds-drawer-row">
                    Retries
                    <span className="ds-drawer-row-value">2</span>
                  </div>
                  <div className="ds-drawer-row">
                    Concurrency
                    <span className="ds-drawer-row-value">8 runs</span>
                  </div>
                  <label className="ds-drawer-row">
                    Keep draft runs
                    <Switch.Root
                      className="ds-switch"
                      checked={drafts}
                      onCheckedChange={setDrafts}
                    >
                      <Switch.Thumb className="ds-switch-thumb" />
                    </Switch.Root>
                  </label>
                </div>
              </div>
              <div className="ds-drawer-actions">
                <Drawer.Close className="ds-button ds-button-m ds-button-tertiary">
                  Cancel
                </Drawer.Close>
                <Drawer.Close className="ds-button ds-button-m ds-button-primary">
                  Save settings
                </Drawer.Close>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function BottomSheet() {
  return (
    <Drawer.Root swipeDirection="down">
      <Drawer.Trigger className="ds-button ds-button-m ds-button-secondary">
        Open bottom sheet
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="ds-drawer-scrim" />
        <Drawer.Viewport className="ds-drawer-viewport ds-drawer-viewport-bottom">
          <Drawer.Popup className="ds-drawer ds-drawer-bottom">
            <div className="ds-drawer-grabber" />
            <Drawer.Content className="ds-drawer-content">
              <Drawer.Title className="ds-drawer-title">Share this run</Drawer.Title>
              <Drawer.Description className="ds-drawer-subtitle">
                Anyone with the link can read the logs.
              </Drawer.Description>
              <div className="ds-drawer-body">
                <div className="ds-drawer-list">
                  <div className="ds-drawer-row">
                    Link access
                    <span className="ds-drawer-row-value">Anyone at Acme</span>
                  </div>
                  <div className="ds-drawer-row">
                    Expires
                    <span className="ds-drawer-row-value">In 7 days</span>
                  </div>
                </div>
              </div>
              <div className="ds-drawer-actions">
                <Drawer.Close className="ds-button ds-button-m ds-button-primary">
                  Copy link
                </Drawer.Close>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export function OverlaysSection() {
  return (
    <Section
      eyebrow="Overlays"
      title="Popover, tooltip, alert dialog, drawer"
      note="A popover holds secondary content anchored to the control that opened it, a tooltip names a control that carries no visible label, an alert dialog stands in front of something that cannot be undone, and a drawer takes an edge when the content runs longer than a centered box should."
    >
      <Row label="Popover — anchored, offset 4, no scrim">
        <FilterPopover />
      </Row>

      <Row label="Tooltip — text only, on hover and on focus">
        <Tooltip.Provider delay={400} closeDelay={0}>
          <IconButton label="Archive">{ArchiveIcon}</IconButton>
          <IconButton label="Star">{StarIcon}</IconButton>
          <IconButton label="Copy link">{LinkIcon}</IconButton>
        </Tooltip.Provider>
      </Row>

      <Row label="Alert dialog — the modal's surface, a narrower job">
        <DeleteAlert />
      </Row>

      <Row label="Drawer — full-bleed along one edge">
        <SideDrawer />
        <BottomSheet />
      </Row>

      <Row label="Not a popover" align="flex-start">
        <Col width={420}>
          <p className="ds-popover-body" style={{ margin: 0 }}>
            A label naming a control is a tooltip, and a tooltip is text only. A
            decision that must resolve before anything else continues is a modal, or
            an alert dialog when it cannot be walked back. A list of values to choose
            from is a select, which carries keyboard behavior a popover does not.
          </p>
        </Col>
      </Row>
    </Section>
  );
}
