import React from 'react'
import { Message } from '../components/Commission/Message';
import ProfileMenu from '../components/Menu/ProfileMenu';

const Page = () => {
  return (
    <div className='flex gap-8 justify-center items-center'>
      <ProfileMenu />
      <Message />
    </div>
  );
}

export default Page;
