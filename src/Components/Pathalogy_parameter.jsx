import React, { useState } from "react";
import { Pencil } from "lucide-react";

const initialParameters = [
  { code: "I", name: "Interpretation", range: "-", unit: "-", description: "-", method: "-" },
  { code: "m", name: "Montoux Test Result", range: "<10", unit: "mm", description: "-", method: "-" },
  { code: "RBC", name: "RBC", range: "-", unit: "/hpf", description: "-", method: "-" },
  { code: "GGT", name: "GGT", range: "-", unit: "-", description: "-", method: "-" },
  { code: "DC", name: "DC", range: "-", unit: "-", description: "-", method: "-" },
  { code: "HB", name: "Hemoglobin(HB)", range: "11.00 - 16.10", unit: "g/dL", description: "-", method: "-" },
  { code: "N5J", name: "OGTT", range: "BSF:- Up to 95 Sugar(1Hour):- Up to 180, Sugar(2Hours):- Up to155, Sugar(3 Hours):- Up to 140", unit: "-", description: "-", method: "-" },
  { code: "1245-3", name: "asdfg", range: "11.00 - 16.11", unit: "mg/dL", description: "e", method: "physically" },
  { code: "1010", name: "testss", range: "11.00 - 16.11", unit: "g/L", description: "wdd", method: "manually" },
  { code: "1000-1", name: "gdfc", range: "11.00 - 16.11", unit: "nmol/L", description: "dfg", method: "-" },
  { code: "12", name: "dfgdfgbt", range: "fhbfgt", unit: "mg/dL", description: "uklb", method: "-" },
  { code: "10", name: "1", range: "11.00 - 16.11", unit: "nmol/L", description: "rin", method: "-" },
  { code: "2922", name: "halo", range: "10-20", unit: "g", description: "-", method: "-" },
  { code: "10000", name: "ri", range: "0.4-0.5", unit: "g/L", description: "-", method: "-" },
  { code: "292", name: "dangertest", range: "1to10", unit: "pg", description: "test", method: "-" },
];

const PathologyParameterList = () => {
  const [search, setSearch] = useState("");

  const filteredParameters = initialParameters.filter((param) =>
    param.name.toLowerCase().includes(search.toLowerCase()) ||
    param.code.toLowerCase().includes(search.toLowerCase())
  );

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
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
    </div>
  );
};

export default PathologyParameterList;
