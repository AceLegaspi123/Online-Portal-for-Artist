import ProfileIcon from "@/app/components/ui/ProfileIcon";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { TiHeartOutline } from "react-icons/ti";

const PostPage = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center ">
        <div className="flex gap-10 text-left w-full  w-[800px] mb-2 max-w-screen-xl mx-auto translate-x-[13.4em]">
          <p>All Post 3 </p>
          <div className="flex gap-2">
            <p> Newest </p>
          <IoIosArrowDown />
          </div>
        </div>
        
        <div className="w-[800px] mx-auto">
            <div className="border-1 border-primary-line  items-center p-4 flex justify-center bg-[#161A1F] rounded-md ">
              < ProfileIcon/> 
              
              <input type="text" placeholder="What's on your mind, ChristianJay69?" className="border-1 border-primary-line rounded-md bg-[#21272B] w-[90%] py-4 ml-4 px-4" />

            </div> <br />
            
            <div className="border border-primary-line  h-[630px] bg-primary mx-auto p-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 ">
                    < ProfileIcon/> 
                    <div>
                      <h3>ChristianJay69</h3>
                      <p className="text-sm opacity-50">3 days ago</p>
                    </div>
                  </div>

                  <div className="-translate-y-6 hover:opacity-50 cursor-pointer">...</div>
                </div>

                <h3 className="mt-2 mb-2">
                  My Art
                </h3>

                <div className="w-full h-[450px] bg-secondary">
                    <img 
                      src="https://i.redd.it/d99rilognvia1.png" 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                </div>
                  <div className="flex gap-8 items-center mt-3">
                    <div className="flex gap-2 items-center">
                      <TiHeartOutline />
                      <p>10</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <AiOutlineMessage />
                      <p>Comments</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-300">
              </div>
            </div>
        </div>
      </div> 
    </div>
  );
};

export default PostPage;