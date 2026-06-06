import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/studio", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/clients", label: "Clients" },
  { to: "/journal", label: "Journal" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className={`av-nav${scrolled ? " scrolled" : ""}`}>
      <Link to="/" className="av-logo">
        Ardi<span>v</span>ia
      </Link>
      <ul className={`av-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className={pathname === l.to ? "active" : ""}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="av-cta">
        Begin Your Project
      </Link>
      <button
        className="av-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          )}
        </svg>
      </button>
    </nav>
  );
}
