"use client";
import { useSelector } from "react-redux";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Topbar from "./../../components/Topbar";

const Layout = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? "w-55" : "w-20"}`}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Fixed Topbar */}
        <div className="h-16">
          <Topbar isOpen={isSidebarOpen} />
        </div>

        {/* Children Wrapper - Takes full height but prevents overflow */}
        <div className=" bg-gray-50 flex-1 overflow-hidden">
          {/* Children - Only this will scroll */}
          <main className="h-full w-full  overflow-auto no-scrollbar ">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
