'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    border: '1.5px solid #E5E7EB',
    borderRadius: '10px',
    fontSize: '0.95rem',
    color: '#111827',
    background: '#F9FAFB',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1B2A6B 0%, #2A8CC4 100%)', padding: '5rem 1.5rem', textAlign: 'center', color: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 1rem', borderRadius: '50px', marginBottom: '1rem' }}>Contact Us</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>Let's Start Your Print Project</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.7 }}>Fill in the form below and we will get back to you with a quote tailored to your needs.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: '5rem 1.5rem', background: '#F8F9FC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
          {/* Info */}
          <div>
            <h2 style={{ fontWeight: 800, color: '#1B2A6B', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Get in Touch</h2>

            {[
              { label: 'Email', value: 'cmrama2022@gmail.com', href: 'mailto:cmrama2022@gmail.com', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>, color: '#2A8CC4' },
              { label: 'Phone', value: '17537883428', href: 'tel:17537883428', icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>, color: '#3A9E4A' },
            ].map((c, i) => (
              <a key={i} href={c.href} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.5rem', textDecoration: 'none' }}>
                <div style={{ width: '44px', height: '44px', background: c.color + '15', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="20" height="20" fill="none" stroke={c.color} strokeWidth="2" viewBox="0 0 24 24">{c.icon}</svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1B2A6B', marginBottom: '0.1rem' }}>{c.label}</div>
                  <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>{c.value}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a href="https://wa.me/17537883428" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: '#25D366', borderRadius: '14px', padding: '1.25rem', textDecoration: 'none', marginBottom: '2rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.965.568 3.799 1.549 5.353L2 22l4.754-1.525A9.963 9.963 0 0012.004 22C17.529 22 22 17.521 22 12.004 22 6.479 17.529 2 12.004 2zm0 18.18a8.176 8.176 0 01-4.181-1.146l-.299-.178-3.101.813.826-3.018-.195-.31a8.173 8.173 0 01-1.25-4.34c0-4.517 3.677-8.194 8.2-8.194 4.524 0 8.201 3.677 8.201 8.194 0 4.517-3.677 8.179-8.201 8.179z"/></svg>
              <div>
                <div style={{ color: 'white', fontWeight: 700 }}>Chat on WhatsApp</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>Quick response guaranteed</div>
              </div>
            </a>

            {/* Delivery note */}
            <div style={{ background: '#EEF2FF', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <svg width="20" height="20" fill="none" stroke="#1B2A6B" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: '2px' }}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <div>
                <div style={{ fontWeight: 700, color: '#1B2A6B', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Free Delivery Available</div>
                <div style={{ color: '#6B7280', fontSize: '0.8rem', lineHeight: 1.6 }}>Free delivery within 5km on orders above $50. Contact us to confirm your delivery area.</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(27,42,107,0.08)', border: '1px solid #E5E7EB' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '64px', height: '64px', background: '#3A9E4A15', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <svg width="32" height="32" fill="none" stroke="#3A9E4A" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontWeight: 800, color: '#1B2A6B', fontSize: '1.4rem', marginBottom: '0.75rem' }}>Message Sent!</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }}>Thank you for reaching out. We will review your request and get back to you shortly with a quote.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 800, color: '#1B2A6B', marginBottom: '1.75rem', fontSize: '1.25rem' }}>Request a Quote</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input style={inputStyle} type="text" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Phone Number *</label>
                      <input style={inputStyle} type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Email Address *</label>
                    <input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Service Required</label>
                    <select style={{...inputStyle, cursor: 'pointer'}} value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                      <option value="">Select a service...</option>
                      {['Business Cards', 'Brochures', 'Flyers', 'Banners', 'Wedding Cards', 'Stickers', 'Booklets', 'Signs', 'Roll Up Banners', 'Other'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: '#374151', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Message / Project Details *</label>
                    <textarea style={{...inputStyle, minHeight: '130px', resize: 'vertical'}} placeholder="Describe your print requirements — quantity, size, design details, deadline..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
                  </div>
                  <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Quote Request
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div[style*="1fr 1.5fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
