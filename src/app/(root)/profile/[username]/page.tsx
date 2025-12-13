import { TfiGallery } from "react-icons/tfi";
import { HiOutlineCake } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { SlActionRedo } from "react-icons/sl";
import { RiBallPenLine } from "react-icons/ri";
import userProfile from "@/data/user_profile.json"

const page = async({params}: {params: {userId: string}}) => {
  // const user = await userProfile(params.userId)
  return (
    <div className="flex">
     <div>
      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
        <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2 "/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Shop
        </h4>
        <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2"/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

      <div className='p-10'>
        <h4>
          Featured Gallery
        </h4>
         <div className='opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out cursor-pointer flex flex-col justify-center items-center gap-5 bg-primary rounded-sm w-170 h-[400px] mt-5 text-center py-10'>
         <TfiGallery  className="text-9xl h-1/2"/>

          <div  className='h-1/2 flex flex-col gap-4 justify-center w-full '>
             <h4 className='font-bold '>Show your Artwork</h4>
              <p className='text-sm opacity-50'>Submit your art to your gallery for featuring and display.</p>
            <button className='bg-gradient-primary  rounded-md p-1 w-40 mx-auto'>Submit Now</button>
          </div>
           
        </div>
      </div>

    </div>
      <div><h2>About ChristianJay69</h2>
        <div className="bg-primary h-135 w-130 mt-14 rounded-sm "> 
          <div className="flex gap-2 m-2 p-5">
            <HiOutlineCake className=" h-10 w-10" />
            <div><h2>Birthday: MM/DD/YYYY</h2></div>
          </div>
          <div className="flex align-middle gap-2 m-2 p-5">
            <CiLocationOn className="h-10 w-10"/>
            <div><h2>Location: Philippines</h2></div>
          </div>
          <div className="flex gap-2 m-2 p-5">
            <CgProfile className="h-10 w-10"/>
            <div><h2>Joined : 5months ago</h2></div>
          </div>
          <div className="flex gap-2 m-2 p-5" >
            <SlActionRedo className="h-10 w-10"/>
            <div><h2>Pronoun: He/Him</h2></div>
          </div>
          <div className="flex gap-2 m-2 p-5">
            <RiBallPenLine className="h-10 w-10"/>
            <div><h2>Bio: I’m a digital artist who creates vibrant <br /> character illustrations inspired by fantasy. I <br /> love bringing ideas to life through bold <br /> colors and dynamic designs.</h2></div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="bg-primary h-135 w-130 mt-14 rounded-sm ">
                <div className="flex"><img src="https://www.imdb.com/name/nm0246703/mediaviewer/rm2328975361/?ref_=nm_ph_2" alt="" /></div>
                <div className="">Add a new comment...</div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default page
