import React, { useState } from "react";
import Pathology_Test_list from "./Pathology_Test_list";
import Radiology_Parameter from "./Radiology_Parameter";
import Pathology from "./Pathology";
import Parameter_Unit from "./Parameter_Unit";

const EMRPage = () => {
  const [activeTab, setActiveTab] = useState("services");

  const tabs = [
        { key: "services", label: " Radiology Test List", component: <Pathology_Test_list/>},
        { key: "Advance", label: "Category ", component: <Pathology /> },
        { key: "Unit", label: "Unit", component: <Parameter_Unit /> },
        { key: "Parameter", label: "Radiology Parameter", component: <Radiology_Parameter /> },
    
   
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
