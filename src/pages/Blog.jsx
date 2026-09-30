import { useScrollReveal } from '../hooks/useScrollReveal';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import blogImg1 from '../assets/WhyUs/sustainable-practices.jpg';
import blogImg2 from '../assets/WhyUs/diverse-expertise.jpg';
import blogImg3 from '../assets/WhyUs/quality-controll.jpg';
import './Pages.css';

const blogPosts = [
  {
    title: 'How Healthcare Chains Choose High-Durability Medical Uniforms',
    excerpt: 'Key fabric blends, antimicrobial finishes, and industrial laundering standards required for institutional hospital scrubs.',
    date: 'March 24, 2026',
    author: 'Antnira Technical Team',
    category: 'Healthcare Uniforms',
    image: blogImg3,
  },
  {
    title: 'Understanding GSM, Yarn Counts & Shrinkage in Knitwear Export',
    excerpt: 'A comprehensive technical guide for global buyers and private-label apparel brands planning bulk knit production.',
    date: 'February 18, 2026',
    author: 'Production Dept',
    category: 'Manufacturing Insights',
    image: blogImg2,
  },
  {
    title: 'Sustainable Apparel Manufacturing: Eco-Dyes & Low-Impact Practices',
    excerpt: 'How modern manufacturing reduces carbon footprints through water-efficient dyeing, bio-washing, and organic cotton sourcing.',
    date: 'January 12, 2026',
    author: 'Compliance Team',
    category: 'Sustainability',
    image: blogImg1,
  },
];

export default function Blog() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Apparel Manufacturing Blog" breadcrumb="Blog" />

      <section className="page-section">
        <div className="container">
          <div className="section-title-wrap reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="pill-badge">Industry Insights</span>
            <h2>Latest News &amp; Technical Articles</h2>
            <p style={{ maxWidth: '600px', margin: '14px auto 0', color: '#6b7280' }}>
              Explore practical guides, fabric engineering breakdowns, and export market developments
              from the ANTNIRA apparel production team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="feature-card reveal"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'rgba(10,12,16,0.85)',
                      backdropFilter: 'blur(6px)',
                      color: 'var(--brand-yellow)',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <User size={13} /> {post.author}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '10px', lineHeight: 1.35 }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--brand-yellow)',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Read Article / Inquire</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
