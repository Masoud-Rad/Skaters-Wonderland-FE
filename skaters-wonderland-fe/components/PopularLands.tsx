'use client';
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
const PopularLands = async () => {
    const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands/?sort_by=vote&order_by=DESC&ourputCount=4`)
    const {lands}: LandResult = await res.json();
  return (
    <>
    <ul className="flex flex-col md:flex-row md:overflow-hidden shadow-sm ">
        {
            lands.map(land => (
              <li key={land.land_id} className={`w-full md:w-64 m-1 p-1 hover:bg-sky-100 hover:text-blue-600 ${
              // Add responsive font size classes based on screen size
              'text-base md:text-sm lg:text-lg'
            }`}  >
                <Link href={`/lands/${land.land_id}`} className='hover: underline'>{land.landname}</Link>
                <img src={land.land_img_url} alt="wonderLand's pic" />
                <span>{land.city}</span>
              </li>)
         ) 
        }
    </ul>
    
    </>
  )
}

export default PopularLands