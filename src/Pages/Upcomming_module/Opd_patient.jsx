import React from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";

const FilterOPDPatients = () => {
  const data = [
    {
      opdId: "OPDN20044",
      name: "Sarswati Tharu (11778)",
      serviceNo: "20578",
      nshiId: "",
      address: "Banganga 7",
      genderAge: "Female/30 Y",
      phone: "",
      department: "opd",
      consultant: "Opd Doctor (EMP12)",
      status: "Registered",
    },
    {
      opdId: "OPDN20043",
      name: "Kalpana Adhikari (11774)",
      serviceNo: "20572",
      nshiId: "",
      address: "Banganga 3",
      genderAge: "Other/21 Y",
      phone: "",
      department: "opd",
      consultant: "Opd Doctor (EMP12)",
      status: "Registered",
    },
    {
      opdId: "OPDN20042",
      name: "SHREEMATI KAMALA DEVI GHIMIRE (10846)",
      serviceNo: "20571",
      nshiId: "770453935",
      address: "27.6847165 83.198124",
      genderAge: "Female/63 Y 5M",
      phone: "9847367006",
      department: "opd",
      consultant: "Dr. Aadash Raymajhi (EMP16)",
      status: "Registered",
    },
    {
      opdId: "OPDN20041",
      name: "TEJ NARAYAN SHARMA (2318)",
      serviceNo: "20570",
      nshiId: "056105280",
      address: "Banganga 8",
      genderAge: "Male/77 Y 6M",
      phone: "",
      department: "opd",
      consultant: "Dr. Tejendra Chaudhary (EMP15)",
      status: "Registered",
    },
    // Add more entries as needed
  ];

  return (
    <div className="p-6 mt-10">
      <h2 className="text-xl font-bold mb-4">Filter OPD Patients</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full max-w-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr className="text-md">
              <th className="py-2 px-4">OPD ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Service No.</th>
              <th className="py-2 px-4">NSHI ID</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Gender/Age</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Department</th>
              <th className="py-2 px-4">Consultant</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
              <th className="py-2 px-4">Pre Checking</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-t text-sm">
                <td className="py-2 px-4 text-blue-600 font-semibold cursor-pointer">{row.opdId}</td>
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4">{row.serviceNo}</td>
                <td className="py-2 px-4">{row.nshiId}</td>
                <td className="py-2 px-4">{row.address}</td>
                <td className="py-2 px-4">{row.genderAge}</td>
                <td className="py-2 px-4">{row.phone}</td>
                <td className="py-2 px-4">{row.department}</td>
                <td className="py-2 px-4">{row.consultant}</td>
                <td className="py-2 px-4">{row.status}</td>
                <td className="py-2 px-4 flex space-x-2">
                  <button title="View" className="text-blue-600"><Eye size={16} /></button>
                  <button title="Edit" className="text-yellow-600"><Edit2 size={16} /></button>
                  <button title="Delete" className="text-red-600"><Trash2 size={16} /></button>
                </td>
                <td className="py-2 px-4">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                    Pre Checking
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilterOPDPatients;
