"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LOGGED_IN_USER_ID } from "@/lib/auth";

interface NavLinksProps {
  userId: string;
}

const NavLinks = ({ userId }: NavLinksProps) => {
  const pathname = usePathname();
  const isOwner = LOGGED_IN_USER_ID === userId;

  const links = [
    { name: "Home", href: `/profile/${userId}`, range: "-left-0" },
    { name: "Gallery", href: `/profile/${userId}/gallery`, range: "left-0"  },
    { name: "Posts", href: `/profile/${userId}/posts`,range: "-left-1" },
    { name: "Favorites", href: `/profile/${userId}/favorites`,range: "left-2" },
    { name: "Shop", href: `/profile/${userId}/shop`,range: "-left-1" },
    { name: "Appreciation", href: `/profile/${userId}/appreciation`,range: "left-1" },
    { name: "About", href: `/profile/${userId}/about`,range: "left-0" },
    { name: "Stats", href: `/profile/${userId}/stats`,range: "left-0" },
  ];

  const visibleLinks = links.filter((item) => {
    if (!isOwner && item.name === "About") {
      return false; 
    }
    return true;
  });

  return (
    <ul className="flex gap-8 items-center bg-primary h-17 w-full">
      {visibleLinks.map((item) => (
        <li
          key={item.href}
          className={clsx(
            "opacity-50 text-base px-4 py-1 hover:opacity-100 transition relative",
            {
              "opacity-100": pathname === item.href,
            }
          )}
        >
          <Link href={item.href} className="">{item.name}</Link>
          <hr className={`${item.href === pathname && "border-green-500 border-2 opacity-100"} ${item.range} ${item.name == "Appreciation" && "w-28"} w-20 absolute opacity-0 -bottom-5`}/>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;