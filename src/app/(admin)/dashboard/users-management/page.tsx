import clsx from 'clsx';
import { MdArrowForwardIos } from "react-icons/md";
import jsonData from "@/data/reportedUser.json"
import DatePicker from '@/app/components/ui/DatePicker';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";
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
          <p>Users Management</p>
        </div>
      </div>
    <div className="w-full bg-primary py-10 px-10 rounded-md">
          <div className="flex justify-between items-center px-2 mb-4 ">
            <div>
                <h5 className='text-2xl '>List of users</h5>
                <p>32 items</p>
            </div>

              <DatePicker />
          </div>
    
          <table className="bg-secondary p-4 w-full border-collapse overflow-hidden rounded-xl">
            <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
              <tr>
                <th  className="p-4 text-center">User ID</th>
                <th  className="p-4 text-center">User</th>
                <th  className="p-4 text-center">Date Joined</th>
                <th  className="p-4 text-center">Last Login</th>
                <th  className="p-4 text-center">Status</th>
                <th  className="p-4 text-center">Actions</th>
              </tr>
            </thead>
    
            <tbody className="">
              {jsonData.slice(0, 10).map((u) => (
                <tr className=" gap-4" key={u.id}>
                  <td className="p-4 text-center ">{u.id}</td>
                  <td  className="p-4 text-center  w-20">
                      <div className="flex gap-4 text-left ">
                      <img src={u.profileIcon} alt="profile icon" className="w-12 h-12 rounded-full"/>
                        <div>
                          <p className='font-semibold'>{u.user}</p>
                          <p className="opacity-50 -mt-2">{u.gmail}</p>
                        </div>
                      </div>
                  </td>

                  <td  className="p-4 text-center">{u.reportDate}</td>
                  <td  className="p-4 text-center">{u.reportDate}</td>
                  <td  className="p-4 text-center">
                    <p className={clsx('rounded-md bg-green-500 text-white font-semibold text-sm py-1 w-20 mx-auto', {
                      // "bg-red-400 text-white" : u.ACTION_TAKEN == "Permanent Ban",
                      // "bg-yellow-300 text-black" :u.ACTION_TAKEN == "Warning",
                      // "bg-red-600 text-red-300" : u.ACTION_TAKEN == "Temporary Suspension",
                      // "bg-green-400 " : u.ACTION_TAKEN == "Cleared"
                    })}>Active</p>
                  </td>
                  
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
