import { div } from "framer-motion/client"
import Image from "next/image"

const FeaturedArts = () => {
    return (
        <div>
            <div className="shadow-md w-80 border-1 mt-10 border-primary-line overflow-hidden">
                <div className="bg-red-400 h-40 w-full rounded-t-xl">
                    <Image
                        height={140}
                        width={140}
                        alt="arts"
                        className="h-full w-full object-cover"
                        src={"https://i.pinimg.com/1200x/5c/86/78/5c8678d64f8db839c4ae17515b673629.jpg"}
                    />
                </div>
            </div>

            <div className="bg-primary p-2 py-3 flex gap-4 items-center">
                <Image
                    height={40}
                    width={40}
                    alt="arts"
                    className="h-10 w-10  object-cover rounded-full"
                    src={"https://i.pinimg.com/1200x/5c/86/78/5c8678d64f8db839c4ae17515b673629.jpg"}
                />

                <div className="">
                    <div className="flex justify-between w-full">
                        <h4 className="font-semibold">Jeaven Paras</h4>
                        <span className="text-green-400">Follow</span>
                    </div>

                    <div className="text-xs opacity-60 flex gap-4">
                        <p className="border-r-1 pr-4">12.3k followers</p>
                        <p>50 sold arts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedArts