import { useScrollReveal } from '../hooks/useScrollReveal';
import { Award, ShieldCheck, CheckCircle2, FileBadge, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import certImage from '../assets/WhyUs/quality-controll.jpg';
import './Pages.css';

const certificates = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    authority: 'Quality Management Systems',
    desc: 'Certified compliance covering garment production management, standardized measurement tolerances, and systematic quality assurance processes.',
  },
  {
    icon: ShieldCheck,
    title: 'OEKO-TEX Standard 100 Compatible',
    authority: 'Harmful Substance Free Testing',
    desc: 'All procured yarns, knits, dyes, and finishes conform strictly to international non-toxicity and ecological textile parameters.',
  },
  {
    icon: FileBadge,
    title: 'Government Recognized Export House',
    authority: 'Ministry of Commerce & Industry',
    desc: 'Official Indian export compliance credentials, verified customs documentation history, and authorized international trade verification.',
  },
  {
    icon: CheckCircle2,
    title: 'Ethical & Workplace Safety Compliance',
    authority: 'Labor & Factory Standards',
    desc: 'Fair wage practices, zero child-labor guarantee, clean and ventilated manufacturing halls, and regular employee safety training.',
  },
];

export default function Certificate() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Certifications &amp; Standards" breadcrumb="Corporate" />

      <section className="page-section">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Verified Quality</span>
              <h2>Certifications That Verify Our Commitment to Quality</h2>
              <p>
                At ANTNIRA Group, we believe accountability and independent certifications give our global
                buyers complete peace of mind.
              </p>
              <p>
                From manufacturing workflow audits to fiber non-toxicity testing, our certifications ensure
                every garment delivered across borders meets international standards for quality,
                safety, and workmanship.
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>Request Certificate Copies</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="page-content-image workshop-image-frame">
              <img src={certImage} alt="Quality Inspection & Certification" />
            </div>
          </div>

          <div style={{ marginTop: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {certificates.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="feature-card reveal" style={{ padding: '30px' }}>
                    <div className="feature-card-icon">
                      <Icon size={26} />
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-yellow)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                      {cert.authority}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                      {cert.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
                      {cert.desc}
                    </p>
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
