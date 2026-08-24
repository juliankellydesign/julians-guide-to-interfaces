/* Menus and navigation — menu, context menu, menubar, navigation menu, toolbar.
   Implements guide/design-system/{menu,context-menu,menubar,navigation-menu,toolbar}.md.
   Behavior and accessibility come from Base UI; the visuals implement the specs. */

import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Menu } from "@base-ui/react/menu";
import { ContextMenu } from "@base-ui/react/context-menu";
import { Menubar } from "@base-ui/react/menubar";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { Toolbar } from "@base-ui/react/toolbar";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Toggle } from "@base-ui/react/toggle";
import { Tooltip } from "@base-ui/react/tooltip";

/* ---------- Icons ----------
   One 20-unit grid. The menu draws them at 20 (16 in a dense popup), the
   toolbar at 16 for S controls and 20 for M; the CSS sets the size. */

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const RerunIcon = (
  <Icon>
    <path d="M16.5 10a6.5 6.5 0 1 1-1.9-4.6" />
    <path d="M16.6 2.4v3.4h-3.4" />
  </Icon>
);
const CopyIcon = (
  <Icon>
    <rect x="7" y="7" width="9" height="9" rx="2" />
    <path d="M13 4.5H6a1.5 1.5 0 0 0-1.5 1.5v7" />
  </Icon>
);
const DownloadIcon = (
  <Icon>
    <path d="M10 3v9" />
    <path d="M6.5 8.5 10 12l3.5-3.5" />
    <path d="M4 14.5V16h12v-1.5" />
  </Icon>
);
const PinIcon = (
  <Icon>
    <path d="M8 2.5h4" />
    <path d="M9 2.5v5L6.5 11h7L11 7.5v-5" />
    <path d="M10 11v6.5" />
  </Icon>
);
const CancelIcon = (
  <Icon>
    <circle cx="10" cy="10" r="6.5" />
    <path d="M7.5 7.5 12.5 12.5" />
    <path d="M12.5 7.5 7.5 12.5" />
  </Icon>
);
const TrashIcon = (
  <Icon>
    <path d="M4.5 5.5h11" />
    <path d="M8 5.5V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5" />
    <path d="M6 5.5 6.7 16a1 1 0 0 0 1 .9h4.6a1 1 0 0 0 1-.9L14 5.5" />
  </Icon>
);
const PencilIcon = (
  <Icon>
    <path d="M13.5 3.5 16.5 6.5 7 16H4v-3z" />
  </Icon>
);
const OpenIcon = (
  <Icon>
    <path d="M11 3.5h5.5V9" />
    <path d="M16.5 3.5 9.5 10.5" />
    <path d="M14 12v3.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1H8" />
  </Icon>
);
const LockIcon = (
  <Icon>
    <rect x="4.5" y="9" width="11" height="7.5" rx="2" />
    <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
  </Icon>
);
const ForwardIcon = (
  <Icon>
    <path d="M10 16.5V4" />
    <path d="M5.5 8.5 10 4l4.5 4.5" />
  </Icon>
);
const BackwardIcon = (
  <Icon>
    <path d="M10 3.5V16" />
    <path d="M5.5 11.5 10 16l4.5-4.5" />
  </Icon>
);
const FileIcon = (
  <Icon>
    <path d="M11.5 2.5H6A1.5 1.5 0 0 0 4.5 4v12A1.5 1.5 0 0 0 6 17.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5z" />
    <path d="M11.5 2.5v4h4" />
  </Icon>
);
const ChevronRightIcon = (
  <Icon>
    <path d="M8 5l4 5-4 5" />
  </Icon>
);
const ChevronDownIcon = (
  <Icon>
    <path d="M5.5 8 10 12.5 14.5 8" />
  </Icon>
);
const AlignLeftIcon = (
  <Icon>
    <path d="M3.5 5h13M3.5 8.5h8M3.5 12h13M3.5 15.5h8" />
  </Icon>
);
const AlignCenterIcon = (
  <Icon>
    <path d="M3.5 5h13M6 8.5h8M3.5 12h13M6 15.5h8" />
  </Icon>
);
const AlignRightIcon = (
  <Icon>
    <path d="M3.5 5h13M8.5 8.5h8M3.5 12h13M8.5 15.5h8" />
  </Icon>
);
const LinkIcon = (
  <Icon>
    <path d="M8.5 11.5a3 3 0 0 0 4.2 0l2.3-2.3a3 3 0 0 0-4.2-4.2l-1 1" />
    <path d="M11.5 8.5a3 3 0 0 0-4.2 0L5 10.8a3 3 0 0 0 4.2 4.2l1-1" />
  </Icon>
);
const ImageIcon = (
  <Icon>
    <rect x="3" y="4" width="14" height="12" rx="2" />
    <circle cx="7.5" cy="8" r="1.2" />
    <path d="M4 14.5 8 10.5l3 3 2.5-2 2.5 3" />
  </Icon>
);
const CodeIcon = (
  <Icon>
    <path d="M7 6.5 3.5 10 7 13.5" />
    <path d="M13 6.5 16.5 10 13 13.5" />
  </Icon>
);
const EllipsisIcon = (
  <Icon>
    <circle cx="5" cy="10" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="10" cy="10" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10" r="1.1" fill="currentColor" stroke="none" />
  </Icon>
);
const TableIcon = (
  <Icon>
    <rect x="3.5" y="4.5" width="13" height="11" rx="1.5" />
    <path d="M3.5 8.5h13" />
    <path d="M8.5 8.5v7" />
  </Icon>
);
const NoteIcon = (
  <Icon>
    <path d="M4.5 5.5h11M4.5 10h11M4.5 14.5h7" />
  </Icon>
);
const BreakIcon = (
  <Icon>
    <path d="M3.5 10h13" />
    <path d="M6 6V3.5h8V6" />
    <path d="M6 14v2.5h8V14" />
  </Icon>
);
const CursorIcon = (
  <Icon>
    <path d="M5 3.5 15 9.5l-4.4 1.2L8.6 15z" />
  </Icon>
);
const PenIcon = (
  <Icon>
    <path d="M13.5 3.5 16.5 6.5 7 16H4v-3z" />
    <path d="M11.8 5.2 14.8 8.2" />
  </Icon>
);
const ShapeIcon = (
  <Icon>
    <rect x="4" y="4" width="12" height="12" rx="2" />
  </Icon>
);
const TypeIcon = (
  <Icon>
    <path d="M4.5 5h11" />
    <path d="M10 5v11" />
  </Icon>
);

