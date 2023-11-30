import React, { useState } from 'react'
import { imageOne, imageThree, imageTwo, imageFour } from '../../assets/getAssets';

const HomeCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselItems = [
        {
            image: `${imageOne}`,
        },
        {
            image: `${imageTwo}`,

        },
        {
            image: `${imageThree}`,

        },
        {
            image: `${imageFour}`,

        },

    ];

    const prevSlide = (e) => {
        e.preventDefault()
        setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    };

    const nextSlide = (e) => {
        e.preventDefault()
        setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <div className="relative w-full max-w-[540px] h-[340px] rounded-3xl mb-[11px] -mt-9">
                <div
                    className={`rounded-3xl absoute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center duration-500`}
                    style={{ backgroundImage: `url(${carouselItems[currentSlide].image})` }}>
                </div>
                <div className=" w-full">

                    <button
                        className="absolute top-[60%] -left-5 lg:-left-12 -translate-y-[60%] rounded-full flex justify-center items-center"
                        onClick={prevSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <g filter="url(#filter0_d_8_83)">
                                <circle cx="46" cy="40" r="20" fill="white" />
                            </g>
                            <path d="M49 34L44.4142 38.5858C43.6332 39.3668 43.6332 40.6332 44.4142 41.4142L49 46" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" />
                            <defs>
                                <filter id="filter0_d_8_83" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="10" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_83" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_83" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                    <button
                        className="absolute top-[60%] -right-5 lg:-right-14 -translate-y-[60%] text-white flex justify-center items-center"
                        onClick={nextSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <g filter="url(#filter0_d_8_84)">
                                <circle cx="46" cy="40" r="20" transform="rotate(180 46 40)" fill="white" />
                            </g>
                            <path d="M43 46L47.5858 41.4142C48.3668 40.6332 48.3668 39.3668 47.5858 38.5858L43 34" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round" />
                            <defs>
                                <filter id="filter0_d_8_84" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="10" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_84" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_84" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='w-full max-w-[540px] flex justify-between items-center transition-all duration-300'> 
                {
                    carouselItems.map((item,i)=>{
                        return(<svg xmlns="http://www.w3.org/2000/svg" width="104" height="4" viewBox="0 0 104 4" fill="none" className='duration-300'>
                        <path d="M2 2L102 1.99999" stroke={`${currentSlide == i?'#4361EE':'#fff'}`} stroke-width="4" stroke-linecap="round"/>
                      </svg>)
                    })
                }

            </div>
        </div>
    )
}

export default HomeCarousel