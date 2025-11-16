"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import Logo from "../ui/Logo";
import { IoIosArrowDown } from "react-icons/io";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <RxDashboard />
  },
  {
    name: "Report Management",
    href: "/dashboard/report-management",
    icon: <TbReportSearch />,
        children: [
      { name: "Report History", href: "/dashboard/report-management/report-history" },
      { name: "Reported Users", href: "/dashboard/report-management/reported-users" },
      { name: "Reported Artwork", href: "/dashboard/report-management/reported-artwork" },
    ]
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
  <nav className="fixed bg-background top-0 z-10 bottom-0 px-2 left-0 w-[20em] border-r-1 border-primary-line pt-5 flex flex-col justify-between ">
      <div>
        <Logo />
        <div className="flex flex-col justify h-full mt-8">
        <ul className="flex flex-col gap-4">
            {links.map((item, index) => (
              <li 
                key={index}
                className="w-full "
              >
                <Link 
                  href={item?.href}    
                  className={clsx('transition-all duration-200 ease-in-out px-4 py-4 w-full flex items-center gap-2 opacity-50 hover:text-text-active hover:opacity-100 ', {
                  "bg-bg-active opacity-100 text-text-active font-semibold rounded-xl" : pathname === item.href 
                })}>
                  {item.icon}
                  <p>{item?.name}</p>
                  {item.name == "Report Management" ? 
                    <IoIosArrowDown className="ml-auto"/> : ""
                  }
                </Link>

                {/* if the route is in the /dashboard/report-management. A 3 child list will appeared - report history, reported-users, and reported artwork*/}
              </li>

            ))}
        </ul>
      </div> 
      </div>

        <Link href="/login" className="mt-auto">
          <div className=" flex items-center gap-2 p-4  opacity-50 hover:opacity-100 transition-opacity duration-200 ease-in-out">
            <CgLogOut />
            <p>Logout</p>
          </div>
        </Link>
   
    </nav>
  );
};

export default Navbar;
