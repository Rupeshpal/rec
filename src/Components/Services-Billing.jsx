import React, { useState } from "react";
import Services_Billin from "../Components/Services_Billin";
import Advance from "../Components/Advance";
import Bed_transfer from "../Components/Bed_transfer";

const EMRPage = () => {
  const [activeTab, setActiveTab] = useState("services");


  return (
    
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Tabs Navigation */}

      <div className="px-6 mt-8 w-full border-b pb-1">
        <div className="flex space-x-6 text-md font-semibold border-b-2">
          <button
            className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
              activeTab === "services"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
            
            onClick={() => setActiveTab("services")}
          >
            🚑 <span>Services Bill</span>
          </button>

          <button
            className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
              activeTab === "Advance"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
            onClick={() => setActiveTab("Advance")}
          >
            🏥 <span>Quick Finance Info</span>
          </button>
          <button
            className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
              activeTab === "Bed_Tranfer"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-500"
            }`}
            onClick={() => setActiveTab("Bed_Tranfer")}
          >
            🏥 <span>Bed Transfer</span>
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className="p-1">
        {activeTab === "services" ? (
          <Services_Billin />
        ) : 
            activeTab === "Advance" ?
            <Advance/>
        :(
        <Bed_transfer/> 
        )}
      </div>
    </div>
  );
};

export default EMRPage;
