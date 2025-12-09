'use client';
import CommissionCard from "./CommissionCard";
import CommissionNav from "./CommissionNav";
import commissionRequest from "@/data/commissionRequest.json";
import CommissionModal from "@/app/components/commission/CommissionModal";
import DarkBlur from "../ui/DarkBlur";
import { useState } from "react";
import { filter } from "framer-motion/client";
import {CommissionRequest} from "@/types/User"

const MyClients = () => {
  const [modalIsActive, setModalsActive] = useState(false);
  const [filterRequest, setFilterRequest] = useState("All Request");
  const [filterCommission, setFilterCommission] = useState<CommissionRequest[]>(commissionRequest);

  const handleNavActive = (title: string) => {
    let filtered: CommissionRequest[];
    
    // 1. **Immediate Filtering:** Use the 'title' argument directly for filtering.
    if (title === "All Request") {
        // If the *new* title is "All Request", return all original data
        filtered = commissionRequest;
    } else {
        // Otherwise, filter the original data based on the *new* title (which is the Status)
        // Assuming the titles for non-"All Request" are the Status (e.g., "Pending", "Completed")
        filtered = commissionRequest.filter(i => i.Status === title);
    }
    
    // 2. **Update Both States:** Update the display list and the active tab tracker.
    setFilterCommission(filtered);
    setFilterRequest(title); // This can be last, as the filtering no longer depends on it
}

  return (
    <div className="relative pb-10">
        <CommissionNav isActive={filterRequest} func={handleNavActive}/>

        <div className="grid xl:grid-cols-4 gap-8">
        {
            filterCommission.map(item => (
            <li  key={item.CommissionId} onClick={() => setModalsActive(i => !i)}>
              <CommissionCard {...item}/>
            </li>)

            )
        }
        </div>
        
        <CommissionModal modal={modalIsActive} modalFunc={setModalsActive}/>

        {
          modalIsActive && 
            <div onClick={() => setModalsActive(i => !i)}>
              <DarkBlur />
            </div>
        }
      
    </div>
  )
}

export default MyClients
