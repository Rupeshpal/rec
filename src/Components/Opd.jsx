import React from "react";

const patients = [
  {
    id: "OPDN21566",
    name: "HUM BAHADUR THAPA (12287)",
    serviceNo: "22152",
    nshiId: "739170272",
    address: "Banganga",
    genderAge: "Male/34 Y 6M",
    department: "opd",
    consultant: "Dr. Sudeep Paudel (EMP14)",
    status: "Registered",
  },
  {
    id: "OPDN21565",
    name: "Madhu Pokhrel (907)",
    serviceNo: "22151",
    nshiId: "034836141",
    address: "Banganga",
    genderAge: "Male/46 Y 6M",
    department: "opd",
    consultant: "Dr. Rajan Subedi (EMP25)",
    status: "Registered",
    bgColor: "bg-blue-100",
  },
  {
    id: "OPDN21564",
    name: "Amar Pun (12360)",
    serviceNo: "22150",
    nshiId: "",
    address: "Banganga 2",
    genderAge: "Male/42 Y",
    department: "opd",
    consultant: "Opd Doctor (EMP12)",
    status: "Registered",
  },
  {
    id: "OPDN21562",
    name: "santosh gayawali (6480)",
    serviceNo: "22148",
    nshiId: "062866145",
    address: "Banganga 2",
    genderAge: "Male/49 Y 5M",
    department: "opd",
    consultant: "Dr. Aadesh Raymajhi (EMP16)",
    status: "Registered",
    bgColor: "bg-orange-100",
  },
  {
    id: "OPDN21561",
    name: "NIMA KUMARI REGMI (849)",
    serviceNo: "22146",
    nshiId: "056923823",
    address: "",
    genderAge: "Female/39 Y 4M",
    department: "opd",
    consultant: "Dr. Aadesh Raymajhi (EMP16)",
    status: "Registered",
  },
];

const PatientList = () => {
  return (
    <div className="p-4 bg-blue-100 mt-12">
      <div className="flex justify-between mb-2">
        <h2 className="font-bold text-lg">Filter OPD Patients</h2>
        <button className="px-2 py-1 border rounded bg-white">✖ All</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="overflow-x-auto bg-white shadow">
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">OPD ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Service No.</th>
              <th className="p-2 border">NSHI ID</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Gender/Age</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Consultant</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                className={`${patient.bgColor || "bg-green-100"} border-b`}
              >
                <td className="p-2 border">{patient.id}</td>
                <td className="p-2 border">{patient.name}</td>
                <td className="p-2 border">{patient.serviceNo}</td>
                <td className="p-2 border">{patient.nshiId}</td>
                <td className="p-2 border">{patient.address}</td>
                <td className="p-2 border">{patient.genderAge}</td>
                <td className="p-2 border">{patient.department}</td>
                <td className="p-2 border">{patient.consultant}</td>
                <td className="p-2 border">
                  <select className="border p-1 rounded">
                    <option>Registered</option>
                    <option>Checked</option>
                  </select>
                </td>
                <td className="p-2 border space-x-2">
                  <button className="px-2 py-1 border rounded">Action</button>
                  <button className="px-2 py-1 bg-green-500 text-white rounded">
                    Pre Checking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;