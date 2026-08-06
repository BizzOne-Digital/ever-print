"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0F1E3D", color: "white", paddingTop: 64 }}>
      {/* Top Section */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M6 28 Q18 8 30 28" fill="#D93B2A" opacity="0.9"/>
              <path d="M8 26 Q18 4 32 26" fill="#2E8B47" opacity="0.85" transform="scale(0.85) translate(2.7,-1)"/>
              <path d="M9 25 Q18 2 33 25" fill="#5BAEE0" opacity="0.8" transform="scale(0.7) translate(5.4,-2)"/>
            </svg>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: 22, color: "white" }}>
              ever<span style={{ color: "#5BAEE0" }}>print</span>
            </span>
          </div>
          <p style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
            A digital printing company delivering quality prints that make lasting impressions. Your vision, printed to perfection.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5BAEE0" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <a href="mailto:cmrama2022@gmail.com" style={{ color: "#94A3B8", fontSize: 14, textDecoration: "none" }}>cmrama2022@gmail.com</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5BAEE0" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.95 13a19.79 19.79 0 01-3.07-8.67A2 2 0 013.88 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            <a href="tel:17537883428" style={{ color: "#94A3B8", fontSize: 14, textDecoration: "none" }}>+1 753 788 3428</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 20, color: "white" }}>Quick Links</h4>
          {[["Home", "/"], ["Services", "/services"], ["Portfolio", "/portfolio"], ["About Us", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={href} href={href} style={{ display: "block", color: "#94A3B8", textDecoration: "none", fontSize: 14, marginBottom: 12, transition: "color 0.2s" }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#5BAEE0"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "#94A3B8"}
            >
              → {label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 20, color: "white" }}>Our Services</h4>
          {["Business Cards", "Brochures & Flyers", "Banners & Signs", "Wedding Cards", "Stickers & Labels", "Roll-Up Banners", "Gift Items", "ID Cards"].map(s => (
            <div key={s} style={{ color: "#94A3B8", fontSize: 14, marginBottom: 10 }}>• {s}</div>
          ))}
        </div>

        {/* Offer */}
        <div>
          <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 20, color: "white" }}>Special Offer</h4>
          <div style={{ background: "linear-gradient(135deg, #1B3A6B, #0F2A50)", border: "1px solid #2B4A7A", borderRadius: 16, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, background: "rgba(91,174,224,0.15)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5BAEE0" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <div>
                <div style={{ color: "#5BAEE0", fontWeight: 700, fontSize: 15 }}>Free Delivery</div>
                <div style={{ color: "#64748B", fontSize: 12 }}>Within 5 km radius</div>
              </div>
            </div>
            <p style={{ color: "#94A3B8", fontSize: 13, lineHeight: 1.7 }}>
              Enjoy free delivery on all orders above <span style={{ color: "#5BAEE0", fontWeight: 700 }}>$50</span> within a 5 km radius of our store.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #1E3356", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "#475569", fontSize: 13 }}>© {new Date().getFullYear()} Everprint – A Digital Printing Company. All rights reserved.</p>
        <p style={{ color: "#475569", fontSize: 13 }}>
          Built by <span style={{ color: "#5BAEE0", fontWeight: 600 }}>BizzOne Digital</span>
        </p>
      </div>
    </footer>
  );
}
