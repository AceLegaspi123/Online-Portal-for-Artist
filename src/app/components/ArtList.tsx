import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";

export default function ArtList(){
    return(
        <div className="w-full">
            <div className="h-72 mb-4">
                <img src="https://i.pinimg.com/736x/03/fc/a1/03fca128c37771e015804df115361e98.jpg" alt="" className="h-full w-full object-cover"/>
            </div>

            <div className="flex justify-between w-full mt-2">
                <div className="flex gap-2 items-center">
                    <img className="w-10 h-10 object-cover rounded-full" src="https://community.wacom.com/en-us/wp-content/uploads/sites/40/2023/07/Sam-Does-Art-headshot.jpg" alt="" />
                    <p>SamDoesArt</p>
                </div>

                <div className="flex gap-4 opacity-50">
                    <div className="flex gap-2 items-center">
                        <FaHeart />
                        <p>221</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <MdOutlineComment />
                        <p>20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
