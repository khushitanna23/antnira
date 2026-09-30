import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import aboutImage from '../assets/Apparel Built for Global Markets/20250226_103641.jpg';
import './AboutPreview.css';

const proofPoints = [
  { num: '01', title: 'Requirement-led production' },
  { num: '02', title: 'Quality checks at every stage' },
  { num: '03', title: 'Export-ready support' },
];

export default function AboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="container">
        <div className="about-preview-grid">
          {/* Left Column: Premium Visual */}
          <div className="about-preview-media reveal-left">
            <div className="about-preview-image-frame">
              <img
                src={aboutImage}
                alt="Antnira Apparel Production Unit"
                className="about-preview-photo"
              />
              <div className="about-preview-badge">
                <span className="about-preview-badge-num">100%</span>
                <span className="about-preview-badge-text">Customer-Focused Manufacturing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="about-preview-content reveal-right">
            <span className="pill-badge">About Antnira Group</span>
            <h2 className="about-preview-title">
              An Apparel Manufacturing Partner Built Around Your Requirements
            </h2>

            <p className="about-preview-lead">
              ANTNIRA Group is an apparel manufacturing and export partner for brands, businesses, and
              organizations that need dependable production support.
            </p>

            <p className="about-preview-text">
              From product development and sampling to quality checks, packaging, and shipment, we build
              each program around the product, quantity, and finish you require.
            </p>

            <p className="about-preview-text">
              Our focus is practical and clear: consistent workmanship, responsive communication, and
              production that helps your business move forward with confidence.
            </p>

            <div className="about-preview-proofs">
              {proofPoints.map((item) => (
                <div key={item.num} className="about-preview-proof-item">
                  <span className="about-preview-proof-num">{item.num}</span>
                  <span className="about-preview-proof-title">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="about-preview-cta">
              <Link to="/about" className="btn-circle">
                <span>Explore More</span>
                <span className="btn-circle-icon">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
