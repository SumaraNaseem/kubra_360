import React, { useState } from 'react'
import {tabData} from '../../data/data'

function Rightsidebar() {
    const [activeTab, setActiveTab] = useState(0);

    
    return (
        <div>
            <div className='overflow-y-scroll max-h-full  scrollbar-hide sm:h-[523px] 2xl:h-screen'>
                <div className=" dark:bg-custon-right-side-bg bg-gray-200 pt-2 rounded-lg">
                    <div >
                        <p className='text-center text-custom-text-type font-[600] py-2 font-montserrat text-[13px]'>Promotions</p>
                        <div className='p-2 '><img src="https://cdn.cloudd.site/khelo-bharat.com/banner/20240102382495.webp" alt="image" className='h-full w-full' /></div>

                    </div>
                </div>
                <div className=" dark:bg-custon-right-side-bg bg-gray-200 pt-2 mt-2 rounded-lg">
                    {/* Tab Headers */}
                    <div className="flex justify-around text-black dark:text-white">
                        {tabData.map((tab, index) => (
                            <button
                                key={index}
                                className={`w-32 py-1 text-[13px] text-center   ${index === 2 ? " " : "border-r border-gray-800"}  font-montserrat font-[600] ${activeTab === index ? '  text-custom-text-type' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    {/* Tab Content */}
                    <div className="grid grid-cols-2 gap-2 px-2 py-2 mt-4">
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4"> */}
  {tabData[activeTab].content.map((item) => (
    <div className="col-span-1 " key={item.id}>
      <div className="relative overflow-hidden group ">
        <div className=" ">
          <img
            src={item.image}
            alt="Hover Image"
            className=" h-full w-full object-cover"
          />
        </div>

       
        <div className="absolute inset-0    bg-white  rounded-lg  opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        {/* Text moving from top-left to center */}
        <div
          className="absolute top-0 left-0  flex items-center justify-center opacity-0 group-hover:opacity-100 text-black font-semibold text-lg transition-all duration-500 transform group-hover:translate-x-0 group-hover:translate-y-0"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <p className={`transition-all duration-500 text-white  transform group-hover:translate-x-[100%] group-hover:translate-y-[190%]`}>
           {item.title}
          </p>
        </div>
      </div>
    </div>
  ))}
{/* </div> */}

</div>

                </div>
            </div>
        </div>
    )
}

export default Rightsidebar