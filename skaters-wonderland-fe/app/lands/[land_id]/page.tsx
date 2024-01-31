'use client';

import React from 'react'

type SingleLandProps = {
    params:{
        land_id: string;
    };
}

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
    [key: string]: any;
  }

interface LandResult {
    land: LandSample;
}

const SingleLand = async({params}: SingleLandProps) => {
    

    const res = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands/${params.land_id}`) 
    const {land}: LandResult = await res.json(); 
  return (
    <>
 <div className="max-w-2xl mx-auto mt-8 mb-4">
      <div className="mb-4">
        <img src={land.land_img_url} alt={land.landname} className="w-full h-64 object-cover rounded-md" />
      </div>
      <div className=" p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">{land.landname}</h1>
        <p className=" mb-4">{land.description}</p>

        {/* Display other details */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p>{land.city}, {land.country}</p>
            <p>{land.postcode}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Safety Rating</h2>
            <p>Average: {land.safety_rating_ave}</p>
            <p>Total Votes: {land.safety_rating_count}</p>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>

      {/* Navigation buttons */}
      
    </div>


</>
  )
}

export default SingleLand