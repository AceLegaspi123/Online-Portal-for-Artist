
import ProfileLayout from "@/app/components/ProfileLayout";
import ProfileIcon from "@/app/components/ProfileIcon";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { TiHeartOutline } from "react-icons/ti";

const PostPage = () => {
  return (
    <ProfileLayout>
      <div className="flex gap-10 text-left w-full  max-w-screen-2xl mb-2  mx-auto  ">
        <p >All Post 3 </p>
        <div className="flex gap-2">
          <p> Newest </p>
        <IoIosArrowDown />
        </div>
      </div>
      
       <div>
           <div className="border items-center p-4 border-gray-200 flex justify-center bg-[#161A1F] max-w-screen-xl mx-auto rounded-md ">
            < ProfileIcon/> 
            <div className="border border-r-gray-300 rounded-md bg-[#21272B]  w-500 p-10 m-10 ">
               What’s on your mind, ChristianJay69?
            </div>
           </div> <br />
           
           <div className="border border-primary-line  h-[720px] bg-primary mx-auto  max-w-screen-xl p-4 ">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 ">
                  < ProfileIcon/> 
                   <div>
                    <h3>ChristianJay69</h3>
                    <p className="text-sm opacity-50">3 days ago</p>
                   </div>
                </div>

                <div>...</div>
              </div>
              <h3>my arts</h3>
              <div className="w-full h-[400px] bg-secondary">
                  
                </div>
                <div className="flex gap-8 items-center">
                  <div className="flex gap-2 items-center">
                    <AiOutlineMessage />
                    <p>Reply</p>
                  </div>
                  
                  <div className="flex gap-2 items-center">
                    <TiHeartOutline />
                    <p>10</p>
                  </div>
                </div>

                   <hr className="border-t border-gray-600  my-4 gap-1 " />
                 <div className="flex gap-4 text-sm text-gray-300">
                <div className="border border-r-gray-300 rounded-md bg-[#21272B] w-400 p-5 m-10">
                  Add a new comment...
                </div>

              </div>
              <div></div>
           </div>
          
       </div>
    </ProfileLayout>
  );
};

export default PostPage;