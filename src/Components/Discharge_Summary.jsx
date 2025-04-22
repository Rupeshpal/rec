import React from 'react';

const DischargeSummary = () => {
  return (
    <div className="bg-gray-200 font-sans min-h-screen">
      {/* Topbar Component (assuming it's a separate file) */}
      {/* Replace with actual Topbar if available */}
      {/* <Topbar /> */}

      <div className="flex pt-24">
        <div className="flex-1 w-full p-8">
          {/* Discharge Summary Title and Search Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 space-y-4">
            <h1 className="text-3xl font-semibold text-gray-800">Discharge Summary</h1>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-4 w-full">
              <input
                type="text"
                placeholder="Search with HIS Number"
                className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-80 mb-4 md:mb-0"
              />
              <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Patient Data Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600">
              Patient discharge records and details will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DischargeSummary;
