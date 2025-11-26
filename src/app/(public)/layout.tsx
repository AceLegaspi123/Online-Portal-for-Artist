import React from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LightRays from '../components/ui/LightRays';

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative min-h-screen'>
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
      <Header />
        {children}
      <Footer />
     

      {/* <div className='bg-secondary absolute -bottom-10 w-[100vw] h-60'>
      </div> */}
    </div>
  )
}

export default layout