// components/Sidebar/Sidebar.jsx
"use client";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaHeart,
  FaInbox,
  FaList,
  FaCubes,
  FaCog,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";
import Sizes from "@/utils/Sizes";
const menuItems = [
  { icon: <FaTachometerAlt size={Sizes.NavIconSize} />, label: "Dashboard", path: "/main/dashboard" },
  { icon: <FaUsers size={Sizes.NavIconSize} />, label: "Users", path: "/main/users" },
  { icon: <FaHeart size={Sizes.NavIconSize} />, label: "Favorites", path: "/main/favorites" },
  { icon: <FaInbox size={Sizes.NavIconSize} />, label: "Inbox", path: "/main/inbox" },
  { icon: <FaList size={Sizes.NavIconSize} />, label: "Order Lists", path: "/main/orders" },
  { icon: <FaCubes size={Sizes.NavIconSize} />, label: "Product Stock", path: "/main/stock" },
];

const bottomItems = [
  { icon: <FaCog size={Sizes.NavIconSize} />, label: "Settings", path: "/main/settings" },
  { icon: <FaSignOutAlt size={Sizes.NavIconSize} />, label: "Logout", path: "/main/logout" },
];

const Sidebar = ({ isOpen }) => {
  console.log("Sidebar -> isOpen", isOpen);

  return (
    <div className="h-screen bg-white shadow-md flex flex-col justify-between">
      {/* Top Logo */}
      <div className="pt-4">
        <div className="text-center font-bold text-blue-600 text-lg mb-6">
          {isOpen ? (
            <span>
              Dash<span className="text-black">Stack</span>
            </span>
          ) : (
            <span>DS</span>
          )}
        </div>

        {/* Main Menu Section */}
        <SidebarSection items={menuItems} isOpen={isOpen} />
      </div>
      <SidebarSection items={bottomItems} isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
