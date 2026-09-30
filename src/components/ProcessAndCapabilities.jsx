import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import qualityImage from '../assets/WhyUs/quality-controll.jpg';
import processImage from '../assets/Apparel Built for Global Markets/20250226_103957.jpg';
import capabilityImage from '../assets/Apparel Built for Global Markets/23.png';
import './ProcessAndCapabilities.css';

const problems = [
  {
    problem: 'Inconsistent Quality',
    solution: 'Approved specifications and quality checks throughout production.',
  },
  {
    problem: 'Fabric Shade Differences',
    solution: 'Fabric and shade approval before bulk production begins.',
  },
  {
    problem: 'Poor Stitching & Finishing',
    solution: 'Inspection of measurements, stitching, and finishing at every line.',
  },
  {
    problem: 'Production Delays',
    solution: 'Milestone production planning and transparent progress monitoring.',
  },
  {
    problem: 'Communication Problems',
    solution: 'Clear coordination and single point of contact from sampling through final delivery.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Requirement & Spec Brief',
    desc: 'Design, fabric, GSM, color, sizing, quantity and application analyzed thoroughly.',
  },
  {
    step: '02',
    title: 'Development & Sampling',
    desc: 'Fabric selection, construction, trims, measurements and prototype samples created.',
  },
  {
    step: '03',
    title: 'Bulk Production',
    desc: 'Bulk apparel manufacturing according to approved physical specifications.',
  },
  {
    step: '04',
    title: 'Quality Inspection',
    desc: 'Measurements, stitching, fabric shade, finishing and packaging checks verified.',
  },
  {
    step: '05',
    title: 'Export Packaging & Delivery',
    desc: 'Finished goods packed and prepared according to international delivery requirements.',
  },
];

const capabilities = [
  {
    title: 'Fabric Development',
    items: 'Cotton • Polyester • Viscose • Blends • Knits • Stretch Fabrics',
  },
  {
    title: 'Product Development',
    items: 'Tech packs • Measurements • Samples • Color matching • Branding',
  },
  {
    title: 'Production',
    items: 'T-Shirts • Polo Shirts • Scrubs • Uniforms • Hoodies • Workwear',
  },
  {
    title: 'Finishing',
    items: 'Printing • Embroidery • Labels • Washing • Packaging',
  },
];

export default function ProcessAndCapabilities() {
  return (
    <div className="editorial-flow-container">
      {/* SECTION A: Problems We Solve (Image Left, Content Right) */}
      <section className="editorial-section editorial-alt-a">
        <div className="container">
          <div className="editorial-grid img-left">
            <div className="editorial-media reveal-left">
              <div className="editorial-img-frame">
                <img
                  src={qualityImage}
                  alt="Quality control and inspection at Antnira"
                  className="editorial-photo"
                />
                <div className="editorial-floating-tag">
                  <strong>Quality Assurance</strong>
                  <span>Stringent checks at every line</span>
                </div>
              </div>
            </div>

            <div className="editorial-text reveal-right">
              <span className="pill-badge">Our Solutions</span>
              <h2>Problems We Solve</h2>
              <p className="editorial-intro">
                Apparel manufacturing shouldn't be unpredictable. We address the most common industry
                friction points through systematic quality management.
              </p>

              <div className="problems-stack">
                {problems.map((item, idx) => (
                  <div key={idx} className="problem-card">
                    <div className="problem-header">
                      <span className="problem-dot"></span>
                      <strong>{item.problem}</strong>
                    </div>
                    <div className="problem-approach">
                      <CheckCircle2 size={16} className="solution-icon" />
                      <span>{item.solution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: We Have a Requirement. We Build Around It (Content Left, Image Right) */}
      <section className="editorial-section editorial-alt-b">
        <div className="container">
          <div className="editorial-grid img-right">
            <div className="editorial-text reveal-left">
              <span className="pill-badge">Workflow Process</span>
              <h2>We Have a Requirement. We Build Around It.</h2>
              <p className="editorial-intro">
                A seamless 5-step production methodology designed to move your garment concept from
                initial brief to flawless export shipment.
              </p>

              <div className="process-timeline">
                {processSteps.map((step) => (
                  <div key={step.step} className="timeline-step">
                    <div className="timeline-num">{step.step}</div>
                    <div className="timeline-info">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-media reveal-right">
              <div className="editorial-img-frame">
                <img
                  src={processImage}
                  alt="Apparel production line at Antnira"
                  className="editorial-photo"
                />
                <div className="editorial-floating-tag">
                  <strong>Export-Ready Production</strong>
                  <span>Planned timelines &amp; scheduled dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: Manufacturing Capabilities (Image Left, Content Right) */}
      <section className="editorial-section editorial-alt-c">
        <div className="container">
          <div className="editorial-grid img-left">
            <div className="editorial-media reveal-left">
              <div className="editorial-img-frame">
                <img
                  src={capabilityImage}
                  alt="Apparel finished manufacturing capability"
                  className="editorial-photo"
                />
                <div className="editorial-floating-tag">
                  <strong>Comprehensive Capabilities</strong>
                  <span>From yarn development to customized trims</span>
                </div>
              </div>
            </div>

            <div className="editorial-text reveal-right">
              <span className="pill-badge">Full Spectrum Operations</span>
              <h2>Manufacturing Capabilities</h2>
              <p className="editorial-intro">
                Our infrastructure supports scalable, precision-controlled apparel production for
                diverse international industries.
              </p>

              <div className="capabilities-grid-cards">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="cap-card">
                    <h4>{cap.title}</h4>
                    <p>{cap.items}</p>
                  </div>
                ))}
              </div>

              <div className="editorial-cta-row">
                <Link to="/contact" className="btn btn-primary">
                  Discuss Your Production <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
