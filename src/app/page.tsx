import Footer from "./components/Footer"
import FeauturedArt from "./components/FeauturedArt";
import TopSellers from "./components/TopSellers";
import Suggestion from "./components/Suggestion";

export default function Home() {
  return (
  <div className="max-w-screen-2xl m-auto flex flex-col min-h-screen"> 
    <main className="flex flex-col justify-between items-start gap-10 flex-grow">
      <div className=" w-full flex flex-col gap-12">
        <div>
          <FeauturedArt />
        </div>
      
        <div>
          <hr className="bg-white h-[1px] opacity-10 w-full"/>
        </div>        

        <TopSellers />
        <Suggestion />
      </div>
      

    </main>
    <Footer/>
  </div>
  );
}
