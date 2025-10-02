import TopSellersCard from "./TopSellersCard"

export default function TopSellers() {
  return(
    <div>

       <div className="flex item-center justify-between"> 
              <h3 > Top Sellers  </h3>
               <button className="text-gray-400 hover:text-white flex items-right gap-1">
    See more <span className="text-lg">{'>'}</span>
  </button>
        </div> 
            
        
    <div className="mt-3 flex flex-wrap gap-6 justify-between"> 
        <TopSellersCard />
        <TopSellersCard />
        <TopSellersCard />
        <TopSellersCard />
    </div>

    </div>
  )}
