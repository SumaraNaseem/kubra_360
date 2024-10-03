import React from 'react'

import { eventItems, eventSidebarItems } from '../../data/data'
function Sidebar({isExpanded }) {
  
    return (
        <div className=''>
                <div className=" h-full bg-gray-200 dark:bg-custom-bg-color py-1 rounded-lg">
                    {eventItems.map((item, index) => (
                        <div
                            className="relative flex justify-between my-1 py-1 px-1 mx-1 rounded-lg items-center overflow-hidden group"
                            key={item.id}
                        >
                            <div className="absolute inset-0 bg-custom-yellow dark:bg-custom-background-color transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 z-0"></div>
                            <div className="flex items-center relative z-10">
                                <div
                                    className={`text-[#18AC27] p-1 rounded-lg font-semibold text-[22px] bg-black transition-colors group-hover:bg-custom-background-color duration-300 ${item.isHovered ? 'bg-transparent' : ''}`}
                                >
                                    {item.icon}
                                </div>
                                <div className="whitespace-nowrap w-24 truncate text-black dark:text-white font-semibold text-[14px] px-2">
                                {item.title} 
                                </div>
                            </div>
                            <div
                                className={`flex justify-center items-center rounded-md  text-white dark:text-custom-yellow transition-transform duration-300 `}
                            >
                                <p className="px-1 font-[600] z-10 bg-custom-yellow dark:bg-custom-background-color rounded-sm text-[10px]">{item.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-3 bg-gray-200 dark:bg-custom-bg-color  py-1 rounded-lg overflow-y-scroll max-h-full  scrollbar-hide sm:h-[375px] 2xl:h-screen ">
                {eventSidebarItems.map((item, index) => (
                        <div
                            className="relative flex justify-between my-1 py-1 px-1 mx-1 rounded-lg items-center overflow-hidden group"
                            key={item.id}
                        >
                            <div className="absolute inset-0 bg-custom-background-color transition-transform duration-300 transform -translate-x-full group-hover:translate-x-0 z-0"></div>
                            <div className="flex items-center relative z-10">
                                <div
                                    className={`text-[#18AC27] p-1 rounded-lg font-semibold text-[22px]  bg-black transition-colors group-hover:bg-custom-background-color duration-300 ${item.isHovered ? 'bg-transparent' : ''}`}
                                >
                                    {item.icon}
                                </div>
                                <div className=" whitespace-nowrap w-24 truncate text-black dark:text-white font-semibold text-[14px]">
                                    <p className={`${index === 0 ? 'text-custom-yellow text-[16px] font-[600]' : ""} px-2`}> {item.title} </p>
                                </div>
                            </div>
                            <div className={`${item.count ? `bg-[#202020]` : ""}  flex justify-center items-center rounded-sm text-white dark:text-custom-yellow`}>
                                <p className="px-1 font-[600] z-10 text-[10px] bg-custom-yellow dark:bg-custom-background-color">{item.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    )
}
console.log(eventSidebarItems,'text color of the count')

export default Sidebar