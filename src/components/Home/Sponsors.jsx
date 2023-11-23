import React from 'react'
import Marquee from "react-fast-marquee";
import { amazon, google, logitech, netflix, samsung, spotify } from '../../assets/getAssets';
const Sponsors = () => {
    const sponsorData = [
        {
            img:`${google}`
        },
        {
            img:`${netflix}`
        },
        {
            img:`${amazon}`
        },
        {
            img:`${spotify}`
        },
        {
            img:`${samsung}`
        },
        {
            img:`${logitech}`
        },
    ]
  return (
    <div className=' relative container mx-auto mt-[68px] py-[50px]'>
        <h4 className='mb-[60px] text-darkgray font-semilessbold text-base text-center'>Trusted by 100+ Companies across the globe! </h4>
        <div className="w-full">
            <Marquee className='h-[80px]'>
                    {sponsorData.map((item,i)=>(<div key={i} className={`h-[36px] me-24 bg-no-repeat bg-center bg-cover mix-blend-luminosity`}>
                        <img src={item?.img} className='w-full grayscale'/>
                    </div>))}
            </Marquee>
        </div>
        <span className='hidden lg:absolute top-0 left-0'>
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
  <circle opacity="0.5" cx="50.3013" cy="50.3013" r="50" transform="rotate(-30 50.3013 50.3013)" fill="url(#paint0_linear_70_162)"/>
  <defs>
    <linearGradient id="paint0_linear_70_162" x1="50.3013" y1="0.30127" x2="50.3013" y2="100.301" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4361EE"/>
      <stop offset="1" stop-color="#4361EE" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
        </span>
    </div>
  )
}

export default Sponsors