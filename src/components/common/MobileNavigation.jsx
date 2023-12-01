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

        <div className='flex gap-5 items-center relative'>
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
                {/* listing */}
                <div className='bg-primary flex gap-2 items-center py-[15px] px-[26px] rounded-full'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_208_19)">
    <path d="M19.7625 7.63751L10.3875 0.137506C10.2766 0.0487541 10.1389 0.000396729 9.99686 0.000396729C9.85486 0.000396729 9.71709 0.0487541 9.60624 0.137506L0.23124 7.63751C0.130102 7.71865 0.0567036 7.82923 0.0212132 7.95394C-0.0142772 8.07865 -0.0101023 8.21131 0.0331596 8.33354C0.0764215 8.45578 0.156628 8.56153 0.262668 8.63615C0.368707 8.71076 0.495329 8.75056 0.62499 8.75001H1.87499V19.375C1.87499 19.5408 1.94084 19.6997 2.05805 19.8169C2.17526 19.9342 2.33423 20 2.49999 20H15V18.75H12.5V13.125C12.5 12.9592 12.4341 12.8003 12.3169 12.6831C12.1997 12.5659 12.0408 12.5 11.875 12.5H8.12499C7.95923 12.5 7.80026 12.5659 7.68305 12.6831C7.56584 12.8003 7.49999 12.9592 7.49999 13.125V18.75H3.12499V8.75001H13.75V7.50001H2.40624L9.99999 1.42501L17.5937 7.50001H17.5C17.3342 7.50001 17.1753 7.56585 17.058 7.68306C16.9408 7.80027 16.875 7.95925 16.875 8.12501V11.875H18.125V8.75001H19.375C19.5041 8.74926 19.6298 8.70854 19.7349 8.63344C19.8399 8.55834 19.9191 8.45254 19.9616 8.3306C20.0041 8.20866 20.0077 8.07655 19.9721 7.95244C19.9364 7.82833 19.8632 7.71831 19.7625 7.63751ZM8.74999 13.75H11.25V18.75H8.74999V13.75Z" fill="white"/>
    <path d="M15.625 16.6188L14.8187 15.8125L13.9375 16.6937L15.1875 17.9437C15.3046 18.0602 15.463 18.1255 15.6281 18.1255C15.7932 18.1255 15.9516 18.0602 16.0687 17.9437L19.8187 14.1937L18.9375 13.3125L15.625 16.6188Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_208_19">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>

                    </span>

                    <span className='text-white font-[500] text-base'>
                    Add Listing
                    </span>
                </div>
            </div>
      </nav>
  );
};

export default MobileNavigation;
