import React, { useState } from 'react'
import VerticalSlideCarousel from '../carousels/VerticalSlideCarousel'

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Total number of slides
    const totalSlides = 3; // Adjust this based on the number of slides

    // Function to handle moving to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide < totalSlides - 1 ? prevSlide + 1 : 0));
    };

    // Function to handle moving to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : totalSlides - 1));
    };

    return (
        <div className='w-full h-full py-[50px] lg:py-[100px] '>
            <div className='container mx-auto px-[19px] lg:px-[60px] pt-[89px] flex flex-col lg:flex-row gap-6 justify-between '>
                <div className='w-full max-w-[415px] flex-shrink-0 '>
                    <h4 className='text-primary  text-base lg:text-[19px] font-semilessbold  lg:mb-[30px] '>TESTIMONIALS</h4>
                    <h2 className=' mb-[30px] lg:my-[30px] font-semibold text-[27px] lg:text-[39px] text-[#0B090A] leading-normal'>
                        Look What Our Customers Say!
                    </h2>
                    <p className='text-[13.3px] lg:text-base font-normal text-[#808080] leading-[26px] mb-[60px]'>
                    Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. 
                    </p>
                    <div className='flex items-center gap-[50px]'>
                        <button className='cursor-pointer' onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="24.5" transform="rotate(180 25 25)" fill="white" stroke="#4361EE"/>
  <path d="M35 26C35.5523 26 36 25.5523 36 25C36 24.4477 35.5523 24 35 24L35 26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM35 24L15 24L15 26L35 26L35 24Z" fill="#4361EE"/>
</svg>
                        </button>

                        <button className='cursor-pointer' onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <circle cx="25" cy="25" r="24.5" fill="white" stroke="#4361EE"/>
  <path d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="#4361EE"/>
</svg>
                        </button>
                        
                    </div>


                </div>

                <div className='flex-shrink-0  flex justify-end items-center relative lg:pl-5 '>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-10 z-[9999] '>
                        <div className='absolute -top-5 left-[80%] lg:left-0 z-0 '>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
  <circle opacity="0.5" cx="30.9808" cy="30.9808" r="30" transform="rotate(-30 30.9808 30.9808)" fill="url(#paint0_linear_70_388)"/>
  <defs>
    <linearGradient id="paint0_linear_70_388" x1="30.9808" y1="0.980762" x2="30.9808" y2="60.9808" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4361EE"/>
      <stop offset="1" stop-color="#4361EE" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
                        </span>
                        </div>
                        <VerticalSlideCarousel 
                        currentSlide={currentSlide}
                        totalSlides={totalSlides}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}

                        ></VerticalSlideCarousel>
                        {/* large indicators */}
                        <div className='hidden lg:flex-1 h-full  lg:flex items-center justify-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="144" viewBox="0 0 4 144" fill="none" stroke='none' className='duration-300'>
                            <path opacity="0.5" d="M2 142L2 104.865" stroke={currentSlide == 2?'#3A0CA3':'#AAAAAA'} stroke-width="4" stroke-linecap="round"/>
                            <path opacity="0.5" d="M2 90.3818L1.99999 53.2466" stroke={currentSlide == 1?'#3A0CA3':'#AAAAAA'} stroke-width="4" stroke-linecap="round"/>
                            <path opacity="0.5" d="M2 39.1353L1.99999 1.99998" stroke={currentSlide == 0?'#3A0CA3':'#AAAAAA'} stroke-width="4" stroke-linecap="round"/>
                        </svg>

                        </div>


                        {/* small indicators */}

                        <div className='flex-1 h-full  flex items-center justify-center lg:hidden'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="4" viewBox="0 0 144 4" fill="none">
  <path opacity="0.5" d="M2 2L39.1353 2" stroke={currentSlide == 0?'#3A0CA3':'#AAAAAA'} stroke-width="4" stroke-linecap="round"/>
  <path opacity="0.5" d="M53.618 2L90.7533 1.99999" stroke={currentSlide == 1?'#3A0CA3':'#AAAAAA'} stroke-width="4" stroke-linecap="round"/>
  <path opacity="0.5" d="M104.865 2L142 1.99999" stroke={currentSlide == 2?'#3A0CA3':'#AAAAAA'} stroke-width="4" stroke-linecap="round"/>
</svg>

                        </div>
                        
                    </div>
                    
                </div>
        
            </div>            
        </div>
    )
}

export default Testimonials