import React from 'react';

  
function GetStarted() {
  return (
   <div className='flex min-h-screen flex-col items-center justify-center p-25'>
  <h1 className='text-3xl font-bold'>What do you want to do on ArtistryHub?</h1>

  <div>
    <div className='grid grid-cols-3 gap-3 text-center mt-10'>
      <div className=' lex flex-col w-72 bg-[#1c1c1c]  h-50 border-gray-300 rounded-lg shadow-md p-4 '>
        <div className='h-[80%]'><img src={' /discover-art.png'} alt="Discover Art" className=" m-auto h-full object-fit p-4 " /></div>
      
          <p className="mt-2 h-[20%] font-bold ">Discover Art</p>
      </div>

    <div className='flex flex-col w-72 bg-[#1c1c1c]  h-50 border-gray-700 rounded-lg shadow-md p-4'>
      <div className='h-[80%]'>
        <img src={'/sell-art.png'} alt="Sell Art" className="m-auto h-full object-contain p-4" />
      </div>
      <p className="mt-2 h-[20%] font-bold ">Sell Art</p>
    </div>

    <div className='lex flex-col w-72 bg-[#1c1c1c] h-50 border-gray-700 rounded-lg shadow-md p-4 re'>
      <div className='h-[80%]'>
        <img src={'/buy-art.png'} alt="Buy Art" className="m-auto h-full object-contain p-4" />
      </div>
      <p className="mt-2 h-[20%] font-bold">Buy Art</p>
    </div>

  </div>

    <div className="flex justify-center mt-10">
      <button className="bg-[#5A5A5E] border-gray-800 text-black px-18 py-2 rounded-sm " >Continue</button>
    </div>
  </div>
</div>

  );

}

export default GetStarted;
