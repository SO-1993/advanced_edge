import "../css/App.css";
import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import hero_img from "../assets/images/hero_img.jpg";
import image1 from "../assets/images/image1.jpg";
import image4 from "../assets/images/image4.jpg";
import image7 from "../assets/images/image7.jpg";

function HeroSection() {
  const images = [hero_img, image1, image4, image7];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImg = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const navigate = useNavigate();

  const navigateToGallery = () => {
    navigate("/gallery");
  };

  const scrollToContactForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <button
        className="arrow left"
        onClick={prevImg}
        aria-label="Previous image"
      >
        &#10094;
      </button>

      <button
        className="arrow right"
        onClick={nextImg}
        aria-label="Next image"
      >
        &#10095;
      </button>

      <div>
        <h2>Refined groundworks, paving & landscaping</h2>
        <h4>built on precision, preparation, and lasting quality.</h4>
        <p>
          Serving homeowners who value craftsmanship, professionalism, and
          results that stand the test of time.
        </p>
        <button className="contact-us" onClick={scrollToContactForm}>
          Contact Us
        </button>
        <button className="view-work" onClick={navigateToGallery}>
          View our Work
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
