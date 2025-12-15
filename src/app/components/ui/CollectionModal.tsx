"use client"

import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const CollectionModal = () => {
  const [collectionIsActive, setCollectionIsActive] = useState(false);
  return (
    <div className="w-100 bg-primary p-4 rounded-md flex flex-col gap-6">
        <div className="flex justify-between items-center">
            <h4 className="text-lg font-semibold">Add to Collection</h4>
            <IoMdClose 
                onClick={() => setCollectionIsActive(true)}
                className="opacity-80 hover:opacity-100 transition duration-200 ease-in-out cursor-pointer"/>
        </div>
        
        <div className="flex flex-col gap-4">
            <div className="h-50 w-50 rounded-md overflow-hidden">
                <img src="/" alt="" className="bg-primary w-full h-full object-cover"/>
            </div>

            <div>
                <h5 className="font-semibold">Dashboards</h5>
                <p>24 items <span>Updated Dec 15, 2025</span></p>
            </div>
        </div>

        <div className="flex justify-between items-center w-full">
            <button className="flex items-center gap-2">
                <FaPlus />
                <p>Create new</p>
            </button>

            <button className="bg-green-500 px-8 rounded-md  cursor-pointer opacity-80 hover:opacity-100 py-2 items-center gap-2">
                <p>Save</p>
            </button>
        </div>
    </div>
  )
}

export default CollectionModal