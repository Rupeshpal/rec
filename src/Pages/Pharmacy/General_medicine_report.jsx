import React, { useState } from "react";

export default function MedicineInventory() {
  const [medicines, setMedicines] = useState([
    {
      name: "Pan 40(43926)",
      company: "UNIQUE PHARMACEUTICAL",
      composition: "pantoparazole 40mg",
      code: "SSS",
      sold: 6074,
      qty: 43926,
      amount: "50075.64",
    },
    {
      name: "ROLSARTAN H(18775)",
      company: "abc",
      composition: "LOSARTAN 50 + HYDROCHLOROTHIAZIDE 12.5",
      code: "ROL2",
      sold: 21857,
      qty: 18775,
      amount: "0.00",
    },
  ]);

  const handlePrint = (medicine) => {
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>Medicine Invoice</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body class="bg-white p-8 max-w-2xl mx-auto text-sm font-sans text-gray-800">
          <div class="text-3xl font-bold text-center border-b pb-4 mb-6">Medicine Invoice</div>
          <div class="w-full border border-gray-300 rounded overflow-hidden">
            <div class="flex bg-gray-200 text-gray-700 font-semibold text-sm">
              <div class="flex-1 p-2 border-r">Field</div>
              <div class="flex-1 p-2">Value</div>
            </div>
            ${[
              ["Medicine Name", medicine.name],
              ["Company", medicine.company],
              ["Composition", medicine.composition],
              ["Code", medicine.code],
              ["Sold Units", medicine.sold],
              ["Available Quantity", medicine.qty],
              ["Amount (Rs.)", medicine.amount],
            ].map(
              ([label, value], idx) => `
                <div class="flex ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}">
                  <div class="flex-1 p-2 border-t border-gray-200">${label}</div>
                  <div class="flex-1 p-2 border-t border-l border-gray-200">${value}</div>
                </div>
              `
            ).join('')}
          </div>
          <p class="text-xs text-center text-gray-500 mt-6">This is a computer-generated invoice and does not require a signature.</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.onafterprint = function () {
      printWindow.close();
    };
  };

  return (
    <div className="p-6 mt-10 bg-gray-100 min-h-screen">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">General and Insurance Medicine</h1>
          <p className="text-sm text-gray-500">Inventory overview as of today</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-xs font-medium">Date To</label>
          <input
            type="date"
            defaultValue="2025-04-15"
            className="border rounded p-1 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium">Status</label>
          <select className="border rounded p-1 text-sm">
            <option>Select</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-medium">Search</label>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded p-1 text-sm"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-1 rounded h-fit mt-5">🔍 Search</button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm text-left border shadow rounded bg-white">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-2">Medicine Name</th>
              <th className="p-2">Company</th>
              <th className="p-2">Composition</th>
              <th className="p-2">Code</th>
              <th className="p-2">Min</th>
              <th className="p-2">Reorder</th>
              <th className="p-2">Unit</th>
              <th className="p-2">Sold</th>
              <th className="p-2">Available Qty</th>
              <th className="p-2">Available Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((item, idx) => (
              <tr
                key={idx}
                className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50`}
              >
                <td className="p-2 font-medium">{item.name}</td>
                <td className="p-2">{item.company}</td>
                <td className="p-2">{item.composition}</td>
                <td className="p-2">{item.code}</td>
                <td className="p-2">0</td>
                <td className="p-2">0</td>
                <td className="p-2">1</td>
                <td className="p-2">{item.sold}</td>
                <td className="p-2">{item.qty}</td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded">
                    Available
                  </span>
                </td>
                <td className="p-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handlePrint(item)}
                  >
                    📄
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}