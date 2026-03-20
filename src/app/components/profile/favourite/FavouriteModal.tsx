"use client";

import { useState } from "react";
import Modal from "../../ui/Modal";
import AddNewFavorite from "./AddNewFavorite";
import Image from "next/image";
import { favoriteArt } from "@/types/favoriteArt";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    galleryData: favoriteArt[];
    onUpdate: () => void;
}

const FavouriteModal = ({ isOpen, onClose, galleryData, onUpdate }: GalleryModalProps) => {
  const [createOpen, setCreateOpen] = useState(false);

  const handleCreated = () => {
    onUpdate(); // Refresh the list in the parent
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} className="max-w-[1280px] w-full flex flex-col">
        <div className="bg-secondary flex justify-between items-center px-6 py-4">
          <h2 className="text-lg font-semibold">Favorite</h2>
          <button onClick={onClose} className="text-xl cursor-pointer">✕</button>
        </div>

        <div className="flex-1 p-6 bg-primary">
          <div className="flex justify-between mb-4">
            <div>
              <p className="font-semibold">Your Favorite Arts Collection</p>
              <p className="text-xs opacity-60">Create, rename, and delete your favorite collection.</p>
            </div>
            <button
              onClick={() => setCreateOpen(true)}
              className="border px-4 py-2 text-sm rounded hover:bg-white hover:text-black transition cursor-pointer"
            >
               + New Collection
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryData.map((item, idx) => (
              <div key={idx} className='bg-secondary rounded-md overflow-hidden hover:ring-1 ring-white cursor-pointer'>
                <div className="h-40 w-full p-2">
                  <Image 
                    height={160}
                    width={160}
                    className="rounded-md object-cover h-full w-full bg-primary" 
                    src={item.coverImagePreview || ""}
                    alt={item.title} 
                  />
                </div>
                <div className='p-3'>
                    <p className='font-bold'>{item.title}</p>
                    <p className='text-xs opacity-50'>{item.visibility}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 bg-secondary flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-green-400 text-black rounded font-semibold">
            Done
          </button>
        </div>
      </Modal>

      <AddNewFavorite
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={handleCreated}
      />
    </>
  );
};

export default FavouriteModal;