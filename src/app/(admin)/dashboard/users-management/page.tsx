import { IoIosArrowDown } from "react-icons/io";
import clsx from 'clsx';
import jsonData from "@/data/reportedUser.json"
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import DatePicker from "@/app/components/ui/DatePicker"


type summaryData = {
  children?: React.ReactNode
}

const UserManagement = ({children} : summaryData) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex font-semibold">
        <h1 className="text-2xl font-semibold">User Management</h1>

        <div className="flex gap-4 items-center ml-auto">
          <p className="opacity-70"><Link href="/dashboard">Home</Link></p>
          <RiArrowRightSLine className="opacity-70"/>
          <p>User Management</p>
        </div>
      </div>

     <div className="w-full bg-primary p-10 pt-6 rounded-2xl sticky">
      <div className="flex justify-between items-center">
        <div className="mb-10">
          <h4  className="font-bold text-xl">List of reported Artwork</h4>
          <p className="opacity-70">21 items</p>
        </div>
         <div className="text-white">
           <DatePicker />
         </div>
      </div>
  
   
         <table className="bg-secondary p-4 w-full border-collapse overflow-hidden rounded-xl">
           <thead className="text-left rounded-t-md border-b-1 border-b-primary-line">
             <tr>
               <th  className="p-4 text-center">User</th>
               <th  className="p-4 text-center">Name</th>
               <th  className="p-4 text-center">Report Date</th>
               <th  className="p-4 text-center">Reported by</th>
               <th  className="p-4 text-center">Reason</th>
               <th  className="p-4 text-center">Status</th>
               <th  className="p-4 text-center">Action</th>
             </tr>
           </thead>
   
           <tbody className="">
             {jsonData.map((u) => (
               <tr className="" key={u.id}>
                 <td className="p-4 text-center">
                  <div>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vaNdU9jTY0qKydautK7JQE9iHLxdbzDYAg&s" alt="" />
                     <div>
                       <h5>{u.user}</h5>  
                       <p>{}</p>
                     </div>
                     
                  </div>
                 </td>
                 <td  className="p-4 text-center"></td>
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

         <div className="absolute top-23 left-0 w-full bg-primary-line h-[2px]"></div>
       </div>
    </div>
  
  )
}

export default UserManagement;
