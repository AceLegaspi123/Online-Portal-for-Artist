import React from 'react'
import ArtList from './ArtList'
import Suggestion from './Suggestion'

const ExploreLayout = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h3 className="text-1xl font-bold ">Explore Arts</h3>
        <Suggestion />

        <div className='grid grid-cols-4 gap-4 gap-y-10 mt-4'>
            <ArtList imgSrc='https://www.funtalk.ai/funtalk/category/cartoon/female/avatar/janie.jpg'/>
            <ArtList imgSrc='https://images.hdqwalls.com/download/anime-art-girl-portrait-5k-78-1280x2120.jpg'/>
            <ArtList imgSrc='https://media.licdn.com/dms/image/C5622AQFpLlSL3Mxuow/feedshare-shrink_800/0/1679240444976?e=2147483647&v=beta&t=C5oHhOw_Kvj9DhtiZ4uvA_883e-KEuniGGRUMGsMtxk'/>
            <ArtList imgSrc='https://i.pinimg.com/originals/ae/3f/15/ae3f15ef5d7503e49acb31b337d0d14e.jpg'/>
            <ArtList imgSrc='https://i.pinimg.com/736x/0b/70/a0/0b70a0c1cf42c938dc941a648eae1091.jpg'/>
            <ArtList imgSrc='https://i.pinimg.com/750x/e4/6b/22/e46b2274a385c6a4f464687d5336a3c3.jpg'/>
            <ArtList imgSrc='https://i.pinimg.com/originals/11/7e/d2/117ed2fa28a303c166a05115209444eb.png' />
            <ArtList imgSrc='https://i.pinimg.com/originals/e3/50/49/e35049593eace2264601e51e0a567b9c.jpg'/>
            <ArtList imgSrc='https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/07/Genshin-Impact-Albedo-Painting-1.jpg'/>
            <ArtList imgSrc='https://tse2.mm.bing.net/th/id/OIP.K2SvYXX2WKFKF83WiuLnVwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'/>
            <ArtList imgSrc='https://www.animesenpai.net/wp-content/uploads/2022/10/PicsArt_10-15-06.36.41_compress56.jpg'/>
            <ArtList imgSrc='https://i.pinimg.com/736x/f9/27/28/f92728ac44be1efe813b63d157d92fea.jpg'/>
        </div>

        <span className="loading loading-dots loading-xl bg-foreground"></span>
    </div>
  )
}

export default ExploreLayout
