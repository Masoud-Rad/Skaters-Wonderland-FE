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
    <h1>Skater Wonderlands</h1>
    <ul>
        {
            lands.map(land => (
              <li key={land.land_id}><Link href={`/lands/single-land?land_id=${land.land_id}`}>{land.landname}</Link></li>)
         ) 
        }
    </ul>
    
    </>
  )
}

export default LandsPage