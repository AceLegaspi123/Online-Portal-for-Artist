import { BsFillBoxSeamFill } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { VscError } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { MdWindow } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaFileAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";

const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-6 bg-black text-white min-h-screen">


            <div className="flex items-center gap-3 ">
                <BsFillBoxSeamFill className="w-10 h-10 rounded-xl bg-[#29AB87] p-2" />
                <div>
                    <h2 className="text-2xl font-semibold text-white">My Orders</h2>
                    <p className="text-gray-400">Track your artwork deliveries and confirm receipt</p>
                </div>
            </div>


            <div className="grid grid-cols-4 mt-6 gap-4">
                <div className="p-4 rounded-lg bg-[#FFB40022] border border-[#FFB400]">
                    <p className="text-lg font-bold text-[#FFB400]">1</p>
                    <p className="text-gray-300 text-sm">Preparing</p>
                </div>
                <div className="p-4 rounded-lg bg-[#0066FF22] border border-[#0066FF]">
                    <p className="text-lg font-bold text-[#0066FF]">2</p>
                    <p className="text-gray-300 text-sm">Shipping</p>
                </div>
                <div className="p-4 rounded-lg bg-[#00FF6A22] border border-[#00FF6A]">
                    <p className="text-lg font-bold text-[#00FF6A]">1</p>
                    <p className="text-gray-300 text-sm">Received</p>
                </div>
                <div className="p-4 rounded-lg bg-[#FF000022] border border-[#FF0000]">
                    <p className="text-lg font-bold text-[#FF0000]">1</p>
                    <p className="text-gray-300 text-sm">Cancelled</p>
                </div>
            </div>


            <div className="relative mt-6">
                <input
                    type="text"
                    placeholder="Search by artwork name or order ID..."
                    className="pl-12 py-3 w-full bg-[#111] text-white rounded-lg border border-gray-700 placeholder-gray-500"
                />
                <CiSearch className="absolute top-3.5 left-4 text-gray-400 text-xl" />
            </div>

            <div className="flex gap-3 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#29AB87] rounded-full text-black font-medium">
                    <MdWindow />
                    <span>All Orders</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-[#222] border border-gray-700 rounded-full text-gray-400">
                    <BsFillBoxSeamFill />
                    <span>Preparing</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-[#222] border border-gray-700 rounded-full text-gray-400">
                    <RiTruckLine />
                    <span>Shipping</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-[#222] border border-gray-700 rounded-full text-gray-400">
                    <IoMdCheckmarkCircleOutline />
                    <span>Received</span>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 bg-[#222] border border-gray-700 rounded-full text-gray-400">
                    <VscError />
                    <span>Cancelled</span>
                </div>
            </div>


            <div className="mt-10">
                <div className="flex items-center gap-2">
                    <BsFillBoxSeamFill className="text-[#29AB87]" />
                    <h2 className="font-bold text-lg">Your Orders</h2>
                    <p className="text-gray-500">(5)</p>
                </div>

                <div className="mt-4 bg-[#0d0d0d] p-6 rounded-lg border border-gray-800 shadow-lg">


                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="font-bold text-xl">Sunset Over Mountains</h2>
                            <p className="text-gray-500 text-sm">Order ID: <span className="text-white">DEL-001</span></p>
                        </div>

                        <div className="flex items-center px-3 py-1 bg-blue-600 rounded-full text-sm">
                            <RiTruckLine className="mr-1" />
                            On Shipping
                        </div>
                    </div>


                    <div className="flex gap-20 mt-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <FiUser />
                            Artist: <span className="text-white font-medium ml-1">Artist Name</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaFileAlt />
                            Reference:
                            <span className="text-white font-medium ml-1">COM-2024-001</span>
                        </div>
                    </div>


                    <div className="relative flex justify-between items-center w-full mx-auto mt-10">

                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-700 -translate-y-1/2"></div>

                        <div className="absolute top-1/2 left-[50px] right-[50%] h-[2px] bg-blue-500 -translate-y-1/2"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#FFB400] flex items-center justify-center">
                                <BsFillBoxSeamFill className="text-black" />
                            </div>
                            <p className="text-gray-300 mt-2">Preparing</p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                <RiTruckLine className="text-white" />
                            </div>
                            <p className="text-gray-300 mt-2">Shipping</p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                                <IoMdCheckmarkCircleOutline className="text-white" />
                            </div>
                            <p className="text-gray-300 mt-2">Received</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-6 bg-[#111] p-3 rounded-lg border border-gray-700">
                        <div>
                            <div className="flex gap-1 items-center text-gray-400">
                                <CiCalendar />
                                <p>Ordered</p>
                            </div>
                            <p className="text-white">Jan 15, 2024</p>
                        </div>

                        <div>
                            <div className="flex gap-1 items-center text-gray-400">
                                <IoMdTime />
                                <p>Expected</p>
                            </div>
                            <p className="text-white">Jan 25, 2024</p>
                        </div>

                        <div>
                            <div className="flex gap-1 items-center text-gray-400">
                                <IoMdCheckmarkCircleOutline />
                                <p>Received</p>
                            </div>
                            <p className="text-white">—</p>
                        </div>
                    </div>


                    <div className="w-full rounded-md mt-4 p-3 bg-[#003d26] border border-[#00ff6a55]">
                        <div className="flex items-center gap-2 text-[#00FF6A]">
                            <FaRegMessage />
                            <p>Message from Artist</p>
                        </div>
                        <p className="font-semibold mt-1 text-white">
                            Package has been shipped via express delivery. Tracking number: TRK123456789
                        </p>
                    </div>


                    <button className="w-full rounded-md mt-4 p-3 bg-[#00FF6A] text-black font-semibold hover:bg-[#00cc58] transition">
                        Confirm Received
                    </button>


                    <div className="mt-3 text-gray-500 text-right text-xs">
                        Last updated: Jan 18, 2024 at 08:00
                    </div>
                </div>
            </div>
        </div >
    );
};

export default page;