/* ---------- Shared menu parts ----------
   ContextMenu.Item, Menubar's Menu.Item and Menu.Item are the same component,
   so one row helper serves all three popups: one popup language, used again. */

function MenuItem({ icon, children, shortcut, destructive, disabled, onClick }) {
  return (
    <Menu.Item
      className={
        "ds-menu-item" + (destructive ? " ds-menu-item-destructive" : "")
      }
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? <span className="ds-menu-item-icon">{icon}</span> : null}
      <span className="ds-menu-item-label">{children}</span>
      {shortcut ? <span className="ds-menu-shortcut">{shortcut}</span> : null}
    </Menu.Item>
  );
}

function Submenu({ icon, label, children }) {
  return (
    <Menu.SubmenuRoot>
      <Menu.SubmenuTrigger className="ds-menu-item">
        {icon ? <span className="ds-menu-item-icon">{icon}</span> : null}
        <span className="ds-menu-item-label">{label}</span>
        <span className="ds-menu-chevron">{ChevronRightIcon}</span>
      </Menu.SubmenuTrigger>
      <Menu.Portal>
        {/* A submenu opens offset 4 from its parent popup, same language. */}
        <Menu.Positioner
          className="ds-menu-positioner"
          sideOffset={4}
          alignOffset={-4}
        >
          <Menu.Popup className="ds-menu-popup">{children}</Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.SubmenuRoot>
  );
}

/* ---------- Menu ---------- */

function RunMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger className="ds-button ds-button-m ds-button-secondary">
        Run actions
      </Menu.Trigger>
      <Menu.Portal>
        {/* Anchored to its trigger, offset 4. No scrim, no arrow. */}
        <Menu.Positioner
          className="ds-menu-positioner"
          sideOffset={4}
          align="start"
        >
          <Menu.Popup className="ds-menu-popup">
            <Menu.Group>
              <Menu.GroupLabel className="ds-menu-group-label">
                This run
              </Menu.GroupLabel>
              <MenuItem icon={RerunIcon} shortcut="⌘R">
                Rerun
              </MenuItem>
              <MenuItem icon={CopyIcon} shortcut="⇧⌘C">
                Copy run ID
              </MenuItem>
              <Submenu icon={DownloadIcon} label="Download logs">
                <MenuItem>Plain text</MenuItem>
                <MenuItem>JSON</MenuItem>
                <MenuItem>Archive (.zip)</MenuItem>
              </Submenu>
            </Menu.Group>
            <Menu.Group>
              <Menu.GroupLabel className="ds-menu-group-label">
                This pipeline
              </Menu.GroupLabel>
              <MenuItem icon={PinIcon}>Pin to the top</MenuItem>
              {/* Finished runs cannot be cancelled — disabled in place, so the
                  shape of the menu never changes between openings. */}
              <MenuItem icon={CancelIcon} disabled>
                Cancel run
              </MenuItem>
              <MenuItem icon={TrashIcon} shortcut="⌘⌫" destructive>
                Delete run
              </MenuItem>
            </Menu.Group>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function LayerMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger className="ds-button ds-button-s ds-button-tertiary">
        Layer
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          className="ds-menu-positioner"
          sideOffset={4}
          align="start"
        >
          <Menu.Popup className="ds-menu-popup ds-menu-popup-s">
            <MenuItem icon={ForwardIcon} shortcut="⌘]">
              Bring forward
            </MenuItem>
            <MenuItem icon={BackwardIcon} shortcut="⌘[">
              Send backward
            </MenuItem>
            {/* One separator, where the group boundary is real. */}
            <Menu.Separator className="ds-menu-separator" />
            <MenuItem icon={CopyIcon} shortcut="⌘D">
              Duplicate
            </MenuItem>
            <MenuItem icon={LockIcon}>Lock layer</MenuItem>
            <MenuItem icon={TrashIcon} shortcut="⌫" destructive>
              Delete layer
            </MenuItem>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

/* ---------- Context menu ----------
   The target wears the focus ring for as long as its menu is open, so with two
   rows under the cursor it is clear which one the menu belongs to. */

function FileRow({ name, size }) {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="ds-context-target">
        <span className="ds-context-target-icon">{FileIcon}</span>
        {name}
        <span className="ds-context-target-meta">{size}</span>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Positioner className="ds-menu-positioner">
          <ContextMenu.Popup className="ds-menu-popup">
            <MenuItem icon={OpenIcon}>Open</MenuItem>
            <MenuItem icon={PencilIcon} shortcut="↩">
              Rename
            </MenuItem>
            <MenuItem icon={CopyIcon} shortcut="⌘D">
              Duplicate
            </MenuItem>
            <MenuItem icon={DownloadIcon}>Download</MenuItem>
            <ContextMenu.Separator className="ds-menu-separator" />
            <MenuItem icon={TrashIcon} shortcut="⌘⌫" destructive>
              Move to trash
            </MenuItem>
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}

/* ---------- Menubar ----------
   Popups are the menu's, at S: 32 items with 14 text and 16 icons. Offset 8
   from the 24 trigger puts the popup 4 below the 32 bar. */

