import React, { useState, useRef } from "react";
 // Ensure this path is correct for styles

const TransactionReceipt = () => {
  const [timeDuration, setTimeDuration] = useState("Today");
  const [selectHead, setSelectHead] = useState("OPD");
  const [gender, setGender] = useState("Female");
  const receiptRef = useRef(null);

  const printReceipt = () => {
    const printContent = receiptRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // Reload page to restore functionality
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen mt-10 flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6">
        
        {/* Filters Section (Hidden in Print) */}
        <div className="bg-teal-100 p-4 rounded-md no-print">
          <h2 className="text-xl font-semibold text-center my-4">My Transaction Report</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Time Duration *</label>
              <select className="w-full p-2 border rounded-md" value={timeDuration} onChange={(e) => setTimeDuration(e.target.value)}>
                <option>Today</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Select Head</label>
              <select className="w-full p-2 border rounded-md" value={selectHead} onChange={(e) => setSelectHead(e.target.value)}>
                <option>OPD</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select className="w-full p-2 border rounded-md" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>Female</option>
              </select>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md no-print">Search</button>
        </div>

        {/* Receipt Section */}
        <div ref={receiptRef} className="mt-6 p-4 receipt-area w-full">
          <h3 className="text-center font-semibold text-lg">
            <span className="block">GOVERNMENT OF NEPAL</span>
            <span className="block text-sm">Ministry Of Health And Population</span>
            <span className="block text-xl font-bold">Narayani Hospital</span>
            <span className="block text-sm">Birgunj, Parsa, Nepal</span>
          </h3>

          <p className="text-center mt-2 font-semibold">
            Ujjwal Kumar Shrivastav (01) - Transaction Receipt (Date: 2081-12-05)
          </p>

          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Description</th>
                <th className="border p-2">Amount (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Refund</td>
                <td className="border p-2 text-right">500.00</td>
              </tr>
              <tr>
                <td className="border p-2">Advance Clearance</td>
                <td className="border p-2 text-right">200.00</td>
              </tr>
              <tr>
                <td className="border p-2">Advance Collection</td>
                <td className="border p-2 text-right">800.00</td>
              </tr>
              {/* Total Amount Row */}
              <tr className="font-bold bg-gray-100">
                <td className="border p-2 text-blue-700 text-right">Total Amount (In hand)</td>
                <td className="border p-2 text-right text-blue-700">1500.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Print Button */}
        <div className="mt-4 flex justify-center">
          <button onClick={printReceipt} className="bg-green-600 text-white px-4 py-2 rounded-md no-print">
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionReceipt;
