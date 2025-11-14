import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 bottom-0 left-0 w-[20vw] bg-red-400">
      <h1>Admin Navbar</h1>
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
    </nav>
  );
};

export default Navbar;
