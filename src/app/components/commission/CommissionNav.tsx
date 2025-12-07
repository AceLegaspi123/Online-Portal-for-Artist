'use client';
import { useState } from "react";

const link = [
    {title:  "All Request", number: 5},
    {title:  "Pending", number: 5},
    {title:  "On Hold", number: 5},
    {title:  "Ongoing", number: 5},
    {title:  "Completed", number: 5},
    {title:  "Declined", number: 5},
]

const CommissionNav = () => {
 const [isActive, setIsActive] = useState("All Request");

 const handleNavActive = (title: string) => {
    setIsActive(i => title);
    (isActive);
 }

  return (
    <nav className="bg-primary w-fit text-left p-2 rounded-lg my-10">
        <ul className="flex gap-3">
            {link.map(item => (
                <li 
                    onClick={() => handleNavActive(item.title)}
                    key={item.title} 
                    className={`${isActive == item.title && "bg-secondary opacity-100" } text-sm opacity-50 transition-opacity ease-in-out duration-200 cursor-pointer w-fit px-4 py-2 rounded-md hover:bg-secondary hover:opacity-100`}>
                        {item.title} 
                        <span className="text-[8px] bg-gray-500 border-1 ml-1 text-white rounded-full px-1 opacity-70 text-center">
                        {item.number}
                        </span>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default CommissionNav
