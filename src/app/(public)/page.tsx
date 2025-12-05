import HeroSection from "../components/ui/HeroSection";
import LightRays from '../components/ui/LightRays';

const Homepage = () => {
  return (
    <div className="max-w-[1680px] w-full mx-auto">
      <div className='fixed inset-0 top-0 min-h-screen z-[-10]'>
        <LightRays
          raysOrigin="top-center"
          raysColor="#0af759"
          raysSpeed={1.0}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.1}
          className="custom-rays"
        />
      </div>
      <main className="flex justify-center">
          <HeroSection />
      </main>
    </div>
  )
}

export default Homepage;