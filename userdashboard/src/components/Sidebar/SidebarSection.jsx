// components/Sidebar/SidebarSection.jsx
"use client";

import SidebarItem from "./SidebarItem";

const SidebarSection = ({ items, isOpen }) => {
  return (
    <nav className="flex flex-col gap-2 ">
      {items.map((item, idx) => (
        <SidebarItem key={idx} icon={item.icon} label={item.label} isOpen={isOpen} path={item.path} />
      ))}
    </nav>
  );
};

export default SidebarSection;
