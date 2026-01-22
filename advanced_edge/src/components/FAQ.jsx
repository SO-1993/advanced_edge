import '../css/App.css';
import '../css/index.css';

function FAQs() {
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>

      <div className="faqs-grid">
        <div className="faq-item">
          <h5>How long have you been in the landscaping industry?</h5>
          <p>
            We bring years of hands-on experience in groundworks, paving, and
            landscaping, delivering reliable results built on proven methods and
            professional standards.
          </p>
        </div>

        <div className="faq-item">
          <h5>What areas do you cover?</h5>
          <p>
            We primarily serve Stratford-upon-Avon and surrounding areas, offering
            flexible coverage depending on project scope and requirements.
          </p>
        </div>

        <div className="faq-item">
          <h5>Will I have to pay if I choose not to go ahead with your quote?</h5>
          <p>
            No obligation is required. Our consultations and quotations are
            provided clearly and transparently, allowing you to make an informed
            decision.
          </p>
        </div>

        <div className="faq-item">
          <h5>Does Advanced Edge employ sub-contractors?</h5>
          <p>
            All work is managed directly by our experienced team, ensuring
            consistent standards, quality control, and professional accountability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
