import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const SiteNav = () => {
    const pathname = usePathname


  return (
    <nav>
        <ul className=' flex gap-x-5 text-[14px]'>
            <li>
                <Link href={""} className='text-zinc-600'>Home</Link>
            </li>
            <li>
                <Link href={""}>nav2</Link>
            </li>
            <li>
                <Link href={""}>nav3</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SiteNav