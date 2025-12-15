"use client"
import classNames from 'clsx';
import {LOGGED_IN_USER_ID} from "@/lib/auth"
import { MdOutlineMail } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { useState } from "react";
import CommissionForm from "../commission/CommissionForm";
import DarkBlur from "../ui/DarkBlur";

interface NavLinksProps {
    userId: string;
}

const ButtonSubmission = ({userId}: NavLinksProps) => {
 const isOwner = LOGGED_IN_USER_ID == userId;
 const [commissionIsActive, setCommissionIsActive] = useState(true);

 console.log("commission " + commissionIsActive)
  return (
    <div>
        {
        !isOwner && 
            <div className="flex gap-4 items-center">
            <button className="flex bg-white px-4 py-2 text-nowrap items-center text-black rounded-md gap-2 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out hover:scale-102">
            <GoPlusCircle /> 
                <span>Follow</span>
                </button>

                <button 
                    onClick={() => setCommissionIsActive(i => !i)}
                    className="flex bg-green-400 px-4 py-2 text-nowrap items-center text-black rounded-md gap-2 cursor-pointer hover:opacity-80 transition duration-200 ease-in-out hover:scale-102">
                    <MdOutlineMail /> 
                    <span>Send Commission</span>
                </button>
            </div>
        }

        {
        }

        <div className={classNames('fixed -translate-y-1/2 transition duration-200 ease-in-out -translate-x-1/2 left-1/2 top-1/2 inset-0 z-50', {
            "hidden -mt-4 opacity-0" : commissionIsActive,
            "visible mt-0 opacity-100" : !commissionIsActive
        })}>
            <CommissionForm func={setCommissionIsActive}/>
        </div>
        

        <div className={classNames('fixed inset-0 z-40', {
             "hidden -mt-4" : commissionIsActive,
        })}>
            <DarkBlur />
        </div>
    </div>
  )
}

export default ButtonSubmission
