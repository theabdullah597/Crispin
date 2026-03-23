import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import {
  FiGlobe, FiCpu, FiFileText, FiLayers,
  FiTarget, FiDatabase, FiZap, FiArrowRight,
  FiShield, FiTrendingUp, FiBookOpen, FiMessageCircle
} from 'react-icons/fi'
import {
  HiOutlineDocumentText, HiOutlineScale,
  HiOutlineBriefcase, HiOutlineCog
} from 'react-icons/hi'

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero hero--main">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container split">
          <FadeIn className="hero-content" direction="left">
            <span className="section-label" style={{ color: '#10B981' }}>
              Crispin Alessi Limited
            </span>
            <h1>
              Context-Aware Translation Technology
            </h1>
            <p className="hero-description">
              Advanced multilingual communication powered by AI and linguistic expertise. Connecting in every language, in every market.
            </p>
            <div className="btn-group">
              <Link to="/technology" className="btn btn-primary">
                Explore Technology <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn className="hero-graphic" direction="right" delay={0.2}>
            <img src="/img.png" alt="Global translation network" />
          </FadeIn>
        </div>
      </section>

      {/* ========== VALUE STRIP ========== */}
      <section className="value-strip">
        <div className="container">
          <div className="grid grid-4">
            {[
              { icon: <FiGlobe />, title: 'Global Communication', desc: 'Multilingual reach across markets' },
              { icon: <FiCpu />, title: 'AI Language Technology', desc: 'Context-aware translation systems' },
              { icon: <FiFileText />, title: 'Technical Translation', desc: 'Precision for specialist content' },
              { icon: <FiLayers />, title: 'Scalable Workflows', desc: 'Enterprise-grade processing' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="value-item">
                  <div className="value-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECHNOLOGY OVERVIEW ========== */}
      <section className="section">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Our Platform</span>
            <h2 className="section-title">Language Technology Platform</h2>
            <p className="section-subtitle">
              Our proprietary translation platform combines natural language processing and contextual modelling to improve translation accuracy across complex documents and multilingual workflows.
            </p>
            <ul className="feature-list" style={{ marginTop: 24 }}>
              {['Contextual language modelling', 'Terminology-aware translation workflows', 'Improved accuracy for specialised subject matter', 'Scalable multilingual communication solutions'].map((item, i) => (
                <li key={i}><span className="icon"><FiTarget /></span>{item}</li>
              ))}
            </ul>
            <Link to="/technology" className="btn btn-outline" style={{ marginTop: 24 }}>
              Learn More <FiArrowRight />
            </Link>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="architecture">
              {[
                { icon: <FiFileText />, label: 'Source Input' },
                { icon: <FiCpu />, label: 'Context Engine' },
                { icon: <FiDatabase />, label: 'Terminology Layer' },
                { icon: <FiZap />, label: 'Translated Output' },
              ].map((step, i) => (
                <div key={i} className="arch-wrapper">
                  <div className="arch-step">
                    <div className="arch-icon">{step.icon}</div>
                    <h4>{step.label}</h4>
                  </div>
                  {i < 3 && <span className="arch-arrow">→</span>}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== CAPABILITY CARDS ========== */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Key Capabilities</span>
            <h2 className="section-title">Intelligent Translation Solutions</h2>
            <p className="section-subtitle mx-auto">
              Our technology delivers enterprise-grade translation capabilities designed for accuracy, consistency, and scale.
            </p>
          </FadeIn>
          <div className="grid grid-3">
            {[
              {
                icon: <FiTarget />,
                title: 'Context-Aware Translation',
                text: 'Our systems analyse contextual relationships across entire documents, ensuring translations maintain meaning and coherence beyond isolated sentences.',
              },
              {
                icon: <FiDatabase />,
                title: 'Domain Terminology Intelligence',
                text: 'Advanced terminology recognition and management ensures consistent, accurate use of specialist language across all translated content.',
              },
              {
                icon: <FiZap />,
                title: 'Real-Time Multilingual Processing',
                text: 'Scalable processing infrastructure supports high-volume multilingual workflows while maintaining contextual accuracy and quality standards.',
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.12}>
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

      {/* ========== R&D BAND ========== */}
      <section className="section section--dark">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Innovation</span>
            <h2 className="section-title">Research and Development</h2>
            <p>
              We invest in advanced language technologies designed to improve contextual understanding, semantic accuracy and multilingual processing efficiency.
            </p>
            <p>
              Our research programme focuses on natural language processing techniques, contextual translation modelling, and scalable multilingual processing infrastructure.
            </p>
            <Link to="/research" className="btn btn-teal" style={{ marginTop: 16 }}>
              Learn About Our Technology <FiArrowRight />
            </Link>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="grid grid-2" style={{ gap: 16 }}>
              {[
                { icon: <FiBookOpen />, title: 'NLP Techniques' },
                { icon: <FiTarget />, title: 'Contextual Modelling' },
                { icon: <FiDatabase />, title: 'Terminology Systems' },
                { icon: <FiTrendingUp />, title: 'Scalable Infrastructure' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="card-icon" style={{ background: 'rgba(16,185,129,0.15)' }}>{item.icon}</div>
                  <h4 className="card-title" style={{ color: '#fff', fontSize: '0.95rem' }}>{item.title}</h4>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== SERVICES PREVIEW ========== */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Specialist Language Services</h2>
            <p className="section-subtitle mx-auto">
              Professional translation and communication support across multiple sectors and content types.
            </p>
          </FadeIn>
          <div className="grid grid-4">
            {[
              { icon: <HiOutlineDocumentText />, title: 'Technical Translation', desc: 'Precision translation for manuals, documentation and engineering content.' },
              { icon: <HiOutlineScale />, title: 'Legal Translation', desc: 'Accurate translation for contracts, compliance and regulatory material.' },
              { icon: <HiOutlineBriefcase />, title: 'Business Communication', desc: 'Multilingual support for corporate and international business content.' },
              { icon: <HiOutlineCog />, title: 'Language Technology', desc: 'Workflow design, terminology management and technology-assisted delivery.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} style={{ display: 'flex', height: '100%' }}>
                <Link to="/services" style={{ display: 'flex', width: '100%', textDecoration: 'none' }}>
                  <div className="card" style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}>
                    <div className="card-icon" style={{ margin: '0 auto 16px' }}>{card.icon}</div>
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text">{card.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className="section section--grey">
        <div className="container split">
          <FadeIn direction="left">
            <img
              src="/img.png"
              alt="Crispin Alessi brand"
              style={{ maxWidth: 380, margin: '0 auto', filter: 'none' }}
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">About Crispin Alessi</h2>
            <p>
              Crispin Alessi Limited combines linguistic expertise with modern language technology to support organisations operating across languages and markets.
            </p>
            <p>
              Our team includes experienced translators, linguistic specialists, and software engineers who collaborate to deliver high-quality translation services supported by innovative language technology.
            </p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: 16 }}>
              Learn More <FiArrowRight />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="cta-band">
        <div className="hero-pattern" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn>
            <h2>Ready to improve your multilingual communication?</h2>
            <p>
              Speak to our team about how Crispin Alessi Limited can support your international communication needs.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <FiArrowRight />
              </Link>
              <Link to="/technology" className="btn btn-secondary">
                Explore Technology
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
