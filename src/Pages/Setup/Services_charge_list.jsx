
import React, { useState } from "react";
import Services_charge_list from "./Services_charge_list"
import Unit_Type from "../../Components/Unit_Type"
import Category_Type from "../../Components/Category_Type"


import Charges from "../../Components/Charges"
import Tax_Category from "../../Components/Tax_Category"

const EMRPage = () => {
  const [activeTab, setActiveTab] = useState("Services_charge_list");

  const tabs = [
    { key: "Charges", label: "Charges", component:<Charges/> },
    { key: "Charge_Category", label: "Charge Category", component: <Category_Type/> },
    { key: "Services_charge_list", label: "Charge Type", component: <Services_charge_list/>},
    { key: "Discharge", label: "Tax Category", component: <Tax_Category/> },
    { key: "Unit_Type", label: "Unit Type", component: <Unit_Type/> },
  


  ];

  return (
    <div className="flex bg-gray-100 min-h-screen mt-10">
        
      <div className="w-64 bg-white border-r p-4 space-y-2">
        <h5>Charge Setup</h5>
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

