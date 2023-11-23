import React from 'react'
import { elipse, group } from '../../assets/getAssets'

const Badges = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-8 relative -mt-16'>
        <div className='max-w-[320px] max-h-[100px] bg-white shadow-badgeshadow flex items-center gap-10 py-7 px-9 rounded-6xl'>
            <span>
                <img src={group} alt="group" />
            </span>
            <span className='text-base font-semilessbold text-textdark '>
            72k+ Happy 
Customer
            </span>
        </div>
        <div className='max-w-[320px] max-h-[100px] bg-white shadow-badgeshadow flex items-center gap-10 py-7 px-9 rounded-6xl'>
            <span>
                <img src={elipse} alt="group" />
            </span>
            <span className='text-base font-semilessbold text-textdark '>
            72k+ Happy 
Customer
            </span>
        </div>
    </div>
  )
}

export default Badges