import type { Metadata } from "next";

import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ardivia. 14 Charlotte Street, Fitzrovia, London. All enquiries treated with complete discretion.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="contact-page">
        <div className="contact-left">
          <div className="section-eyebrow reveal" style={{ marginBottom: 32 }}>
            Get in touch
          </div>
          <h1
            className="section-title reveal d1"
            style={{
              fontSize: "clamp(44px,5vw,72px)",
              color: "var(--linen)",
              marginBottom: 40,
              lineHeight: 0.96,
            }}
          >
            Let&apos;s begin
            <br />
            your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>project.</em>
          </h1>
          <p
            className="reveal d2"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(232,226,213,.55)",
              lineHeight: 1.85,
              marginBottom: 56,
            }}
          >
            We take on a limited number of projects each year to ensure every client receives our
            full attention. All enquiries are treated with complete discretion.
          </p>
          <div className="reveal d3">
            {[
              {
                label: "Office",
                val: (
                  <>
                    14 Charlotte Street
                    <br />
                    Fitzrovia, London W1T 2LS
                  </>
                ),
              },
              {
                label: "Email",
                val: (
                  <a
                    href="mailto:hello@ardivia.co.uk"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    hello@ardivia.co.uk
                  </a>
                ),
              },
              {
                label: "Phone",
                val: (
                  <a href="tel:+442079460000" style={{ color: "inherit", textDecoration: "none" }}>
                    +44 20 7946 0000
                  </a>
                ),
              },
              {
                label: "Hours",
                val: (
                  <>
                    Monday - Friday
                    <br />
                    9:00am - 6:00pm
                  </>
                ),
              },
              { label: "Social", val: "Instagram - LinkedIn - Pinterest" },
            ].map((row) => (
              <div className="contact-detail-row" key={row.label}>
                <span className="contact-detail-label">{row.label}</span>
                <span className="contact-detail-val">{row.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-right">
          <h2
            className="section-title reveal"
            style={{
              fontSize: "clamp(36px,3.5vw,52px)",
              color: "var(--forest)",
              marginBottom: 12,
              lineHeight: 1.05,
            }}
          >
            Start the
            <br />
            conversation.
          </h2>
          <p
            className="reveal d1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 17,
              color: "rgba(26,31,26,.55)",
              lineHeight: 1.75,
              marginBottom: 48,
            }}
          >
            Tell us about your project - however early in the process. We&apos;ll respond within one
            business day.
          </p>
          <EnquiryForm
            fields={[
              { name: "name", placeholder: "Your name" },
              { name: "email", type: "email", placeholder: "Email address" },
              { name: "phone", type: "tel", placeholder: "Phone number", full: true },
              { name: "type", placeholder: "Project type" },
              { name: "budget", placeholder: "Approximate budget" },
              { name: "location", placeholder: "Project location", full: true },
              { name: "message", placeholder: "Tell us about your project", textarea: true },
              {
                name: "referral",
                placeholder: "How did you hear about Ardivia?",
                options: [
                  "Referral from a client",
                  "Press or editorial",
                  "Instagram",
                  "Pinterest",
                  "Google search",
                  "Other",
                ],
              },
            ]}
          />
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 14,
              color: "rgba(26,31,26,.4)",
              lineHeight: 1.65,
              marginTop: 20,
            }}
          >
            Your enquiry is treated with complete discretion. We never share your details with third
            parties.
          </p>
        </div>
      </div>
    </main>
  );
}
