import React from "react";

const refundHistory = [
  {
    date: "2024-01-23 16:57:00",
    billNo: "080/081 -1014",
    reference: "PAT437",
    department: "Pathology",
    netAmount: 80,
    paid: 80,
    due: 0,
    refundable: 80,
  },
  {
    date: "2024-01-02 18:50:00",
    billNo: "080/081 -134",
    reference: "PAT65",
    department: "Pathology",
    netAmount: 80,
    paid: 80,
    due: 0,
    refundable: 80,
  },
  {
    date: "2023-12-27 15:56:00",
    billNo: "080/081 -13",
    reference: "PAT6",
    department: "Pathology",
    netAmount: 90,
    paid: 90,
    due: 0,
    refundable: 90,
  },
  {
    date: "2023-12-27 13:24:00",
    billNo: "080/081 -2",
    reference: "PAT2",
    department: "Pathology",
    netAmount: 160,
    paid: 160,
    due: 0,
    refundable: 160,
  },
];

const RefundTable = () => (
    
  <div className="p-4 mt-10">
     <div className=" w-full">
    {/* Stats Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3   gap-4 mb-6">
      <div className="bg-gray-100  hover:bg-gray-200 transaction-all duration-0.5 p-4 shadow rounded flex  items-center justify-between">
        <div >
          <p className="text-gray-500 text-sm">Total Refunds</p>
          <h2 className="text-xl font-bold">RS.410</h2>
        </div>
        <span className="text-red-500 text-2xl">↩️</span>
      </div>
      <div className="bg-gray-100  hover:bg-gray-200 transaction-all duration-0.5 p-4 shadow rounded flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Total Bills</p>
          <h2 className="text-xl font-bold">4</h2>
        </div>
        <span className="text-blue-500 text-2xl">📄</span>
      </div>
      <div className="bg-gray-100  hover:bg-gray-200 transaction-all duration-0.5 p-4 shadow rounded flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Average Refund</p>
          <h2 className="text-xl font-bold">RS.102.5</h2>
        </div>
        <span className="text-green-500 text-2xl">📊</span>
      </div>
   
    </div>
    </div>
    <div className="w-full">
    <table className="w-full text-sm border">
      <thead>
        <tr className="bg-teal-700 text-left text-white">
          <th className="border px-2 py-1">Date</th>
          <th className="border px-2 py-1">Bill No</th>
          <th className="border px-2 py-1">Reference</th>
          
          <th className="border px-2 py-1">Net Amount (RS.)</th>
          <th className="border px-2 py-1">Paid (RS.)</th>
     
          <th className="border px-2 py-1">Refundable Amount (RS.)</th>
          <th className="border px-2 py-1">Action</th>
        </tr>
      </thead>
      <tbody>
        {refundHistory.map((item, index) => (
          <tr key={index} className="text-sm">
            <td className="border px-2 py-1">{item.date}</td>
            <td className="border px-2 py-1 text-blue-600 font-semibold">{item.billNo}</td>
            <td className="border px-2 py-1">
              <span className="   px-2 py-0.5 text-sm">{item.reference}</span>
            </td>
        
            <td className="border px-2 py-1">{item.netAmount}</td>
            <td className="border px-2 py-1">{item.paid}</td>
            
            <td className="border px-2 py-1">{item.refundable}</td>
            <td className="border px-2 py-1">
              <button className="bg-teal-700 text-white text-xs px-2 py-1 rounded hover:bg-teal-900">
                Refund/Cancel
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="border mt-4 p-2 w-full bg-gray-50">
      <p className="text-red-600 font-semibold text-sm">
        Refund carefully, it will erase bills from everywhere from record!
      </p>
      <p className="text-red-600 font-semibold text-sm mt-1">
        Valid refund reason should be provided!
      </p>
  </div>
  </div>
  <div className="mt-4 text-sm">
      <div className="flex justify-end gap-4">
        <div className="text-right">
          <div>Net Amount</div>
          <div>Paid</div>
          <div>Total Dues</div>
          <div>Total Refundable Amount</div>
        </div>
        <div className="text-right">
          <div>RS.0.00</div>
          <div>RS.0.00</div>
          <div>RS.0.00</div>
          <div>RS.0.00</div>
        </div>
      </div>
    </div>
  </div>
);

export default RefundTable;
