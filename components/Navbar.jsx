import React, { useState } from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from 'next/link';

const Navbar = () => {
    const { user, error, isLoading } = useUser();
    const [showDrop, setShowDrop] = useState(false);
    console.log(user);
  return (
    <div className='h-24 w-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 flex justify-between items-center' style={{borderBottomLeftRadius:"5px", borderBottomRightRadius:"5px"}}>
        <img src="/logo.png" className='h-[40px] w-[150px]'/>
        <div className='relative'>
            <img src={user?.picture} onClick={() => setShowDrop(!showDrop)} className='h-10 w-10 rounded-full cursor-pointer'/>
            {showDrop && <div className='h-24 w-24 bg-black text-white font-medium absolute right-[1rem] top-[2.5rem] rounded-md pt-2 flex flex-col items-center'>
                <Link href="/" className='hover:text-purple-500'>Profile</Link>
                <Link href="/api/auth/logout" className='hover:text-purple-500'>Logout</Link>
            </div>}
        </div>  
    </div>
  )
}

export default Navbar