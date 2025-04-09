import React, { useState } from "react";
import { Pencil } from "lucide-react";

const CategoryList = () => {
  const [category, setCategory] = useState("");
  const allCategories = [
    "SOLUTION",
    "SURGICAL ITEMS",
    "ECG LEAD",
    "SACHET",
    "ROTACAP",
    "SOAP",
    "SPRAY",
    "Inj",
    "INJECTION",
    "drop",
    "gel",
    "ointment",
    "cap",
    "syrup",
    "tab",
    "Medicine",
    "General And Insurance",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCategories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allCategories.length / itemsPerPage);

  return (
    <div className="min-h-screen mt-10 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left form panel */}
        <div className="col-span-1">
          <label className="block text-sm font-medium mb-2">
            Category Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter category name"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
            Save
          </button>
        </div>

        {/* Right category table */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">General and Insurance Records</h2>
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-2 rounded w-1/3"
            />
          </div>
          <table className="min-w-full text-left border border-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Category Name</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border">{item}</td>
                  <td className="p-2 border">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">
            Records: {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, allCategories.length)} of {allCategories.length}
          </p>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
