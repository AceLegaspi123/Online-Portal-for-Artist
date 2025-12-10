import Image from "next/image";
import {artList} from "@/types/User"
import { FaRegHeart } from "react-icons/fa";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";

export default function ArtList({ art }: { art: artList }) {
  return (
    <div className="mb-4 w-full break-inside-avoid relative">
      <div className="art-item-wrapper rounded-md overflow-hidden relative group ">
        {art.src && (
          <Image
            src={art.src}
            alt={art.alt || "Artwork"}
            width={400}
            height={400}
            className="artlist-card w-full h-auto rounded-md transition-transform duration-700 group-hover:scale-105"
          />
        )}

        <div className="artlist-description absolute bottom-0 left-0  text-white p-2 text-sm w-full">
          <h6 className="font-semibold text-md mb-2">{art.alt || "Abstract Dreams"}</h6>
          <div className="flex items-center gap-2 mb-2">
            <Image
              width={150}
              height={150}
              src={art.avatar}
              alt={art.avatar}
              className="h-6 w-6 object-cover rounded-full"
            />

            <p className="text-xs ">{art.user}</p>
          </div>

        <section className="flex justify-between text-xs">
          <section className="flex items-center gap-4 opacity-60">
            <div className="flex items-center gap-2">
              <FaRegHeart />
              <p>321</p> 
            </div>

            <div className="flex items-center gap-2">
              <LiaCommentDotsSolid />
              <p>321</p> 
            </div>
          </section>



          <div className="flex items-center gap-2 bg-orange-600 w-fit px-2 rounded-full py-1 text-xs">
              <IoCartOutline />
              <p>321</p> 
          </div>
        </section>
      </div>

      <div className="absolute top-2 right-2">
        <p className="bg-orange-500 py-1 px-2 rounded-full text-xs text-black">
          For sale
        </p>
      </div>
    </div>
    </div>
  );
}