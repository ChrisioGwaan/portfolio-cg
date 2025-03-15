import "./App.css";
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { GoHome, GoPerson, GoRepo, GoMail } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
// import { IconName } from "react-icons/lu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const homeLinkClass = ({ isActive }) =>
    `flex items-center p-2 text-[22px] text-[#8cfa9e] transform transition-all duration-200 hover:text-[#ff91b5] hover:scale-105 hover:bg-[#ffffff] rounded ${
      isActive ? "font-bold" : ""
    }`;

  const defaultLinkClass = () =>
    `flex items-center p-2 text-[22px] text-[#8cfa9e] transform transition-all duration-200 hover:text-[#ff91b5] hover:scale-105 hover:bg-[#ffffff] rounded`;

  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const [dayName, setDayName] = useState(days[new Date().getDay()]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
      setDayName(days[new Date().getDay()]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <Router>
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="group fixed top-4 left-4 z-50 text-3xl text-orange-400
                     bg-transparent outline-none border-none
                     hover:bg-transparent focus:outline-none focus:border-none focus:ring-0"
        >
          <MdOutlineSettings
            className="
                        animate-spin-slow
                        transition-all
                        duration-300
                        group-hover:animate-spin-fast
                        group-hover:scale-170
                    "
          />
        </button>
      )}

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out bg-[#ffffff] w-64 z-40 shadow-md`}
      >
        <div className="p-4 text-center custom-font mb-4 text-[30px]">
            {dateTime}
        </div>
        <div className="text-center custom-font mb-4 text-[30px]">
            {dayName}
        </div>

        <div className="p-4">
          <img
            src="/images/dango-animation.gif"
            alt="Dango Animation"
            className="mx-auto mb-4"
          />
        </div>
        
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink
            end
            to="/"
            className={homeLinkClass}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoHome className="mr-2" /> Home
          </NavLink>
          <br />
          <NavLink
            to="/about"
            className={defaultLinkClass}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoPerson className="mr-2" /> About
          </NavLink>
          <br />
          <NavLink
            to="/projects"
            className={defaultLinkClass}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoRepo className="mr-2" /> Achivements
          </NavLink>
          <br />
          <NavLink
            to="/projects"
            className={defaultLinkClass}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoRepo className="mr-2" /> Projects
          </NavLink>
          <br />
          <NavLink
            to="/contact"
            className={defaultLinkClass}
            onClick={() => setIsSidebarOpen(false)}
          >
            <GoMail className="mr-2" /> Contact
          </NavLink>
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 duration-500"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className={`ml-0 transition-all duration-300`}>
        <main className="p-4 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
