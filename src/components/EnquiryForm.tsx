import { useState } from "react";

type Field = {
  name: string;
  type?: string;
  placeholder: string;
  full?: boolean;
  textarea?: boolean;
  options?: string[];
};

export function EnquiryForm({
  fields,
  buttonLabel = "Send enquiry",
}: {
  fields: Field[];
  buttonLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="cta-form reveal d1"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {(() => {
        const rows: React.ReactNode[] = [];
        let i = 0;
        while (i < fields.length) {
          const f = fields[i];
          const next = fields[i + 1];
          if (!f.full && !f.textarea && !f.options && next && !next.full && !next.textarea && !next.options) {
            rows.push(
              <div className="form-row" key={i}>
                <input className="form-field" type={f.type ?? "text"} placeholder={f.placeholder} name={f.name} />
                <input className="form-field" type={next.type ?? "text"} placeholder={next.placeholder} name={next.name} />
              </div>
            );
            i += 2;
            continue;
          }
          if (f.textarea) {
            rows.push(
              <textarea key={i} className="form-field" placeholder={f.placeholder} name={f.name} />
            );
          } else if (f.options) {
            rows.push(
              <select key={i} className="form-field" name={f.name} defaultValue="">
                <option value="" disabled>{f.placeholder}</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            );
          } else {
            rows.push(
              <input key={i} className="form-field" type={f.type ?? "text"} placeholder={f.placeholder} name={f.name} />
            );
          }
          i += 1;
        }
        return rows;
      })()}
      <button
        type="submit"
        className="form-btn"
        style={sent ? { background: "var(--dark-sage)" } : undefined}
        disabled={sent}
      >
        {sent ? "Enquiry sent — we'll be in touch soon." : buttonLabel}
        {!sent && (
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  );
}
