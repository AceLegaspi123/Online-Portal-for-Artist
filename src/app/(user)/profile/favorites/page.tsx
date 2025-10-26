import { RiImageLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

const Favorites = () => {
  return (
    <div>
      <div>
        <div className="mb-2 -mt-6">
            <h2>Collections</h2>
          </div>
        <div className="flex gap-5">
          <div className="border w-96 h-64 p-4 bg-[#FFFFFF33] border-[#3896E0]">
            <div className="bg-blue-500 w-full h-48 mb-2"></div>
            <div className="flex justify-between items-center">
              <p>All</p>
              <div className="flex gap-3 items-center">
                <RiImageLine className="translate-y-[1px]"/>
                <p>5 arts</p>
                </div> 
            </div>
          </div>

          <div className="flex border w-96 h-64 p-4 items-center justify-center bg-[#FFFFFF33]">
             <p>+ New Collection</p>
          </div>
        </div> <br />

        <div>
          <div className="flex gap-4 mb-2 text-lg">
            <h5>All 5</h5>
            <RiArrowDownSLine />
          </div>
          <div className="flex gap-5">
            <div className="border w-96 h-64 p-4 bg-[#FFFFFF33]"></div>
            <div className="border w-96 h-64 p-4 bg-[#FFFFFF33]"></div>
            <div className="border w-96 h-64 p-4 bg-[#FFFFFF33]"></div>
            <div className="border w-96 h-64 p-4 bg-[#FFFFFF33]"></div>
            <div className="border w-96 h-64 p-4 bg-[#FFFFFF33]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;