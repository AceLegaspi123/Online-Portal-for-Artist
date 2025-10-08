import React from 'react'
import { TiFolderAdd } from "react-icons/ti";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-[900px] bg-[#0F0F10] rounded-xl border border-[#2E2E2E] overflow-hidden shadow-lg">
        
        
        <div className="flex flex-col items-center justify-center w-1/2 bg-[#1A1A1C] p-10">
          <div className="flex items-center justify-center w-[250px] h-[250px] rounded-full bg-gradient-to-b from-[#2C6DF2] to-[#5D5FEF] opacity-90">
            <div className="w-[140px] h-[100px] border-2 border-white/50 rounded-lg flex items-center justify-center">
              <TiFolderAdd />
            </div>
          </div>

          <button className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-[#5D5FEF] to-[#6A73E9] text-sm font-medium text-white shadow-md hover:opacity-90 transition">
            Add sample image
          </button>
        </div>

        
        <div className="w-1/2 p-10">
          <form className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-white">Request Commission</h2>
            <p className="text-gray-400 text-sm">
              Post a commission request for an artist to create an artwork for you.
            </p>

            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service Name
              </label>
              <input
                type="text"
                placeholder="Service Name"
                className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                placeholder="Description (provide as many details for your service)"
                className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500">
              </textarea>
            </div>

            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Art Type
                </label>
                <select
                  className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white outline-none focus:border-blue-500">
                  <option>Category</option>
                  <option>Digital</option>
                  <option>Traditional</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Deadline
                </label>
                <select
                  className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg p-3 text-white outline-none focus:border-blue-500">
                  <option>Work Hours</option>
                  <option>One Week</option>
                  <option>Three Weeks</option>
                  <option>One Month</option>
                </select>
              </div>
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page