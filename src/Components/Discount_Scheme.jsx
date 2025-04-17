import React, { useState } from "react";
import { FileDown, FileText, PlusCircle } from "lucide-react"; // Optional icons

const DiscountSchemeTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]); // Example placeholder data

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-10 border border-gray-200">
      <div className="flex justify-between items-center bg-teal-100 p-3 rounded-t-lg">
        <h2 className="text-gray-700 font-semibold text-lg">Discount Scheme List</h2>

        <div className="flex space-x-2">
          <button
            className="p-2 hover:bg-teal-200 rounded transition"
            title="Export PDF"
          >
            <FileText className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 hover:bg-teal-200 rounded transition"
            title="Export Excel"
          >
            <FileDown className="w-5 h-5 text-gray-600" />
          </button>
          <button
            className="p-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 flex items-center"
            onClick={() => setShowModal(true)}
          >
            <PlusCircle className="w-4 h-4 mr-1" /> Add Scheme
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="p-3 border-b border-gray-300">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Scheme Name</th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Discount</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-10 text-sm text-red-500">
                  Data not found for given Criteria
                  <div className="mt-4 text-green-600 italic">
                    Add Data from source to view result here.
                  </div>
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{item.name}</td>
                  <td className="px-4 py-2 border">{item.type}</td>
                  <td className="px-4 py-2 border">{item.discount}</td>
                  <td className="px-4 py-2 border">
                    <button className="text-blue-600 hover:underline">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 text-sm text-gray-600 bg-gray-50 border-t">
        Records: {filteredData.length} of {data.length}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Add Discount Scheme</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Scheme Name"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Type"
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Discount %"
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountSchemeTable;
