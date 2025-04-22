import React from "react";

export default function MedicineEntry() {
  return (
    <div className="p-4 space-y-4 mt-10 bg-gray-100 min-h-screen">
      {/* Top Bar */}
      <div className="flex items-center space-x-2 bg-teal-700 text-white p-2 rounded">
        <input
          type="text"
          placeholder="Enter His Number or Scan barcode"
          className="p-1 rounded text-black"
        />
        <select className="p-1 rounded text-black">
          <option>All</option>
        </select>
        <input
          type="text"
          placeholder="Search options"
          className="p-1 rounded text-black"
        />
        <button className="bg-white text-black px-3 py-1 rounded">+ New Patient</button>
        <div className="ml-auto flex items-center space-x-2">
          <span>Dues:</span>
          <span>HIS:</span>
          <button className="bg-red-500 px-3 py-1 rounded">Reset</button>
        </div>
      </div>

      {/* Medicine Entry Table Header */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm border">
          <thead className="bg-gray-200">
            <tr>
              <th>S.N</th>
              <th>Medicine Name *</th>
              <th>Batch No</th>
              <th>Expiry Date *</th>
              <th>Quantity *</th>
              <th>Avl. Qty</th>
              <th>Sale Price (RS.) *</th>
              <th>Purchase Price</th>
              <th>Tax</th>
              <th>Pd Discount</th>
              <th>Amount (RS.) *</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-blue-100">
            <tr>
              <td>1</td>
              <td><input type="text" className="border p-1 w-full" /></td>
              <td><input type="text" className="border p-1 w-full" /></td>
              <td><input type="date" className="border p-1 w-full" /></td>
              <td><input type="number" className="border p-1 w-full" /></td>
              <td><input type="number" className="border p-1 w-full" /></td>
              <td><input type="number" className="border p-1 w-full" /></td>
              <td><input type="number" className="border p-1 w-full" /></td>
              <td><input type="text" className="border p-1 w-full" /></td>
              <td><input type="text" className="border p-1 w-full" /></td>
              <td><input type="text" className="border p-1 w-full" /></td>
              <td><button className="text-red-500">✕</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Form */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label>Hospital Doctor</label>
            <select className="border p-1 w-full">
              <option>Select</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label>Doctor Name</label>
            <input type="text" className="border p-1 w-full" />
          </div>
          <div className="flex items-center space-x-2">
            <label>Discount Scheme</label>
            <select className="border p-1 w-full">
              <option>-select-</option>
            </select>
          </div>
          <div>
            <label>Note</label>
            <textarea className="border w-full p-1" rows="2"></textarea>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label>Payment Mode</label>
            <select className="border p-1 w-full">
              <option>Cash</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label>Amount</label>
            <input type="text" className="border p-1 w-full" />
          </div>
        </div>

        {/* Totals */}
        <div className="bg-gray-100 p-2 space-y-1 text-sm">
          <div className="flex justify-between"><span>Total (RS.):</span><span>0</span></div>
          <div className="flex justify-between">
            <span>Discount (RS.):</span>
            <span><input className="border w-16 text-right" placeholder="%" /></span>
          </div>
          <div className="flex justify-between"><span>Pd Discount (RS.):</span><span>0</span></div>
          <div className="flex justify-between"><span>Tax (RS.):</span><span>0</span></div>
          <div className="flex justify-between font-bold"><span>Net Amount (RS.):</span><span>0</span></div>
          <div className="flex justify-between font-bold">
            <span>Payment Amount (RS.): *</span>
            <input className="border w-24 text-right" />
          </div>
        </div>
      </div>

      {/* Bottom Buttons and Shortcuts */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs bg-gray-100 p-2">
          <p><span className="text-red-600">1.</span> Save & Print | <span className="text-blue-600">F10</span> or <span className="text-blue-600">Shift + Enter</span></p>
          <p><span className="text-red-600">2.</span> Reset | <span className="text-blue-600">F8</span></p>
        </div>
        <button className="bg-red-700 text-white px-4 py-2 rounded">Save & Print</button>
      </div>
    </div>
  );
}
