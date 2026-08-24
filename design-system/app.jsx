/* Demo sheet for the design system reference implementation.
   Behavior and accessibility come from Base UI; the visuals implement
   the specs in guide/design-system/. Rebuild with: npm run build:ds */

import * as React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { Dialog } from "@base-ui/react/dialog";
import { Switch } from "@base-ui/react/switch";
import { Section, Row } from "./sheet.jsx";
import { SelectionSection } from "./parts/selection.jsx";
import { ChoosersSection } from "./parts/choosers.jsx";
import { FormSection } from "./parts/form.jsx";
import { OverlaysSection } from "./parts/overlays.jsx";
import { MenusSection } from "./parts/menus.jsx";
import { DisclosureSection } from "./parts/disclosure.jsx";
import { FeedbackSection } from "./parts/feedback.jsx";

function Buttons() {
  return (
    <Section
      eyebrow="Button"
      title="Five sizes, three styles"
      note="Heights 24–56 by name, XS through XL; press scales to 0.9. One primary per surface."
    >
      <Row label="Sizes on a shared keyline" align="flex-end">
        <Button className="ds-button ds-button-xs ds-button-secondary">XS</Button>
        <Button className="ds-button ds-button-s ds-button-secondary">S</Button>
        <Button className="ds-button ds-button-m ds-button-secondary">M</Button>
        <Button className="ds-button ds-button-l ds-button-secondary">L</Button>
        <Button className="ds-button ds-button-xl ds-button-secondary">XL</Button>
      </Row>
      <Row label="Styles">
        <Button className="ds-button ds-button-m ds-button-primary">Primary</Button>
        <Button className="ds-button ds-button-m ds-button-secondary">Secondary</Button>
        <Button className="ds-button ds-button-m ds-button-tertiary">Tertiary</Button>
        <Button className="ds-button ds-button-m ds-button-ghost">Text only</Button>
        <Button className="ds-button ds-button-m ds-button-secondary" disabled>Disabled</Button>
      </Row>
    </Section>
  );
}

function Inputs() {
  return (
    <Section
      eyebrow="Input"
      title="Button heights, shared interiors"
      note="A 40px input and a 40px button hold their contents with the same padding. A nested button acts on the content within; its radius is 10 − 4 = 6."
    >
      <Row label="Sizes">
        <div className="sheet-col">
          <Input className="ds-input ds-input-s" placeholder="Small — 32" />
          <Input className="ds-input ds-input-m" placeholder="Medium — 40" />
          <Input className="ds-input ds-input-l" placeholder="Large — 48" />
        </div>
      </Row>
      <Row label="Nested action">
        <div className="sheet-col">
          <div className="ds-input-group ds-input-group-m">
            <Input className="ds-input ds-input-m" placeholder="Reply…" />
            <Button className="ds-button ds-button-primary">Send</Button>
          </div>
        </div>
      </Row>
    </Section>
  );
}

function Modal() {
  return (
    <Section
      eyebrow="Modal"
      title="24 padding, scrim beneath"
      note="Interior padding 24 on all sides; a 20% white scrim pairs with the shadow. Title at the top, primary action at the bottom."
    >
      <Row label="Live">
        <Dialog.Root>
          <Dialog.Trigger className="ds-button ds-button-m ds-button-secondary">
            Open modal
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="ds-scrim" />
            <Dialog.Popup className="ds-modal">
              <Dialog.Title className="ds-modal-title">Clear this draft?</Dialog.Title>
              <p className="ds-modal-subtitle">The reply you started will be discarded.</p>
              <Dialog.Description className="ds-modal-body">
                Drafts aren’t saved anywhere. If you clear it, you’ll start the next
                reply from scratch.
              </Dialog.Description>
              <div className="ds-modal-actions">
                <Dialog.Close className="ds-button ds-button-m ds-button-tertiary">
                  Keep draft
                </Dialog.Close>
                <Dialog.Close className="ds-button ds-button-m ds-button-primary">
                  Clear it
                </Dialog.Close>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </Row>
    </Section>
  );
}

function Switches() {
  const [notifications, setNotifications] = React.useState(true);
  return (
    <Section
      eyebrow="Switch"
      title="24 track, 20 thumb"
      note="The track is the 24px touch minimum; the thumb is the workhorse icon size. The thumb is draggable, so it carries a small shadow."
    >
      <Row label="Off and on">
        <Switch.Root className="ds-switch" defaultChecked={false} aria-label="Example switch, off">
          <Switch.Thumb className="ds-switch-thumb" />
        </Switch.Root>
        <Switch.Root
          className="ds-switch"
          checked={notifications}
          onCheckedChange={setNotifications}
          aria-label="Example switch, on"
        >
          <Switch.Thumb className="ds-switch-thumb" />
        </Switch.Root>
      </Row>
    </Section>
  );
}

function App() {
  return (
    <main className="sheet">
      <header className="sheet-header">
        <span className="eyebrow">Julian’s Guide to Interfaces</span>
        <h1>Design system components</h1>
        <p>
          Thirty-six components covering Base UI’s basic set, styled entirely from
          the guide’s methods. The written specs in <code>guide/design-system/</code>
          are the source of truth—on platforms where this code can’t run, they are
          the visual spec to implement natively. Every value is a scaffold.
        </p>
      </header>
      <Buttons />
      <Inputs />
      <SelectionSection />
      <ChoosersSection />
      <FormSection />
      <Modal />
      <OverlaysSection />
      <MenusSection />
      <DisclosureSection />
      <FeedbackSection />
      <Switches />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
