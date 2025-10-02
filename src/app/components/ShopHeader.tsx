import { BiSearch } from "react-icons/bi";

export default function ShopHeader(){
    return(
        <div className="h-72"  style={{backgroundImage: `url(profile-background.png)`}}>
            <div className="align-center text-center -mt-10 text-4xl p-20 font-bold">
                <h1>Explore and purchase artworks from your favorite creators</h1>
            </div>
            <div className="flex align-center text-center -mt-10 justify-center gap-0.5">
                <div className="relative w-[30em]">
                    <BiSearch className="absolute top-5 left-4"/>
                    <input type="text" placeholder="Search shop (e.g. “portrait”)" className="bg-opacity-20 bg-[#FFFFFF33] shadow-sm w-full rounded-tl-sm rounded-bl-sm outline-none p-4  w-1/3 text-left pl-12"/>
                </div>
                <button className="bg-gradient-to-r from-[#6D449F] via-[#417A9E] to-[#3896E0] rounded-tr-sm rounded-br-sm z-10  text-center -ml-2 px-8">Search</button>
            </div>
        </div>
    );
}