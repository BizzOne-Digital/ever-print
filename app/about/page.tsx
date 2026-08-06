import Link from 'next/link';

const team = [
  { name: 'Chandramohan', role: 'Founder & Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Production Team', role: 'Print Specialists', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80' },
  { name: 'Design Team', role: 'Creative Designers', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1B2A6B 0%, #2A8CC4 100%)', padding: '5rem 1.5rem', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: '50px', marginBottom: '1rem' }}>About Us</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1.25rem' }}>The Team Behind Every Print</h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, fontSize: '1.05rem' }}>
              Everprint is a full-service digital printing company dedicated to helping businesses of all sizes look their best. 
              From a single business card to a full exhibition setup — we handle it all with precision, speed, and pride.
            </p>
          </div>
          <div>
            <img src="/homeabout.png" alt="Our printing facility" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }} />
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Mission */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Our Mission', text: 'To deliver exceptional quality print products that help businesses grow, stand out, and make a lasting impression — at a price that makes sense.', color: '#E03A2F', icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></> },
              { title: 'Our Technology', text: 'We use the Konica Minolta AccurioPRESS C3060 — one of the most advanced digital presses available — for consistent, vibrant, and professional output.', color: '#3A9E4A', icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></> },
              { title: 'Our Promise', text: 'Quality you can see. Service you can trust. Delivery you can rely on. Every order is handled with care, every client is treated with respect.', color: '#2A8CC4', icon: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F8F9FC', borderRadius: '20px', padding: '2rem', border: '1px solid #E5E7EB' }}>
                <div style={{ width: '52px', height: '52px', background: item.color + '15', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="24" height="24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <h3 style={{ fontWeight: 800, color: '#1B2A6B', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '0.9rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine highlight */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Our Equipment</span>
            <h2 className="section-heading">Konica Minolta AccurioPRESS C3060</h2>
            <p style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              We invest in the best technology so you get the best results. The AccurioPRESS C3060 delivers studio-quality prints at production speed — perfect for any volume.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['2400 × 2400 dpi print quality', 'Up to 60 pages per minute', 'Handles a wide variety of media types', 'Consistent colour accuracy across all jobs'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg width="18" height="18" fill="none" stroke="#3A9E4A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style={{ color: '#374151', fontSize: '0.9rem' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&q=80" alt="Digital printing machine" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(27,42,107,0.15)' }} />
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Team */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag">Our People</span>
          <h2 className="section-heading">Meet the Team</h2>
          <p className="section-sub" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>Dedicated professionals who care about your print quality as much as you do.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
            {team.map((t, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={t.img} alt={t.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #EEF2FF', marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, color: '#1B2A6B' }}>{t.name}</h4>
                <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
