import React from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <main className=''>
        {children}
      </main>
      <Footer />
     

      {/* <div className='bg-secondary absolute -bottom-10 w-[100vw] h-60'>
      </div> */}
    </div>
  )
}

export default layout