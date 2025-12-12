interface DetailsProps {
  formData: any;
  setFormData: any;
  tags: string[];
  inputValue: string;
  setInputValue: (v: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  removeTag: (tag: string) => void;
  handleChange: any;
  submit: () => void;
  goBack: () => void;
}

const Details = ({
  formData,
  tags,
  inputValue,
  setInputValue,
  handleKeyDown,
  removeTag,
  handleChange,
  submit,
  goBack,
}: DetailsProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className=" bg-secondary rounded-md flex justify-between mx-auto p-6 gap-5 text-base"
    >
      {/* LEFT FORM */}
      <div className="flex flex-col gap-6 w-[70%]">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-md font-semibold">
            Title of your arts
          </label>
          <input
            name="title"
            value={formData.title}
            required
            onChange={handleChange}
            className="border border-primary-line rounded-sm w-full p-3 bg-secondary"
            type="text"
            id="title"
            placeholder="ex: Illustrations"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-md font-semibold">
            Description
          </label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="border border-primary-line rounded-sm w-full p-3 bg-secondary h-32"
            id="description"
            placeholder="Your assets description"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="artType" className="text-md font-semibold">
              Art Type
            </label>
            <select
              value={formData.artType}
              onChange={handleChange}
              id="artType"
              name="artType"
              required
              className="border border-primary-line rounded-sm w-full p-3 bg-secondary"
            >
              <option value="Digital Art">Digital Arts</option>
              <option value="Physical Art">Physical Arts</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-md font-semibold">
              Deadline
            </label>
            <input
              name="date"
              id="date"
              onChange={handleChange}
              required
              className="border border-primary-line rounded-sm w-full p-3 bg-secondary"
              type="date"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tags" className="text-md font-semibold">
            Tags
          </label>
          <div className="flex gap-2 flex-wrap bg-secondary border border-primary-line rounded-sm p-2">
            {tags.map((item) => (
              <div
                key={item}
                className="px-3 py-1 bg-green-700 rounded text-sm group"
              >
                <span className="">{item}</span>
                <button
                  onClick={() => removeTag(item)}
                  className="opacity-0 group-hover:opacity-100 transition cursor-pointer ml-1 text-white"
                >
                  X
                </button>
              </div>
            ))}

            <input
              name="tags"
              className="bg-secondary outline-none flex-1"
              placeholder="Add tags"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </div>
        </div>

        <div className="flex justify-between ">
          <button 
            type="button"
            onClick={goBack}
            className="text-sm p-2 border rounded-sm w-32 hover:opacity-80 transition cursor-pointer">
            Cancel
          </button>

          <button
            type="submit"
            className="text-sm cursor-pointer hover:opacity-80 transition p-2 font-semibold border rounded-sm w-32 bg-white text-black"
          >
            Review
          </button>
        </div>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="flex flex-col items-center w-[30%] gap-3 justify-start">
        {/* Main image */}
        <img
          src="https://www.bing.com/th/id/OIP.V37pvUKTsUc4tWkJ1eyh7gHaHW?w=199&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          className="rounded-md w-full aspect-square object-cover"
          alt="preview"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 w-[70%] mr-auto">
          <img
            src="https://www.bing.com/th/id/OIP.V37pvUKTsUc4tWkJ1eyh7gHaHW?w=199&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            className="rounded-md w-[50%] aspect-square object-cover"
            alt="thumb1"
          />
          <img
            src="https://www.bing.com/th/id/OIP.V37pvUKTsUc4tWkJ1eyh7gHaHW?w=199&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            className="rounded-md w-1/2 aspect-square object-cover"
            alt="thumb2"
          />
        </div>
      </div>
    </form>
  );
};

export default Details;
