import React, { useState } from "react";

const initialCategories = [
  "BILIRUBIN",
  "SERUM CREATININE",
  "H. PYLORI",
  "HEMATOLOGICAL REPORT",
  "RFT ( Renal Function Test )",
  "CLINICAL PATHOLOGY REPORT",
  "STOOL R/ME",
  "SEROLOGY- IMMUNOLOGY",
  "BLEEDING PROFILE",
  "ERYTHROCYTE SEDIMENTATION RATE",
  "BIOCHEMICAL REPORT",
  "ELECTROLYTE",
];

const PathologyCategoryList = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [showModal, setShowModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const deleteCategory = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed === "" || categories.includes(trimmed)) return;
    setCategories([...categories, trimmed]);
    setNewCategory("");
    setShowModal(false);
  };

  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4 bg-teal-700 p-2 min-w-full mx-auto">
        <h2 className="text-lg text-white font-semibold">Pathology Category List</h2>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          + Add Category
        </button>
      </div>

      <div className="bg-white shadow border rounded p-2 min-w-full mx-auto">
        <table className="w-full bg-white border text-sm text-left">
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 font-medium">{category}</td>
                <td className="p-2 text-right">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">✏️</button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteCategory(index)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={showModal ? "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" : "hidden"}>
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-teal-700">Add Category</h3>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            💾 Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PathologyCategoryList;
