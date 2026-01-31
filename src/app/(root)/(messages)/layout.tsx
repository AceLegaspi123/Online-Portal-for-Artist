'use client'
import classNames from 'clsx';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ChatArea from '@/app/components/ui/ChatArea';
import Logo from '@/app/components/ui/Logo';

const navLinks = [
    { href: "/messages", label: "Messages" },
    { href: "/my-art-request", label: "My Art Request" },
    { href: "/art-request-receive", label: "Art Request Receive" },
]

const Messages = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <div className='h-[100vh] overflow-hidden mt-10 '>
            <h1 className='font-bold text-green-500 text-4xl ml-20 mb-5'>Messages</h1>
            <div className="max-md:block flex gap-5 w-full max-w-[3890px] px-5 md:px-20 mx-auto">
                <section className="max-md:w-full flex border-r-1 flex-col gap-4 w-[40%] px-4 bg-primary border-background md:py-6 rounded-xl">
                    <div className="relative bg-background flex items-center justify-between gap-2 px-4 py-4 rounded-md cursor-pointer rounded-lg w-full">
                        <input type="text" placeholder="Search Messages" className="w-full px-4 pl-8 outline-none" />
                        <HiOutlineMagnifyingGlass className="absolute top-5 left-4 text-xl opacity-70" />
                    </div>

                    <div className="flex gap-8 justify-between text-sm">
                        {
                            navLinks.map(({ href, label }) => (
                                <Link key={label} href={href} className={classNames('text-nowrap px-4 py-2 rounded-md hover:bg- transition w-full text-center', {
                                    'bg-green-500 font-medium': pathname === href
                                })}>{label}</Link>
                            ))
                        }
                    </div>

                    <div className='flex flex-col gap-2 overflow-y-auto h-[70vh]'>
                        {children}
                    </div>
                </section>

                <section className="max-md:hidden w-full h-500 ">
                    <ChatArea />
                </section>
            </div>
        </div>
    )
}

export default Messages