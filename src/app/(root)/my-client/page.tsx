import { BsGraphUp } from "react-icons/bs";
import Metrics from "@/app/components/ui/Metrics";
import { FaRegClock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { FaHandHolding } from "react-icons/fa6";
import MyClients from "@/app/components/commission/MyClients";


const metrics = [
  {title: "Total Requests", total: 5, added: `+12 this months`, icons: <BsGraphUp className="text-orange-500"/>},
  {title: "Pending", total: 15, added: `+12 this months`, icons: <FaRegClock className="text-blue-500"/>},
  {title: "On Hold", total: 12, added: ``, icons: <FaHandHolding className="text-yellow-500"/>},
  {title: "Ongoing", total: 5, added: ``, icons: <MdOutlineCallMissedOutgoing className="text-blue-300"/>},
  {title: "Completed", total: 5, added: `+12 this months`, icons: <FaCheckCircle className="text-green-500"/>},
  {title: "Declined", total: 5, added: `+12 this months`, icons: <IoCloseCircleOutline className="text-red-500"/>}
]

const Commission = () => {
  return (
    <main className="max-w-[1880px] mx-auto md:px-10">
      <h1 className="text-3xl font-bold">My Client <span className="text-green-500">Requests</span></h1>
      <p className="text-sm opacity-80">Manage your incoming art commission requests from clients</p>
    
      <div className="flex flex-row gap-4 flex-wrap mt-10 text-sm">
        {
          metrics.map(item => (
            <Metrics {...item} key={item.title}/>
          ))
        }
      </div>

      <MyClients />

    </main>
  )
}

export default Commission