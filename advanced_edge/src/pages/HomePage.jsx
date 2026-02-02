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
    <main>
      <HeroSection />
      <QuickScan />
      <WhyChoose />
      <OurServices />
      <OurApproach />
      <Reviews />
      <PersonalTouch />
      <FAQs />
      <CallToAction />
    </main>
  );
};

export default HomePage;
