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
    console.log("Message submitted");
  }

  return (
    <div className="flex flex-col w-full h-[97vh] bg-background overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 p-3 bg-secondary rounded-t-lg">
        <div className="h-12 w-12 shrink-0">
          <Image
            height={48}
            width={48}
            className="rounded-full object-cover"
            alt="avatar"
            src="https://i.pinimg.com/1200x/c3/b6/38/c3b6386e123e068bf5fde356960f105e.jpg"
          />
        </div>
        <div>
          <p className="font-semibold">Jeaven A. Paras</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <p>Active</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {MessageItem.map((message, index) => (
          <div
            key={index}
            className={`flex items-end ${message.userId === userID ? 'justify-end' : 'justify-start'}`}
          >
            {/* Avatar only for client */}
            {message.userId !== userID && (
              <Image
                height={32}
                width={32}
                className="rounded-full object-cover mr-2"
                alt="avatar"
                src="https://i.pinimg.com/1200x/c3/b6/38/c3b6386e123e068bf5fde356960f105e.jpg"
              />
            )}
            {/* Bubble */}
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs ${
                message.userId === userID
                  ? 'bg-green-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-black rounded-bl-none'
              }`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={handleMessageSubmit}
        className="flex items-center gap-3 p-3 bg-secondary"
      >
        <label htmlFor="file-upload" className="text-xl cursor-pointer">
          <FaImage />
        </label>
        <input type="file" id="file-upload" className="hidden" />
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-primary py-2 px-4 rounded-full outline-none"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatArea
