'use client';
import classNames from 'clsx';

import { FiSettings, FiMaximize2, FiX } from "react-icons/fi";

interface NotificationPopupProps {
    func: (value: boolean) => void;
    isOpen: boolean;
}

const NotificationPopup = ({func, isOpen} : NotificationPopupProps) => {
    return (
        <div className={classNames('fixed flex z-40 inset-0 rounded-lg', {
            'block': isOpen,
            'hidden': !isOpen
        })}>
            <div onClick={() => func(false)} className={classNames('h-full w-[80%] bg-black opacity-50', {
                
            })}>

            </div>

            {/* Header */}
            <div className="w-[20%] relative bg-background h-full">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Notifications</h2>

                    <div className="flex items-center gap-3 text-gray-500">
                        <FiMaximize2 className="cursor-pointer" />
                        <FiX onClick={() => func(false)} className="cursor-pointer" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center justify-between px-4 py-2 border-b">
                    <div className="flex gap-4 text-sm">
                        <button className="font-semibold text-black">
                            All <span className="ml-1 rounded bg-gray-200 px-2 py-0.5 text-xs">7</span>
                        </button>
                        <button className="text-gray-500">Unread</button>
                        <button className="text-gray-500">Mentions</button>
                    </div>

                    <FiSettings className="text-gray-500 cursor-pointer" />
                </div>

                {/* Notification List */}
                <div className="divide-y">

                    {/* Item 1 */}
                    <div className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-primary" />

                        <div className="flex-1 text-sm">
                            <p className="font-medium">
                                Wade Warren added new lead Brooklyn Simmons
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                12 min ago · Lead
                            </p>
                        </div>

                        <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-primary" />

                        <div className="flex-1 text-sm">
                            <p className="font-medium">
                                Esther Howard added new lead Leslie Alexander
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                12 min ago · Lead
                            </p>
                        </div>

                        <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default NotificationPopup;
