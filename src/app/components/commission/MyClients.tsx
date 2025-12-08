'use client';
import CommissionCard from "./CommissionCard";
import CommissionNav from "./CommissionNav";
import commissionRequest from "@/data/commissionRequest.json";
import CommissionModal from "@/app/components/commission/CommissionModal";
import DarkBlur from "../ui/DarkBlur";
import { useState } from "react";

const MyClients = () => {
  const [modalIsActive, setModalsActive] = useState(false);
  return (
    <div>
        <CommissionNav />

        <div className="flex gap-8 justify-between flex-row flex-wrap">
        {
            commissionRequest.map(item => (
            <li  key={item.CommissionId} onClick={() => setModalsActive(i => !i)}>
              <CommissionCard {...item}/>
            </li>

            ))
        }
        </div>
        
        <CommissionModal modal={modalIsActive} modalFunc={setModalsActive}/>
        
        {
          modalIsActive && <DarkBlur />
        }
       
    </div>
  )
}

export default MyClients
