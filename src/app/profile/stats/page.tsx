import ProfileLayout from "@/app/components/ProfileLayout";

const StatsPage = () => {
  return (
    <ProfileLayout>
<div className="w-[1440px] m-auto  -mt-4">
  <div className="mb-10 gap-3 flex flex-col h-auto">
        <h1 className="text-2xl font-bold"> Your Art Analytics</h1>
        <p className="text-sm text-white-500">View a private overview of your activity, artworks, and community engagement. 
        </p>
        <p className="text-sm text-white-500"> These insights are visible only to you and refresh once per day.</p>
      </div>
      


   <div className="  gap-5 text-2xl mt-10 flex items-center justify-between pb-4 ">
    <h2 className="font-bold h-10 gap-2">All time stats</h2>
   </div>

   <div className="border-1 p-10 border-gray-500 rounded-lg bg-[#1A1A1A]">
    <div className="flex justify-between mt-6 text-center">

    <div className="flex flex-col gap-4 ">
      <h3 className="text-3xl font-bold">2.9m</h3>
      <p className="text-sm text-gray-400">Profile Views</p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold">1.8m</h3>
      <p className="text-sm text-gray-400">Followers</p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold">59</h3>
      <p className="text-sm text-gray-400">Following</p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold">15k</h3>
      <p className="text-sm text-gray-400">Comments Received</p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold">142</h3>
      <p className="text-sm text-gray-400">Artworks Sold</p>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold">12</h3>
      <p className="text-sm text-gray-400">Your Purchases</p>
    </div>

  </div>
   </div>

 

  
</div>
      


    </ProfileLayout>
    
  );
};

export default StatsPage;