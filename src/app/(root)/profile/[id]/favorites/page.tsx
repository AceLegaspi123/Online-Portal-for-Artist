'use client';

import { useEffect, useState } from "react";
import FavoriteCard from "@/app/components/profile/favourite/FavoriteCard";
import FavouriteModal from "@/app/components/profile/favourite/FavouriteModal";
import { getData } from '@/utils/storage';
import { favoriteArt } from "@/types/favoriteArt";
import Image from "next/image";

const GalleryPage = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [favoriteData, setFavoriteData] = useState<favoriteArt[]>([]);

  // Function to sync state with localStorage
  const refreshGallery = () => {
    const data = getData<favoriteArt>('gallery');
    setFavoriteData(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    refreshGallery();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Gallery</h1>

      <FavouriteModal 
        isOpen={isCreateOpen}  
        onClose={() => setIsCreateOpen(false)} 
        galleryData={favoriteData}
        onUpdate={refreshGallery} 
      />

      <div className="flex gap-4 flex-wrap">
        {/* Default "All" Card */}
        <div className="shop-card h-70 p-2 w-90 bg-primary rounded-sm opacity-80 ease-in-out duration-200 hover:opacity-100 cursor-pointer">
          <div className="w-full h-full">
            <Image
              height={200}
              width={200}
              className="rounded-md object-cover h-50 w-full"
              src="https://i.pinimg.com/736x/a1/f2/82/a1f28223598a486427a9e9cf5416fc24.jpg"
              alt="All"
            />
            <div className="flex mt-2 px-2 pb-1">
              <p className="font-bold mr-2">All</p>
              <p className="opacity-50"><b>54</b></p>
            </div>
          </div>
        </div>
        
        {/* Render Saved Galleries */}
        {favoriteData.map((item, index) => (
          <FavoriteCard key={index} {...item} />
        ))}

        {/* Create new art shop button */}
        <div 
          onClick={() => setIsCreateOpen(true)}
          className="shop-card w-90 h-70 bg-primary rounded-sm cursor-pointer border-2 border-dashed border-gray-600 flex flex-col items-center justify-center hover:border-white transition-all"
        >
          <p className="text-5xl opacity-50">+</p>
          <p className="font-bold opacity-50">Create new Art Shop</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;