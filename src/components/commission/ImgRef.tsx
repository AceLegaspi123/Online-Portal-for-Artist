import React from 'react'
import { TbFolderUp } from "react-icons/tb";
import { MdImage } from "react-icons/md";

const ImgRef = () => {
  return (
    <div className=' flex flex-col text-center rounded-md w-130    mx-auto p-10 bg-[#FFFFFF1A]'>
        <h4 className='text-left font-bold text-2xl  '>Upload a new reference</h4>

        <p className='text-left text-sm opacity-50 mt-2'>Provide visual references to guide the artist in creating your artwork</p>

        <form className='bg-primary mt-10 p-4 py-6 rounded-xl '> 
                   <label className=' h-full cursor-pointer w-full ' htmlFor="img-reference">
                    <TbFolderUp className='text-7xl mx-auto opacity-50 '/>
                     <p className='text-md mt-4 font-bold'> Click to upload or drag and drop </p> 
                     <p className='opacity-50 font-400 text-sm mt-4'>Maximum file size 5mb</p>
                    </label>
                    <input className='opacity-0' id="img-reference" name="img-reference" type="file" alt="Submit" width="48" height="48"/> 
        </form>
        <div className='flex gap-4  '>
            <div className='p-10 w-25 rounded-md bg-[#191A1E] mt-4  '>
            <div className='bg-gray-700 size-6 flex justify-center items-center rounded-full   '>
             <MdImage/>
            </div>
        </div>
        
        <div className='p-10 w-25 rounded-md bg-[#191A1E] mt-4 '>
            <div className='bg-gray-700 size-6 flex justify-center items-center rounded-full   '>
             <MdImage/>
            </div>
        </div>

        <div className='p-10 w-25 rounded-md bg-[#191A1E] mt-4 '>
            <div className='bg-gray-700 size-6 flex justify-center items-center rounded-full   '>
             <MdImage/>
            </div>
        </div>
        </div>
        <div className='flex justify-between'>
            <button className='text-sm p-2 font-[#THICCCBOI] border w-35 mt-10 rounded-sm'> Cancel</button>
            <button className='text-sm p-2 font-bold border w-35 mt-10 rounded-sm bg-white text-black '> Next Step</button>
        </div>
     
    </div>
  )
}

export default ImgRef