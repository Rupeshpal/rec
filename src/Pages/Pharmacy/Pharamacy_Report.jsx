
import React from "react";

const medicines = [
    {
      name: "Pan 40(43240)", company: "UNIQUE PHARMACEUTICAL", composition: "pantoprazole 40mg", code: "sss", minLevel: 0, reorderLevel: 0, unit: 1, sold: 6760, availableQty: 43240, amount: 49293.6
    },
    {
      name: "GlipanM2(2270)", company: "Sunny pharmaceuticals", composition: "METFORMIN 500+GLIMEPIRIDE 2", code: "g2", minLevel: 0, reorderLevel: 0, unit: 0, sold: 17730, availableQty: 2270, amount: 4494.6
    }
  ];
  
  export default function MedicineInventory() {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold text-center">General and Insurance Medicine</h2>
  
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="date" className="text-sm font-medium">Date To</label>
            <input type="date" id="date" defaultValue="2025-04-15" className="max-w-[180px] border p-2 rounded" />
          </div>
  
          <div className="flex items-center gap-2">
            <label htmlFor="status" className="text-sm font-medium">Status</label>
            <select className="w-[180px] border p-2 rounded">
              <option value="">Select</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
  
          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
        </div>
  
        <input placeholder="Search..." className="max-w-sm border p-2 rounded w-full" />
  
        <div className="overflow-auto border rounded-xl">
          <table className="min-w-full table-auto border-collapse text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 font-semibold text-left">Medicine Name</th>
                <th className="border p-2 font-semibold text-left">Medicine Company</th>
                <th className="border p-2 font-semibold text-left">Medicine Composition</th>
                <th className="border p-2 font-semibold text-left">Medicine Code</th>
                <th className="border p-2 font-semibold text-left">Min Level</th>
                <th className="border p-2 font-semibold text-left">Reorder Level</th>
                <th className="border p-2 font-semibold text-left">Unit</th>
                <th className="border p-2 font-semibold text-left">Sold</th>
                <th className="border p-2 font-semibold text-left">Available Qty</th>
                <th className="border p-2 font-semibold text-left">Available Amount(PP * Avl_qty)</th>
                <th className="border p-2 font-semibold text-left">Status</th>
                <th className="border p-2 font-semibold text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border p-2">{med.name}</td>
                  <td className="border p-2">{med.company}</td>
                  <td className="border p-2">{med.composition}</td>
                  <td className="border p-2">{med.code}</td>
                  <td className="border p-2">{med.minLevel}</td>
                  <td className="border p-2">{med.reorderLevel}</td>
                  <td className="border p-2">{med.unit}</td>
                  <td className="border p-2">{med.sold}</td>
                  <td className="border p-2">{med.availableQty}</td>
                  <td className="border p-2">{med.amount.toFixed(2)}</td>
                  <td className="border p-2 text-green-600 font-medium">Available</td>
                  <td className="border p-2 flex space-x-1">
                    <button className="border px-2 py-1 rounded hover:bg-gray-100" title="Edit">📝</button>
                    <button className="border px-2 py-1 rounded hover:bg-gray-100" title="Delete">🗑️</button>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  