import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-white.png';
import './Footer.css';

function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscriber, setSubscriber] = useState({ name: '', email: '' });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscriber.email) {
      setSubscribed(true);
      setSubscriber({ name: '', email: '' });
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer-area">
      <div className="container">
        {/* Top Newsletter Bar (Image 1 Reference) */}
        <div className="footer-newsletter-wrap">
          <div className="footer-newsletter-left">
            <h4 className="footer-newsletter-title">Subscribe to our newsletter</h4>
            <span className="footer-newsletter-subtitle">
              Get Early Access to New Collections and Specials!
            </span>
          </div>

          <div className="footer-newsletter-right">
            <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="text"
                placeholder="Enter Name"
                value={subscriber.name}
                onChange={(e) => setSubscriber({ ...subscriber, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={subscriber.email}
                onChange={(e) => setSubscriber({ ...subscriber, email: e.target.value })}
                required
              />
              <button type="submit" className="footer-btn-subscribe">
                SUBSCRIBE
              </button>
            </form>
            {subscribed && (
              <span className="footer-newsletter-success">
                ✓ Thank you for subscribing to Antnira Group updates!
              </span>
            )}
          </div>
        </div>

        <hr className="footer-divider-line" />

        {/* 3-Column Main Footer (Image 1 Reference) */}
        <div className="footer-main-columns">
          {/* Column 1: Quick Links with 2 Sub-Columns */}
          <div className="footer-col-quicklinks">
            <h4 className="footer-col-title">Quick Links</h4>
            <div className="footer-quicklinks-grid">
              <ul className="footer-links-subcol">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/workshop">Workshops</Link></li>
                <li><Link to="/why-us">Why Us</Link></li>
              </ul>
              <ul className="footer-links-subcol">
                <li><Link to="/customers">Our Customers</Link></li>
                <li><Link to="/dealership">Dealership</Link></li>
                <li><Link to="/csr">CSR Activities</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Center Brand Column (Text + Logo + Socials) */}
          <div className="footer-col-center">
            <p className="footer-center-desc">
              Antnira Group is a top manufacturer &amp; exporter of premium apparel.
              We are committed to quality, innovation &amp; customer satisfaction.
            </p>

            <Link to="/" className="footer-center-logo-link" aria-label="Antnira Home">
              <div className="footer-logo-box">
                <img src={logo} alt="Antnira Group" className="footer-logo-img" />
              </div>
              <span className="footer-logo-tagline">Committed to Your Growth</span>
            </Link>

            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-btn"
              >
                <IconLinkedIn />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-btn"
              >
                <IconFacebook />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="footer-social-btn"
              >
                <IconYouTube />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="footer-social-btn"
              >
                <IconTwitter />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Column */}
          <div className="footer-col-contact">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-address">
              <span>Laxmi Industrial, 117 to 121, Lindiad, Gujarat 394110</span>
              <span className="footer-addr-office">
                Corporate Office: B/4, Krushna Complex, Hirabaug, Surat, Gujarat 395006
              </span>
            </div>

            <div className="footer-contact-links">
              <div>
                <span>P: </span>
                <a href="tel:+918799608484">+91 8799608484</a>
              </div>
              <div>
                <span>E: </span>
                <a href="mailto:connect@antnira.com">connect@antnira.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-copyright-bar">
        <div className="container footer-copyright-inner">
          <p className="footer-copyright-text">
            {new Date().getFullYear()} © <Link to="/">Antnira Group</Link> - All rights reserved
          </p>
          <p className="footer-copyright-tagline">
            Committed to Your Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
