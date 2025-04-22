import React, { useRef } from "react";

export default function DailyTransactionReport() {
  const printRef = useRef();

  const printData = () => {
    const printContent = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Report</title>
          <style>
            @media print { .print-area { width: 100%; } }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="w-full p-6 mt-10">
        <div className="p-4 bg-teal-white rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-center">Cultural Test</h2>

          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Time Duration</label>
              <input type="date" className="w-full p-2 border rounded-md" required />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Bill No</label>
              <input type="number" className="w-full p-2 border rounded-md" required />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Service No</label>
              <input type="number" className="w-full p-2 border rounded-md" required />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <label className="block text-sm font-medium">Patient</label>
              <select className="w-full p-2 border rounded-md">
                <option>All</option>
                <option>Department</option>
              </select>
            </div>
          </div>

          <div className="w-full flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">🔍 Search</button>
          </div>
        </div>

        <div ref={printRef} id="printSection" className="p-6 mt-4 bg-white shadow-lg rounded-lg print-area">
          <h3 className="text-center font-semibold text-lg">
            <span className="block">GOVERNMENT OF NEPAL</span>
            <span className="block text-sm">Ministry Of Health And Population</span>
            <span className="block text-xl font-bold">Narayani Hospital</span>
            <span className="block text-sm">Birgunj, Parsa, Nepal</span>
          </h3>

          <p className="text-center mt-2 font-semibold">
            My Transaction Detail ( Date From: 2081-12-05 | Date To: 2081-12-05 )
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Patho. ID</th>
                  <th className="border p-2">Bill No</th>
                  <th className="border p-2">Service No.</th>
                  <th className="border p-2">Patient Name</th>
                  <th className="border p-2">Tests</th>
                  <th className="border p-2">Reporting Date</th>
                  <th className="border p-2">Billed by</th>
                  <th className="border p-2">Reference Doctor</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="9" className="border p-4 text-center text-gray-500">
                    Data not found for given criteria<br />
                    <span className="text-sm">Add data from source to view results here.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={printData}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            🖨️ Print Report
          </button>
        </div>
      </div>
    </div>
  );
}
