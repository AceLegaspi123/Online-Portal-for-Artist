"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
  {
    name: "Home",
    href: "/profile",
  },
  {
    name: "Gallery",
    href: "/profile/gallery",
  },
  {
    name: "Posts",
    href: "/profile/posts",
  },
  {
    name: "Favorites",
    href: "/profile/favorites",
  },
  {
    name: "Shop",
    href: "/profile/shop",
  },
  {
    name: "Appreciation",
    href: "/profile/appreciation",
  },
  {
    name: "About",
    href: "/profile/about",
  },
  {
    name: "Stats",
    href: "/profile/stats",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <ul className="flex gap-5 items-center bg-[#161A1F] h-17 w-full mt-4 px-10 pl-18">
      {links.map((item, index) => (
        <li 
            className={clsx('opacity-50 text-base px-8 py-1 rounded-full hover:opacity-100 transition duration-300 ease-in-out', {
                " bg-blue-500 opacity-100" : item?.href == pathname
            })} 
            key={index}>
          <Link href={item?.href}>{item?.name} </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
