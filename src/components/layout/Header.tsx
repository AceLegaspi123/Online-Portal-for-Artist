'use client';
import { BsSearch } from 'react-icons/bs';
import Logo from "../ui/Logo";
import Link from 'next/link';
import { CgMail } from "react-icons/cg";
// import ProfileIcon from "./ProfileIcon";
// import CustomImage from "./CustomImage";
// import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";

export default function Header() {
  return (
    <header className="z-20 bg-background sticky top-0 h-20 left-0 w-full border-b-1 border-b-primary-line flex justify-between items-center mb-10 p-4 px-17">
      <div className="flex gap-8 items-center">
          <Logo/>
      </div>

{/*       
      <div className="w-[20%] text-right flex justify-end gap-10">
        <button className="cursor-pointer"><Link href="/register">Sign up</Link></button>
        <button className="bg-gradient-primary cursor-pointer text-white px-10 py-2 rounded-full "><Link href="/login">Log in</Link></button>
      </div> */}

      <div className="flex items-center gap-8">
        <Link href="shop">
              <div className='flex items-center gap-4 px-8'>
                  <FaShoppingBag />
                  <p>Shop</p>
              </div>
        </Link>

        <CgMail className="text-3xl"/>

        <div>
          <img
            src="https://wallpapercave.com/wp/wp11874767.jpg"
            alt="Picture of the author"
            className="rounded-full w-12 h-12 ml-6 object-cover"
          />
        </div>
      </div>
    </header>
  )
}
