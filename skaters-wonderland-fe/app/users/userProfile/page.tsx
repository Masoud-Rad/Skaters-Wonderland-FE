'use client';

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'



//**** usersType
interface UserSample {
    username: string;
    name: string;
    email: string;
    password: string;
    avatar_url: string;
    location: string;
    [key: string]: any;
}

interface UserResult {
    users: UserSample;
}


const UserProfile =  async() => {
    
    const router = useRouter();
    
    const searchParams = useSearchParams()
    const username = searchParams.get('username')
    
    const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/users/?username=${username}`)
    const {users}: UserResult = await res.json();
    const user= users[0];
      return (
    <>
    <h1 className="text-3xl font-bold underline text-center mb-8">User Profile</h1>
     
    {
        Object.keys(user).map((field)=>{
            return <div className=' m-2' key={user.username}>
                        <label>{field} :</label>
                        <h1 className='mt-1 bg-sky-900 text-xl text-white font-light'>{user[field as keyof UserSample]}</h1>
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

export default UserProfile