import React, { useState } from "react";

export default function EmployeeAppointment() {
  const [benefits, setBenefits] = useState([]);
  const [benefitInput, setBenefitInput] = useState({ name: "", amount: "" });

  const addBenefit = () => {
    if (benefitInput.name && benefitInput.amount) {
      setBenefits([...benefits, benefitInput]);
      setBenefitInput({ name: "", amount: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-1 mt-12">
      <div className="max-w-7xl mx-auto space-y-6">
       

        {/* Section 1: Member Info */}
        <div className="bg-white p-6 rounded shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm">Member ID</label>
            <div className="flex gap-2">
              <input type="text" className="border p-2 rounded w-full" />
              <button className="bg-gray-300 px-3 py-2 rounded">
                Search
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
            <label className="block text-sm">Member Name</label>
            <input type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
            <label className="block text-sm">Address</label>
            <input type="text" className="border p-2 rounded w-full" />
            </div>
            <div>
            <label className="block text-sm">Date</label>
            <input type="date" className="border p-2 rounded w-full" />
            </div>
            </div>
          </div>

          <div className="overflow-auto border rounded">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">AppID</th>
                  <th className="border p-2">Member Name</th>
                  <th className="border p-2">Designation</th>
                  <th className="border p-2">PAN No</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2">1</td>
                  <td className="border p-2">Ram Babu</td>
                  <td className="border p-2">Manager</td>
                  <td className="border p-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Appointment Detail */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-bold mb-4">Appointment Detail</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Employee Type",
              "Appointment Type",
              "Designation",
              "Appointment Date",
              "Active Status",
              "Financial Benefits",
            ].map((label, i) => (
              <div key={i}>
                <label className="text-sm block mb-1">{label}</label>
                <select className="border p-2 rounded w-full">
                  <option>Select</option>
                </select>
              </div>
            ))}

            <div>
              <label className="text-sm block mb-1">Benefit Name</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={benefitInput.name}
                onChange={(e) =>
                  setBenefitInput({ ...benefitInput, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Amount</label>
              <input
                type="text"
                className="border p-2 rounded w-full"
                value={benefitInput.amount}
                onChange={(e) =>
                  setBenefitInput({ ...benefitInput, amount: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { label: "PAN No.", key: "pan" },
              { label: "Bank A/C No.", key: "bank" },
              { label: "NID No.", key: "nid" },
            ].map(({ label }, i) => (
              <div key={i}>
                <label className="text-sm block mb-1">{label}</label>
                <input type="text" className="border p-2 rounded w-full" />
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="overflow-auto mt-6">
            <table className="w-full text-sm text-left border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Benefits Name</th>
                  <th className="border p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((b, i) => (
                  <tr key={i} className="bg-white">
                    <td className="border p-2">{b.name}</td>
                    <td className="border p-2">{b.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
