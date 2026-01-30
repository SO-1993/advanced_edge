import "../css/App.css";
import "../css/index.css";

import {
  FiTool,
  FiCheckSquare,
  FiUsers,
  FiStar
} from "react-icons/fi";

function FeaturesFeather() {
  return (
    <section className="features">
      <div className="feature">
        <FiTool className="feature-icon" />
        <div>
          <h4>Craftsmanship Built on Experience</h4>
          <p>
            Precision-led groundwork and paving shaped by years of hands-on,
            professional site experience.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiCheckSquare className="feature-icon" />
        <div>
          <h4>Uncompromising Standards</h4>
          <p>
            Every stage carefully planned and executed to ensure long-term
            performance and refined results.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiUsers className="feature-icon" />
        <div>
          <h4>Professional, Transparent Service</h4>
          <p>
            Clear communication, honest guidance, and well-defined pricing from
            consultation to completion.
          </p>
        </div>
      </div>

      <div className="feature">
        <FiStar className="feature-icon" />
        <div>
          <h4>Pride in Detail & Finish</h4>
          <p>
            Careful attention to every detail, leaving a clean, precise finish
            that reflects our reputation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesFeather;
