import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Casino from './pages/Casino/page';
import Roulette from './pages/Roulette/page';
import Slot from './pages/Slots/page';
import Baccarat from './pages/Baccarat/page';
import Blackjack from './pages/Blackjack/page';
import Poker from './pages/Poker/page';
import Teenpatti from './pages/TeenPatti/page';
import DragonTiger from './pages/Gragontiger/page';
import Cardgame from './pages/Cardgame/page';
import Numbergame from './pages/NumberGame/page';
import Sidebar from './component/Sidebar/Sidebar';
import Rightsidebar from "./component/Rightsidebar/Rightsidebar";
import Header from './component/Header/header';
import TradingGame from './component/TradingGame/TradingGame';
import Footer from './component/Footer/Footer';
import ESport from './pages/E-sport/page';
import Register from './pages/register/page';
import FooterBar from "./component/FooterBar/Footerbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  // Custom component to check route and conditionally render the Header and TradingGame
  const Layout = ({ children }) => {
    const location = useLocation();

    // Check if the current path is "/e-sport"
    const isEsportPage = location.pathname === '/e-sport';

    return (
      <>
        {/* Conditionally render Header and TradingGame */}
        {!isEsportPage && (
          <>
            <Header />
            <TradingGame />
          </>
        )}
        {children}
      </>
    );
  };

  return (
    <div className="bg-[#C0C0C0] h-full dark:bg-[#202020]">
      <Router>
        <Navbar handleModeToggle={handleModeToggle} toggleSidebar={toggleSidebar} isExpanded={isSidebarExpanded} />
        <div className="grid grid-cols-12 px-2 pt-2 gap-2">
          <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
            <div className="flex lg:space-x-4">
            <div
  className={`${
    isSidebarExpanded
      ? "w-[4.5%] lg:w-[4.5%] 2xl:w-[3%]"
      : "w-[19%] lg:w-[25%] 2xl:w-[13%]"
  } hidden lg:block transition-all duration-300 ease-in-out hover:w-[19%] lg:hover:w-[25%] 2xl:hover:w-[13%]`}
>
  <Sidebar isExpanded={isSidebarExpanded} />
</div>
              <div className={`${isSidebarExpanded ? "w-[100%] lg:w-[100%]" : "w-full"} overflow-y-scroll max-h-full scrollbar-hide sm:h-[510px] 2xl:h-screen`}>
                {/* Wrapping Routes in Layout to conditionally render */}
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/live_casino" element={<Casino />} />
                    <Route path="/live_casino/provider/slots" element={<Slot />} />
                    <Route path="/live_casino/provider/roulette" element={<Roulette />} />
                    <Route path="/live_casino/provider/blackjack" element={<Blackjack />} />
                    <Route path="/live_casino/provider/baccarat" element={<Baccarat />} />
                    <Route path="/live_casino/provider/poker" element={<Poker />} />
                    <Route path="/live_casino/provider/teen_atti" element={<Teenpatti />} />
                    <Route path="/live_casino/provider/dragon_tiger" element={<DragonTiger />} />
                    <Route path="/live_casino/provider/card_game" element={<Cardgame />} />
                    <Route path="/live_casino/provider/number_game" element={<Numbergame />} />
                    <Route path="/e-sport" element={<ESport />} />
                    <Route path="/register" element={<Register />} />
                  </Routes>
                </Layout>
                <div className="hidden lg:block">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
            <Rightsidebar />
          </div>
        </div>
        <div className="pb-10 lg:hidden block">
          <Footer />
        </div>
        {/* Curved section */}
        <div className="lg:hidden block">
          <FooterBar />
        </div>
      </Router>
    </div>
  );
}

export default App;
