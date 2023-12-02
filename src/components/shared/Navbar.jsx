import React, { useState } from 'react'
import MobileNavigation from '../common/MobileNavigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <>
    <div className='hidden lg:block w-full bg-primary py-4'>
        <div className="container mx-auto flex justify-between items-center">
            <div className='flex gap-2 items-center'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
  <path d="M13 7.4C13 10.9346 7 17 7 17C7 17 1 10.9346 1 7.4C1 3.86538 3.68629 1 7 1C10.3137 1 13 3.86538 13 7.4Z" stroke="white" stroke-width="1.2"/>
  <path d="M7 8.19998C7.41422 8.19998 7.75 7.84182 7.75 7.39998C7.75 6.95815 7.41422 6.59998 7 6.59998C6.58578 6.59998 6.25 6.95815 6.25 7.39998C6.25 7.84182 6.58578 8.19998 7 8.19998Z" fill="#2B2B2B" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span>
                <span className='text-white font-normal text-sm'>
                Rezilla, 18 Grattan St, Brooklyn
                </span>
            </div>

            <div className='flex justify-between items-center gap-[30px]'>
                <div className='flex gap-2 items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M15.5425 1.66261L15.5161 1.64609L12.1749 0L8.56855 4.8084L10.2277 7.02078C10.1781 7.85512 9.82426 8.6423 9.23324 9.23331C8.64223 9.82432 7.85504 10.1781 7.0207 10.2278L4.80836 8.56859L0 12.1748L1.6324 15.4881L1.64613 15.5161L1.66269 15.5425C1.7498 15.6829 1.87139 15.7986 2.01588 15.8787C2.16036 15.9587 2.32295 16.0005 2.48814 16H3.3503C5.01148 16 6.6564 15.6728 8.19114 15.0371C9.72587 14.4014 11.1204 13.4696 12.295 12.295C13.4696 11.1203 14.4014 9.72584 15.0371 8.1911C15.6728 6.65636 16 5.01144 16 3.35026V2.48807C16.0005 2.32287 15.9588 2.16029 15.8787 2.0158C15.7986 1.87131 15.6829 1.74972 15.5425 1.66261ZM14.7653 3.35026C14.7653 9.64451 9.64451 14.7653 3.3503 14.7653H2.65267L1.56047 12.548L4.8086 10.1119L6.61698 11.4682H6.82276C8.05445 11.4668 9.23529 10.9769 10.1062 10.106C10.9772 9.23502 11.4671 8.05418 11.4684 6.82249V6.61671L10.1122 4.80836L12.548 1.56043L14.7653 2.65283V3.35026Z" fill="white"/>
</svg></span>
            <span className='text-white font-normal text-sm'>+1 206-214-2298</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
  <path d="M5 4.20001L9 7.00001L13 4.20001" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z" stroke="white" stroke-width="1.2"/>
</svg>              
                    </span>
                    <span className='text-white font-normal text-sm'>
                    support@rezilla.com
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full bg-white px-[19px] lg:px-0'>
        <div className="-black container mx-auto flex justify-between items-center py-[32px] lg:py-5 md:px-0">
            <ul className=' hidden lg:flex gap-8 items-center  '>
                <li>Home</li>
                <li>About</li>
                <li>Listing</li>
                <li>Services</li>
                <li>Blogs</li>
            </ul>

            {/* logo */}

            <div className=' flex gap-2 items-center'>
                <div className='bg-primary w-12 h-12 p-3 flex justify-center items-center rounded-full'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_2_3)">
    <path d="M23.715 9.16499L12.465 0.164989C12.332 0.0584866 12.1667 0.000457764 11.9963 0.000457764C11.8258 0.000457764 11.6605 0.0584866 11.5275 0.164989L0.2775 9.16499C0.156135 9.26236 0.0680565 9.39506 0.025468 9.54471C-0.0171205 9.69436 -0.0121105 9.85356 0.0398037 10.0002C0.091718 10.1469 0.187966 10.2738 0.315214 10.3634C0.442461 10.4529 0.594407 10.5006 0.75 10.5H2.25V23.25C2.25 23.4489 2.32902 23.6397 2.46967 23.7803C2.61032 23.921 2.80109 24 3 24H18V22.5H15V15.75C15 15.5511 14.921 15.3603 14.7803 15.2197C14.6397 15.079 14.4489 15 14.25 15H9.75C9.55109 15 9.36032 15.079 9.21967 15.2197C9.07902 15.3603 9 15.5511 9 15.75V22.5H3.75V10.5H16.5V8.99999H2.8875L12 1.70999L21.1125 8.99999H21C20.8011 8.99999 20.6103 9.07901 20.4697 9.21966C20.329 9.36031 20.25 9.55108 20.25 9.74999V14.25H21.75V10.5H23.25C23.405 10.4991 23.5558 10.4502 23.6819 10.3601C23.8079 10.27 23.903 10.143 23.9539 9.9967C24.0049 9.85037 24.0093 9.69184 23.9665 9.54291C23.9237 9.39398 23.8359 9.26195 23.715 9.16499ZM10.5 16.5H13.5V22.5H10.5V16.5Z" fill="white"/>
    <path d="M18.75 19.9425L17.7825 18.975L16.725 20.0325L18.225 21.5325C18.3655 21.6722 18.5556 21.7506 18.7537 21.7506C18.9519 21.7506 19.142 21.6722 19.2825 21.5325L23.7825 17.0325L22.725 15.975L18.75 19.9425Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2_3">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
                    </span>
                </div>
                <div className='text-[#1E1E1E] font-semibold text-xl'>
                Rezilla
                </div>
            </div>

            <div className='hidden  lg:flex gap-5 items-center justify-end relative'>
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
            <div className='lg:hidden' onClick={toggleNavigation}>
  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
  <path d="M24 0H0V2.18182H24V0Z" fill="#0B090A"/>
  <path d="M24 9.81818H0V12H24V9.81818Z" fill="#0B090A"/>
  <path d="M24 19.6364H0V21.8182H24V19.6364Z" fill="#0B090A"/>
</svg>

            </div>
            <MobileNavigation isOpen={isOpen} toggleNavigation={toggleNavigation}></MobileNavigation>
        </div>
    </div>
    
    </>
  )
}

export default Navbar