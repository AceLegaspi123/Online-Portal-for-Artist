"use client";
import Image from "next/image"
import { IoClose } from "react-icons/io5";

interface CommissionModalProps {
    modal: boolean;
    modalFunc: React.Dispatch<React.SetStateAction<boolean>>;
  }

const CommissionModal = ({modal, modalFunc}: CommissionModalProps) => {
  return (
    <section className={` ${modal ? "visible mt-4 opacity-100" : "invisible mt-0 opacity-0 none"} transition-all duration-400 ease-in-out z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary border-1 border-slate-100 w-full max-w-150`}>
        <div className="flex justify-between items-center gap-4">
            <div className="flex gap-4">
                <Image
                    src="/"
                    width={40}
                    height={40}
                    alt="profile"
                    className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                    <p>From </p>
                    <p className="text-2xl font-semibold">Alex Morgan</p>
                </div>
            </div>

            <p className="bg-orange-400 text-orange-600 text-xs rounded-full py-1 px-4">Pending </p>
            <IoClose 
                onClick={() => modalFunc(i => !i)}
                className="absolute top-2 right-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-100 ease-in"/>
        </div>

        <h3 className="text-3xl font-semibold">Fantasy Character Portrait</h3>

        
    </section>
  )
}

export default CommissionModal
