'use client'
import Image from 'next/image'
import { FaImage } from "react-icons/fa6";
import { useState } from 'react';
import MessageItem from "@/data/message.json"

const ChatArea = () => {
  const [myMessage, setMyMessage] = useState<string[]>([]);
  const userID = "USR001";
  const clientID = "USR002";

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle message submission logic here
    console.log("Message submitted:", e.target.addEventListener.name);
  }

  const myMessages = MessageItem.filter((message) => message.userId === userID);
  const clientMessages = MessageItem.filter((message) => message.userId === clientID);

  console.log("My messages", myMessages);
  console.log("Client messages", clientMessages);
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


      <main className='relative flex pb-60 flex-col p-4 mt-4 bg-primary h-[100vh] overflow-hidden'>
        <div className='relative flex-grow overflow-y-auto p-4 rounded-lg mb-4 mt-10'>
          {
            MessageItem.map((message, index) => (
              <div key={index} className={`mb-4 flex ${message.userId === userID ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3   ${message.userId === userID ? 'bg-green-500 text-white rounded-br-full rounded-l-full' : 'bg-secondary rounded-l-full rounded-r-full'}`}>
                  <p>{message.content}</p>
                </div>
              </div>
            ))
          }
        </div>

        <form onSubmit={(e) => handleMessageSubmit(e)} className='absolute bottom-0 left-0 right-0 h-60 bg-secondary z-40 w-full flex items-center gap-4'>
          <input type="file" name="message" id="message" className='hidden'/>
          
          <div className='-mt-35 flex items-center w-full gap-4 px-4'>
            <label htmlFor="message" className='text-xl cursor-pointer'><FaImage /></label>
            <input type="text" placeholder='Send Message' className='w-full bg-primary py-4 px-2 rounded-md pl-4 outline-none' />
          </div>
        </form>
      </main>
    </div>
  )
}

export default ChatArea