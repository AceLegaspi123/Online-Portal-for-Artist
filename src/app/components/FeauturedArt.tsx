import React from 'react'
import ArtList from './ArtList';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import FeauturedPagination from './FeauturedPagination';

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

        <FeauturedPagination />

        <div className='artcard-gradient absolute h-73  left-0 top-11 text-5xl hover:opacity-100 cursor-pointer w-28'>
             <MdKeyboardArrowLeft className='translate-y-31 opacity-40 hover:opacity-100 cursor-pointer'/>
        </div>
        
        <div className='artcard-gradient right absolute h-73  right-0 top-11 text-5xl hover:opacity-100 cursor-pointer w-28'>
             <MdKeyboardArrowRight className='translate-y-31 ml-12 opacity-40 hover:opacity-100 cursor-pointer'/>
        </div>
    </div>
  )
}

export default FeauturedArt;
