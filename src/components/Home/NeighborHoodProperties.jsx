import React from 'react'
import {propertyOne,
    propertyTwo,
    propertyThree,
    propertyFour,
    propertyFive} from "../../assets/getAssets"
const NeighborHoodProperties = () => {
    
    return (
        <div className='w-full py-[100px]'>
            <div className='container mx-auto px-[19px] lg:px-[30px]  '>
                {/* top */}
                <div className='w-full '>
                    <h4 className='text-primary  text-base lg:text-[19px] font-semilessbold '>AREAS ACROSS THE TOWN</h4>
                    <h2 className='mb-[20px] lg:mb-[30px] font-semibold text-[27px]  text-[#0B090A]'>
                        Neighborhood Properties
                    </h2>
                </div>


                
                <div className='grid grid-flow-row grid-cols-2 lg:grid-cols-3 gap-[30px]'>

                    {/* one */}

                    <div className='w-full relative rounded-3xl shadow-propertyShadow '>
                        <img src={propertyOne} alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-cover bg-center absolute top-0 left-0 z-20' style={{backgroundImage:'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)'}}></div>
                        <div className='absolute left-5 bottom-5 z-30'>
                            <h4 className='text-[27.6px] lg:text-6xl text-white opacity-50 font-semibold'>216</h4>
                            <p className='text-white text-[13.3px] lg:text-[19.4px] font-semilessbold'>New York City, NY</p>
                        </div>

                    </div>

                    {/* two */}

                    <div className='w-full relative rounded-3xl shadow-propertyShadow '>
                        <img src={propertyTwo} alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-cover bg-center absolute top-0 left-0 z-20' style={{backgroundImage:'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)'}}></div>
                        <div className='absolute left-5 bottom-5 z-30'>
                            <h4 className='text-[27.6px] lg:text-6xl text-white opacity-50 font-semibold'>216</h4>
                            <p className='text-white text-[13.3px] lg:text-[19.4px] font-semilessbold'>New York City, NY</p>
                        </div>

                    </div>

                    {/* three */}

                    <div className='w-full relative rounded-3xl shadow-propertyShadow '>
                        <img src={propertyThree} alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-cover bg-center absolute top-0 left-0 z-20' style={{backgroundImage:'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)'}}></div>
                        <div className='absolute left-5 bottom-5 z-30'>
                            <h4 className='text-[27.6px] lg:text-6xl text-white opacity-50 font-semibold'>216</h4>
                            <p className='text-white text-[13.3px] lg:text-[19.4px] font-semilessbold'>New York City, NY</p>
                        </div>
                    </div>


                    {/* four */}

                    <div className='w-full lg:max-h-[320px] relative rounded-3xl shadow-propertyShadow '>
                        <img src={propertyFour} alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-cover bg-center absolute top-0 left-0 z-20' style={{backgroundImage:'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)'}}></div>
                        <div className='absolute left-5 bottom-5 z-30'>
                            <h4 className='text-[27.6px] lg:text-6xl text-white opacity-50 font-semibold'>216</h4>
                            <p className='text-white text-[13.3px] lg:text-[19.4px] font-semilessbold'>New York City, NY</p>
                        </div>
                    </div>

                    {/* five */}

                    <div className='lg:col-span-2 w-full lg:max-h-[320px] relative rounded-3xl shadow-propertyShadow '>
                        <img src={propertyFive} alt="" className='w-full h-full object-cover rounded-3xl' />
                        <div className='w-full h-full rounded-3xl bg-cover bg-center absolute top-0 left-0 z-20' style={{backgroundImage:'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)'}}></div>
                        <div className='absolute left-5 bottom-5 z-30'>
                            <h4 className='text-[27.6px] lg:text-6xl text-white opacity-50 font-semibold'>216</h4>
                            <p className='text-white text-[13.3px] lg:text-[19.4px] font-semilessbold'>New York City, NY</p>
                        </div>

                    </div>


                </div>



                {/* svg */}

                <div className='mt-[42px] flex justify-end '>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
  <circle opacity="0.5" cx="50.3013" cy="50.3013" r="50" transform="rotate(-30 50.3013 50.3013)" fill="url(#paint0_linear_70_203)"/>
  <defs>
    <linearGradient id="paint0_linear_70_203" x1="50.3013" y1="0.30127" x2="50.3013" y2="100.301" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4361EE"/>
      <stop offset="1" stop-color="#4361EE" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
                    </span>
                </div>  


               
            
            </div>
        </div>
    )
}

export default NeighborHoodProperties