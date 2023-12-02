import React from 'react'
import HomeCarousel from '../carousels/HomeCarousel'
import { rectangleOne, rectangleThree, rectangleTwo } from '../../assets/getAssets'

const WhoAreWe = () => {
  return (
    <div className='w-full pb-[60px]'>
            <div className='container mx-auto px-[19px] lg:px-[60px] pt-[40px] lg:pt-[89px] '>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[43px] items-center ">
                    <div className='flex-1'>
                        <h4 className='text-primary  text-base lg:text-[19px] font-semilessbold mb-[30px]'>WHO ARE WE</h4>
                        <h2 className='lg:max-w-xl mb-[30px] lg:mb-10 font-semibold text-[27px] lg:text-[39px] text-[#0B090A] lg:leading-[65px]'>
                        Assisting individuals in locating the appropriate real estate.
                        </h2>
                        <p className='max-w-md text-[13.3px] lg:text-base font-normal text-[#808080] leading-[26px] mb-[20px] lg:mb-10'>
                            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
                        </p>
                      
                        <div className='hidden lg:flex flex-col gap-[30px]'>
                            <div className='max-w-[400px] py-[30px] px-8 rounded-[30px] shadow-badgeshadow flex items-center gap-[25px]'>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M30.531 38.8827H19.1277C18.3736 38.8827 17.7483 38.2573 17.7483 37.5032C17.7483 36.7491 18.3736 36.1238 19.1277 36.1238H30.531C32.499 36.1238 34.4301 34.4867 34.7612 32.5371L37.2074 17.897C37.4281 16.5727 36.6926 14.6781 35.6626 13.8505L22.9165 3.66125C21.4451 2.48414 18.999 2.48412 17.546 3.64284L4.8001 13.8505C3.75174 14.6965 3.03444 16.5727 3.25514 17.897L3.77013 21.0051C3.89888 21.7592 3.38391 22.4765 2.62982 22.5869C1.87574 22.734 1.17685 22.2006 1.0481 21.4465L0.533113 18.3568C0.146873 16.0761 1.25043 13.1517 3.07128 11.6987L15.8172 1.49086C18.2817 -0.495513 22.1624 -0.477102 24.6454 1.50927L37.3913 11.6987C39.1938 13.1517 40.2973 16.0761 39.9295 18.3568L37.4833 32.9969C36.9315 36.2524 33.8232 38.8827 30.531 38.8827Z" fill="#4361EE"/>
  <path d="M7.35738 39.2322C6.60329 39.2322 5.99634 38.6253 5.97795 37.8896C5.92277 35.4066 4.28587 33.7697 1.80291 33.7145C1.04882 33.6961 0.441854 33.0708 0.460246 32.2983C0.478638 31.5442 1.08559 30.9557 1.83967 30.9557H1.87644C5.8308 31.0477 8.66324 33.8617 8.7368 37.816C8.7552 38.5701 8.14823 39.2139 7.39415 39.2322C7.37575 39.2322 7.37577 39.2322 7.35738 39.2322Z" fill="#4361EE"/>
  <path d="M12.8751 39.2323C12.121 39.2323 11.4956 38.6253 11.4956 37.8712C11.4772 36.6573 11.2749 35.4986 10.9071 34.4135C9.96906 31.7282 7.9643 29.7416 5.27901 28.7852C4.19386 28.399 3.03515 28.1968 1.82125 28.1968C1.06716 28.1968 0.441842 27.5715 0.460235 26.799C0.460235 26.0449 1.08557 25.438 1.83966 25.438H1.85805C3.38462 25.4564 4.8376 25.7139 6.19863 26.1921C9.67479 27.4244 12.2681 30.0177 13.5004 33.4938C13.9786 34.8549 14.2361 36.3263 14.2545 37.8344C14.2545 38.6069 13.6476 39.2323 12.8751 39.2323Z" fill="#4361EE"/>
  <path d="M1.83924 39.6921C0.809264 39.6921 0 38.8645 0 37.8529C0 36.8413 0.827656 36.0137 1.83924 36.0137C2.85082 36.0137 3.67847 36.8413 3.67847 37.8529C3.67847 38.8645 2.86921 39.6921 1.83924 39.6921Z" fill="#4361EE"/>
</svg>
                                    </span>
                                </div>
                                <div>
                                    <h4 className='font-semilessbold text-[19px] text-primary mb-5'>Donec porttitor euismod</h4>
                                    <p className='text-base font-normal text-[#808080] max-w-[274px] '>
                                        Nullam a lacinia ipsum, nec dignissim purus. Nulla
                                    </p>
                                </div>
                            </div>
                            <div className='max-w-[400px] py-[30px] px-8 rounded-[30px] shadow-badgeshadow flex items-center gap-[25px]'>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="48" viewBox="0 0 44 48" fill="none">
  <path d="M42 16.4958V31.5535C42 34.0191 40.6791 36.3086 38.5437 37.5634L25.4672 45.1143C23.3318 46.3471 20.6901 46.3471 18.5327 45.1143L5.45625 37.5634C3.32086 36.3306 2 34.0411 2 31.5535V16.4958C2 14.0302 3.32086 11.7406 5.45625 10.4858L18.5327 2.93486C20.6681 1.70205 23.3098 1.70205 25.4672 2.93486L38.5437 10.4858C40.6791 11.7406 42 14.0081 42 16.4958Z" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.011 21.8234C24.844 21.8234 27.1403 19.5268 27.1403 16.6939C27.1403 13.8611 24.844 11.5647 22.011 11.5647C19.1782 11.5647 16.8817 13.8611 16.8817 16.6939C16.8817 19.5268 19.1782 21.8234 22.011 21.8234Z" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30.8167 34.2836C30.8167 30.321 26.8761 27.1069 22.0109 27.1069C17.1458 27.1069 13.2052 30.321 13.2052 34.2836" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                    </span>
                                </div>
                                <div>
                                    <h4 className='font-semilessbold text-[19px] text-primary mb-5'>Donec porttitor euismod</h4>
                                    <p className='text-base font-normal text-[#808080] max-w-[274px]'>
                                        Nullam a lacinia ipsum, nec dignissim purus. Nulla
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='h-full  flex flex-col lg:flex-row  gap-5 lg:gap-[30px] justify-start lg:justify-end lg:pt-10  '>
                        <div className='lg:w-1/2 h-[16rem] lg:h-[calc(100%-40px)] flex-shrink-0 rounded-[30px] relative lg:mt-10 '>
                            <img src={ rectangleOne} alt="" className='w-full h-full object-cover rounded-[30px]' />
                        </div>
                        <div className='flex-shrink-0  space-y-5 '>
                            <div className=' lg:h-[280px] rounded-[30px]'>
                                <img src={ rectangleTwo} alt="" className='w-full h-full object-cover rounded-[30px]' />
                            </div>
                            <div className='lg:h-[180px] rounded-[30px]'>
                                <img src={rectangleThree} alt="" className='w-full h-full object-cover rounded-[30px]' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden flex flex-col gap-[15px] lg:gap-[30px]'>
                            <div className='lg:max-w-[400px] p-[30px] lg:py-[30px] lg:px-8 rounded-[30px] shadow-badgeshadow flex items-center gap-[25px]'>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M30.531 38.8827H19.1277C18.3736 38.8827 17.7483 38.2573 17.7483 37.5032C17.7483 36.7491 18.3736 36.1238 19.1277 36.1238H30.531C32.499 36.1238 34.4301 34.4867 34.7612 32.5371L37.2074 17.897C37.4281 16.5727 36.6926 14.6781 35.6626 13.8505L22.9165 3.66125C21.4451 2.48414 18.999 2.48412 17.546 3.64284L4.8001 13.8505C3.75174 14.6965 3.03444 16.5727 3.25514 17.897L3.77013 21.0051C3.89888 21.7592 3.38391 22.4765 2.62982 22.5869C1.87574 22.734 1.17685 22.2006 1.0481 21.4465L0.533113 18.3568C0.146873 16.0761 1.25043 13.1517 3.07128 11.6987L15.8172 1.49086C18.2817 -0.495513 22.1624 -0.477102 24.6454 1.50927L37.3913 11.6987C39.1938 13.1517 40.2973 16.0761 39.9295 18.3568L37.4833 32.9969C36.9315 36.2524 33.8232 38.8827 30.531 38.8827Z" fill="#4361EE"/>
  <path d="M7.35738 39.2322C6.60329 39.2322 5.99634 38.6253 5.97795 37.8896C5.92277 35.4066 4.28587 33.7697 1.80291 33.7145C1.04882 33.6961 0.441854 33.0708 0.460246 32.2983C0.478638 31.5442 1.08559 30.9557 1.83967 30.9557H1.87644C5.8308 31.0477 8.66324 33.8617 8.7368 37.816C8.7552 38.5701 8.14823 39.2139 7.39415 39.2322C7.37575 39.2322 7.37577 39.2322 7.35738 39.2322Z" fill="#4361EE"/>
  <path d="M12.8751 39.2323C12.121 39.2323 11.4956 38.6253 11.4956 37.8712C11.4772 36.6573 11.2749 35.4986 10.9071 34.4135C9.96906 31.7282 7.9643 29.7416 5.27901 28.7852C4.19386 28.399 3.03515 28.1968 1.82125 28.1968C1.06716 28.1968 0.441842 27.5715 0.460235 26.799C0.460235 26.0449 1.08557 25.438 1.83966 25.438H1.85805C3.38462 25.4564 4.8376 25.7139 6.19863 26.1921C9.67479 27.4244 12.2681 30.0177 13.5004 33.4938C13.9786 34.8549 14.2361 36.3263 14.2545 37.8344C14.2545 38.6069 13.6476 39.2323 12.8751 39.2323Z" fill="#4361EE"/>
  <path d="M1.83924 39.6921C0.809264 39.6921 0 38.8645 0 37.8529C0 36.8413 0.827656 36.0137 1.83924 36.0137C2.85082 36.0137 3.67847 36.8413 3.67847 37.8529C3.67847 38.8645 2.86921 39.6921 1.83924 39.6921Z" fill="#4361EE"/>
</svg>
                                    </span>
                                </div>
                                <div>
                                    <h4 className='font-semilessbold text-base lg:text-[19px] text-primary mb-5'>Donec porttitor euismod</h4>
                                    <p className='text-[13px] lg:text-base font-normal text-[#808080] lg:max-w-[274px] '>
                                        Nullam a lacinia ipsum, nec dignissim purus. Nulla
                                    </p>
                                </div>
                            </div>
                            <div className='lg:max-w-[400px] py-[30px] px-8 rounded-[30px] shadow-badgeshadow flex items-center gap-[25px]'>
                                <div>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="48" viewBox="0 0 44 48" fill="none">
  <path d="M42 16.4958V31.5535C42 34.0191 40.6791 36.3086 38.5437 37.5634L25.4672 45.1143C23.3318 46.3471 20.6901 46.3471 18.5327 45.1143L5.45625 37.5634C3.32086 36.3306 2 34.0411 2 31.5535V16.4958C2 14.0302 3.32086 11.7406 5.45625 10.4858L18.5327 2.93486C20.6681 1.70205 23.3098 1.70205 25.4672 2.93486L38.5437 10.4858C40.6791 11.7406 42 14.0081 42 16.4958Z" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.011 21.8234C24.844 21.8234 27.1403 19.5268 27.1403 16.6939C27.1403 13.8611 24.844 11.5647 22.011 11.5647C19.1782 11.5647 16.8817 13.8611 16.8817 16.6939C16.8817 19.5268 19.1782 21.8234 22.011 21.8234Z" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30.8167 34.2836C30.8167 30.321 26.8761 27.1069 22.0109 27.1069C17.1458 27.1069 13.2052 30.321 13.2052 34.2836" stroke="#4361EE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                                    </span>
                                </div>
                                <div>
                                    <h4 className='font-semilessbold text-base lg:text-[19px] text-primary mb-5'>Donec porttitor euismod</h4>
                                    <p className='text-[13px] lg:text-base font-normal text-[#808080] lg:max-w-[274px]'>
                                        Nullam a lacinia ipsum, nec dignissim purus. Nulla
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default WhoAreWe