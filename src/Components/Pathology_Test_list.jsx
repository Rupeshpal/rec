import React, { useState } from "react";

export default function PathologyTestTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const data = [
    {
      testName: "GGT",
      shortName: "GGT",
      testType: "",
      category: "BIOCHEMICAL REPORT(4)",
      subCategory: "",
      method: "",
      reportDays: 0,
      tax: 0.0,
      charge: 160,
      amount: 160,
    },
    {
      testName: "Alkaline Phosphate",
      shortName: "ALP",
      testType: "",
      category: "BIOCHEMICAL REPORT(4)",
      subCategory: "",
      method: "",
      reportDays: 0,
      tax: 0.0,
      charge: 60,
      amount: 60,
    },
    // ... more data
  ];

  const filteredData = data.filter((item) =>
    item.testName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-sky-100 rounded-md shadow-md">
     
      <input
        type="text"
        placeholder="Search..."
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">Test Name</th>
              <th className="border px-2 py-1">Short Name</th>
              <th className="border px-2 py-1">Test Type</th>
              <th className="border px-2 py-1">Category</th>
              <th className="border px-2 py-1">Sub Category</th>
              <th className="border px-2 py-1">Method</th>
              <th className="border px-2 py-1">Report Days</th>
              <th className="border px-2 py-1">Tax (%)</th>
              <th className="border px-2 py-1">Charge (RS.)</th>
              <th className="border px-2 py-1">Amount (RS.)</th>
              <th className="border px-2 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((test, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-2 py-1">{test.testName}</td>
                <td className="border px-2 py-1">{test.shortName}</td>
                <td className="border px-2 py-1">{test.testType}</td>
                <td className="border px-2 py-1">{test.category}</td>
                <td className="border px-2 py-1">{test.subCategory}</td>
                <td className="border px-2 py-1">{test.method}</td>
                <td className="border px-2 py-1 text-center">{test.reportDays}</td>
                <td className="border px-2 py-1 text-right">{test.tax.toFixed(2)}</td>
                <td className="border px-2 py-1 text-right">{test.charge.toFixed(2)}</td>
                <td className="border px-2 py-1 text-right">{test.amount.toFixed(2)}</td>
                <td className="border px-2 py-1 text-center">☰</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}
