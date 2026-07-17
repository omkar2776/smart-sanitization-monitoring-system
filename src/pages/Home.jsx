import HeroSection from "../components/home/HeroSection";
import WhySection from "../components/home/WhySection";
import DashboardPreview from "../components/home/DashboardPreview";
import HowItWorks from "../components/home/HowItWorks";
import KeyFeatures from "../components/home/KeyFeatures";
function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhySection />
      <DashboardPreview />
      <HowItWorks />
      <KeyFeatures />
    </div>
  );
}

export default Home;