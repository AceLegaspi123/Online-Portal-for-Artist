import { TfiGallery } from "react-icons/tfi";

const page = () => {
  return (
    <div>
      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
        <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2 "/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Shop
        </h4>
        <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2"/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
         <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2"/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

    </div>
  )
}

export default page
