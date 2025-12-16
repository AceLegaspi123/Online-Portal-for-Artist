'use client'
import classNames from 'clsx';

import ReportArtworkModal from '../ui/ReportArtworkForm';
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import SaveToCollectionModal from "./SaveToCollectionModal";
import { LuPlus } from "react-icons/lu";


const collections = [
    {
      id: "COL001",
      name: "Illustrations",
      itemsCount: 12,
      updatedAt: "yesterday",
    },
    {
      id: "COL002",
      name: "UI Inspirations",
      itemsCount: 7,
      updatedAt: "2 days ago",
    },
];

const Menu = ({art}: any) => {
 const [open, setOpen] = useState(false);
 const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);
 const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative z-10 flex items-center gap-4">
        {/* This is for Add to favorite menu */}
        <div>
            <SaveToCollectionModal
                isOpen={favoriteIsOpen}
                onClose={() => setFavoriteIsOpen(false)}
                collections={collections}
                onSave={(collectionId) => {
                    console.log("Saved to:", collectionId);
                    setFavoriteIsOpen(false);
                }}
            />

            <div onClick={() => setFavoriteIsOpen(i => !i)}className='flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-black hover:opacity-100 opacity-80 cursor-pointer'>
                <LuPlus />
                <p>Add to favorite</p>
            </div>
         </div>

        {/* This is for sold count */}
        {/* <div className='flex items-center gap-2'>
            <FcSalesPerformance />
            <p>{art?.sold} Sold arts</p>
        </div> */}

        {/* This is for report modal menu */}
        <ReportArtworkModal
            isOpen={open}
            onClose={() => setOpen(false)}
            artworkId="ART123"  
            reportedArtistId="USR456"
            reporterById="USR789"
        />

        <BsThreeDots onClick={() => setOpenMenu(i => !i)} className="text-2xl cursor-pointer hover:opacity-80 "/>

        <div className={classNames('absolute top-12 right-0 bg-primary border-1 text-nowrap border-primary-line rounded-md rounded-2 py-3 transition-all ', {
            "opacity-0 hidden" : !openMenu,
            "opacity-100 block": openMenu
        })}>
            <div
                onClick={() => { 
                    setOpenMenu(i => !i)
                    setOpen(i => !i)
                }} 
                className="flex gap-2 items-center py-2 pr-12 pl-4 hover:bg-secondary cursor-pointer">
               <MdOutlineReport />
                <p>Report Artwork</p>
            </div>

            <div 
                onClick={() => setOpenMenu(i => !i)} 
                className="flex gap-2 items-center  py-2 pr-12 pl-4 hover:bg-secondary cursor-pointer mt-2">
                    <IoIosClose />
                    <p>Close</p>
            </div>
        </div>
    </div>
  )
}

export default Menu
