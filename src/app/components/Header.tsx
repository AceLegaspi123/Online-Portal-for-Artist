'use client';
import { BsSearch } from 'react-icons/bs';
import Logo from "./Logo";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative border-b-1 flex w-full justify-center items-center mb-10 px-4 p-2">
      <div className="w-[50%] flex gap-8 items-center">
      <Link href="/"><Logo/></Link>

        <p><Link href="shop">Shop</Link></p>
        <div className="flex relative">
          <BsSearch className="opacity-80 text-xl absolute top-4 left-4"/>
          <input
            type="text"
            placeholder={`Search arts/artist in ArtistryHub`}
            className="bg-slate-700  opacity-80 text-white font-normal py-4 pl-14 w-[21rem] rounded-full"
          />
        </div>

      </div>

      <div className="w-[50%] text-right flex justify-end gap-10">
        <button className="cursor-pointer"><Link href="/register">Sign up</Link></button>
        <button className="bg-blue-600 cursor-pointer text-white px-10 py-2 rounded-full"><Link href="/login">Log in</Link></button>
      </div>
    </header>
  )
}
