import clsx from 'clsx';
import { MdArrowForwardIos } from "react-icons/md";
import jsonData from "@/data/reportedUser.json"
import DatePicker from '@/app/components/ui/DatePicker';
import { div } from 'framer-motion/client';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
import { PiImageSquareLight } from "react-icons/pi";
import Violations from "@/data/ViolationHistory.json"

type ReportedItem = {
  id: string;
  user: string;
  gmail: string;
  profileIcon: string;
  reportDate: string;
  reportedBy: string;
  reason: string;
  action: string;
  status: string;
};



const ReportedUserSummary = () => {
  return (
   <div className=''>
       <div className="flex font-semibold mb-10">
        <h1 className="text-2xl font-semibold">Report Management</h1>

        <div className="flex gap-4 items-center ml-auto">
          <p className="opacity-70"><Link href="/dashboard">Home</Link></p>
          <RiArrowRightSLine className="opacity-70"/>
          <p>Violation History</p>
        </div>
      </div>
    <div className="w-full bg-primary py-10 px-10 rounded-md">
          <div className="flex justify-between items-center px-2 mb-4 ">
            <div>
                <h5 className='text-2xl '>Latest list of violations</h5>
                <p>32 items</p>
            </div>

              <DatePicker />
          </div>
    
          <table className="bg-secondary p-4 w-full border-collapse overflow-hidden rounded-xl">
            <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
              <tr>
                <th  className="p-4 text-center">Report Id</th>
                <th  className="p-4 text-center">Reference Id</th>
                <th  className="p-4 text-center">Reported User</th>
                <th  className="p-4 text-center">Reported by</th>
                <th  className="p-4 text-center">Date issued</th>
                <th  className="p-4 text-center">Violation Type</th>
                <th  className="p-4 text-center">Action Taken</th>
                <th  className="p-4 text-center">Duration</th>
                <th  className="p-4 text-center">Notes</th>
              </tr>
            </thead>
    
            <tbody className="">
              {Violations.slice(0, 10).map((u) => (
                <tr className="" key={u.USER_ID}>
                  <td className="p-4 text-center ">{u.USER_ID}</td>
                  <td className="p-4 text-center ">{u.USER_ID}</td>
                  <td  className="p-4 text-center">
                      <div className="flex gap-4 text-left ">
                      <img src="https://i.pravatar.cc/150?u=Koolen" alt="profile icon" className="w-12 h-12 rounded-full"/>
                        <div>
                          <p className='font-semibold'>{u.reported_user.name}</p>
                          <p className="opacity-50 -mt-2">{u.reported_user.gmail}</p>
                        </div>
                      </div>
                  </td>

                  <td  className="p-4 text-center">
                      <div className="flex gap-4 text-left ">
                        <img src="https://i.pravatar.cc/150?u=BroDraw" alt="profile icon" className="w-12 h-12 rounded-full"/>
                        <div>
                          <p>{u.reported_by.name}</p>
                          <p className="opacity-50 -mt-2">{u.reported_by.gmail}</p>
                        </div>

                      </div>
                  </td>

                  <td  className="p-4 text-center">{u.DATE_ISSUED}</td>
                  <td  className="p-4 text-center">{u.VIOLATION_TYPE}</td>
                  <td  className="p-4 text-center">
                    <p className={clsx('rounded-md font-semibold text-sm py-1', {
                      "bg-red-400 text-white" : u.ACTION_TAKEN == "Permanent Ban",
                      "bg-yellow-300 text-black" :u.ACTION_TAKEN == "Warning",
                      "bg-red-600 text-red-300" : u.ACTION_TAKEN == "Temporary Suspension",
                      "bg-green-400 " : u.ACTION_TAKEN == "Cleared"
                    })}>{u.ACTION_TAKEN}</p>
                  </td>
                  
                  <td  className="p-4 text-center">{u.Duration}</td>
                  <td  className=" text-center">Action</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
   </div>
 
  )
}

export default ReportedUserSummary
