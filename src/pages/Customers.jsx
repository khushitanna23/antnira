import { useScrollReveal } from '../hooks/useScrollReveal';
import PageBanner from '../components/PageBanner';
import StatsSection from '../components/StatsSection';
import ContactForm from '../components/ContactForm';
import './Pages.css';

const reviewPhotos = Object.entries(
  import.meta.glob('../assets/Photo Gallery/*.{png,jpg,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, image]) => image);

const reviews = [
  {
    text: 'Trust? Absolutely, Antnira Group is my go-to for anything I need because I know I can rely on them. Their consistency in delivering top-notch products and standing by their promises is why I trust them.',
    detail: 'Consistent quality and dependable service',
  },
  {
    text: "What I love about Antnira Group is their incredible range of innovative products. I've discovered some truly unique items here that I couldn't find anywhere else. Their commitment to offering the latest and greatest products is truly impressive.",
    detail: 'A versatile, innovative product range',
  },
  {
    text: 'Antnira Group delivers dependable apparel quality and responsive export support. They are a reliable partner for growing businesses.',
    detail: 'Reliable apparel production partner',
  },
  {
    text: 'From custom branding to fast delivery, Antnira Group makes it easier for our business to launch and scale private-label apparel.',
    detail: 'Private-label support from start to finish',
  },
  {
    text: 'The team listened closely to our specifications and helped us refine the details before production. The finished garments matched the approved samples.',
    detail: 'Careful development and consistent production',
  },
  {
    text: 'Communication stayed clear throughout our order, and we always knew what stage production was at. That made planning our launch much easier.',
    detail: 'Clear communication throughout the order',
  },
  {
    text: 'We needed flexibility across styles and branding details. Antnira helped bring the collection together while keeping the finish consistent.',
    detail: 'Flexible apparel and branding options',
  },
  {
    text: 'From the first conversation through final packing, the process felt organized and attentive. We appreciate having a production partner we can talk to.',
    detail: 'Attentive support from sampling to shipment',
  },
];

export default function Customers() {
  useScrollReveal();

  return (
    <>
      <PageBanner title="Customer Reviews" breadcrumb="Reviews" />

      <section className="page-section">
        <div className="container">
          <div className="page-text-section reveal">
            <span className="pill-badge">Customer Feedback</span>
            <h2>Good partnerships are built on trust.</h2>
            <p>
              We value the businesses that trust Antnira Group with their apparel production. Here is what
              customers say about working with our team.
            </p>
          </div>

          <div className="customer-reviews">
            {reviews.map((review, index) => (
              <article className={`customer-review reveal delay-${(index % 4) + 1}`} key={review.detail}>
                <div className="customer-review-photo">
                  <img
                    src={reviewPhotos[index % reviewPhotos.length]}
                    alt="Apparel made by Antnira Group"
                    loading="lazy"
                  />
                </div>
                <div className="customer-review-copy">
                  <span className="customer-review-quote" aria-hidden="true">“</span>
                  <p>{review.text}</p>
                  <span className="customer-review-detail">{review.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <ContactForm />
    </>
  );
}
