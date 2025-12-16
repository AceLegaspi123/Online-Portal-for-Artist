'use client'
import classNames from 'clsx';

import ReportUserModal from "../ui/ReportUserModal"
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const Menu = () => {
  const [openReport, setOpenReport] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <ReportUserModal
        isOpen={openReport}
        onClose={() => setOpenReport(false)}
        violationLogId="VLOG001"
        reportedUserId="USR123"
        reporterId="USR999"
        />

        <BsThreeDots onClick={() => setOpenMenu(i => !i)} className="text-2xl cursor-pointer hover:opacity-80 "/>

        <div className={classNames('absolute top-10 right-0 bg-primary border-1 text-nowrap border-primary-line rounded-md rounded-2 py-3 transition-all ', {
            "opacity-0 hidden" : openMenu,
            "opacity-100 block": !openMenu
        })}>
            <div
                onClick={() => {
                    setOpenReport(i => !i)
                    setOpenMenu(i => !i)
                }} 
                className="flex gap-2 items-center py-2 pr-12 pl-4 hover:bg-secondary cursor-pointer">
               <MdOutlineReport />
                <p>Report User</p>
            </div>

            <div 
                onClick={() => setOpenMenu(i => !i)} 
                className="flex gap-2 items-center  py-2 pr-12 pl-4 hover:bg-secondary cursor-pointer mt-2">
                    <IoIosClose />
                    <p>Close</p>
            </div>
        </div>
    </div>
  )
}

export default Menu
