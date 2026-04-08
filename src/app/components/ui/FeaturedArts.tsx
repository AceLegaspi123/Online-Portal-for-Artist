"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, MessageSquare, ShoppingCart } from "lucide-react";

const FeaturedArts = () => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative flex flex-col w-full bg-zinc-900/40 rounded-2xl overflow-hidden border border-white/5 hover:border-[#00d26a]/50 transition-all duration-300 shadow-xl"
    >
      {/* 1. IMAGE CONTAINER */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          fill
          alt="Artwork by Jeaven Paras"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          src={"https://i.pinimg.com/1200x/5c/86/78/5c8678d64f8db839c4ae17515b673629.jpg"}
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-red-500 transition-colors">
                <Heart size={20} className="text-white" />
            </button>
            <button className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-500 transition-colors">
                <MessageSquare size={20} className="text-white" />
            </button>
            <button className="p-2 bg-[#00d26a] rounded-full hover:scale-110 transition-transform">
                <ShoppingCart size={20} className="text-black" />
            </button>
        </div>

        {/* Price Tag Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[#00d26a] text-xs font-bold">₱4,500</span>
        </div>
      </div>

      {/* 2. ARTIST INFO SECTION */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#00d26a]">
                    <Image
                        fill
                        alt="Jeaven Paras Profile"
                        className="object-cover"
                        src={"https://i.pinimg.com/1200x/5c/86/78/5c8678d64f8db839c4ae17515b673629.jpg"}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold group-hover:text-[#00d26a] transition-colors leading-none">Jeaven Paras</h4>
                    <span className="text-[10px] text-zinc-500 font-medium">Digital Illustrator</span>
                </div>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-[#00d26a] hover:bg-[#00d26a]/10 px-2 py-1 rounded-md transition-colors">
                Follow
            </button>
        </div>

        {/* Metadata Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <div className="flex gap-3 text-[10px] text-zinc-400 font-medium">
                <p>12.3k followers</p>
                <div className="w-1 h-1 bg-zinc-700 rounded-full self-center" />
                <p>50 sold</p>
            </div>
            <div className="flex items-center gap-1">
                <Heart size={12} className="text-zinc-500" />
                <span className="text-[10px] text-zinc-500">221</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedArts;