import { useState } from "react";

const StatementDashboard = () => {
  const [data, setData] = useState("Data not found for given criteria");

  const handleSearch = () => {
    setData("Fetching data...");
    setTimeout(() => {
      setData("No records found.");
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1 p-4 w-full mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-lg font-semibold">My Statement</h2>

          {/* Form Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
            {[
              "Time Duration *",
              "Select Head",
              "Payer",
              "Gender",
              "From Age",
              "To Age",
            ].map((label, index) => (
              <div key={index}>
                <label className="text-sm font-medium">{label}</label>
                <select className="w-full p-2 border rounded">
                  <option>Select</option>
                </select>
              </div>
            ))}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white mt-6 p-4 rounded-lg shadow-md overflow-auto w-full">
          <table className="w-full text-sm text-left border">
            <thead className="border-b bg-gray-100">
              <tr>
                {["Bill No", "Transaction ID", "Global Bill No", "Date", "Patient Name", "Gender/Age", "Address", "Category", "Dr. Name", "Disc (%)", "Disc (Rs.)", "Paid Amt (Rs.)", "Advance Adj (Rs.)", "Claim Amt (Rs.)", "Payer Type", "Collected By"].map((heading, index) => (
                  <th key={index} className="p-2">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td colSpan="16" className="p-4 text-gray-500">{data}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StatementDashboard;
