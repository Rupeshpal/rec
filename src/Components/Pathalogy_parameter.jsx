import React, { useState } from "react";
import { Pencil } from "lucide-react";

const PathologyParameterList = () => {
  const initialParameters = [
    { code: "I", name: "Interpretation", range: "-", unit: "-", description: "-", method: "-" },
    { code: "m", name: "Montoux Test Result", range: "<10", unit: "mm", description: "-", method: "-" },
  ];

  const [search, setSearch] = useState("");
  const [parameters, setParameters] = useState(initialParameters);
  const [showModal, setShowModal] = useState(false);

  const filteredParameters = parameters.filter((param) =>
    param.name.toLowerCase().includes(search.toLowerCase()) ||
    param.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddParameter = (newParam) => {
    setParameters([...parameters, newParam]);
  };

  const AddParameterModal = ({ onClose, onSave }) => {
    const [form, setForm] = useState({
      name: "",
      range: "",
      unit: "",
      code: "",
      method: "",
      description: "",
    });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
      if (!form.name || !form.range || !form.unit || !form.code) {
        alert("Please fill all required fields (*)");
        return;
      }
      onSave(form);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
          <h2 className="text-lg font-bold mb-4 text-teal-700">Add Pathology Parameter</h2>

          <div className="space-y-3">
            <input name="name" onChange={handleChange} placeholder="Parameter Name *" className="w-full border p-2 rounded" />
            <input name="range" onChange={handleChange} placeholder="Ref. Range *" className="w-full border p-2 rounded" />
            <select name="" id="" className="w-full border p-2 rounded">
               <option  value="">Unit</option>
               <option value=""></option>
            </select>
            <input name="code" onChange={handleChange} placeholder="Test Code *" className="w-full border p-2 rounded" />
            <input name="method" onChange={handleChange} placeholder="Method" className="w-full border p-2 rounded" />
            <textarea name="description" onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded h-24" />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-4 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Pathology Parameter List</h2>
        </div>

        <div className="flex flex-wrap items-center justify-between w-full mb-4 gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-30 mb-3 p-2 border border-gray-300 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowModal(true)}
          >
            + Add Pathology Parameter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-300">
            <thead className="bg-teal-100 text-gray-700">
              <tr>
                <th className="p-2 border">Test Code</th>
                <th className="p-2 border">Parameter Name</th>
                <th className="p-2 border">Ref. Range</th>
                <th className="p-2 border">Unit</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Method</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredParameters.map((param, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border">{param.code}</td>
                  <td className="p-2 border">{param.name}</td>
                  <td className="p-2 border">{param.range}</td>
                  <td className="p-2 border">{param.unit}</td>
                  <td className="p-2 border">{param.description}</td>
                  <td className="p-2 border">{param.method}</td>
                  <td className="p-2 border text-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredParameters.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-4 text-gray-400">
                    No parameters found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <AddParameterModal
          onClose={() => setShowModal(false)}
          onSave={handleAddParameter}
        />
      )}
    </div>
  );
};

export default PathologyParameterList;
