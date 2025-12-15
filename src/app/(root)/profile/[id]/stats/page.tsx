const StatsPage = () => {
  return (
    <div>
      <div className="w-full max-w-[1440px] m-auto  -mt-4">
        <div className="mb-10 gap-3 flex flex-col h-auto">
          <h1 className="text-2xl font-bold"> Your Art Analytics</h1>
          <p className="text-sm ">
            View a private overview of your activity, artworks, and community
            engagement.
          </p>
          <p className="text-sm ">
            {" "}
            These insights are visible only to you and refresh once per day.
          </p>
        </div>

        <div className="  gap-5 text-2xl mt-10 flex items-center justify-between pb-4 ">
          <h2 className="font-bold h-10 gap-2">All time stats</h2>
        </div>

        <div className="border-1 p-10 border-primary-line rounded-lg bg-primary">
          <div className="flex justify-between mt-6 text-center">
            <div className="flex flex-col gap-4 ">
              <h3 className="text-3xl font-bold">2.9m</h3>
              <p className="text-sm opacity-60">Profile Views</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">1.8m</h3>
              <p className="text-sm opacity-60">Followers</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">59</h3>
              <p className="text-sm opacity-60">Following</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">15k</h3>
              <p className="text-sm opacity-60">Comments Received</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">142</h3>
              <p className="text-sm opacity-60">Artworks Sold</p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold">12</h3>
              <p className="text-sm opacity-60">Your Purchases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
