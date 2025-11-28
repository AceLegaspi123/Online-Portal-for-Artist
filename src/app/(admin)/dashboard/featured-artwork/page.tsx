"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
import { PiImageSquareLight } from "react-icons/pi";
import artwork from "@/data/featuredArtwork.json"
import { useState } from 'react';
import FeaturedArtForm from '@/app/components/dashboard/FeaturedArtForm';

const FeaturedArtwork = () => {
  const [isActive, setIsActive] = useState(false);

  const handleFeaturedArtwork = () =>{
    setIsActive(i => !i)
    console.log(isActive);
  }

  return (
   <div className='w-full relative'>
       <div className="flex font-semibold mb-10">
        <h1 className="text-2xl font-semibold">Report Management</h1>

        <div className="flex gap-4 items-center ml-auto">
          <p className="opacity-70"><Link href="/dashboard">Home</Link></p>
          <RiArrowRightSLine className="opacity-70"/>
          <p>Featured Artwork</p>
        </div>
      </div>

      
    <div className="w-full bg-primary px-5 py-5 rounded-xl">
      <div className='flex justify-end mb-5'>
         <h4>List of Featured Artwork</h4>
         <button
            onClick={handleFeaturedArtwork} 
            className='bg-blue-500 cursor-pointer transition ease-in-out duration-200 hover:opacity-80 text-white p-4 rounded-sm py-2 ml-auto w-fit'>+ Add new artwork
         </button>
      </div>
          
          
    
          <table className="border-spacing-2.5 bg-secondary p-4 w-full border-collapse overflow-hidden rounded-xl">
            <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
              <tr className=''>
                <th  className="p-4 text-center">Featured ID</th>
                <th  className="p-4 text-center">Artwork</th>
                <th  className="p-4 text-center">Artist</th>
                <th  className="p-4 text-center">Featured Title</th>
                <th  className="p-4 text-center">Featured Description</th>
                <th  className="p-4 text-center">Start Date</th>
                <th  className="p-4 text-center">End Date</th>
                <th  className="p-4 text-center">Status</th>
                <th  className="p-4 text-center">Date Featured</th>
                <th  className="p-4 text-center">Action</th>
              </tr>
            </thead>
    
            <tbody className="">
              {artwork.slice(0, 10).map((u) => (
                <tr className="border-collapse" key={u.ARTWORK_ID}>
                  <td className="p-4 text-center">{u.ARTWORK_ID}</td>
                  <td  className="p-4 text-center">
                      <div className="flex gap-4 text-left ">
                      <PiImageSquareLight className='text-3xl'/>
                        <div>
                          <p className='text-blue-400'>Artwork Details</p>
                        </div>
                      </div>
                  </td>

                  <td  className="p-4 text-center">
                      <div className="flex gap-4 text-left ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlUNgdBNoRtldCv3npbX2Lo_IPTNmnAW25Q&s" alt="profile icon" className="w-12 h-12 rounded-full bg-gray-700"/>
                        <div>
                          <p className='font-semibold'>{u.artist_profile.name}</p>
                          <p className="opacity-50 -mt-1">{u.artist_profile.gmail}</p>
                        </div>

                      </div>
                  </td>

                  <td  className="p-4 text-center overflow-hidden">{u.FEATURED_TITLE}</td>
                  <td  className="p-4 text-center overflow-hidden">Description</td>
                  <td  className="p-4 text-center overflow-hidden">{u.FEATURED_START}</td>
                  <td  className="p-4 text-center overflow-hidden">{u.FEATURED_END}</td>
                  <td  className="p-4 text-center">
                    <p className={clsx('rounded-md font-semibold text-sm py-1 px-4', {
                      "bg-green-400 text-white" : u.STATUS == "Active",
                      "bg-red-600 text-red-300" : u.STATUS == "Expired"
                    })}>{u.STATUS}</p>
                  </td>
                  
                  <td  className=" text-center p-4">{u.DATE_FEATURED}</td>
                  <td  className=" text-center  text-white  h-5 py-1 font-semibold ">
                    <button 
                      className='hover:opacity-80 transition-opacity ease-in-out duration-150 cursor-pointer bg-red-600 py-1 px-4 rounded-md'
                      >Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>


      <div className={clsx('fixed', 'z-10', 'bg-black', 'opacity-50', 'blur-xl', 'inset-0', {
        "hidden" : isActive == false,
        "block" : isActive == true
      })}></div>

      {
        isActive && <FeaturedArtForm func={handleFeaturedArtwork}/>
      }
   
   </div>
  )
}

export default FeaturedArtwork
