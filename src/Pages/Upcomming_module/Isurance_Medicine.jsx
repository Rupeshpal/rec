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
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left form panel */}
        <div className="col-span-1 space-y-4">
          <h3 className="text-lg font-bold text-gray-800">Add Category</h3>
          <label className="block text-sm font-medium text-gray-600">
            Category Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter category name"
          />
           <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter category name"
          />
           <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter category name"
          />
           <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter category name"
          />
           <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter category name"
          />
           <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Enter category name"
          />
          <button className="bg-cyan-600 text-white font-semibold px-4 py-2 rounded-xl w-full hover:bg-cyan-700 transition duration-300">
            Save
          </button>
        </div>

        {/* Right category table */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              General and Insurance Medicine
            </h2>
            <input
              type="text"
              placeholder="Search..."
              className="border px-3 py-2 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border border-gray-300 shadow-md rounded-xl">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 border font-semibold text-sm text-gray-700">Category Name</th>
                  <th className="p-4 border font-semibold text-sm text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-200">
                    <td className="p-4 border text-gray-800 font-medium">{item}</td>
                    <td className="p-4 border">
                      <button className="text-cyan-600 hover:text-cyan-800">
                        <Pencil size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Records: {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, allCategories.length)} of {allCategories.length}
          </p>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-xl border font-medium transition duration-300 ${currentPage === i + 1 ? "bg-cyan-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200"}`}
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
