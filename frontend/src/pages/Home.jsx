import HeroSection from '../components/home/HeroSection'
import StatusStrip from '../components/home/StatusStrip'
import WhySection from '../components/home/WhySection'

function Home() {
  return (
    <div className="bg-white">
      <div className="relative pb-14 sm:pb-16">
        <HeroSection />
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 sm:px-6 lg:px-8">
          <StatusStrip />
        </div>
      </div>
      <WhySection />
    </div>
  )
}

export default Home
