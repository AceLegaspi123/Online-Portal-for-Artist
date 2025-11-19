"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { FaRegStar, FaRegUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import Logo from "../ui/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { RiShieldUserLine } from "react-icons/ri";
import { SiMedibangpaint } from "react-icons/si";

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
  const [open, setOpen] = useState<string | null>(null);

  // auto-open dropdown if current pathname is inside a parent route
  useEffect(() => {
    const opened = links.find((l) => l.children && pathname.startsWith(l.href));
    setOpen(opened ? opened.name : null);
  }, [pathname]);

  const handleToggle = (name: string) => {
    setOpen((prev) => (prev === name ? null : name));
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard"; // EXACT MATCH ONLY
    }
    return pathname.startsWith(href); // For items with sub-routes
  };
  

  return (
    <nav className="fixed bg-background top-0 bottom-0 left-0 w-[20em] border-r border-primary-line px-2 pt-5 flex flex-col justify-between z-10">
      <div>
        <Logo />

        <ul className="flex flex-col gap-4 mt-8">
          {links.map((item) => {
            const dropdownOpen = open === item.name;
            const activeParent = isActive(item.href);

            return (
              <li key={item.name}>
                {/* If item has children, show Link for navigation and a separate button to toggle dropdown */}
                {item.children ? (
                  <div className={clsx("flex items-center gap-2", { "bg-bg-active rounded-xl": activeParent })}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "px-4 py-2 flex justify-between items-center gap-2 w-full transition-opacity opacity-80 hover:opacity-100",
                        { "text-text-active font-semibold": activeParent }
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>

                    <button
                      onClick={() => handleToggle(item.name)}
                      aria-expanded={dropdownOpen}
                      className={clsx("p-3 mr-2 rounded-full hover:bg-[rgba(0,0,0,0.03)]", {
                        "rotate-180": dropdownOpen,
                      })}
                      title={dropdownOpen ? "Collapse" : "Expand"}
                    >
                      <IoIosArrowDown className={clsx("transition-transform", { "rotate-360 text-text-active": dropdownOpen })} />
                    </button>
                    </Link>
                  </div>
                ) : (
                  // Items without children are simple Links
                  <Link
                    href={item.href}
                    className={clsx(
                      "px-4 py-4 w-full flex items-center gap-2 transition-all opacity-80 hover:opacity-100",
                      {
                        "bg-bg-active text-text-active font-semibold rounded-xl": activeParent,
                      }
                    )}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Render children if open */}
                {item.children && dropdownOpen && (
                  <ul className="ml-6 mt-2 flex flex-col ">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={clsx(
                            "block text-sm py-2 opacity-60 hover:opacity-100 transition-all",
                            { "text-text-active font-semibold opacity-100": pathname === child.href }
                          )}
                        >
                          <div className={clsx('flex items-center gap-2 py-3 rounded-md px-2', {
                            "bg-bg-active text-text-active" : child.href == pathname
                          })}>
                            {child.icon}
                            {child.name}
                          </div>

                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* LOGOUT */}
      <Link href="/login" className="mt-auto">
        <div className="flex items-center gap-2 p-4 opacity-50 hover:opacity-100 transition">
          <CgLogOut />
          <p>Logout</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
