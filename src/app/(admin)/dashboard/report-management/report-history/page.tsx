import { IoIosArrowDown } from "react-icons/io";
import clsx from 'clsx';
import jsonData from "@/data/reportedUser.json"

type ReportedItem = {
  id: string;
  user: string;
  reportDate: string;
  reportedBy: string;
  reason: string;
  action: string;
  status: string;
};

type summaryData = {
  children?: React.ReactNode
}

const History = ({children} : summaryData) => {
  return (
   <div className="w-full ">
         <h2 className="mb-4">Violation History</h2>
   
         <table className="bg-primary p-4 w-full border-collapse overflow-hidden rounded-xl">
           <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
             <tr>
               <th  className="p-4 text-center">Id</th>
               <th  className="p-4 text-center">Name</th>
               <th  className="p-4 text-center">Report Date</th>
               <th  className="p-4 text-center">Reported by</th>
               <th  className="p-4 text-center">Reason</th>
               <th  className="p-4 text-center">Status</th>
               <th  className="p-4 text-center">Take Action</th>
             </tr>
           </thead>
   
           <tbody className="">
             {jsonData.map((u) => (
               <tr className="" key={u.id}>
                 <td className="p-4 text-center">{u.id}</td>
                 <td  className="p-4 text-center">{u.user}</td>
                 <td  className="p-4 text-center">{u.reportDate}</td>
                 <td  className="p-4 text-center">{u.reportedBy}</td>
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
   
           <tfoot className="border-t-1 border-t-primary-line opacity-50 hover:opacity-100">
             <tr>
               <td colSpan={7} className="py-2">
                 <div className="w-full flex items-center gap-2 justify-center cursor-pointer hover:underline">
                   <p>See all</p>
                   <IoIosArrowDown className="translate-y-1"/>
                 </div>
               </td>
             </tr>
           </tfoot>
         </table>
       </div>
  )
}

export default History;
