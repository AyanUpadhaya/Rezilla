import React from 'react'
import { highbuilding, rectangleCard, waterpool } from '../../assets/getAssets'
import './css/swiperstyle.css'
import{ useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './css/swiperstyle.css';
// import required modules
import { Pagination } from 'swiper/modules';
import Tag from '../shared/Tag/Tag';

const LatestProperties = () => {
    const data =[
        {
            cardImg:`${rectangleCard}`,
            status:'Popular',
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
            <path d="M12.4076 11.2528C12.6672 10.8265 12.9355 10.3857 13.2006 9.93118C14.0877 8.41044 14.2505 6.87814 13.6846 5.37676C12.5427 2.34747 8.72575 0.501751 7.84209 0.207261L7.22073 0L6.25093 1.93998L6.71893 2.32231C6.72417 2.32651 7.244 2.78073 7.27865 3.4693C7.30824 4.0571 6.986 4.69229 6.32112 5.35736C5.8594 5.81904 5.35264 6.26547 4.8161 6.73805C2.55865 8.72608 0 10.98 0 15.2439C0 15.3024 0.000550676 15.3607 0.00165204 15.4185C0.0180119 16.3595 0.2201 17.2879 0.596308 18.1505C0.972516 19.0131 1.51543 19.7928 2.19387 20.445C3.55621 21.7701 5.38285 22.5097 7.28332 22.5056H11.6306L11.0939 21.4166C8.91356 16.9914 10.4555 14.459 12.4076 11.2528Z" fill="#FF1111"/>
            <path d="M19.8229 15.1955C19.8103 15.1456 19.7972 15.0955 19.7835 15.0451C19.2385 13.047 16.2218 10.4778 15.8797 10.1915L15.1925 9.61646L14.742 10.3909C13.7152 12.1563 12.834 13.7664 12.4499 15.5931C12.0119 17.6763 12.3067 19.7935 13.3515 22.0658L13.5535 22.5056H14.067C14.9713 22.5082 15.8642 22.3032 16.6769 21.9063C17.4895 21.5094 18.2001 20.9312 18.7541 20.2163C19.3046 19.5171 19.6873 18.7007 19.8726 17.8302C20.0579 16.9598 20.0409 16.0583 19.8229 15.1955Z" fill="#FF1111"/>
          </svg>,
          tagbgColor:'bg-labelOne',
          tagtextColor:'text-textRed',
          price:'5,970',
          title:'Tranquil Haven in the Woods',
          address:'103 Wright CourtBurien, WA 98168',
          bedCount:4,
          bathCount:3,
        },
        {

            cardImg:`${highbuilding}`,
            status:'New Listing',
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M19.5387 8.55713L10.6731 0.400829C10.3849 0.135674 10.0054 -0.00782393 9.61384 0.000329345C9.2223 0.00848263 8.84906 0.167656 8.57214 0.444579L0.418438 8.59833L0 9.01672V21.037H7.85714V13.537H12.1429V21.037H20V8.98159L19.5387 8.55713Z" fill="#119BFF"/>
          </svg>,
          tagbgColor:'bg-labelTwo',
          tagtextColor:'text-textSkyblue',
          price:'1,970',
          title:'Serene Retreat by the Lake',
          address:'1964 Jehovah Drive, VA 22408',
          bedCount:4,
          bathCount:3,

        },
        {

            cardImg:`${waterpool}`,
            status:'Discounted Price',
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
            <path d="M9.03064 9.83836H9.03008H4.96992C4.48037 9.83836 4.01087 9.64389 3.6647 9.29772C3.31854 8.95156 3.12406 8.48206 3.12406 7.99251C3.12406 7.50295 3.31854 7.03345 3.6647 6.68729C4.01087 6.34112 4.48037 6.14665 4.96992 6.14665H11.4662H11.9662V5.64665V4.02258V3.52258H11.4662H8.51504V1V0.5H8.01504H6.39098H5.89098V1V3.52258H4.96992C3.78442 3.52258 2.64748 3.99352 1.80921 4.83179C0.970936 5.67007 0.5 6.80701 0.5 7.99251C0.5 9.178 0.970937 10.3149 1.80921 11.1532C2.64748 11.9915 3.78442 12.4624 4.96992 12.4624H9.02952C9.51905 12.463 9.98838 12.6577 10.3345 13.0038C10.6807 13.35 10.8754 13.8193 10.8759 14.3088V14.4882C10.8754 14.9777 10.6807 15.4471 10.3345 15.7932C9.98838 16.1394 9.51905 16.3341 9.02952 16.3346H2.15791H1.65791V16.8346V18.4587V18.9587H2.15791H5.89098V21.3008V21.8008H6.39098H8.01504H8.51504V21.3008V18.9587H9.03008H9.03064C10.2156 18.9573 11.3516 18.486 12.1895 17.6482C13.0274 16.8103 13.4987 15.6743 13.5 14.4893V14.4888V14.3083V14.3077C13.4987 13.1228 13.0274 11.9868 12.1895 11.1489C11.3516 10.311 10.2156 9.8397 9.03064 9.83836Z" fill="#00CE3A" stroke="#00CE3A"/>
          </svg>,
          tagbgColor:'bg-labelThree',
          tagtextColor:'text-textGreen',
          price:'3,450',
          title:'Charming Cottage in the Meadow',
          address:'1508 Centennial Farm RoadHarlan, 51537',
          bedCount:4,
          bathCount:3,

        },
       
        {
            cardImg:`${rectangleCard}`,
            status:'Popular',
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
            <path d="M12.4076 11.2528C12.6672 10.8265 12.9355 10.3857 13.2006 9.93118C14.0877 8.41044 14.2505 6.87814 13.6846 5.37676C12.5427 2.34747 8.72575 0.501751 7.84209 0.207261L7.22073 0L6.25093 1.93998L6.71893 2.32231C6.72417 2.32651 7.244 2.78073 7.27865 3.4693C7.30824 4.0571 6.986 4.69229 6.32112 5.35736C5.8594 5.81904 5.35264 6.26547 4.8161 6.73805C2.55865 8.72608 0 10.98 0 15.2439C0 15.3024 0.000550676 15.3607 0.00165204 15.4185C0.0180119 16.3595 0.2201 17.2879 0.596308 18.1505C0.972516 19.0131 1.51543 19.7928 2.19387 20.445C3.55621 21.7701 5.38285 22.5097 7.28332 22.5056H11.6306L11.0939 21.4166C8.91356 16.9914 10.4555 14.459 12.4076 11.2528Z" fill="#FF1111"/>
            <path d="M19.8229 15.1955C19.8103 15.1456 19.7972 15.0955 19.7835 15.0451C19.2385 13.047 16.2218 10.4778 15.8797 10.1915L15.1925 9.61646L14.742 10.3909C13.7152 12.1563 12.834 13.7664 12.4499 15.5931C12.0119 17.6763 12.3067 19.7935 13.3515 22.0658L13.5535 22.5056H14.067C14.9713 22.5082 15.8642 22.3032 16.6769 21.9063C17.4895 21.5094 18.2001 20.9312 18.7541 20.2163C19.3046 19.5171 19.6873 18.7007 19.8726 17.8302C20.0579 16.9598 20.0409 16.0583 19.8229 15.1955Z" fill="#FF1111"/>
          </svg>,
          tagbgColor:'bg-labelOne',
          tagtextColor:'text-textRed',
          price:'5,970',
          title:'Tranquil Haven in the Woods',
          address:'103 Wright CourtBurien, WA 98168',
          bedCount:4,
          bathCount:3,
        },
        {

            cardImg:`${highbuilding}`,
            status:'New Listing',
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
            <path d="M19.5387 8.55713L10.6731 0.400829C10.3849 0.135674 10.0054 -0.00782393 9.61384 0.000329345C9.2223 0.00848263 8.84906 0.167656 8.57214 0.444579L0.418438 8.59833L0 9.01672V21.037H7.85714V13.537H12.1429V21.037H20V8.98159L19.5387 8.55713Z" fill="#119BFF"/>
          </svg>,
          tagbgColor:'bg-labelTwo',
          tagtextColor:'text-textSkyblue',
          price:'1,970',
          title:'Serene Retreat by the Lake',
          address:'1964 Jehovah Drive, VA 22408',
          bedCount:4,
          bathCount:3,

        },
        {

            cardImg:`${waterpool}`,
            status:'Discounted Price',
            svg:<svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
            <path d="M9.03064 9.83836H9.03008H4.96992C4.48037 9.83836 4.01087 9.64389 3.6647 9.29772C3.31854 8.95156 3.12406 8.48206 3.12406 7.99251C3.12406 7.50295 3.31854 7.03345 3.6647 6.68729C4.01087 6.34112 4.48037 6.14665 4.96992 6.14665H11.4662H11.9662V5.64665V4.02258V3.52258H11.4662H8.51504V1V0.5H8.01504H6.39098H5.89098V1V3.52258H4.96992C3.78442 3.52258 2.64748 3.99352 1.80921 4.83179C0.970936 5.67007 0.5 6.80701 0.5 7.99251C0.5 9.178 0.970937 10.3149 1.80921 11.1532C2.64748 11.9915 3.78442 12.4624 4.96992 12.4624H9.02952C9.51905 12.463 9.98838 12.6577 10.3345 13.0038C10.6807 13.35 10.8754 13.8193 10.8759 14.3088V14.4882C10.8754 14.9777 10.6807 15.4471 10.3345 15.7932C9.98838 16.1394 9.51905 16.3341 9.02952 16.3346H2.15791H1.65791V16.8346V18.4587V18.9587H2.15791H5.89098V21.3008V21.8008H6.39098H8.01504H8.51504V21.3008V18.9587H9.03008H9.03064C10.2156 18.9573 11.3516 18.486 12.1895 17.6482C13.0274 16.8103 13.4987 15.6743 13.5 14.4893V14.4888V14.3083V14.3077C13.4987 13.1228 13.0274 11.9868 12.1895 11.1489C11.3516 10.311 10.2156 9.8397 9.03064 9.83836Z" fill="#00CE3A" stroke="#00CE3A"/>
          </svg>,
          tagbgColor:'bg-labelThree',
          tagtextColor:'text-textGreen',
          price:'3,450',
          title:'Charming Cottage in the Meadow',
          address:'1508 Centennial Farm RoadHarlan, 51537',
          bedCount:4,
          bathCount:3,

        },
       
        
       

    ]
    return (
        <div className='w-full pb-[60px]'>
            <div className='container mx-auto px-[30px] lg:px-[60px] pt-[89px] '>
                {/* top */}
                <div className="flex flex-col gap-5 lg:gap-[43px] lg:flex-row justify-between items-center mb-[50px] ">
                    <div className='w-full max-w-xl flex-shrink-0'>
                        <h4 className='text-primary  text-base lg:text-[19px] font-semilessbold '>CHECKOUT OUR NEW</h4>
                        <h2 className=' my-[20px] lg:my-[30px] font-semibold text-[27px] lg:text-[39px] text-[#0B090A] leading-[65px]'>
                            Latest Listed Properties
                        </h2>
                        <p className='text-[13.3px] lg:text-base font-normal text-[#808080] leading-[26px]'>
                            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
                        </p>
                    </div>

                    {/* tabs */}
                    <div className='flex gap-5 items-start'>
                        <div className='py-[19px] px-[30px] flex justify-center items-center text-primary border border-primary font-semilessbold rounded-[30px]'>All</div>
                        <div className='py-[19px] px-[30px] flex justify-center items-center text-white font-semilessbold rounded-[30px] bg-primary'>Sell</div>
                        <div className='py-[19px] px-[30px] flex justify-center items-center text-primary border border-primary font-semilessbold rounded-[30px]'>Rent</div>
                    </div>

                </div>



                {/* cards */}

                <Swiper
                 breakpoints={{
                   
                    280: {
                      width: 280,
                      slidesPerView: 1,
                    },
                    360: {
                      width: 360,
                      slidesPerView: 1,
                    },
                    375: {
                      width: 375,
                      slidesPerView: 1,
                    },
                    500: {
                      width: 500,
                      slidesPerView: 1,
                    },

                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                   
                  }}
                    slidesPerView={3}
                    spaceBetween={'30'}
                    className="mySwiper"
                    pagination={{
                        clickable:true,
                    }}
                    simulateTouch={true}
                   
                >
                     {data.map((card,i)=>(<SwiperSlide key={i}>
                       <div  className="card w-96 bg-base-100 ">
                            <div className='relative'>
                                <img src={card?.cardImg} alt="Shoes" className='w-full' />
                                {/* tag */}
                                <Tag bgcolor={card?.tagbgColor} svg={card?.svg} textColor={card?.tagtextColor} status={card?.status}></Tag>
                            </div>
                            <div className="card-body  px-0">
                                <h2 className="card-title font-semibold text-[#2B2B2B] text-[27px]">$ {card?.price}</h2>
                                <p className='font-semilessbold text-[#2B2B2B] text-[19px]'>{card?.title}</p>
                                <p className='font-normal text-[#808080] text-base'>{card?.address}</p>
                                <div className="card-actions justify-start space-x-5">
                                    <div className='flex gap-2 items-center'>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22" fill="none">
    <path d="M25 4.5H12V12.0387H10.6154V9.47619C10.6138 8.02433 10.0363 6.63239 9.00971 5.60575C7.9831 4.57912 6.59117 4.00164 5.13931 4H2V0H0V21.5H2V18.5161L28 18.7241V21.5H30V9.5C29.9985 8.17438 29.4712 6.90348 28.5339 5.96613C27.5965 5.02877 26.3256 4.5015 25 4.5ZM2 6H5.13931C6.0609 6.00104 6.94445 6.3676 7.59611 7.01927C8.24777 7.67093 8.61433 8.55447 8.61537 9.47606V12.0386H2V6ZM28 16.724L2 16.516V14.0387H28V16.724ZM28 12.0387H14V6.5H25C25.7954 6.50091 26.5579 6.81727 27.1203 7.37968C27.6827 7.9421 27.9991 8.70463 28 9.5V12.0387Z" fill="#2B2B2B"/>
    </svg>
                                        </span>
                                        <span className='text-base text-[#2B2B2B] font-normal'>{card?.bedCount} Beds</span>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z" fill="#2B2B2B"/>
    </svg>
                                        </span>
                                        <span className='text-base text-[#2B2B2B] font-normal'>
                                        {card?.bathCount} Bath
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>))}
                    
        
                </Swiper>
                
            </div>
        </div>
    )
}

export default LatestProperties