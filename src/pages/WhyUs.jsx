import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import StatsSection from '../components/StatsSection';
import ContactForm from '../components/ContactForm';
import qualityControlImage from '../assets/WhyUs/quality-controll.jpg';
import { Shield, Award, Globe, Users, Leaf, Lightbulb } from 'lucide-react';
import './Pages.css';

const features = [
  {
    icon: <Shield />,
    title: 'Export-Focused Manufacturing',
    desc: 'Built around the needs of international buyers, brands, and growing businesses.',
  },
  {
    icon: <Lightbulb />,
    title: 'International Quality Standards',
    desc: 'Consistent specifications, dedicated quality inspection, and dependable production.',
  },
  {
    icon: <Globe />,
    title: 'OEM & Private Label',
    desc: 'Flexible manufacturing for OEM, ODM, private-label, and custom apparel programs.',
  },
  {
    icon: <Users />,
    title: 'Flexible MOQ',
    desc: 'Scalable production and competitive export pricing for businesses at every stage.',
  },
  {
    icon: <Leaf />,
    title: 'Custom Branding & Packaging',
    desc: 'Your brand labelling, custom packing, and product details built into the process.',
  },
  {
    icon: <Award />,
    title: 'Reliable Global Shipping',
    desc: 'Professional export documentation, timely delivery, and long-term partnership support.',
  },
];

export default function WhyUs() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Why Choose Antnira Group" breadcrumb="Why Antnira" />

      <section className="page-section">
        <div className="container">
          <div className="page-text-section reveal">
            <span className="pill-badge">Why Antnira Group</span>
            <h2>Manufacturing Support Built Around Your Growth</h2>
            <p>
              At Antnira Group, we put you, the customer, first. We combine export-focused manufacturing,
              international quality standards, custom branding, and dedicated support to help your business succeed.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card reveal delay-${index + 1}`}>
                <div className="feature-card-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-light">
        <div className="container">
          <div className="page-content-grid reveal">
            <div className="page-content-text">
              <span className="pill-badge">Our Strengths</span>
              <h2>From Product Development to Delivery</h2>
              <p>
                From sample testing to custom packing and fast delivery, every stage is managed with pure
                transparency and a focus on lasting business partnerships.
              </p>
              <ul>
                <li>Dedicated account manager</li>
                <li>Sample testing and quality inspection</li>
                <li>Super-fast response and expedited fulfillment</li>
                <li>Custom branding and packaging</li>
                <li>Professional export documentation and timely delivery</li>
              </ul>
            </div>
            <div className="page-content-image">
              <img src={qualityControlImage} alt="Quality control lab at Antnira" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ContactForm />
    </>
  );
}
