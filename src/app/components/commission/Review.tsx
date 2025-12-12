import ProfileIcon from "../ui/ProfileIcon";

interface Props {
    formData: any;
    images: { file: File; url: string }[];
    goBack: () => void;
}


const Review = ({
    formData,
    images,
    goBack
}: Props) => {

const commissionInFo = [
    {
      name: "Category",
      info: formData.tags,
    },
    { name: "Art Type:", info: formData.artType},
    { name: "Deadline", info: formData.deadline },
    { name: "Budget", info: "$120" },
  ];
  return (
    <div className="max-w-[55em] w-full mx-auto bg-secondary p-4 rounded-md border-primary-line border-1 flex flex-col gap-4">
      <div className="flex gap-4">
        <ProfileIcon />
        <div className="w-full">
          <div className="flex justify-between items-center ">
            <h5 className="font-semibold text-md">
              {" "}
              <span className="opacity-50 text-xs ml-auto">
                jeavenanda07@gmail.com
              </span>
            </h5>
            <p className="opacity-50 text-xs ">24 Sept 2025, 02:47</p>
          </div>

          <p className="opacity-50 text-xs">to ChristianJay69</p>
        </div>
      </div>

      <hr className="border-primary-line" />

      <div className="flex justify-between gap-10">
        {/* PHOTO REFERENCE */}
        <div className="w-[40%] flex flex-col gap-4">
          <h5 className="font-semibold text-lg">
            Photo Reference <span className="text-xs opacity-50">(3)</span>
          </h5>
          <div className="border-1 w-full h-60 bg-secondary overflow-hidden border-primary-line rounded-md">
            <img
              src="/"
              alt="image-reference"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-1 h-25 w-25 bg-secondary border-primary-line rounded-md overflow-hidden"
              >
                <img
                  src="/"
                  alt="image-reference"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DETAULS */}
        <div className="flex-1 flex flex-col gap-4 mt-7">
          <h3 className="text-3xl font-semibold">{formData?.title}</h3>
          <p className="font-light">
            {formData?.description}
          </p>

          <ul>
            {commissionInFo.map((i) => (
              <li key={i.name} className="font-semibold flex mt-4">
                <p className="font-semibold mr-5">{i.name}</p>
                {i.name == "Category" ? (
                  (i.info || []).map((category: string) => (
                    <div key={category} className="flex gap-4">
                      <p key={category} className="font-base">
                        {category}{" "}
                      </p>
                    </div>
                  ))
                ) : (
                  <span className="">{i.info}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-20 bg-primary z-20 border-t-2 border-primary-line py-4">
            <div className="max-w-[55em] w-full mx-auto flex justify-between items-center">
                <p>Please review your commission details</p>

                <div className="flex gap-4">
                    <button 
                        onClick={goBack}
                        type="button" 
                        className="border-white border-2 py-2 px-10 rounded-md cursor-pointer text-sm transition duration-300 ease-in-out hover:opacity-80 hover:scale-102">Go Back</button>
                    <button 
                        type="button" 
                        className="py-2 px-5 bg-white text-black rounded-md cursor-pointer text-sm transition duration-300 ease-in-out hover:opacity-80 hover:scale-102">Submit Commission</button>
                </div>
            </div>
    
      </div>
    </div>
  );
};

export default Review;
