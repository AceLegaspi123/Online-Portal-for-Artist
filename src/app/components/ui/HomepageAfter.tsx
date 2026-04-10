import React from 'react';
import { ChevronRight, Heart, MessageCircle, Share2, Plus } from 'lucide-react';
import FeaturedArts from "@/app/components/ui/FeaturedArts";
import Link from 'next/link';

const ModernHomepage = () => {
  return (
    <main className="min-h-screen w-full  selection:bg-[#00d26a] selection:text-black overflow-x-hidden">
      
      {/* 1. IMMERSIVE HERO SECTION (70dvh) */}
      <section className="relative w-[100dvw] h-[70dvh] flex items-center px-6 lg:px-20 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00d26a]/10 rounded-full blur-[120px] z-0" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-[#00d26a]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d26a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d26a]"></span>
              </span>
              Community Driven Platform
            </div>
            <h1 className="text-5xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Showcase Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d26a] to-emerald-400">Art</span>, Find New Opportunities
            </h1>
            <p className="light  text-lg max-w-lg leading-relaxed">
              The premier digital stage for Atimonan artists. Gain exposure, connect with clients, and grow your creative career.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-[#00d26a] cursor-pointer text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  <Plus size={20} /> Upload Artwork
                </span>
              </button>
              <button className="px-8 py-4 bg-primary border border-zinc-800 hover:bg-secondary cursor-pointer rounded-xl font-bold transition-all">
                Browse Collection
              </button>
            </div>
          </div>

          {/* Abstract Hero Art Display */}
          <div className="hidden lg:block relative h-[50dvh]">
            <div className="absolute top-0 right-0 w-64 h-80 bg-zinc-800 rounded-2xl rotate-6 border border-white/10 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
            </div>
            <div className="absolute top-20 right-40 w-64 h-80 bg-zinc-800 rounded-2xl -rotate-12 border border-white/10 shadow-2xl z-20 overflow-hidden">
                <div className="w-full h-full bg-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRENDING SECTION (30dvh) */}
      <section className=" w-full border-t border-primary-line bg-primary backdrop-blur-md px-6 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h5 className="text-3xl font-bold flex items-center gap-3">
              <span className="h-8 w-1 bg-[#00d26a] rounded-full" />
              Featured Masterpieces
            </h5>
            <div className="flex gap-4">
               {['All', 'Digital', 'Physical'].map((t) => (
                 <button key={t} className="text-xs font-semibold text-zinc-500 hover:text-[#00d26a] transition-colors uppercase tracking-widest">{t}</button>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-1 overflow-hidden">
             {/* Replace with your FeaturedArts component */}
             <FeaturedArts />
             <FeaturedArts />
             <FeaturedArts />
             <FeaturedArts />

             <FeaturedArts />
             
             <FeaturedArts />
             <FeaturedArts />
             <FeaturedArts />
          </div>
        </div>
      </section>


{/* --- 3. TOP ARTISTS (High-Profile Profile Cards) --- */}
<section className="py-20 px-6 lg:px-20 max-w-7xl mx-auto">
  <div className="flex justify-between items-end mb-10">
    <div>
      <h2 className="text-3xl font-bold mb-2">Top Creators</h2>
      <p className="light  text-sm">Most active and influential artists this month</p>
    </div>
    <Link href="/leaderboards" className="text-zinc-400 hover:text-[#00d26a] text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
      View Leaderboard <ChevronRight size={14} />
    </Link>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="group relative p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-[#00d26a]/50 transition-all hover:bg-zinc-900/50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00d26a] to-blue-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-black overflow-hidden">
                {/* Avatar Placeholder */}
                <div className="w-full h-full bg-zinc-800 animate-pulse" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#00d26a] text-black text-[10px] font-black px-1.5 py-0.5 rounded-md border-2 border-[#050505]">
              #{i}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg group-hover:text-[#00d26a] transition-colors">Jeaven Paras</h4>
            <p className="text-xs text-zinc-500 font-medium">@jeaven_dev • 1.2k Artworks</p>
          </div>
          <button className="px-4 py-2 bg-zinc-100 text-black text-xs font-bold rounded-lg hover:bg-[#00d26a] hover:text-black transition-all">
            Follow
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* --- 4. RECENTLY LIKED (Social Proof Section) --- */}
<section className="py-20 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent">
  <div className="max-w-7xl mx-auto px-6 lg:px-20">
    <div className="flex items-center gap-4 mb-12">
      <div className="p-3 bg-red-500/10 rounded-2xl text-red-500">
        <Heart size={24} fill="currentColor" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">Recently Liked</h2>
        <p className="light text-zinc-500 text-sm">What the community is loving right now</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5">
          {/* Image Placeholder */}
          <div className="absolute inset-0 bg-zinc-800 group-hover:scale-110 transition-transform duration-700" />
          
          {/* Overlay Info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-[#00d26a] uppercase mb-1">Digital Art</p>
                <h5 className="font-bold text-white">Midnight Resonance</h5>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart size={18} className="text-red-500" fill="currentColor" />
                <span className="text-[10px] font-bold">428</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 3. BENTO CATEGORIES */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold mb-4">Explore by Category</h2>
           <p className="light text-zinc-500">Discover art across multiple styles and mediums</p>
        </div>
        
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2 relative rounded-3xl bg-zinc-900 overflow-hidden group border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute bottom-8 left-8 z-20">
              <h4 className="text-2xl font-bold">Anime & Manga</h4>
              <p className="text-xs text-zinc-400">2.4k Artworks</p>
            </div>
          </div>
          <div className="col-span-2 row-span-1 relative rounded-3xl bg-zinc-900 overflow-hidden group border border-white/5">
             <div className="absolute bottom-6 left-6 z-20 text-lg font-bold">Concept Art</div>
          </div>
          <div className="col-span-1 row-span-1 relative rounded-3xl bg-zinc-900 overflow-hidden group border border-white/5">
             <div className="absolute bottom-6 left-6 z-20 text-lg font-bold">Pixel</div>
          </div>
          <div className="col-span-1 row-span-1 relative rounded-3xl bg-[#00d26a] overflow-hidden group border border-white/5">
             <div className="absolute inset-0 flex items-center justify-center text-black font-black text-2xl rotate-12">VIEW ALL</div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00d26a] to-emerald-600 rounded-[3rem] p-12 lg:p-20 text-center text-black relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ready to share your vision?</h2>
          <p className="text-black/70 font-medium mb-10 max-w-xl mx-auto text-lg">
            Join hundreds of local artists in Atimonan and start selling or showcasing your work today.
          </p>
          <button className="px-10 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform">
            Create Your Profile
          </button>
        </div>
      </section>

    </main>
  );
};

export default ModernHomepage;