'use client';
import logoIcon from "/public/logo.png"
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/navigation';


type HeaderProps = {
  logo?: string
}

export default function Header() {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/register'); 
  };

  const handleLoginClick = () => {
    router.push('/login'); 
  };

  const handleHomeClick = () => {
    router.push('/'); 
  };

  return (
    <header className="border-b-1 flex w-full justify-center items-center mb-10 px-4">
      <div className="w-[50%] flex gap-8 items-center">
        <div className="flex items-center cursor-pointer" onClick={handleHomeClick}>
            <img src="/logo.png" alt="Logo" className="w-20" />
            <h2 className="font-black text-base/6">Artistry<br/>Hub</h2>
        </div>

        <p>Shop</p>
        <div className="flex relative">
          <BsSearch className="opacity-80 text-xl absolute top-4 left-4"/>
          <input
            type="text"
            placeholder={`Search arts/artist in ArtistryHub`}
            className="bg-slate-700  opacity-80 text-white font-normal py-4 pl-14 w-[21rem] rounded-full"
          />
        </div>

      </div>

      <div className="w-[50%] text-right flex justify-end gap-10">
        <button onClick={handleSignUpClick} className="cursor-pointer">Sign up</button>
        <button onClick={handleLoginClick} className="bg-blue-600 cursor-pointer text-white px-10 py-2 rounded-full">Log in</button>
      </div>
    </header>
  )
}
