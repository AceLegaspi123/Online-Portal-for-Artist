"use client";

import React, { useState } from 'react';
import { 
  Users, Palette, ShoppingBag, 
  ArrowUpRight, Zap, Target, 
  TrendingUp, Award 
} from "lucide-react";

const CREATORS = [
  { id: 1, name: "Jeaven Paras", handle: "@jeaven_dev", created: 124, sold: 98, followers: "1.2k", category: "Digital Art" },
  { id: 2, name: "Aimee Uy", handle: "@aimee_zumba", created: 89, sold: 45, followers: "850", category: "Physical Art" },
  { id: 3, name: "Elvis Uy", handle: "@mayor_elvis", created: 56, sold: 52, followers: "2.5k", category: "Digital Art" },
  { id: 4, name: "Eric Unahan", handle: "@punong_baranggay", created: 34, sold: 12, followers: "420", category: "Physical Art" },
];

const LeaderboardsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Digital Art", "Physical Art"];

  const filteredCreators = filter === "All" 
    ? CREATORS 
    : CREATORS.filter(c => c.category === filter);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-12 -mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="relative">
            <div className="flex items-center gap-2 text-green-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-3">
              <Zap size={14} fill="currentColor" /> Ecosystem Rankings
            </div>
            <h1 className="text-7xl font-black tracking-tighter uppercase italic leading-none">
              Top <span className="text-green-400">Elite</span>
            </h1>
            <div className="absolute -left-4 top-0 w-1 h-full bg-green-400/20 hidden md:block" />
          </div>

          {/* NEON TAB SWITCHER */}
          <div className="flex bg-secondary border border-white/5 p-1 rounded-2xl shadow-2xl backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                  filter === cat 
                  ? "bg-green-400 text-black shadow-[0_0_25px_rgba(74,222,128,0.4)]" 
                  : "text-zinc-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- THE ELITE CARDS (Top 3 Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredCreators.slice(0, 3).map((creator, index) => (
            <div 
              key={creator.id}
              className={`relative group p-1 rounded-[2.5rem] transition-all duration-500 ${
                index === 0 ? 'bg-gradient-to-br from-green-400 to-transparent' : 'bg-white/5'
              }`}
            >
              <div className="bg-secondary h-full rounded-[2.4rem] p-8 overflow-hidden relative">
                {/* Ranking Watermark */}
                <span className="absolute -right-4 -top-4 text-9xl font-black italic opacity-5 group-hover:opacity-10 transition-opacity">
                  0{index + 1}
                </span>

                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-20 h-20 rounded-[1.8rem] bg-primary border border-white/10 flex items-center justify-center text-3xl font-black text-green-400 group-hover:scale-110 transition-transform shadow-2xl">
                      {creator.name[0]}
                    </div>
                    <div className="flex flex-col items-end">
                      <Award className={index === 0 ? "text-green-400" : "text-zinc-700"} size={32} />
                      <span className="text-[10px] font-black text-zinc-600 mt-2 uppercase tracking-tighter">Verified Creator</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black group-hover:text-green-400 transition-colors uppercase italic">{creator.name}</h3>
                    <p className="text-zinc-500 font-mono text-xs">{creator.handle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                    <div>
                      <p className="text-[10px] font-black text-zinc-600 uppercase mb-1">Created</p>
                      <p className="text-xl font-bold font-mono">{creator.created}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-600 uppercase mb-1">Network</p>
                      <p className="text-xl font-bold font-mono text-green-400">{creator.followers}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODERN FEED LIST --- */}
        <div className="bg-secondary/20 border border-white/5 rounded-[2.5rem] p-4 md:p-8 backdrop-blur-sm">
          <div className="space-y-3">
            {filteredCreators.map((creator, index) => {
              const salesPercentage = Math.round((creator.sold / creator.created) * 100);
              
              return (
                <div 
                  key={creator.id}
                  className="group flex flex-col lg:flex-row items-center gap-8 p-6 rounded-3xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all"
                >
                  <div className="flex items-center gap-6 w-full lg:w-1/3">
                    <span className="font-mono text-zinc-700 text-lg font-black italic group-hover:text-green-400 transition-colors">#{index + 1}</span>
                    <div className="w-12 h-12 rounded-xl bg-primary border border-white/10 flex items-center justify-center font-bold text-green-400">
                      {creator.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-none">{creator.name}</h4>
                      <p className="text-xs text-zinc-600 mt-1 uppercase tracking-widest">{creator.category}</p>
                    </div>
                  </div>

                  {/* MINI DATA VIZ */}
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10 w-full">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                        <span>Sales Velocity</span>
                        <span className="text-green-400">{salesPercentage}%</span>
                      </div>
                      <div className="h-1 bg-primary rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 shadow-[0_0_10px_#4ade80]" style={{ width: `${salesPercentage}%` }} />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-zinc-400"><Target size={16} /></div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-600 uppercase">Volume</p>
                        <p className="text-sm font-bold font-mono">{creator.sold} Sold</p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-zinc-400"><TrendingUp size={16} /></div>
                      <div>
                        <p className="text-[10px] font-black text-zinc-600 uppercase">Followers</p>
                        <p className="text-sm font-bold font-mono text-green-400">{creator.followers}</p>
                      </div>
                    </div>
                  </div>

                  <button className="p-4 bg-white/5 rounded-2xl text-zinc-600 group-hover:bg-green-400 group-hover:text-black transition-all">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LeaderboardsPage;