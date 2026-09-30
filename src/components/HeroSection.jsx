import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { ArrowUpRight, ArrowLeft, ArrowRight, ShieldCheck, Factory, CheckCircle2, Globe } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import heroBuilding from '../assets/heroBuilding.png';
import facilityImage from '../assets/Apparel Built for Global Markets/20250226_103641.jpg';
import workshopImage from '../assets/Apparel Built for Global Markets/20250226_103957.jpg';

import './HeroSection.css';

const slides = [
  {
    subtitle: 'Committed to Your Growth',
    titleLine1: 'Apparel Made',
    titleLine2: 'Around Your',
    titleLine3: 'Requirements.',
    description: 'We manufacture custom apparel, uniforms and textile products for brands, businesses, healthcare organizations and institutions.',
    image: heroBuilding,
    badge: 'Antnira Manufacturing Unit • Surat & Lindiad, Gujarat',
    trustLine: [
      { icon: ShieldCheck, text: 'Custom Development' },
      { icon: Factory, text: 'Bulk Production' },
      { icon: CheckCircle2, text: 'Quality Control' },
      { icon: Globe, text: 'Worldwide Delivery' },
    ],
  },
  {
    subtitle: 'Manufacturing Excellence',
    titleLine1: 'Uniforms, Scrubs',
    titleLine2: '& Workwear',
    titleLine3: 'Solutions.',
    description: 'From fabric selection and product development to production, quality inspection and final delivery, we manage the process around your exact requirements.',
    image: facilityImage,
    badge: 'Precision Stitching • Hospital Scrubs & Institutional Wear',
    trustLine: [
      { icon: ShieldCheck, text: 'Approved Specs' },
      { icon: Factory, text: 'Technical Fabrics' },
      { icon: CheckCircle2, text: 'Strict Inspection' },
      { icon: Globe, text: 'Timely Dispatch' },
    ],
  },
  {
    subtitle: 'Global Export & OEM/ODM',
    titleLine1: 'Custom Apparel',
    titleLine2: '& Private Label',
    titleLine3: 'Programs.',
    description: 'Flexible apparel manufacturing, OEM & ODM capabilities, custom branding, and scalable production built to support international brands.',
    image: workshopImage,
    badge: 'Global Export Partner • Serving 20+ International Markets',
    trustLine: [
      { icon: ShieldCheck, text: 'Flexible MOQs' },
      { icon: Factory, text: 'Custom Branding' },
      { icon: CheckCircle2, text: 'Full Certification' },
      { icon: Globe, text: 'Global Shipping' },
    ],
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="hero-slider-section">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide-bg">
              <img src={slide.image} alt={slide.titleLine1} className="hero-slide-img" />
              <div className="hero-slide-overlay" />
            </div>

            <div className="container hero-slide-container">
              <div className="hero-slide-content">
                <div className="hero-slide-subtitle-box">
                  <span className="hero-slide-subtitle">
                    <span className="hero-subtitle-dot"></span>
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="hero-slide-title">
                  <span>{slide.titleLine1}</span>
                  <span>{slide.titleLine2}</span>
                  <span className="hero-title-accent">{slide.titleLine3}</span>
                </h1>

                <p className="hero-slide-desc">{slide.description}</p>

                <div className="hero-slide-trust">
                  {slide.trustLine.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={idx} className="hero-trust-item">
                        <IconComponent size={16} className="hero-trust-icon" />
                        <span>{item.text}</span>
                        {idx < slide.trustLine.length - 1 && <span className="hero-trust-sep">•</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="hero-slide-actions">
                  <Link to="/contact" className="btn btn-primary hero-cta-btn">
                    <span>Discuss Your Requirement</span>
                    <span className="hero-cta-arrow">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>

                  <Link to="/workshop" className="btn-circle hero-circle-btn">
                    <span>View Products</span>
                    <span className="btn-circle-icon">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Slider Bar with Fraction & Arrows (Ijaro Reference Layout) */}
      <div className="hero-slider-bottom-bar">
        <div className="container hero-bottom-container">
          <div className="hero-fraction-box">
            <span className="hero-fraction-current">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="hero-progress-track">
              <div
                className="hero-progress-fill"
                style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
              />
            </div>
            <span className="hero-fraction-total">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>

          <div className="hero-arrow-box">
            <button
              className="hero-nav-arrow"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              className="hero-nav-arrow"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
