import React from 'react'

const FeauturedPagination = () => {
  return (
    <div className='w-fit m-auto mt-4'>
        <ul className='flex gap-8'>
            <li className='bg-white h-4 w-4 rounded-full'></li>
            <li className='bg-white h-4 w-4 rounded-full'></li>
            <li className='bg-blue-500 h-4 w-20 rounded-full'></li>
            <li className='bg-white h-4 w-4 rounded-full'></li>
            <li className='bg-white h-4 w-4 rounded-full'></li>
            <li className='bg-white h-4 w-4 rounded-full'></li>
        </ul>
    </div>
  )
}

export default FeauturedPagination
