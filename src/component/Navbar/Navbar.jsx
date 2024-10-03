import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaCog } from 'react-icons/fa';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { eventItems, eventSidebarItems } from '../../data/data'
import Modal from '../../component/Modal/Model'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";
const buttons = [
  { label: "Sport", url: "/" },
  { label: "Casino", url: '/live_casino' },
  { label: "Promotion", url: "/promotion" },
  { label: "E-sports", url: "/e-sport" },
  { label: "Aviator", url: "/aviator" }
];
function Navbar({ handlemodeToggle, toggleSidebar, isExpanded }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeButton, setActiveButton] = useState(0); // Set the first button as active initially
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isChecked, setIsChecked] = useState(false);
  const [hoverLastButton, setHoverLastButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  const handleClick = (index) => {
    setActiveButton(index);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Toggle state handler
  const handleactivestatusToggle = () => {

    setIsChecked(!isChecked);
  };
  // Toggle dropdown visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsLanguage(!isLanguage)
  };
  const handleLanguagedownDown = () => {
    setIsLanguage(!isLanguage)
  }
  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown after selection
  };
  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="grid grid-cols-12   bg-gray-200 dark:bg-black px-2 lg:px-5  py-3">
      <div className="col-span-1 lg:col-span-3  flex items-center lg:hidden justify-end ">
        <HiOutlineMenuAlt3 onClick={toggleDrawer} className="text-[34px]   text-custom-yellow " />
      </div>

      <div className="col-span-9 lg:hidden  flex  items-center">

     







        <img src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1727980998/WhatsApp_Image_2024-10-03_at_23.37.42_4b7305c4_nfutdo.jpg" alt="logo" className='h-[50px] w-[140px]' />
      </div>
      <div className="hidden lg:block md:col-span-4   ">
        <div className="grid grid-cols-12  items-center justify-center">
          <div className="col-span-5 flex items-center justify-center">
            <img src="https://res.cloudinary.com/djlpb1ld5/image/upload/v1727980998/WhatsApp_Image_2024-10-03_at_23.37.42_4b7305c4_nfutdo.jpg" alt="logo" className='h-[50px] w-[500px]' />
          </div>
          <div onClick={toggleSidebar} className="col-span-1 cursor-pointer transition-transform duration-[1000000s] ease-in-out transform">
            {/* Apply a slower transition by increasing duration */}
            <div className="icon-container">
              {isExpanded ? (
                <HiOutlineMenuAlt3
                  className="text-[34px] text-custom-yellow "
                />
              ) : (
                <RxCross1
                  className="text-[25px] text-custom-yellow "
                />
              )}
            </div>
          </div>
          <div className="col-span-6"> <div className="relative w-20 md:w-[175px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full pl-10 px-4 py-2 truncate text-ellipsis italic bg-gray-200 dark:bg-custom-background-color text-black dark:text-white   rounded-lg focus:outline-none"
              placeholder="Event,Markets and More"
            />
            {showDropdown && searchTerm && (
              <ul className="absolute z-10 w-full text-gray-900 dark:text-white mt-1 custom-background border border-gray-300 rounded-lg shadow-lg">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-custom-background"
                      onClick={() => {
                        setSearchTerm(item);
                        setShowDropdown(false);
                      }}
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div></div>
        </div>
      </div>
      <div className=" hidden md:col-span-5  lg:col-span-5 lg:flex space-x-2 lg:space-x-6 justify-center items-center">
        {buttons.map((button, index) => (
          <div className="relative" key={index}>
            <Link to={button.url}>
              {console.log(button, "button")}
              {/* Link to the URL from the array */}
              <button
                className={`px-4 py-2 font-montserrat whitespace-nowrap font-semibold text-[13px] rounded-lg hover:bg-custom-yellow hover:text-black transition-all duration-300 
                ${activeButton === index ? "bg-custom-yellow text-black" : "text-black dark:text-gray-300"}
                ${index === 4 ? " !text-custom-text-color  !py-1 text-[25px] !font-lobster hover:bg-custom-yellow" : "hover:text-[14px]"}`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => index === 4 && setHoverLastButton(true)}
                onMouseLeave={() => index === 4 && setHoverLastButton(false)}
              >
                {button?.label} {/* Ensure to display the label */}
                {index === 4 && hoverLastButton && (
                  <span className="text-[10px] fade-in transform transition-transform -translate-y-3 duration-500 ">
                    Demo 
                  </span>
                )}
              </button>
            </Link>
          </div>
        ))}

      </div>
      <div className="col-span-2 lg:col-span-3  flex items-center  justify-end ">
        {/* Buttons */}
        <div className="flex space-x-1 lg:space-x-4 items-center mt- justify-end ">
          <button onClick={openModal}
            className="bg-custom-yellow lg:font-semibold text-[12px] lg:text-[18px] text-black px-2 lg:px-4 py-1 lg:py-2 whitespace-nowrap rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800">
            Sign In
          </button>
          <button onClick={openModal} className="bg-custom-yellow lg:font-semibold text-[12px] lg:text-[18px] text-black px-2 lg:px-4 py-1 lg:py-2 whitespace-nowrap  rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800">
            Sign Up
          </button>
          <div className=" hidden lg:block relative">
            {/* Settings Icon */}
            <FaCog
              className={`text-custom-yellow dark:text-yellow-500 text-2xl mt-2 cursor-pointer transition-transform duration-500 ${isOpen
                ? "rotate-360 !text-custom-yellow " // Rotate 360 degrees and change color when open
                : "rotate-0 "
                }`}
              onClick={handleToggle} // Toggle the dropdown on click
            />
            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-6 w-[280px] bg-white  dark:bg-gray-900 shadow-lg rounded-lg p-2 z-10">
                <ul className="text-gray-700 gap-3 flex items-center justify-center  ">
                  <li className="cursor-pointer"> <div className="relative inline-block">
                    {/* Dropdown Button */}
                    <button
                      className="px-3 py-2 flex  justify-between items-center bg-gray-200 dark:bg-gray-800 text-custom-yellow dark:text-white rounded-lg"
                      onClick={handleLanguagedownDown}
                    >
                      {selectedLanguage} <span> <RiArrowDropDownLine className="text-[25px] ml-5 text-custom-yellow" /></span>
                    </button>
                    {/* Dropdown Menu */}
                    {isLanguage && (
                      <div className="absolute  mt-2 w-40 bg-white shadow-lg rounded-lg  z-10">
                        <ul className="text-gray-700  whitespace-nowrap">
                          {["English", "English ", "English ", "English"].map(
                            (language) => (
                              <li
                                key={language}
                                className="py-1 px-2 whitespace-nowrap cursor-pointer bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200"
                                onClick={() => handleLanguageSelect(language)}
                              >
                                {language}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )} </div></li>
                  <li className=" cursor-pointer"><MdOutlineWbSunny className="text-[25px] text-custom-yellow dark:text-gray-300 " /></li>
                  <li className="  cursor-pointer">
                    <label className="inline-flex items-center cursor-pointer">
                      {/* Checkbox Input */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleactivestatusToggle}
                        onClick={handlemodeToggle}
                        className="sr-only peer"
                      />
                      {/* Toggle Switch */}
                      <div className="relative w-14 h-7 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[6px] after:bg-black  after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-custom-yellow"></div>
                      {/* Label */}
                    </label></li>
                  <li className=" cursor-pointer"><IoMoonOutline className="text-custom-yellow dark:text-gray-300 text-[25px]" /></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      <div className="relative">
        {/* Overlay for when drawer is open */}
        {isDrawerOpen && (
          <div
            className="fixed z-50 "

          >

            <div
              className={`fixed top-0 left-0 h-full w-64 bg-custom-background-color p-4 transform transition-transform duration-300 ease-in-out`}
            >
              <div className=''>
                <div className="flex  items-center pb-3">
                  <TiArrowLeftThick onClick={toggleDrawer} className="text-white text-[30px] px-[5px]" />
                  <div className="relative bg-black rounded-xl w-full">
                    <div className="absolute inset-y-0  flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-2 truncate text-ellipsis italic bg-gray-200 dark:bg-custom-background-color text-black dark:text-white   rounded-lg focus:outline-none"
                      placeholder="Event,Markets and More"
                    />
                    {showDropdown && searchTerm && (
                      <ul className="absolute w-full bg-black z-20 text-gray-900 dark:text-white mt-1 custom-background border border-gray-300 rounded-lg shadow-lg">
                        {filteredSuggestions.length > 0 ? (
                          filteredSuggestions.map((item, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 cursor-pointer hover:bg-custom-background"
                              onClick={() => {
                                setSearchTerm(item);
                                setShowDropdown(false);
                              }}
                            >
                              {item}
                            </li>
                          ))
                        ) : (
                          <li className="px-4 py-2 text-gray-500">No results found</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="overflow-y-scroll  scrollbar-hide sm:h-[355px] ">
                  <div className=" bg-custom-bg-color py-1 rounded-lg">
                    {eventItems.map((item, index) => (
                      <div
                        className="relative flex justify-between my-1 py-1 px-2 mx-1 rounded-lg items-center overflow-hidden group"
                        key={item.id}
                      >
                        <div className="absolute inset-0 bg-custom-background-color transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 z-0"></div>
                        <div className="flex items-center relative z-10">
                          <div
                            className={`text-[#18AC27] p-1 rounded-lg font-semibold text-[22px] bg-black transition-colors group-hover:bg-custom-background-color duration-300 ${item.isHovered ? 'bg-transparent' : ''}`}
                          >
                            {item.icon}
                          </div>
                          <div className="whitespace-nowrap w-24 truncate text-white font-semibold text-[14px] px-2">
                            {item.title}
                          </div>
                        </div>
                        <div
                          className={`flex justify-center items-center rounded-md text-custom-yellow transition-transform duration-300 `}
                        >
                          <p className="px-1 font-[600] z-10 bg-custom-background-color rounded-sm text-[10px]">{item.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="my-3 bg-custom-bg-color  py-1 rounded-lg overflow-y-scroll max-h-full  scrollbar-hide sm:h-[355px] 2xl:h-full ">
                    {eventSidebarItems.map((item, index) => (
                      <div
                        className="relative flex justify-between my-1 py-1 px-1 mx-1 rounded-lg items-center overflow-hidden group"
                        key={item.id}
                      >
                        <div className="absolute inset-0 bg-custom-background-color transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 z-0"></div>
                        <div className="flex items-center relative z-10">
                          <div
                            className={`text-[#18AC27] p-1 rounded-lg font-semibold text-[22px] bg-black transition-colors group-hover:bg-custom-background-color duration-300 ${item.isHovered ? 'bg-transparent' : ''}`}
                          >
                            {item.icon}
                          </div>
                          <div className=" whitespace-nowrap w-24 truncate text-white font-semibold text-[14px]">
                            <p className={`${index === 0 ? 'text-custom-yellow text-[16px] font-[600]' : ""} px-2`}> {item.title} </p>
                          </div>
                        </div>
                        <div className={`${item.count ? `bg-[#202020]` : ""}  flex justify-center items-center rounded-sm text-custom-yellow`}>
                          <p className="px-1 font-[600] z-10 text-[10px]">{item.count}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;