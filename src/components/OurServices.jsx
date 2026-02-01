import { useNavigate } from "react-router-dom";

import image15 from "../assets/images/image15.jpg";
import image12 from "../assets/images/image12.jpg";
import image1 from "../assets/images/image1.jpg";
import image4 from "../assets/images/image4.jpg";

const services = [
  { title: "New Driveways", image: image15 },
  { title: "Patios & Paving", image: image12 },
  { title: "Groundworks & Drainage", image: image1 },
  { title: "Landscaping & Remedial Work", image: image4 },
];

function OurServices() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate("/gallery", { state: { section: title } });
  };

  return (
    <section className="our-services">
      <h2>Our Services</h2>

      <div className="services-row">
        {services.map((service) => (
          <button
            key={service.title}
            type="button"
            className="service-card"
            aria-label={`View ${service.title} gallery`}
            onClick={() => handleClick(service.title)}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-overlay" />
            <span className="service-title">{service.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
