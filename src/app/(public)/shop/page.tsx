import React from 'react'
import ShopHeader from '@/app/components/profile/shop/ShopHeader'
import Shop from '@/app/components/ui/Shop'
import artwork from "@/data/artlist.json"
import { Link } from 'lucide-react'

const page = () => {
  return (
    <div >
        <ShopHeader />

        <div className='max-w-7xl w-full m-auto p-4 flex flex-col gap-8 mt-4'>
          <div>
            <h4 className='font-semibold text-2xl '>Browse featured shop</h4>
            <p>Browse trending creations from other artists.</p>
          </div>

            <div className='flex flex-col gap-10'>
              {
                artwork.map((item, key) => (           
                     <Shop artDetails={item} key={key} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default page
