import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
   
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul> {/* Add a custom class here */}
      </div>
    ),
  };

  return (
    <div className="relative w-full max-w-full">
      <Slider {...settings}>
        <div className="w-full h-[170px] lg:h-[250px] 2xl:h-[350px] rounded-lg ">
          <img
            src="https://cdn.cloudd.site/khelo-bharat.com/banner/20240340002981.webp"
            alt="Slide 1"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full h-[170px] lg:h-[250px] 2xl:h-[350px] rounded-lg">
          <img
            src="https://cdn.cloudd.site/khelo-bharat.com/banner/20241237167519.webp"
            alt="Slide 2"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full h-[170px] lg:h-[250px] 2xl:h-[350px] rounded-lg">
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr1-min.png"
            alt="Slide 3"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full h-[170px] lg:h-[250px] 2xl:h-[350px] rounded-lg">
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr2-min.png"
            alt="Slide 4"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-full h-[170px] lg:h-[250px] 2xl:h-[350px] rounded-lg">
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr5-min.png"
            alt="Slide 5"
            className="w-full h-full rounded-lg"
          />
        </div>
      </Slider>
     
    </div>
  );
};

export default Carousel;
