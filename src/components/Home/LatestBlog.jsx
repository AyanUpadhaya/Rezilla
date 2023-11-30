import React from 'react'
import { blogOne, blogThree, blogTwo } from '../../assets/getAssets'

const LatestBlog = () => {
    return (
        <section className='w-full px-[30px] py-[100px] bg-[#2C097C] text-white  '>
          <div className="container mx-auto  flex flex-col justify-center items-center">
            <div className='space-y-[30px] mb-24'>
              <h4 className='text-white font-semilessbold text-base lg:text-xl text-center'>WHAT’S TRENDING</h4>
              <h2 className='text-white text-[27.6px] lg:text-5xl font-semibold text-center'>Latest Blogs & Posts</h2>
            </div>
          </div>
          <div className='container mx-auto flex flex-col lg:flex-row justify-center gap-[70px] '>
              <div className=' text-start flex flex-col justify-between '>
                <div className='relative flex-1 rounded-xl mb-[30px]'>
                    <img src={blogOne} alt="" className='w-full h-full mb-[30px] object-cover rounded-xl   ' />
                    <div className='absolute top-0 left-16 bg-white p-[10px] rounded-b-lg flex flex-col justify-center items-center'>
                        <p className='text-textNinetine font-semilessbold text-textdark'>28</p>
                        <p className='text-base text-darkgray'>Tue</p>
                    </div>
                </div>
                <h5 className='text-white font-semibold text-[27px] mb-5'>Top 10 Home Buying Mistakes to Avoid</h5>
                <p className='font-normal text-base text-white'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                <div className='mt-auto flex justify-end'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="24.5" fill="white" stroke="#3A0CA3"/>
  <path d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="#3A0CA3"/>
</svg>
                    </span>
                </div>
              </div>
              <div className=' text-start flex flex-col justify-between '>
                <div className='relative flex-1 rounded-xl mb-[30px]'>
                    <img src={blogTwo} alt="" className='w-full h-full  mb-[30px] object-cover rounded-xl ' />
                    <div className='absolute top-0 left-16 bg-white p-[10px] rounded-b-lg flex flex-col justify-center items-center'>
                        <p className='text-textNinetine font-semilessbold text-textdark'>28</p>
                        <p className='text-base text-darkgray'>Tue</p>
                    </div>
                </div>
                
                <h5 className='text-white font-semibold text-[27px] mb-5'>How to Stage Your Home for a Quick Sale</h5>
                <p className='font-normal text-base text-white'>Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.</p>
                <div className='mt-auto flex justify-end'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="24.5" fill="white" stroke="#3A0CA3"/>
  <path d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="#3A0CA3"/>
</svg>
                    </span>
                </div>
              </div>
              <div className=' text-start flex flex-col justify-between '>
                <div className='relative flex-1 rounded-xl mb-[30px]'>
                    <img src={blogThree} alt="" className='w-full h-full mb-[30px]  object-cover rounded-xl ' />  
                    <div className='absolute top-0 left-16 bg-white p-[10px] rounded-b-lg flex flex-col justify-center items-center'>
                        <p className='text-textNinetine font-semilessbold text-textdark'>28</p> 
                        <p className='text-base text-darkgray'>Tue</p>
                    </div>
                </div>
                
                <h5 className='text-white font-semibold text-[27px] mb-5'>5 Tips for First-Time Home Sellers</h5>
                <p className='font-normal text-base text-white'>In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.</p>
                <div className='mt-auto flex justify-end'>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="24.5" fill="white" stroke="#3A0CA3"/>
  <path d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="#3A0CA3"/>
</svg>
                    </span>
                </div>
              </div>
              
           </div>
           <div className="hidden lg:block container mx-auto pt-[70px]">
            <div className='flex justify-center gap-[39px] items-center'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="4" viewBox="0 0 104 4" fill="none">
  <path d="M2 2L102 1.99999" stroke="white" stroke-width="4" stroke-linecap="round"/>
</svg>
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="4" viewBox="0 0 104 4" fill="none">
  <path opacity="0.5" d="M2 2L102 1.99999" stroke="white" stroke-width="4" stroke-linecap="round"/>
</svg>
                </span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="4" viewBox="0 0 104 4" fill="none">
  <path opacity="0.5" d="M2 2L102 1.99999" stroke="white" stroke-width="4" stroke-linecap="round"/>
</svg>
                </span>
            </div>
           </div>
        </section>
      )
}

export default LatestBlog