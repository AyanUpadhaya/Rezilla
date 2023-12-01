// MobileNavigation.js
import React, { useState } from 'react';

const MobileNavigation = ({isOpen,toggleNavigation}) => {
  
  return (
    <nav className={`mt-2 ${isOpen ? 'h-[min-content]' : 'h-0 '} w-full px-10 ${isOpen && 'py-6'} overflow-hidden duration-300 absolute right-0 top-20 rounded-b-xl bg-white shadow-xl lg:hidden`}>
        <ul>
          <li className='text-textdark text-base font-semilessbold mt-3'>
          Home
          </li>
          <li className='text-textdark text-base font-semilessbold mt-3'>
          About
          </li>
          <li className='text-textdark text-base font-semilessbold mt-3'>
          Listing
          </li>
          <li className='text-textdark text-base font-semilessbold mt-3'>
          Services
          </li>
          <li className='text-textdark text-base font-semilessbold mt-3'>
          Blogs
          </li>
        </ul>

        <div className='flex gap-5 items-center relative my-3'>
                {/* login */}
                <div className='flex gap-2 items-center'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M9.99999 9.99998C11.4912 9.99998 12.7 8.79119 12.7 7.29998C12.7 5.80881 11.4912 4.59998 9.99999 4.59998C8.50878 4.59998 7.29999 5.80881 7.29999 7.29998C7.29999 8.79119 8.50878 9.99998 9.99999 9.99998Z" stroke="#2B2B2B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="#2B2B2B" stroke-width="1.6"/>
    </svg>
                    </span>
                    <span className='text-[#2b2b2b] font-[500] text-base'>Login/Register</span>
                </div>
            
            </div>
      </nav>
  );
};

export default MobileNavigation;
