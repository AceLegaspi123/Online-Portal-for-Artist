'use client';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";

export default function RegisterPage() {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col min-h-screen mt-20">
            <div className="flex justify-center h-[40em] w-[55em] m-auto mb-20 rounded-md overflow-hidden">
              <div className="w-1/2 bg-cover p-8 pt-24 leading-6" style={{backgroundImage: `url(form-background.jpg)`}}>
                <h1 className="text-5xl text-start font-bold leading-[1.2em]">JOIN THE <br />FUTURE OF <br /> ART & <br />CREATIVITY</h1>
                <p className="text-lg text-start mt-8 leading-[2em] pr-8">Showcase your talent, connect with fellow <br /> artist, and open door to opportunities. <br /> Whether you're a traditional or digital artist, <br />share your work, gain appreciation, and build meaningful collaboration.</p>
              </div>
    
              <div className="w-1/2 bg-white py-10">
                <form className="flex flex-col gap-5 p-10">
                  <h3 className="text-3xl font-bold text-center text-black">Create an account</h3>
                  <button className="border border-cyan-500 p-5 text-black rounded-xl flex items-center justify-center gap-3">
                    <FcGoogle />
                    <p>Continue with Google</p>
                  </button>
    
                  <div className="flex items-center my-2">
                    <div className="flex-grow h-px bg-cyan-500"></div>
                      <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="flex-grow h-px bg-cyan-500"></div>
                  </div>
                  
                  <div className="relative w-full">
                    <TfiEmail className="absolute left-4 top-6 text-2xl"/>
                    <input className="flex border border-cyan-500 p-5 pl-14 w-full rounded-lg text-black outline-none" type="email" placeholder="Email" />
                  </div>
                  
                  <div className="relative w-full">
                    <CiLock className="absolute left-4 top-6 text-2xl"/>
                    <input className="flex border border-cyan-500 p-5 pl-14 w-full rounded-lg text-black outline-none" type="password" placeholder="Password" />
                  </div>
    
                  <div className="flex gap-2">
                      <div>
                        <input type="checkbox" id="i agree to the"/>
                        <label className="ml-2 text-black" htmlFor="i agree to the">I agree to the</label>
                      </div>
                    <a className="text-blue-600" href="#"> Terms & Conditions</a>
                  </div>
                  <button className="border p-5 bg-gradient-to-r from-violet-900 via-blue-800 to-blue-300 rounded-xl" type="submit">Sign up</button>
                  <p className="text-center text-black">Already have an account? <Link className="text-blue-600" href="/login">Log in</Link></p>
                </form>
              </div>
            </div>
          </div>
  );
}
