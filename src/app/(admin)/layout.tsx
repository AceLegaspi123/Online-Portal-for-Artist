import React from 'react'
import Navbar from '../components/dashboard/Navbar';

const LayoutWrapper = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex'>
        <Navbar />
        {children}
    </div>
  )
}

export default LayoutWrapper;