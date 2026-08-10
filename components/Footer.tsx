import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#1B2A6B', color: 'white', paddingTop: '4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', paddingBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: '#fff', borderRadius: '8px', padding: '0.4rem 0.6rem', marginBottom: '1rem' }}>
              <Image src="/finallogo.png" alt="Everprint logo" width={140} height={42} style={{ objectFit: 'contain', height: '42px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Professional digital printing solutions for businesses of all sizes. Quality prints, lasting impressions.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>, label: 'Facebook' },
                { icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></>, label: 'Instagram' },
              ].map((s, i) => (
                <a key={i} href="#" aria-label={s.label} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                  <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[['/', 'Home'], ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color 0.2s' }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>Our Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Business Cards', 'Brochures & Flyers', 'Banners & Signs', 'Wedding Cards', 'Booklets & Binding', 'Gift Items'].map(s => (
                <span key={s} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1.25rem', fontSize: '1rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>, extra: <polyline points="22,6 12,13 2,6"/>, text: 'info@everprints.ca' },
                { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>, extra: null, text: '+1 753 788 3428' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">{c.icon}{c.extra}</svg>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>{c.text}</span>
                </div>
              ))}
              <a href="https://wa.me/17537883428" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginTop: '0.25rem' }}>
                <div style={{ width: '32px', height: '32px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.965.568 3.799 1.549 5.353L2 22l4.754-1.525A9.963 9.963 0 0012.004 22C17.529 22 22 17.521 22 12.004 22 6.479 17.529 2 12.004 2zm0 18.18a8.176 8.176 0 01-4.181-1.146l-.299-.178-3.101.813.826-3.018-.195-.31a8.173 8.173 0 01-1.25-4.34c0-4.517 3.677-8.194 8.2-8.194 4.524 0 8.201 3.677 8.201 8.194 0 4.517-3.677 8.179-8.201 8.179z"/></svg>
                </div>
                <span style={{ color: '#25D366', fontSize: '0.875rem', fontWeight: 600 }}>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>© 2026 Everprint. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ background: '#E03A2F', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>FREE DELIVERY</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>within 5km on orders above $50</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
