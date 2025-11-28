import clsx from 'clsx';
import { MdArrowForwardIos } from "react-icons/md";
import jsonData from "@/data/reportedUser.json"
import DatePicker from '@/app/components/ui/DatePicker';
import { div } from 'framer-motion/client';
import Link from 'next/link';
import { RiArrowRightSLine } from "react-icons/ri";

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
          <p>Reported Users</p>
        </div>
      </div>
    <div className="w-full bg-primary py-10 px-10 rounded-md">
          <div className="flex justify-between items-center px-2 mb-4 ">
            <div>
                <h5 className='text-2xl '>Latest list of reported users</h5>
                <p>32 items</p>
            </div>

              <DatePicker />
          </div>
    
          <table className="bg-secondary p-4 w-full border-collapse overflow-hidden rounded-xl">
            <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
              <tr>
                <th  className="p-4 text-center">Report Id</th>
                <th  className="p-4 text-center">User</th>
                <th  className="p-4 text-center">Report by</th>
                <th  className="p-4 text-center">Reported Date</th>
                <th  className="p-4 text-center">Reason</th>
                <th  className="p-4 text-center">Status</th>
                <th  className="p-4 text-center">Take Action</th>
              </tr>
            </thead>
    
            <tbody className="">
              {jsonData.slice(0, 10).map((u) => (
                <tr className="" key={u.id}>
                  <td className="p-4 text-center">{u.id}</td>
                  <td  className="p-4 text-center">
                      <div className="flex gap-4 text-left ">
                        <img src={u.profileIcon} alt="profile icon" className="w-12 h-12 rounded-full"/>
                        <div>
                          <p>{u.user}</p>
                          <p className="opacity-50 -mt-2">{u.gmail}</p>
                        </div>
                      </div>
                  </td>

                  <td  className="p-4 text-center">
                      <div className="flex gap-4 text-left ">
                        <img src={u.profileIcon} alt="profile icon" className="w-12 h-12 rounded-full"/>
                        <div>
                          <p>{u.user}</p>
                          <p className="opacity-50 -mt-2">{u.gmail}</p>
                        </div>

                      </div>
                  </td>

                  <td  className="p-4 text-center">{u.reportDate}</td>
                  <td  className="p-4 text-center">{u.reason}</td>
                  <td  className="p-4 text-center">
                    <p className={clsx('rounded-full font-semibold text-sm py-1', {
                      "bg-orange-600 text-orange-300" : u.status == "pending",
                      "bg-red-600 text-red-300" : u.status == "warned"
                    })}>{u.status}</p>
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
