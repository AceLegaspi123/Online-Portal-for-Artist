import React from 'react'

const ProfileSetup = () => {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col min-h-screen mt-20">
            <div className="flex justify-center h-[40em] w-[55em] m-auto mb-20 rounded-md overflow-hidden">
              <div className="w-1/2 bg-cover p-8 pt-24 leading-6" style={{backgroundImage: `url(/form-background.jpg)`}}>
                <h1 className="text-5xl text-start font-bold leading-[1.2em]">JOIN THE <br />FUTURE OF <br /> ART & <br />CREATIVITY</h1>
                <p className="text-lg text-start mt-8 leading-[2em] pr-8">Showcase your talent, connect with fellow <br /> artist, and open door to opportunities. <br /> Whether you're a traditional or digital artist, <br />share your work, gain appreciation, and build meaningful collaboration.</p>
              </div>
    
              <div className="w-1/2 bg-white py-10">
                <form className="flex flex-col gap-7 p-10">
                  <h5 className="text-3xl font-bold text-black">Help us personalize your experience</h5>

                  <div>
                    <div className="flex justify-between">
                     <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                       Firstname
                     </label>
                     <input className="border border-cyan-500 p-3 w-48 rounded-lg text-black outline-none" type="firstname" placeholder="Fisrtname" />
                     </div>

                    <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                       Lastname
                     </label>
                    <input className="border border-cyan-500 p-3 w-48 rounded-lg text-black outline-none" type="lastname" placeholder="Lastname" />
                    </div>
                  </div>
                  </div>

                   <div>
                      <label className="block text-gray-900 font-semibold mb-2">
                   Username
                </label>
                  <input className="flex border border-cyan-500 p-3 w-full rounded-lg text-black outline-none" type="enter your username" placeholder="Enter your username" />
                   </div>
                  
              <div>
                <div className="flex justify-between">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                   Gender
                 </label>
                 <select className="flex border border-cyan-500 p-3 w-48 rounded-lg text-black outline-none" id="gender" name="gender">
                     <option value="default">Default</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="prefer not to say">Prefer not to say</option>
                    </select>  
                  </div>

                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Birth of date
                   </label>
                   <input className="flex border border-cyan-500 p-3 w-48 rounded-lg text-black outline-none" type="date"/>
                  </div>  
                </div>
              </div>

                  <button className="border p-5 bg-gradient-to-r from-violet-900 via-blue-800 to-blue-300 rounded-xl" type="submit">Continue</button>
                </form>
              </div>
            </div>
          </div>
  )
}

export default ProfileSetup
