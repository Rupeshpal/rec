import React, { useState } from "react";

const initialChargeTypes = [
  { name: "Appointment", types: { Appointment: true, OPD: true, IPD: false, Pathology: false, Radiology: false, BloodBank: false, Ambulance: false } },
  { name: "OPD", types: { Appointment: false, OPD: true, IPD: true, Pathology: false, Radiology: false, BloodBank: false, Ambulance: false } },
  { name: "IPD", types: { Appointment: false, OPD: false, IPD: true, Pathology: false, Radiology: false, BloodBank: false, Ambulance: false } },
  { name: "Pathology", types: { Appointment: false, OPD: false, IPD: false, Pathology: true, Radiology: false, BloodBank: false, Ambulance: false } },
  { name: "Radiology", types: { Appointment: false, OPD: false, IPD: false, Pathology: false, Radiology: true, BloodBank: false, Ambulance: false } },
  { name: "Blood Bank", types: { Appointment: false, OPD: true, IPD: true, Pathology: false, Radiology: false, BloodBank: true, Ambulance: false } },
];

const chargeCategories = ["Appointment", "OPD", "IPD", "Pathology", "Radiology", "BloodBank", "Ambulance"];

const ChargeTypeTable = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(initialChargeTypes);
  const [showModal, setShowModal] = useState(false);
  const [newChargeName, setNewChargeName] = useState("");

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleCheckbox = (rowIndex, type) => {
    const newData = [...data];
    newData[rowIndex].types[type] = !newData[rowIndex].types[type];
    setData(newData);
  };

  const deleteRow = (rowIndex) => {
    const newData = [...data];
    newData.splice(rowIndex, 1);
    setData(newData);
  };

  const handleAddChargeType = () => {
    if (!newChargeName.trim()) return;

    const newCharge = {
      name: newChargeName,
      types: Object.fromEntries(chargeCategories.map((cat) => [cat, false]))
    };

    setData([...data, newCharge]);
    setNewChargeName("");
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-50 flex flex-col items-center mt-10">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mb-4">
        <div className="flex flex-wrap items-center justify-between w-full mb-4 gap-4">
          <h2 className="text-xl font-semibold">Charge Type List</h2>
        </div>
        <div className="overflow-auto w-full">
          <div className="flex flex-wrap items-center justify-between w-full mb-4 gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 mb-3 border border-gray-300 rounded max-w-xs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              + Add Charge Type
            </button>
          </div>

          <table className="w-full bg-white border border-gray-300 text-sm text-left">
            <thead className="bg-teal-200 text-teal-900">
              <tr>
                <th className="p-2 border">Charge Type</th>
                {chargeCategories.map((cat) => (
                  <th key={cat} className="p-2 border">{cat}</th>
                ))}
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={row.name} className="hover:bg-gray-100">
                  <td className="p-2 border">{row.name}</td>
                  {chargeCategories.map((cat) => (
                    <td key={cat} className="p-2 border text-center">
                      <input
                        type="checkbox"
                        checked={row.types[cat]}
                        onChange={() => toggleCheckbox(rowIndex, cat)}
                      />
                    </td>
                  ))}
                  <td className="p-2 border text-center">
                    <button className="text-blue-500 hover:underline mr-2">✏️</button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => deleteRow(rowIndex)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Add New Charge Type</h3>
            <input
              type="text"
              placeholder="Enter charge type name"
              className="w-full p-2 border rounded mb-4"
              value={newChargeName}
              onChange={(e) => setNewChargeName(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleAddChargeType}
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

export default ChargeTypeTable;