import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import heroBuilding from '../assets/heroBuilding.png';
import productImage1 from '../assets/Products/product-1.jpg';
import productImage2 from '../assets/Products/product-2.jpg';
import productImage3 from '../assets/Products/product-3.jpg';
import productImage4 from '../assets/Products/product-4.jpg';
import productImage5 from '../assets/Products/product-5.jpg';
import productImage7 from '../assets/Products/product-7.jpg';
import productImage8 from '../assets/Products/product-8.jpg';
import productImage9 from '../assets/Products/product-9.jpg';
import productImage10 from '../assets/Products/product-10.jpg';
import productImage11 from '../assets/Products/product-11.jpg';
import productImage12 from '../assets/Products/product-12.jpg';
import productImage13 from '../assets/Products/product-13.jpg';
import productImage14 from '../assets/Products/product-14.jpg';
import 'swiper/css';
import './HeroSection.css';

const productCategories = [
  {
    title: 'Healthcare Apparel',
    items: ['Medical Scrubs', 'Doctor Coats', 'Patient Uniforms', 'Medical Aprons', 'Hospital Workwear'],
  },
  {
    title: 'Corporate & Workwear',
    items: ['Corporate T-Shirts', 'Polo Shirts', 'Workwear', 'Security Uniforms', 'Institutional Uniforms'],
  },
  {
    title: 'Casual Apparel',
    items: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Joggers', 'Kidswear'],
  },
  {
    title: 'Custom Apparel',
    items: ['Private Label', 'Custom Designs', 'Custom Fabric', 'Custom Colors', 'Custom Branding'],
  },
];

const processSteps = [
  'Design, fabric, GSM, color, sizing, quantity and application.',
  'Fabric selection, construction, trims, measurements and samples.',
  'Bulk production according to approved specifications.',
  'Measurements, stitching, fabric shade, finishing and packaging checks.',
  'Finished goods packed and prepared according to delivery requirements.',
];

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
  productImage7,
  productImage8,
  productImage9,
  productImage10,
  productImage11,
  productImage12,
  productImage13,
  productImage14,
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-top reveal">
          <div className="hero-top-left">
            <span className="pill-badge">Committed to Your Growth</span>
            <h1>Apparel Made Around Your Requirements.</h1>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-image reveal-left">
            <img src={heroBuilding} alt="Antnira Group building" />
          </div>
          <div className="hero-text reveal-right">
            <p>
              We manufacture custom apparel, uniforms and textile products for brands, businesses,
              healthcare organizations and institutions.
            </p>
            <p>
              From fabric selection and product development to production, quality inspection and final
              delivery, we manage the process around your exact requirements.
            </p>
            <div className="hero-trust-line">
              Trust line: Custom Development • Bulk Production • Quality Control • Worldwide Delivery
            </div>
            <div className="hero-cta-row">
              <Link to="/contact" className="btn btn-primary">Discuss Your Requirement</Link>
              <Link to="/workshop" className="btn btn-outline">View Products</Link>
            </div>
          </div>
        </div>

        <div className="home-content-block reveal">
          <h3>What We Make</h3>
          <div className="what-we-make-grid">
            {productCategories.map((group) => (
              <div className="make-group" key={group.title}>
                <h4>{group.title}</h4>
                <p>{group.items.join(' • ')}</p>
              </div>
            ))}
          </div>
          <div className="product-images-heading reveal">
            <span className="pill-badge">Antnira Collection</span>
            <h4>Product Images</h4>
          </div>
          <div className="product-images-slider reveal">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              speed={3000}
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
              freeMode={{ enabled: true, momentum: false }}
              spaceBetween={16}
              slidesPerView={2.5}
              breakpoints={{
                0: { slidesPerView: 1.2, spaceBetween: 12 },
                480: { slidesPerView: 1.6, spaceBetween: 12 },
                768: { slidesPerView: 1.8, spaceBetween: 16 },
                1024: { slidesPerView: 2.2, spaceBetween: 16 },
                1280: { slidesPerView: 3, spaceBetween: 16 },
              }}
            >
              {productImages.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <div className="product-image-slide">
                    <img src={image} alt={`Antnira product image ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="home-content-block reveal">
          <h3>Problems We Solve</h3>
          <div className="problem-list">
            <div className="problem-item">
              <strong>Inconsistent Quality</strong>
              <span>Our approach: Approved specifications and quality checks throughout production.</span>
            </div>
            <div className="problem-item">
              <strong>Fabric Shade Differences</strong>
              <span>Our approach: Fabric/shade approval before bulk production.</span>
            </div>
            <div className="problem-item">
              <strong>Poor Stitching &amp; Finishing</strong>
              <span>Our approach: Inspection of measurements, stitching and finishing.</span>
            </div>
            <div className="problem-item">
              <strong>Production Delays</strong>
              <span>Our approach: Production planning and progress monitoring.</span>
            </div>
            <div className="problem-item">
              <strong>Communication Problems</strong>
              <span>Our approach: Clear coordination from sampling through final delivery.</span>
            </div>
          </div>
        </div>

        <div className="home-content-block reveal">
          <h3>We Have a Requirement. We Build Around It.</h3>
          <ol className="requirement-list">
            {processSteps.map((step, index) => (
              <li key={step}><span>{index + 1}.</span> {step}</li>
            ))}
          </ol>
        </div>

        <div className="home-content-block reveal">
          <h3>Manufacturing Capabilities</h3>
          <div className="capability-groups">
            <div className="capability-group">
              <h4>Fabric Development</h4>
              <p>Cotton • Polyester • Viscose • Blends • Knits • Stretch Fabrics</p>
            </div>
            <div className="capability-group">
              <h4>Product Development</h4>
              <p>Tech packs • Measurements • Samples • Color matching • Branding</p>
            </div>
            <div className="capability-group">
              <h4>Production</h4>
              <p>T-Shirts • Polo Shirts • Scrubs • Uniforms • Hoodies • Workwear</p>
            </div>
            <div className="capability-group">
              <h4>Finishing</h4>
              <p>Printing • Embroidery • Labels • Washing • Packaging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
