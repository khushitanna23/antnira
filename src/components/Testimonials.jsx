import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Trust? Absolutely, Antnira Group is my go-to for anything I need because I know I can rely on them & Their consistency in delivering top-notch products and standing by their promises is why I trust them.",
    chatMessages: [
      { type: 'received', text: 'Would you mind sharing a few words about your experience working with us?' },
      { type: 'sent', text: 'Your testimonial would greatly support our business.' },
      { type: 'sent', text: 'Antnira Group is my go-to! I can rely on them for consistent quality.' },
    ],
  },
  {
    text: "What I love about Antnira Group is their incredible range of innovative products! I've discovered some truly unique items here that I couldn't find anywhere else. Their commitment to offering the latest and greatest products is truly impressive.",
    chatMessages: [
      { type: 'received', text: 'How has your experience been with our products?' },
      { type: 'sent', text: 'I love your innovative product range! Truly unique items.' },
      { type: 'sent', text: 'Their commitment to quality is impressive. Always impressed by their innovation!' },
    ],
  },
  {
    text: "Antnira Group delivers dependable apparel quality and responsive export support. They are a reliable partner for growing international businesses.",
    chatMessages: [
      { type: 'received', text: 'Could you share your thoughts on our apparel production?' },
      { type: 'sent', text: 'Reliable quality and support for our export orders.' },
      { type: 'sent', text: 'Client feedback is always positive. Truly reliable partner!' },
    ],
  },
  {
    text: "From custom branding to fast delivery, Antnira Group makes it easier for our business to launch and scale private-label apparel.",
    chatMessages: [
      { type: 'received', text: 'How is our private-label apparel performing for your brand?' },
      { type: 'sent', text: 'The quality and custom packaging are excellent.' },
      { type: 'sent', text: 'Exceptional craftsmanship. They have become a staple in our shop!' },
    ],
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header reveal">
          <span className="pill-badge">Client Trust</span>
          <h2>What Our Customers Say</h2>
        </div>

        <div className="testimonials-grid reveal">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="chat-header">
                  <div className="chat-avatar">AN</div>
                  <div className="chat-name">Antnira Group</div>
                </div>
                <div className="chat-container">
                  {testimonial.chatMessages.map((msg, index) => (
                    <div key={`${current}-${index}`} className={`chat-bubble ${msg.type}`}>
                      {msg.text}
                      <div className="chat-time">
                        {msg.type === 'sent' ? '11:18 AM ✓✓' : '11:12 AM'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="phone-home-indicator" />
            </div>
          </div>

          <div className="testimonial-content">
            <div className="testimonial-quote-icon">
              <Quote size={48} />
            </div>
            <div className="testimonial-text" key={current}>
              "{testimonial.text}"
            </div>
            <div className="testimonial-footer">
              <div className="testimonial-counter">
                <strong>{String(current + 1).padStart(2, '0')}</strong>
                <span> / {String(testimonials.length).padStart(2, '0')}</span>
              </div>
              <div className="testimonial-nav">
                <button
                  className="testimonial-nav-btn"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  className="testimonial-nav-btn"
                  onClick={goNext}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
