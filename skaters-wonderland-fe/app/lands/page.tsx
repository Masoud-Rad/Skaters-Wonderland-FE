
import React from 'react'
import Link from 'next/link'

//**** landsType
interface LandSample {
    land_id: number;
    landname: string;
    city: string;
    country: string;
    postcode: string;
    description: string;
    created_at: Date;
    vote: number;
    safety_rating_total: number;
    safety_rating_count: number;
    safety_rating_ave: number;
    suitability_rating_total: number;
    suitability_rating_count: number;
    suitability_rating_ave: number;
    cost: string;
    is_public: boolean;
    has_rink: boolean;
    suitabile_for: string;
    land_img_url: string;
    username: string;
  }

interface LandResult {
    lands: LandSample[];
}

const LandsPage =  async () => {

   const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands`)
   const {lands}: LandResult = await res.json();
   
  return (
    <>
    <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold underline text-center m-8">Skater Wonderlands</h1>
    <ul className="flex flex-wrap justify-center gap-4 md:justify-between md:mx-4 lg:mx-8">
        {
            lands.map(land => (
              <li key={land.land_id} className='w-full md:w-1/2 lg:w-1/3 mb-8 p-4 rounded-md'  >
                <Link href={`/lands/${land.land_id}`} className="block mb-2 sm:text-lg md:text-xl lg:text-3xl font-semibold  hover:underline">{land.landname}</Link>
                <img src={land.land_img_url} alt="wonderLand's pic" className="w-full h-40 object-cover mb-2 rounded-md"/>
                <span className="text-gray-700">{land.city}</span>
              </li>)
         ) 
        }
    </ul>

    
    
    
    </>
  )
}

export default LandsPage