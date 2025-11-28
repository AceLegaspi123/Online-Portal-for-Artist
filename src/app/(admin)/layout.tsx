import React from 'react'
import Navbar from '../components/dashboard/Navbar';
import Header from '../components/dashboard/Header';

const LayoutWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className=''>
        <Header />
        <Navbar />

          <main
        className="
          pt-[0rem]          
          pl-[20em]          
          w-full
          max-w-[2000px]
          mx-auto
          px-6
        "
      >
        {children}
      </main>
    </div>
  )
}

export default LayoutWrapper;