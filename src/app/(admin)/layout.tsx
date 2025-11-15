import React from 'react'
import Navbar from '../components/dashboard/Navbar';
import Header from '../components/dashboard/Header';

const LayoutWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className=''>
        <Header />

        <div className='flex gap-4'>
          <Navbar />
          <div className='ml-[22em]'>
             {children}
          </div>
        </div>
    </div>
  )
}

export default LayoutWrapper;