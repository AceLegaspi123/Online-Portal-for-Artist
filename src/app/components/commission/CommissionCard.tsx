import Image from "next/image";
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
    <section className="commission-card p-4 rounded-md border-t-4 border-t-orange-500 bg-primary flex flex-col gap-4 w-100">
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

         <p className="text-sm font-bold px-2 bg-orange-200 text-orange-500 border-1 border-orange-500 h-fit rounded-full">{Status}</p>
        </div>

        <h3 className="text-xl font-semibold">{Title}</h3>
        <p className="text-sm opacity-50">{Description}</p>
    
        <p className="text-sm font-semibold px-4 py-1 bg-primary w-fit rounded-full">{ArtType}</p>
        
        <div className="flex items-center gap-4">
            <p>${Budget}</p>
            <div className="flex items-center gap-2">
              <CiCalendarDate />
              <p>December 12, 2025</p>
            </div>
        </div>

        <hr className="bg-primary-line opacity-20"/>

        <ul className="flex flex-row gap-4 flex-nowrap overflow-x-hidden">
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
