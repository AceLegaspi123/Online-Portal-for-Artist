"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Bell, MessageSquare, 
  Home, Globe, ShoppingBag, Trophy // Added Trophy icon
} from "lucide-react";

import { usePopup } from "@/hooks/usePopup";
import { useRouter } from "next/navigation";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ProfileMenu from "../Menu/ProfileMenu";
import Notification from "@/app/components/ui/Notification";
import ChatPopUp from "../chat/ChatPopUp";
import Logo from "../ui/Logo";

export const nav_links = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/explore", icon: Globe },
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "Leaderboards", href: "/leaderboards", icon: Trophy }, // New link added
];

export default function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const router = useRouter();

  const mobileMenu = usePopup();
  const profileMenu = usePopup();

  const handleLogOut = () => {
    setIsLogin(false);
    profileMenu.close();
    router.push("/");
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-[100] border-b border-white/5 bg-primary/80 backdrop-blur-xl px-6 lg:px-12 flex items-center justify-between">
      
      {/* --- LEFT: LOGO & NAV --- */}
      <div className="flex items-center gap-12">
        <Logo />

        <nav className="hidden lg:flex items-center gap-2">
          {nav_links.map(({ label, href, icon: Icon }) => (
            <Link 
              key={label} 
              href={href}
              className="group flex items-center gap-3 px-5 py-2 rounded-xl hover:bg-white/5 transition-all"
            >
              <Icon size={18} className="text-zinc-500 group-hover:text-green-400 transition-colors" />
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* --- RIGHT: ACTIONS --- */}
      <div className="flex items-center gap-4">
        {isLogin ? (
          <>
            <div className="hidden md:flex items-center gap-2 mr-4">
              <IoChatbubbleEllipsesOutline onClick={() => setIsChatOpen(i => !i)}/>
              <button 
                  onClick={(e) => {
                      e.stopPropagation();
                      setNotificationDropdown(!notificationDropdown);
                  }}
                  className={`p-3 rounded-full transition-all relative ${notificationDropdown ? 'bg-green-400/10 text-green-400' : 'text-zinc-400'}`}
              >
                  <Bell size={20} />
              </button>
            </div>

            {/* AVATAR TOGGLE */}
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  profileMenu.toggle();
                }}
                className="relative group p-1 rounded-full border-2 border-transparent hover:border-green-400 transition-all"
              >
                <Image
                  src="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg"
                  alt="profile"
                  width={40}
                  height={40}
                  className="rounded-full h-10 w-10 object-cover"
                />
              </button>

              <AnimatePresence>
                {profileMenu.isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    ref={profileMenu.ref}
                    className="absolute top-14 right-0 z-[110]"
                  >
                    <ProfileMenu handleLogOut={handleLogOut} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-8">
            <Link href="/login" className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
              Login
            </Link>
            <Link href="/register" className="px-8 py-3 bg-green-400 text-black text-xs font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all">
              Join Studio
            </Link>
          </div>
        )}

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={mobileMenu.open}
          className="lg:hidden p-2 text-white"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* --- MOBILE DRAWER --- */}
      <AnimatePresence>
        {mobileMenu.isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={mobileMenu.close}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[120]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-secondary p-8 z-[130] flex flex-col"
            >
              <button onClick={mobileMenu.close} className="self-end mb-12"><X size={32} /></button>
              <div className="space-y-6">
                {nav_links.map(({ label, href, icon: Icon }) => (
                  <Link key={label} href={href} onClick={mobileMenu.close} className="flex items-center gap-4 text-2xl font-heading italic uppercase">
                    <Icon className="text-green-400" /> {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Notification func={setNotificationDropdown} isOpen={notificationDropdown}/>
      <ChatPopUp isOpen={isChatOpen} onClose={handleCloseChat}/>
    </header>
  );
}

const HeaderActionLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link href={href} className="p-3 rounded-full hover:bg-white/5 text-zinc-400 hover:text-green-400 transition-all">
    {icon}
  </Link>
);