import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import FadeIn from '../components/FadeIn'
import {
  FiArrowRight, FiDownload, FiFileText, FiCpu,
  FiDatabase, FiActivity, FiZap, FiLayers,
  FiTarget, FiSettings, FiCheckCircle, FiSend
} from 'react-icons/fi'

export default function Whitepaper() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    emailjs.sendForm(
      'service_5k4xru5',
      'template_m5xep8p',
      formRef.current,
      'czghcRMfXTppR4Cti'
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
      <section className="hero hero--page" style={{ background: 'var(--dark-gradient)' }}>
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container split hero-content">
          <FadeIn direction="left">
            <span className="section-label" style={{ color: '#10B981' }}>Whitepaper</span>
            <h1 style={{ marginBottom: 20 }}>Language Technology Whitepaper</h1>
            <p style={{ fontSize: '1.15rem', maxWidth: 520 }}>
              Research and engineering insights behind our context‑aware translation systems.
            </p>
            <div className="btn-group" style={{ marginTop: 24 }}>
              <a href="#download" className="btn btn-primary"><FiDownload /> Download Whitepaper</a>
              <Link to="/technology" className="btn btn-secondary">Explore Technology</Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2} className="hero-graphic">
            <img src="/img.png" alt="Technology architecture" style={{ maxWidth: 400 }} />
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <FadeIn>
            <span className="section-label">Overview</span>
            <h2 className="section-title">About This Whitepaper</h2>
            <p>
              This whitepaper describes the technical principles behind the company's language processing platform, including contextual modelling, terminology recognition, and scalable multilingual infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-4" style={{ marginTop: 32 }}>
              {[
                { icon: <FiTarget />, label: 'Semantic Translation Models' },
                { icon: <FiDatabase />, label: 'Terminology Intelligence' },
                { icon: <FiSettings />, label: 'Workflow Automation' },
                { icon: <FiLayers />, label: 'Scalable Systems' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: 24 }}>
                  <div className="card-icon" style={{ margin: '0 auto 12px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '0.85rem' }}>{item.label}</h4>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Inside the Whitepaper */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Contents</span>
            <h2 className="section-title">Inside the Whitepaper</h2>
          </FadeIn>
          <div className="grid grid-3">
            {[
              { icon: <FiTarget />, title: 'Context-Aware Translation Models', text: 'How semantic context improves translation accuracy across complex documents.' },
              { icon: <FiDatabase />, title: 'Terminology Intelligence', text: 'Identifying domain-specific language across technical documentation.' },
              { icon: <FiSettings />, title: 'Multilingual Workflow Infrastructure', text: 'Scalable pipelines for multilingual content processing.' },
              { icon: <FiCpu />, title: 'AI-Assisted Language Processing', text: 'Combining machine learning with linguistic expertise.' },
              { icon: <FiLayers />, title: 'Enterprise Translation Architecture', text: 'Designing systems for high-volume enterprise environments.' },
              { icon: <FiActivity />, title: 'Future Research Directions', text: 'Advancements in multilingual AI and contextual technologies.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Architecture</span>
            <h2 className="section-title">Technology Architecture</h2>
            <p className="section-subtitle mx-auto">
              The whitepaper includes a detailed technical architecture illustrating how the translation platform processes multilingual content.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="architecture" style={{ justifyContent: 'center' }}>
              {[
                { icon: <FiFileText />, label: 'Input Content' },
                { icon: <FiCpu />, label: 'Contextual Analysis' },
                { icon: <FiDatabase />, label: 'Terminology Intelligence' },
                { icon: <FiActivity />, label: 'Semantic Processing' },
                { icon: <FiZap />, label: 'Multilingual Output' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="arch-step">
                    <div className="arch-icon">{step.icon}</div>
                    <h4>{step.label}</h4>
                  </div>
                  {i < 4 && <span className="arch-arrow">→</span>}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Research Focus */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Research</span>
            <h2 className="section-title">Research Focus Areas</h2>
          </FadeIn>
          <div className="grid grid-3">
            {[
              { icon: <FiTarget />, title: 'Contextual Language Modelling', text: 'Improving translation accuracy using semantic relationships.' },
              { icon: <FiDatabase />, title: 'Domain Terminology Recognition', text: 'Identifying industry-specific terminology for precise translation.' },
              { icon: <FiLayers />, title: 'Scalable Language Infrastructure', text: 'Supporting enterprise-grade translation workflows.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="card-icon" style={{ margin: '0 auto 16px' }}>{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section" id="download">
        <div className="container" style={{ maxWidth: 700 }}>
          <FadeIn>
            <div className="card" style={{ padding: 48, textAlign: 'center' }}>
              <div className="card-icon" style={{ margin: '0 auto 20px', width: 72, height: 72, fontSize: '2rem' }}>
                <FiDownload />
              </div>
              <h2 style={{ marginBottom: 8 }}>Download the Full Whitepaper</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: 28 }}>
                Complete your details below to receive the whitepaper.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="wp_name">Name *</label>
                  <input className="form-input" type="text" id="wp_name" name="user_name" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wp_company">Company</label>
                  <input className="form-input" type="text" id="wp_company" name="user_company" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="wp_email">Email *</label>
                  <input className="form-input" type="email" id="wp_email" name="user_email" required />
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                  {status === 'sending' ? 'Sending...' : 'Download Whitepaper'}
                  {status !== 'sending' && <FiDownload />}
                </button>
                {status === 'sent' && (
                  <div style={{ marginTop: 16, padding: 16, background: '#f0fdf4', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8, color: '#059669', justifyContent: 'center' }}>
                    <FiCheckCircle /> Thank you! The whitepaper link will be sent to your email.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ marginTop: 16, padding: 16, background: '#fef2f2', borderRadius: 8, color: '#dc2626', textAlign: 'center' }}>
                    Something went wrong. Please try downloading again later.
                  </div>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="hero-pattern" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn>
            <h2>Explore our language technology solutions</h2>
            <p>Learn more about how our technology can support your multilingual communication needs.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/technology" className="btn btn-primary">Explore Technology <FiArrowRight /></Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
