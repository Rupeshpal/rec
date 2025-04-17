import React, { useState } from "react";

const ChargesTable = () => {
  const [showModal, setShowModal] = useState(false);

  const charges = [
    {
      code: "LAB169",
      name: "GAMMA G.T. (GGT)",
      category: "LAB EXAMINATION",
      type: "Pathology",
      unit: "Unit",
      tax: "0.00",
      charge: "160.00",
    },
    {
      code: "LAB111",
      name: "Alkaline phosphatase (ALP)",
      category: "LAB EXAMINATION",
      type: "Pathology",
      unit: "Unit",
      tax: "0.00",
      charge: "60.00",
    },
    {
      code: "MP Rdt",
      name: "MP Rdt",
      category: "LAB EXAMINATION",
      type: "Pathology",
      unit: "Unit",
      tax: "0.00",
      charge: "0.00",
    },
    {
      code: "LAB120",
      name: "TROPONIN I QUALITATIVE",
      category: "LAB EXAMINATION",
      type: "Pathology",
      unit: "Unit",
      tax: "0.00",
      charge: "720.00",
    },
    {
      code: "SGYN007CAC (MVA) LA",
      name: "",
      category: "General Package",
      type: "Others",
      unit: "Unit",
      tax: "0.00",
      charge: "8000.00",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-teal-100 p-4 rounded-t border border-gray-300">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-700 text-lg">Charges Details List</h2>
          <div className="space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">Import</button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-3 py-1 text-sm rounded"
            >
              + Add Charges
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="border px-2 py-2">Code</th>
              <th className="border px-2 py-2">Name</th>
              <th className="border px-2 py-2">Charge Category</th>
              <th className="border px-2 py-2">Charge Type</th>
              <th className="border px-2 py-2">Unit</th>
              <th className="border px-2 py-2">Tax(%)</th>
              <th className="border px-2 py-2">Standard Charge (RS.)</th>
              <th className="border px-2 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border px-2 py-2">{item.code}</td>
                <td className="border px-2 py-2">{item.name}</td>
                <td className="border px-2 py-2">{item.category}</td>
                <td className="border px-2 py-2">{item.type}</td>
                <td className="border px-2 py-2">{item.unit}</td>
                <td className="border px-2 py-2">{item.tax}</td>
                <td className="border px-2 py-2">{item.charge}</td>
                <td className="border px-2 py-2 text-center space-x-1">
                  <button className="text-blue-500 hover:underline text-xs">✏️</button>
                  <button className="text-red-500 hover:underline text-xs">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl p-4 rounded shadow-md text-white relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-lg text-black font-semibold mb-4">Add Charges</h2>
            <div className="grid grid-cols-4 gap-4 ">
              <div className="col-span-1">
                <label className="block text-sm  text-black">Charge Type *</label>
                <select className="w-full text-black p-2 border border-gray-300 rounded mb-4">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-black text-sm">Charge Category *</label>
                <select className="w-full text-black p-2 border border-gray-300 rounded mb-4">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-black text-sm">Unit Type *</label>
                <select className="w-full text-black p-2 border border-gray-300 rounded mb-4">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-black text-sm">Charge Name *</label>
                <input type="text" className="w-full text-black p-2 border border-gray-300 rounded mb-4" />
              </div>
              </div>
              <div className="grid grid-cols-3 gap-4 ">
              <div className="col-span-1">
                <label className="block text-black text-sm">Tax Category *</label>
                <select className="w-full text-black p-2 border border-gray-300 rounded mb-4">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-black text-sm">Tax</label>
                <div className="flex items-center">
                  <input type="text" className="w-full text-black p-2 border border-gray-300 rounded mb-4" />
                  <span className="ml-1">%</span>
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-black text-sm">Code *</label>
                <input type="text" className="w-full text-black p-2 border border-gray-300 rounded mb-4" />
              </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 ">
                <div>
                <div className="col-span-1">
                <label className="block text-black text-sm">Standard Charges(Rs)*</label>
                <input type="text" className="w-full text-black p-2 border border-gray-300 rounded mb-4" />
                <label className="block text-black text-sm">Description*</label>
                <textarea name="
                " className="w-full text-black p-2 border border-gray-300 rounded mb-4"></textarea>
              </div>
                </div>
                <div>
                <label className="block text-sm">Scheduled Charges For TPA</label>
                <div className="space-y-2 bg-gray-100 p-2 rounded">
                  {['HIB, Nepal', 'SSF'].map((tpa, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="flex-1 text-black">{tpa}</span>
                      <input
                        type="text"
                        placeholder="charge code"
                        className="p-1 rounded text-black border"
                      />
                    </div>
                  ))}
                  <button className="bg-blue-400 text-white px-2 py-1 text-sm rounded mt-2">Apply To All</button>
                </div>
                <div className="text-right mt-4">
              <button className="bg-gray-300 text-black px-4 py-1 rounded">✔ Save</button>
            </div>
              </div>
            </div>
            </div>
          </div>
        
      )}
    </div>
  );
};

export default ChargesTable;
