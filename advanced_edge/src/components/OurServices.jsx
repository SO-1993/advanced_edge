import { useNavigate } from "react-router-dom";

const services = [
  { title: "New Driveways", image: "/assets/images/double_driveway2.jpeg" },
  { title: "Patios & Paving", image: "/assets/images/image12.jpg" },
  { title: "Groundworks & Drainage", image: "/assets/images/excevation.jpg" },
  { title: "Landscaping & Remedial Work", image: "/assets/images/image4.jpg" },
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
