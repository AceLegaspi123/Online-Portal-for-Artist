// app/components/chat/ChatMessagesArea.tsx
"use client";

import { Paperclip, Image as ImageIcon, ChevronLeft, MoreHorizontal, X } from "lucide-react";

interface ChatAreaProps {
  onBack: () => void;
  onClose: () => void; // Added onClose prop
}

export default function ChatMessagesArea({ onBack, onClose }: ChatAreaProps) {
  return (
    <div className="flex-1 bg-white flex flex-col sm:rounded-r-[3rem] overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between bg-white z-10">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Mobile Back Button - Navigates to List */}
          <button onClick={onBack} className="md:hidden p-1 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft size={28} />
          </button>
          
          <img src="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg" alt="Jeaven" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-slate-800 text-sm md:text-base">Jeaven A. Paras</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <p className="text-xs text-slate-500 font-medium">Active</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="hidden md:block text-slate-400 p-2 hover:bg-slate-50 rounded-full transition-colors">
            <MoreHorizontal size={20} />
          </button>
          
          {/* Mobile-Only Close Button - Exits Modal */}
          <button 
            onClick={onClose} 
            className="md:hidden p-2 text-slate-400 hover:text-red-500 hover:bg-slate-100 rounded-full transition-all"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 md:p-8 space-y-4 overflow-y-auto bg-slate-50 flex flex-col">
        <div className="flex items-end gap-3 max-w-[85%] md:max-w-[70%]">
          <img src="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg" alt="avatar" className="w-8 h-8 rounded-full flex-shrink-0" />
          <div className="bg-white p-4 rounded-3xl rounded-bl-lg text-slate-800 text-sm shadow-sm font-medium border border-slate-100">
            I'm good, thanks! How about you?
          </div>
        </div>

        <div className="bg-[#1AEF85] p-4 rounded-3xl rounded-br-lg text-black text-sm max-w-[85%] md:max-w-[70%] self-end ml-auto font-medium shadow-green-200 shadow-lg">
          Hello, how are you?
        </div>
      </div>

      {/* Input Field */}
      <div className="p-2 md:p-4 border-t border-slate-100 bg-white">
        <div className="m-1 md:m-2 mb-2 md:mb-4 rounded-full flex items-center gap-1 md:gap-2 shadow-inner shadow-slate-100 border border-slate-100 px-2 md:px-4">
          <button className="p-2 text-slate-400 hover:text-green-500 transition-colors">
            <ImageIcon size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Message..." 
            className="flex-1 text-sm bg-transparent outline-none px-2 py-3 text-slate-700"
          />
          <button className="px-5 md:px-8 py-2 md:py-2.5 bg-[#1AEF85] text-black text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full shadow-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}