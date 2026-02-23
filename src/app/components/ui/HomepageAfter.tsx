import Image from "next/image"
import FeaturedArts from "@/app/components/ui/FeaturedArts"

const HomepageAfter = () => {
    return (
        <main className="min-h-[100vh]  max-w-[1980px] w-full mx-auto">
            <section className="h-[80vh] image-wrapper w-full p-4 gap-8 flex justify-between hero-section mx-auto">
                <div className="relative w-[60%] h-full z-10 flex flex-col gap-4 justify-center">
                    <h1 className="font-bold text-6xl">Showcase Your Art and <br /> Find New Opportunities</h1>
                    <p>Upload your artowrk, gain exposure, and connect with <br /> potential clients seeking unique commiissions</p>
                    <div className="flex gap-2">
                        <button className="cursor-pointer px-8 py-2 bg-green-500 text-white rounded-full">Upload Artwork</button>
                        <button className="cursor-pointer px-8 py-2 text-white rounded-full">Browse Art</button>
                    </div>
                </div>

                <div className="w-[40%]">
                </div>

                {/* <div className="hero-wrapper absolute inset-0 z-0"></div> */}
            </section>

            <section className="mt-8 p-8">
                <div className="flex gap-8 items-center">
                    <h3 className="text-2xl f">Featured Artworks</h3>
                    <ul className="flex gap-4 items-center">
                        <li>All</li>
                        <li>Digital Arts</li>
                        <li>Physical Arts</li>
                    </ul>
                </div>

                <div className="flex items-center gap-4 justify-between">
                    <FeaturedArts />
                    <FeaturedArts />
                    <FeaturedArts />
                    <FeaturedArts />
                    <FeaturedArts />   
                </div>
            </section>

           
        </main>
    )
}

export default HomepageAfter