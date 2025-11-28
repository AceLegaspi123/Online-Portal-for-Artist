'use client';

import logo from "@/app/logo-dark.png"
import Image from 'next/image';
import { useState } from "react";
import clsx from 'clsx';
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [isActive, setIsActive] = useState(false)

  const handleProfileMenu = () => {
    setIsActive((prev) => !prev);
  };

  const handleLogOut = () => {
    setIsLogin(false);
    setIsActive(false);
  }

  console.log(isLogin);
  return (
    <header className="z-0 bg-primary border-b-1 sticky top-0 h-17 left-0 w-full border-b-primary-line flex justify-between items-center mb-10 md:px-10 lg:px-10">
      <div>
      </div>
      <div className="flex items-center gap-4">


        <IoNotifications className="text-2xl"/>
        <div className="p-2 border-1 border-primary-line rounded-full hover:bg-white hover:text-black cursor-pointer hover:opacity-80">
            <MdOutlineLightMode />
        </div>
                 
        <div 
          onClick={() => handleProfileMenu()}
          className='cursor-pointer flex items-center gap-4'>
            <Image
              width={50}
              height={50}
              src="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg"
              alt="Picture of the author"
              className={clsx('rounded-full w-11 h-11 ml-6 object-cover', {
                "block" : isLogin,
                "hidden" : !isLogin
              })}
            />
            <p>Admin</p>
        </div>

      </div>
    </header>
  )
}
