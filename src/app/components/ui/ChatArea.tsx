import Image from 'next/image'
import { FaImage } from "react-icons/fa6";

const ChatArea = () => {
  return (
    <div >
      <div className='bg-primary flex items-center gap-4 border-b-1 border-background p-2 cursor-pointer rounded-lg p-2'>
        <div className='h-12 w-12 shrink-0'>
          <Image
            height={80}
            width={80}
            className='rounded-full object-cover '
            alt='avatar'
            src={`https://i.pinimg.com/1200x/c3/b6/38/c3b6386e123e068bf5fde356960f105e.jpg`}
          />
        </div>

        <div>
          <p>Jeaven A. Paras</p>
          <div className='flex items-center gap-2 text-sm'>
            <div className='h-2 w-2 rounded-full bg-green-500'></div>
            <p className='opacity-80'>Active</p>
          </div>
        </div>
      </div>


      <main className='flex flex-col p-4 mt-4 bg-primary h-[100vh] overflow-hidden'>
        <div className='flex-grow overflow-y-auto bg-yellow-50 p-4 rounded-lg mb-4'>
          
        </div>

        <div className='z-40 h-80 w-full flex items-center gap-4'>
          <input type="file" name="message" id="message" className='hidden'/>
          <label htmlFor="message" className='text-xl cursor-pointer'><FaImage /></label>
          <input type="text" placeholder='Send Message' className='w-full bg-secondary py-4 px-2 rounded-md pl-4 outline-none' />
        </div>
      </main>
    </div>
  )
}

export default ChatArea