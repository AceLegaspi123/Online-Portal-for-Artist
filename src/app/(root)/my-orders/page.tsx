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

        <div className="  max-w-screen-lg mx-auto p-3 ">
            <div className="flex items-center gap-3 ">
                <BsFillBoxSeamFill className="w-8 rounded-lg bg-[#32CD32] p-2   h-8 " />
                <div>

                    <h2 className="text-bold text-xl">My Orders</h2>
                    <p>Track your artwork deliveries and confirm receipt</p>

                </div>
            </div>


            <div className="flex  mt-4 gap-3  justify-between ">
                <div className=" w-60 p-2 bg-[#FFDF00] opacity-75  rounded-md ">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <p className="font-bold">1</p>
                            <p className="text-xs">Preparing</p>
                        </div>
                        <BsFillBoxSeamFill className="w-5 h-5" />
                    </div>

                </div>

                <div className=" w-60 p-2 rounded-md bg-blue-500 opacity-75 ">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold">2</p>
                            <p className="text-xs">Shipping</p>
                        </div>
                        <RiTruckLine className="w-5 h-5" />
                    </div>
                </div>

                <div className=" w-60 p-2 rounded-md bg-green-500 opacity-75 ">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold">3</p>
                            <p className="text-xs">Recieved</p>
                        </div>
                        <IoMdCheckmarkCircleOutline className="w-5 h-5" />
                    </div>

                </div>



                <div className=" w-60 p-2 rounded-md bg-red-500 opacity-75 ">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold">4</p>
                            <p className="text-xs">Cancelled</p>
                        </div>
                        <VscError className="w-5 h-5" />
                    </div>
                </div>

            </div>
            <div className='relative mt-8  rounded-md'>
                <input
                    type="text"
                    placeholder='Search by artwork name or order ID...'
                    className='pl-15 h-[5vh] text-white w-full bg-primary rounded-md'
                />
                <CiSearch className=' items-center absolute top-4 left-5' />
            </div>


            <div className="gap-2 flex mt-6 ">

                <div className=" items-center flex  w-25 text-center p-1 w-30 gap-2 rounded-xl p-2 bg-[#29AB87] ">
                    <MdWindow className="w-5 h-5" />
                    <div>
                        <p>All Orders</p>
                    </div>
                </div>

                <div className=" items-center flex  w-25 text-center p-1 w-30 gap-2 rounded-xl p-2 bg-primary-border ">
                    <BsFillBoxSeamFill className="w-5 h-5" />
                    <div>
                        <p>Preparing</p>
                    </div>
                </div>

                <div className=" items-center flex  w-25 text-center p-1 w-30 gap-2 rounded-xl p-2 bg-primary-border ">
                    <RiTruckLine className="w-5 h-5" />
                    <div>
                        <p>Shipping</p>
                    </div>
                </div>

                <div className=" items-center flex  w-25 text-center p-1 w-30 gap-2 rounded-xl p-2 bg-primary-border ">
                    <IoMdCheckmarkCircleOutline className="w-5 h-5" />
                    <div>
                        <p>Recieved</p>
                    </div>
                </div>

                <div className=" items-center flex  w-25 text-center p-1 w-30 gap-2 rounded-xl p-2 bg-primary-border ">
                    <VscError className="w-5 h-5" />
                    <div>
                        <p>Cancelled</p>
                    </div>
                </div>

            </div>

            <div className="mt-7">
                <div className="flex gap-2 items-center">
                    <BsFillBoxSeamFill className="w-4 h-4 text-[#29AB87] " />
                    <h2 className="font-bold">
                        Your Orders
                    </h2>
                    <p className="opacity-50">(5)</p>
                    <div>
                    </div>
                </div>

                <div className=" mt-4 bg-primary p-4 rounded-md text-white ">
                    <div>
                        <div className="flex justify-between">
                            <h2>Sunset Over Mountains</h2>
                            <div className=" items-center flex  w-25 text-center p-1 w-35 gap-2 rounded-3xl p-2 bg-blue-500 ">
                                <RiTruckLine className="w-5 h-5" />
                                <div>
                                    <p>On Shipping</p>
                                </div>
                            </div>
                        </div>
                        <p className="opacity-50">Order ID: DEL-001</p>
                    </div>

                    <div className="flex gap-80 mt-4 text-sm ">
                        <div className="flex gap-2 items-center">
                            <FiUser className="opacity-50" />
                            <p className="opacity-50">Artist:</p>
                            <div className="font-bold ">
                                Artist Name
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FaFileAlt className="opacity-50" />
                            <p className="opacity-50">Reference:</p>
                            <div className="font-bold ">
                                COM-2024-001
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-between items-center w-full max-w-3xl mx-auto mt-10">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -translate-y-1/2"></div>


                        <div className="relative z-10 flex flex-col items-center ">
                            <BsFillBoxSeamFill className="w-8 rounded-full bg-[#32CD32] p-2 mb-3  h-8 " />
                            <p className=" mt-2 text-sm font-medium text-gray-700">Preparing</p>
                        </div>


                        <div className="relative z-10 flex flex-col items-center">
                            <RiTruckLine className="w-8 rounded-full bg-blue-500 p-2 mb-3   h-8 " />
                            <p className=" mt-2 text-sm font-medium text-gray-700">Shipping</p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <IoMdCheckmarkCircleOutline className="w-8 rounded-full bg-primary-border p-2  mb-3 h-8 " />
                            <p className=" mt-2 text-sm font-medium text-gray-700">Received</p>
                        </div>

                    </div>

                    <div className="flex justify-between mt-4 bg-secondary p-2 rounded-md">
                        <div>
                            <div className="flex gap-1 items-center">
                                <CiCalendar className="opacity-50" />
                                <p className="opacity-50"> Ordered</p>
                            </div>
                            <div>
                                Jan 15, 2024
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-1 items-center">
                                <IoMdTime className="opacity-50" />
                                <p className="opacity-50">Expected</p>
                            </div>
                            <div>
                                Jan 25, 2024
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-1 items-center">
                                <IoMdCheckmarkCircleOutline className="opacity-50" />
                                <p className="opacity-50">Received</p>
                            </div>
                            <div>
                                —
                            </div>
                        </div>
                    </div>

                    <div className=" w-full rounded-md mt-3 p-2 bg-[#29AB87]  opacity-100 ">
                        <div className="flex gap-1 items-center text-green-700 ">
                            <FaRegMessage />
                            <p>Message from Artist</p>
                        </div>
                        <p className="font-bold">Package has been shipped via express delivery. Tracking number: TRK123456789</p>
                    </div>

                    <button className="flex w-full cursor-pointer rounded-md mt-3 p-2 bg-[#29AB87]  opacity-100 justify-center items-center gap-2 text-black ">
                        <IoMdCheckmarkCircleOutline className="w-5 h-5" />
                        Confirm Received
                    </button>

                    <div className="mt-3 opacity-50 text-end">
                        Last updated on Jan 18, 2024 at 8:00 AM
                    </div>

                </div>
            </div>
        </div >


    )
}


export default page