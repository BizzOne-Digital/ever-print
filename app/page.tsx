'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  { icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>, title: 'Business Cards', desc: 'Make a lasting first impression with premium quality business cards.' },
  { icon: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>, title: 'Brochures & Flyers', desc: 'Eye-catching marketing materials that tell your brand story.' },
  { icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>, title: 'Banners & Signs', desc: 'Large format printing for maximum visibility and impact.' },
  { icon: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>, title: 'Wedding Cards', desc: 'Elegant, custom wedding invitations and event stationery.' },
  { icon: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>, title: 'Booklets & Binding', desc: 'Professional booklets, catalogues, and bound documents.' },
  { icon: <><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></>, title: 'Stickers & Labels', desc: 'Custom shape-cut stickers, vinyl labels, and decals.' },
];

const stats = [
  { num: '5,000+', label: 'Happy Clients' },
  { num: '50+', label: 'Print Products' },
  { num: '24hr', label: 'Fast Turnaround' },
  { num: '5km', label: 'Free Delivery Zone' },
];

const testimonials = [
  { name: 'Sarah M.', role: 'Marketing Manager', text: 'The quality of our brochures exceeded expectations. Professional, fast, and great value.', rating: 5 },
  { name: 'James K.', role: 'Small Business Owner', text: 'Used Everprint for our business cards and banners. Stunning quality every time.', rating: 5 },
  { name: 'Aisha R.', role: 'Event Planner', text: 'Wedding cards were absolutely beautiful. Clients were so impressed. Highly recommend!', rating: 5 },
];

const processSteps = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Reach out with your idea, design, or requirements — online, by phone, or on WhatsApp.', color: '#E03A2F' },
  { num: '02', title: 'We Design & Prepare', desc: 'Our team refines your artwork and prepares it for print, sending you a proof to approve.', color: '#3A9E4A' },
  { num: '03', title: 'Quality Printing', desc: 'Your job goes to press on our Konica Minolta AccurioPRESS machines for sharp, vivid results.', color: '#2A8CC4' },
  { num: '04', title: 'Fast Delivery', desc: 'Pick up in-store or get it delivered — free within 5km on orders above $50.', color: '#1B2A6B' },
];

const portfolioPreview = [
  { category: 'Business Cards', img: 'https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?q=80', title: 'Corporate Business Cards' },
  { category: 'Wedding Cards', img: 'https://images.unsplash.com/photo-1656104717095-9d062b0d4e8d?q=80', title: 'Luxury Wedding Invitation' },
  { category: 'Banners', img: 'https://images.unsplash.com/photo-1588146256435-63ec0608c415?q=80', title: 'Large Format Store Banner' },
  { category: 'Stickers', img: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&q=80', title: 'Custom Shape-Cut Stickers' },
];

const faqs = [
  { q: 'How long does printing take?', a: 'Most standard orders (business cards, flyers, stickers) are ready within 24 hours. Larger or custom jobs like banners and booklets may take 2-3 business days depending on quantity.' },
  { q: 'Do you offer delivery?', a: 'Yes — we offer free delivery within 5km on orders above $50. For locations further out or smaller orders, delivery is available at a small additional charge.' },
  { q: 'Can you help design my artwork?', a: 'Absolutely. Our team can design your business cards, brochures, banners, and more from scratch, or refine artwork you already have.' },
  { q: 'What file formats do you accept?', a: 'We accept PDF, AI, PSD, JPG, and PNG files. For the best print quality, we recommend high-resolution PDFs with fonts and images embedded.' },
  { q: 'Do you offer bulk or business discounts?', a: 'Yes, we offer competitive pricing for bulk orders and returning business clients. Contact us for a custom quote.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="hero-section" style={{ backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center calc(50% + 30px)', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden', position: 'relative' }}>
        <style>{`
          @media (max-width: 768px) {
            .hero-section { background-image: url(/mobile-hero.png) !important; background-position: center calc(100% - 20px) !important; min-height: 700px !important; }
            .hero-badge { padding: 0.3rem 0.8rem 0.3rem 0.4rem !important; margin-bottom: 1rem !important; }
            .hero-badge span { font-size: 0.65rem !important; }
            .hero-badge span:last-child { font-size: 0.7rem !important; }
            .hero-heading { font-size: 1.7rem !important; margin-bottom: 1rem !important; }
            .hero-desc { font-size: 0.85rem !important; margin-bottom: 1rem !important; }
            .hero-buttons { margin-bottom: 1rem !important; }
            .hero-buttons a { font-size: 0.8rem !important; padding: 0.55rem 1.1rem !important; }
            .hero-contact a { font-size: 0.75rem !important; }
          }
        `}</style>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 2rem', width: '100%', textAlign: 'center' }}>
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid #E5E7EB', borderRadius: '50px', padding: '0.4rem 1rem 0.4rem 0.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 12px rgba(27,42,107,0.06)' }}>
            <span style={{ background: '#E03A2F', color: 'white', fontSize: '0.65rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '50px', letterSpacing: '0.05em' }}>NEW</span>
            <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 500 }}>Free delivery within 5km on orders above $50</span>
          </div>

          <h1 className="hero-heading" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#1B2A6B', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            A Complete Solution<br />for Your{' '}
            <span style={{ color: '#2A8CC4', position: 'relative', display: 'inline-block' }}>
              Printing
              <svg style={{ position: 'absolute', bottom: '-6px', left: 0, width: '100%' }} height="6" viewBox="0 0 200 6"><path d="M0 5 Q50 0 100 3 Q150 6 200 2" stroke="#E03A2F" strokeWidth="3" fill="none" strokeLinecap="round"/></svg>
            </span>{' '}
            Needs
          </h1>

          <p className="hero-desc" style={{ color: '#6B7280', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            High-quality digital printing for business cards, brochures, flyers, stickers, booklets, wedding cards, signs, banners and much more.
          </p>

          {/* Color bar */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {['#E03A2F','#3A9E4A','#2A8CC4','#1B2A6B'].map(c => (
              <div key={c} style={{ width: '28px', height: '5px', borderRadius: '3px', background: c }} />
            ))}
          </div>

          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              Get a Quote
            </Link>
            <Link href="/services" className="btn-outline" style={{ textDecoration: 'none' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              View Services
            </Link>
          </div>

          {/* Contact bar */}
          <div className="hero-contact" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="mailto:cmrama2022@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.875rem', textDecoration: 'none' }}>
              <svg width="16" height="16" fill="none" stroke="#1B2A6B" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              cmrama2022@gmail.com
            </a>
            <a href="tel:17537883428" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6B7280', fontSize: '0.875rem', textDecoration: 'none' }}>
              <svg width="16" height="16" fill="none" stroke="#1B2A6B" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              17537883428
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#1B2A6B', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'white', marginBottom: '0.25rem' }}>{s.num}</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:600px){div[style*="repeat(4"]{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">How It Works</span>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>From Idea to Print in 4 Simple Steps</h2>
            <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>A simple, hassle-free process designed to get your prints done quickly and correctly the first time.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {processSteps.map((step, i) => (
              <div key={i} style={{ position: 'relative', background: '#F8F9FC', borderRadius: '16px', padding: '2rem 1.5rem', border: '1px solid #E5E7EB' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: step.color, opacity: 0.25, marginBottom: '0.5rem' }}>{step.num}</div>
                <h3 style={{ fontWeight: 700, color: '#1B2A6B', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{step.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">What We Offer</span>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>Professional Printing Services</h2>
            <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>From business essentials to large-format displays, we deliver quality that makes your brand stand out.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {services.map((s, i) => (
              <div key={i} className="card-hover" style={{ background: '#F8F9FC', borderRadius: '16px', padding: '1.75rem', border: '1px solid #E5E7EB' }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #1B2A6B, #2A8CC4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{s.icon}</svg>
                </div>
                <h3 style={{ fontWeight: 700, color: '#1B2A6B', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
              View All Services
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img
              src="/homeabout.png"
              alt="Print quality"
              style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(27,42,107,0.15)' }}
            />
          </div>
          <div>
            <span className="section-tag">Why Everprint</span>
            <h2 className="section-heading">Print That Makes Your Business Shine</h2>
            <p style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: '2rem' }}>
              We use the latest Konica Minolta digital printing technology to deliver consistent, vibrant, and professional results — every single time.
            </p>
            {[
              { title: 'Premium Quality', desc: 'State-of-the-art Konica Minolta AccurioPRESS technology for sharp, vivid prints.', color: '#E03A2F' },
              { title: 'Fast Turnaround', desc: 'Quick production times without compromising on quality.', color: '#3A9E4A' },
              { title: 'Competitive Pricing', desc: 'Affordable rates with contact-for-pricing — no surprises.', color: '#2A8CC4' },
              { title: 'Free Local Delivery', desc: 'Free delivery within 5km on orders above $50.', color: '#1B2A6B' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '6px', borderRadius: '3px', background: item.color, flexShrink: 0, minHeight: '50px' }} />
                <div>
                  <h4 style={{ fontWeight: 700, color: '#1B2A6B', marginBottom: '0.25rem' }}>{item.title}</h4>
                  <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section > div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Our Work</span>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>A Glimpse of What We Create</h2>
            <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>From business essentials to celebration stationery — see the quality that goes into every job.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {portfolioPreview.map((item, i) => (
              <div key={i} className="card-hover" style={{ borderRadius: '16px', overflow: 'hidden', background: 'white', border: '1px solid #E5E7EB' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(27,42,107,0.9)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '50px' }}>
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: '1.1rem' }}>
                  <h3 style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '0.95rem' }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/portfolio" className="btn-outline" style={{ textDecoration: 'none' }}>
              View Full Portfolio
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '5rem 1.5rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card-shadow card-hover" style={{ background: 'white', borderRadius: '16px', padding: '2rem', border: '1px solid #E5E7EB' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                  {Array.from({length: t.rating}).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.95rem' }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.8rem' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">FAQ</span>
            <h2 className="section-heading" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
            <p className="section-sub" style={{ textAlign: 'center', margin: '0 auto' }}>Got a question? Here are answers to what customers ask us most.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '0.95rem' }}>{f.q}</span>
                  <svg width="18" height="18" fill="none" stroke="#1B2A6B" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.25rem' }}>
                    <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(135deg, #1B2A6B 0%, #2A8CC4 100%)', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>Ready to Print Something Amazing?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', lineHeight: 1.7 }}>Contact us today and let our team help you create print materials that make a real impact on your business.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'white', color: '#1B2A6B', padding: '0.875rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              Get a Quote Now
            </Link>
            <a href="https://wa.me/17537883428" style={{ background: '#25D366', color: 'white', padding: '0.875rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.965.568 3.799 1.549 5.353L2 22l4.754-1.525A9.963 9.963 0 0012.004 22C17.529 22 22 17.521 22 12.004 22 6.479 17.529 2 12.004 2zm0 18.18a8.176 8.176 0 01-4.181-1.146l-.299-.178-3.101.813.826-3.018-.195-.31a8.173 8.173 0 01-1.25-4.34c0-4.517 3.677-8.194 8.2-8.194 4.524 0 8.201 3.677 8.201 8.194 0 4.517-3.677 8.179-8.201 8.179z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
