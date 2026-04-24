import React from 'react'
import Navbar from '../components/dashboard/Navbar';
import Header from '../components/dashboard/Header';
import { getSession } from '../actions/auth';

const LayoutWrapper = async ({children} : {children: React.ReactNode}) => {
  const session = await getSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Unauthorized Access. Please log in.</p>
      </div>
    );
  }

  if (session.role !== "Admin") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold">Access Denied. Admins only.</p>
      </div>
    );
  }

  console.log("Admin Session:", session.role);

  return (
    <div className=''>
        <Header />
        <Navbar />

          <main
        className="
          pt-[0rem]          
          pl-[20em]          
          w-full
          max-w-[2500px]
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