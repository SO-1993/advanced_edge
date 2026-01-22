import '../css/App.css';
import '../css/index.css';

import { useNavigate } from 'react-router-dom';


function HeroSection() {
    const navigate = useNavigate();

    const navigateToGallery = () => {
        navigate('/gallery');
      };


    return <div className="hero">
        <div>
            <h2>Refined groundworks, paving & landscaping</h2>
            <h4>built on precision, preparation, and lasting quality.</h4>
            <p>Serving homeowners who value craftsmanship, professionalism, and results that stand the test of time.</p>
            <button className="contact-us">Contact Us</button>
            <button className="view-work" onClick={navigateToGallery}>View our Work</button>
            </div>
    </div> 

       
    
}

export default HeroSection;