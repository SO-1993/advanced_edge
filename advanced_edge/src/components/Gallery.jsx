import '../css/App.css';
import '../css/index.css';

// Static imports for all 16 images
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";
import image10 from "../assets/images/image10.jpg";
import image11 from "../assets/images/image11.jpg";
import image12 from "../assets/images/image12.jpg";
import image13 from "../assets/images/image13.jpg";
import image14 from "../assets/images/image14.jpg";
import image15 from "../assets/images/image15.jpg";
import image16 from "../assets/images/image16.jpg";

// Put all images in an array for DRY mapping
const images = [
  image1, image2, image3, image4,
  image5, image6, image7, image8,
  image9, image10, image11, image12,
  image13, image14, image15, image16
];

// replace with real descriptions 1 > n
// Pair each image with its own description
const galleryItems = [
    { src: image1, text: "Job description for image 1" },
    { src: image2, text: "Job description for image 2" },
    { src: image3, text: "Job description for image 3" },
    { src: image4, text: "Job description for image 4" },
    { src: image5, text: "Job description for image 5" },
    { src: image6, text: "Job description for image 6" },
    { src: image7, text: "Job description for image 7" },
    { src: image8, text: "Job description for image 8" },
    { src: image9, text: "Job description for image 9" },
    { src: image10, text: "Job description for image 10" },
    { src: image11, text: "Job description for image 11" },
    { src: image12, text: "Job description for image 12" },
    { src: image13, text: "Job description for image 13" },
    { src: image14, text: "Job description for image 14" },
    { src: image15, text: "Job description for image 15" },
    { src: image16, text: "Job description for image 16" },
  ];
  

  function Gallery() {
    return (
      <div className="gallery-images">
        {galleryItems.map((item, index) => (
          <div key={index} className="image-container">
            <img src={item.src} alt={`Gallery ${index + 1}`} />
            <div className="hover-text">{item.text}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Gallery;