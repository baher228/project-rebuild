import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="av-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-logo-el">
            Ardi<span>v</span>ia
          </Link>
          <p className="footer-tagline">
            Bespoke design and build for those who demand the extraordinary. London &amp; beyond.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">In</a>
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="Pinterest">Pi</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link to="/services">Residential Design</Link></li>
            <li><Link to="/services">Commercial Interiors</Link></li>
            <li><Link to="/services">Project Management</Link></li>
            <li><Link to="/services">Materials Sourcing</Link></li>
            <li><Link to="/services">Heritage Restoration</Link></li>
            <li><Link to="/services">Completion &amp; Snagging</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Studio</div>
          <ul className="footer-links">
            <li><Link to="/studio">About Ardivia</Link></li>
            <li><Link to="/studio">The Team</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:hello@ardivia.co.uk">hello@ardivia.co.uk</a></li>
            <li><a href="tel:+442079460000">+44 20 7946 0000</a></li>
          </ul>
          <p className="footer-tagline" style={{ marginTop: 18 }}>
            14 Charlotte Street<br />
            Fitzrovia, London<br />
            W1T 2LS
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2026 Ardivia Ltd. Registered in England &amp; Wales. Company No. 06712834. RIBA Chartered Practice.
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
