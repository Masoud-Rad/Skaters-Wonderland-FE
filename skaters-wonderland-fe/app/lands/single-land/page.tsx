'use client';

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

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

const SingleLand = async() => {
    
const router = useRouter();

const searchParams = useSearchParams()
const landId = searchParams.get('land_id')

const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands/${landId}`)
const {land}: LandResult = await res.json();

  return (
<>
{
    Object.keys(land).map((key)=>{
        return <div key={land.land_id}>
                    <label>{key} :</label>
                    <h1>{land[key as keyof LandSample]}</h1>
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

/*

'use client';

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState }  from 'react'

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

const SingleLand = () => {
    
const router = useRouter();

const searchParams = useSearchParams()
const landId = searchParams.get('land_id')

const [land, setLand] = useState<LandSample | null>(null);

useEffect(() => {
    const fetchLand = async () => {
      try {
const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/lands/${landId}`)
const {land}: LandResult = await res.json();
setLand(land);
} catch (error) {
  console.error('Error fetching land:', error);
}
};

if (landId) {
    fetchLand();
  }
}, [landId]);

if (!land) {
    return <div>Loading...</div>;
  }

  return (
<>
{
    Object.keys(land).map((key)=>{
        return <div key={land.land_id}>
                    <label>{key}</label>
                    <h1>{land[key as keyof LandSample]}</h1>
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



*/