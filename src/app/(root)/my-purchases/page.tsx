import { LuShoppingBag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMdCard } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaPaperclip } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const page = () => {
    return (
        <div className="p-4 mx-auto max-w-4xl">
            <h2>My Purchases</h2>
            <p>View all purchases artworks and commissions</p>

            <div className="flex justify-between mt-8 mb-4 gap-4">

                <div className="border-l-3 border-indigo-500 shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Total Purchases
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Shop Purchases
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Commissions
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            6
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Digital Arts
                    </p>
                </div>

                <div className="border-l-3 border-indigo-500 shadow-md shadow-indigo-500/25  border-l-indigo-500 p-3 rounded-lg w-full gap-2">
                    <div className="flex gap-2 items-center">
                        <LuShoppingBag className="w-5 h-5 rounded-md bg-[#29AB87] p-1" />
                        <p className="text-lg font-bold">
                            $1,600
                        </p>
                    </div>
                    <p className="relative left-7 text-[10px]">
                        Total Spent
                    </p>
                </div>
            </div>


            <div className="flex gap-4 mt-8">

                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search by artwork name, artwork, or order ID..."
                        className="pl-12 py-3 w-full text-white rounded-lg border border-gray-700 placeholder-gray-500"
                    />
                    <CiSearch className="absolute top-3.5 left-4 text-gray-400 text-xl" />
                </div>

                <div className="w-45 pl-1 py-3 text-white rounded-lg border border-gray-700 placeholder-gray-500">
                    <select className="opacity-50 font-thin outline-none" name="All types" id="all types">
                        <option value="all types">All types</option>
                        <option value="all types">All types</option>
                        <option value="all types">All types</option>
                        <option value="all types">All types</option>
                    </select>
                </div>

                <div className="w-45 pl-1 py-3 text-white rounded-lg border border-gray-700 placeholder-gray-500">
                    <select className="opacity-50 font-thin outline-none" name="All Delivery" id="all delivery">
                        <option value="all delivery">All Delivery</option>
                        <option value="all delivery">All Delivery</option>
                        <option value="all delivery">All Delivery</option>
                        <option value="all delivery">All Delivery</option>
                    </select>
                </div>

                <div className="w-45 pl-1 py-3 text-white rounded-lg border border-gray-700 placeholder-gray-500">
                    <select className="opacity-50 font-thin outline-none" name="All Status" id="all status">
                        <option value="all status">All Status</option>
                        <option value="all status">All Status</option>
                        <option value="all status">All Status</option>
                        <option value="all status">All Status</option>
                    </select>
                </div>

            </div>


            <div className="border mt-8">
                <div className="p-4 flex gap-2 ">

                    <img src="https://i.pinimg.com/736x/5c/a9/32/5ca93225a5fb4b5d36d68dfb266c3132.jpg" alt="avatar" className="h-14 w-14 rounded-full" />

                    <div>
                        <div className="flex gap-150">
                            <h2>Alex Morgan</h2>
                            <div className="border rounded-xl w-14 text-center bg-[#00FF6A22] border border-[#00FF6A]">
                                <p className="text-[#00FF6A] font-bold opacity-50">Shop</p>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-1">
                            <div className="border rounded-xl w-14 text-center bg-[#00FF6A22] border border-[#00FF6A]">
                                <p className="text-[#00FF6A] font-bold opacity-50">Paid</p>
                            </div>

                            <div className="border rounded-xl w-24 text-center bg-[#00FF6A22] border border-[#00FF6A]">
                                <p className="text-[#00FF6A] font-bold opacity-50">Delivered</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="p-4">
                    <h2 className="">
                        Fantasy Character Portrait
                    </h2>

                    <hr className="opacity-50 mt-4" />
                </div>

                <div className="flex justify-between px-4 pb-2 opacity-50">
                    <div className="flex gap-2 items-center">
                        <IoMdCard />
                        <p>Gcash</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <IoMdCard />
                        <p>Physical Delivery</p>
                    </div>
                </div>

                <div className="flex mt-4 justify-between px-4 pb-2">
                    <div className="flex gap-2 items-center">
                        <CiCalendar />
                        <p className="opacity-50">November 12, 2025</p>
                    </div>
                    <div>
                        <p className="text-[#00FF6A] font-bold">$120.00</p>
                    </div>
                </div>

                <div className="relative left-4 mt-6">
                    <p className="p-2 bg-[#1D2939] w-50 opacity-50 rounded-md">ID:PUR-1241EWASD</p>
                </div>

                <div className="relative left-4 mt-6">
                    <p className="p-2 bg-[#1D2939] opacity-50 rounded-md">"Handle with care - framed artwork"</p>
                </div>

                <div className="relative left-4 mt-6">
                    <p className="p-2 opacity-50">Completed: December 1, 2025</p>
                </div>

                <div className="border relative left-4 mt-6 opacity-50 rounded-md w-30">
                    <div className="flex gap-2 items-center p-2">
                        <FaPaperclip />
                        <p>Reciept</p>
                        <BsBoxArrowUpRight />
                    </div>
                </div>

                

            </div>

        </div>
    )
}

export default page