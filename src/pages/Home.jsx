import HeroSection from "../components/home/HeroSection";
import WhySection from "../components/home/WhySection";
import DashboardPreview from "../components/home/DashboardPreview";
import HowItWorks from "../components/home/HowItWorks";

function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhySection />
      <DashboardPreview />
      <HowItWorks />
    </div>
  );
}

export default Home;