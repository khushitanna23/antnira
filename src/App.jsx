import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Workshop from './pages/Workshop';
import WhyUs from './pages/WhyUs';
import Customers from './pages/Customers';
import CSR from './pages/CSR';
import Contact from './pages/Contact';
import Dealership from './pages/Dealership';
import { Analytics } from '@vercel/analytics/react';

function ScrollToTopOnNav() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopOnNav />
      <TopBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dealership" element={<Dealership />} />
        </Routes>
      </main>
      <Analytics />
      <Footer />
      <WhatsAppWidget />
      <ScrollToTop />
    </Router>
  );
}

export default App;
