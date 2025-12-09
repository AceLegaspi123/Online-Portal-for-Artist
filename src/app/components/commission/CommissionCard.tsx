import Image from "next/image";
import classNames from 'clsx';
import { CiCalendarDate } from "react-icons/ci";
import {CommissionRequest} from "@/types/User"

const tags : string[] = ["fantasy", "portrait", "dnd"];

const CommissionCard = ({
    commissionToProfile,
    References,
    Title,
    Description,
    ArtType,
    Deadline,
    Tags,
    Budget,
    Status,
    CreatedAt
} : CommissionRequest) => {
  return (
    <section className={classNames('commission-card p-4 rounded-md border-t-4  bg-primary flex flex-col gap-4 w-100', {
        "border-t-blue-500" : Status == "Pending",
        "border-t-orange-500" : Status == "On Hold",
        "border-t-blue-200" : Status == "Ongoing",
        "border-t-green-500" : Status == "Completed",
        "border-t-red-500" : Status == "Declined",
    })}>
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <Image
                    width={40}
                    height={40}
                    alt="avatar"
                    src="https://i.pinimg.com/originals/4e/f0/d7/4ef0d7022735af8676d0663a9576812a.png"
                    className="bg-primary h-10 w-10 rounded-full object-cover border-[1px]  border-primary-line"
                />  

                <div>
                    <p className="text-lg font-semibold">{commissionToProfile.clientName}</p>
                    <p className="text-xs opacity-50">{CreatedAt}</p>
                </div>
            </div>

         <p className={classNames('text-xs font-semibold px-2  border-1 h-fit rounded-full', {
                    "border-blue-600 bg-blue-300 text-blue-600" : Status == "Pending",
                    "border-orange-600 bg-orange-300 text-orange-600" : Status == "On Hold",
                    "border-blue-400 bg-blue-300 text-blue-500" : Status == "Ongoing",
                    "border-green-600 bg-green-300 text-green-600" : Status == "Completed",
                    "border-red-600 bg-red-300 text-red-600" : Status == "Declined",
         })}>{Status}</p>
        </div>

        <h3 className="text-xl font-semibold">{Title}</h3>
        <p className="text-sm opacity-50">{Description}</p>
    
        <p className="text-xs font-semibold px-4 py-1 bg-primary w-fit rounded-full">{ArtType}</p>
        
        <div className="flex items-center gap-4">
            <p className="font-bold text-green-500">${Budget}</p>
            <div className="flex items-center gap-2">
              <CiCalendarDate />
              <p>{}</p>
            </div>
        </div>

        <hr className="bg-primary-line opacity-20"/>

        <ul className="flex flex-row gap-4 flex-nowrap overflow-x-hidden text-xs">
            {
                Tags.map(li => (
                    <li key={li} className="bg-primary px-4 py-1 rounded-full text-nowrap"><p>#{li}</p></li>
                ) )
            }
        </ul>
    </section>
  )
}

export default CommissionCard
