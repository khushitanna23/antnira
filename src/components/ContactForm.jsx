import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '+91',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', code: '+91', phone: '', subject: '', message: '' });
  };

  return (
    <section className="inquire-section" id="contact-form">
      <div className="container">
        <div className="inquire-grid">
          {/* Left Column: Minimalist Editorial Title (Image 1 Reference) */}
          <div className="inquire-left reveal-left">
            <div className="inquire-kicker">
              <span className="inquire-kicker-cross">✕</span>
              <span>Let's talk about your needs.</span>
            </div>

            <h2 className="inquire-heading">
              <span className="inquire-heading-primary">Inquire Now</span>
              <span className="inquire-heading-secondary">For Personalized Assistance</span>
            </h2>
          </div>

          {/* Right Column: Clean Underline Form (Image 1 Reference) */}
          <div className="inquire-right reveal-right">
            <form className="inquire-form" onSubmit={handleSubmit}>
              {/* Row 1: Name & Email */}
              <div className="inquire-row inquire-row-2">
                <div className="inquire-field">
                  <label htmlFor="inquire-name">
                    Name<span className="inquire-req">*</span>
                  </label>
                  <input
                    id="inquire-name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="inquire-field">
                  <label htmlFor="inquire-email">
                    Email<span className="inquire-req">*</span>
                  </label>
                  <input
                    id="inquire-email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Code, Phone & Subject */}
              <div className="inquire-row inquire-row-3">
                <div className="inquire-field inquire-field-code">
                  <label htmlFor="inquire-code">
                    Code<span className="inquire-req">*</span>
                  </label>
                  <input
                    id="inquire-code"
                    type="text"
                    name="code"
                    placeholder="Code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="inquire-field inquire-field-phone">
                  <label htmlFor="inquire-phone">
                    Phone/WhatsApp<span className="inquire-req">*</span>
                  </label>
                  <input
                    id="inquire-phone"
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="inquire-field inquire-field-subject">
                  <label htmlFor="inquire-subject">
                    Subject<span className="inquire-req">*</span>
                  </label>
                  <select
                    id="inquire-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-Select-</option>
                    <option value="purchase">For Purchase</option>
                    <option value="dealership">For Dealership</option>
                    <option value="product-sample">For Product Sample</option>
                    <option value="export-oem">Export &amp; OEM Requirements</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="inquire-row">
                <div className="inquire-field">
                  <label htmlFor="inquire-message">Message:</label>
                  <input
                    id="inquire-message"
                    type="text"
                    name="message"
                    placeholder="Enter Your Requirements"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 4: Submit Button */}
              <div className="inquire-action">
                <button type="submit" className="inquire-submit-btn">
                  Submit
                </button>
              </div>

              {submitted && (
                <div className="inquire-form-status" role="status">
                  ✓ Thank you. Your requirements have been received, and our team will contact you shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
