import React, { useState } from "react";

const pathologyData = [
  {
    id: "PATB5024",
    billNo: "29565",
    serviceNo: "20678",
    patient: "LAXMI PUN (8213)",
    tests: "H Pylori ag/ab",
    reportingDate: "09/04/2025 12:55 PM",
    billedBy: "Pabitra Poudel (EMP6)",
    refDoctor: "Dr. Tejendra Chaudhary (EMP15)",
    report: "0%",
  },
  {
    id: "PATB5023",
    billNo: "29560",
    serviceNo: "20770",
    patient: "Sarmila Gandarva (11854)",
    tests: "Platelets",
    reportingDate: "09/04/2025 12:50 PM",
    billedBy: "Pabitra Poudel (EMP6)",
    refDoctor: "Opd Doctor (EMP12)",
    report: "0%",
  },
  {
    id: "PATB5022",
    billNo: "29559",
    serviceNo: "20770",
    patient: "Sarmila Gandarva (11854)",
    tests: "Urine R/E, HEMOGLOBIN",
    reportingDate: "09/04/2025 12:47 PM",
    billedBy: "Pabitra Poudel (EMP6)",
    refDoctor: "Opd Doctor (EMP12)",
    report: "0%",
  },
];

const PathologyBill = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 mt-10">
      <div className="bg-teal-100 px-4 py-2 flex justify-between  items-center">
        <h2 className="font-semibold text-lg">Pathology Bill</h2>
        <button className="bg-green-500 text-white text-sm px-3 py-1 rounded hover:bg-green-600">
          Old Report
        </button>
      </div>

      <div className="border px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="border px-2 py-1 w-full mb-3"
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-2 py-1">Patho. ID</th>
                <th className="border px-2 py-1">Bill No</th>
                <th className="border px-2 py-1">Service No</th>
                <th className="border px-2 py-1">Patient Name</th>
                <th className="border px-2 py-1">Tests</th>
                <th className="border px-2 py-1">Reporting Date</th>
                <th className="border px-2 py-1">Billed by</th>
                <th className="border px-2 py-1">Reference Doctor</th>
                <th className="border px-2 py-1">Report</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {pathologyData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="border px-2 py-1">{row.id}</td>
                  <td className="border px-2 py-1">{row.billNo}</td>
                  <td className="border px-2 py-1">{row.serviceNo}</td>
                  <td className="border px-2 py-1">{row.patient}</td>
                  <td className="border px-2 py-1">{row.tests}</td>
                  <td className="border px-2 py-1">{row.reportingDate}</td>
                  <td className="border px-2 py-1">{row.billedBy}</td>
                  <td className="border px-2 py-1">{row.refDoctor}</td>
                  <td className="border px-2 py-1 text-center">{row.report}</td>
                  <td className="border px-2 py-1 text-center">
                    <button
                      onClick={() => setShowModal(true)}
                      className="flex items-center gap-1 bg-teal-700 text-white px-2 py-1 text-xs rounded hover:bg-teal-800"
                    >
                      <span className="text-white">➕</span>
                      <span>Entry</span>
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
          <div className="bg-white w-11/12 md:w-3/4 max-h-[90vh] overflow-y-auto p-4 rounded shadow-lg">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-lg font-semibold">Report Entry</h3>
              <button
                className="text-gray-500 hover:text-black"
                onClick={() => setShowModal(false)}
              >
                ✖️
              </button>
            </div>
            {/* Form Inputs */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Approved By *
                  </label>
                  <select className="w-full border rounded px-2 py-1">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Checked By *
                  </label>
                  <select className="w-full border rounded px-2 py-1">
                    <option>Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Approve Date
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1"
                    defaultValue="2081/12/27"
                  />
                </div>
              </div>

              <button className="bg-gray-600 text-white px-4 py-1 rounded mt-2">
                Barcode Print
              </button>
              {/* Test groups */}
              <div className="space-y-6 mt-4">
                {["Sugar"].map((group) => (
                  <div key={group} className="bg-gray-100 p-4 rounded">
                    <h4 className="font-semibold text-md mb-2">{group}</h4>
                    <table className="w-full text-sm">
                      <thead>
                        <tr>
                          <th className="text-left">#</th>
                          <th className="text-left">Test Parameter Name *</th>
                          <th className="text-left">Report Value</th>
                          <th className="text-left">Ref. Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(group === "Urine R/E" ? 8 : 1)].map(
                          (_, i) => (
                            <tr key={i}>
                              <td>{i + 2}</td>
                              <td>
                                <strong>SGPT</strong>
                              </td>
                              <td>
                                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-[20rem] max-w-md">
                                  <input
                                    type="text"
                                    className="flex-1 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="username"
                                  />
                                  <span className="bg-gray-100 text-gray-700 px-4 py-2 whitespace-nowrap text-sm">
                                    @
                                  </span>
                                </div>
                              </td>
                              <td className="text-gray-500 text-sm">
                                {group === "Sugar" && i === 0
                                  ? "70 - 140 mg/dL"
                                  : group === "Urea"
                                  ? "20-."
                                  : ""}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button className="bg-gray-700 text-white px-4 py-1 rounded">
                  Save & Print
                </button>
                <button className="bg-green-500 text-white px-4 py-1 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PathologyBill;
