import React from 'react'


const Details = () => {
  return (
    <div className='border flex flex-col  rounded-md w-130 mx-auto p-10 bg-[#FFFFFF1A] gap-5 mt-10 mb-10 '>
        
        <div className='flex  gap-3 justify-between '>
            <h1>Title of your Arts</h1>
        <div>
            <input className="border rounded-sm w-full flex p-2 " type="text"  placeholder="Ex:Illustrations" />
        </div>

            <div className=' '>
            <img src="https://www.bing.com/th/id/OIP.V37pvUKTsUc4tWkJ1eyh7gHaHW?w=199&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
          </div>
        </div>


        <h1>Description</h1>

        <div>
            <input className="border rounded-sm w-full p-2 " type="text"  placeholder="Your assets description" />
        </div>

          <div className=' flex justify-between   '>
             <div>
            <label className="">
                Art Type
                </label>
             <select className="border flex rounded-sm w-full p-2" id="Art Type" name="Art Type">
                <option value="Type">Type</option>
                <option value="Digital">Digital</option>
                <option value="Traditional">Traditional</option> 
            </select>   
          </div>
         <div>

            <label className=" ">
               Deadline 
            </label>
            <input className="flex border rounded-sm w-full p-2 " type="date"/>

         </div>                    
          </div>
           
        <h1>Tags</h1>
          <div>
            <input className="border rounded-sm w-full p-2 " type="text"  placeholder="Add another" />
        </div>
        
         <div className='flex justify-between'>
            <button className='text-sm p-2 font-[#THICCCBOI] border w-35 mt-10 rounded-sm'> Cancel</button>
            <button className='text-sm p-2 font-bold border w-35 mt-10 rounded-sm bg-white text-black '> Next Step</button>
        </div>
          
    </div>
     
  )
}

export default Details