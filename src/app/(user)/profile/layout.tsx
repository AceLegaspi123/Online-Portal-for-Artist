import React, { ReactNode } from "react";
import NavLinks from "@/components/profile/NavLinks";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {/* Profile Header */}
      <div
        className="h-[23rem] w-full -mt-10 relative background-cover "
        style={{ backgroundImage: "url('/profile-background.png')" }}
      >
        <div className="flex gap-4 pt-40 items-center px-10 pl-12">
          <div className="h-32 w-32 bg-[#1c1c1c] rounded-full"></div>
          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">ChristianJay69</h3>
            <p>Christian Jay </p>
            <div>
              <ul className="flex gap-4">
                <li>1.8m followers</li>
                <li>59 following</li>
                <li>102 profile views</li>
              </ul>
            </div>
          </div>
        </div>

        <NavLinks />
      </div>

      {/* Page-specific content */}
      <div className="p-18">{children}</div>
    </div>
  );
}

export default layout;
