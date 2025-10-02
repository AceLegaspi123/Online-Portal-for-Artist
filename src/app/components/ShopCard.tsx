import React from 'react'

const ShopCard = () => {
  return (
<div className='flex m-4 gap-2'>
    <div className='shop-card p-2 w-90 bg-[#161A1F] rounded-sm'>
        <div className='w-full h-full'>
            <div>
                <img className='rounded-md object-cover h-50 w-100' src="https://tse4.mm.bing.net/th/id/OIP.r03K4YiCBfm-WMh0NQmLDwHaGI?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>
            <div className='mt-2 px-2'>
                <p className='text-gray-500'><b>&#9734; 42</b></p>
            </div>
            <div className='flex justify-between gap-43 mt-2 px-2 pb-1'>
                <p><b>Acrylics</b></p>
                <p><b>$3</b></p>
            </div>
        </div>
    </div>
        <div className='shop-card w-90 bg-[#161A1F] rounded-sm'>
            <div className=''>
                <p className='text-center mt-25 text-5xl'>+</p>
                <p className='text-center'><b>Create new Art Shop</b></p>
            </div>
        </div>
</div>
  )
}

export default ShopCard
