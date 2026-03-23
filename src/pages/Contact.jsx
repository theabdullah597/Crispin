import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeIn from '../components/FadeIn'
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'service_nz201qk',    // Replace with your EmailJS Service ID
      'template_ihj57j2',   // Replace with your EmailJS Template ID
      formRef.current,
      'czghcRMfXTppR4Cti'     // Replace with your EmailJS Public Key
    ).then(() => {
      setStatus('sent')
      formRef.current.reset()
    }).catch(() => {
      setStatus('error')
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="hero hero--page">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 780 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Get In Touch</span>
            <h1 style={{ marginBottom: 20 }}>Contact Us</h1>
            <p style={{ fontSize: '1.15rem', maxWidth: 640 }}>
              Tell us about your multilingual communication requirements and our team will get back to you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Details */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ gap: 48, alignItems: 'flex-start' }}>
            {/* Form */}
            <FadeIn direction="left">
              <div className="card" style={{ padding: 40 }}>
                <h2 style={{ marginBottom: 8, fontSize: '1.5rem' }}>Send an Enquiry</h2>
                <p style={{ marginBottom: 28, color: 'var(--text-light)' }}>
                  Fill in the form below and our team will respond promptly.
                </p>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_name">Name *</label>
                      <input className="form-input" type="text" id="user_name" name="user_name" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_company">Company</label>
                      <input className="form-input" type="text" id="user_company" name="user_company" />
                    </div>
                  </div>

                  <div className="grid grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_email">Email *</label>
                      <input className="form-input" type="email" id="user_email" name="user_email" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="user_phone">Phone (optional)</label>
                      <input className="form-input" type="tel" id="user_phone" name="user_phone" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="service_required">Service Required</label>
                    <select className="form-select" id="service_required" name="service_required">
                      <option value="">Select a service...</option>
                      <option value="Technical Translation">Technical Translation</option>
                      <option value="Legal & Compliance">Legal &amp; Compliance</option>
                      <option value="Business Communication">Business Communication</option>
                      <option value="Language Technology">Language Technology</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message *</label>
                    <textarea className="form-textarea" id="message" name="message" required
                      placeholder="Please describe your requirements..."></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === 'sending'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                    {status !== 'sending' && <FiSend />}
                  </button>

                  {status === 'sent' && (
                    <div style={{ marginTop: 16, padding: 16, background: '#f0fdf4', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8, color: '#059669' }}>
                      <FiCheckCircle /> Your enquiry has been sent successfully. We will respond shortly.
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{ marginTop: 16, padding: 16, background: '#fef2f2', borderRadius: 8, color: '#dc2626' }}>
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>

            {/* Contact Details */}
            <FadeIn direction="right" delay={0.15}>
              <div className="contact-card">
                <img src="/logo.png" alt="Crispin Alessi Limited" className="contact-card-logo" />
                <p style={{ fontSize: '0.95rem', marginBottom: 28, lineHeight: 1.7 }}>
                  Crispin Alessi Limited provides advanced multilingual communication solutions for organisations operating in global markets.
                </p>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiMail /></div>
                  <div>
                    <h4>Email</h4>
                    <a href='mailto:hello@crispinalessi.co.uk'>hello@crispinalessi.co.uk</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiMapPin /></div>
                  <div>
                    <h4>Address</h4>
                    <p>82a James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE</p>
                  </div>
                </div>



                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiPhone /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>Available on request</p>
                  </div>
                </div>

                <div style={{ marginTop: 28, padding: 16, background: 'rgba(18,152,213,0.06)', borderRadius: 8, fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                  We respond to serious business enquiries promptly. For project discussions, please provide as much detail as possible.
                </div>

                <div style={{ marginTop: 28, borderRadius: 8, overflow: 'hidden' }}>
                  <iframe
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.google.com/maps?q=82a%20James%20Carter%20Road,%20Mildenhall,%20Bury%20St.%20Edmunds,%20England,%20IP28%207DE&t=&z=13&ie=UTF8&iwloc=&output=embed">
                  </iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Response Expectation */}
      <section style={{ padding: '40px 0', background: 'var(--light-grey)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <FadeIn>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', margin: 0 }}>
              For project discussions, multilingual document requirements or technology-related enquiries, please provide as much detail as possible so we can respond accurately.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
