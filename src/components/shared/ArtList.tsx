import { FaHeart } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";

export default function ArtList({children, imgSrc}: {children?: React.ReactNode, imgSrc?: string}) {
    return(
        <div className="w-full overflow-hidden">
            <div className="h-72 mb-4 bg-primary ">
                <img src={imgSrc} alt="" className="h-full w-full object-cover  rounded-md"/>
            </div>

            <div className="flex justify-between w-full mt-2">
                <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 object-cover rounded-full bg-primary">
                        {/* <img src="https://community.wacom.com/en-us/wp-content/uploads/sites/40/2023/07/Sam-Does-Art-headshot.jpg" alt="" /> */}
                    </div>
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
