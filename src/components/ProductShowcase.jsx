import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';
import 'swiper/css';

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

import './ProductShowcase.css';

const categories = [
  {
    title: 'Healthcare Apparel',
    tag: 'Medical & Healthcare',
    description: 'Medical Scrubs, Doctor Coats, Patient Uniforms, Medical Aprons, and Hospital Workwear engineered for durability and comfort.',
    items: ['Medical Scrubs', 'Doctor Coats', 'Patient Uniforms', 'Medical Aprons', 'Hospital Workwear'],
    image: productImage1,
    link: '/workshop',
  },
  {
    title: 'Corporate & Workwear',
    tag: 'Institutional & Corporate',
    description: 'Corporate T-Shirts, Polo Shirts, Workwear, Security Uniforms, and Institutional Uniforms tailored to brand specifications.',
    items: ['Corporate T-Shirts', 'Polo Shirts', 'Workwear', 'Security Uniforms', 'Institutional Uniforms'],
    image: productImage2,
    link: '/workshop',
  },
  {
    title: 'Casual Apparel',
    tag: 'Fashion & Retail',
    description: 'T-Shirts, Hoodies, Sweatshirts, Joggers, and Kidswear crafted with premium knits, modern cuts, and lasting finishes.',
    items: ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Joggers', 'Kidswear'],
    image: productImage3,
    link: '/workshop',
  },
  {
    title: 'Custom Apparel',
    tag: 'Private Label & OEM',
    description: 'Private Label, Custom Designs, Custom Fabric development, Custom Colors, and Custom Branding suited to global markets.',
    items: ['Private Label', 'Custom Designs', 'Custom Fabric', 'Custom Colors', 'Custom Branding'],
    image: productImage4,
    link: '/dealership',
  },
];

const sliderImages = [
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

export default function ProductShowcase() {
  return (
    <section className="product-showcase-section">
      <div className="container">
        {/* Top Header matching Image 1 Reference Structure */}
        <div className="product-showcase-header reveal">
          <div className="product-header-left">
            <span className="product-kicker">
              <span className="product-kicker-dot"></span>
              What We Make
            </span>
            <h2 className="product-main-title">
              Export Apparel &amp; Custom Manufacturing
            </h2>
          </div>

          <div className="product-header-right">
            <p className="product-header-desc">
              ANTNIRA Group is a premier manufacturer &amp; exporter of high-quality apparel products,
              including healthcare wear, corporate uniforms, casual knits, and private-label collections,
              ensuring unmatched durability, comfort, and performance.
            </p>

            <Link to="/workshop" className="product-circle-cta" aria-label="Explore Full Range">
              <div className="product-circle-spin-ring"></div>
              <ArrowUpRight size={20} className="product-circle-icon" />
              <span className="product-circle-label">Explore All</span>
            </Link>
          </div>
        </div>

        {/* Categories 4-Card Grid on Dark Luxury Background */}
        <div className="product-categories-grid">
          {categories.map((cat, index) => (
            <article
              key={cat.title}
              className={`product-cat-card reveal delay-${index + 1}`}
            >
              <div className="product-cat-img-box">
                <img src={cat.image} alt={cat.title} className="product-cat-img" />
                <span className="product-cat-badge">{cat.tag}</span>
              </div>
              <div className="product-cat-body">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="product-cat-pills">
                  {cat.items.map((item) => (
                    <span key={item} className="product-item-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <Link to={cat.link} className="product-cat-link">
                  <span>View Details</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery / Slider strip in Dark Luxury */}
        <div className="product-strip-wrap reveal">
          <div className="product-strip-header">
            <div>
              <span className="product-kicker">
                <span className="product-kicker-dot"></span>
                Antnira Collection
              </span>
              <h3>Product Showcase Gallery</h3>
            </div>
            <p>A closer look at fabrics, stitching precision, and finishing quality across orders.</p>
          </div>

          <div className="product-images-slider">
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              speed={4000}
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
              freeMode={{ enabled: true, momentum: false }}
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1.3, spaceBetween: 12 },
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 18 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
            >
              {sliderImages.map((image, index) => (
                <SwiperSlide key={`${image}-${index}`}>
                  <div className="product-slide-card">
                    <img src={image} alt={`Antnira product specimen ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
