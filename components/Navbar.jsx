import Link from 'next/link';
import React from 'react';
import { MdSportsVolleyball } from 'react-icons/md';
import { Img } from './styled-components/StyledComponents';
export default function Navbar() {
  return (
    <div className='w-full font-pops shadow-md bg-[#313444]'>
      <div className='py-8 mx-auto'>
        <nav className='flex justify-between web-width items-center'>
          {/* LOGO */}
          <div className='flex'>
            <Link href='/'>
              <div className='flex text-white font-semibold items-center gap-3'>
                <MdSportsVolleyball color='#EAB308' size={33} />{' '}
                <h1 className='text-[#EAB308] text-xl tracking-wide'>
                  Christina
                </h1>
              </div>
            </Link>
          </div>
          {/* LINKS */}
          <ul className='list-none gap-8 e items-center font-medium hidden xl:flex  justify-center '>
            <li className='text-neutral-200'>
              <a href='#'>Services</a>
            </li>
            <li className='text-neutral-400'>
              <a href='#'>Work</a>
            </li>
            <li className='text-neutral-400'>
              <a href='#'>About</a>
            </li>
            <li className='bg-yellow-500 py-2 px-5 rounded-full'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
