// HeroSection.jsx
import '../css/App.css';
import '../css/index.css';
import { useNavigate } from 'react-router-dom'; // optional if using routes
import ContactForm from './ContactForm';

function HeroSection() {

  const navigateToGallery = () => {
      navigate('/gallery'); // existing gallery navigation
  };

  const scrollToContactForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' }); // smooth scroll to form
    }
  };

  return (
    <div className="hero">
      <div>
        <h2>Refined groundworks, paving & landscaping</h2>
        <h4>built on precision, preparation, and lasting quality.</h4>
        <p>Serving homeowners who value craftsmanship, professionalism, and results that stand the test of time.</p>
        <button className="contact-us" onClick={scrollToContactForm}>Contact Us</button>
        <button className="view-work" onClick={navigateToGallery}>View our Work</button>
      </div>
    </div>
  );
}

export default HeroSection;
