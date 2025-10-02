import Footer from "./components/Footer"
import ArtList from "./components/ArtList";
import FeauturedArt from "./components/FeauturedArt";

export default function Home() {
  return (
  <div className="max-w-screen-2xl m-auto flex flex-col min-h-screen"> 
    <main className="flex justify-between items-start gap-10 flex-grow">
      <FeauturedArt />
    </main>
    <Footer/>
  </div>
  );
}
