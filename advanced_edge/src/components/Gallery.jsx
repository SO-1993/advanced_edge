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
const jobDescriptions = [
    "- A job that took a really long time to complete.",
    "- A task that required a lot of patience and effort.",
    "- Something that finally got finished after many delays.",
    "- A project that consumed most of your week.",
    "- A long assignment that tested your perseverance.",
    "- A chore that felt like it would never end.",
    "- Something you worked on bit by bit over time.",
    "- An endeavor that required careful attention to detail.",
    "- A responsibility that dragged on longer than expected.",
    "- A complicated process that took many steps.",
    "- A milestone that demanded sustained focus.",
    "- A commitment that lasted longer than planned.",
    "- A goal that took weeks to achieve.",
    "- A difficult task that required multiple attempts.",
    "- A slow-moving project that finally reached completion."
  ];
  

  function Gallery() {
    return (
      <div className="gallery-images">
        {images.map((src, index) => (
          <div key={index} className="image-container">
            <img src={src} alt={`Gallery ${index + 1}`} />
            {/* Use index to pick a job description, fallback if fewer descriptions */}
            <div className="hover-text">
              {jobDescriptions[index % jobDescriptions.length]}
            </div>
          </div>
        ))}
      </div>
    );
  }
  

export default Gallery;