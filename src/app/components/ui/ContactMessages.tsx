import React from 'react'
import Image from 'next/image'

const ContactMessages = () => {
  return (
    <div className='flex items-center gap-4 p-2 cursor-pointer hover:bg-secondary rounded-lg'>
      <div className='h-12 w-12 shrink-0'>
        <Image 
          height={80}
          width={80}
          className='rounded-full object-cover '
          alt='avatar'
          src={`https://i.pinimg.com/1200x/c3/b6/38/c3b6386e123e068bf5fde356960f105e.jpg`}
        />
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <div className='flex justify-between '>
            <p className='font-semibold'>Jeaven A. Paras</p> 
            <span className='text-sm opacity-50'>04:18pm</span>
        </div>
        <p className='text-sm -mt-1 opacity-70'>How much this cost?</p>
      </div>
    </div>
  )
}

export default ContactMessages