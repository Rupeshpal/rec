import React, { useRef } from "react";
import GlobalButton from '../../components/GlobalButton';

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
    <div className="min-h-screen bg-sky-100 font-sans mt-10">
      <div className="w-full p-6 bg-white">
        <div className="bg-gray-100 p-6 rounded-lg no-print w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            <div className="flex gap-3 w-full">
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter time duration"
              />
              <div className="">
                <GlobalButton buttonId="button2" />
              </div>
            </div>
          </div>
        </div>

        <div ref={printRef} id="printSection" className="mt-6 p-6 bg-white rounded-lg shadow-lg w-full">
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
                  <th className="border p-2">Report</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">PAT3419</td>
                  <td className="border p-2">10976</td>
                  <td className="border p-2"></td>
                  <td className="border p-2">Ram Shyam (3979)</td>
                  <td className="border p-2">
                    <div>CBC</div>
                    <div>Renal Function Test (RFT)</div>
                  </td>
                  <td className="border p-2 text-center">11/03/2025 01:27 PM</td>
                  <td className="border p-2 text-center">Bipin (14)</td>
                  <td className="border p-2 text-center">Dr Pankaj Kumar Yadav (60)</td>
                  <td className="border p-2 text-center">0% Complete</td>
                  <td className="border p-2 text-center">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">Enter</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 flex justify-end no-print">
          <button
            onClick={printData}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            🖨️ Print Report
          </button>
        </div>
      </div>
    </div>
  );
}
