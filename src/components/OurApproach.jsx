import "../css/App.css";
import "../css/index.css";

import {
  FiMessageCircle,
  FiLayers,
  FiTool,
  FiCheckCircle
} from "react-icons/fi";

function OurApproach() {
  return (
    <section className="our-approach">
      <h2>Our Approach</h2>

      <div className="approach-grid">
        <div className="approach-item">
          <h5>
            <FiMessageCircle className="approach-icon" />
            Consultation
          </h5>
          <p>Understanding requirements and setting clear expectations.</p>
        </div>

        <div className="approach-item">
          <h5>
            <FiLayers className="approach-icon" />
            Preparation
          </h5>
          <p>Proper groundwork, drainage, and structural setup.</p>
        </div>

        <div className="approach-item">
          <h5>
            <FiTool className="approach-icon" />
            Execution
          </h5>
          <p>Precision work using proven methods and quality materials.</p>
        </div>

        <div className="approach-item">
          <h5>
            <FiCheckCircle className="approach-icon" />
            Completion
          </h5>
          <p>Final clean-up and delivering a lasting, high-quality finish.</p>
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
