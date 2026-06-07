"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/process", label: "Process" },
  { href: "/clients", label: "Clients" },
  { href: "/journal", label: "Journal" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <Link href="/" className="av-logo">
        Ardi<span>v</span>ia
      </Link>
      <ul className={`av-links${open ? " open" : ""}`}>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={pathname === link.href ? "active" : ""}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="av-cta">
        Begin Your Project
      </Link>
      <button
        className="av-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
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
