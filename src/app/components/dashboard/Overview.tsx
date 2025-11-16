'use client';
import classNames from 'clsx';

import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdReport } from "react-icons/md";
import ThreeColTable from './ThreeColsTable';
import ReportedSummary from './ReportedSummary';
import clsx from 'clsx';

import ReportedUser from "../../../../data/reportedUser.json";

const summaryData = [
    {
        name: "Total Users",
        icon: <FaRegCircleUser />,
        countData: `1,320`
    },
    {
        name: "Total Artworks Uploaded",
        icon: <IoGlobeOutline />,
        countData: `53,023`
    },
    {
        name: "Total Sales/ Revenue",
        icon: <RiMoneyDollarCircleLine />,
        countData: `20,232`
    },
    {
        name: "Reports",
        icon: <MdReport />,
        countData: `30 pending`
    }
]

const Overview = () => {
  return (
    <div className='flex flex-col gap-10'>
        <ul className="grid grid-cols-4 gap-8">
            {
                summaryData.map((item, index) => (
                    <li 
                        key={index}
                        className="h-55 border border-primary-line p-4 bg-primary rounded-2xl">
                        <Link href="#">
                            <div className="flex justify-between ">
                                <h4>{item?.name}</h4>
                                <div className={clsx('content-center p-2 rounded-full', {
                                    "bg-green-400" : index == 0,
                                    "bg-white text-black" : index == 1,
                                    "bg-yellow-400 text-black": index == 2,
                                    "bg-red-400" : index == 3,
                                })}> {item?.icon}</div>
                            </div>
                            
                            <p className="mx-auto w-fit mt-[2.3em] font-bold text-2xl">{item?.countData}</p>
                        </Link>
                    </li>
                ))
            }
        </ul>

        <div className='grid grid-cols-2 gap-4'>
            <ThreeColTable title="New Sign-ups" />
            <ThreeColTable title="Top Artists" />
        </div>

        <ReportedSummary jsonData={ReportedUser} header="List of Reported Users"/>
        <ReportedSummary jsonData={ReportedUser} header="List of Arts Users"/>

    </div>
  )
}

export default Overview
