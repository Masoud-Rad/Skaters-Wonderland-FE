import React from 'react'
import Link from 'next/link'


//**** usersType
interface UserSample {
    username: string;
    name: string;
    email: string;
    password: string;
    avatar_url: string;
    location: string;
}

interface UserResult {
    users: UserSample[];
  }

const UsersPage = async () => {

    const res: Response = await fetch(`https://skaters-wonderland-be.onrender.com/api/users`)
    const {users}: UserResult = await res.json();
    
   return (
     <>
     <h1 className="text-3xl font-bold underline text-center mb-8">List of All users</h1>
     <ul>
         {
             users.map(user => (
               <li className='m-1 p-1 bg-gray-400 hover:bg-slate-500' key={user.username}><Link href={`/users/userProfile?username=${user.username}`}>{user.name}</Link></li>)
          ) 
         }
     </ul>
     
     </>
   )
}

export default UsersPage