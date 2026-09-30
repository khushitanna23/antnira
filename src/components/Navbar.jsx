import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, X, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo-white.png';
import './Navbar.css';

const navItems = [
  {
    type: 'link',
    label: 'Home',
    path: '/',
  },
  {
    type: 'mega',
    label: 'Collection',
    path: '/#collection',
    columns: [
      {
        heading: 'Healthcare Uniforms',
        items: [
          { label: 'Medical Scrubs', path: '/#collection' },
          { label: 'Doctor Uniforms', path: '/#collection' },
          { label: 'Nurse Uniforms', path: '/#collection' },
          { label: 'Lab Coats & Laboratory Uniforms', path: '/#collection' },
          { label: 'Ward Boy & Hospital Staff Uniforms', path: '/#collection' },
          { label: 'Patient Wear', path: '/#collection' },
          { label: 'Hospital Accessories', path: '/#collection' },
        ],
      },
      {
        heading: 'Custom T-Shirts',
        items: [
          { label: 'Custom Round-Neck T-Shirts', path: '/#collection' },
          { label: 'Custom Polo T-Shirts', path: '/#collection' },
          { label: 'Corporate T-Shirts', path: '/#collection' },
          { label: 'Promotional T-Shirts', path: '/#collection' },
          { label: 'Event & Team T-Shirts', path: '/#collection' },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    label: 'Corporate',
    items: [
      { label: 'About', path: '/about' },
      { label: 'Why ANTNIRA', path: '/why-us' },
      { label: 'Workshop', path: '/workshop' },
      { label: 'Our Customer', path: '/customers' },
      { label: 'Dealership', path: '/dealership' },
      { label: 'Certificate', path: '/certificate' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Utilities',
    items: [
      { label: 'Export', path: '/export' },
      { label: 'Blog', path: '/blog' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Resources',
    items: [
      { label: 'Technical Details', path: '/technical-details' },
      { label: 'Packaging Details', path: '/packaging-details' },
    ],
  },
  {
    type: 'link',
    label: 'CSR',
    path: '/csr',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const timeoutRef = useRef(null);
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

  // Dropdown dismissals are handled by handleNavClick and mouse leave events

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (label) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (label) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleNavClick = (e, targetPath) => {
    closeMenu();
    if (targetPath && targetPath.includes('#')) {
      const [path, hash] = targetPath.split('#');
      if (location.pathname === (path || '/')) {
        e.preventDefault();
        window.history.pushState(null, '', `/#${hash}`);
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isNavActive = (item) => {
    if (item.type === 'link') {
      if (item.path.includes('#')) {
        return location.pathname === '/' && location.hash === `#${item.path.split('#')[1]}`;
      }
      return location.pathname === item.path && !location.hash;
    }
    if (item.type === 'dropdown') {
      return item.items.some((sub) => location.pathname === sub.path);
    }
    if (item.type === 'mega') {
      return location.hash === '#collection';
    }
    return false;
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          <Link to="/" className="nav-logo">
            <img className="nav-logo-image" src={logo} alt="Antnira Group" />
            <span className="nav-logo-tagline">Committed to Your Growth</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`nav-link ${isNavActive(item) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.path)}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === 'mega') {
                const isDropdownOpen = activeDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className={`nav-dropdown-wrapper ${isDropdownOpen ? 'open' : ''}`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      className={`nav-link nav-dropdown-trigger ${isNavActive(item) ? 'active' : ''}`}
                      onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`dropdown-chevron ${isDropdownOpen ? 'rotate' : ''}`} />
                    </button>

                    <div className={`nav-mega-menu ${isDropdownOpen ? 'show' : ''}`}>
                      <div className="mega-menu-grid">
                        {item.columns.map((col, colIdx) => (
                          <div key={colIdx} className="mega-menu-column">
                            <span className="mega-column-title">{col.heading}</span>
                            <ul className="mega-column-list">
                              {col.items.map((subItem, sIdx) => (
                                <li key={sIdx}>
                                  <Link
                                    to={subItem.path}
                                    className="mega-menu-link"
                                    onClick={(e) => handleNavClick(e, subItem.path)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard Dropdown (Corporate, Utilities, Resources)
              const isDropdownOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className={`nav-dropdown-wrapper ${isDropdownOpen ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`nav-link nav-dropdown-trigger ${isNavActive(item) ? 'active' : ''}`}
                    onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={`dropdown-chevron ${isDropdownOpen ? 'rotate' : ''}`} />
                  </button>

                  <div className={`nav-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className={`nav-dropdown-item ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, subItem.path)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
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
          {navItems.map((item) => {
            if (item.type === 'link') {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`drawer-link ${isNavActive(item) ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.label}
                  <ArrowUpRight size={16} className="drawer-link-arrow" />
                </Link>
              );
            }

            if (item.type === 'mega') {
              const isExpanded = !!mobileExpanded[item.label];
              return (
                <div key={item.label} className="drawer-accordion-group">
                  <button
                    type="button"
                    className={`drawer-accordion-trigger ${isNavActive(item) ? 'active' : ''}`}
                    onClick={() => toggleMobileAccordion(item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={18} className={`drawer-chevron ${isExpanded ? 'rotate' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="drawer-accordion-content">
                      {item.columns.map((col, cIdx) => (
                        <div key={cIdx} className="drawer-mega-col">
                          <span className="drawer-mega-heading">{col.heading}</span>
                          {col.items.map((subItem, sIdx) => (
                            <Link
                              key={sIdx}
                              to={subItem.path}
                              className="drawer-sub-link"
                              onClick={(e) => handleNavClick(e, subItem.path)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Dropdown items (Corporate, Utilities, Resources)
            const isExpanded = !!mobileExpanded[item.label];
            return (
              <div key={item.label} className="drawer-accordion-group">
                <button
                  type="button"
                  className={`drawer-accordion-trigger ${isNavActive(item) ? 'active' : ''}`}
                  onClick={() => toggleMobileAccordion(item.label)}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={18} className={`drawer-chevron ${isExpanded ? 'rotate' : ''}`} />
                </button>

                {isExpanded && (
                  <div className="drawer-accordion-content">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className={`drawer-sub-link ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, subItem.path)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
