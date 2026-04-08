"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Moon, Sun, LogOut, ShoppingBag, 
  User, Settings, ChevronRight, Monitor
} from "lucide-react";

import { LOGGED_IN_USER_ID } from "@/lib/auth";
import UserProfile from "@/data/user_profile.json";
import credentials from "@/data/credentials.json";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ProfileMenuProps {
  handleLogOut: () => void;
}

type Theme = "light" | "dark";

const ProfileMenu = ({ handleLogOut }: ProfileMenuProps) => {
  const owner = UserProfile.find((user) => user.id === LOGGED_IN_USER_ID);
  const credential = credentials.find(
    (cred) => cred.account_id === owner?.account_id
  );

  const { value: theme, setValue: setTheme } = useLocalStorage<Theme>("theme", "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  // Fixed System Preference Detection
  useEffect(() => {
    if (typeof window === "undefined" || localStorage.getItem("theme")) return;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, [setTheme]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-[320px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-primary backdrop-blur-2xl shadow-2xl">
        
        {/* --- TOP PROFILE SECTION --- */}
        <div className="p-8 pb-6 flex flex-col items-center border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="relative mb-4 group">
            <div className="absolute inset-0 bg-green-400 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <Link href={`/profile/${owner?.id}`} className="relative block">
              <div className="rounded-full p-1 bg-gradient-to-tr from-green-400 to-emerald-600">
                <Image
                  width={80}
                  height={80}
                  src="https://i.pinimg.com/1200x/95/cf/0b/95cf0b0894ac9afdb1ebc3c486a2b0ca.jpg"
                  alt="user profile"
                  className="h-20 w-20 rounded-full bg-primary object-cover border-2 border-black"
                />
              </div>
            </Link>
          </div>

          <h1 className="text-xl font-heading italic uppercase tracking-tighter ">
            {owner?.first_name} {owner?.last_name}
          </h1>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
            {credential?.gmail}
          </p>
        </div>

        {/* --- MENU ACTIONS --- */}
        <div className="p-4 space-y-1">
          <MenuLink href={`/profile/${owner?.id}`} icon={<User size={16}/>} label="My Portfolio" />
          <MenuLink href="/my-purchases" icon={<ShoppingBag size={16}/>} label="Purchases" />
          
          <div className="h-px bg-white/5 my-2 mx-4" />

          {/* --- THEME SWITCHER (MODERN SLIDER) --- */}
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-zinc-400">
              <Sun size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Theme</span>
            </div>
            
            <div className="flex bg-black/40 p-1 rounded-full border border-white/5 relative isolate">
              <motion.div 
                animate={{ x: theme === 'light' ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute inset-y-1 left-1 w-8 bg-green-400 rounded-full -z-10"
              />
              <button 
                onClick={() => setTheme("light")}
                className={`p-1.5 rounded-full transition-colors ${theme === 'light' ? 'text-black' : 'text-zinc-500'}`}
              >
                <Sun size={14} />
              </button>
              <button 
                onClick={() => setTheme("dark")}
                className={`p-1.5 rounded-full transition-colors ${theme === 'dark' ? 'text-black' : 'text-zinc-500'}`}
              >
                <Moon size={14} />
              </button>
            </div>
          </div>

          <div className="px-4 py-3 flex items-center justify-between group cursor-pointer hover:bg-white/5 rounded-2xl transition-all">
            <div className="flex items-center gap-3 text-zinc-400">
              <Monitor size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Browsing</span>
            </div>
            <span className="text-[10px] font-black text-green-400 bg-green-400/10 px-2 py-0.5 rounded-md">PRO</span>
          </div>

          {/* --- LOGOUT --- */}
          <button
            onClick={handleLogOut}
            className="w-full flex items-center gap-3 px-4 py-4 mt-2 text-red-400 hover:bg-red-500/10 rounded-[1.5rem] transition-all group"
          >
            <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Sub-component for cleaner code
const MenuLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link 
    href={href} 
    className="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 transition-all group"
  >
    <div className="flex items-center gap-3 text-zinc-400 group-hover:text-white transition-colors">
      {icon}
      <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
    </div>
    <ChevronRight size={14} className="text-zinc-700 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
  </Link>
);

export default ProfileMenu;