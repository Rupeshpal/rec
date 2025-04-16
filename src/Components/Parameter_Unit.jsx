import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const UnitList = () => {
  const [units, setUnits] = useState([
    "thousand/cumm",
    "/hpf",
    "rup",
    "-",
    "hhj",
    "ghgh",
    "lakh/cumm",
  ]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newUnit, setNewUnit] = useState("");

  const filteredUnits = units.filter((unit) =>
    unit.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddUnit = () => {
    if (newUnit.trim() === "") return;
    setUnits([...units, newUnit.trim()]);
    setNewUnit("");
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded shadow border border-gray-300">
        <div className="bg-teal-200 px-4 py-2 flex justify-between items-center rounded-t">
          <h2 className="text-gray-800 font-semibold">Unit List</h2>
          <button
            className="bg-blue-700 text-white px-3 py-1 rounded text-sm hover:bg-blue-800"
            onClick={() => setShowModal(true)}
          >
            + Add Unit
          </button>
        </div>

        <div className="px-4 py-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <table className="w-full text-sm border border-collapse border-gray-300">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="border p-2">Unit Name</th>
                <th className="border p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUnits.map((unit, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border p-2">{unit}</td>
                  <td className="border p-2 text-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Pencil size={16} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() =>
                        setUnits(units.filter((_, i) => i !== index))
                      }
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUnits.length === 0 && (
                <tr>
                  <td colSpan="2" className="text-center text-gray-500 py-4">
                    No units found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-teal-700">Add Unit</h3>
            <input
              type="text"
              value={newUnit}
              onChange={(e) => setNewUnit(e.target.value)}
              placeholder="Enter unit name"
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
                onClick={handleAddUnit}
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitList;
