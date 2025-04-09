import React from "react";

const OPDBalanceReport = () => {
  const data = [
    {
      opdNo: "OPDN20569",
      patientName: "mahendra paudel (5021)",
      serviceNo: "20579",
      age: "22 Y 7 M 21 D",
      gender: "Male",
      mobile: "",
      discharged: "Yes",
      netAmount: "50.00",
      paidAmount: "0.00",
      balanceAmount: "50.00",
    },
    {
      opdNo: "OPDN20568",
      patientName: "Sarswati Tharu (11778)",
      serviceNo: "20578",
      age: "30 Y",
      gender: "Female",
      mobile: "",
      discharged: "No",
      netAmount: "0.00",
      paidAmount: "0.00",
      balanceAmount: "0.00",
    },
    {
      opdNo: "OPDN20567",
      patientName: "KAMALA KHATRI (720)",
      serviceNo: "20577",
      age: "51 Y 4 M 15 D",
      gender: "Female",
      mobile: "9817547721",
      discharged: "No",
      netAmount: "100.00",
      paidAmount: "0.00",
      balanceAmount: "100.00",
    },
    // Add more entries as needed
  ];

  return (
    <div className="p-6 mt-10 mx-auto">
      <h2 className="text-xl font-bold mb-4">OPD Balance Report</h2>

      {/* Filters */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        <select className="border p-2 rounded">
          <option>Today</option>
        </select>
        <select className="border p-2 rounded" placeholder="From Age">
          <option>Select</option>
        </select>
        <select className="border p-2 rounded" placeholder="To Age">
          <option>Select</option>
        </select>
        <select className="border p-2 rounded">
          <option>Select Gender</option>
        </select>
        <select className="border p-2 rounded">
          <option>Select Discharged</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-teal-700 text-left text-white">
              <th className="py-2 px-4">OPD No</th>
              <th className="py-2 px-4">Patient Name</th>
              <th className="py-2 px-4">Service No.</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Mobile Number</th>
              <th className="py-2 px-4">Discharged</th>
              <th className="py-2 px-4">Net Amount (RS.)</th>
              <th className="py-2 px-4">Paid Amount (RS.)</th>
              <th className="py-2 px-4">Balance Amount (RS.)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{row.opdNo}</td>
                <td className="py-2 px-4">{row.patientName}</td>
                <td className="py-2 px-4">{row.serviceNo}</td>
                <td className="py-2 px-4">{row.age}</td>
                <td className="py-2 px-4">{row.gender}</td>
                <td className="py-2 px-4">{row.mobile}</td>
                <td className="py-2 px-4">{row.discharged}</td>
                <td className="py-2 px-4">{row.netAmount}</td>
                <td className="py-2 px-4">{row.paidAmount}</td>
                <td className="py-2 px-4">{row.balanceAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OPDBalanceReport;
