import React from 'react'
import ArtList from './ArtList';
import { MdKeyboardArrowLeft } from "react-icons/md";import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeauturedArt = () => {
  return (
    <div className='w-full flex flex-col gap-4 relative'>
        <h2>Featured Art of the Week</h2>

        <div className='grid max-lg:grid-cols-2 grid-cols-4 gap-10'>
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
        </div>

        <div className='absolute h-72 bg-white left-0 top-11 text-5xl opacity-50 hover:opacity-100 cursor-pointer'>
             <MdKeyboardArrowLeft />
        </div>
        
        <MdKeyboardArrowRight />
    </div>
  )
}

export default FeauturedArt;
