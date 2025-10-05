// components/ProfileLayout.jsx
import Link from "next/link";
import { ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps)  => {
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

        {/* Navigation Tabs */}
        <div className="bg-[#161A1F] h-20 w-full mt-4 px-10 pl-18">
          <ul className="flex gap-12 items-center h-full">
            <li><Link href="/profile" className={`opacity-70`}>Home</Link></li>
            <li><Link href="/profile/gallery" className={`opacity-70`}>Gallery</Link></li>
            <li><Link href="/profile/posts" className={`opacity-70`}>Posts</Link></li>
            <li><Link href="/profile/favorites" className={`opacity-70`}>Favorites</Link></li>
            <li><Link href="/profile/shop" className={`opacity-70`}>Shop</Link></li>
            <li><Link href="/profile/about" className={`opacity-70`}>About</Link></li>
            <li><Link href="/profile/stats" className={`opacity-70`}>Stats</Link></li>
          </ul>
        </div>
      </div>

      {/* Page-specific content */}
      <div className="p-18">{children}</div>
    </div>
  );
};

export default ProfileLayout;
