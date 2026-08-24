import * as React from "react";
import { Section, Row, Col } from "../sheet.jsx";
import { Field } from "@base-ui/react/field";
import { Fieldset } from "@base-ui/react/fieldset";
import { Form } from "@base-ui/react/form";
import { OTPField } from "@base-ui/react/otp-field";

/* A slot per character. The first slot borrows the field's label; the rest
   announce their position so assistive technology can say where the caret is. */
function OtpSlots({ length, start = 0, end }) {
  const last = end ?? length;
  const slots = [];
  for (let index = start; index < last; index += 1) {
    slots.push(
      <OTPField.Input
        key={index}
        className="ds-otp-slot"
        aria-label={index === 0 ? undefined : `Character ${index + 1} of ${length}`}
      />,
    );
  }
  return slots;
}

/* A form that actually submits: validation on submit, a submitting moment the
   row does not resize through, and a failure that belongs to the whole
   submission rather than to any one field. */
function SignInForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState(null);
  const timer = React.useRef(null);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <Form
      className="ds-form"
      data-submitting={submitting ? "" : undefined}
      onSubmit={(event) => {
        event.preventDefault();
        setFormError(null);
        setSubmitting(true);
        timer.current = window.setTimeout(() => {
          setSubmitting(false);
          setFormError("We couldn’t reach the server. Check your connection and try again.");
        }, 900);
      }}
    >
      <Field.Root className="ds-field" name="email">
        <Field.Label className="ds-field-label">Work email</Field.Label>
        <Field.Description className="ds-field-description">
          Use the address your team invited.
        </Field.Description>
        <Field.Control
          type="email"
          required
          placeholder="you@company.com"
          className="ds-input ds-input-m ds-field-control"
        />
        <Field.Error className="ds-field-message" match="valueMissing">
          Enter the email you signed up with.
        </Field.Error>
        <Field.Error className="ds-field-message" match="typeMismatch">
          Enter a complete email address, like you@company.com.
        </Field.Error>
      </Field.Root>

      <Field.Root className="ds-field" name="password">
        <Field.Label className="ds-field-label">Password</Field.Label>
        <Field.Control
          type="password"
          required
          minLength={8}
          placeholder="At least 8 characters"
          className="ds-input ds-input-m ds-field-control"
        />
        <Field.Error className="ds-field-message" match="valueMissing">
          Enter your password.
        </Field.Error>
        <Field.Error className="ds-field-message" match="tooShort">
          Passwords are at least 8 characters.
        </Field.Error>
      </Field.Root>

      {formError ? <p className="ds-form-error">{formError}</p> : null}

      {/* Cancel leads the submit, both M, aligned to the form's leading keyline. */}
      <div className="ds-form-actions">
        <button type="button" className="ds-button ds-button-m ds-button-secondary">
          Cancel
        </button>
        <button
          type="submit"
          className="ds-button ds-button-m ds-button-primary"
          disabled={submitting}
        >
          {submitting ? <span className="ds-form-spinner" aria-hidden="true" /> : null}
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </div>
    </Form>
  );
}

/* Six digits, then the code is checked. Completion is the submit here — there
   is nothing left to press once the last slot is filled. */
function VerificationField() {
  const [verifying, setVerifying] = React.useState(false);
  const timer = React.useRef(null);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <Field.Root className="ds-field" name="code">
      <Field.Label className="ds-field-label">Verification code</Field.Label>
      <Field.Description className="ds-field-description">
        Enter the 6-digit code we texted to •••• 4417.
      </Field.Description>
      <OTPField.Root
        className="ds-otp ds-field-control"
        length={6}
        data-verifying={verifying ? "" : undefined}
        onValueComplete={() => {
          setVerifying(true);
          timer.current = window.setTimeout(() => setVerifying(false), 1200);
        }}
      >
        <OtpSlots length={6} />
      </OTPField.Root>
    </Field.Root>
  );
}

