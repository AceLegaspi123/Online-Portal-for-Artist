import React, { ReactNode } from "react";
import NavLinks from "@/app/components/profile/NavLinks";
import userProfile from "@/data/user_profile.json"
import { UserProfile } from "@/types/User";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
  params:  Promise<{ id: string }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { id } = await params;
  const users = userProfile as UserProfile[];
  const user = users.find(u => u.id == id)

  return (
    <div className="relative z-10">
        <div className="h-[23rem]  w-full -mt-10 relative bg-cover bg-center backdrop-grayscale-75 bg-no-repeat">
          {
            user?.background_cover !== ""
            ? <img src={user?.background_cover} alt="" className=" not-last:inset-0 top-0 h-95 w-full object-cover object-center -z-10 absolute"/>
            : <img src="/form-background.jpg" alt="" className="inset-0 h-95 w-full object-cover -z-10 absolute"/>
          }
        

        
        <div className="flex gap-4 pt-50 items-center px-10 pl-12 z-20 pb-5 banner">
          <div className="h-25 w-25 bg-primary rounded-full overflow-hidden border-2 border-green-600">
            <img 
              height={80}
              width={80}
              src={user?.profile_picture}
              alt={`${user?.first_name}_${user?.last_name}_profile_picture`}
              className="h-full w-full object-cover "
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-3xl font-bold">{`${user?.first_name} ${user?.last_name}`}</h3>
            <p>{user?.username}</p>

            <ul className="flex gap-4">
              <li>1.8m followers</li>
              <li>59 following</li>
              <li>102 appreaciation</li>
            </ul>
          </div>
        </div>

        {/* ✅ pass ONLY the string id */}
        <div className="pl-12 bg-primary">
           <NavLinks userId={id} />
        </div>

      </div>

      <div className="p-18">{children}</div>
    </div>
  );
}
