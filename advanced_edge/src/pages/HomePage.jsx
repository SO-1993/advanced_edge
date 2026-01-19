import HeroSection from "../components/Hero";
import QuickScan from "../components/QuickScan";
import WhyChoose from "../components/WhyChoose";
import OurApproach from "../components/OurApproach";
import OurServices from "../components/OurServices";
import PersonalTouch from "../components/PersonalTouch";
import CallToAction from "../components/CallToAction";

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
    </div>
  );
};

export default HomePage;
