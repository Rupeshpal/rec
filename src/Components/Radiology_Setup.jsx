import React, { useState } from "react";
// import  from "./Services_Billin";
// import Advance from "./Advance";
// import Bed_transfer from "./Bed_transfer";

const EMRPage = () => {
  const [activeTab, setActiveTab] = useState("services");

  const tabs = [
    { key: "services", label: "Add Radiology Test", component: <></>},
    { key: "Advance", label: "Parameter & Category ", component: <></> },
    
   
  ];

  return (
    <div className="bg-gray-100 min-h-screen "> 
      {/* Topbar */}
      <div className="bg-white  border-b p-2 flex space-x-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded font-[100] transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.key
                ? "bg-green-100 text-green-700"
                : "text-gray-600 hover:bg-gray-100 hover:text-green-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
  );
};

export default EMRPage;
