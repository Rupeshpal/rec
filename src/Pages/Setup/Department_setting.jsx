import React, { useState } from "react";
import Pathology_Setup from "../../Components/Pathology_Setup";
import Radiology_Setup from "../../Components/Radiology_Setup";
import Add_Services from "../../Components/Add_Services";

const EMRPage = () => {
  const [activeTab, setActiveTab] = useState("Pathology");

  const tabs = [
    { key: "Pathology", label: "Pathology", component: <Pathology_Setup/>},
    { key: "Advance", label: "Radiology", component: <Radiology_Setup /> },
 
    { key: "Discharge", label: "CT Scan", component: <div>Discharge Summary</div> },
    { key: "Bed_Tranfer", label: "Add Service Charge", component: < Add_Services/> },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen mt-10">
        
      <div className="w-64 bg-white border-r p-4 space-y-2">
        <h5>Department Setting</h5>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`w-full text-left px-3 py-1 text-sm rounded transition-all duration-300 font-[400] ${
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
      <div className="flex-1 p-6">
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
  );
};

export default EMRPage;
