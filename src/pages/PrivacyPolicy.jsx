import FadeIn from '../components/FadeIn'

export default function PrivacyPolicy() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 800 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Legal</span>
            <h1>Privacy Policy</h1>
            <p style={{ fontSize: '1.1rem', marginTop: 20 }}>
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FadeIn>
            <div className="legal-content">
              <h3>1. Introduction</h3>
              <p>
                Crispin Alessi Limited ("we", "our", or "us") is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, and protect your personal information when you visit our 
                website and use our services.
              </p>

              <h3>2. Information We Collect</h3>
              <p>
                We may collect and process the following data about you:
              </p>
              <ul>
                <li><strong>Information you provide:</strong> When you fill out our contact form or enquire about our services, we collect your name, company name, email address, phone number, and any other information you choose to provide.</li>
                <li><strong>Technical Data:</strong> Information about your visit to our website, including your IP address, browser type, and operating system.</li>
                <li><strong>Cookies:</strong> Our website uses cookies to distinguish you from other users and improve your experience.</li>
              </ul>

              <h3>3. How We Use Your Information</h3>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide you with information about our language technology and translation services.</li>
                <li>Respond to your enquiries and process your requests.</li>
                <li>Improve our website and ensure content is presented effectively.</li>
                <li>Comply with our legal and regulatory obligations.</li>
              </ul>

              <h3>4. Data Security</h3>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against 
                unauthorised access, loss, or destruction. However, please note that no method of transmission over 
                the internet is 100% secure.
              </p>

              <h3>5. Data Retention</h3>
              <p>
                We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h3>6. Your Rights</h3>
              <p>
                Under the Data Protection Act 2018 and the UK GDPR, you have the right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of the personal data that we hold about you.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to the processing of your personal data.</li>
                <li>Request the restriction of processing of your personal data.</li>
              </ul>

              <h3>7. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> hello@crispinalessi.co.uk<br />
                <strong>Address:</strong> 82a James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <style jsx>{`
        .legal-content h3 {
          margin: 32px 0 16px;
          color: var(--text-dark);
          font-size: 1.4rem;
        }
        .legal-content p {
          margin-bottom: 16px;
          line-height: 1.7;
          color: var(--text-body);
        }
        .legal-content ul {
          margin-bottom: 24px;
          padding-left: 20px;
        }
        .legal-content li {
          margin-bottom: 10px;
          line-height: 1.6;
          color: var(--text-body);
        }
      `}</style>
    </>
  )
}
