'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Nav = () => {

    const [toggleDropdown, settoggleDropdown] = useState(false)

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center ml-14 mt-5'>
            <Image
            src='/assets/Logo.svg'
            alt='logo'
            width={70}
            height={70}
            className='object-contain'
            ></Image>
        </Link>

        <div className="sm:flex hidden">
            <div className='flex gap-3 md:gap-5 mr-14 mt-5'>
                <Link href='/'className="text-black text-base font-medium  hover:text-cyan-500">
                Home
                </Link>
                <Link href='/about_us'className="text-black text-base font-medium ml-7 hover:text-cyan-500">
                About Us
                </Link>
                <Link href='/products'className="text-black text-base font-medium ml-7 hover:text-cyan-500">
                Products
                </Link>
                <Link href='/contact_us'className="text-black text-base font-medium ml-7 hover:text-cyan-500">
                Contact Us
                </Link>
            </div>
        </div>

        <div className="sm:hidden flex relative">
            <div className="flex mr-10 mt-6 " >
            <Image
            src='/assets/ham.svg'
            alt='logo'
            width={30}
            height={30}
            className='object-contain'
            onClick={()=>settoggleDropdown((prev)=>!prev)}
            ></Image>
            

            {toggleDropdown && (
                <div className="dropdown">
                    <Link href='/'className="text-black text-base font-medium mr-7 hover:text-cyan-500" onClick={()=>settoggleDropdown(false)}>
                    Home
                    </Link>
                    <hr/>
                    <Link href='/about_us'className="text-black text-base font-medium mr-7 hover:text-cyan-500">
                    About Us
                    </Link>
                    <hr/>
                    <Link href='/products'className="text-black text-base font-medium mr-7 hover:text-cyan-500">
                    Products
                    </Link>
                    <hr/>
                    <Link href='/contact_us'className="text-black text-base font-medium mr-7 hover:text-cyan-500">
                    Contact Us
                    </Link>
                    <hr/>
                </div>
            )}
            </div>
        </div>
    </nav>
  )
}

export default Nav