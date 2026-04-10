import React from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      
      
      <main className='flex-grow mt-18'>
        {children}
      </main>
      
      <div className='bg-primary mt-20'>
        <Footer />
      </div>
      
    </div>
  )
}

export default layout