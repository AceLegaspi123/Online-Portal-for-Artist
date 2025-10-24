import React from 'react'
import ArtList from './ArtList';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import FeauturedPagination from './FeauturedPagination';
import Link from 'next/link';

const FeauturedArt = () => {
  return (
    <div className='w-full flex flex-col gap-4 relative'>
        <h2>Featured Art of the Week</h2>

        <div className='grid max-lg:grid-cols-2 grid-cols-4 gap-10'>
            <Link href="/preview">
              <ArtList imgSrc="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12042484-31ca-45b6-9b46-82ead8ba919b/df7qepj-50a8e213-0a75-43aa-b424-ca8b9a4bdcbc.png/v1/fill/w_1280,h_1494,q_80,strp/samdoesarts_study_by_zacleonardi_df7qepj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NCIsInBhdGgiOiJcL2ZcLzEyMDQyNDg0LTMxY2EtNDViNi05YjQ2LTgyZWFkOGJhOTE5YlwvZGY3cWVwai01MGE4ZTIxMy0wYTc1LTQzYWEtYjQyNC1jYThiOWE0YmRjYmMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.amBCylC-Fc5uabMZCMY69eIVdYgRdk3kNESimUZ0OVc"/>
            </Link>
            <ArtList imgSrc='https://tse2.mm.bing.net/th/id/OIP.qhyeezSpvnIAzjep7aqo8QHaHa?cb=12&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3'/>
            <ArtList imgSrc='https://preview.redd.it/published-my-samdoesarts-model-please-check-it-out-v0-w66plpmhbi2a1.png?width=512&format=png&auto=webp&s=c3a06ba49b1ed727a5f99108237639e7f4e78251'/>
            <ArtList imgSrc='https://tse1.mm.bing.net/th/id/OIP.jzd2nISXXveWKwuBKGEDkAHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'/>
        </div>

        <FeauturedPagination />

        <div className='artcard-gradient absolute h-73  left-0 top-11 text-5xl hover:opacity-100 cursor-pointer w-28'>
             <MdKeyboardArrowLeft className='translate-y-31 opacity-40 hover:opacity-100 cursor-pointer'/>
        </div>
        
        <div className='artcard-gradient right absolute h-73  right-0 top-11 text-5xl hover:opacity-100 cursor-pointer w-28'>
             <MdKeyboardArrowRight className='translate-y-31 ml-12 opacity-40 hover:opacity-100 cursor-pointer'/>
        </div>
    </div>
  )
}

export default FeauturedArt;
