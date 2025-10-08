'use client';
import { BsSearch } from 'react-icons/bs';
import Logo from "./Logo";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative border-b-1 border-b-primary-line flex w-full justify-center items-center mb-10 p-4 px-17">
      <div className="w-[80%] flex gap-8 items-center">
      <Link href="/"><Logo/></Link>

        <p className='border-x-2 border-primary-line px-8'><Link href="shop">Shop</Link></p>

        <div className="flex relative">
          <BsSearch className="opacity-80 text-xl absolute top-4 left-4"/>
          <input
            type="text"
            placeholder={`Search arts/artist in ArtistryHub`}
            className="bg-secondary opacity-80 font-normal py-4 pl-14 w-[25rem] rounded-md"
          />
        </div>

      </div>

      <div className="w-[20%] text-right flex justify-end gap-10">
        <button className="cursor-pointer"><Link href="/register">Sign up</Link></button>
        <button className="bg-gradient-primary cursor-pointer text-white px-10 py-2 rounded-full "><Link href="/login">Log in</Link></button>
      </div>
    </header>
  )
}
