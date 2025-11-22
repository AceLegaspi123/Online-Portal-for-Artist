import Link from "next/link";

function GetStarted() {
  return (
   <div className='flex min-h-screen flex-col items-center justify-center p-25'>
  <h1 className='text-3xl font-bold'>What do you want to do on ArtistryHub?</h1>

  <div>
    <div className='grid grid-cols-3 gap-3 text-center mt-10'>
      <div className=' flex border-1 flex-col w-72 bg-primary  h-50 border-primary-line rounded-lg shadow-md p-4 '>
        <div className='h-[80%]'><img src={' /discover-art.png'} alt="Discover Art" className=" m-auto h-full object-fit p-4 " /></div>
      
          <p className="mt-2 h-[20%] font-bold ">Discover Art</p>
      </div>

    <div className='flex flex-col border-1 w-72 bg-primary  h-50 border-primary-line rounded-lg shadow-md p-4'>
      <div className='h-[80%]'>
        <img src={'/sell-art.png'} alt="Sell Art" className="m-auto h-full object-contain p-4" />
      </div>
      <p className="mt-2 h-[20%] font-bold ">Sell Art</p>
    </div>

    <div className='lex flex-col border-1 w-72 bg-primary h-50 border-primary-line rounded-lg shadow-md p-4 re'>
      <div className='h-[80%]'>
        <img src={'/buy-art.png'} alt="Buy Art" className="m-auto h-full object-contain p-4" />
      </div>
      <p className="mt-2 h-[20%] font-bold">Buy Art</p>
    </div>
  </div>

    <div className="flex justify-center mt-10">
      <button className="bg-secondary border-1 border-primary-line text-white px-18 py-2 rounded-sm " >Continue</button>
    </div>
  </div>
</div>

  );

}

export default GetStarted;
