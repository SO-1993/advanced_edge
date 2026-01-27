import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import '../css/App.css';
import '../css/index.css';

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";
import image10 from "../assets/images/image10.jpg";
import image11 from "../assets/images/image11.jpg";
import image12 from "../assets/images/image12.jpg";
import image13 from "../assets/images/image13.jpg";
import image14 from "../assets/images/image14.jpg";
import image15 from "../assets/images/image15.jpg";

// Pair each image with its description
const galleryItems = [
  { src: image1, text: "Precise excavation for water main connection" },
  { src: image2, text: "Patio slabs laid and gardens topsoiled throughout" },
  { src: image3, text: "Concrete floors poured, ready for garage build" },
  { src: image4, text: "Sleeper retaining wall installed to level uneven ground" },
  { src: image5, text: "Steps installed for level garden access" },
  { src: image6, text: "Kandla Grey porcelain slabs laid for a modern patio" },
  { src: image7, text: "Side access finished using buff riven slabs" },
  { src: image8, text: "Entrance steps constructed to NHBC compliant slabs" },
  { src: image9, text: "Shed base installed behind garage, utilising unused space" },
  { src: image10, text: "Kandla Grey porcelain with charcoal block border" },
  { src: image11, text: "Complete garden transformation with porcelain patio and turf" },
  { src: image12, text: "Block paved driveway installed with drainage improvements" },
  { src: image13, text: "Patio extension completed using buff riven paving" },
  { src: image14, text: "Block paving driveway with granite slab path and lighting" },
  { src: image15, text: "Modern driveway with granite slab path and lighting" },
];

// Section component
function GallerySection({ title, items, sectionRef }) {
  return (
    <div className="gallery-section" ref={sectionRef}>
      <h1>{title}</h1>
      <div className="gallery-images">
        {items.map((item, index) => (
          <div key={index} className="image-container">
            <img src={item.src} alt={item.text} />
            <div className="hover-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const location = useLocation();

  const drivewaysRef = useRef(null);
  const patiosRef = useRef(null);
  const groundworksRef = useRef(null);
  const landscapingRef = useRef(null);

  // Auto-detect sticky header height
  const scrollWithOffset = (element) => {
    const header = document.querySelector(".header");
    const headerOffset = header?.offsetHeight || 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset - 16; // small spacing buffer

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Scroll to correct section when navigated from services
  useEffect(() => {
    if (!location.state?.section) return;

    const sectionMap = {
      "New Driveways": drivewaysRef,
      "Patios & Paving": patiosRef,
      "Groundworks & Drainage": groundworksRef,
      "Landscaping & Remedial Work": landscapingRef,
    };

    const targetRef = sectionMap[location.state.section];

    if (targetRef?.current) {
      // Wait one frame to ensure layout is stable
      requestAnimationFrame(() => {
        scrollWithOffset(targetRef.current);
      });
    }
  }, [location.state]);

  return (
    <div className="gallery-page">
      <GallerySection
        title="New Driveways"
        items={galleryItems.slice(0, 3)}
        sectionRef={drivewaysRef}
      />

      <GallerySection
        title="Patios & Paving"
        items={galleryItems.slice(3, 6)}
        sectionRef={patiosRef}
      />

      <GallerySection
        title="Groundworks & Drainage"
        items={galleryItems.slice(6, 9)}
        sectionRef={groundworksRef}
      />

      <GallerySection
        title="Landscaping & Remedial Work"
        items={galleryItems.slice(9)}
        sectionRef={landscapingRef}
      />
    </div>
  );
}

export default Gallery;