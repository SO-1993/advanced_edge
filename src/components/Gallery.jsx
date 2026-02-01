import { useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

// New Driveways
const drivewaysItems = [
  {
    file: "block_paving_driveway.jpg",
    text: "Block paving driveway with granite slab path and lighting",
  },
  { file: "driveway1.jpeg", text: "Part 1 of project" },
  { file: "driveway2.jpeg", text: "Part 2 of project" },
  { file: "driveway3.jpeg", text: "Part 3 of project" },
  { file: "driveway4.jpg", text: "Part 4 of project" },
  { file: "driveway5.jpeg", text: "Part 5 of project" },
  { file: "driveway6.jpg", text: "Part 6 of project" },
  {
    file: "driveway7.jpg",
    text: "Modern driveway with granite slab path and lighting",
  },
  {
    file: "driveway8.jpg",
    text: "Block paved driveway installed with drainage improvements",
  },
  { file: "double_driveway1.jpeg", text: "Part 1 of DD project" },
  { file: "double_driveway2.jpeg", text: "Part 2 of DD project" },

  { file: "another_driveway1.jpeg", text: "Part 1 of AD project" },
  { file: "another_driveway2.jpeg", text: "Part 2 of AD project" },
];

// Patios & Paving
const patiosAndPavingItems = [
  {
    file: "patio_slabs.jpg",
    text: "Patio slabs laid and gardens topsoiled throughout",
  },
  {
    file: "patio_extension.jpg",
    text: "Patio extension completed using buff riven paving",
  },
  {
    file: "kandla_grey.jpg",
    text: "Kandla Grey porcelain slabs laid for a modern patio",
  },
  {
    file: "buff_riven.jpg",
    text: "Side access finished using buff riven slabs",
  },

  {
    file: "sleeper_wall.jpg",
    text: "Sleeper retaining wall installed to level uneven ground",
  },
  { file: "steps.jpg", text: "Steps installed for level garden access" },
  {
    file: "nhbc_compliant.jpg",
    text: "Entrance steps constructed to NHBC compliant slabs",
  },
  {
    file: "shed_base.jpg",
    text: "Shed base installed behind garage, utilising unused space",
  },
  {
    file: "kandla_grey_porcelain.jpg",
    text: "Kandla Grey porcelain with charcoal block border",
  },
];

// Groundworks & Drainage
const groundworksAndDrainageItems = [
  { file: "footpath1.jpeg", text: "Part 1 of footpath project" },
  { file: "footpath2.jpeg", text: "Part 2 of footpath project" },
  { file: "footpath3.jpeg", text: "Part 3 of footpath project" },
  { file: "footpath4.jpeg", text: "Part 4 of footpath project" },
  { file: "footpath6.jpeg", text: "Part 5 of footpath project" },
  { file: "footpath5.jpeg", text: "Part 6 of footpath project" },
  {
    file: "excavation.jpg",
    text: "Precise excavation for water main connection",
  },
  {
    file: "concrete_floors.jpg",
    text: "Concrete floors poured, ready for garage build",
  },
];

// Landscaping & Remedial Work
const landscapingAndRemedialWorkItems = [
  { file: "garden1.jpeg", text: "Part 1 of garden project" },
  { file: "garden2.jpeg", text: "Part 2 of garden project" },
  { file: "garden3.jpeg", text: "Part 3 of garden project" },
  { file: "garden4.jpeg", text: "Part 4 of garden project" },
  { file: "garden5.jpeg", text: "Part 5 of garden project" },

  { file: "trampoline1.jpeg", text: "Part 1 of trampoline project" },
  { file: "trampoline2.jpeg", text: "Part 2 of trampoline project" },
  { file: "trampoline3.jpeg", text: "Part 3 of trampoline project" },
  { file: "trampoline4.jpeg", text: "Part 4 of trampoline project" },

  {
    file: "garden_transformation.jpg",
    text: "Complete garden transformation with porcelain patio and turf",
  },
];

function GallerySection({ title, items, sectionRef }) {
  return (
    <section className="gallery-section" ref={sectionRef} aria-label={title}>
      <h1>{title}</h1>

      <div className="gallery-images">
        {items.map((item) => {
          const src = `/assets/images/${item.file}`;

          return (
            <div key={item.file} className="image-container">
              <img src={src} alt={item.text} loading="lazy" decoding="async" />
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
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset - 16;

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
        items={drivewaysItems}
        sectionRef={drivewaysRef}
      />

      <GallerySection
        title="Patios & Paving"
        items={patiosAndPavingItems}
        sectionRef={patiosRef}
      />

      <GallerySection
        title="Groundworks & Drainage"
        items={groundworksAndDrainageItems}
        sectionRef={groundworksRef}
      />

      <GallerySection
        title="Landscaping & Remedial Work"
        items={landscapingAndRemedialWorkItems}
        sectionRef={landscapingRef}
      />
    </div>
  );
}

export default Gallery;
