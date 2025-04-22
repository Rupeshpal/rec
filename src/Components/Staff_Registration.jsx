import React, { useState } from "react";

export default function StaffRegistration() {
  const [showAcademic, setShowAcademic] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-2 mt-10">
      <div className=" w-full gap-4 max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
     

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
          {/* Form Fields */}
          <div className="space-y-2 grid grid-cols-3 gap-4 ">
            {[
              "Member Name",
              "Address",
              "Date of Birth",
              "Gender",
              "Country",
              "Citizenship No.",
              "Phone/Mobile No.",
              "Active Status",
              "Registration Date",
              "Marital Status",
            ].map((label, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-medium">{label}</label>
                {label === "Gender" || label === "Country" || label === "Marital Status" ? (
                  <select className="border p-2 rounded">
                    <option>Select</option>
                  </select>
                ) : label === "Registration Date" ? (
                  <div className="flex gap-2">
                    <input type="date" className="border p-2 rounded w-1/2" />
                    <input type="text" placeholder="04/01/2082" className="border p-2 rounded w-1/2" />
                     
                  </div>
                ) : (
                  <input type="text" className="border p-2 rounded" />
                )}
              </div>
            ))}

            <div className="flex gap-2 mt-4">
              <button className="bg-gray-300 px-4 py-2 rounded">Add Photo</button>
              <button className="bg-gray-300 px-4 py-2 rounded">Remove Photo</button>
            </div>
          </div>

          {/* Member Table */}
          <div className="overflow-auto border rounded">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Member ID</th>
                  <th className="border p-2">Member Name</th>
                  <th className="border p-2">Address</th>
                  <th className="border p-2">Active Status</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2">1</td>
                  <td className="border p-2">Ram Babu</td>
                  <td className="border p-2">BNP</td>
                  <td className="border p-2">Yes</td>
                  <td className="border px-2 ">✎ ❌</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Academic Detail */}
        <div className="mt-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => setShowAcademic(!showAcademic)}
            />
            Academic Detail
          </label>

          {showAcademic && (
            <div className="mt-4 border rounded p-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <input type="text" placeholder="Academic Level" className="border p-2 rounded" />
                <input type="text" placeholder="Board/University" className="border p-2 rounded" />
                <input type="text" placeholder="School/College" className="border p-2 rounded" />
                <input type="text" placeholder="Year" className="border p-2 rounded" />
                <input type="text" placeholder="Division" className="border p-2 rounded" />
              </div>
              <div className="grid grid-cols-5 gap-4 mb-4">
                <input type="text" placeholder="%" className="border p-2 rounded" />
                <button className="col-span-1 bg-blue-500 text-white px-4 py-2 rounded">+</button>
              </div>

              <div className="overflow-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border p-2">Level</th>
                      <th className="border p-2">Board/University</th>
                      <th className="border p-2">School/College</th>
                      <th className="border p-2">Year</th>
                      <th className="border p-2">Division</th>
                      <th className="border p-2">Percent(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border p-2"></td>
                      <td className="border p-2"></td>
                      <td className="border p-2"></td>
                      <td className="border p-2"></td>
                      <td className="border p-2"></td>
                      <td className="border p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
