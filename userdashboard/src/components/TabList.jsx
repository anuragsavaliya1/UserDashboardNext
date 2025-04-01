"use client";
import { useState } from "react";

export default function TabList({ tabs = [], onTabChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key);

  const handleClick = (tab) => {
    setActiveTab(tab.key);
    if (onTabChange) onTabChange(tab.key); // Callback to parent
  };

  return (
    <div className="flex  gap-6  ">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => handleClick(tab)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all 
            ${
              activeTab === tab.key
                ? "bg-[#7367f0] text-white"
                : "text-gray-600  hover:bg-[#dbd8fd] hover:text-[#7367f0]"
            }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
