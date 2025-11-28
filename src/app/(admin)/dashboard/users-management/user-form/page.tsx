import React from "react";

const f = () => {
  return (
    <div className="p-5 border rounded-md w-130 mx-auto bg-primary">
      <div>
        <form className="flex flex-col gap-2">
          <h2>Create new artwork to featured</h2>
          <div className="w-full">
            <label htmlFor="ArtworkID" className="mb-12">
              Enter the artwork ID
            </label>
            <input
              className="flex w-full p-2 bg-secondary"
              type="Enter the artwork ID"
              name="ArtworkID"
              required
              id="ArtworkID"
            />
          </div>

          <div className="w-full mb-5">
            <label htmlFor="FeaturedTitle" className="mb-12">
              Featured title (optional)
            </label>
            <input
              className="flex w-full p-2 bg-secondary"
              type="Featured title (optional)"
              name="FeaturedTitle"
              id="FeaturedTitle"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="FeaturedStartAt" className="mb-12">
                Featured start at
              </label>
              <input
                className="flex p-2 w-full opacity-50 bg-secondary"
                type="date"
                id="FeaturedStartAt"
              />
            </div>
            <div>
              <label htmlFor="FeaturedEndsAt" className="mb-12">
                Featured ends at
              </label>
              <input
                className="flex p-2 w-full opacity-50 bg-secondary"
                type="date"
                id="FeaturedEndsAt"
              />
            </div>
            <div className="w-full col-span-2">
              <label htmlFor="FeaturedTitle" className="mb-12">
                Featured title (optional)
              </label>
              <textarea
                className="flex w-full p-2 bg-secondary"
                name="FeaturedTitle"
                placeholder="Description"
                id="FeaturedTitle"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4 justify-end">
            <button className="flex p-2 w-25 rounded-md justify-center cursor-pointer">
              Cancel
            </button>
            <button className="flex p-2 w-25 rounded-md justify-center bg-white text-black cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default f;
