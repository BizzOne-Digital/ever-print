"use client";
const portfolioItems = [
  { category: 'Business Cards', img: 'https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?q=80', title: 'Corporate Business Cards' },
  { category: 'Brochures', img: 'https://images.unsplash.com/photo-1695634281463-4788ac6ddfdf?q=80', title: 'Tri-fold Marketing Brochure' },
  { category: 'Banners', img: 'https://images.unsplash.com/photo-1588146256435-63ec0608c415?q=80', title: 'Large Format Store Banner' },
  { category: 'Wedding Cards', img: 'https://images.unsplash.com/photo-1656104717095-9d062b0d4e8d?q=80', title: 'Luxury Wedding Invitation' },
  { category: 'Stickers', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80', title: 'Custom Shape-Cut Stickers' },
  { category: 'Flyers', img: 'https://images.unsplash.com/photo-1712903277236-67ff1a9cbbcd?q=80', title: 'Event Promotion Flyer' },
  { category: 'Signs', img: 'https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?q=80', title: 'Retail Store Signage' },
  { category: 'Booklets', img: 'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80', title: 'Product Catalogue Booklet' },
  { category: 'Roll Up Banners', img: 'https://images.unsplash.com/photo-1628406690081-9755572fcd77?q=80', title: 'Exhibition Roll Up Banner' },
];

const categories = ['All', ...Array.from(new Set(portfolioItems.map(p => p.category)))];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1B2A6B 0%, #2A8CC4 100%)', padding: '5rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: '50px', marginBottom: '1rem' }}>Our Work</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Gallery & Portfolio</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7 }}>See what we have created for businesses across all industries. Quality prints that speak for themselves.</p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {portfolioItems.map((item, i) => (
              <div key={i} className="card-hover" style={{ borderRadius: '16px', overflow: 'hidden', background: 'white', border: '1px solid #E5E7EB' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(27,42,107,0.9)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '50px' }}>
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '1rem' }}>{item.title}</h3>
                  <p style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: '0.25rem' }}>Professional print work by Everprint</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontWeight: 800, color: '#1B2A6B', fontSize: '1.75rem', marginBottom: '1rem' }}>Want Something Like This?</h2>
          <p style={{ color: '#6B7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>Tell us what you need and we will bring your vision to life with professional quality printing.</p>
          <a href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            Start Your Project
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>
    </>
  );
}
