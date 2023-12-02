import React from 'react'
import { agent } from '../../assets/getAssets'

const RegisterNow = () => {
  return (
    <div className='w-full h-full  py-20 lg:py-[50px] lg:py-[100px]  '>
        <div className='  container mx-auto lg:bg-white bg-primary h-full  rounded-[30px] relative flex flex-col lg:flex-row items-center lg:px-5 px-[19px]  lg:after:content-[""] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:w-full lg:after:h-[85%]  lg:after:z-50 lg:after:bg-primary lg:after:rounded-[30px]'>
            <div className='pt-[100px] lg:pt-0 w-full  flex flex-col-reverse lg:flex-row lg:items-center gap-10 justify-between relative z-[1000] '>
                <div className='relative'>
                <img src={agent} alt="" />
                </div>
                <div className=' text-white flex-1  lg:pt-16 flex flex-col lg:flex-row gap-4 lg:justify-center lg:items-center'>
                    <div className='lg:max-w-md'> 
                        <h4 className='font-semibold mb-[30px] text-[27px] lg:text-5xl'>Become a Agent.</h4>
                        <p className='font-normal text-base'> 
                        Fusce venenatis tellus a felis scelerisque. venenatis tellus a felis scelerisque. 
                        </p>
                        </div>
                        
                    <div className=' flex-shrink-0 flex-1 flex justify-start lg:items-center relative z-[1000]  '>
                      
                    <button className='  bg-white text-primary font-semilessbold text-base px-[30px] py-[19.5px] rounded-[30px]'>
                          Register Now
                          </button>
                    </div>
                </div>
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