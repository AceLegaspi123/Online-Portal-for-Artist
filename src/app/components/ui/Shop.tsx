import { MdKeyboardArrowDown } from "react-icons/md";
import { artList } from "@/types/User"
import Link from "next/link";

const Shop = ({artDetails}: {artDetails: artList}) => {
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
                <li className="border-1 border-primary-line h-40 bg-sec rounded-md overflow-hidden">
                    <Link href={`/shop/${artDetails.id}`}>
                         <img src={artDetails.src} alt="artwork-shop" className="object-cover h-full w-full"/>
                    </Link>
                </li>

                <li className="border-1 border-primary-line h-40 bg-secondary  rounded-md overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPFB5QGKP_Gy0k3jvqIpKc4Haxo9cUDJNsQ&s" alt="artwork-shop"  className="object-cover h-full w-full"/>
                </li>

                <li className="border-1 border-primary-line h-40 bg-secondary  rounded-md overflow-hidden">
                    <img src="https://yt3.googleusercontent.com/-qd9QjWJTp3YKZBUjRyiykkK03L2yoR2aeyLh7MqdTUI45cPmUZGDMJm3BC149wJHyANMWB-Ow=s900-c-k-c0x00ffffff-no-rj" alt="artwork-shop"  className="object-cover h-full w-full"/>
                </li>

                <li className="border-1 border-primary-line h-40 bg-secondary  rounded-md overflow-hidden">
                    <img src="https://cdna.artstation.com/p/assets/images/images/039/979/574/smaller_square/sam-yang-asset.jpg?1627495036" alt="artwork-shop"  className="object-cover h-full w-full"/>
                </li>

                <li className="border-1 border-primary-line h-40 bg-secondary  rounded-md overflow-hidden">
                    <img src="https://dthezntil550i.cloudfront.net/gk/latest/gk2205051735523540013637309/7a8f526d-0f6d-4cf2-a4b6-f82a75bd51a6.png" alt="artwork-shop" className="object-cover h-full w-full" />
                </li>

                <li className="border-1 border-primary-line h-40 bg-secondary  rounded-md overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7-Krd9LBR3u7c0EKVGHjOemQ0lTBh_xnsA&s" alt="artwork-shop"  className="object-cover h-full w-full"/>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Shop
