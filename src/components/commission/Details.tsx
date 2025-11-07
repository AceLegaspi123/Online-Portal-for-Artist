import React from "react";
import Image from "next/image";
const Details = () => {
  return (
    <div className="border border-primary-line flex  bg-primary rounded-md w-[50em] mx-auto p-10  gap-5 mt-10 mb-10 text-base">
      <div className="flex flex-col gap-4 w-[70%]">
        <div className="flex flex-col  gap-2 ">
          <label htmlFor="title" className="text-md font-semibold">Title of your Arts</label>
          <input
           className="border-1 border-primary-line rounded-sm w-full p-2 py-3 bg-secondary "
            type="text"
            id="title"
            name="title"
            placeholder="Ex:Illustrations"
          />
        </div>

        <div className="flex flex-col  gap-2 ">
          <label htmlFor="description" className="text-md font-semibold">Description</label>
          <textarea
            className="border-1 border-primary-line rounded-sm w-full p-2 py-3 bg-secondary "
            id="description"
            name="description"
            placeholder="Your assets description"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 justify-between">
          <div className="flex flex-col  gap-2 ">
            <label htmlFor="art-type" className="text-md font-semibold">Art Type</label>
            <select
              className="border-1 border-primary-line rounded-sm w-full p-2 py-3 bg-secondary "
              id="art-type"
              name="art-type"
            >
              <option value="Type">Type</option>
              <option value="Digital">Digital</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>

          <div>
            <label className="text-md font-semibold">Deadline</label>
            <input className="border-1 border-primary-line rounded-sm w-full p-2 py-3 bg-secondary" type="date" />
          </div>
        </div>

        
        <div className="flex flex-col gap-2 ">
          <label htmlFor="tags" className="text-md font-semibold">Tags</label>
          <input
            className="border-1 border-primary-line rounded-sm w-full p-2 py-3 bg-secondary "
            type="text"
            id="tags"
            name="tags"
            placeholder="Add another"
          />
        </div>

        <div className="flex justify-between">
          <button className="text-sm p-2 font-[#THICCCBOI] border w-35 mt-10 rounded-sm">
            {" "}
            Cancel
          </button>
          <button className="text-sm p-2 font-bold border w-35 mt-10 rounded-sm bg-white text-black ">
            {" "}
            Next Step
          </button>
        </div>
      </div>

      <div className="flex gap-2 w-[30%] ">
        <img
          src="https://www.bing.com/th/id/OIP.V37pvUKTsUc4tWkJ1eyh7gHaHW?w=199&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt=""
          width={200}
          height={200}
          className="h-50 w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Details;
