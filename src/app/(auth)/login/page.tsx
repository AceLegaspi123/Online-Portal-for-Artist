// src/app/login/page.tsx
'use client'
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import Logo from "@/app/components/ui/Logo";
import { login } from "@/lib/actions/auth";
import { useState } from "react";
import { validateUser } from "@/utils/validator";
import { notify } from "@/utils/toastHelper";
import { Authentication } from "@/app/modules/Authentication";
import { useRouter } from 'next/navigation';
import { getUser } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validated = validateUser(email, password);

    console.log("Validated", validated);
    if (validated.length > 0) {
      const message = validated.join(', ');
      notify(message, 'error');
      return;
    } 
    
    if(validated.length > 0) {
      let authUser = Authentication(email.trim(), password.trim());

      console.log("Auth user" , authUser);
      if (authUser.email === email && authUser.role === 'admin') {
        notify('Login successful!', 'success');
        setTimeout(() => {
          notify('Welcome to dashboard Admin', 'success');
          router.push('/dashboard');
        }, 1500);
      } else if (authUser.success) {
        notify('Login successful!', 'success');
        // getUser(authUser.email)
        setTimeout(() => {
          router.push('/');
        }, 1500);
      }
    }
  };

  return (
    <div className="w-full relative shadow-xl min-h-[100dvh] border-white border-2 shadow-white flex flex-col justify-center items-center h-[100dvh] bg-[url('https://static.vecteezy.com/system/resources/previews/006/595/713/non_2x/silhouettes-of-panoramic-mountains-view-landscape-vector.jpg')] bg-cover bg-center h-64 w-full">
      <div className="z-20 flex justify-center h-[40em] rounded-md overflow-hidden">
        <div
          className="hidden text-white md:block w-1/2 bg-cover p-8 pt-24 leading-6"
          style={{ backgroundImage: "url('/form-background.jpg')" }}
        >
          <h1 className="text-5xl text-start font-bold leading-[1.2em]">
            JOIN THE <br /> FUTURE OF <br /> ART & <br /> CREATIVITY
          </h1>
          <p className="text-lg text-start mt-8 leading-[2em] pr-8">
            Showcase your talent, connect with fellow <br /> artist, and open
            door to opportunities. <br /> Whether you are a traditional or
            digital artist, <br /> share your work, gain appreciation, and build
            meaningful collaboration.
          </p>
        </div>

        <div className="w-[90dvw] md:w-1/2 bg-white py-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10">
            <h3 className="text-3xl font-bold text-center text-black">
              Welcome back
            </h3>
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
              <TfiEmail className="absolute left-4 top-6 text-2xl text-gray-500" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex border border-cyan-500 p-5 pl-14 w-full rounded-lg text-black outline-none"
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="relative w-full">
              <CiLock className="absolute left-4 top-6 text-2xl text-gray-700" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex border border-cyan-500 p-5 pl-14 w-full rounded-lg text-black outline-none"
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>

            <div className="flex justify-between">
              <div>
                <input type="checkbox" id="remember" />
                <label className="text-black" htmlFor="remember">
                  {' '}Remember me
                </label>
              </div>
              <a className="text-blue-600" href="#">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="border p-5 bg-gradient-primary rounded-xl bg-blue-500 text-white"
            >
              Login
            </button>
            <p className="text-center text-black">
              Don't have an account?{' '}
              <Link className="text-blue-600" href="/register">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>

      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-12 md:left-22 text-white md:block">
        <Logo />
      </div>
    </div>
  );
}
