import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageBanner.css';

export default function PageBanner({ title, breadcrumb }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-banner-content">
          <span className="pill-badge">Antnira Group</span>
          <h1 className="page-banner-title">{title}</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{breadcrumb || title}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
