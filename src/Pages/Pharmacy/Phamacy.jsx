import React, { useState } from 'react';

const PurchaseEntry = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSupplierModal, setShowSupplierModal] = useState(false);
  const [showCategryModal, setShowCategoryModal] = useState(false);

  return (
    <div className="p-4 bg-white max-w-full mt-10 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">General  Medicine</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            + Add Medicine
          </button>
          <button
            onClick={() => setShowSupplierModal(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
          >
            + Add Supplier
          </button>
          <button
            onClick={() => setShowCategoryModal(true)}
           className="bg-purple-500 text-white px-3 py-1 rounded text-sm">+ Add Medicine Category</button>
          <button className="bg-red-400 text-white px-3 py-1 rounded text-sm">Reset</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <select className="border p-2 rounded w-full">
          <option>Select Supplier</option>
        </select>
        <input type="text" className="border p-2 rounded w-full" placeholder="Enter Supplier invoice number" />
      </div>

      <div className="mb-4">
        <button className="bg-indigo-500 text-white px-3 py-1 rounded text-sm">🔍 Search Saved Draft</button>
      </div>

      <table className="table-auto w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            {["Medicine Name", "Batch No", "Expiry Date", "MRP (RS.)", "Quantity", "Free Qty", "Purchase Price (RS.)", "Sale Price (RS.)", "Tax", "CC", "Pd. Discount", "Amount (RS.)"].map((heading, i) => (
              <th key={i} className="border px-2 py-1">{heading} *</th>
            ))}
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {[...Array(12)].map((_, i) => (
              <td key={i} className="border p-1">
                <input type="text" className="w-full border px-1 py-1 rounded" />
              </td>
            ))}
            <td className="border p-1 text-center text-red-500 cursor-pointer">✕</td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <textarea className="w-full border p-2 rounded" placeholder="Note" />

          <div className="my-3">
            <label className="block text-sm mb-1">Attach Document</label>
            <div className="border p-4 rounded border-dashed text-center cursor-pointer">
              📁 Drop a file here or click
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select className="border p-2 rounded">
              <option>Credit</option>
              <option>Cash</option>
            </select>
            <input type="number" className="border p-2 rounded" placeholder="Payment Amount (RS.)" />
          </div>

          <div className="mt-2 text-sm text-gray-600">
            Purchase Date: 15/04/2025 11:45
          </div>
        </div>

        <div className="border p-4 rounded bg-gray-50">
          {["Total (RS.)", "Total Pd. Discount (RS.)", "Discount (RS.)", "Total Taxable Amount (RS.)", "Tax (RS.)", "CC On Free (RS.)", "Tax On Free (RS.)", "CC (RS.)", "Net Amount (RS.)"].map((label, i) => (
            <div key={i} className="flex justify-between border-b py-1 text-sm">
              <span>{label}</span>
              <span>0</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-right">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate</button>
      </div>

      {/* Add Medicine Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-5xl p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add Medicine Details</h2>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-5xl p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add Medicine Details</h2>

            <div className="grid grid-cols-4 gap-4 mb-4">
              <input className="border p-2 rounded" placeholder="Medicine Name *" />
              <select className="border p-2 rounded">
                <option>Select Supplier</option>
              </select>
              <input className="border p-2 rounded" placeholder="Medicine Company *" />
              <input className="border p-2 rounded" placeholder="Medicine Composition *" />

              <input className="border p-2 rounded" placeholder="Unit *" />
              <input className="border p-2 rounded" placeholder="Medicine Code" />
              <input className="border p-2 rounded" placeholder="Min Level" />
              <input className="border p-2 rounded" placeholder="Re-Order Level" />

              <input className="border p-2 rounded" placeholder="Tax %" />
              <input className="border p-2 rounded" placeholder="Unit/Packing *" />
              <input className="border p-2 rounded" placeholder="VAT A/C" />
              <div className="col-span-1">
                <label className="block text-sm mb-1">Medicine Photo</label>
                <div className="border p-2 rounded border-dashed text-center cursor-pointer">
                  📷 Drop a file here or click
                </div>
              </div>
            </div>

            <div className="mb-4">
              <textarea className="w-full border p-2 rounded" placeholder="Note" />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Scheduled Charges For TPA</h3>
              <div className="space-y-2">
                {["HIB,Nepal", "SSF", "", "HIB, Nepal (2)"].map((item, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <input className="border p-1 rounded w-full" defaultValue={item}  />
                    <input className="border p-1 rounded" placeholder="charge amount" />
                    <input className="border p-1 rounded" placeholder="charge code" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-right">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
            </div>
          </div>
        </div>
          </div>
        </div>
      )}

      {/* Add Supplier Modal */}
      {showSupplierModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowSupplierModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add Supplier</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border p-2 rounded" placeholder="Supplier Name *" />
              <input className="border p-2 rounded" placeholder="Supplier Code" />
              <input className="border p-2 rounded" placeholder="Contact Person" />
              <input className="border p-2 rounded" placeholder="Phone" />
              <input className="border p-2 rounded col-span-2" placeholder="Email" />
              <textarea className="border p-2 rounded col-span-2" placeholder="Address" />
            </div>
            <div className="text-right">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
            </div>
          </div>
        </div>
      )}

{showCategryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-xl p-6 rounded shadow-lg relative">
            <button
              onClick={() => setShowCategoryModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add Medicine Category</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input className="border w-[33rem] p-2 rounded" placeholder="Medicine Category *" />
            </div>
            <div className="text-right">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseEntry;
