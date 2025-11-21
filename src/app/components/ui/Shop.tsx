import { MdKeyboardArrowDown } from "react-icons/md";
import ProfileIcon from "./ProfileIcon";
import { ArtList } from "@/types/User"


const Shop = ({artDetails}: {artDetails: ArtList}) => {
  return (
    <section className='flex bg-primary w-full p-8 rounded-md border-2 border-primary-line gap-4'>
        <div className='w-14 h-14'>
            <img src={artDetails?.avatar} alt={artDetails?.alt} className="border-1 border-primary-line h-full w-full object-cover mx-auto rounded-full"/>
        </div>

        <div className='flex flex-col gap-6 w-full '>
            <div>
                <h4>{artDetails.user}</h4>
                <p className="opacity-70">39 followers</p>
            </div>

            
            <ul className='flex gap-4'>
                <li className='py-2 px-4 border-1 border-primary-line'>Digital Art</li>
                <li className='py-2 px-4 border-1 border-primary-line'>Pixel Art</li>
                <li className='py-2 px-4 border-1 border-primary-line'>Fantasy</li>
                <li className='py-2 px-4 border-1 border-primary-line'>Anime</li>
            </ul>

            <div className="flex justify-between">
                 <h5>Shop List</h5>
                 <div className="flex items-center">
                    <p> See all</p>
                    <MdKeyboardArrowDown />
                 </div>
            </div>
            
            <ul className="grid grid-cols-6 w-full gap-4">
                <li className="border-1 border-primary-line h-40 bg-primary rounded-md overflow-hidden">
                    <img src="" alt="" />
                </li>

                <li className="border-1 border-primary-line h-40 bg-primary  rounded-md overflow-hidden">
                    <img src="" alt="" />
                </li>

                <li className="border-1 border-primary-line h-40 bg-primary  rounded-md overflow-hidden">
                    <img src="" alt="" />
                </li>

                <li className="border-1 border-primary-line h-40 bg-primary  rounded-md overflow-hidden">
                    <img src="" alt="" />
                </li>

                <li className="border-1 border-primary-line h-40 bg-primary  rounded-md overflow-hidden">
                    <img src="" alt="" />
                </li>

                <li className="border-1 border-primary-line h-40 bg-primary  rounded-md overflow-hidden">
                    <img src="" alt="" />
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Shop
