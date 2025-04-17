import React, { useState } from "react";
import { Save } from "lucide-react";

const AddTaxCategoryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");
  const [taxCategories, setTaxCategories] = useState([
    { name: "NON TAXABLE", percentage: 0 },
  ]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setName("");        // Reset on open/close
    setPercentage("");
  };

 

  const HandleSave = () => {
    if(name && percentage !== ""){
      const newCategory = {
        name,
         percentage:  parseFloat(percentage),
      };
   setTaxCategories([...taxCategories , newCategory]);
      toggleModal();
    }
     else{
      alert("Please fill out all fields");
     }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Tax Category List</h2>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border px-3 py-2 rounded w-1/3"
          />
          <button
            onClick={toggleModal}
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            + Add Tax Category
          </button>
        </div>
        <table className="w-full text-left border border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Percentage</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {taxCategories.map((item, index) => (
              <tr key={index}>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.percentage}%</td>
                <td className="p-2 border">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg w-full max-w-md">
            <div className="bg-white text-black px-4 py-2 rounded-t flex justify-between items-center">
              <h2 className="font-semibold">Add Tax Category</h2>
              <button
                onClick={toggleModal}
                className="text-black text-xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="bg-white px-6 py-4">
              <div className="mb-4">
                <label className="block font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold">
                  Percentage <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                    className="border rounded p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <span className="absolute right-3 top-2.5">%</span>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
                  onClick={HandleSave}
                >
                  <Save size={16} /> Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTaxCategoryModal;