function MenubarMenu({ label, children }) {
  return (
    <Menu.Root>
      <Menu.Trigger className="ds-menubar-trigger">{label}</Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          className="ds-menu-positioner"
          sideOffset={8}
          align="start"
        >
          <Menu.Popup className="ds-menu-popup ds-menu-popup-s">
            {children}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function AppMenubar() {
  return (
    <div className="ds-menus-frame">
      <Menubar className="ds-menubar">
        <MenubarMenu label="File">
          <MenuItem shortcut="⌘N">New draft</MenuItem>
          <MenuItem shortcut="⌘O">Open…</MenuItem>
          <Submenu label="Export as">
            <MenuItem>PDF</MenuItem>
            <MenuItem>Markdown</MenuItem>
            <MenuItem>HTML</MenuItem>
          </Submenu>
          <Menu.Separator className="ds-menu-separator" />
          <MenuItem shortcut="⌘P">Print…</MenuItem>
        </MenubarMenu>
        <MenubarMenu label="Edit">
          <MenuItem shortcut="⌘Z">Undo</MenuItem>
          <MenuItem shortcut="⇧⌘Z">Redo</MenuItem>
          <Menu.Separator className="ds-menu-separator" />
          <MenuItem shortcut="⌘X">Cut</MenuItem>
          <MenuItem shortcut="⌘C">Copy</MenuItem>
          <MenuItem shortcut="⌘V" disabled>
            Paste
          </MenuItem>
        </MenubarMenu>
        <MenubarMenu label="View">
          <MenuItem shortcut="⌘+">Zoom in</MenuItem>
          <MenuItem shortcut="⌘−">Zoom out</MenuItem>
          <Menu.Separator className="ds-menu-separator" />
          <MenuItem shortcut="⌃⌘F">Enter full screen</MenuItem>
        </MenubarMenu>
      </Menubar>
      <p className="ds-menus-frame-body">
        The bar spans the top of the window, above any toolbar. Once one menu is
        open, moving across the bar switches menus without a second click.
      </p>
    </div>
  );
}

/* ---------- Navigation menu ---------- */

const platformLinks = [
  {
    title: "Pipelines",
    description: "Run checks on every push, in parallel.",
  },
  {
    title: "Environments",
    description: "Promote one build from staging to production.",
  },
  {
    title: "Insights",
    description: "See where the minutes in a build go.",
  },
];

const integrationLinks = [
  { title: "GitHub", description: "Checks and required status on every PR." },
  { title: "Slack", description: "Deploy notices in the channel that owns them." },
  { title: "Terraform", description: "Plan and apply from a reviewed pipeline." },
];

const developerLinks = [
  { title: "Documentation", description: "Guides, tutorials, and the CLI reference." },
  { title: "API reference", description: "Every endpoint, with copyable examples." },
  { title: "Status", description: "Current uptime and past incidents." },
];

function NavLinks({ items }) {
  return (
    <ul className="ds-nav-links">
      {items.map((item) => (
        <li key={item.title}>
          <NavigationMenu.Link className="ds-nav-link" href="#">
            <span className="ds-nav-link-title">{item.title}</span>
            <span className="ds-nav-link-description">{item.description}</span>
          </NavigationMenu.Link>
        </li>
      ))}
    </ul>
  );
}

function SiteNavigation() {
  return (
    <NavigationMenu.Root className="ds-nav">
      <div className="ds-nav-bar">
        <NavigationMenu.List className="ds-nav-list">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="ds-nav-trigger">
              Product
              <NavigationMenu.Icon className="ds-nav-icon">
                {ChevronDownIcon}
              </NavigationMenu.Icon>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="ds-nav-content">
              <div className="ds-nav-columns">
                <div>
                  <h3 className="ds-nav-column-heading">Platform</h3>
                  <NavLinks items={platformLinks} />
                </div>
                <div>
                  <h3 className="ds-nav-column-heading">Integrations</h3>
                  <NavLinks items={integrationLinks} />
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="ds-nav-trigger">
              Developers
              <NavigationMenu.Icon className="ds-nav-icon">
                {ChevronDownIcon}
              </NavigationMenu.Icon>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="ds-nav-content ds-nav-content-narrow">
              <div className="ds-nav-columns ds-nav-columns-one">
                <div>
                  <h3 className="ds-nav-column-heading">Build with us</h3>
                  <NavLinks items={developerLinks} />
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* A trigger that is just a link takes no chevron — the chevron is
              what distinguishes the two. Current section: weight only. */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="ds-nav-trigger ds-nav-current"
              href="#"
              aria-current="page"
            >
              Pricing
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="ds-nav-trigger" href="#">
              Changelog
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </div>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          className="ds-nav-positioner"
          sideOffset={4}
          align="start"
          collisionPadding={16}
        >
          <NavigationMenu.Popup className="ds-nav-popup">
            <NavigationMenu.Viewport className="ds-nav-viewport" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}

/* ---------- Toolbar ----------
   Every icon-only control gets a tooltip: if it cannot be named in two words,
   it needs a label instead. */

function Tip({ label, children }) {
  return (
    <Tooltip.Root>
      {children}
      <Tooltip.Portal>
        <Tooltip.Positioner
          className="ds-toolbar-tip-positioner"
          side="top"
          sideOffset={4}
        >
          <Tooltip.Popup className="ds-toolbar-tip">{label}</Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

function ToolbarIconButton({ label, icon, disabled }) {
  return (
    <Tip label={label}>
      <Toolbar.Button
        className="ds-toolbar-button ds-toolbar-button-icon"
        render={<Tooltip.Trigger />}
        aria-label={label}
        disabled={disabled}
      >
        {icon}
      </Toolbar.Button>
    </Tip>
  );
}

function ToolbarToggle({ label, icon, value }) {
  return (
    <Tip label={label}>
      <Toolbar.Button
        className="ds-toolbar-button ds-toolbar-button-icon"
        render={<Toggle render={<Tooltip.Trigger />} />}
        value={value}
        aria-label={label}
      >
        {icon}
      </Toolbar.Button>
    </Tip>
  );
}

function OverflowMenu() {
  return (
    <Menu.Root>
      <Toolbar.Button
        className="ds-toolbar-button ds-toolbar-button-icon"
        render={<Menu.Trigger />}
        aria-label="More insert options"
      >
        {EllipsisIcon}
      </Toolbar.Button>
      <Menu.Portal>
        <Menu.Positioner
          className="ds-menu-positioner"
          sideOffset={4}
          align="end"
        >
          <Menu.Popup className="ds-menu-popup ds-menu-popup-s">
            <MenuItem icon={TableIcon}>Insert table</MenuItem>
            <MenuItem icon={NoteIcon}>Insert footnote</MenuItem>
            <MenuItem icon={BreakIcon}>Insert page break</MenuItem>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

function EditorToolbar() {
  const [alignment, setAlignment] = React.useState(["left"]);
  return (
    <div className="ds-menus-frame">
      <Toolbar.Root className="ds-toolbar ds-toolbar-docked">
        <ToggleGroup
          className="ds-toolbar-group"
          aria-label="Alignment"
          value={alignment}
          onValueChange={(next) => next.length > 0 && setAlignment(next)}
        >
          <ToolbarToggle label="Align left" value="left" icon={AlignLeftIcon} />
          <ToolbarToggle
            label="Align center"
            value="center"
            icon={AlignCenterIcon}
          />
          <ToolbarToggle
            label="Align right"
            value="right"
            icon={AlignRightIcon}
          />
        </ToggleGroup>

        <div className="ds-toolbar-divider" role="presentation" />

        <Toolbar.Group className="ds-toolbar-group" aria-label="Insert">
          <ToolbarIconButton label="Insert link" icon={LinkIcon} />
          <ToolbarIconButton label="Insert image" icon={ImageIcon} />
          {/* Disabled in place: a toolbar whose controls move as state changes
              cannot be learned. */}
          <ToolbarIconButton label="Insert code block" icon={CodeIcon} disabled />
          <OverflowMenu />
        </Toolbar.Group>

        <Toolbar.Button className="ds-toolbar-button ds-toolbar-button-primary ds-toolbar-trailing">
          Publish
        </Toolbar.Button>
      </Toolbar.Root>
      <p className="ds-menus-frame-body">
        The bar is docked to the top of the content it acts on, so it carries a
        border on that side only — and no shadow.
      </p>
    </div>
  );
}

function CanvasToolbar() {
  const [tool, setTool] = React.useState(["pen"]);
  return (
    <div className="ds-menus-canvas">
      <Toolbar.Root className="ds-toolbar ds-toolbar-touch ds-toolbar-floating">
        <ToggleGroup
          className="ds-toolbar-group"
          aria-label="Tool"
          value={tool}
          onValueChange={(next) => next.length > 0 && setTool(next)}
        >
          <ToolbarToggle label="Select" value="select" icon={CursorIcon} />
          <ToolbarToggle label="Draw" value="pen" icon={PenIcon} />
          <ToolbarToggle label="Shape" value="shape" icon={ShapeIcon} />
          <ToolbarToggle label="Text" value="text" icon={TypeIcon} />
        </ToggleGroup>

        <div className="ds-toolbar-divider" role="presentation" />

        <Toolbar.Group className="ds-toolbar-group" aria-label="Selection">
          <ToolbarIconButton label="Duplicate" icon={CopyIcon} />
          <ToolbarIconButton label="Delete" icon={TrashIcon} disabled />
        </Toolbar.Group>
      </Toolbar.Root>
    </div>
  );
}

/* ---------- Section ---------- */

export function MenusSection() {
  return (
    <Section
      eyebrow="Menus and navigation"
      title="Menu, context menu, menubar, navigation, toolbar"
      note="Actions opened from a visible trigger, actions opened on the object you right-clicked, the complete index of an application's commands, the panels of links that make up a site's top-level wayfinding, and the shortlist of controls kept beside the content you are working on."
    >
      <Row label="Menu — 40 items, one popup language">
        <RunMenu />
      </Row>

      <Row label="Dense menu — 32 items for pointer tools">
        <LayerMenu />
      </Row>

      <Row label="Context menu — right-click a row" align="stretch">
        <Col width={420}>
          <FileRow name="quarterly-report.pdf" size="2.4 MB" />
          <FileRow name="brand-guidelines.pdf" size="8.1 MB" />
        </Col>
      </Row>

      <Row label="Menubar — 32 bar, 24 triggers" align="stretch">
        <Col width={520}>
          <AppMenubar />
        </Col>
      </Row>

      <Row label="Navigation menu — 64 bar, panel of links" align="stretch">
        <Col width={560}>
          <SiteNavigation />
        </Col>
      </Row>

      <Row label="Toolbar — docked, pointer sizes" align="stretch">
        <Col width={520}>
          <EditorToolbar />
        </Col>
      </Row>

      <Row label="Toolbar — floating, touch sizes" align="stretch">
        <Col width={520}>
          <CanvasToolbar />
        </Col>
      </Row>
    </Section>
  );
}
