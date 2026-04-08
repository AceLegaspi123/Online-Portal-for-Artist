import React from 'react'
import Image from 'next/image'

const ContactMessages = () => {
  return (
    <div className='flex items-center gap-4 p-4 cursor-pointer hover:bg-white/[0.03] border border-transparent hover:border-white/5 rounded-[2rem] transition-all group'>
      {/* Avatar Container with Status Dot */}
      <div className='relative h-14 w-14 shrink-0'>
        <Image 
          height={100}
          width={100}
          className='rounded-2xl object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500'
          alt='avatar'
          src={`https://i.pinimg.com/1200x/c3/b6/38/c3b6386e123e068bf5fde356960f105e.jpg`}
        />
        {/* Status indicator */}
        <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-[#0a0a0a] rounded-full' />
      </div>

      <div className='flex flex-col gap-1 w-full overflow-hidden'>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-sm uppercase tracking-tight text-white'>Jeaven A. Paras</p> 
            <span className='text-[10px] font-mono opacity-40 uppercase'>04:18 PM</span>
        </div>
        <div className='flex justify-between items-center'>
            <p className='text-xs opacity-60 truncate pr-4 font-medium'>How much does this cost?</p>
            {/* Unread dot */}
            <div className='w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]' />
        </div>
      </div>
    </div>
  )
}

export default ContactMessages