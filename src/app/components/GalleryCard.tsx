import React from 'react'
import { FaRegStar } from "react-icons/fa";

const GalleryCard = () => {
  return (
<div className='flex my-4 gap-6'>
    <div className='shop-card p-2 w-90 bg-[#161A1F] rounded-sm opacity-80 ease-in-out duration-200 hover:opacity-100 cursor-pointer'>
        <div className='w-full h-full cursor-pointer'>
            <div>
                <img className='rounded-md object-cover h-50 w-100' src="https://s.studiobinder.com/wp-content/uploads/2020/08/Types-of-Art-Styles-Featured-1568x882.jpg" alt="" />
            </div>
            <div className='flex items-center gap-2 mt-2 px-2'>
            </div>
            <div className='flex mt-2 px-2 pb-1'>
                <p className='text-bold mr-2'>All</p>
                <p className='opacity-50'><b>54</b></p>
            </div>
        </div>
    </div>
    <div className='shop-card p-2 w-90 bg-[#161A1F] rounded-sm opacity-80 ease-in-out duration-200 hover:opacity-100 cursor-pointer'>
        <div className='w-full h-full cursor-pointer'>
            <div>
                <img className='rounded-md object-cover h-50 w-100' src="https://tse4.mm.bing.net/th/id/OIP.r03K4YiCBfm-WMh0NQmLDwHaGI?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>
            <div className='flex items-center gap-2 mt-2 px-2'>
            </div>
            <div className='flex mt-2 px-2 pb-1'>
                <p className='text-bold mr-2'>Featured</p>
                <p className='opacity-50'><b>1</b></p>
            </div>
        </div>
    </div>
        <div className='shop-card w-90 bg-[#161A1F] rounded-sm cursor-pointer'>
            <div className='opacity-50 hover:opacity-100 duration-200 ease-in-out'>
                <p className='text-center mt-25 text-5xl'>+</p>
                <p className='text-center'><b>Create new Art Shop</b></p>
            </div>
        </div>
</div>
  )
}

export default GalleryCard
