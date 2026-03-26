import FadeIn from '../components/FadeIn'

export default function TermsOfService() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero-pattern" />
        <div className="hero-dots" />
        <img src="/hero-overlay.png" alt="" className="hero-overlay-img" />
        <div className="container hero-content" style={{ maxWidth: 800 }}>
          <FadeIn>
            <span className="section-label" style={{ color: '#10B981' }}>Legal</span>
            <h1>Terms and Conditions</h1>
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
              <h3>1. Agreement to Terms</h3>
              <p>
                By accessing or using the website of Crispin Alessi Limited ("we", "our", or "us"), 
                you agree to be bound by these Terms and Conditions. If you do not agree with any part 
                of these terms, you must not use our website.
              </p>

              <h3>2. Use of the Website</h3>
              <p>
                The information provided on this website is for general information purposes only. 
                You agree to use the website only for lawful purposes and in a manner that does not 
                infringe the rights of, or restrict or inhibit the use and enjoyment of this website by any third party.
              </p>

              <h3>3. Intellectual Property Rights</h3>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, 
                and software, is the property of Crispin Alessi Limited and is protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any part of 
                this website without our prior written consent.
              </p>

              <h3>4. Disclaimers and Limitation of Liability</h3>
              <p>
                While we strive to ensure the accuracy and reliability of the information on our website, 
                we make no representations or warranties of any kind, express or implied, about the 
                completeness, accuracy, reliability, or availability of the website or the information, 
                products, or services contained on the website.
              </p>
              <p>
                In no event will we be liable for any loss or damage, including without limitation, 
                indirect or consequential loss or damage, arising out of, or in connection with, the use of this website.
              </p>

              <h3>5. Translation Accuracy</h3>
              <p>
                Our services provide context-aware translation and multilingual communication solutions. 
                While we use advanced technology and linguistic expertise to ensure high-quality output, 
                the interpretation and use of translated material is the responsibility of the client.
              </p>

              <h3>6. External Links</h3>
              <p>
                Our website may contain links to third-party websites. These links are provided for 
                your convenience only. We have no control over the content of these sites and accept 
                no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>

              <h3>7. Governing Law</h3>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of 
                England and Wales. Any disputes arising in connection with these terms shall be subject to 
                the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h3>8. Changes to Terms</h3>
              <p>
                We reserve the right to revise these Terms and Conditions at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of these terms.
              </p>

              <h3>9. Contact Us</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
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
