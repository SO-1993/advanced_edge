import "../css/App.css";
import "../css/index.css";

import {
  FiBriefcase,
  FiStar,
  FiClock,
  FiZap
} from "react-icons/fi";

function QuickScan() {
  return (
    <section className="quick-scan">
      <div className="quick-scan-inner">
        <div className="scan-item">
          <FiBriefcase className="scan-icon" />
          <p>150+ Projects Completed</p>
        </div>

        <div className="scan-item">
          <FiStar className="scan-icon" />
          <p>5.0 Average Rating</p>
        </div>

        <div className="scan-item">
          <FiClock className="scan-icon" />
          <p>15+ Years Experience</p>
        </div>

        <div className="scan-item">
          <FiZap className="scan-icon" />
          <p>24hr Response Time</p>
        </div>
      </div>
    </section>
  );
}

export default QuickScan;
