'use client';

import Logo from "../ui/Logo";
import Link from 'next/link';
import { CgMail } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import Image from 'next/image';
import { useState } from "react";
import clsx from 'clsx';
import ProfileMenu from '../Menu/ProfileMenu';
import { FaHome } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import LogoLight from "@/app/logo-light.png"
import LogoDark from "@/app/logo-dark.png"
import { IoIosArrowDown } from "react-icons/io";

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
    <header className="z-30 bg-background border-b-1 sticky top-0 h-17 left-0 w-full border-b-primary-line flex justify-between items-center mb-10 px-5 md:px-10 lg:px-20">
      <div className="flex gap-8 items-center">
          <Image
            height={100}
            width={100}
            alt="logo"
            className="h-12 w-full object-contain"
            src={LogoDark}
          />
      </div>


      <div className="flex gap-4">
        <Link href="/">
              <div className='flex items-center gap-4 px-8'>
                  <FaHome />
                  <p>Home</p>
              </div>
        </Link>

        <Link href="/explore">
              <div className='flex items-center gap-4 px-8'>
                  <GoGlobe />
                  <p>Explore</p>
              </div>
        </Link>

        <Link href="/shop">
              <div className='flex items-center gap-4 px-8'>
                  <FaShoppingBag />
                  <p>Shop</p>
              </div>
        </Link>

          <div className='relative flex items-center gap-4 px-8 group'>
              <FaRegUser />
              <p>Commission</p>
              <IoIosArrowDown />

              <div className="absolute top-5 left-0 w-50 rounded-md  transition-all hidden duration-400 ease-in-out group-hover:block group-hover:opacity-100">
                <div className=" bg-primary border-1 border-primary-line p-2 mt-4 rounded-md flex flex-col">
                  <Link href="/my-client" className="hover:text-green-500 hover:font-semibold cursor-pointer rounded-md opacity-80 hover:opacity-100 hover:block transition-all ease-in-out duration-200  p-2">
                    My Client
                  </Link>
                  <Link href="/my-request" className="hover:text-green-500 hover:font-semibold rounded-md opacity-80 hover:opacity-100 hover:block  transition-all ease-in-out  duration-200 border-white p-2">
                    My Request
                  </Link>
                </div>
              </div>
            
          </div>
      </div>

      <div className="flex items-center gap-4">
        {
          isLogin &&  <Link href="/mail"><CgMail className="text-3xl"/></Link>
        }
       

        <div 
          onClick={() => handleProfileMenu()}
          className='cursor-pointer'>
            <Image
              width={40}
              height={40}
              src="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg"
              alt="Picture of the author"
              className={clsx('rounded-full w-11 h-11 ml-6 object-cover border-2 border-white', {
                "block" : isLogin,
                "hidden" : !isLogin
              })}
            />
        </div>

             {
              !isLogin && 
                <div className={clsx('text-right flex justify-end gap-10', {
                  
                })}>
                  <button className="cursor-pointer"><Link href="/register">Sign up</Link></button>
                  <button className="bg-gradient-primary cursor-pointer text-white px-10 py-2 rounded-full "><Link href="/login">Log in</Link></button>
                </div>
             }   

        <div 
          className={clsx('absolute top-20 right-10 z-40', {
          "block" : isActive,
          "hidden" : !isActive 
        })}>
          <ProfileMenu handleLogOut={handleLogOut} handleMenu={handleProfileMenu}/>
        </div>
      </div>
    </header>
  )
}
