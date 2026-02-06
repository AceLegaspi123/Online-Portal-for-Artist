import ExploreLayout from "@/app/components/home/ExploreLayout";

export default function Home() {
  return (
  <div className="mx-5 md:mx-10 lg:mx-5 flex flex-col min-h-screen -mt-15"> 
    <main className="flex flex-col justify-between items-start gap-10 flex-grow">
      <div className=" w-full flex flex-col gap-12 ">
        <ExploreLayout/>
      </div>
    </main>
  </div>
  );
}
