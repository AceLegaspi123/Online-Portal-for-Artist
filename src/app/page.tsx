import Footer from "./components/Footer"
import ArtList from "./components/ArtList";
<<<<<<< HEAD
=======
import FeauturedArt from "./components/FeauturedArt";
>>>>>>> b2ea938267dc09c78961a1b95ec75a10b0b904dd

export default function Home() {
  return (
  <div className="max-w-screen-2xl m-auto flex flex-col min-h-screen"> 
    <main className="flex justify-between items-start gap-10 flex-grow">
<<<<<<< HEAD
      <ArtList />
      <ArtList />
      <ArtList />
=======
      <FeauturedArt />
>>>>>>> b2ea938267dc09c78961a1b95ec75a10b0b904dd
    </main>
    <Footer/>
  </div>
  );
}
