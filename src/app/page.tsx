import Header from "./components/Header"
import Footer from "./components/Footer"
import ArtList from "./components/ArtList";


export default function Home() {


  return (
  <div className=""> 
    <main className="flex justify-between items-center">
      <ArtList />
      <ArtList />
      <ArtList />
    </main>
    <Footer/>
  </div>
  );
}
