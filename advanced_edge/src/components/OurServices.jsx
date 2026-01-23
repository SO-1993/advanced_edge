import '../css/App.css';
import '../css/index.css';

import image16 from "../assets/images/image16.jpg";
import image12 from "../assets/images/image12.jpg";
import image1 from "../assets/images/image1.jpg";
import image4 from "../assets/images/image4.jpg";

const services = [
  { title: "New Driveways", image: image16 },
  { title: "Patios & Paving", image: image12 },
  { title: "Groundworks & Drainage", image: image1 },
  { title: "Landscaping & Remedial Work", image: image4 },
];

function OurServices() {
  return (
    <section className="our-services">
      <h2>Our Services</h2>

      <div className="services-row">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-overlay" />
            <span className="service-title">{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
