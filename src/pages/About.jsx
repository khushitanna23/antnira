import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight, Globe2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBuilding from '../assets/heroBuilding.png';
import PageBanner from '../components/PageBanner';
import GroupCompanies from '../components/GroupCompanies';
import ContactForm from '../components/ContactForm';
import './Pages.css';

const advantages = [
  'Quality Assurance Long term Business Vision',
  'International Quality Standards',
  'OEM & Private Label Solutions',
  'Flexible MOQ',
  'Custom Branding & Packaging',
  'Reliable Global Shipping',
  'Dedicated Quality Inspection',
  'Explore Before you Buy Eco-Friendly Practies',
];

const pageLinks = [
  { title: 'Manufacturing', text: 'Apparel production for global brands', path: '/workshop' },
  { title: 'Export Markets', text: 'Partners in international growth', path: '/customers' },
  { title: 'Partnerships', text: 'Building lasting value together', path: '/csr' },
  { title: 'Contact Us', text: 'Start a conversation with Antnira', path: '/contact' },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="About Antnira Group" breadcrumb="Company" />

      <section className="about-intro page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">About Antnira</span>
              <h2>An Apparel Manufacturing Partner Built Around Your Requirements</h2>
              <p>
                ANTNIRA Group is an apparel manufacturing and export partner for brands, businesses, and
                organizations that need dependable production support.
              </p>
              <p>
                From product development and sampling to quality checks, packaging, and shipment, we build
                each program around the product, quantity, and finish you require.
              </p>
              <p>
                Our focus is practical and clear: consistent workmanship, responsive communication, and
                production that helps your business move forward with confidence.
              </p>
            </div>
            <div className="page-content-image about-image-frame">
              <img src={heroBuilding} alt="Antnira Group building" />
            </div>
          </div>
          <div className="about-proof reveal">
            <div><strong>01</strong><span>Requirement-led production</span></div>
            <div><strong>02</strong><span>Quality checks at every stage</span></div>
            <div><strong>03</strong><span>Export-ready support</span></div>
            <div className="about-proof-year"><strong>ANTNIRA</strong><span>Committed to Your Growth</span></div>
          </div>
        </div>
      </section>

      <section className="about-beliefs page-section bg-light">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">What Defines Us</span>
            <h2>Quality, innovation, and partnerships built for lasting growth.</h2>
          </div>
          <div className="about-belief-grid">
            <article className="about-belief-card reveal delay-1">
              <Globe2 />
              <h3>Our Vision</h3>
              <p>To become a globally recognized apparel export company by delivering premium-quality garment solutions that create lasting value for international businesses and brands.</p>
            </article>
            <article className="about-belief-card reveal delay-2">
              <Sparkles />
              <h3>Our Mission</h3>
              <p>To empower manufacturing businesses through strategic investment, innovation, and operational excellence, creating products and partnerships that deliver lasting value worldwide.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-advantages page-section">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Why Antnira Group</span>
            <h2>Discover the advantages of choosing a partner focused on your growth.</h2>
          </div>
          <div className="about-advantages-layout">
            <div className="about-advantages-lead reveal-left">
              <h3>Our Advantages</h3>
              <p>From product development to delivery, our customer-first approach gives international businesses the structure and support to move forward with confidence.</p>
            </div>
            <div className="about-advantage-list">
              {advantages.map((advantage, index) => (
                <div className={`about-advantage-item reveal delay-${(index % 4) + 1}`} key={advantage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{advantage}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-navigate page-section bg-light">
        <div className="container">
          <div className="about-section-heading reveal">
            <span className="pill-badge">Navigate Antnira</span>
            <h2>Explore our manufacturing, markets, and partnership capabilities.</h2>
          </div>
          <div className="about-page-links">
            {pageLinks.map((item, index) => (
              <Link to={item.path} className={`about-page-link reveal delay-${index + 1}`} key={item.path}>
                <div>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight size={22} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GroupCompanies />
      <ContactForm />
    </>
  );
}
