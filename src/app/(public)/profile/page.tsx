import React from 'react'

const page = () => {
  return (
    <div>
      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
        <div className='flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center'>
          <img src="/galleryicon.png" alt="" className='h-[70%] object-cover' />

          <div  className='h-[30%] mt-[-30px]'>
             <h4 className='font-bold mt-[-20px]'>Show your Artwork</h4>
            <p className='text-sm mt-2 opacity-50'>Submit your art to your gallery for featuring and display.</p>
           <button className='bg-gradient-primary mt-4 rounded-md p-1 w-40'>Submit Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Shop
        </h4>
        <div className='flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center'>
          <img src="/galleryicon.png" alt="" className='h-[70%] object-cover' />

          <div  className='h-[30%] mt-[-30px]'>
             <h4 className='font-bold mt-[-20px]'>Create your Art Shop</h4>
            <p className='text-sm mt-2 opacity-50'>Create an art shop to sell your art online</p>
           <button className='bg-gradient-primary mt-4 rounded-md p-1 w-40'>Create Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
        <div className='flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center'>
          <img src="/galleryicon.png" alt="" className='h-[70%] object-cover' />

          <div  className='h-[30%] mt-[-30px]'>
             <h4 className='font-bold mt-[-20px]'>Show your Artwork</h4>
            <p className='text-sm mt-2 opacity-50'>Submit your art to your gallery for featuring and display.</p>
           <button className='bg-gradient-primary mt-4 rounded-md p-1 w-40'>Submit Now</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
