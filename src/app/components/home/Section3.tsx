const cardSection = [
    {
        src:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTE1jTC7pvWtoaHM2rLuTq6duGlDVqQgllw&s",
        style: " -left-40 top-0"
    },
    {
        src:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPFB5QGKP_Gy0k3jvqIpKc4Haxo9cUDJNsQ&s",
        style: " -left-10 top-10 z-10"
    },
    {
        src:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnK4v11m_LtS8lepDLCWBLE2rH3OoORmbR73cx0jP_q02JrlBzDOzIwX1PLizhRVqwIXE&usqp=CAU",
        style: " left-10 top-20 z-20"
    },
    {
        src:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQfFzMVVONAVa_PsimFsXCZFKBIZmR8Otzw&s",
        style: " left-30 top-30 z-30"
    },
    {
        src:   "https://i0.wp.com/magzoid.com/wp-content/uploads/2023/07/Snapinsta.app_352253755_1421927701890393_5526314807261586687_n_1080.jpg?resize=749%2C936&ssl=1",
        style: " left-50 top-40 z-40"
    },
    {
        src:  "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1697499293277-U0GFDOZUTBCFI1TK7PQR/Art_of_Sam_Yang_38.jpeg",
        style: " left-70 top-50 z-50"
    }
]

const Section3 = () => {
  return (
    <section className="h-[100vh]">
        <p className="text-sm">ARTWORK BY JEAVEN A. PARAS</p>
        <h1 className="text-4xl font-semibold">Featured Artwork <br /><span className="text-red-500">of the Month</span></h1>
    
        <div className="relative h-120 w-full bg-primary rounded-md">
            <img 
                src={cardSection[1].src} 
                alt=""
                // width={800}
                // height={800}
                className="h-full w-full object-cover"
            />

            <div>

            </div>
        </div>
    </section>
  )
}

export default Section3
