import React, { useState } from 'react';
import { tabCasino } from '../../data/data';
import { useNavigate } from 'react-router-dom'; // Updated import
import { HiSignal } from "react-icons/hi2";

function Page() {
  const navigate = useNavigate(); // Updated to useNavigate
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProvider, setSelectedProvider] = useState('All Provider'); // New state for selected provider
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  // Filter function based on selected provider
  const filteredContent = tabCasino[activeTab].content.filter(item => 
    selectedProvider === 'All Provider' || item.valueone === selectedProvider
  );
  const handleOptionClick = (path) => {
    navigate(path);
    setIsOpen(false)
  };
  const options = [
    { label: 'All Games', path: '/live_casino',icon:<HiSignal/> },
    { label: 'Slots', path: '/live_casino/provider/slots',icon:<HiSignal/> },
    { label: 'Roulette', path: '/live_casino/provider/roulette',icon:<HiSignal/> },
    { label: 'Baccarat', path: '/live_casino/provider/baccarat' ,icon:<HiSignal/>},
    { label: 'Blackjack', path: '/live_casino/provider/blackjack' ,icon:<HiSignal/>},
    { label: 'Poker', path: '/live_casino/provider/poker' ,icon:<HiSignal/>},
    { label: 'Teen Patti', path: '/live_casino/provider/teen_atti' ,icon:<HiSignal/>},
    { label: 'Dragon Tiger', path: '/live_casino/provider/dragon_tiger' ,icon:<HiSignal/>},
    { label: 'Card Game', path: '/live_casino/provider/card_game' ,icon:<HiSignal/>},
    { label: 'Number Game', path: '/live_casino/provider/number_game' ,icon:<HiSignal/>},

  ];

  return (
    <div
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }}
      className='bg-gray-200 dark:bg-custom-bg-color rounded-lg my-3 p-4'
    >
      <h1>This is Gragontiger Page</h1>
      <div>
        {/* Tab Headers */}
        <div className="grid grid-cols-12 gap-2">
          {/* Tab Buttons Section */}
          <div className="col-span-12 lg:col-span-8  2xl:col-span-9 flex justify-left space-x-1 text-black dark:text-white">
            {tabCasino.map((tab, index) => (
              <button
                key={index}
                className={`py-2 bg-white dark:bg-gradient-to-r from-[#0b0b0b] via-[#0d0d0d] to-[#0c0c0c] shadow-2xl rounded-lg w-[72px] text-[13px] text-center ${index === 0 ? "" : "border-2 dark:border-custom-background-color"} font-montserrat font-[600] ${activeTab === index ? 'border border-custom-text-type' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {/* Input Section */}
          <div className="col-span-9 lg:col-span-4 2xl:col-span-3 grid grid-cols-2 gap-2">
            {/* Dropdown Input 1 */}
            <div className="relative inline-block">
              <select
                className="block appearance-none w-full bg-white dark:bg-custom-bg-color text-gray-700 border border-gray-600 hover:border-gray-600 px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setSelectedProvider(e.target.value)} // Update state on selection
              >
                <option className='text-white'>All Provider</option>
                {/* Map options from tabCasino for valueone */}


                {tabCasino[activeTab].content.map(item => (
            <div
            key={item.id}
              className="cursor-pointer space-x-1 items-center py-2 text-[14px] flex px-2 text-white bg-custom-bg-color  hover:bg-black"
             
            >
               <div className='text-[#18AC27] p-1 rounded-full font-semibold text-[22px] bg-black'>
               {item.valueone}
              </div>
            
             
            </div>
          ))}





                {/* {tabCasino[activeTab].content.map(item => (
                  <option key={item.id} className='text-white   truncate text-ellipsis'>{item.valueone}</option>
                ))} */}
              </select>
              <div className="absolute inset-y-0 my-2  right-0 flex flex-col justify-center items-center px-2 pointer-events-none">
                {/* Up Arrow */}
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
                {/* Down Arrow */}
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {/* Dropdown Input 2 */}
            <div className="relative inline-block " >
      <div 
        className="block appearance-none w-full bg-white dark:bg-custom-bg-color text-gray-700 border border-gray-600 hover:border-gray-600 px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
      >
        <span className=' whitespace-nowrap pr-7 truncate text-ellipsis'>All Games</span>
        {isOpen && ( // Conditionally render dropdown
        <div className="absolute z-10 mt-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer space-x-1 items-center py-2 text-[14px] flex px-2 text-white bg-custom-bg-color  hover:bg-black"
              onClick={() => handleOptionClick(option.path)}
            >
               <div className='text-[#18AC27] p-1 rounded-full font-semibold text-[22px] bg-black'>
                   {option.icon}
              </div>
              <p className=' whitespace-nowrap'> {option.label}</p>
             
            </div>
          ))}
        </div>
      )}
      </div>

    
      
      <div className="absolute inset-y-0 my-2 right-0 flex flex-col justify-center items-center px-2 pointer-events-none">
        {/* Up Arrow */}
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        {/* Down Arrow */}
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 py-2 mt-4">
          {filteredContent.map((item) => (
            <div className="col-span-1" key={item.id}>
             <div className="h-32 2xl:h-52 overflow-hidden group">
  <img
    src={item.image}
    alt="Hover Image"
    className="w-full h-full rounded-xl hover:rounded-xl object-cover transform transition-transform duration-500 group-hover:scale-110"
  />
</div>
              <p className='text-[14px] truncate text-ellipsis font-[500] leading-2 mt-3 font-montserrat text-black dark:text-casino-text-color'>{item.valueone}</p>
              <p className='text-[14px] font-[400] font-montserrat text-black dark:text-casino-text-color'>{item.valueTwo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
