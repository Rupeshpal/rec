import React from "react";

const BillingProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      
      {/* Main Wrapper */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        
        {/* Header */}
        <header className="bg-teal-600 p-5 text-white shadow-md rounded-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Billing Profile</h1>
            <button
              className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-white"
              title="Refresh"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0114.18-5.26L23 10"></path>
                <path d="M20.49 15a9 9 0 01-14.18 5.26L1 14"></path>
              </svg>
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="relative flex justify-center mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md w-full flex items-center gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Patient ID</option>
              <option>Registration No</option>
              <option>Patient Name</option>
            </select>

            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search Patient"
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Search
            </button>
          </div>
        </div>

        {/* Info Message */}
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-600 flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
            <span className="mr-1 text-teal-500">ℹ</span> Search patient profiles using ID, registration number, or name.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="mt-6 p-6 bg-white shadow-md rounded-lg text-gray-600 w-full text-center">
          📊 Patient billing records and analytics will be displayed here.
        </div>
      </div>
    </div>
  );
};

export default BillingProfile;
