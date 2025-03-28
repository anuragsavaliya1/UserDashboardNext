"use client";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/store/slices/sidebarSlice";
const Topbar = ({ isOpen }) => {
  console.log("Topbar -> isOpen", isOpen);

  const dispatch = useDispatch();

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-white shadow-sm fixed top-0 right-0 left-0 z-10">
      {/* Logo + Hamburger */}
      <div className="flex items-center gap-3">
        <button onClick={() => dispatch(toggleSidebar())} className="text-xl text-gray-600 ">
          <FaBars />
        </button>
        <div
          onClick={() => dispatch(toggleSidebar())}
          className={`text-xl font-bold text-blue-600 ${!isOpen ? "hidden" : ""}`}
        >
          Dash<span className="text-black">Stack</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 outline-none text-sm"
          />
        </div>
      </div>

      {/* Right Section (Notification, Language, Profile) */}
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">6</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <img src="https://flagcdn.com/w40/gb.png" className="w-5 h-5 rounded-sm" />
          <span className="text-sm">English</span>
          <IoIosArrowDown className="text-sm" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full object-cover" />
          <div className="text-sm text-right">
            <p className="font-medium">Moni Roy</p>
            <p className="text-gray-400 text-xs">Admin</p>
          </div>
          <IoIosArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
