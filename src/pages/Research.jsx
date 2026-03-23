import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import {
  FiArrowRight, FiBookOpen, FiTarget, FiDatabase,
  FiTrendingUp, FiCheckCircle, FiSettings, FiLayers
} from 'react-icons/fi'

export default function Research() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--page" style={{ background: 'var(--dark-gradient)' }}>
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 780 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Innovation</span>
            <h1 style={{ marginBottom: 20 }}>Research &amp; Development</h1>
            <p style={{ fontSize: '1.15rem', maxWidth: 640 }}>
              Innovation is central to our approach to language technology, contextual modelling and multilingual workflow improvement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Innovation Matters */}
      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <FadeIn>
            <span className="section-label">Why It Matters</span>
            <h2 className="section-title">The Case for Innovation</h2>
            <p>
              Multilingual communication becomes more difficult when context, specialist terminology and scale all matter at once. Generic translation tools were not designed for this level of complexity.
            </p>
            <p>
              That is why we invest continuously in research and development — to build language technology that is more accurate, more context-aware, and more practical for real-world business use.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Research Focus</span>
            <h2 className="section-title">Our Focus Areas</h2>
          </FadeIn>
          <div className="grid grid-4">
            {[
              {
                icon: <FiBookOpen />,
                title: 'Natural Language Processing',
                text: 'Developing advanced NLP techniques to improve how translation systems understand linguistic structure, grammar and idiomatic expression across languages.',
              },
              {
                icon: <FiTarget />,
                title: 'Contextual Translation Modelling',
                text: 'Building systems that maintain semantic context across entire documents, not just isolated sentences, to produce more coherent and reliable translations.',
              },
              {
                icon: <FiDatabase />,
                title: 'Domain Terminology Systems',
                text: 'Creating structured terminology frameworks that enable translation engines to recognise and preserve specialist language across large content sets.',
              },
              {
                icon: <FiSettings />,
                title: 'Workflow Optimisation',
                text: 'Designing scalable processing infrastructure that supports efficient multilingual content delivery without compromising quality or consistency.',
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
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

      {/* Development Themes */}
      <section className="section">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Development Work</span>
            <h2 className="section-title">Current Development Themes</h2>
            <p>
              Our engineering and linguistic teams work together on practical research problems aimed at improving the reliability and performance of our translation technology.
            </p>
            <ul className="feature-list" style={{ marginTop: 20 }}>
              {[
                'Context retention across long-form documents',
                'Structured terminology workflow management',
                'Semantic interpretation for specialist content',
                'Scalable multilingual processing architecture',
                'AI-assisted quality assurance techniques',
              ].map((item, i) => (
                <li key={i}><span className="icon"><FiCheckCircle /></span>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: <FiLayers />, label: 'Context Retention', color: '#1298D5' },
                { icon: <FiDatabase />, label: 'Terminology Management', color: '#10B981' },
                { icon: <FiTrendingUp />, label: 'Semantic Analysis', color: '#0891b2' },
                { icon: <FiSettings />, label: 'Scalable Architecture', color: '#032D61' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: 24 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${item.color}15`, color: item.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px', fontSize: '1.3rem'
                  }}>
                    {item.icon}
                  </div>
                  <h4 style={{ fontSize: '0.85rem' }}>{item.label}</h4>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Outcomes */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Client Impact</span>
            <h2 className="section-title">How Our Research Benefits Clients</h2>
            <p className="section-subtitle mx-auto">
              Our technology research translates directly into real-world improvements for client multilingual communication.
            </p>
          </FadeIn>
          <div className="grid grid-4">
            {[
              { icon: <FiCheckCircle />, title: 'Clearer Communication', desc: 'More coherent and natural translations across languages.' },
              { icon: <FiTarget />, title: 'Specialist Accuracy', desc: 'Improved precision for domain-specific terminology.' },
              { icon: <FiDatabase />, title: 'Consistent Terminology', desc: 'Reliable terminology use across multi-document projects.' },
              { icon: <FiTrendingUp />, title: 'Efficient Delivery', desc: 'Faster, more scalable multilingual content production.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="card-icon" style={{ margin: '0 auto 16px', background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(18,152,213,0.12))' }}>
                    {card.icon}
                  </div>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-text">{card.desc}</p>
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
            <h2>Talk to us about language technology and multilingual delivery</h2>
            <p>Learn how our research translates into practical improvements for your communication needs.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Contact Us <FiArrowRight /></Link>
              <Link to="/technology" className="btn btn-secondary">Explore Technology</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
