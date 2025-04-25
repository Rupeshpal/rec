import React, { useState } from "react";
import Emergency from "../../Components/Emergency"; 
import IPDRegistration from "../../Components/IPDRegistration"; 

const EMRPage = () => {
    const [activeTab, setActiveTab] = useState("emergency");

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            {/* Tabs Navigation */}
            <div className="px-6  w-full border-b pb-3">
                <div className="flex space-x-6 text-lg font-semibold border-b-2">
                    <button
                        className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
                            activeTab === "emergency"
                                ? "text-green-600 border-b-2 border-green-600"
                                : "text-gray-500 hover:text-green-500"
                        }`}
                        onClick={() => setActiveTab("emergency")}
                    >
                        🚑 <span>Emergency</span>
                    </button>

                    <button
                        className={`flex items-center space-x-2 pb-2 transition-all duration-300 ${
                            activeTab === "ipd"
                                ? "text-green-600 border-b-2 border-green-600"
                                : "text-gray-500 hover:text-green-500"
                        }`}
                        onClick={() => setActiveTab("ipd")}
                    >
                        🏥 <span>IPD REGISTRATION</span>
                    </button>
                </div>
            </div>

            {/* Content Rendering */}
            <div className="p-6">
                {activeTab === "emergency" ? <Emergency /> : <IPDRegistration />}
            </div>
        </div>
    );
};

export default EMRPage;
