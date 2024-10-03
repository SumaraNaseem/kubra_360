import React, { useState } from "react";

const TabSystem = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Sample data for the video links and table content (use valid video URLs)
  const tabs = [
    { id: 0, name:'Ball by Ball ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 1" },
    { id: 1, name:'Super Over  ', videoUrl: "https://www.w3schools.com/html/movie.mp4", tableData: "Data for Tab 2" },
    { id: 2, name:'Champions League (E-FootBall) ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 3" },
    { id: 3, name:'E-Table Tennis ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 4" },
    { id: 4, name:'E-Badminton ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 5" },
    { id: 5, name:'E-IceHOckey ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 6" },
    { id: 6, name:'E-BasketBall ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 7" },
    { id: 7, name:'Moter Racing ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 8" },
    { id: 8, name:'Dashing Derby  ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 9" },
    { id: 9, name:'Greyhound Racing', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 10" },
    { id: 10, name:'Harness Racing ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 11" },
    { id: 11, name:'Steeple Racing ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 12" },
    { id: 12, name:'Archery ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 13" },
    { id: 13, name:'Ball by Ball ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 14" },
    { id: 14, name:'Ball by Ball ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 15" },
    { id: 15, name:'Ball by Ball ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 16" },
    { id: 16, name:'Ball by Ball ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 17" },
    { id: 17, name:'Ball by Ball ', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", tableData: "Data for Tab 18" },

    // Add more tabs with real URLs as needed
  ];

  return (
    <div className="tab-container">
      {/* Render 15 buttons as tabs */}
      <div className="tabs-container overflow-x-auto whitespace-nowrap w-[100%] flex gap-3 mb-5 scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`tab-btn px-2 py-1 text-[14px] font-[600] font-montserrat text-white   rounded ${
              activeTab === index
                ? " bg-active-tab-color text- " // Active tab style: link color
                : "border-custom-yellow border bg-tab-bg-color text-active-tab-text-color "
            }`}
          >
           {tab.name}

          </button>
        ))}
      </div>

      {/* Video section */}
      <div className="content h-[100%] w-[100%]">
       
        <video width='800px'  height="200px" controls>
          <source src={tabs[activeTab].videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Table section */}
    
              <p className="border border-gray-300 px-4 py-2">{tabs[activeTab].tableData}</p>
             
          
      </div>
    </div>
  );
};

export default TabSystem;
