import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/index.css';

const images = [
    require("../assets/images/image1.jpg"),
    require("../assets/images/image2.jpg"),
    require("../assets/images/image3.jpg"),
    require("../assets/images/image4.jpg"),
    require("../assets/images/image5.jpg"),
    require("../assets/images/image6.jpg"),
    require("../assets/images/image7.jpg"),
    require("../assets/images/image8.jpg"),
    require("../assets/images/image9.jpg"),
    require("../assets/images/image10.jpg"),
    require("../assets/images/image11.jpg"),
    require("../assets/images/image12.jpg"),
    require("../assets/images/image13.jpg"),
    require("../assets/images/image14.jpg"),
    require("../assets/images/image15.jpg"),
    require("../assets/images/image16.jpg"),
  ];
  


  function Gallery() {
    return (
      <div className="gallery-images">
        {images.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    );
  }  

export default Gallery