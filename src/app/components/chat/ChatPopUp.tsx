// app/components/chat/ChatPopUp.tsx
"use client";

import React, { useState } from "react";
import Modal from "@/app/components/ui/Modal";
import ConversationsList from "./ConversationsList";
import ChatMessagesArea from "./ChatMessagesArea";
import { X } from "lucide-react";

export default function ChatPopUp({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClose = () => {
    setSelectedId(null);
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose} 
      className="w-full sm:w-[95%] max-w-[1400px] h-full sm:h-[90vh]"
    >
      <div className="relative w-full h-full bg-[#141518] sm:border border-white/5 sm:rounded-[3rem] shadow-2xl flex overflow-hidden">
        
        {/* Sidebar Logic */}
        <div className={`${selectedId ? 'hidden' : 'flex'} md:flex w-full md:w-[380px] h-full flex-shrink-0 relative`}>
          {/* Mobile-Only Close for Inbox View */}
          <button 
            onClick={handleClose}
            className="md:hidden absolute top-6 right-6 z-20 p-2 bg-white/5 text-zinc-400 rounded-full"
          >
            <X size={20} />
          </button>
          <ConversationsList onSelect={setSelectedId} selectedId={selectedId} />
        </div>

        {/* Chat Area Logic */}
        <div className={`${!selectedId ? 'hidden' : 'flex'} md:flex flex-1 h-full bg-white`}>
          <ChatMessagesArea 
            onBack={() => setSelectedId(null)} 
            onClose={handleClose} // Pass the close handler here
          />
        </div>

        {/* Desktop Close Button (Floating) */}
        <button 
          onClick={handleClose}
          className="hidden md:block absolute top-8 right-8 z-[110] p-2 bg-white/5 hover:bg-white/10 text-zinc-500 rounded-full transition-colors"
        >
          <X size={20} onClick={onClose}/>
        </button>
      </div>
    </Modal>
  );
}