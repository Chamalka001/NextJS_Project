'use client';

import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'><FaBug /></Link>
      <ul className='flex space-x-6'>
        <li>
          <Link
            href='/'
            className={`${
              currentPath === '/' ? 'text-zinc-900' : 'text-zinc-500'
            } hover:text-zinc-800 transition-colors`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href='/users'
            className={`${
              currentPath === '/users' ? 'text-zinc-900' : 'text-zinc-500'
            } hover:text-zinc-800 transition-colors`}
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