export function FormSection() {
  return (
    <Section
      eyebrow="Forms"
      title="Field, fieldset, form, OTP"
      note="A field binds one label, description, and message to one control; a fieldset groups the fields that answer one question together; a form owns the submit and the error that belongs to the whole submission; an OTP field takes a code of known, fixed length."
    >
      <Row label="Field — label 16, description 4 below, control 8, message 6" align="flex-start">
        <Col>
          <Field.Root className="ds-field" name="workspace">
            <Field.Label className="ds-field-label">Workspace name</Field.Label>
            <Field.Description className="ds-field-description">
              People see this at the top of every page you share.
            </Field.Description>
            <Field.Control
              defaultValue="Northwind Design"
              className="ds-input ds-input-m ds-field-control"
            />
          </Field.Root>
        </Col>
      </Row>

      <Row label="Mark whichever set is smaller — not an asterisk on every label" align="flex-start">
        <Col>
          <div className="ds-field-stack">
            <Field.Root className="ds-field" name="legalName">
              <Field.Label className="ds-field-label">Legal business name</Field.Label>
              <Field.Control
                placeholder="Northwind Design Ltd"
                className="ds-input ds-input-m ds-field-control"
              />
            </Field.Root>
            <Field.Root className="ds-field" name="tradingName">
              <Field.Label className="ds-field-label">
                Trading name
                <span className="ds-field-marker">Optional</span>
              </Field.Label>
              <Field.Control
                placeholder="Northwind"
                className="ds-input ds-input-m ds-field-control"
              />
            </Field.Root>
          </div>
        </Col>
      </Row>

      <Row label="Error — red 600 border and message, replacing the description" align="flex-start">
        <Col>
          <Field.Root className="ds-field" name="billingEmail" invalid>
            <Field.Label className="ds-field-label">Billing email</Field.Label>
            <Field.Description className="ds-field-description">
              Invoices and receipts go here.
            </Field.Description>
            <Field.Control
              defaultValue="julian@gmail.com"
              className="ds-input ds-input-m ds-field-control"
            />
            <Field.Error className="ds-field-message" match>
              Enter a work email address. Billing can’t use a personal domain.
            </Field.Error>
          </Field.Root>
        </Col>
      </Row>

      <Row label="Disabled — 40% across label, description, control, and message" align="flex-start">
        <Col>
          <Field.Root className="ds-field" name="planSeats" disabled>
            <Field.Label className="ds-field-label">Seats</Field.Label>
            <Field.Description className="ds-field-description">
              Your admin sets the seat count for this workspace.
            </Field.Description>
            <Field.Control defaultValue="24" className="ds-input ds-input-m ds-field-control" />
          </Field.Root>
        </Col>
      </Row>

      <Row label="Fieldset — a legend names what the group collects; 19 medium" align="flex-start">
        <Col width={420}>
          <Fieldset.Root className="ds-fieldset">
            <Fieldset.Legend className="ds-fieldset-legend">Shipping address</Fieldset.Legend>
            <p className="ds-fieldset-description">
              We only ship hardware to a street address.
            </p>
            <div className="ds-fieldset-fields">
              <Field.Root className="ds-field" name="street">
                <Field.Label className="ds-field-label">Street</Field.Label>
                <Field.Control
                  defaultValue="118 Rivington Street"
                  className="ds-input ds-input-m ds-field-control"
                />
              </Field.Root>
              {/* A row, because the values are short and read as one string. */}
              <div className="ds-fieldset-row">
                <Field.Root className="ds-field" name="city">
                  <Field.Label className="ds-field-label">City</Field.Label>
                  <Field.Control
                    defaultValue="London"
                    className="ds-input ds-input-m ds-field-control"
                  />
                </Field.Root>
                <Field.Root className="ds-field ds-field-compact" name="postcode">
                  <Field.Label className="ds-field-label">Postcode</Field.Label>
                  <Field.Control
                    defaultValue="EC2A 3AY"
                    className="ds-input ds-input-m ds-field-control"
                  />
                </Field.Root>
              </div>
            </div>
          </Fieldset.Root>
        </Col>
      </Row>

      <Row label="Panel — only when the group must detach; gray-50, radius 12, pad 16" align="flex-start">
        <Col width={420}>
          <Fieldset.Root className="ds-fieldset ds-fieldset-panel">
            <Fieldset.Legend className="ds-fieldset-legend">Card details</Fieldset.Legend>
            <div className="ds-fieldset-fields">
              <Field.Root className="ds-field" name="cardNumber">
                <Field.Label className="ds-field-label">Card number</Field.Label>
                <Field.Control
                  defaultValue="4242 4242 4242 4242"
                  className="ds-input ds-input-m ds-field-control"
                />
              </Field.Root>
              <div className="ds-fieldset-row">
                <Field.Root className="ds-field" name="expiry">
                  <Field.Label className="ds-field-label">Expiry</Field.Label>
                  <Field.Control
                    defaultValue="04 / 29"
                    className="ds-input ds-input-m ds-field-control"
                  />
                </Field.Root>
                <Field.Root className="ds-field ds-field-compact" name="cvc">
                  <Field.Label className="ds-field-label">CVC</Field.Label>
                  <Field.Control
                    defaultValue="311"
                    className="ds-input ds-input-m ds-field-control"
                  />
                </Field.Root>
              </div>
            </div>
          </Fieldset.Root>
        </Col>
      </Row>

      <Row label="Fieldset disabled — a group disables as a unit" align="flex-start">
        <Col width={420}>
          <Fieldset.Root className="ds-fieldset" disabled>
            <Fieldset.Legend className="ds-fieldset-legend">Tax details</Fieldset.Legend>
            <div className="ds-fieldset-fields">
              <div className="ds-fieldset-row">
                <Field.Root className="ds-field" name="taxCountry">
                  <Field.Label className="ds-field-label">Country</Field.Label>
                  <Field.Control
                    defaultValue="United Kingdom"
                    className="ds-input ds-input-m ds-field-control"
                  />
                </Field.Root>
                <Field.Root className="ds-field" name="vat">
                  <Field.Label className="ds-field-label">VAT number</Field.Label>
                  <Field.Control
                    defaultValue="GB 402 118 733"
                    className="ds-input ds-input-m ds-field-control"
                  />
                </Field.Root>
              </div>
            </div>
          </Fieldset.Root>
        </Col>
      </Row>

      <Row label="Form — one column, 20 between fields, 32 above the actions" align="flex-start">
        <Col width={380}>
          <SignInForm />
        </Col>
      </Row>

      <Row label="Modal form — no padding of its own, actions trailing" align="flex-start">
        <Col width={420}>
          <div className="ds-modal" style={{ position: "static", transform: "none", width: "100%" }}>
            <h3 className="ds-modal-title">Invite a teammate</h3>
            <p className="ds-modal-subtitle">They’ll get edit access to this workspace.</p>
            <Form className="ds-form" style={{ marginTop: 16 }} onSubmit={(e) => e.preventDefault()}>
              <Field.Root className="ds-field" name="inviteEmail">
                <Field.Label className="ds-field-label">Email</Field.Label>
                <Field.Control
                  type="email"
                  placeholder="you@company.com"
                  className="ds-input ds-input-m ds-field-control"
                />
              </Field.Root>
              <div className="ds-form-actions ds-form-actions-trailing">
                <button type="button" className="ds-button ds-button-m ds-button-secondary">
                  Cancel
                </button>
                <button type="submit" className="ds-button ds-button-m ds-button-primary">
                  Send invite
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>

      <Row label="Submission error — 14 red 600, directly above the actions" align="flex-start">
        <Col width={380}>
          <Form className="ds-form" onSubmit={(e) => e.preventDefault()}>
            <Field.Root className="ds-field" name="cardOnFile">
              <Field.Label className="ds-field-label">Card on file</Field.Label>
              <Field.Control
                defaultValue="Visa ending 4242"
                className="ds-input ds-input-m ds-field-control"
              />
            </Field.Root>
            <p className="ds-form-error">
              Your bank declined the charge. Try another card, or contact your bank.
            </p>
            <div className="ds-form-actions">
              <button type="submit" className="ds-button ds-button-m ds-button-primary">
                Pay £48.00
              </button>
            </div>
          </Form>
        </Col>
      </Row>

      <Row label="OTP — 48 × 40 slots, 8 apart, 22 tabular digits" align="flex-start">
        <Col width={380}>
          <VerificationField />
        </Col>
      </Row>

      <Row label="Grouped — mirror the code’s own grouping, 16 between groups" align="flex-start">
        <Col width={380}>
          <Field.Root className="ds-field" name="recoveryCode">
            <Field.Label className="ds-field-label">Recovery code</Field.Label>
            <Field.Description className="ds-field-description">
              Recovery codes are issued in two groups of three, like A7C 9XZ.
            </Field.Description>
            <OTPField.Root
              className="ds-otp ds-field-control"
              length={6}
              validationType="alphanumeric"
              defaultValue="A7C9XZ"
            >
              <OtpSlots length={6} end={3} />
              <OTPField.Separator className="ds-otp-separator" />
              <OtpSlots length={6} start={3} />
            </OTPField.Root>
          </Field.Root>
        </Col>
      </Row>

      <Row label="Error — the code is one value, so every slot errors" align="flex-start">
        <Col width={380}>
          <Field.Root className="ds-field" name="expiredCode" invalid>
            <Field.Label className="ds-field-label">Verification code</Field.Label>
            <OTPField.Root className="ds-otp ds-field-control" length={6} defaultValue="482913">
              <OtpSlots length={6} />
            </OTPField.Root>
            <Field.Error className="ds-field-message" match>
              That code has expired. Request a new one and enter it within 10 minutes.
            </Field.Error>
          </Field.Root>
        </Col>
      </Row>

      <Row label="Verifying and disabled — the whole group goes to 40%" align="flex-start">
        <Col width={380}>
          <div className="ds-field-stack">
            <OTPField.Root className="ds-otp" length={6} defaultValue="482913" data-verifying="">
              <OtpSlots length={6} />
            </OTPField.Root>
            <OTPField.Root className="ds-otp" length={6} defaultValue="4829" disabled>
              <OtpSlots length={6} />
            </OTPField.Root>
          </div>
        </Col>
      </Row>
    </Section>
  );
}
