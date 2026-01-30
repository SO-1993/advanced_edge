import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Put your 52 images in: public/assets/images/
 * Then reference them by filename here.
 *
 * Tip: If you create thumbnails later:
 * - thumbs in public/assets/images/thumbs/
 * - full in public/assets/images/full/
 * and swap the src to thumbs for the grid.
 */
const galleryItems = [
  { file: "image1.jpg", text: "Precise excavation for water main connection" },
  { file: "image2.jpg", text: "Patio slabs laid and gardens topsoiled throughout" },
  { file: "image3.jpg", text: "Concrete floors poured, ready for garage build" },
  { file: "image4.jpg", text: "Sleeper retaining wall installed to level uneven ground" },
  { file: "image5.jpg", text: "Steps installed for level garden access" },
  { file: "image6.jpg", text: "Kandla Grey porcelain slabs laid for a modern patio" },
  { file: "image7.jpg", text: "Side access finished using buff riven slabs" },
  { file: "image8.jpg", text: "Entrance steps constructed to NHBC compliant slabs" },
  { file: "image9.jpg", text: "Shed base installed behind garage, utilising unused space" },
  { file: "image10.jpg", text: "Kandla Grey porcelain with charcoal block border" },
  { file: "image11.jpg", text: "Complete garden transformation with porcelain patio and turf" },
  { file: "image12.jpg", text: "Block paved driveway installed with drainage improvements" },
  { file: "image13.jpg", text: "Patio extension completed using buff riven paving" },
  { file: "image14.jpg", text: "Block paving driveway with granite slab path and lighting" },
  { file: "image15.jpg", text: "Modern driveway with granite slab path and lighting" },
  // ...add the rest up to 52 here as { file, text }
];

function GallerySection({ title, items, sectionRef }) {
  return (
    <section className="gallery-section" ref={sectionRef} aria-label={title}>
      <h1>{title}</h1>

      <div className="gallery-images">
        {items.map((item) => {
          const src = `/assets/images/${item.file}`; // served from /public

          return (
            <div key={item.file} className="image-container">
              <img
                src={src}
                alt={item.text}
                loading="lazy"
                decoding="async"
                // If your images are roughly square, this helps reduce layout shift.
                // If not square, you can remove width/height.
                width="800"
                height="800"
              />
              <div className="hover-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Gallery() {
  const location = useLocation();

  const drivewaysRef = useRef(null);
  const patiosRef = useRef(null);
  const groundworksRef = useRef(null);
  const landscapingRef = useRef(null);

  // map only once
  const sectionMap = useMemo(
    () => ({
      "New Driveways": drivewaysRef,
      "Patios & Paving": patiosRef,
      "Groundworks & Drainage": groundworksRef,
      "Landscaping & Remedial Work": landscapingRef,
    }),
    []
  );

  const scrollWithOffset = (element) => {
    const header = document.querySelector(".header");
    const headerOffset = header?.offsetHeight || 0;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 16;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const sectionName = location.state?.section;
    if (!sectionName) return;

    const targetRef = sectionMap[sectionName];
    if (!targetRef?.current) return;

    requestAnimationFrame(() => {
      scrollWithOffset(targetRef.current);
    });
  }, [location.state, sectionMap]);

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
