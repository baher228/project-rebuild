"use client";

import { useState } from "react";

import { ArrowIcon } from "@/components/ArrowIcon";

export function ContactProjectForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="reveal d1">
      <form
        className="ic-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
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
          placeholder="Property type & location"
          aria-label="Property type & location"
        />
        <input
          className="ic-field"
          name="budget"
          placeholder="Approximate budget"
          aria-label="Approximate budget"
        />
        <textarea
          className="ic-field"
          name="message"
          placeholder="Tell us about your project"
          aria-label="Tell us about your project"
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
