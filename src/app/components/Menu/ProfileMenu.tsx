'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {LOGGED_IN_USER_ID} from "@/lib/auth";
import UserProfile from "@/data/user_profile.json";
import credentials from "@/data/credentials.json";

interface ProfileMenuProps {
  children?: React.ReactNode;
  handleMenu: Function;
  handleLogOut:Function;
}

const ProfileMenu = ({children, handleLogOut, handleMenu } : ProfileMenuProps) => {
  const owner = UserProfile.find(user => user.id === LOGGED_IN_USER_ID);
  const credential = credentials.find(cred => cred.account_id === owner?.account_id);
  console.log(credential);

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col bg-primary rounded-lg border-primary-line border-1 w-[350px] py-5  text-white items-center">
        <div className="flex items-center justify-center">
          <div className="p-[5px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 overflow-hidden">
            <Link 
              href={`/profile/${owner?.id}`}
              onClick={() => handleMenu()}
            >
              <Image
                width={80}
                height={80}
                src="https://i.pinimg.com/1200x/95/cf/0b/95cf0b0894ac9afdb1ebc3c486a2b0ca.jpg"
                alt="user profile"
                className="w-25 h-25 rounded-full bg-primary object-cover"
              />
            </Link>
          </div>
        </div>

        <div className="text-center pb-6 p-3 gap-2 flex flex-col">
          <h1 className="text-3xl font-bold">{`${owner?.first_name} ${owner?.last_name}`}</h1>
          <p className="text-sm text-gray-300">
            {credential?.gmail}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full border-t border-primary-line pt-2 px-2 text-base">
          <div className="flex justify-between items-center py-2 px-4 hover:bg-secondary transition ease-in-out duration-200 cursor-pointer rounded-sm">
            <span className="font-semibold">Theme</span>
            <div className="flex justify-end text-right gap-3">
              <button className="w-8 h-8 rounded-full bg-black border border-[#6D449F] flex items-center justify-center">
                🌙
              </button>
              <button className="w-8 h-8 rounded-full opacity-50 border border-gray-400 flex items-center justify-center">
                ☀️
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center py-2 px-4 hover:bg-secondary transition ease-in-out duration-200 cursor-pointer rounded-sm">
            <span className="font-semibold">Browsing Mode</span>
            <span className="text-gray-400">Standard</span>
          </div>

          <div 
            className="py-3 px-4 hover:bg-secondary transition ease-in-out duration-200 cursor-pointer rounded-sm"
            onClick={() => handleLogOut()}  
          >
            <span className="font-semibold h-2 ">Log Out</span>
          </div>
        </div>

        <hr className="border-primary-line absolute top-[22.4em] w-full "/>
        <hr className="border-primary-line absolute top-[18.4em] w-full "/>
      </div>
    </div>
  );
};

export default ProfileMenu;
