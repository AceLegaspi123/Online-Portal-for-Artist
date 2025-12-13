"use client";
import clsx from 'clsx';

import React from "react";
import ArtList from "../shared/ArtList";
import Suggestion from "./Suggestion";
import { BsSearch } from 'react-icons/bs';
import FilterIcon from "../ui/FilterIcon";
import { ImSpinner2 } from "react-icons/im";
import artworks from "@/data/artwork.json"
import Link from "next/link";
import SearchHeader from '../ui/SearchHeader';


const ExploreLayout = () => {
  const Suggestion : string[] = ["All", "Digital Art", "Traditional Art", "Illustration", "Portrait", "3d Art"]
  
  return (
    <div className="flex flex-col gap-4 relative mt-10">
      <div className='fixed top-15 left-20 right-20 z-20 bg-background py-5 pt-8 '>
        <div className='relative'>
          <input 
            type="text" 
            placeholder='Search' 
            className='pl-15 h-[5vh] text-white w-full bg-primary rounded-md'
          />
          <BsSearch className='absolute top-4 left-5'/>
        </div>
      </div>

      <SearchHeader />
        
      <div className="w-full mx-auto
        columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 min-2xl:columns-7
        gap-4 mt-35">
        {artworks.map((art) => (
          <Link href={`/explore/${art.artwork_id}`} key={art.artwork_id} className="break-inside-avoid">
            <ArtList art={art} />
          </Link>
        ))}
      </div>



      <div className="flex justify-center mt-6">
        <span className="loading loading-dots loading-xl bg-foreground"></span>
      </div>

        <div className="flex items-center gap-4 mt- mx-auto">
          <ImSpinner2 />
          <span>Loading</span>
        </div>

    </div>
  );
};

export default ExploreLayout;
