import { useState } from "react";
import axios from "axios";

const StatementDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setData([]);
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/billing/tabular`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.status && response.data.data.length > 0) {
        setData(response.data.data);
        console.log(response.data.data);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <main className="flex-1 p-4 w-full mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-lg font-semibold">My Statement</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
            {[
              "Time Duration *",
              "Select Head",
              "Payer",
              "Gender",
              "From Age",
              "To Age",
            ].map((label, index) => (
              <div key={index}>
                <label className="text-sm font-medium">{label}</label>
                <select className="w-full p-2 border rounded">
                  <option>Select</option>
                </select>
              </div>
            ))}
          </div>

          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        <div className="bg-white mt-6 p-4 rounded-lg shadow-md overflow-auto w-full">
          <table className="w-full text-sm text-left border">
            <thead className="border-b bg-gray-100">
              <tr>
                {[
                  "Bill No",
                  "Txn ID.",
                  "Service No.",
                  "Date",
                  "Pat Name",
                  "sex/Age",
                  "Address",
                  "Category",
                  "Dr. Name",
                  "Disc (%)",
                  "Disc (Rs.)",
                  "Paid Amt (Rs.)",
                  "Adv Adj (Rs.)",
                  "Payer Type",
                  "Collected By",
                ].map((heading, index) => (
                  <th key={index} className="p-2">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {loading ? (
                <tr>
                  <td colSpan="16" className="p-4 text-gray-500">
                    Fetching data...
                  </td>
                </tr>
              ) : data === null ? (
                <tr>
                  <td colSpan="16" className="p-4 text-gray-500">
                    No records found.
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.uh_id || "-"}</td>
                    <td>{item.payment_id || "-"}</td>
                    <td>{item.opd_id || "-"}</td>
                    <td>{item.created_at || "-"}</td>
                    <td>{`${item.patient_firstname} ${item.patient_middlename} ${item.patient_lastname}`}</td>
                    <td>{`${item.patient_gender} / ${calculateAge(
                      item.patient_dob
                    )}`}</td>
                    <td>{item.patient_address}</td>
                    <td>{item.patient_type_name || "-"}</td>
                    <td>{item.consultant_name || "-"}</td>
                    <td>{item.discount_scheme || "-"}</td>
                    <td>{item.discount_amount || "-"}</td>
                    <td>{item.pay_amount || "-"}</td>
                    <td>-</td>
                    <td>{item.payment_method || "-"}</td>
                    <td>-</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

function calculateAge(dob) {
  if (!dob) return "-";
  const birthDate = new Date(dob);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default StatementDashboard;
