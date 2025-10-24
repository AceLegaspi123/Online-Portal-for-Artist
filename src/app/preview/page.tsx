import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import ArtTypeCard from '../components/ArtTypeCard';
import Comments from '../components/Comments';
import ProfileIcon from '../components/ProfileIcon';
import { Sidebar } from '../components/preview/Sidebar';
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ArtPreview = () => {
  return (
    <div className=' max-w-screen-2xl mx-auto md:flex gap-18'>
      <div className='md:w-[80%] relative'>
        <div className='w-full h-[700px] bg-primary flex items-center justify-center'>
            <img 
              src="https://images.hdqwalls.com/download/women-with-sword-hair-blowing-in-the-wind-mj-3840x2160.jpg"
              alt=""
              className='object-cover h-full rounded-sm'  
            />
        </div>

        <div className='flex flex-col gap-8 py-4'>
          <div className='flex justify-between items-center w-full'>
            <ul className='flex gap-8'>
              <li className='flex items-center gap-2'>
                <FaRegStar />
                <p>Add to favorite</p>
              </li>

              <li className='flex items-center gap-2'>
                <FaRegHeart />
                <p>10</p>
              </li>

              <li className='flex items-center gap-2'>
                <FaRegCommentAlt />
                <p>Comments</p>
              </li>
            </ul>

            <BsThreeDots />
          </div>
          
          <div className='flex flex-col gap-4'>
            <div>
                <h2>Arts title</h2>
                <p>A warm, glowing sunset sets the backdrop for a solitary car, evoking feelings of solitude and adventure</p>
            </div>


            <div className='flex items-center gap-4 w-full'>
              <ProfileIcon />

              <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center gap-4'>
                    <div>
                      <h3 className='font-bold'>Artist name</h3>
                      <p className='text-xs opacity-50 -mt-1'>128 followers</p>
                    </div>

                    <div className='h-1 w-1 rounded-full m-auto bg-white'></div>
                    <p className='text-blue-500'>Follow</p>
                  </div>

                  <p className='opacity-50 w-fit text-sm'>Upload 5 minutes ago</p>
                </div>
              </div>

            <div className='flex gap-4 my-4'>
                <ArtTypeCard />
                <ArtTypeCard />
                <ArtTypeCard />
            </div>

            <hr className='text-primary-line'/>
          </div>
        </div>


        <div className='my-4'>
          <div className='flex flex-col gap-8'>
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>

          <IoIosArrowForward className='absolute top-[9em] text-4xl -right-10 opacity-50 hover:opacity-100 transition ease-in-out duration-200 cursor-pointer'/>
          <MdKeyboardArrowLeft className='absolute top-[9em] text-4xl -left-10 opacity-50 hover:opacity-100 transition ease-in-out duration-200 cursor-pointer'/>
      </div>

      <div className='md:w-[20%]'>
        <Sidebar />
      </div>
    </div>
  )
}

export default ArtPreview
