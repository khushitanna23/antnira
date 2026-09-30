import { useScrollReveal } from '../hooks/useScrollReveal';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import ProductShowcase from '../components/ProductShowcase';
import GroupCompanies from '../components/GroupCompanies';
import WhyChooseUs from '../components/WhyChooseUs';
import Workshops from '../components/Workshops';
import ProcessAndCapabilities from '../components/ProcessAndCapabilities';
import CSRSection from '../components/CSRSection';
import StatsSection from '../components/StatsSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductShowcase />
      <GroupCompanies />
      <WhyChooseUs />
      <Workshops />
      <ProcessAndCapabilities />
      <CSRSection />
      <StatsSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
