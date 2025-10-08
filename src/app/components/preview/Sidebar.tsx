import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CardFeatured } from "./CardFeatured";

export function Sidebar(){
    return(
        <div>
            <div className="flex justify-between items-center">
                <h3>More arts by <Link href="#" className="font-bold">SamDoesArt</Link></h3>
                <IoIosArrowForward />
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
            </div>


             <div className="flex justify-between items-center mt-20 mb-4">
                <h3>More arts by <Link href="#" className="font-bold">SamDoesArt</Link></h3>
                <IoIosArrowForward />
            </div>

            <div className="grid grid-cols-2 gap-2 ">
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
              <CardFeatured />
            </div>
      
        </div>
    )
}