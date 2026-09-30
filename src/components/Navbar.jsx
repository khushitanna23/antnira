import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, X, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo-white.png';
import './Navbar.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Collection', path: '/#collection' },
  { label: 'Company', path: '/about' },
  { label: 'Workshop', path: '/workshop' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Our Customers', path: '/customers' },
  { label: 'Dealership', path: '/dealership' },
  { label: 'CSR', path: '/csr' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e, item) => {
    closeMenu();
    if (item.path.includes('#')) {
      const hash = item.path.split('#')[1];
      if (location.pathname === '/') {
        e.preventDefault();
        window.history.pushState(null, '', `/#${hash}`);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isItemActive = (item) => {
    if (item.path.includes('#')) {
      return location.hash === `#${item.path.split('#')[1]}`;
    }
    return location.pathname === item.path && !location.hash;
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          <Link to="/" className="nav-logo">
            <img className="nav-logo-image" src={logo} alt="Antnira Group" />
            <span className="nav-logo-tagline">Committed to Your Growth</span>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-link ${isItemActive(item) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="nav-cta">
              <span>Get in Touch</span>
              <span className="nav-cta-arrow">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <button
              className={`nav-toggle ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Offcanvas Mobile & Quick Drawer */}
      <div
        className={`nav-mobile-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside className={`nav-mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link to="/" className="drawer-logo" onClick={closeMenu}>
            <img src={logo} alt="Antnira Group" />
            <span className="drawer-tagline">Committed to Your Growth</span>
          </Link>
          <button className="drawer-close-btn" onClick={closeMenu} aria-label="Close navigation">
            <X size={24} />
          </button>
        </div>

        <div className="drawer-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`drawer-link ${isItemActive(item) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
              <ArrowUpRight size={16} className="drawer-link-arrow" />
            </Link>
          ))}
        </div>

        <div className="drawer-cta-wrapper">
          <Link to="/contact" className="btn btn-primary w-100" onClick={closeMenu}>
            Discuss Your Requirement <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="drawer-contact-box">
          <h5>Quick Contact</h5>
          <a href="tel:+918799608484" className="drawer-contact-item">
            <Phone size={15} /> +91 8799608484
          </a>
          <a href="mailto:connect@antnira.com" className="drawer-contact-item">
            <Mail size={15} /> connect@antnira.com
          </a>
          <span className="drawer-contact-item">
            <MapPin size={15} /> Surat &amp; Lindiad, Gujarat, India
          </span>
        </div>
      </aside>
    </header>
  );
}
