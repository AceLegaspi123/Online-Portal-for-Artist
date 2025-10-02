import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className=''>
      <div className='h-[23rem] w-full -mt-10 relative background-cover'  style={{backgroundImage: `url(profile-background.png)`}}>
        <div className='flex gap-4 pt-40 items-center px-10'>
            <div className='h-32 w-32 bg-[#1c1c1c] rounded-full'></div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-3xl font-bold'>ChristianJay69</h3>
                <p>Christian Jay Escasa</p>
                <div>
                    <ul className='flex gap-4'>
                        <li>1.8m followers</li>
                        <li>59 following</li>
                        <li>102 profile views</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='bg-[#161A1F] h-20 w-full mt-4 px-10 pl-4'>
            <ul className='flex gap-12 items-center  h-full'>
                <li><Link href="/profile">Home</Link></li>
                <li><Link href="/profile/gallery">Gallery</Link></li>
                <li><Link href="/profile/posts">Posts</Link></li>
                <li><Link href="/profile/favorites">Favorites</Link></li>
                <li><Link href="/profile/shop">Shop</Link></li>
                <li><Link href="/profile/about">About</Link></li>
                <li><Link href="/profile/stats">Stats</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
