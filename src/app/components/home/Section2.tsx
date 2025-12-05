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

const Section2 = () => {
  return (
    <div className="flex justify-between">
      <section className="flex flex-col gap-8">
        <h3 className="text-6xl font-semibold">
          Showcase, Sell,
          <br />
          <span className="text-red-500">& acquire arts to</span>
          <br />
          our marketplace.
        </h3>

        <p className="w-80">
          Dynamic community where artists and buyers seamlessly merge. ArtFusion
          brings together creation and enthusiast to share creativity
        </p>

        <div className="flex items-center gap-8">
            <button className="bg-white text-black p-2 px-8 rounded-full">Join Now</button>
            <button>Read More</button>
        </div>
      </section>

    
      <div className="relative w-[600px] h-[350px] flex items-center justify-center">
        {
            cardSection.map((item, key) => (
                <div key={key} className={`absolute w-60 h-60 ${item.style}  rounded-lg  overflow-hidden card-section2 `}>
                    <img src={item.src} alt="arts" className="w-full h-full object-cover"/>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Section2;
