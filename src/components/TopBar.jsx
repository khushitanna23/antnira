import { Mail, Phone, MapPin } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-location">
            <MapPin size={13} className="topbar-icon" /> Factory: Laxmi Industrial, Lindiad, Gujarat
          </span>
        </div>
        <div className="topbar-right">
          <a href="mailto:connect@antnira.com" className="topbar-item">
            <Mail size={13} className="topbar-icon" /> connect@antnira.com
          </a>
          <span className="topbar-divider">|</span>
          <a href="tel:+918799608484" className="topbar-item">
            <Phone size={13} className="topbar-icon" /> +91 8799608484
          </a>
        </div>
      </div>
    </div>
  );
}
