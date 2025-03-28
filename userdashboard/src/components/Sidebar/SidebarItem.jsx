"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ icon, label, isOpen, path }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <Link href={path}>
      <div className="flex items-center w-full">
        {/* Left selection bar */}
        <div
          className={`h-10 w-2 rounded-r-md cursor-pointer transition-all duration-300 hover:bg-blue-100 ${
            isActive ? "bg-[#4880FF] text-white" : "hover:bg-blue-100 text-black"
          }`}
        ></div>

        {/* Main item */}
        <div
          className={`flex items-center w-full gap-4 px-4 py-2 mx-5 rounded-md cursor-pointer transition-all duration-300 ${
            isActive ? "bg-[#4880FF] text-white" : "hover:bg-blue-100 text-black"
          }`}
        >
          <span>{icon}</span>
          {isOpen && <span>{label}</span>}
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
