"use client";

import React from "react";
import ArtList from "../shared/ArtList";
import Suggestion from "./Suggestion";
import { BsSearch } from 'react-icons/bs';
import FilterIcon from "../ui/FilterIcon";
import { ImSpinner2 } from "react-icons/im";
import artworks from "@/data/artlist.json"
import Link from "next/link";

const ExploreLayout = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      {/* <h3 className="text-lg font-bold">Explore Arts</h3> */}
      <div className="w-full bg-background z-10 pt-10 pb-3 border-b-1 border-primary-line">
          <div className="flex gap-4 items-center space-between">
            <div className="bg-secondary flex items-center border-1 border-primary-line justify-center gap-2 py-3 px-8 cursor-pointer rounded-full">
                <FilterIcon />
                <p>Filter</p>
            </div>

            <div className="grow flex relative">
              <BsSearch className="opacity-80 text-xl absolute top-4 left-4"/>
              <input
                type="text"
                placeholder={`Search arts/artist in ArtistryHub`}
                className="border-1 border-primary-line bg-secondary opacity-80 font-normal py-3 pl-14 w-full rounded-full active:outline-0 "
              />
            </div>
          </div>
      

          <Suggestion />
      </div>
     

      <div className="max-w-[1680px] w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-x-8 gap-y-14 mt-4 cursor-pointer">
        {artworks.map((art) => (
          <Link href={`/explore/${art.id}`} key={art.id}>
            <ArtList art={art}  />
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
