import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';
import apparelImage1 from '../assets/Apparel Built for Global Markets/10.png';
import apparelImage2 from '../assets/Apparel Built for Global Markets/17.png';
import apparelImage3 from '../assets/Apparel Built for Global Markets/20250226_103641.jpg';
import apparelImage4 from '../assets/Apparel Built for Global Markets/20250226_103957.jpg';
import apparelImage5 from '../assets/Apparel Built for Global Markets/20250902_142921.jpg';
import apparelImage6 from '../assets/Apparel Built for Global Markets/23.png';
import apparelImage7 from '../assets/Apparel Built for Global Markets/25.png';
import apparelImage8 from '../assets/Apparel Built for Global Markets/27.png';
import apparelImage9 from '../assets/Apparel Built for Global Markets/28.png';
import apparelImage10 from '../assets/Apparel Built for Global Markets/8.png';
import 'swiper/css';
import './Workshops.css';

const workshopLabels = [
  'Hospital Scrubs',
  'Medical Uniforms',
  'Corporate Wear',
  'Custom T-Shirts',
  'Workwear Production',
  'Hospitality Uniforms',
  'Private Label Apparel',
  'Export Quality Finishing',
  'Apparel Development',
  'Bulk Packaging',
];

const workshopImages = [
  apparelImage1,
  apparelImage2,
  apparelImage3,
  apparelImage4,
  apparelImage5,
  apparelImage6,
  apparelImage7,
  apparelImage8,
  apparelImage9,
  apparelImage10,
];

export default function Workshops() {
  return (
    <section className="workshops">
      <div className="container">
        <div className="workshops-header reveal">
          <div className="workshops-header-left">
            <span className="pill-badge">Manufacturing Excellence</span>
            <h2>Apparel Built for Global Markets</h2>
          </div>
          <Link to="/workshop" className="explore-link">
            Explore All Facilities <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="workshops-carousel reveal">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            speed={4500}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            freeMode={{ enabled: true, momentum: false }}
            spaceBetween={20}
            slidesPerView={3.8}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 14 },
              480: { slidesPerView: 1.9, spaceBetween: 16 },
              768: { slidesPerView: 2.8, spaceBetween: 18 },
              1024: { slidesPerView: 3.5, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 22 },
            }}
          >
            {workshopImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="workshop-slide">
                  <img
                    className="workshop-slide-bg"
                    src={image}
                    alt={`${workshopLabels[index % workshopLabels.length]} manufacturing`}
                  />
                  <div className="workshop-slide-scrim"></div>
                  <div className="workshop-slide-info">
                    <span className="workshop-slide-pill">
                      {workshopLabels[index % workshopLabels.length]}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
