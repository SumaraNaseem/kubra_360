import React, { useState } from 'react';
import { IoIosPlay } from "react-icons/io";
import { HiSignal } from "react-icons/hi2";
import { FaTv } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { dataItems } from '../../data/data'; // Ensure this path is correct

function LiveEvents() {
  // Initialize state with all sections open (true)
  const [openIndexes, setOpenIndexes] = useState(Array(dataItems.length).fill(true));
  const [starVisibility, setStarVisibility] = useState(
    dataItems.map(item => item.teams.map(() => false)) // Track star visibility for each team
  );

  const toggleAccordion = (index) => {
    setOpenIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[index] = !newIndexes[index]; // Toggle the specific index
      return newIndexes; // Return the updated state
    });
  };

  const toggleStar = (itemIndex, teamIndex) => {
    setStarVisibility(prev => {
      const newStars = prev.map((itemStars, i) => {
        if (i === itemIndex) {
          return itemStars.map((star, j) => (j === teamIndex ? !star : star));
        }
        return itemStars;
      });
      return newStars;
    });
  };

  return (
    <div>
      <div className="flex py-3">
        <div className='pr-2'>
          <HiSignal className="w-6 h-6 text-green-400" />
        </div>
        <p className="text-[16px] font-[700] font-montserrat text-black dark:text-white">Live Events</p>
      </div>
      {dataItems.map((item, itemIndex) => (
        <div key={item.id} className='relative dark:bg-custon-right-side-bg bg-gray-200 py-5 mt-2 rounded-lg'>
          <div onClick={() => toggleAccordion(itemIndex)} className='cursor-pointer left-3 absolute -top-[2px] h-2 bg-slate-100'>
            <div className="play-now p-[5px] px-5 flex mb-3 justify-center bg-slate-100 mt-[3px]">
              <img src='https://res.cloudinary.com/dionqkh8u/image/upload/v1726778156/3115782_drd6qf.png' alt="ball" className='w-5 h-5' />
              <p className="text-[12px] font-montserrat text-black px-1 font-semibold whitespace-nowrap">
                {item.game}
              </p>
              <p className="text-[11px] text-black font-montserrat font-semibold whitespace-nowrap">
                {item.n_of_game}
              </p>
            </div>
          </div>
          {openIndexes[itemIndex] && item.teams.map((team, teamIndex) => (
            <div key={teamIndex} className=' mt-4  dark:bg-custom-background-color bg-gray-200  rounded-lg mx-2 group relative overflow-hidden'>
              <div className="absolute inset-0  w-full h-full bg-gradient-to-r from-[#4D3F26] to-[#4D3F26] transform scale-x-0 origin-left transition-transform duration-[1000ms] ease-in-out group-hover:scale-x-100"></div>

              <div className='hidden  lg:grid grid-cols-12 justify-between  items-center  px-2 py-2'>
                <div className="col-span-12 lg:col-span-4 z-10 flex">
                  <div className="button-box flex mr-3 whitespace-nowrap font-semibold text-[10px] lg:text-[12px] rounded-lg px-2 py-4 justify-center items-center">
                    <span className="px-1"><IoIosPlay /></span> IN PLAY
                  </div>
                  <div>
                    <div className="flex space-x-1 ">
                      <p className="drop-shadow-md dark:text-white  text-black text-[12px] font-[600] font-montserrat">{team.team1}</p>
                      <div className="relative rounded-full">
                        <div className="flex absolute left-4 -top-1 justify-center items-center ">
                          <div className="h-6 w-[0.1px] bg-yellow-500 rotate-45"></div>
                        </div>
                        <p className="text-black text-center absolute left-2 rounded-full font-[600] text-[10px] bg-yellow-400 px-[3px]">vs</p>
                      </div>
                    </div>
                    <p className="drop-shadow-md dark:text-white  text-black text-[12px] font-[600] font-montserrat leading-none">{team.team2}</p>
                    <p className="text-gray-400 z-40 text-[11px] font-[500] font-montserrat">{team.match}</p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-8 z-10 flex justify-end gap-2">
                  <div className="flex justify-center items-center space-x-1">
                    <FaTv className="text-custom-yellow" />
                    <div className="border relative flex justify-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-1 -top-[10px] text-[10px] text-center rounded-lg px-1">2</p>
                      <p className="text-custom-yellow w-5 px-[2px] text-[10px] font-[600] text-center font-montserrat">MO</p>
                    </div>
                    <div className="border relative flex justify-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-1 -top-[10px] text-[10px] text-center rounded-lg px-1">7</p>
                      <p className="text-custom-yellow w-5 text-[10px] font-[600] text-center font-montserrat">F</p>
                    </div>
                    <div className="border relative flex justify-center text-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-2 -top-[10px] text-[10px] text-center rounded-lg px-1">10</p>
                      <p className="text-custom-yellow w-5 text-[10px] font-[600] text-center font-montserrat">M</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1 items-center">
                    {[team.score1, team.score2, team.score3, team.score4, team.score5, team.score6].map((score, index) => (
                      <div key={index} className={`text-center py-3 px-2 text-[14px] font-[600] font-montserrat text-black rounded-lg ${index % 2 === 0 ? 'bg-table-tab-one-color' : 'bg-table-tab-two-color'}`}>
                        <p>{score}</p>
                      </div>
                    ))}
                    <div className="text-center cursor-pointer text-[25px] font-[600] font-montserrat" onClick={() => toggleStar(itemIndex, teamIndex)}>
                      {starVisibility[itemIndex][teamIndex] ? (
                        <FaStar className="text-yellow-500 " />
                      ) : (
                        <CiStar className="dark:text-white text-black" />
                      )}
                    </div>
                  </div>
                </div>
              </div>






              <div className=' block lg:hidden grid grid-cols-12 justify-between space-y-5 items-center  px-2 py-2'>
                <div className="col-span-8 z-10 flex">
                  <div className="button-box flex mr-3 whitespace-nowrap font-semibold text-[10px] lg:text-[12px] rounded-lg px-3 py-4 justify-center items-center">
                    <span className="px-1"><IoIosPlay /></span> IN PLAY
                  </div>
                  <div>
                    <div className="flex space-x-1 ">
                      <p className="drop-shadow-md text-white text-[12px] font-[600] font-montserrat">{team.team1}</p>
                      <div className="relative rounded-full">
                        <div className="flex absolute left-4 -top-1 justify-center items-center ">
                          <div className="h-6 w-[0.1px] bg-yellow-500 rotate-45"></div>
                        </div>
                        <p className="text-black text-center absolute left-2 rounded-full font-[600] text-[10px] bg-yellow-400 px-[3px]">vs</p>
                      </div>
                    </div>
                    <p className="drop-shadow-md text-white whitespace-nowrap text-[12px] font-[600] font-montserrat leading-none">{team.team2}</p>
                    <p className="text-gray-400 z-40 text-[11px] font-[500] font-montserrat">{team.match}</p>
                  </div>
                </div>

                <div className="col-span-4 z-10 flex justify-end">


                <div className="flex justify-center items-center space-x-1">
                    <FaTv className="text-custom-yellow" />
                    <div className="border relative flex justify-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-1 -top-[10px] text-[10px] text-center rounded-lg px-1">2</p>
                      <p className="text-custom-yellow w-5 px-[2px] text-[10px] font-[600] text-center font-montserrat">MO</p>
                    </div>
                    <div className="border relative flex justify-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-1 -top-[10px] text-[10px] text-center rounded-lg px-1">7</p>
                      <p className="text-custom-yellow w-5 text-[10px] font-[600] text-center font-montserrat">F</p>
                    </div>
                    <div className="border relative flex justify-center text-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-2 -top-[10px] text-[10px] text-center rounded-lg px-1">10</p>
                      <p className="text-custom-yellow w-5 text-[10px] font-[600] text-center font-montserrat">M</p>
                    </div>
                  </div>




                    {/* <div className="text-center cursor-pointer text-[25px] font-[600] font-montserrat" onClick={() => toggleStar(itemIndex, teamIndex)}>
                     
                     
                     
                     
                      {starVisibility[itemIndex][teamIndex] ? (
                        <FaStar className="text-yellow-500" />
                      ) : (
                        <CiStar className="text-white" />
                      )}
                    </div> */}
                </div>
                <div className="col-span-2 z-10 flex justify-start">
                <div className="text-center cursor-pointer text-[25px] font-[600] font-montserrat" onClick={() => toggleStar(itemIndex, teamIndex)}>
                     
                     
                     
                     
                     {starVisibility[itemIndex][teamIndex] ? (
                       <FaStar className="text-yellow-500" />
                     ) : (
                       <CiStar className="text-white" />
                     )}
                   </div>
                  {/* <div className="flex justify-center items-center space-x-1">
                    <FaTv className="text-custom-yellow" />
                    <div className="border relative flex justify-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-1 -top-[10px] text-[10px] text-center rounded-lg px-1">2</p>
                      <p className="text-custom-yellow w-5 px-[2px] text-[10px] font-[600] text-center font-montserrat">MO</p>
                    </div>
                    <div className="border relative flex justify-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-1 -top-[10px] text-[10px] text-center rounded-lg px-1">7</p>
                      <p className="text-custom-yellow w-5 text-[10px] font-[600] text-center font-montserrat">F</p>
                    </div>
                    <div className="border relative flex justify-center text-center items-center border-gray-50 rounded-md">
                      <p className="bg-custom-yellow absolute -right-2 -top-[10px] text-[10px] text-center rounded-lg px-1">10</p>
                      <p className="text-custom-yellow w-5 text-[10px] font-[600] text-center font-montserrat">M</p>
                    </div>
                  </div> */}
                </div>


                <div className="col-span-10 z-10 flex justify-end ">
                  
                  <div className="flex justify-end gap-3 items-center">
                    {[team.score1, team.score2, team.score3, team.score4, team.score5, team.score6].map((score, index) => (
                      <div key={index} className={`text-center py-2 px-1 text-[12px] font-[600] font-montserrat text-black rounded-lg ${index % 2 === 0 ? 'bg-table-tab-one-color' : 'bg-table-tab-two-color'}`}>
                        <p>{score}</p>
                      </div>
                    ))}
                   
                  </div> 
                </div>
              </div>





              <div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LiveEvents;
