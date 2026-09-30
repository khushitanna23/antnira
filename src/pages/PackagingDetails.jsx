import { useScrollReveal } from '../hooks/useScrollReveal';
import { Package, Box, QrCode, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import packImage from '../assets/WhyUs/customer-focused.jpg';
import './Pages.css';

const packagingStandards = [
  {
    icon: Package,
    title: 'Individual Primary Packing',
    points: [
      'Self-adhesive OPP / PP polybags with custom brand printing and air vent holes',
      'Eco-friendly biodegradable and compostable bag options available upon request',
      'Precise single-piece folding with branded tissue inserts and collar supports',
      'Individual barcode sticker with SKU, color, size, and EAN/UPC information',
    ],
  },
  {
    icon: Box,
    title: 'Export Master Cartons',
    points: [
      'Heavy-duty 5-ply and 7-ply virgin kraft corrugated fiberboard cartons (14-16 kg/cm² burst factor)',
      'Waterproof heavy-gauge LDPE polybag liner lining the interior of each master carton',
      'Standardized carton dimensions optimized for sea container and air cargo pallet volume',
      'Heavy-duty reinforced tape and cross-directional PP strapping for ocean transit safety',
    ],
  },
  {
    icon: QrCode,
    title: 'Labeling & Carton Markings',
    points: [
      'Dual-side carton markings: Buyer Name, Order No., Style Code, Color, Size Breakdown, Gross/Net Weight',
      'Logistics barcodes compliant with GS1 international retail and warehouse standards',
      'Tamper-evident security seals on all export consignments',
      'High-absorbency silica gel pouches in every carton for humidity and mold prevention',
    ],
  },
];

export default function PackagingDetails() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Packaging Details" breadcrumb="Utilities" />

      <section className="page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Safe &amp; Compliant Fulfillment</span>
              <h2>Export-Grade Apparel Packaging Specifications</h2>
              <p>
                Professional packaging protects your apparel investment through long ocean transits and
                ensures retail-ready delivery at your distribution center.
              </p>
              <p>
                At ANTNIRA, we follow rigorous export packing standards tailored to your branding
                specifications, warehouse guidelines, and international customs criteria.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Custom Packaging Inquiry</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="page-content-image workshop-image-frame">
              <img src={packImage} alt="Apparel Packaging & Quality Finishing" />
            </div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              {packagingStandards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div key={idx} className="feature-card reveal" style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                      <div className="feature-card-icon" style={{ marginBottom: 0 }}>
                        <Icon size={22} />
                      </div>
                      <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{std.title}</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {std.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--brand-yellow)', flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.55 }}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
