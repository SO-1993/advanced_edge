import HeroSection from "../components/Hero";
import OurApproach from "../components/OurApproach";
import OurServices from "../components/OurServices";
import QuickScan from "../components/QuickScan";
import WhyChoose from "../components/WhyChoose";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <QuickScan />
      <WhyChoose />
      <OurApproach />
      <OurServices />
    </div>
  );
};

export default HomePage;
