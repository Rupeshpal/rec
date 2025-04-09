import React from "react";

const OPDReport = () => {
  const data = [
    {
      date: "2081-12-26",
      opdNo: "OPDN20569",
      checkupId: "OCID20569",
      serviceNo: "20579",
      refNo: "4499/lumbini provincial Hospital",
      chargeName: "OPD TICKET",
      patientName: "mahendra paudel (5021)",
      ageGender: "22 Y 7 M 21 D / Male",
      dept: "opd",
      doctor: "Dr. Tejendra Chaudhary(EMP15)",
      symptoms: "",
      diagnosis: "",
    },
    {
      date: "2081-12-26",
      opdNo: "OPDN20568",
      checkupId: "OCID20568",
      serviceNo: "20578",
      refNo: "",
      chargeName: "ANC",
      patientName: "Sarswati Tharu (11778)",
      ageGender: "30 Y / Female",
      dept: "",
      doctor: "Opd Doctor(EMP12)",
      symptoms: "",
      diagnosis: "",
    },
    {
      date: "2081-12-26",
      opdNo: "OPDN20567",
      checkupId: "OCID20567",
      serviceNo: "20577",
      refNo: "",
      chargeName: "EMERGENCY TICKET",
      patientName: "KAMALA KHATRI (720)",
      ageGender: "51 Y 4 M 15 D / Female",
      dept: "Emergency",
      doctor: "Dr. Tejendra Chaudhary(EMP15)",
      symptoms: "",
      diagnosis: "",
    },
    // Add more entries as needed
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-green-700">OPD Report</h2>

      {/* Filters */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        <select className="border p-2 rounded">
          <option>Today</option>
        </select>
        <select className="border p-2 rounded">
          <option>Dept</option>
        </select>
        <select className="border p-2 rounded">
          <option>Charge Name</option>
        </select>
        <select className="border p-2 rounded">
          <option>Doctor</option>
        </select>
        <select className="border p-2 rounded">
          <option>Gender</option>
        </select>
        <div className="flex gap-2">
          <input type="text" placeholder="From" className="border p-2 rounded w-20" />
          <input type="text" placeholder="To" className="border p-2 rounded w-20" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-left text-md">
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">OPD No</th>
              <th className="py-2 px-4">CheckupID</th>
              <th className="py-2 px-4">Service No.</th>
              <th className="py-2 px-4">Ref No./...</th>
              <th className="py-2 px-4">Charge Name</th>
              <th className="py-2 px-4">Pat Name</th>
              <th className="py-2 px-4">Age/Gender</th>
              <th className="py-2 px-4">Dept</th>
              <th className="py-2 px-4">Doctor Name</th>
              <th className="py-2 px-4">Sym...</th>
              <th className="py-2 px-4">Diagnosis</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="py-2 px-4">{row.date}</td>
                <td className="py-2 px-4 text-blue-600 cursor-pointer hover:underline">{row.opdNo}</td>
                <td className="py-2 px-4">{row.checkupId}</td>
                <td className="py-2 px-4">{row.serviceNo}</td>
                <td className="py-2 px-4">{row.refNo}</td>
                <td className="py-2 px-4">{row.chargeName}</td>
                <td className="py-2 px-4">{row.patientName}</td>
                <td className="py-2 px-4">{row.ageGender}</td>
                <td className="py-2 px-4">{row.dept}</td>
                <td className="py-2 px-4">{row.doctor}</td>
                <td className="py-2 px-4">{row.symptoms}</td>
                <td className="py-2 px-4">{row.diagnosis}</td>
                <td className="py-2 px-4">
                  <button className="text-green-600 mr-2">🖨️</button>
                  <button className="text-blue-500 mr-2">🔍</button>
                  <button className="text-orange-500">📁</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OPDReport;
