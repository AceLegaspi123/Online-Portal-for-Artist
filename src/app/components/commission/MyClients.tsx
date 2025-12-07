'use client';
import CommissionCard from "./CommissionCard";
import CommissionNav from "./CommissionNav";
import commissionRequest from "@/data/commissionRequest.json";

const MyClients = () => {
  return (
    <div>
        <CommissionNav />

        <div className="flex gap-8 justify-between flex-row flex-wrap">
        {
            commissionRequest.map(item => (
            <CommissionCard key={item.CommissionId} {...item}/>
            ))
        }
        </div>
        
    </div>
  )
}

export default MyClients
