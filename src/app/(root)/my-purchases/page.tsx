import { LuShoppingBag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoMdCard } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaPaperclip } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-6 text-white min-h-screen">
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

                <div className="w-45 pl-1 py-3 text-white rounded-lg border border-gray-700">
                    <select className="opacity-50 font-thin outline-none" name="All types" id="all types">
                        <option value="all types">All types</option>
                        <option value="shop">Shop</option>
                        <option value="commission">Commission</option>
                    </select>
                </div>

                <div className="w-45 pl-1 py-3 text-white rounded-lg border border-gray-700 placeholder-gray-500">
                    <select className="opacity-50 font-thin outline-none" name="All Delivery" id="all delivery">
                        <option value="all delivery">All Delivery</option>
                        <option value="digital">Digital</option>
                        <option value="physical">Physical</option>
                    </select>
                </div>

                <div className="w-45 pl-1 py-3 text-white rounded-lg border border-gray-700 placeholder-gray-500">
                    <select className="opacity-50 font-thin outline-none" name="All Status" id="all status">
                        <option value="all status">All Status</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                        <option value="refunded">Refunded</option>
                        <option value="failed">Failed</option>
                    </select>
                </div>

            </div>


            <div className="border mt-8">
                <div className="flex justify-between p-4 bg-[#222] gap-4">
                    <div className="flex border w-[50%]">
                        <div>
                            <p>Hello</p>
                        </div>

                        <div>
                            <p>There</p>
                        </div>
                    </div>


                    <div className="flex border w-[50%]">
                        <div>
                            <p>Hello</p>
                        </div>

                        <div>
                            <p>There</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page