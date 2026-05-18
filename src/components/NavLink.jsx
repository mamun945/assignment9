'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
 <Link
  href={href}
  className={`
    relative px-4 py-2 rounded-xl text-sm font-medium

    transition-all duration-300 ease-out
    transform hover:scale-[1.05]

    border border-transparent

    hover:bg-slate-100 hover:text-slate-900
    dark:hover:bg-slate-800

    active:scale-95

    ${
      isActive
        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200'
        : 'text-slate-600'
    }
  `}
>
  {children}

  {/* Active underline animation */}
  <span
    className={`
      absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2
      bg-emerald-500 rounded-full
      transition-all duration-300

      ${isActive ? 'w-6' : 'w-0'}
    `}
  />
</Link>
  );
};

export default NavLink;
