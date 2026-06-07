"use client";

import { useState, type ReactNode } from "react";

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
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {(() => {
        const rows: ReactNode[] = [];
        let index = 0;

        while (index < fields.length) {
          const field = fields[index];
          const nextField = fields[index + 1];

          if (
            !field.full &&
            !field.textarea &&
            !field.options &&
            nextField &&
            !nextField.full &&
            !nextField.textarea &&
            !nextField.options
          ) {
            rows.push(
              <div className="form-row" key={index}>
                <input
                  className="form-field"
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  name={field.name}
                />
                <input
                  className="form-field"
                  type={nextField.type ?? "text"}
                  placeholder={nextField.placeholder}
                  name={nextField.name}
                />
              </div>,
            );
            index += 2;
            continue;
          }

          if (field.textarea) {
            rows.push(
              <textarea
                key={index}
                className="form-field"
                placeholder={field.placeholder}
                name={field.name}
              />,
            );
          } else if (field.options) {
            rows.push(
              <select key={index} className="form-field" name={field.name} defaultValue="">
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>,
            );
          } else {
            rows.push(
              <input
                key={index}
                className="form-field"
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                name={field.name}
              />,
            );
          }

          index += 1;
        }

        return rows;
      })()}
      <button
        type="submit"
        className="form-btn"
        style={sent ? { background: "var(--dark-sage)" } : undefined}
        disabled={sent}
      >
        {sent ? "Enquiry sent - we'll be in touch soon." : buttonLabel}
        {!sent && (
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </form>
  );
}
