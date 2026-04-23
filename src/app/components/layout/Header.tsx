"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Bell, 
  Home, Globe, ShoppingBag, Trophy 
} from "lucide-react";

import { usePopup } from "@/hooks/usePopup";
import { useRouter } from "next/navigation";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ProfileMenu from "../Menu/ProfileMenu";
import Notification from "@/app/components/ui/Notification";
import ChatPopUp from "../chat/ChatPopUp";
import Logo from "../ui/Logo";
import { getSession, deleteSession } from "@/app/actions/auth";

export const nav_links = [
  { label: "Home", href: "/", icon: Home },
  { label: "Explore", href: "/explore", icon: Globe },
  { label: "Shop", href: "/shop", icon: ShoppingBag },
  { label: "Leaderboards", href: "/leaderboards", icon: Trophy },
];

export default function Header() {
  const [session, setSession] = useState<any>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const router = useRouter();

  const mobileMenu = usePopup();
  const profileMenu = usePopup();

  const handleLogOut = async () => {
    await deleteSession();
    setIsLogin(false);
    setSession(null);
    profileMenu.close();
    router.push("/");
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await getSession();
        if (data) {
          setSession(data);
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (error) {
        console.error("Session check failed:", error);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-[100] border-b border-white/5 bg-primary/80 backdrop-blur-xl px-6 lg:px-12 flex items-center justify-between">
      
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

      <div className="flex items-center gap-4">
        {!loading && (
          <>
            {isLogin ? (
              <>
                <div className="hidden md:flex items-center gap-2 mr-4">
                  <button onClick={() => setIsChatOpen(i => !i)} className="p-3 text-zinc-400 hover:text-green-400 transition-colors">
                    <IoChatbubbleEllipsesOutline size={22}/>
                  </button>
                  <button 
                      onClick={(e) => { e.stopPropagation(); setNotificationDropdown(!notificationDropdown); }}
                      className={`p-3 rounded-full transition-all relative ${notificationDropdown ? 'bg-green-400/10 text-green-400' : 'text-zinc-400'}`}
                  >
                      <Bell size={20} />
                  </button>
                </div>

                <div className="relative">
                  <button 
                    onClick={(e) => { e.stopPropagation(); profileMenu.toggle(); }}
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
          </>
        )}

        <button onClick={mobileMenu.open} className="lg:hidden p-2 text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer and Popups remain the same */}
      <Notification func={setNotificationDropdown} isOpen={notificationDropdown}/>
      <ChatPopUp isOpen={isChatOpen} onClose={() => setIsChatOpen(false)}/>
    </header>
  );
}