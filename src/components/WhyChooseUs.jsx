import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import diverseImg from '../assets/WhyUs/diverse-expertise.jpg';
import innovationImg from '../assets/WhyUs/innovation-driven.png';
import qualityImg from '../assets/WhyUs/quality-controll.jpg';
import customerImg from '../assets/WhyUs/customer-focused.jpg';
import sustainableImg from '../assets/WhyUs/sustainable-practices.jpg';
import globalImg from '../assets/WhyUs/global-reach.jpg';

import diverseIcon from '../assets/H_WhyUs/diverse.png';
import innovationIcon from '../assets/H_WhyUs/innovation.png';
import qualityIcon from '../assets/H_WhyUs/quality.png';
import customerIcon from '../assets/H_WhyUs/customer.png';
import sustainableIcon from '../assets/H_WhyUs/sustainble.png';
import globalIcon from '../assets/H_WhyUs/global.png';

import './WhyChooseUs.css';

const reasons = [
  {
    number: '01',
    title: 'Diverse Expertise',
    desc: 'Investing in and building manufacturing businesses that deliver world-class products.',
    icon: diverseIcon,
    image: diverseImg,
    tag: 'Manufacturing Strength',
  },
  {
    number: '02',
    title: 'Innovation-Driven',
    desc: 'Commitment to incorporating the latest technologies to deliver cutting-edge products.',
    icon: innovationIcon,
    image: innovationImg,
    tag: 'Advanced Technology',
  },
  {
    number: '03',
    title: 'Quality First',
    desc: 'Rigorous quality control processes ensure that all products meet the highest standards of performance.',
    icon: qualityIcon,
    image: qualityImg,
    tag: 'Standard Compliance',
  },
  {
    number: '04',
    title: 'Customer Focused',
    desc: 'Focused on understanding & exceeding customer needs, offering tailored solutions & service.',
    icon: customerIcon,
    image: customerImg,
    tag: 'Custom Solutions',
  },
  {
    number: '05',
    title: 'Sustainable Practices',
    desc: 'Dedication to environmentally friendly manufacturing processes & product development.',
    icon: sustainableIcon,
    image: sustainableImg,
    tag: 'Eco Responsibility',
  },
  {
    number: '06',
    title: 'Global Reach',
    desc: 'Proven track record in global markets with products meeting international standards.',
    icon: globalIcon,
    image: globalImg,
    tag: 'Worldwide Exports',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" id="why-choose-us">
      <div className="container">
        {/* Top Header across the full width */}
        <div className="why-header reveal">
          <div className="why-header-left">
            <span className="pill-badge">Why Choose Us</span>
            <h2 className="why-title">
              Why Choose <span className="text-gold">ANTNIRA</span>
            </h2>
          </div>

          <div className="why-header-right">
            <p className="why-lead">
              Explore the benefits of choosing Antnira Group for your apparel manufacturing and export
              needs. Our industry expertise is supported by a commitment to innovation, quality
              control, and dedicated service.
            </p>
            <Link to="/why-us" className="why-explore-btn">
              <span>Explore More</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* 6-Card Visual Grid with Images (Product Showcase Style) */}
        <div className="why-cards-grid">
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className={`why-card reveal delay-${(index % 3) + 1}`}
            >
              <div className="why-card-img-box">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="why-card-img"
                  loading="lazy"
                />
                <div className="why-card-top-bar">
                  <span className="why-card-num-badge">
                    <img src={reason.icon} alt="" className="why-card-mini-icon" />
                    <span>{reason.number}</span>
                  </span>
                  <span className="why-card-tag">{reason.tag}</span>
                </div>
              </div>

              <div className="why-card-body">
                <h3 className="why-card-title">{reason.title}</h3>
                <p className="why-card-desc">{reason.desc}</p>

                <div className="why-card-footer">
                  <span className="why-card-more">
                    <span>Learn More</span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
