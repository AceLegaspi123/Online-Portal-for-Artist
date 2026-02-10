import Image from 'next/image';
import React from 'react';
import { favoriteArt } from "@/types/favoriteArt";

const FavoriteCard = (data: favoriteArt) => {
    return (
        <div className='p-2 w-90 bg-primary rounded-sm opacity-80 ease-in-out duration-200 hover:opacity-100 cursor-pointer'>
            <div className='w-full h-full'>
                <div className='overflow-hidden rounded-md'>
                    <Image 
                        height={200}
                        width={200}
                        className='object-cover h-50 w-full bg-secondary' 
                        src={data.coverImagePreview || ""}
                        alt={data.title} 
                    />
                </div>
                <div className='flex mt-2 px-2 pb-1'>
                    <p className='font-bold mr-2'>{data.title || "Untitled"}</p>
                    <p className='opacity-50'><b>0</b></p>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCard;