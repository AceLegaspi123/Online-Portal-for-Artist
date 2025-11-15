"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <RxDashboard />
  },
  {
    name: "Report Management",
    href: "/dashboard/report-management",
    icon: <TbReportSearch />
  },
  {
    name: "Featured Artwork Management",
    href: "/dashboard/featured-artwork",
    icon: <FaRegStar />
  },
  {
    name: "User Management",
    href: "/dashboard/users-management",
    icon: <FaRegUserCircle />
  },
]

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-20 bottom-0 left-0 w-[20em] bg-primary pt-5">
      <div className="flex flex-col justify h-full">
       <ul className="flex flex-col gap-4">
          {links.map((item, index) => (
            <li 
              key={index}
              className="w-full "
            >
              <Link 
                href={item?.href}    
                className={clsx('transition-all duration-200 ease-in-out px-4 py-4 w-full flex items-center gap-2 opacity-50 hover:opacity-100 ', {
                "bg-white opacity-100 text-black font-semibold " : pathname === item.href 
              })}>
                {item.icon}
                <p>{item?.name}</p>
              </Link>
            </li>
          ))}
       </ul>

        <Link href="/login" className="mt-auto">
          <div className=" flex items-center gap-2 p-4  opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <CgLogOut />
            <p>Logout</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
