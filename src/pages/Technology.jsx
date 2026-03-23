import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import {
  FiTarget, FiDatabase, FiCpu, FiLayers,
  FiArrowRight, FiFileText, FiZap, FiShield,
  FiCheckCircle, FiXCircle, FiSettings, FiActivity
} from 'react-icons/fi'
import {
  HiOutlineDocumentText, HiOutlineScale,
  HiOutlineBriefcase, HiOutlinePresentationChartBar
} from 'react-icons/hi'

export default function Technology() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--page">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 780 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Language Technology</span>
            <h1 style={{ marginBottom: 20 }}>Language Technology and Innovation</h1>
            <p style={{ fontSize: '1.15rem', maxWidth: 680 }}>
              We develop and deploy language technology designed to improve context retention, terminology accuracy and multilingual workflow efficiency.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">The Challenge</span>
            <h2 className="section-title">Why Conventional Tools Fall Short</h2>
          </FadeIn>
          <div className="comparison">
            <FadeIn direction="left">
              <div className="comparison-card comparison-card--problem">
                <h3>Where conventional translation tools struggle</h3>
                <ul>
                  {[
                    'Sentence-level processing without broader context',
                    'Lost meaning across longer documents',
                    'Terminology inconsistency in specialist content',
                    'Poor handling of domain-specific material',
                    'No support for real-time workflow integration',
                  ].map((item, i) => (
                    <li key={i}><span className="icon"><FiXCircle style={{ color: '#ef4444' }} /></span>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="comparison-card comparison-card--solution">
                <h3>How our approach responds</h3>
                <ul>
                  {[
                    'Document-wide contextual analysis for coherent output',
                    'Semantic modelling preserves meaning across languages',
                    'Structured terminology intelligence for consistency',
                    'Domain-aware processing for specialist industries',
                    'Scalable pipeline designed for enterprise workflows',
                  ].map((item, i) => (
                    <li key={i}><span className="icon"><FiCheckCircle style={{ color: '#10B981' }} /></span>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">System Architecture</span>
            <h2 className="section-title">Translation Platform Architecture</h2>
            <p className="section-subtitle mx-auto">
              A modular, scalable architecture designed for enterprise multilingual communication.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="architecture" style={{ justifyContent: 'center' }}>
              {[
                { icon: <FiFileText />, label: 'Input Content' },
                { icon: <FiCpu />, label: 'Contextual Analysis Engine' },
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

      {/* Core Capabilities */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Deep Dive</span>
            <h2 className="section-title">Core Technology Capabilities</h2>
          </FadeIn>
          <div className="grid grid-4">
            {[
              {
                icon: <FiTarget />,
                title: 'Context Retention',
                text: 'Maintains semantic relationships across entire documents, ensuring translations remain accurate within the broader context of the source material.',
              },
              {
                icon: <FiDatabase />,
                title: 'Terminology Mapping',
                text: 'Recognises and preserves domain-specific terminology consistency across large datasets and translated content.',
              },
              {
                icon: <FiLayers />,
                title: 'Semantic Interpretation',
                text: 'Analyses contextual signals including terminology usage, document structure and linguistic patterns for reliable output.',
              },
              {
                icon: <FiSettings />,
                title: 'Workflow Integration',
                text: 'Modular processing pipelines allow translation tasks to be distributed efficiently while maintaining consistent quality.',
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

      {/* Use Cases */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Applications</span>
            <h2 className="section-title">Technology Use Cases</h2>
            <p className="section-subtitle mx-auto">
              Our technology supports a wide range of enterprise multilingual communication requirements.
            </p>
          </FadeIn>
          <div className="grid grid-4">
            {[
              { icon: <HiOutlineDocumentText />, title: 'Technical Documentation', desc: 'Product manuals, engineering specs and operational documentation.' },
              { icon: <HiOutlineScale />, title: 'Compliance & Legal', desc: 'Contracts, regulatory submissions and policy material.' },
              { icon: <HiOutlineBriefcase />, title: 'Corporate Communication', desc: 'Internal comms, client content and presentations.' },
              { icon: <HiOutlinePresentationChartBar />, title: 'Multilingual Support', desc: 'Knowledge management and international product content.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="card-icon" style={{ margin: '0 auto 16px' }}>{card.icon}</div>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-text">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Note */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FadeIn>
            <div className="mission-band">
              <p>
                "Our development work focuses on making translation workflows more context-aware, more accurate in specialist domains and more practical for real-world business use."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="hero-pattern" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn>
            <h2>Explore how our technology supports multilingual operations</h2>
            <p>Learn more about our context-aware translation platform and how it can benefit your organisation.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Contact Us <FiArrowRight /></Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
