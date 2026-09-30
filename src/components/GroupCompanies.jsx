import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import apparelExport from '../assets/Focus/Apparel Export.png';
import uniformsWorkwear from '../assets/Focus/UniformsScrubsWorkwear.png';
import oemOdmPrivateLabel from '../assets/Focus/OEMODMPrivate Label.png';
import './GroupCompanies.css';

const companies = [
  {
    tag: 'Manufacturing Excellence',
    title: 'Building Global Businesses',
    subtitle: 'Apparel Export',
    desc: 'High-volume apparel production and dedicated export partnerships built for long-term international expansion.',
    image: apparelExport,
    link: '/workshop',
  },
  {
    tag: 'Healthcare & Corporate',
    title: 'Uniforms, Scrubs & Workwear',
    subtitle: 'Functional Garments',
    desc: 'Precision-tailored medical scrubs, patient uniforms, corporate polo shirts, and industrial workwear.',
    image: uniformsWorkwear,
    link: '/workshop',
  },
  {
    tag: 'Flexible & Scalable',
    title: 'OEM, ODM & Private Label',
    subtitle: 'Custom Brand Production',
    desc: 'From custom tech packs, private labels and fabric dyeing to tailored trims and delivery logistics.',
    image: oemOdmPrivateLabel,
    link: '/dealership',
  },
];

export default function GroupCompanies() {
  return (
    <section className="group-companies-section">
      <div className="container">
        <div className="group-companies-header reveal">
          <div>
            <span className="pill-badge">Antnira Group</span>
            <h2>Our Focus Areas</h2>
          </div>
          <Link to="/about" className="explore-link">
            Explore More <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="group-cards-grid">
          {companies.map((company, index) => (
            <Link
              to={company.link}
              key={index}
              className={`group-feature-card reveal delay-${index + 1}`}
            >
              <div className="group-card-bg-wrap">
                <img src={company.image} alt={company.title} className="group-card-bg-img" />
                <div className="group-card-scrim" />
              </div>
              <div className="group-card-overlay-content">
                <span className="group-card-tag">{company.tag}</span>
                <span className="group-card-subtitle">{company.subtitle}</span>
                <h3>{company.title}</h3>
                <p>{company.desc}</p>
                <div className="group-card-action">
                  <span>Explore Program</span>
                  <span className="group-action-circle">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
