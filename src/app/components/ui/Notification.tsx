'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSettings, FiMoreHorizontal, FiCircle } from "react-icons/fi";
import Modal from "./Modal"; // Ensure the path is correct

interface NotificationPopupProps {
    func: (value: boolean) => void;
    isOpen: boolean;
}

const NotificationPopup = ({ func, isOpen }: NotificationPopupProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Modal 
                    isOpen={isOpen} 
                    onClose={() => func(false)} 
                    // This positioning makes it "hang" from the header area
                    className="absolute top-20 right-6 w-full max-w-[420px] md:w-[420px] z-[110]"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        // Prevent clicks inside the menu from closing the modal
                        onClick={(e) => e.stopPropagation()}
                        className="flex flex-col w-full max-h-[calc(100vh-120px)] bg-background text-foreground border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
                    >
                        {/* --- HEADER --- */}
                        <div className="px-5 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold ">Notifications</h2>
                            <div className="flex gap-1">
                                <button className="p-2 hover:bg-white/10 rounded-full text-zinc-400 transition-colors">
                                    <FiMoreHorizontal size={20} />
                                </button>
                            </div>
                        </div>

                        {/* --- FILTER TABS --- */}
                        <div className="px-5 pb-2 flex gap-2">
                            <button className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold">
                                All
                            </button>
                            <button className="px-4 py-1.5 rounded-full hover:bg-white/5 text-zinc-400 text-sm font-semibold transition-colors">
                                Unread
                            </button>
                        </div>

                        {/* --- LIST --- */}
                        <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                            <div className="px-5 py-2 flex items-center justify-between">
                                <span className="text-sm font-semibold ">New</span>
                                <button className="text-xs text-green-400 hover:bg-green-400/5 px-2 py-1 rounded">See all</button>
                            </div>

                            <NotificationItem 
                                name="Wade Warren" 
                                msg="tagged you in a comment." 
                                time="2m" 
                                unread 
                                img="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg"
                            />
                            <NotificationItem 
                                name="LGU Atimonan" 
                                msg="updated the Citizen Database schema." 
                                time="45m" 
                                unread 
                                icon={<FiSettings className="text-blue-400" />}
                            />
                            
                            <div className="px-5 mt-4 mb-2 flex items-center justify-between">
                                <span className="text-sm font-semibold text-zinc-500">Earlier</span>
                            </div>

                            <NotificationItem 
                                name="System" 
                                msg="Your weekly design report is ready for review." 
                                time="1d" 
                                img="https://i.pinimg.com/1200x/95/cf/0b/95cf0b0894ac9afdb1ebc3c486a2b0ca.jpg"
                            />
                        </div>

                        <div className="p-3 border-t border-white/5 text-center">
                            <button className="text-sm font-semibold text-green-400 hover:underline">
                                View previous notifications
                            </button>
                        </div>
                    </motion.div>
                </Modal>
            )}
        </AnimatePresence>
    );
};

const NotificationItem = ({ name, msg, time, unread, img, icon }: any) => (
    <div className="px-2 py-1">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
            <div className="relative shrink-0">
                {img ? (
                    <img src={img} className="w-14 h-14 rounded-full object-cover" alt="" />
                ) : (
                    <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center">
                        {icon}
                    </div>
                )}
                {unread && (
                    <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-500 rounded-full border-4 border-zinc-900" />
                )}
            </div>

            <div className="flex-1 min-w-0">
                <p className={`text-sm leading-snug ${unread ? ' font-semibold' : 'text-zinc-400'}`}>
                    <span className="font-bold">{name}</span> {msg}
                </p>
                <span className={`text-xs ${unread ? 'text-green-400 font-bold' : 'text-zinc-500'}`}>{time}</span>
            </div>

            {unread && (
                <div className="shrink-0 text-green-500">
                    <FiCircle size={12} fill="currentColor" />
                </div>
            )}
        </div>
    </div>
);

export default NotificationPopup;