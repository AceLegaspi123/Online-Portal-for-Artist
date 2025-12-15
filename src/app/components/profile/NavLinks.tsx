"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


interface NavLinksProps {
  userId: string;
}

const NavLinks = ({ userId }: NavLinksProps) => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: `/profile/${userId}` },
    { name: "Gallery", href: `/profile/${userId}/gallery` },
    { name: "Posts", href: `/profile/${userId}/posts` },
    { name: "Favorites", href: `/profile/${userId}/favorites` },
    { name: "Shop", href: `/profile/${userId}/shop` },
    { name: "Appreciation", href: `/profile/${userId}/appreciation` },
    { name: "About", href: `/profile/${userId}/about` },
    { name: "Stats", href: `/profile/${userId}/stats` },
  ];

  return (
    <ul className="flex gap-5 items-center bg-primary h-17 w-full ">
      {links.map((item) => (
        <li
          key={item.href}
          className={clsx(
            "opacity-50 text-base px-4 py-1 rounded-full hover:opacity-100 transition",
            {
              "bg-green-500 opacity-100": pathname === item.href,
            }
          )}
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
