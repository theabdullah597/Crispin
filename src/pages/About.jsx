import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import {
  FiArrowRight, FiTarget, FiEye, FiZap,
  FiCheckCircle, FiGlobe, FiFileText, FiShield, FiSettings
} from 'react-icons/fi'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--page">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 780 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Our Company</span>
            <h1 style={{ marginBottom: 20 }}>About Crispin Alessi</h1>
            <p style={{ fontSize: '1.15rem', maxWidth: 640 }}>
              A language services business focused on intelligent multilingual communication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container split">
          <FadeIn direction="left">
            <img
              src="/img.svg"
              alt="Crispin Alessi branding"
              style={{ maxWidth: 400, margin: '0 auto' }}
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Company Overview</h2>
            <p>
              Crispin Alessi Limited is a language services company specialising in multilingual communication and translation technology.
            </p>
            <p>
              Our team includes experienced translators, linguistic specialists, and software engineers who collaborate to deliver high-quality translation services supported by innovative language technology.
            </p>
            <p>
              By combining human expertise with advanced computational techniques, we help organisations communicate effectively across languages and markets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="section section--grey">
        <div className="container" style={{ maxWidth: 880 }}>
          <FadeIn>
            <div className="mission-band" style={{ border: 'none', borderLeft: '4px solid var(--tech-blue)', background: 'linear-gradient(135deg, rgba(18,152,213,0.05), rgba(16,185,129,0.05))' }}>
              <span className="section-label" style={{ display: 'block', marginBottom: 12 }}>Our Mission</span>
              <p style={{ fontStyle: 'italic', fontSize: '1.2rem', fontWeight: 500 }}>
                "To help organisations communicate clearly, accurately and consistently across languages through a blend of professional expertise and intelligent technology."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </FadeIn>
          <div className="grid grid-3">
            {[
              {
                icon: <FiTarget />,
                title: 'Precision',
                text: 'We believe that accurate communication is the foundation of successful international business. Every translation must be precise, reliable and fit for purpose.',
              },
              {
                icon: <FiEye />,
                title: 'Clarity',
                text: 'Clear communication cuts through complexity. We work to ensure that meaning, tone and intent are faithfully conveyed across every language we support.',
              },
              {
                icon: <FiZap />,
                title: 'Innovation',
                text: 'We continually invest in technology and processes that improve the quality, speed and consistency of multilingual communication delivery.',
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="card-icon" style={{ margin: '0 auto 16px', fontSize: '1.5rem' }}>{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section section--grey">
        <div className="container" style={{ maxWidth: 880 }}>
          <FadeIn>
            <span className="section-label">Our Approach</span>
            <h2 className="section-title">How We Work</h2>
            <p>
              Our approach balances the depth of human linguistic expertise with the efficiency of modern language technology. Every project benefits from structured workflows, dedicated terminology management and rigorous quality assurance.
            </p>
            <p>
              We work as partners with our clients, taking time to understand their communication context, audience and terminology before beginning any translation work. This consultative approach ensures that our output is always accurate, consistent and appropriate for its intended use.
            </p>
            <ul className="feature-list" style={{ marginTop: 20 }}>
              {[
                'Professional linguistic expertise combined with technology support',
                'Structured workflows with clear quality milestones',
                'Terminology-aware translation processes',
                'Client-focused delivery with transparent communication',
              ].map((item, i) => (
                <li key={i}><span className="icon"><FiCheckCircle /></span>{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">Areas of Specialisation</h2>
          </FadeIn>
          <div className="grid grid-4">
            {[
              { icon: <FiGlobe />, title: 'Multilingual Communication' },
              { icon: <FiFileText />, title: 'Technical Content' },
              { icon: <FiShield />, title: 'Compliance Documentation' },
              { icon: <FiSettings />, title: 'Language Technology' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center', padding: 28 }}>
                  <div className="card-icon" style={{ margin: '0 auto 14px' }}>{card.icon}</div>
                  <h4 className="card-title" style={{ fontSize: '0.95rem', marginBottom: 0 }}>{card.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="hero-pattern" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn>
            <h2>Speak to us about your multilingual communication needs</h2>
            <p>We are ready to help your organisation communicate effectively across languages.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Contact Us <FiArrowRight /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
