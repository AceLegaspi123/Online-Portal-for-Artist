"use client";

import React, { useState } from "react";
import { X, Heart, Globe, Lock, Send, Loader2 } from "lucide-react";
// import { submitAppreciation } from "@/actions/appreciation";
import clsx from "clsx";

interface AppreciationModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionData: {
    id: string;
    artistId: string;
    buyerId: string;
    artworkId?: string;
    commissionId?: string;
    artworkName: string;
    type: string;
  };
}

export default function AppreciationModal({ isOpen, onClose, transactionData }: AppreciationModalProps) {
  const [message, setMessage] = useState("");
  const [visibility, setVisibility] = useState<"Public" | "Private">("Public");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

//   const handleSubmit = async () => {
//     if (!message.trim()) return;
//     setIsSubmitting(true);

//     const result = await submitAppreciation({
//       senderId: transactionData.buyerId,
//       artistId: transactionData.artistId,
//       transactionId: transactionData.id,
//       artworkId: transactionData.artworkId,
//       commissionId: transactionData.commissionId,
//       message: message,
//       type: transactionData.type === "shop" ? "Shop Purchase" : "Commission",
//       visibility: visibility,
//     });

//     setIsSubmitting(false);
//     if (result.success) {
//       onClose();
//       // Optional: Trigger a success toast here
//     }
//   };


const handleSubmit = () => {
    alert(`Message: ${message}\nVisibility: ${visibility}\n\n(Note: This is a mock submission. Implement server logic to save the appreciation.)`);
        onClose();
    };
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#1C1D21] w-full max-w-lg border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="p-8 pb-0 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white flex items-center gap-2">
              Share Appreciation <Heart className="text-red-500 fill-red-500" size={24} />
            </h2>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mt-1">
              For: {transactionData.artworkName}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-zinc-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          {/* Message Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Your Message</label>
              <span className={clsx(
                "text-[10px] font-bold",
                message.length > 450 ? "text-red-400" : "text-zinc-600"
              )}>
                {message.length}/500
              </span>
            </div>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 500))}
              placeholder="How was your experience with the artist?"
              className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white outline-none focus:border-green-400/40 transition-all placeholder:text-zinc-700 resize-none"
            />
          </div>

          {/* Visibility Toggle */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Visibility</label>
            <div className="grid grid-cols-2 gap-3">
              <VisibilityOption 
                active={visibility === "Public"} 
                onClick={() => setVisibility("Public")}
                icon={<Globe size={16} />}
                label="Public"
                desc="Visible on artist profile"
              />
              <VisibilityOption 
                active={visibility === "Private"} 
                onClick={() => setVisibility("Private")}
                icon={<Lock size={16} />}
                label="Private"
                desc="Only artist can see"
              />
            </div>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleSubmit}
            disabled={!message.trim() || isSubmitting}
            className="w-full py-4 bg-green-400 hover:bg-green-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-black font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-green-400/10"
          >
            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
            Submit Appreciation
          </button>
        </div>
      </div>
    </div>
  );
}

function VisibilityOption({ active, onClick, icon, label, desc }: any) {
  return (
    <button 
      onClick={onClick}
      className={clsx(
        "flex flex-col items-start p-4 rounded-2xl border transition-all text-left",
        active ? "bg-white/10 border-green-400/50" : "bg-transparent border-white/5 hover:border-white/20"
      )}
    >
      <div className={clsx("mb-2", active ? "text-green-400" : "text-zinc-500")}>
        {icon}
      </div>
      <p className={clsx("text-xs font-black uppercase", active ? "text-white" : "text-zinc-500")}>{label}</p>
      <p className="text-[10px] text-zinc-600 mt-0.5">{desc}</p>
    </button>
  );
}