import React from 'react'
import { TiFolderAdd } from "react-icons/ti";

const Page = () => {
  return (
      <div className="flex w-[58em] m-auto bg-[#0F0F10] rounded-xl border border-[#2E2E2E] overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center w-1/2 bg-[#1A1A1C] p2">
          <div className="flex items-center justify-center w-[250px] h-[250px] rounded-full bg-gradient-primary opacity-70">
            <div className="w-[140px] h-[100px] flex items-center justify-center">
              <img 
                src="https://icons.iconarchive.com/icons/icons8/ios7/512/Very-Basic-Picture-icon.png"
                alt=""
                className='h-full w-full object-contain '
              />
            </div>
          </div>

          <button className="opacity-70 hover:opacity-100 duratio-200 cursor-pointer ease-in-out transitio mt-8 px-10 py-3 rounded-full bg-gradient-primary text-sm font-medium text-white shadow-md hover:opacity-90 transition">
            Add sample image
          </button>
        </div>

        
        <div className="w-1/2 p-10">
          <form className="flex flex-col gap-5">
            <h3 className="text-2xl font-semibold text-white">Request Commission</h3>
            <p className="text-gray-400 text-sm -mt-4">
              Post a commission request for an artist to create an artwork for you.
            </p>

            <div className='flex flex-col gap-8'>
                  <div>
                    <label htmlFor='service-name' className="block  font-semibold mb-2">
                      Service Name
                    </label>
                    <input
                      type="text"
                      name='service-name'
                      placeholder="Service Name"
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500"
                    />
                  </div>

                  
                  <div>
                    <label className="block font-medium mb-2">
                      Description
                    </label>
                    <textarea
                      placeholder="Description (provide as many details for your service)"
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500">
                    </textarea>
                  </div>

                  
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block font-medium mb-2">
                        Art Type
                      </label>
                      <select
                        className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white outline-none focus:border-blue-500 text-sm">
                        <option>Category</option>
                        <option>Digital</option>
                        <option>Traditional</option>
                      </select>
                    </div>

                    <div className="flex-1">
                      <label className="block font-medium mb-2">
                        Deadline
                      </label>
                      <select
                        className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white outline-none focus:border-blue-500 text-sm">
                        <option>Work Hours</option>
                        <option>One Week</option>
                        <option>Three Weeks</option>
                        <option>One Month</option>
                      </select>
                    </div>
                  </div>

                  
                  <div>
                    <label className="block font-medium  mb-2">
                      Price
                    </label>
                    <input
                      type="text"
                      placeholder="Enter a price"
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500"/>
                  </div>

                  
                  <button
                    type="submit"
                    className="mt-2 bg-blue-600 hover:bg-blue-500 transition text-white rounded-lg p-4 font-medium">
                    Send Commission
                  </button>
            </div>
           
          </form>
        </div>
      </div>
  )
}

export default Page