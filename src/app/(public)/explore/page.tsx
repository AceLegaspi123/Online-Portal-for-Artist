import FeauturedArt from "@/app/components/home/FeauturedArt";
import TopSellers from "@/app/components/home/TopSellers";
import ExploreLayout from "@/app/components/home/ExploreLayout";

export default function Home() {
  return (
  <div className="mx-5 md:mx-10 lg:mx-20 flex flex-col min-h-screen"> 
    <main className="flex flex-col justify-between items-start gap-10 flex-grow">
      <div className=" w-full flex flex-col gap-12">
        {/* <div>
          <FeauturedArt />
        </div>
      
          <hr className="bg-line h-[1px] opacity-10 w-full"/>     */}

        {/* <TopSellers /> */}

        {/* <hr className="bg-line h-[1px] opacity-10 w-full mt-3"/>  */}
        <ExploreLayout/>
      </div>
    </main>
  </div>
  );
}
