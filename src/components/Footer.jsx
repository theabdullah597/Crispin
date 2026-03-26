import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import './Footer.css'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Technology', path: '/technology' },
  { label: 'Services', path: '/services' },
  { label: 'Research & Development', path: '/research' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <img src="/footer-logo.png" alt="Crispin Alessi Limited" className="footer-logo" />
            <p className="footer-desc">
              Advanced multilingual communication powered by AI and linguistic expertise. Context-aware translation technology for global businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {footerLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Technical Translation</Link></li>
              <li><Link to="/services">Legal &amp; Compliance</Link></li>
              <li><Link to="/services">Business Communication</Link></li>
              <li><Link to="/services">Language Technology</Link></li>
              <li><Link to="/whitepaper">Whitepaper</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FiMail />
                <a href='mailto:hello@crispinalessi.co.uk'>hello@crispinalessi.co.uk</a>
              </div>
              <div className="footer-contact-item">
                <FiMapPin />
                <span>82a James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE</span>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Crispin Alessi Limited. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
