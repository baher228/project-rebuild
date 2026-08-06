import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";

export function SiteFooter() {
  return (
    <footer className="av-footer">
      <section className="footer-conversation" aria-labelledby="footer-conversation-title">
        <div>
          <h2 id="footer-conversation-title">Start a conversation.</h2>
          <p>No commitment. Just a conversation about what you&apos;re trying to achieve.</p>
        </div>
        <Link href="/contact" className="footer-conversation__button">
          Get in touch <ArrowIcon />
        </Link>
      </section>
      <div className="reference-footer__top">
        <div>
          <Link href="/" className="reference-footer__logo">
            Ardivia<sup>®</sup>
          </Link>
          <p className="reference-footer__tagline">
            Property improvement specialists. We renovate, improve and maintain homes inside and out
            — managing every project from start to finish.
          </p>
          <div className="reference-footer__socials" aria-label="Social media links">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
        <FooterLinks
          title="What we do"
          links={[
            ["Interior Improvements", "/services"],
            ["Exterior Improvements", "/services"],
            ["Property Upgrades", "/services"],
            ["Repairs & Maintenance", "/services"],
            ["Project Management", "/services"],
          ]}
        />
        <FooterLinks
          title="Company"
          links={[
            ["Home", "/"],
            ["Our Work", "/projects"],
            ["About Us", "/studio"],
            ["Contact", "/contact"],
          ]}
        />
        <div>
          <h2 className="reference-footer__title">Get in touch</h2>
          <ul className="reference-footer__links">
            <li>
              <a href="tel:+441483000000">01483 000 000</a>
            </li>
            <li>
              <a href="mailto:hello@ardivia.co.uk">hello@ardivia.co.uk</a>
            </li>
            <li>
              <Link className="reference-footer__quote-link" href="/contact">
                Get a free quote →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="reference-footer__bottom">
        <p>© 2026 Ardivia Ltd. Fully insured · FMB Member. Registered in England & Wales.</p>
        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h2 className="reference-footer__title">{title}</h2>
      <ul className="reference-footer__links">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
