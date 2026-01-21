import HeroSection from "../components/Hero";
import QuickScan from "../components/QuickScan";
import WhyChoose from "../components/WhyChoose";
import OurApproach from "../components/OurApproach";
import OurServices from "../components/OurServices";
import Reviews from "../components/Reviews";
import PersonalTouch from "../components/PersonalTouch";
import FAQs from "../components/FAQ";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <QuickScan />
      <WhyChoose />
      <OurApproach />
      {/* <OurServices /> */}
      {/* <Reviews /> */}
      {/* <PersonalTouch /> */}
      {/* <FAQs /> */}
      {/* <CallToAction /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
