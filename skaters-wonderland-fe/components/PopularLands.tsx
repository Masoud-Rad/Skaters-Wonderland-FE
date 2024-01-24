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
    const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands/?sort_by=vote&order_by=DESC`)
    const {lands}: LandResult = await res.json();
  return (
    <>
    <ul className="flex ">
        {
            lands.map(land => (
              <li className='m-1 p-1 bg-gray-50 hover:bg-slate-100' key={land.land_id} >
                <Link href={`/lands/${land.land_id}`}>{land.landname}</Link>
                <img src={land.land_img_url} width={500} height={500}/>
                <span>{land.city}</span>
              </li>)
         ) 
        }
    </ul>
    
    </>
  )
}

export default PopularLands