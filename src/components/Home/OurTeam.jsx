import React from 'react'
import {
  teamOne,
  teamTwo,
  teamThree,
  teamFour
} from "../../assets/getAssets"
const OurTeam = () => {
    return (
        <section className='w-full py-[50px] lg:py-[100px]  bg-white  '>
          <div className="container mx-auto  flex flex-col justify-center items-center">
            <div className='space-y-[30px] mb-24'>
              <h4 className='text-primary font-semilessbold text-xl text-center'>Introduce yourself to</h4>
              <h2 className='text-sectionTitle text-[27.6px] lg:text-5xl font-semibold text-center'>Our Team of Experts</h2>
            </div>
          </div>
          <div className='container mx-auto flex flex-col lg:flex-row justify-center items-center gap-[70px] '>
              <div className=' text-center '>
                <img src={teamOne} alt="" className='w-full h-full object-cover mb-8' />
                <h5 className='text-textdark font-semibold text-[27px] mb-8'>Brendon M</h5>
                <p className='font-semilessbold text-[13px] text-primary'>CEO & Founder</p>
              </div>
              <div className=' text-center '>
                <img src={teamTwo} alt="" className='w-full h-full object-cover mb-8' />
                <h5 className='text-textdark font-semibold text-[27px] mb-8'>Jodi Appleby</h5>
                <p className='font-semilessbold text-[13px] text-primary'>Real Estate Developer</p>
              </div>
              <div className=' text-center '>
                <img src={teamThree} alt="" className='w-full h-full object-cover mb-8' />
                <h5 className='text-textdark font-semibold text-[27px] mb-8'>Justin S. Meza</h5>
                <p className='font-semilessbold text-[13px] text-primary'>Listing Agent</p>
              </div>
              <div className=' text-center '>
                <img src={teamFour} alt="" className='w-full h-full object-cover mb-8' />
                <h5 className='text-textdark font-semibold text-[27px] mb-8'>Susan Smith</h5>
                <p className='font-semilessbold text-[13px] text-primary'>Buyer's Agent</p>
              </div>
              
            </div>
        </section>
      )
}

export default OurTeam