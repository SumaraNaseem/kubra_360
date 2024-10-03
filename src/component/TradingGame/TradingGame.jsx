import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TradingGame() {

    const settings = {
        dots: false, // Show dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Show 6 images at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Show arrows
        appendDots: (dots) => (
            <div>
                <ul className="custom-dots">{dots}</ul> {/* Custom class for dots */}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, // Show 4 images on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Show 3 images on smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2, // Show 2 images on very small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <div className="flex ">
                <div>
                    <img src="https://res.cloudinary.com/dionqkh8u/image/upload/v1726766085/Fire_red-512_h4u8mv.webp" alt="fire" className="w-6 h-6" />
                </div>
                <p className="text-[16px] font-[700] font-montserrat text-black dark:text-white">Trending Games</p>
            </div>
            <div className='dark:bg-custon-right-side-bg bg-gray-200 h-full dark py-2 mt-2 rounded-lg'>

                <div className="relative   w-full max-w-full">
                    <Slider {...settings}>
                        <div className="w-full group relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://cdn.cloudd.site/khelo-bharat.com/banner/20240340002981.webp"
                                alt="Slide 1"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 m-1   bg-gray-600   rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[250%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        <div className="w-full group  relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://cdn.cloudd.site/khelo-bharat.com/banner/20241237167519.webp"
                                alt="Slide 2"
                                className="w-full h-full object-cover  rounded-lg"
                            />
                            <div className="absolute inset-0  m-1  bg-gray-600   rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[250%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        <div className="w-full group  relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr1-min.png"
                                alt="Slide 3"
                                className="w-full  h-full object-cover  rounded-lg"
                            />
                            <div className="absolute inset-0 m-1   bg-gray-600   rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[240%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        <div className="w-full group  relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr2-min.png"
                                alt="Slide 4"
                                className="w-full h-full object-cover  rounded-lg"
                            />
                            <div className="absolute inset-0  m-1  bg-gray-600   rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[250%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        <div className="w-full group relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://cdn.cloudd.site/khelo-bharat.com/banner/20240340002981.webp"
                                alt="Slide 1"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 m-1   bg-gray-600  rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[250%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        <div className="w-full group  relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr5-min.png"
                                alt="Slide 5"
                                className="w-full h-full object-cover  rounded-lg"
                            />
                            <div className="absolute inset-0  m-1  bg-black  rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[250%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        <div className="w-full group  relative h-[90px] p-1 rounded-lg">
                            <img
                                src="https://cdn.cloudd.site/khelo-bharat.com/banner/20241237167519.webp"
                                alt="Slide 2"
                                className="w-full h-full object-cover  rounded-lg"
                            />
                            <div className="absolute inset-0  m-1  bg-gray-600   rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            {/* Text moving from top-left to center */}
                            <div
                                className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <p className={`transition-all duration-500 text-white text-sm  transform group-hover:translate-x-[100%] group-hover:translate-y-[250%]`}>
                                    hlo world
                                </p>
                            </div>
                        </div>
                        
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TradingGame