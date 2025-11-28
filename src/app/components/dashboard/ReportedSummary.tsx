import { IoIosArrowDown } from "react-icons/io";
import clsx from 'clsx';
import { MdArrowForwardIos } from "react-icons/md";

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

type summaryData = {
  jsonData: ReportedItem[],
  header: string,
  children?: React.ReactNode
}

const ReportedUserSummary = ({jsonData, header, children} : summaryData) => {
  return (
   <div className="w-full ">
        <div className="flex justify-between items-center px-2">
          <h2 className="mb-4">{header}</h2>
          <div className="flex gap-2 items-center">
            <p>View All</p>
            <MdArrowForwardIos />
          </div>
        </div>
   
         <table className="bg-primary p-4 w-full border-collapse overflow-hidden rounded-xl">
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
             {jsonData.slice(0, 5).map((u) => (
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
  )
}

export default ReportedUserSummary
