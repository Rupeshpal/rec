import React, { useState } from "react";
import Pathology from "../../Components/Pathology";
import Pathalogy_parameter from "../../Components/Pathalogy_parameter";
import Bed_transfer from "../../Components/Bed_transfer";

const EMRPage = () => {
  const [activeTab, setActiveTab] = useState("Pathology");

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Tabs Navigation */}
      <div className="px-6 mt-8 w-full border-b pb-1">
        <div className="flex space-x-6 text-md font-semibold border-b-2">
          <button
            className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
              activeTab === "Pathology"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
            onClick={() => setActiveTab("Pathology")}
          >
            🧪 <span>Pathology Category</span>
          </button>

          <button
            className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
              activeTab === "Pathalogy_parameter"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
            onClick={() => setActiveTab("Pathalogy_parameter")}
          >
            💳 <span>Pathalogy parameter</span>
          </button>

          <button
            className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
              activeTab === "BedTransfer"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
            onClick={() => setActiveTab("BedTransfer")}
          >
            🛏️ <span>Pathology Unit</span>
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className="p-4">
        {activeTab === "Pathology" && <Pathology />}
        {activeTab === "Pathalogy_parameter" && <Pathalogy_parameter />}
        {activeTab === "BedTransfer" && <Bed_transfer />}
      </div>
    </div>
  );
};

export default EMRPage;
