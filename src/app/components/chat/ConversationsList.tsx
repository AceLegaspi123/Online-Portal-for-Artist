// app/components/chat/ConversationsList.tsx
"use client";

import { useState } from "react";
import clsx from "clsx";
import { Search } from "lucide-react";

const NAV_TABS = ["Messages", "Requests", "Incoming"];

const MOCK_CONVERSATIONS = [
  { id: 1, name: "JEAVEN A. PARAS", lastMessage: "How much does this cost?", time: "04:18 PM", avatar: "https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg", online: true },
  { id: 2, name: "ARTIST NAME", lastMessage: "Is this commission open?", time: "02:10 PM", avatar: "https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg", online: true },
  { id: 3, name: "CLIENT X", lastMessage: "Sent the payment!", time: "Yesterday", avatar: "https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg", online: false },
];

export default function ConversationsList({ onSelect, selectedId }: any) {
  const [activeTab, setActiveTab] = useState("Requests");

  return (
    <div className="w-full h-full bg-[#1C1D21] border-r border-white/5 p-6 md:p-8 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">INBOX</h2>
          <p className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em] mt-1">ARCHIVE COMMS</p>
        </div>
      </div>

      <div className="relative group mb-6">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-zinc-500 group-focus-within:text-green-400 transition-colors" />
        <input 
          type="text" 
          placeholder="Search Archive..." 
          className="w-full pl-14 pr-6 bg-[#141518] border border-white/5 py-4 rounded-full outline-none text-sm focus:border-green-400/30 transition-all placeholder:text-zinc-600 text-white"
        />
      </div>

      <div className="flex p-1 bg-[#141518] rounded-full border border-white/5 gap-1 mb-8">
        {NAV_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-2 py-2.5 rounded-full w-full text-center transition-all text-[10px] font-black uppercase tracking-widest",
              activeTab === tab ? "bg-green-400 text-black" : "text-zinc-500 hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
        {MOCK_CONVERSATIONS.map((convo) => (
          <button 
            key={convo.id} 
            onClick={() => onSelect(convo.id)}
            className={clsx(
              "w-full p-4 rounded-3xl flex items-center gap-4 transition-colors text-left",
              selectedId === convo.id ? "bg-white/5 border border-white/5" : "hover:bg-white/5"
            )}
          >
            <div className="relative flex-shrink-0">
              <img src={convo.avatar} alt={convo.name} className="w-12 h-12 rounded-full object-cover" />
              {convo.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#1C1D21]" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400 truncate">{convo.name}</p>
              <p className="text-sm text-white truncate font-medium mt-0.5">{convo.lastMessage}</p>
            </div>
            <div className="text-right ml-auto pl-2 flex flex-col items-end flex-shrink-0">
                <p className="text-[10px] text-zinc-600 font-medium">{convo.time}</p>
                {selectedId === convo.id && <div className="w-2.5 h-2.5 bg-green-400 rounded-full mt-2" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}