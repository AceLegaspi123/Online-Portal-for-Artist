'use client';
import classNames from 'clsx';
import { useState } from "react";

const link = [
    {title:  "All Request", number: 5},
    {title:  "Pending", number: 5},
    {title:  "On Hold", number: 5},
    {title:  "Ongoing", number: 5},
    {title:  "Completed", number: 5},
    {title:  "Declined", number: 5},
]

interface Props {
    isActive: string;
    func: (title: string) => void;
}

const CommissionNav = ({isActive, func}: Props) => {
  
  return (
    <nav className="bg-primary w-fit text-left p-2 rounded-lg my-10">
        <ul className="flex gap-3">
            {link.map(item => (
                <li 
                    onClick={() => func(item.title)}
                    key={item.title} 
                    className={`${isActive == item.title && "bg-secondary opacity-100" } text-sm opacity-50 transition-opacity ease-in-out duration-200 cursor-pointer w-fit px-4 py-2 rounded-md hover:bg-secondary hover:opacity-100`}>
                        {item.title} 
                        <span className={classNames('text-[8px] bg-gray-500 border-1 ml-1  rounded-full px-1 opacity-70 text-center', {
                            "bg-green-300 text-green-800 border-green-500" : isActive == item.title
                        })}>
                        {item.number}
                        </span>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default CommissionNav
