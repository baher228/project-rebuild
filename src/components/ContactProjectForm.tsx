"use client";

import { useState } from "react";

import { ArrowIcon } from "@/components/ArrowIcon";

const audiences = {
  homeowner: {
    label: "Homeowner",
    project: "Property type & location",
    budget: "Approximate budget",
    message: "Tell us about your project",
  },
  landlord: {
    label: "Landlord",
    project: "Property address / number of units",
    budget: "Current EPC rating (if known)",
    message: "Tell us what you're trying to achieve",
  },
  developer: {
    label: "Developer",
    project: "Site address or scheme description",
    budget: "Contract value or GDV estimate",
    message: "Nature of enquiry (site / JV / build contract)",
  },
} as const;

type Audience = keyof typeof audiences;

export function ContactProjectForm() {
  const [audience, setAudience] = useState<Audience>("homeowner");
  const [sent, setSent] = useState(false);
  const fields = audiences[audience];

  return (
    <div className="reveal d1">
      <div className="ic-tabs" role="group" aria-label="Project enquiry type">
        {(Object.keys(audiences) as Audience[]).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={audience === key}
            className={`ic-tab${audience === key ? " active" : ""}`}
            onClick={() => setAudience(key)}
          >
            {audiences[key].label}
          </button>
        ))}
      </div>

      <form
        className="ic-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <input type="hidden" name="audience" value={audience} />
        <div className="ic-form-row">
          <input className="ic-field" name="name" placeholder="Your name" aria-label="Your name" />
          <input
            className="ic-field"
            name="email"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
          />
        </div>
        <input
          className="ic-field"
          name="project"
          placeholder={fields.project}
          aria-label={fields.project}
        />
        <input
          className="ic-field"
          name="budget"
          placeholder={fields.budget}
          aria-label={fields.budget}
        />
        <textarea
          className="ic-field"
          name="message"
          placeholder={fields.message}
          aria-label={fields.message}
        />
        <button
          className={`ic-submit${sent ? " sent" : ""}`}
          type="submit"
          disabled={sent}
          aria-live="polite"
        >
          {sent ? (
            "Sent — we'll be in touch shortly."
          ) : (
            <>
              Send enquiry <ArrowIcon />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
