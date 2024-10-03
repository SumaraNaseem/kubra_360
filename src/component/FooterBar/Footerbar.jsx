import React, { useState } from "react";
import { FaBasketballBall } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaRegHandPointer } from "react-icons/fa6";
import { FaPager } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineCasino } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";

function FooterBar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // Array to store the links
  const footerLinks = [
    {
      id: 1,
      label: "Sports",
      icon: <FaBasketballBall size={20} />,
      url: "/",
    },
    {
      id: 2,
      label: "Casino",
      icon: <MdOutlineCasino size={20} />,
      url: "/promotion",
    },
    
  ];

  const footerLinkss = [
    {
      id: 3,
      label: "Promotion",
      icon: <GrAnnounce size={20} />,
      url: "/promotion",
    },
    {
      id: 4,
      label: "Sign in",
      icon: <IoPerson size={20} />,
      url: "/Sign In",

    },
  ];

  return (
    <div className="bottom-0 fixed z-40 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 375 77"
        fill="none"
        className="footer-image w-full object-cover rounded-t-lg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M187.5 40C197.898 40 207.281 35.2348 213.929 27.5883C224.8 15.0848 237.431 0 254 0H360C368.284 0 375 6.71573 375 15V76C375 76.5523 374.552 77 374 77H0.999995C0.44771 77 0 76.5523 0 76V15C0 6.71573 6.71573 0 15 0H121C137.569 0 150.2 15.0848 161.071 27.5883C167.719 35.2348 177.102 40 187.5 40Z"
          fill="black"
        ></path>
      </svg>

      <div className="absolute top-2 w-full grid grid-cols-2 gap-class justify-between items-center">
        <div className="flex justify-around xs:-mt-1">
          {footerLinks.map((link, index) => (
            <Link
              key={link.id}
              to={link.url} // Use 'to' instead of 'href'
              onClick={() => handleClick(index)}
              className="flex flex-col items-center"
            >
              <div className="text-black p-2 rounded-full bg-custom-yellow">
                {link.icon}
              </div>
              <p className="text-white text-[10px] sm:text-[12px] mt-1">
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        <div
          onClick={toggleVisibility}
          className="bg-custon-right-side-bg absolute toggle-class -top-[3rem]  rounded-full w-[55px] h-[55px] border-2 border-custom-yellow right-15 px-2 cursor-pointer"
        >
          {/* Show grid of FaRegSquare or 'hlo' based on isVisible */}
          {!isVisible ? (
            <div className="grid grid-cols-2 px-1 py-1 gap-2 mt-[7px] text-[12px] left-[10px] justify-center text-yellow-700 items-center">
              <div>
                <FaRegSquare />
              </div>
              <div>
                <FaRegSquare />
              </div>
              <div>
                <FaRegSquare className="text-custom-text-type" />
              </div>
              <div>
                <FaRegSquare />
              </div>
            </div>
          ) : (
            <div className="text-white font-bold text-[25px] mt-3  text-center flex justify-center items-center">

              <div>
                <RxCross2 />
              </div>
            </div>
          )}
        </div>

        {isVisible && (
          <div
            className={`bg-black fixed menu-options -z-10 sm:bottom-1 circle bottom-[-40px] rounded-full w-[244px] h-[244px] right-15 px-2 transition-all duration-300 ease-in-out ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
          >
            <div className="grid grid-cols-2 px-2 relative py-1 gap-4 justify-center items-center">
              <div className="text-gray-300 bg-footer-circle rounded-full p-3 absolute left-[24px] top-[83px]">
                <FaPager className="text-[20px]" />
              </div>
              <div className="text-gray-300 bg-footer-circle rounded-full p-3 absolute left-[57px] top-[33px]">
                <FaRegHandPointer className="text-[20px]" />
              </div>
              <div className="text-gray-300 bg-footer-circle rounded-full p-3 absolute right-[64px] top-[34px]">
                <FiSearch className="text-[20px]" />
              </div>
              <div className="text-gray-300 bg-footer-circle rounded-full p-3 absolute top-[81.8px] right-[29px]">
                <IoSettingsOutline className="text-[20px]" />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-around ">
          {footerLinkss.map((link, index) => (
            <Link
              key={link.id}
              to={link.url} // Use 'to' instead of 'href'
              onClick={() => handleClick(index)}
              className="flex flex-col items-center"
            >
             <div
        className={`p-2 rounded-full ${
          activeIndex === index ? "bg-custom-yellow" : "bg-gray-700 text-custom-yellow"
        }`}
      >
        {link.icon}
      </div>
              <p className="text-white text-[12px] sm:text-[12px] ">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterBar;
