'use client';

import { useRouter} from 'next/navigation'
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
    const router = useRouter();

    const res = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands/${params.land_id}`) 
    const {land}: LandResult = await res.json();
  return (
    <>

{
    Object.keys(land).map((key)=>{
        return <div className=' m-2' key={land.land_id}>
                    <label>{key} :</label>
                    <h1 className='mt-1 bg-gray-300 text-xl text-gray-900 font-light '>{land[key as keyof LandSample]}</h1>
                </div>
    })
}


<div>
<button type='button' onClick={()=> router.back()}>
Back
</button>
</div> 
<button type='button' onClick={()=> router.replace(`/`)}>
Home
</button>
</>
  )
}

export default SingleLand