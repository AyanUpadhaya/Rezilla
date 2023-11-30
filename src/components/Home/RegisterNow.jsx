import React from 'react'
import { agent } from '../../assets/getAssets'

const RegisterNow = () => {
  return (
    <div className='w-full h-full  py-20 lg:py-[100px]'>
        <div className='container mx-auto bg-primary  rounded-[30px] relative flex items-center lg:px-5 px-[30px] before:content-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-40  before:bg-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[80%]  after:z-50 after:bg-primary after:rounded-[30px]'>
            <div className='flex items-center gap-10 relative z-[1000] '>
                <div className='relative'>
                <img src={agent} alt="" />
                </div>
                <div className='text-white max-w-md pt-10'>
                    <h4 className='text-textNinetine font-semibold mb-[30px] text-5xl'>Become a Agent.</h4>
                    <p className='font-normal text-base'>
                    Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. 
                    </p>
                </div>
            </div>
            <div className='flex-shrink-0 flex-1 flex justify-start items-center relative z-[1000] pt-10 '>
                <button className='ml-10 bg-white text-primary font-semilessbold text-base px-[30px] py-[19.5px] rounded-[30px]'>
                Register Now
                </button>

            </div>

            <div className='absolute top-8 right-5  z-[1000]'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
  <circle opacity="0.5" cx="50.3013" cy="50.3013" r="50" transform="rotate(30 50.3013 50.3013)" fill="url(#paint0_linear_70_389)"/>
  <defs>
    <linearGradient id="paint0_linear_70_389" x1="50.3013" y1="0.30127" x2="50.3013" y2="100.301" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
                </span>
            </div>
        </div>
    </div>
  )
}

export default RegisterNow