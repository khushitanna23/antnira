import { useScrollReveal } from '../hooks/useScrollReveal';
import { Globe, Ship, ShieldCheck, FileCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import exportImage from '../assets/WhyUs/global-reach.jpg';
import './Pages.css';

const exportHighlights = [
  {
    icon: Ship,
    title: 'Port-Proximity Logistics',
    desc: 'Strategic proximity to major container ports (Hazira & Nhava Sheva / JNPT) ensures swift transit and reliable sea/air export schedules.',
  },
  {
    icon: Globe,
    title: 'Global Export Markets',
    desc: 'Actively supplying apparel brands, hospitals, hospitality chains, and distributors across the USA, UK, Europe, UAE, and Africa.',
  },
  {
    icon: FileCheck,
    title: 'Complete Export Documentation',
    desc: 'Bill of Lading, Certificate of Origin, Commercial Invoices, Packing Lists, and customs compliance managed meticulously end-to-end.',
  },
  {
    icon: ShieldCheck,
    title: 'Standard Compliance & Inspection',
    desc: 'AQL 2.5 quality control standards, pre-shipment inspection certificates, and lab-tested fabric durability for international requirements.',
  },
];

const exportServices = [
  'Full Container Load (FCL) & Less than Container Load (LCL) shipments',
  'Customized private-label packaging and barcode labeling for retail & hospital supply',
  'Flexible Incoterms: FOB, CIF, CFR, Ex-Factory',
  'Third-party pre-shipment inspections (SGS / Intertek compatible)',
  'Direct air freight for urgent seasonal or sample deliveries',
  'Standardized export-grade 7-ply corrugated cartons with moisture-barrier liners',
];

export default function Export() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Global Apparel Export" breadcrumb="Export" />

      <section className="page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Export Solutions</span>
              <h2>Delivering Reliable Apparel Manufacturing Worldwide</h2>
              <p>
                ANTNIRA Group is an established Indian manufacturer and exporter of healthcare uniforms,
                corporate workwear, and custom apparel collections. We cater to businesses, institutional
                buyers, and apparel brands across global markets.
              </p>
              <p>
                From initial tech-pack development to final carton palletization, our export operations
                are built on rigorous quality checks, transparent timelines, and seamless international
                freight coordination.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Inquire for Export Program</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="page-content-image workshop-image-frame">
              <img src={exportImage} alt="Global Apparel Export Operations" />
            </div>
          </div>

          <div className="feature-grid reveal" style={{ marginTop: '60px' }}>
            {exportHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-card-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="page-cta-box reveal" style={{ marginTop: '60px' }}>
            <h3>Export Fulfillment Capabilities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '24px', textAlign: 'left' }}>
              {exportServices.map((service, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-yellow)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.92rem', color: '#4b5563' }}>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
