"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "0 1px 0 #E2E8F0",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M6 28 Q18 8 30 28" fill="#D93B2A" opacity="0.9"/>
            <path d="M8 26 Q18 4 32 26" fill="#2E8B47" opacity="0.85" transform="scale(0.85) translate(2.7,-1)"/>
            <path d="M9 25 Q18 2 33 25" fill="#2B7CC4" opacity="0.8" transform="scale(0.7) translate(5.4,-2)"/>
          </svg>
          <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 22, color: "#1B2D5B" }}>
            ever<span style={{ color: "#2B7CC4" }}>print</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link" style={{ display: "none" }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} id="desktop-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer", padding: 8,
            display: "none"
          }}
          id="mobile-hamburger"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="#1B2D5B" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#1B2D5B" strokeWidth="2.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #E2E8F0", padding: "16px 24px 24px" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", color: "#1B2D5B", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #F0F4F8" }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: 16, display: "inline-flex" }}>
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #desktop-nav { display: none !important; }
          #mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
