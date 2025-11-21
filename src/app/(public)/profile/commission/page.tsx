import React from 'react'
import ImgRef from '@/app/components/commission/ImgRef'
import Details from '@/app/components/commission/Details'
import './page.tsx'

const page = () => {
return (
      <div>
      <div className="mt-10 rounded-xl w-[900px] mx-auto">
        <div className="w-full min-h-screen bg-[#0d0f16] text-white p-10">
          <div className="max-w-4xl p-2">

            <p className="text-sm text-gray-400 mb-6"></p>

            <div className="flex justify-between items-start border-b pb-4 mb-8">
              <div className="flex items-start gap-3">
             
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-600">
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.9FloqqwRxB85rc5Ux9r8hQAAAA?pid=Api&h=220&P=0"
                    alt="Jeaven A. Paras"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Jeaven A. Paras</h2>
                    <p className="text-gray-400 text-sm">&lt;jeavenanda07@gmail.com&gt;</p>
                  </div>
                  <p className="text-gray-400 text-sm">to ChristianJay69</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm">24 Sept 2025, 00:47</p>
            </div>

        
            <div className="bg-[#1b1e27] p-6 rounded-lg border border-gray-700">
              <div className="flex gap-6">

                {/* dito ako natagalan Jeaven sorry na agad HAHAHAH */}
                <div>
                  <h3 className="text-sm text-white font-bold mb-2">Photo Reference (3)</h3>
                  <div className="w-32 h-32 relative rounded-lg overflow-hidden border border-gray-600 mb-3"></div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 relative rounded overflow-hidden border border-gray-600"></div>
                    <div className="w-10 h-10 relative rounded overflow-hidden border border-gray-600"></div>
                  </div>
                </div>

              
                <div className="flex flex-col flex-1 gap-10 ml-auto mr-10">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h2 className="!text-2xl font-bold mb-2">Fantasy Warrior Portrait</h2>
                      <p className="text-gray-300">
                        Create a digital portrait of a female warrior wearing silver armor with
                        glowing blue runes. The background should feature a misty battlefield.
                      </p>
                    </div>

                    <div className="text-sm space-y-2 text-gray-300">
                      <p><strong className="text-white">Category:</strong> Digital Art, Character Design, Fantasy</p>
                      <p><strong className="text-white">Art Type:</strong> Digital</p>
                      <p><strong className="text-white">Deadline:</strong> November 25, 2025</p>
                      <p><strong className="text-white">Budget:</strong> ₱550</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ETO DIN UMAY HAHAHAAH */}
            <div className="bg-[#2A2831] mt-20 p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-white text-sm font-bold">Please review your commission details</p>
                <div className="flex gap-3">
                  <button className="px-6 py-2 rounded-md border border-white font-bold">
                    Go Back
                  </button>
                  <button className="px-6 py-2 rounded-md bg-white text-black font-bold">
                    Submit Commission
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
      {/* <ImgRef /> */}
      {/* <Details /> */}



export default page