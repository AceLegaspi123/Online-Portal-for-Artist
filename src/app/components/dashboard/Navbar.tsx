import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-20 bottom-0 left-0 w-[20vw] bg-primary">
      <div className="flex flex-col justify-between">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/report-management">Report Management</Link>
          </li>
          <li>
            <Link href="/dashboard/featured-artwork">Featured Artwork Management</Link>
          </li>
          <li>
            <Link href="/dashboard/users-management">User Management</Link>
          </li>
        </ul>

        <div className="mt-auto">
          <p>Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
