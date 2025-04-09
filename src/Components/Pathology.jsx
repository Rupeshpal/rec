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
  "ELECTROLYTE"
];

const PathologyCategoryList = () => {
  const [categories, setCategories] = useState(initialCategories);

  const deleteCategory = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4 bg-teal-700 p-2 w-[75rem] mx-auto">
        <h2 className="text-lg text-white font-semibold">Pathology Category List</h2>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          + Add Pathology Category
        </button>
      </div>
      <div className="bg-white shadow border rounded p-2 w-[75rem] mx-auto">
        <table className="w-full bg-white border  text-sm text-left">
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
