import React from 'react'
import ArtList from './ArtList'
import Suggestion from './Suggestion'

const ExploreLayout = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h3 className="text-1xl font-bold ">Explore Arts</h3>
        <Suggestion />

        <div className='grid grid-cols-4 gap-4 gap-y-8'>
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
            <ArtList />
        </div>

        <span className="loading loading-dots loading-xl bg-foreground"></span>
    </div>
  )
}

export default ExploreLayout
