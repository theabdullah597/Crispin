import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import {
  FiArrowRight, FiTarget, FiCheckCircle, FiSearch,
  FiClipboard, FiSend, FiAward, FiChevronDown
} from 'react-icons/fi'
import {
  HiOutlineDocumentText, HiOutlineScale,
  HiOutlineBriefcase, HiOutlineCog,
  HiOutlineChip, HiOutlineLibrary,
  HiOutlineCurrencyDollar, HiOutlineGlobeAlt
} from 'react-icons/hi'

function Accordion({ items }) {
  const [active, setActive] = useState(null)
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div className="accordion-item" key={i}>
          <button
            className={`accordion-header ${active === i ? 'active' : ''}`}
            onClick={() => setActive(active === i ? null : i)}
          >
            {item.q}
            <span className="icon"><FiChevronDown /></span>
          </button>
          {active === i && (
            <div className="accordion-body">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="hero hero--page">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 780 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Our Services</span>
            <h1 style={{ marginBottom: 20 }}>Specialist Multilingual Services</h1>
            <p style={{ fontSize: '1.15rem', maxWidth: 640 }}>
              Professional translation and communication support backed by intelligent language workflows.
            </p>
            <div className="btn-group" style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-primary">Contact Us <FiArrowRight /></Link>
              <Link to="/technology" className="btn btn-secondary">View Technology</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Service Areas</span>
            <h2 className="section-title">Our Core Services</h2>
          </FadeIn>
          <div className="grid grid-4">
            {[
              { icon: <HiOutlineDocumentText />, title: 'Technical Translation', desc: 'Precision translation for manuals, product documentation, and engineering content.' },
              { icon: <HiOutlineScale />, title: 'Legal & Compliance', desc: 'Accurate translation for contracts, compliance documents, and regulatory material.' },
              { icon: <HiOutlineBriefcase />, title: 'Business Communication', desc: 'Multilingual support for corporate, commercial, and international content.' },
              { icon: <HiOutlineCog />, title: 'Language Technology', desc: 'Workflow design, terminology management, and technology-assisted delivery.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="card-icon" style={{ margin: '0 auto 16px', fontSize: '1.8rem' }}>{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed : Technical Translation */}
      <section className="section section--grey" id="technical">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Service Detail</span>
            <h2 className="section-title">Technical Translation</h2>
            <p>
              We provide translation services for complex technical content including product manuals, operational documents, engineering specifications, and technical support material.
            </p>
            <ul className="feature-list">
              {['Product and operational documentation', 'Engineering and technical specifications', 'Manufacturing and process content', 'Software and technical support material'].map((item, i) => (
                <li key={i}><span className="icon"><FiCheckCircle /></span>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="card" style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', border: '1px solid #bae6fd' }}>
              <h4 className="card-title" style={{ color: 'var(--deep-blue)' }}>Best for</h4>
              <div className="tag-grid" style={{ marginTop: 12 }}>
                {['Manufacturing', 'Engineering', 'Product Teams', 'IT & Software'].map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Detailed : Legal & Compliance */}
      <section className="section" id="legal">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Service Detail</span>
            <h2 className="section-title">Legal &amp; Compliance Translation</h2>
            <p>
              Multilingual support for contracts, compliance documents, regulatory communication, policy material and formal documentation where accuracy and clarity are critical.
            </p>
            <ul className="feature-list">
              {['Contracts and legal agreements', 'Regulatory compliance documentation', 'Policy and governance material', 'Corporate legal correspondence'].map((item, i) => (
                <li key={i}><span className="icon"><FiCheckCircle /></span>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="card" style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0' }}>
              <h4 className="card-title" style={{ color: 'var(--deep-blue)' }}>Best for</h4>
              <div className="tag-grid" style={{ marginTop: 12 }}>
                {['Legal Teams', 'Compliance', 'Governance', 'Financial Services'].map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Detailed : Business Communication */}
      <section className="section section--grey" id="business">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Service Detail</span>
            <h2 className="section-title">Business Communication</h2>
            <p>
              Internal communications, client-facing documents, presentations, commercial content and international business material translated with precision and tone awareness.
            </p>
            <ul className="feature-list">
              {['Corporate communications and reports', 'Client-facing documents and proposals', 'Marketing and promotional content', 'Presentations and commercial materials'].map((item, i) => (
                <li key={i}><span className="icon"><FiCheckCircle /></span>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="card" style={{ background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', border: '1px solid #e9d5ff' }}>
              <h4 className="card-title" style={{ color: 'var(--deep-blue)' }}>Best for</h4>
              <div className="tag-grid" style={{ marginTop: 12 }}>
                {['Corporate Teams', 'Marketing', 'Sales', 'International Business'].map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Detailed : Language Technology Support */}
      <section className="section" id="tech-support">
        <div className="container split">
          <FadeIn direction="left">
            <span className="section-label">Service Detail</span>
            <h2 className="section-title">Language Technology Support</h2>
            <p>
              Workflow design, terminology management, multilingual consistency processes and technology-assisted language delivery to streamline your translation operations.
            </p>
            <ul className="feature-list">
              {['Translation workflow design and optimisation', 'Terminology database management', 'Quality assurance processes', 'Technology-assisted multilingual delivery'].map((item, i) => (
                <li key={i}><span className="icon"><FiCheckCircle /></span>{item}</li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="card" style={{ background: 'linear-gradient(135deg, #fff1f2, #ffe4e6)', border: '1px solid #fecdd3' }}>
              <h4 className="card-title" style={{ color: 'var(--deep-blue)' }}>Best for</h4>
              <div className="tag-grid" style={{ marginTop: 12 }}>
                {['Operations', 'Documentation Teams', 'Programme Managers', 'Technology Partners'].map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How We Work */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Our Process</span>
            <h2 className="section-title">How We Work</h2>
          </FadeIn>
          <FadeIn>
            <div className="process-timeline">
              {[
                { num: '01', icon: <FiSearch />, title: 'Discovery', desc: 'Understanding your content, audience and communication objectives.' },
                { num: '02', icon: <FiClipboard />, title: 'Scope & Terminology', desc: 'Defining project scope, terminology and quality standards.' },
                { num: '03', icon: <FiSend />, title: 'Delivery Workflow', desc: 'Translation, review and quality assurance processes.' },
                { num: '04', icon: <FiAward />, title: 'QA & Final Output', desc: 'Final quality checks and delivery of completed content.' },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="process-step">
                    <div className="process-number">{step.num}</div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 32 }}>
            <span className="section-label">Industries Served</span>
            <h2 className="section-title">Sectors We Support</h2>
          </FadeIn>
          <FadeIn>
            <div className="tag-grid" style={{ justifyContent: 'center', gap: 16 }}>
              {[
                { icon: <HiOutlineChip />, label: 'Technical' },
                { icon: <HiOutlineScale />, label: 'Legal' },
                { icon: <HiOutlineBriefcase />, label: 'Corporate' },
                { icon: <HiOutlineCurrencyDollar />, label: 'Financial' },
                { icon: <HiOutlineLibrary />, label: 'Compliance' },
                { icon: <HiOutlineGlobeAlt />, label: 'International Trade' },
              ].map((item, i) => (
                <span key={i} className="tag" style={{ padding: '12px 24px', fontSize: '0.95rem' }}>
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--grey">
        <div className="container">
          <FadeIn className="text-center" style={{ marginBottom: 48 }}>
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="section-title">Common Questions</h2>
          </FadeIn>
          <FadeIn>
            <Accordion items={[
              { q: 'What turnaround times do you offer?', a: 'Turnaround depends on project scope, complexity and language requirements. We work with clients to agree realistic timelines and prioritise quality throughout the delivery process.' },
              { q: 'How do you handle specialist terminology?', a: 'We use structured terminology databases and domain-aware technology to ensure consistent, accurate use of specialist language across all project content.' },
              { q: 'What languages do you support?', a: 'We support a wide range of languages including major European, Asian and global languages. Contact us to discuss your specific language requirements.' },
              { q: 'How does technology support your translation process?', a: 'Our proprietary language technology platform provides contextual analysis, terminology management and quality assurance tools that support our translators in delivering accurate, consistent multilingual content.' },
              { q: 'Can you support large-volume enterprise projects?', a: 'Yes. Our scalable infrastructure and structured workflows are designed to handle enterprise-grade translation projects across multiple languages and content types.' },
            ]} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="hero-pattern" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <FadeIn>
            <h2>Need multilingual support for technical or business content?</h2>
            <p>Our team is ready to discuss your requirements and propose a tailored solution.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Speak to Our Team <FiArrowRight /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
