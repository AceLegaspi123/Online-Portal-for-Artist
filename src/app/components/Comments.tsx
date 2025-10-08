import React from 'react'
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import ProfileIcon from './ProfileIcon';

const Comments = () => {
  return (
    <div className='flex gap-4'>
        <ProfileIcon />

        <div className='flex flex-col gap-2 w-[90%]'>
            <div className='bg-primary border-2 border-primary-line p-4 rounded-md'>
                <h4 className='font-bold'>Username <span className='font-light opacity-50 ml-2'>5 days ago</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti magni vero reiciendis, eveniet minima cum perspiciatis, nemo culpa dolor perferendis accusantium consequatur doloribus quos a inventore molestiae, omnis pariatur.</p>
            </div>

            <div className='flex items-center gap-4 ml-4'>
                <div className='flex items-center gap-2'>
                   <FaRegCommentAlt />
                   <p>Reply</p>
                </div>

                <div className='flex items-center gap-2'>
                    <FaRegHeart />
                    <p>10</p>
                </div>
            </div>
        </div>  

    </div>
  )
}

export default Comments
