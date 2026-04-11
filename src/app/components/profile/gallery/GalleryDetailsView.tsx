"use client";

import Image from "next/image";
import { 
  Plus, 
  Edit3, 
  Trash2, 
  ArrowLeft, 
  Image as ImageIcon, 
  Maximize2, 
  Settings2, 
  Share2,
  MoreHorizontal
} from "lucide-react";
import { CreateGalleryData } from "@/types/gallery";

interface GalleryDetailsViewProps {
  folder: CreateGalleryData;
  onBack: () => void;
}

const GalleryDetailsView = ({ folder, onBack }: GalleryDetailsViewProps) => {
  return (
    <div className="h-full flex flex-col bg-primary text-white">
      {/* --- TOP WORKSPACE TOOLBAR --- */}
      <div className="px-8 py-4 bg-primary/40 backdrop-blur-xl border-b border-white/5 flex justify-between items-center z-20">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-zinc-500 hover:text-[#00d26a] transition-all font-bold text-sm uppercase tracking-widest"
        >
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00d26a]/10 transition-colors">
            <ArrowLeft size={18} />
          </div>
          Back to Collections
        </button>

        <div className="flex items-center gap-3">
          <button className="p-2.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <Share2 size={20} />
          </button>
          <button className="p-2.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
            <Settings2 size={20} />
          </button>
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#00d26a] text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-tighter">
            <Plus size={18} /> Add Art
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* --- COLLECTION HERO SECTION --- */}
        <div className="relative px-12 pt-16 pb-12 flex flex-col md:flex-row gap-10 items-center md:items-start bg-gradient-to-b from-[#00d26a]/5 to-transparent">
          <div className="relative w-56 h-56 shrink-0">
             {/* Decorative Stack Effect */}
             <div className="absolute inset-0 bg-primary rounded-[3rem] rotate-6 translate-x-2" />
             <div className="absolute inset-0 bg-primary rounded-[3rem] -rotate-3 -translate-x-1" />
             
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-zinc-900 shadow-2xl group">
                <Image 
                  fill 
                  src={folder.coverImagePreview || "/placeholder.jpg"} 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="cover" 
                />
                <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Edit3 size={28} className="text-[#00d26a]" />
                </button>
             </div>
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-2xl text-center md:text-left pt-4">
             <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <h3 className="text-5xl font-black tracking-tighter text-white uppercase italic">
                  {folder.title}
                </h3>
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  Public
                </span>
             </div>
             <textarea 
               className="bg-transparent text-zinc-500 text-lg leading-relaxed outline-none focus:text-zinc-300 transition-colors resize-none border-none p-0 w-full"
               defaultValue="Manage and organize your curated artworks within this workspace. Double click to edit your collection description."
               rows={2}
             />
          </div>
        </div>

        {/* --- ARTWORK GRID --- */}
        <div className="px-12 pb-20">
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xs font-black text-zinc-600 uppercase tracking-[0.4em]">Items — 0</h4>
            <div className="flex gap-2">
               <button className="p-2 text-zinc-500 hover:text-white"><Maximize2 size={16} /></button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {/* Placeholder Empty State or Art Map */}
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-primary border border-white/5 hover:border-[#00d26a]/30 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                
                {/* Actions Overlay */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <button className="p-2.5 bg-primary backdrop-blur-md rounded-xl text-white hover:bg-red-500/80 transition-colors">
                      <Trash2 size={16}/>
                   </button>
                   <button className="p-2.5 bg-primary backdrop-blur-md rounded-xl text-white hover:bg-[#00d26a]/80 transition-colors">
                      <Edit3 size={16}/>
                   </button>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-4 left-4 z-20">
                   <p className="text-[10px] font-black text-zinc-500 uppercase">Masterpiece</p>
                   <p className="text-sm font-bold text-white tracking-tight">Untitled Art</p>
                </div>

                <div className="w-full h-full flex items-center justify-center opacity-10">
                  <ImageIcon size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetailsView;