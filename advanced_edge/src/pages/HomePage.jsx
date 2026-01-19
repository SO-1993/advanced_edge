import HeroSection from "../components/Hero";
import QuickScan from "../components/QuickScan";
import WhyChoose from "../components/WhyChoose";
import OurApproach from "../components/OurApproach";
import OurServices from "../components/OurServices";
import PersonalTouch from "../components/PersonalTouch";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <QuickScan />
      <WhyChoose />
      <OurApproach />
      <OurServices />
      <PersonalTouch />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
