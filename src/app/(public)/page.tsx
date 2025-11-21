const cardSection : string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTE1jTC7pvWtoaHM2rLuTq6duGlDVqQgllw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWPFB5QGKP_Gy0k3jvqIpKc4Haxo9cUDJNsQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnK4v11m_LtS8lepDLCWBLE2rH3OoORmbR73cx0jP_q02JrlBzDOzIwX1PLizhRVqwIXE&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQfFzMVVONAVa_PsimFsXCZFKBIZmR8Otzw&s",
  "https://i0.wp.com/magzoid.com/wp-content/uploads/2023/07/Snapinsta.app_352253755_1421927701890393_5526314807261586687_n_1080.jpg?resize=749%2C936&ssl=1",
  "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1697499293277-U0GFDOZUTBCFI1TK7PQR/Art_of_Sam_Yang_38.jpeg"
];

const Homepage = () => {
  return (
    <div className="max-w-[1680px] w-full mx-auto">
      <main className="flex justify-center">
        <section className="w-full min-h-[80vh] flex flex-col gap-10 items-center justify-center">
          <h1 className="text-7xl text-center font-lg">A place to display your <br/>masterpiece.</h1>

            <ul className="flex gap-5 justify-center">
              {
                cardSection.map((item, key) => (
                  <li className="h-55 w-55 bg-primary rounded-md overflow-hidden" key={key} > 
                    <img 
                      src={item}             
                      alt="" 
                      className="h-full w-full object-cover"  
                    />
                  </li>
                ))
              }
            </ul>

          <p>Artist can display their masterpieces, and buyer can discover and buy your art</p>
       
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 cursor-pointer rounded-full font-semibold py-2">Join Now</button>
            <button className=" px-8 rounded-full font-semibold py-2 cursor-pointer ">Learn More</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Homepage;