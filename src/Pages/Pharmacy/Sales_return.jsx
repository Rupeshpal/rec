import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const BillSearch = () => {
  const [billNo, setBillNo] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (billNo.trim()) {
      setIsOpen(true); // Open modal
    }
  };

  const handleReset = () => {
    setBillNo("");
  };

  return (
    <div className="bg-teal-50 p-4 border rounded-md shadow-sm">
      <h2 className="text-center text-sm sm:text-base font-semibold text-teal-900 mb-4">
        General and Insurance Medicine
      </h2>

      <form
        onSubmit={handleSearch}
        className="flex flex-wrap items-center justify-between gap-2"
      >
        {/* Input Group */}
        <div className="flex items-center flex-grow max-w-md">
          <label className="mr-2 text-sm sm:text-base font-medium text-gray-700">
            Bill No<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={billNo}
            onChange={(e) => setBillNo(e.target.value)}
            placeholder="Enter Bill No"
            className="border rounded px-2 py-1 w-full"
            required
          />
          <button
            type="submit"
            className="ml-2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded shadow-sm text-sm"
          >
            Search
          </button>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded shadow-sm text-sm"
        >
          Reset
        </button>
      </form>

      {/* Test Modal Button */}
      <div className="mt-4 text-right">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Open Test Modal
        </button>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-5xl w-full bg-white rounded-xl shadow-xl p-6 border border-gray-300">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold">General and Insurance Medicine</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <label htmlFor="modal-billNo" className="text-sm font-medium">Bill No</label>
              <input
                id="modal-billNo"
                type="text"
                defaultValue={billNo}
                className="border rounded px-2 py-1 text-sm"
              />
            </div>

            <div className="mb-4">
              <div className="text-sm font-medium">
                Patient Name: <span className="font-normal">Cash</span>
              </div>
            </div>

            <table className="w-full text-sm mb-4 border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  {["Medicine Name", "Batch No", "Expiry Date", "Return Qty",
                    "Qty", "Sale Price (Rs.)", "Tax", "Pd Discount",
                    "Return_amount (Rs.)", "Amount (Rs.)"
                  ].map((heading, i) => (
                    <th key={i} className="p-2 border">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">ROLSARTAN H</td>
                  <td className="p-2 border">69-9</td>
                  <td className="p-2 border">2026-01-01</td>
                  <td className="p-2 border">0</td>
                  <td className="p-2 border">15</td>
                  <td className="p-2 border">13.00</td>
                  <td className="p-2 border">0%</td>
                  <td className="p-2 border">0%</td>
                  <td className="p-2 border">0.00</td>
                  <td className="p-2 border">195.00</td>
                </tr>
              </tbody>
            </table>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <textarea
                className="w-full border rounded p-2 text-sm"
                rows="3"
                placeholder="Note"
              ></textarea>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Return Tax (Rs.)</span><span>0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Return Net Amount (Rs.)</span><span>0.00</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm">Payer</label>
                  <select className="border rounded px-2 py-1 text-sm">
                    <option>Cash</option>
                    <option>Card</option>
                    <option>UPI</option>
                  </select>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Gross Payable</span><span>175.50</span>
                </div>
                <div className="text-red-600 font-bold text-lg text-center mt-2">
                  Return Payable: 0.00
                </div>
              </div>
            </div>

            <div className="text-sm mb-2">
              Remaining Paid Amount (Rs.): <span className="ml-2">175.50</span>
            </div>

            <div className="text-sm text-gray-600 mb-4">
              <div>Shortcuts:</div>
              <div>1. Save & Print | F10 or Shift + Enter</div>
              <div>2. Reset | F8</div>
            </div>

            <div className="flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Save & Print
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default BillSearch;
