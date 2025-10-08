import FeauturedArt from "./components/FeauturedArt";
import TopSellers from "./components/TopSellers";
import ExploreLayout from "./components/ExploreLayout";

export default function Home() {
  return (
  <div className="max-w-screen-2xl mx-auto flex flex-col min-h-screen"> 
    <main className="flex flex-col justify-between items-start gap-10 flex-grow">
      <div className=" w-full flex flex-col gap-12">
        <div>
          <FeauturedArt />
        </div>
      
          <hr className="bg-line h-[1px] opacity-10 w-full"/>    

        <TopSellers />

        <hr className="bg-line h-[1px] opacity-10 w-full mt-3"/> 
        <ExploreLayout/>

      </div>
    </main>
  </div>
  );
}
