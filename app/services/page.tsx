import Link from 'next/link';

const allServices = [
  { title: 'Photo Copies', desc: 'High-quality photocopying services for documents of all sizes.', icon: <><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="13" y2="15"/></>, color: '#E03A2F' },
  { title: 'Business Cards', desc: 'Single or double-sided, glossy or matte, standard or custom shapes.', icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></>, color: '#3A9E4A' },
  { title: 'Brochures', desc: 'Bi-fold, tri-fold, and custom fold brochures for any campaign.', icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>, color: '#2A8CC4' },
  { title: 'Flyers', desc: 'A4, A5, DL flyers — perfect for promotions and events.', icon: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>, color: '#1B2A6B' },
  { title: 'Stickers (Shape Cut)', desc: 'Custom shape-cut stickers for products, branding, and events.', icon: <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>, color: '#E03A2F' },
  { title: 'Booklets', desc: 'Saddle-stitched or perfect-bound booklets for any purpose.', icon: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>, color: '#3A9E4A' },
  { title: 'Binding', desc: 'Spiral, comb, and hardcover binding for professional documents.', icon: <><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></>, color: '#2A8CC4' },
  { title: 'Receipt Books', desc: 'Custom carbonless receipt books for your business.', icon: <><path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/></>, color: '#1B2A6B' },
  { title: 'Post Cards', desc: 'Eye-catching postcards for marketing campaigns and events.', icon: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/></>, color: '#E03A2F' },
  { title: 'Envelopes', desc: 'Custom printed envelopes with your branding for professional mailings.', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, color: '#3A9E4A' },
  { title: 'Wedding Cards', desc: 'Elegant custom wedding invitations and event stationery.', icon: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>, color: '#2A8CC4' },
  { title: 'Signs', desc: 'Indoor and outdoor signage solutions for businesses of all types.', icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>, color: '#1B2A6B' },
  { title: 'Banners', desc: 'Large-format banners for trade shows, storefronts, and events.', icon: <><line x1="3" y1="3" x2="21" y2="3"/><line x1="3" y1="21" x2="21" y2="21"/><rect x="6" y="6" width="12" height="12" rx="1"/></>, color: '#E03A2F' },
  { title: 'Vinyl Stickers', desc: 'Durable vinyl stickers and decals for any surface.', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, color: '#3A9E4A' },
  { title: 'Flags', desc: 'Custom printed flags for outdoor branding and promotions.', icon: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></>, color: '#2A8CC4' },
  { title: 'Calendars', desc: 'Wall, desk, and custom calendars with your branding.', icon: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>, color: '#1B2A6B' },
  { title: 'Pin Badges', desc: 'Custom pin badges for corporate events, schools, and promotions.', icon: <><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></>, color: '#E03A2F' },
  { title: 'ID Cards', desc: 'Professional ID cards with lamination for organizations.', icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><path d="M13 9h5M13 12h4M13 15h2"/></>, color: '#3A9E4A' },
  { title: 'Tent Cards', desc: 'Table tent cards for restaurants, events, and promotions.', icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>, color: '#2A8CC4' },
  { title: 'Roll Up Banners', desc: 'Portable, retractable banner stands for any event or exhibition.', icon: <><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/></>, color: '#1B2A6B' },
  { title: 'Backdrop', desc: 'Large backdrop prints for events, photo shoots, and exhibitions.', icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>, color: '#E03A2F' },
  { title: 'Table Throw', desc: 'Branded table covers for trade shows and corporate events.', icon: <><path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M4 7V5a2 2 0 012-2h12a2 2 0 012 2v2"/></>, color: '#3A9E4A' },
  { title: 'Gift Items', desc: 'Custom branded merchandise and promotional gift items.', icon: <><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></>, color: '#2A8CC4' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section style={{ background: 'linear-gradient(135deg, #1B2A6B 0%, #2A8CC4 100%)', padding: '5rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: '50px', marginBottom: '1rem' }}>Our Services</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Everything You Need to Print</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7 }}>From business essentials to large-format displays — we have over 23 print products to serve your every need.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '1.5rem' }}>
            {allServices.map((s, i) => (
              <div key={i} className="card-hover" style={{ background: 'white', borderRadius: '16px', padding: '1.75rem', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ width: '48px', height: '48px', background: s.color + '15', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{s.icon}</svg>
                </div>
                <h3 style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '1rem' }}>{s.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{s.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <Link href="/contact" style={{ color: s.color, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Get a Quote
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section style={{ padding: '4rem 1.5rem', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ background: '#EEF2FF', borderRadius: '16px', padding: '2.5rem' }}>
            <svg width="40" height="40" fill="none" stroke="#1B2A6B" strokeWidth="2" viewBox="0 0 24 24" style={{ marginBottom: '1rem' }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <h3 style={{ fontWeight: 800, color: '#1B2A6B', fontSize: '1.4rem', marginBottom: '0.75rem' }}>Contact Us for Pricing</h3>
            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: '1.5rem' }}>Every print job is unique. Get in touch for a custom quote tailored to your specifications and quantity.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Get a Quote</Link>
              <a href="https://wa.me/17537883428" style={{ background: '#25D366', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.965.568 3.799 1.549 5.353L2 22l4.754-1.525A9.963 9.963 0 0012.004 22C17.529 22 22 17.521 22 12.004 22 6.479 17.529 2 12.004 2zm0 18.18a8.176 8.176 0 01-4.181-1.146l-.299-.178-3.101.813.826-3.018-.195-.31a8.173 8.173 0 01-1.25-4.34c0-4.517 3.677-8.194 8.2-8.194 4.524 0 8.201 3.677 8.201 8.194 0 4.517-3.677 8.179-8.201 8.179z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
