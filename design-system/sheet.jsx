/* Shared chrome for the component sheet. Presentation of the demo page only —
   not part of any component spec. */
import * as React from "react";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function Section({ eyebrow, title, note, children }) {
  return (
    <section className="sheet-section" id={slug(eyebrow)} aria-labelledby={slug(eyebrow) + "-title"}>
      <header>
        <span className="eyebrow">{eyebrow}</span>
        <h2 id={slug(eyebrow) + "-title"}>{title}</h2>
        {note ? <p>{note}</p> : null}
      </header>
      {children}
    </section>
  );
}

export function Row({ label, align = "center", children }) {
  return (
    <figure className="sheet-row">
      <figcaption>{label}</figcaption>
      <div className="sheet-stage" style={{ alignItems: align }}>{children}</div>
    </figure>
  );
}

export function Col({ children, width = 360 }) {
  return <div className="sheet-col" style={{ maxWidth: width }}>{children}</div>;
}
