'use client'
import classNames from 'clsx';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChatArea from '@/app/components/ui/ChatArea';
import Logo from '../components/ui/Logo';

const navLinks = [
  { href: "/messages", label: "Messages" },
  { href: "/my-art-request", label: "My Art Request" },
  { href: "/art-request-receive", label: "Art Request Receive" },
]

const Messages = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="h-screen flex flex-col bg-primary">
      <div className="flex p-2 flex-1 w-full max-w-[1980px] w-full mx-auto px-4 md:px-20 gap-6">
        
        {/* Sidebar */}
        <section className="h-[97vh] flex flex-col w-full md:w-[35%] bg-background border-r border-background rounded-xl p-4">
          {/* Search */}
          <div className='flex justify-between items-center'>
                      <h1 className="font-bold text-green-500 text-3xl md:text-4xl px-6 py-4">
            Messages
          </h1>
            <Logo />
          </div>

          <div className="relative bg-background flex items-center px-4 py-3 rounded-md">
            <HiOutlineMagnifyingGlass className="absolute left-6 text-xl opacity-70" />
            <input
              type="text"
              placeholder="Search Messages"
              className="w-full pl-10 pr-4 bg-primary py-4 rounded-md outline-none"
            />
          </div>

          {/* Nav Links */}
          <div className="flex justify-between text-sm mt-4 gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={classNames(
                  'px-4 py-2 rounded-md w-full text-center transition text-nowrap',
                  {
                    'bg-green-500 text-white font-medium': pathname === href,
                    'hover:bg-green-50 hover:text-black': pathname !== href,
                  }
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Conversation List */}
          <div className="flex flex-col gap-2 overflow-y-auto mt-4 h-[70vh]">
            {children}
          </div>
        </section>

        {/* Chat Area */}
        <section className="hidden md:flex flex-1 w-full">
          <ChatArea />
        </section>
      </div>
    </div>
  )
}

export default Messages
