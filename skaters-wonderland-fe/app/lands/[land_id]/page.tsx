

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
 <div className='max-w-2xl mx-auto mt-8 mb-4 '>
      <div className="mb-4">
        <img src={land.land_img_url? land.land_img_url:""} alt={land.landname} className="w-full h-64 object-cover rounded-md" />
      </div>
      <div className=" p-6 rounded-md shadow-md">
        <h1 className="font-bold mb-4 sm:text-lg md:text-xl lg:text-3xl">{land.landname}</h1>
        <p className=" mb-4 sm:text-sm md:text-lg lg:text-xl">{land.description}</p>

        <div className='mb-3'>
            <h2 className="sm:text-lg md:text-xl lg:text-3xl font-semibold mb-2">Location</h2>
            <p>{land.city}, {land.country}</p>
            <p>{land.postcode}</p>
          </div>

        <div className="grid grid-cols-2 gap-4">
          <div className=' border p-2 rounded-xl'>
            <p className=' sm:text-xs md:text-sm lg:text-l'>Safety : {land.safety_rating_ave} </p>
            <div className='border-t'>
            <p className=' sm:text-xs md:text-sm '>How would you rate the safety of this place? </p>
            <button className='btn p-1 m-1'>1</button><button className='btn p-1 m-1'>2</button><button className='btn p-1 m-1'>3</button><button className='btn p-1 m-1'>4</button><button className='btn p-1 m-1'>5</button>
            </div>
          </div>

          <div className=' border p-2 rounded-xl'>
            <p className=' sm:text-xs md:text-sm lg:text-l'>Suitability : {land.suitability_rating_ave} </p>
            <div className='border-t '>
            <p className=' sm:text-xs md:text-sm'>How would you rate the suitability of this place? </p>
            <button className='btn p-1 m-1'>1</button><button className='btn p-1 m-1'>2</button><button className='btn p-1 m-1'>3</button><button className='btn p-1 m-1'>4</button><button className='btn p-1 m-1'>5</button>
            </div>
          </div>

        </div>
      </div>

      
    </div>


</>
  )
}

export default SingleLand