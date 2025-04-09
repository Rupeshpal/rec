import React from "react";

const patientData = {
  UHID: "2081/12/10",
  patientId: "201546",
  name: "Madhurendra Tiwary",
  mobile: "9855022323",
  address: "Birgunj-15, Parsa",
  advanceReport: {
    deposited: 1500,
    used: 1000,
    balance: 500,
    history: [
      { date: "2025/04/07", type: "Deposit", amount: 1000, reference: "Cash Counter" },
      { date: "2025/04/07", type: "Settlement", amount: 500, reference: "Lab Bill #225" },
    ],
  },
  duesReport: {
    total: 1500,
    paid: 1000,
    balance: 500,
    history: [
      { date: "2025/04/07", type: "Deposit", amount: 1000, reference: "Cash Counter" },
      { date: "2025/04/07", type: "Settlement", amount: 500, reference: "Lab Bill #225" },
    ],
  },
  refundReport: {
    billAmount: 1500,
    refunded: 1000,
    billedToHospital: 500,
  },
};

const InfoCard = ({ title, children }) => (
  <div className="border rounded-2xl shadow-md p-4 w-full max-w-sm">
    <h2 className="bg-blue-500 text-white text-center py-2 rounded-t-2xl text-lg font-bold">{title}</h2>
    <div className="text-sm py-2 space-y-1">{children}</div>
  </div>
);

const Table = ({ data }) => (
  <table className="w-full mt-2 text-xs border">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-2 py-1">Date</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Amount</th>
        <th className="border px-2 py-1">Reference</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, idx) => (
        <tr key={idx}>
          <td className="border px-2 py-1">{item.date}</td>
          <td className="border px-2 py-1">{item.type}</td>
          <td className="border px-2 py-1">Rs. {item.amount}</td>
          <td className="border px-2 py-1">{item.reference}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default function PatientSummary() {
  return (
    <div className=" p-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Advance Summary */}
        <InfoCard title="Patient Advance Summary">
          <div>UHID: {patientData.UHID}</div>
          <div>Patient ID: {patientData.patientId}</div>
          <div>Name: {patientData.name}</div>
          <div>Mobile: {patientData.mobile}</div>
          <div>Address: {patientData.address}</div>
          <h3 className="text-orange-500 font-bold pt-2">Advance Report</h3>
          <div>Advance Deposited: Rs. {patientData.advanceReport.deposited}</div>
          <div>Advance Used: Rs. {patientData.advanceReport.used}</div>
          <div>Advance Balance: Rs. {patientData.advanceReport.balance}</div>
          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="Add Advance" className="border px-2 py-1 w-full" />
            <button className="bg-blue-500 text-white w-[10rem] rounded">Save & Print</button>
          </div>
          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="Clear Advance" className="border px-2 py-1 w-full" />
            <button className="bg-blue-500 text-white w-[10rem] rounded">Save & Print</button>
          </div>
          <h3 className="text-orange-500 font-bold pt-2">Advance History</h3>
          <Table data={patientData.advanceReport.history} />
          <div className="text-right">
            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Show Details</button>
          </div>
        </InfoCard>

        {/* Dues Summary */}
        <InfoCard title="Patient Dues Summary">
          <div>UHID: {patientData.UHID}</div>
          <div>Patient ID: {patientData.patientId}</div>
          <div>Name: {patientData.name}</div>
          <div>Mobile: {patientData.mobile}</div>
          <div>Address: {patientData.address}</div>
          <h3 className="text-orange-500 font-bold pt-2">Dues Report</h3>
          <div>Total Dues: Rs. {patientData.duesReport.total}</div>
          <div>Dues Paid: Rs. {patientData.duesReport.paid}</div>
          <div>Dues Balance: Rs. {patientData.duesReport.balance}</div>
          <div className="flex space-x-2 mt-2">
            <input type="text" placeholder="Dues Clear with Advance" className="border px-2 py-1 w-full" />
            <button className="bg-blue-500 text-white w-[10rem] rounded">Save & Print</button>
          </div>
          <h3 className="text-orange-500 font-bold pt-2">Dues History</h3>
          <Table data={patientData.duesReport.history} />
          <div className="text-right">
            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Show Details</button>
          </div>
        </InfoCard>

        {/* Refund Summary */}
        <InfoCard title="Patient Refund Summary">
          <div>UHID: {patientData.UHID}</div>
          <div>Patient ID: {patientData.patientId}</div>
          <div>Name: {patientData.name}</div>
          <div>Mobile: {patientData.mobile}</div>
          <div>Address: {patientData.address}</div>
          <h3 className="text-orange-500 font-bold pt-2">Refund Report</h3>
          <div>Total Bill Amount: Rs. {patientData.refundReport.billAmount}</div>
          <div>Refunded Amount: Rs. {patientData.refundReport.refunded}</div>
          <div>Billed to Hospital: Rs. {patientData.refundReport.billedToHospital}</div>
          <h3 className="text-orange-500 font-bold pt-2">Advance History</h3>
          <Table data={patientData.advanceReport.history} />
          <div className="text-right">
            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Show Details</button>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
