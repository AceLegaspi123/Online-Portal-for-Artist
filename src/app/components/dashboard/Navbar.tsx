"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { FaRegStar, FaRegUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import logo from "@/app/logo-dark.png";
import { IoIosArrowDown } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { RiShieldUserLine } from "react-icons/ri";
import { SiMedibangpaint } from "react-icons/si";
import Image from "next/image";
import { notify } from "@/utils/toastHelper";
import { deleteSession, getSession } from "@/app/actions/auth"; // Import your session deleter
import { supabase } from "@/lib/supabaseClient";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: <RxDashboard /> },
  {
    name: "Report Management",
    href: "/dashboard/report-management",
    icon: <TbReportSearch />,
    children: [
      { name: "Report History", href: "/dashboard/report-management/report-history", icon: <LuClipboardList /> },
      { name: "Reported Users", href: "/dashboard/report-management/reported-users", icon: <RiShieldUserLine /> },
      { name: "Reported Artwork", href: "/dashboard/report-management/reported-artwork", icon: <SiMedibangpaint /> },
    ],
  },
  { name: "Featured Artwork Management", href: "/dashboard/featured-artwork", icon: <FaRegStar /> },
  { name: "User Management", href: "/dashboard/users-management", icon: <FaRegUserCircle /> },
];

const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<string | null>(null);


  useEffect(() => {
    const opened = links.find((l) => l.children && pathname?.startsWith(l.href));
    setOpen(opened ? opened.name : null);
  }, [pathname]);

  const handleToggle = (name: string) => {
    setOpen((prev) => (prev === name ? null : name));
  };

  const isActive = (href: string) => {
    return href === "/dashboard" ? pathname === "/dashboard" : pathname?.startsWith(href);
  };
  
  const handleLogOut = async () => {
    // Clear Supabase Client Session
    await supabase.auth.signOut();
    // Clear Server-side HTTP-only Cookie
    await deleteSession();
    
    notify("Logged out successfully", "success");

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <nav className="fixed bg-primary top-0 bottom-0 left-0 w-[18em] border-r-1 border-primary-line px-2 flex flex-col justify-between z-10 mt-16">
      <div>
        <div className="flex justify-start px-2 -mt-10">
           <Image height={100} width={100} src={logo} alt="logo" className="w-fit h-12" />
        </div>

        <ul className="flex flex-col gap-4 mt-8">
          {links.map((item) => {
            const dropdownOpen = open === item.name;
            const activeParent = isActive(item.href);

            return (
              <li key={item.name}>
                {item.children ? (
                  <div className={clsx("flex flex-col", { "bg-bg-active rounded-xl": activeParent })}>
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={item.href}
                        className={clsx(
                          "px-4 py-2 flex items-center gap-2 w-full transition-opacity opacity-80 hover:opacity-100",
                          { "text-text-active font-semibold": activeParent }
                        )}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </Link>
                      <button
                        onClick={() => handleToggle(item.name)}
                        className={clsx("p-3 mr-2 transition-transform", { "rotate-180": dropdownOpen })}
                      >
                        <IoIosArrowDown />
                      </button>
                    </div>

                    {dropdownOpen && (
                      <ul className="ml-6 mb-2 flex flex-col">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={clsx(
                                "flex items-center gap-2 py-3 px-2 rounded-md text-sm transition-all",
                                pathname === child.href ? "bg-bg-active text-text-active opacity-100" : "opacity-60 hover:opacity-100"
                              )}
                            >
                              {child.icon}
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      "px-4 py-4 w-full flex items-center gap-2 transition-all opacity-80 hover:opacity-100",
                      { "bg-bg-active text-text-active font-semibold rounded-xl": activeParent }
                    )}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* LOGOUT BUTTON */}
      <button 
        onClick={handleLogOut} 
        className="flex mt-auto items-center gap-2 p-4 opacity-50 hover:opacity-100 hover:text-red-500 transition cursor-pointer w-full text-left"
      >
        <CgLogOut className="text-xl" />
        <span className="font-medium">Logout</span>
      </button>
    </nav>
  );
};

export default Navbar;