"use client"



interface FeaturedArtFormProps {
  func: () => void; 
}

const FeaturedArtForm = ({func} : FeaturedArtFormProps) => {
  return (
    <div className="p-5 border-1 border-primary-line rounded-md w-150 mx-auto bg-primary z-20 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div>
        <form className="flex flex-col gap-8">
          <h4 className="text-2xl font-semibold mb-4">Create new artwork to featured</h4>
          
          <div className="w-full flex flex-col gap-4">
            <label htmlFor="ArtworkID">
              Enter the artwork ID
            </label>
            <input
              className="flex w-full p-4 bg-secondary"
              type="Enter the artwork ID"
              name="ArtworkID"
              required
              id="ArtworkID"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            <label htmlFor="FeaturedTitle">
              Featured title (optional)
            </label>
            <input
              className="flex w-full p-4 bg-secondary"
              type="Featured title (optional)"
              name="FeaturedTitle"
              id="FeaturedTitle"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="w-full flex flex-col gap-3">

              <label htmlFor="FeaturedStartAt">
                Featured start at
              </label>
              <input
                className="flex p-4 w-full opacity-50 bg-secondary"
                type="date"
                required
                id="FeaturedStartAt"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <label htmlFor="FeaturedEndsAt">
                Featured ends at
              </label>
              <input
                className="flex p-4 w-full opacity-50 bg-secondary"
                type="date"
                required
                id="FeaturedEndsAt"
              />
            </div>

            <div className="w-full col-span-2 flex flex-col gap-3 mt-4">
              <label htmlFor="FeaturedTitle">
                Featured title (optional)
              </label>
              <textarea
                className="flex w-full p-4 bg-secondary"
                name="FeaturedTitle"
                placeholder="Description"
                required
                id="FeaturedTitle"
              />
            </div>
          </div>
          <div className="flex gap-8 mt-4 justify-end">
            <button 
              onClick={func}
              type="button"
              className="px-12 py-3 rounded-md cursor-pointer">
              Cancel
            </button>

            <button 
              onClick={func}
              className=" px-12 py-3 rounded-md bg-white text-black cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeaturedArtForm;
