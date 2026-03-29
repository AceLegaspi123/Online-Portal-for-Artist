"use client";

import React, { useState } from 'react';
import { Heart, ArrowUpRight, Filter, Trash2, LayoutGrid, List } from 'lucide-react';
import { motion } from 'framer-motion';

const LIKED_ARTS = [
  { id: 1, title: "Midnight Resonance", artist: "Jeaven Paras", date: "MAR 2026", cat: "Digital", color: "from-blue-500" },
  { id: 2, title: "Golden Hour", artist: "Aimee Uy", date: "FEB 2026", cat: "Physical", color: "from-orange-500" },
  { id: 3, title: "Cyber Manila", artist: "Elvis Uy", date: "JAN 2026", cat: "Digital", color: "from-emerald-500" },
  { id: 4, title: "Barangay Mornings", artist: "Eric Unahan", date: "JAN 2026", cat: "Sketch", color: "from-zinc-500" },
];

const LikedArchive = () => {
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  return (
    <main className="min-h-screen pt-20 pb-20 px-6 lg:px-16 selection:bg-green-400 selection:text-black">
      <div className="max-w-[1600px] mx-auto">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="relative">
            <div className="flex items-center gap-3 text-green-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
              <Heart size={14} fill="currentColor" /> Curated Collection
            </div>
            <h1 className="text-8xl font-heading italic uppercase leading-[0.8] tracking-tighter">
              Personal <br /> <span className="text-green-400">Archive</span>
            </h1>
          </div>

          <div className="flex items-center gap-6">
            {/* --- INTERACTIVE VIEW SWITCHER --- */}
            <div className="relative flex bg-secondary p-1 rounded-xl border border-white/5 isolate">
              <motion.div
                initial={false}
                animate={{ x: view === 'grid' ? 0 : '100%' }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-green-400 rounded-lg -z-10 shadow-[0_0_20px_rgba(74,222,128,0.4)]"
              />
              <button 
                onClick={() => setView('grid')} 
                className={`relative p-3 w-12 flex justify-center items-center rounded-lg transition-colors duration-200 ${view === 'grid' ? 'text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setView('list')} 
                className={`relative p-3 w-12 flex justify-center items-center rounded-lg transition-colors duration-200 ${view === 'list' ? 'text-black' : 'text-zinc-500 hover:text-white'}`}
              >
                <List size={18} />
              </button>
            </div>

            <button className="group flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-red-500/50 transition-all">
              <Trash2 size={18} className="group-hover:text-red-500 transition-colors" />
              <span className="text-xs font-black uppercase tracking-widest">Clear Archive</span>
            </button>
          </div>
        </div>

        {/* --- THE ARCHIVE GRID/LIST --- */}
        <div className={`grid gap-1 transition-all duration-500 ${
          view === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4' 
          : 'grid-cols-1'
        }`}>
          {LIKED_ARTS.map((art, i) => (
            <div 
              key={art.id} 
              className={`group relative overflow-hidden bg-secondary border border-white/5 transition-all duration-500 ${
                view === 'grid' ? 'aspect-[3/4]' : 'h-24 flex items-center px-8'
              }`}
            >
              {/* Image / Background Layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${art.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
              
              {/* Content Layer */}
              <div className={`relative z-10 flex w-full transition-all ${
                view === 'grid' ? 'absolute inset-0 p-8 flex-col justify-between' : 'flex-row items-center justify-between'
              }`}>
                
                {/* Meta & Heart (Top in Grid, Left-ish in List) */}
                <div className={`flex items-center ${view === 'grid' ? 'justify-between' : 'gap-8 w-1/4'}`}>
                  <span className="font-mono text-[10px] text-zinc-500">{art.date}</span>
                  <div className={`rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md transition-all ${
                    view === 'grid' 
                    ? 'h-10 w-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0' 
                    : 'h-8 w-8 opacity-100'
                  }`}>
                    <Heart size={14} className="text-red-500" fill="currentColor" />
                  </div>
                </div>

                {/* Info Section */}
                <div className={`flex ${view === 'grid' ? 'flex-col' : 'flex-1 flex-row items-center justify-between px-10'}`}>
                  <div>
                    <p className="text-green-400 font-mono text-[10px] uppercase tracking-widest mb-1">{art.cat}</p>
                    <h3 className={`font-heading italic uppercase leading-none transition-all duration-500 ${
                      view === 'grid' ? 'text-3xl group-hover:tracking-wider' : 'text-xl'
                    }`}>
                      {art.title}
                    </h3>
                  </div>
                  
                  <div className={`flex items-center transition-all ${
                    view === 'grid' 
                    ? 'justify-between pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0' 
                    : 'opacity-100 translate-y-0'
                  }`}>
                    <span className="text-xs font-bold text-zinc-400">BY {art.artist}</span>
                    {view === 'grid' && <ArrowUpRight size={20} className="text-green-400" />}
                  </div>
                </div>

                {view === 'list' && (
                   <button className="p-3 bg-white/5 rounded-xl hover:bg-green-400 hover:text-black transition-all">
                      <ArrowUpRight size={18} />
                   </button>
                )}
              </div>

              {/* Decorative Number (Only visible in Grid) */}
              {view === 'grid' && (
                <span className="absolute -bottom-10 -right-5 text-[12rem] font-heading italic text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                  0{i + 1}
                </span>
              )}
            </div>
          ))}

          {/* DISCOVER MORE CARD */}
          <div className={`border border-dashed border-white/10 flex items-center justify-center group cursor-pointer hover:bg-green-400/5 transition-colors ${
             view === 'grid' ? 'aspect-[3/4] flex-col' : 'h-24 gap-4'
          }`}>
             <div className={`rounded-full border border-white/10 flex items-center justify-center group-hover:border-green-400 transition-colors ${
               view === 'grid' ? 'w-16 h-16 mb-4' : 'w-10 h-10'
             }`}>
               <Filter size={view === 'grid' ? 24 : 16} className="text-zinc-600 group-hover:text-green-400" />
             </div>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-green-400">Discover More</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default LikedArchive;