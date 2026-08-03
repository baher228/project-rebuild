import type { Metadata } from "next";

import { ContactProjectForm } from "@/components/ContactProjectForm";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Tell Ardivia about your residential project, property portfolio or development opportunity.",
};

export default function ContactPage() {
  return (
    <main className="integrated-contact">
      <section className="ic-shell">
        <div className="ic-left">
          <div>
            <div className="ic-tag reveal">Get in touch</div>
            <h1 className="ic-title reveal d1">
              Let&apos;s start a
              <br />
              <em>conversation.</em>
            </h1>
            <p className="ic-intro reveal d2">
              Whether you&apos;re a homeowner with an idea, a landlord with a portfolio, or a
              developer with a site — we&apos;d like to hear from you. All enquiries treated with
              complete discretion.
            </p>
          </div>

          <div className="ic-details reveal d3">
            <div className="ic-detail-row">
              <span className="ic-detail-label">Office</span>
              <span className="ic-detail-value">
                14 Charlotte Street
                <br />
                Fitzrovia, London W1T 2LS
              </span>
            </div>
            <div className="ic-detail-row">
              <span className="ic-detail-label">Email</span>
              <a className="ic-detail-value" href="mailto:hello@ardivia.co.uk">
                hello@ardivia.co.uk
              </a>
            </div>
            <div className="ic-detail-row">
              <span className="ic-detail-label">Phone</span>
              <a className="ic-detail-value" href="tel:+442079460000">
                +44 20 7946 0000
              </a>
            </div>
            <div className="ic-detail-row">
              <span className="ic-detail-label">Hours</span>
              <span className="ic-detail-value">Mon–Fri · 9am–6pm</span>
            </div>
          </div>
        </div>

        <div className="ic-right">
          <h2 className="ic-form-title reveal">Tell us about your project.</h2>
          <p className="ic-form-intro reveal d1">
            Select who you are below — your enquiry will reach the right person.
          </p>
          <ContactProjectForm />
        </div>
      </section>
    </main>
  );
}
