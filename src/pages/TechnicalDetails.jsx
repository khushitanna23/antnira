import { useScrollReveal } from '../hooks/useScrollReveal';
import { Layers, Cpu, CheckSquare, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import techImage from '../assets/WhyUs/innovation-driven.png';
import './Pages.css';

const techSpecs = [
  {
    category: 'Fabric & Composition',
    details: [
      { label: 'Yarn Types', val: 'Combed Cotton, Carded Cotton, Poly-Cotton blends (65/35, 50/50), Viscose, Spandex / Elastane' },
      { label: 'GSM Range', val: '140 GSM to 320 GSM for knits; 160 GSM to 280 GSM for hospital scrubs & woven twills' },
      { label: 'Shrinkage Control', val: 'Pre-shrunk, bio-washed; dimensional stability strictly within +/- 3% after washing' },
      { label: 'Colorfastness', val: 'ISO 105 certified Grade 4+ to washing, rubbing (dry & wet), and perspiration' },
    ],
  },
  {
    category: 'Stitching & Construction',
    details: [
      { label: 'Stitches Per Inch (SPI)', val: '10 to 12 SPI standard across body seams; 14 SPI on delicate collar & placket seams' },
      { label: 'Seam Types', val: '4-thread / 5-thread overlock, double-needle topstitching, flatlock seam for athletic knits' },
      { label: 'Reinforcements', val: 'High-density bar-tacking on pocket corners, placket bases, and side-slit stress points' },
      { label: 'Tolerances', val: 'Strict adherence to buyer tech packs with measurement tolerance within +/- 0.5 cm' },
    ],
  },
  {
    category: 'Machinery & Automation',
    details: [
      { label: 'Cutting Floor', val: 'Computerized multi-ply lay cutters ensuring millimeter precision across high-volume plies' },
      { label: 'Embroidery Line', val: 'Multi-head Tajima embroidery machines for multi-color logos, badges, and crests' },
      { label: 'Button & Eyelet', val: 'Juki automated buttonholing and electronic button attach units with drop-lock stitch' },
      { label: 'Ironing & Finishing', val: 'Industrial vacuum ironing tables and high-pressure steam formers for wrinkle-free presentation' },
    ],
  },
];

export default function TechnicalDetails() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Technical Details" breadcrumb="Utilities" />

      <section className="page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Precision Engineering</span>
              <h2>Technical Standards &amp; Manufacturing Tolerances</h2>
              <p>
                At ANTNIRA, technical precision is the bedrock of dependable apparel manufacturing.
                Every garment is fabricated to exact technical parameters—ensuring shade continuity,
                consistent shrinkage control, seam strength, and long-lasting durability.
              </p>
              <p>
                Whether developing specialized medical uniforms or high-volume corporate knits, our
                production workflow is monitored against standardized measurement charts and
                strict Quality Assurance protocols.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Request Tech Pack Consultation</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="page-content-image workshop-image-frame">
              <img src={techImage} alt="Garment Technical Specifications & Machinery" />
            </div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              {techSpecs.map((group, idx) => (
                <div key={idx} className="feature-card reveal" style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div className="feature-card-icon" style={{ marginBottom: 0 }}>
                      {idx === 0 ? <Layers size={22} /> : idx === 1 ? <CheckSquare size={22} /> : <Cpu size={22} />}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>{group.category}</h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {group.details.map((item, i) => (
                      <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '12px' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--brand-yellow)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                          {item.label}
                        </span>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.5 }}>
                          {item.val}
                        </p>
                      </div>
                    ))}
                  </div>
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
