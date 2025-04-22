import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';
import { Link } from 'react-router-dom';
import GlobalButton from '../components/GlobalButton';
import { Trash2 } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    patientName: '',
    surname: '',
    dob: '',
    phoneNumber: '',
    admissionType: 'ADMIT PATIENT',
    admissionCategory: 'GENERAL ADMISSION',
    paymentMode: 'ConnectIPS',
    amount: 500.0,
    advance: 500,
    payableAmount: 500,
    billingType: '',
    paymentMethod: '',
    uHID: '',
    searchUHID: '',
    searchByName: '',
    otherField: '',
  });

  const [services, setServices] = useState([
    { id: 1, name: 'DENTAL SCALING (DENTAL)', qty: 1, tax: 0, disc: 0, amt: 300, tpaAmt: 0, tpa: false, exc: false },
    { id: 2, name: 'CBC (C)', qty: 1, tax: 0, disc: 0, amt: 600, tpaAmt: 0, tpa: false, exc: false },
    { id: 3, name: 'RBC Morphology (RBC Morph)', qty: 1, tax: 0, disc: 0, amt: 250, tpaAmt: 0, tpa: false, exc: false },
    { id: 4, name: 'RBS (RBS)', qty: 1, tax: 0, disc: 0, amt: 80, tpaAmt: 0, tpa: false, exc: false },
    { id: 5, name: 'Portable X-Ray (portxray)', qty: 1, tax: 0, disc: 0, amt: 800, tpaAmt: 0, tpa: false, exc: false },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
     
    }));
  };

  const handleChange = (id, field, value) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? { ...service, [field]: field === 'qty' || field === 'disc' ? Number(value) : value }
          : service
      )
    );
  };

  const handleCheckbox = (id, field) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, [field]: !service[field] } : service
      )
    );
  };

  const deleteRow = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const handlePrintPDF = () => {
    const doc = new jsPDF();
    doc.text('IPD Registration', 10, 10);
    doc.text(`Name: ${formData.patientName}`, 10, 20);
    doc.text(`Surname: ${formData.surname}`, 10, 30);
    doc.text(`DOB: ${formData.dob}`, 10, 40);
    doc.text(`Phone: ${formData.phoneNumber}`, 10, 50);
    doc.text('Payment Record', 10, 60);
    doc.text(`Admission Type: ${formData.admissionType}`, 10, 70);
    doc.text(`Admission Category: ${formData.admissionCategory}`, 10, 80);
    doc.text(`Payment Mode: ${formData.paymentMode}`, 10, 90);
    doc.text(`Amount: ${formData.amount}`, 10, 100);
    doc.text(`Advance: ${formData.advance}`, 10, 110);
    doc.text(`Payable Amount: ${formData.payableAmount}`, 10, 120);
    doc.save('registration_form.pdf');
  };

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: handlePrintPDF,
  });

  const confirmAndPrint = () => {
    const isConfirmed = window.confirm('Do you want to print and save as PDF?');
    if (isConfirmed) {
      handlePrint();
    }
  };

  return (
    <div className="bg-gray-100 ">
      {/* Header Section */}
      <div className="text-md font-semibold mb-2 bg-teal-700 w-full text-white p-1">
        <div className="grid grid-cols-5 gap-4">
          <input
            type="text"
            name="searchUHID"
            value={formData.searchUHID}
            onChange={handleInputChange}
            placeholder="Enter UHID or Scan Barcode"
            className="w-full border border-gray-300 bg-white p-1 rounded"
          />
          <input
            type="text"
            name="searchByName"
            value={formData.searchByName}
            onChange={handleInputChange}
            placeholder="Search Patient By Name"
            className="w-full border border-gray-300 bg-white p-1 rounded"
          />
          <Link to="/opd-ticket">
            <GlobalButton buttonId="button1" />
          </Link>
        </div>
      </div>

      <div className="flex gap-3 ">
        {/* Printable Form */}
        <div className="w-full " ref={printRef}>
          <div className="grid grid-cols-5 w-full gap-4 p-2 bg-white shadow">
            <input
              type="text"
              name="uHID"
              value={formData.uHID}
              onChange={handleInputChange}
              placeholder="Select Test"
              
              className="border border-gray-300 p-1 bg-white w-3/11"
            />
            <input
              type="text"
              name="searchByName"
              value={formData.searchByName}
              onChange={handleInputChange}
              placeholder="Consultant"
              className="border border-gray-300 p-1 bg-white w-full"
            />
            <select className="border border-gray-300 p-1 bg-white w-full">
              <option disabled value="">
                Discount Scheme
              </option>
              <option value="5%">Discount 5%</option>
              <option value="10%">Discount 10%</option>
            </select>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              readOnly
              placeholder="0"
              className="border border-gray-300 p-1 bg-white w-full"
            />
            <input
              type="text"
              name="otherField"
              value={formData.otherField}
              onChange={handleInputChange}
              placeholder="Other Field"
              className="border border-gray-300 p-1 bg-white w-full"
            />
          </div>

          {/* Services Table */}
          <div className="max-w-6xl mx-auto mt-4 bg-white shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-4">Service Name</th>
                    <th className="px-4">Qty</th>
                    <th className="px-4">Tax</th>
                    <th className="px-4">Disc</th>
                    <th className="px-4">Amt</th>
                    <th className="px-4">TPA Amt</th>
                    <th className="px-4">TPA</th>
                    <th className="px-4">Exc</th>
                    <th className="px-4"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-100">
                  {services.map((service) => (
                    <tr key={service.id}>
                      <td className="px-4">{service.name}</td>
                      <td className="px-4">
                        <input
                          type="number"
                          value={service.qty}
                          min="1"
                          onChange={(e) => handleChange(service.id, 'qty', e.target.value)}
                          className="w-16 border px-2 py-0 rounded"
                        />
                      </td>
                      <td className="px-4">{service.tax.toFixed(2)}%</td>
                      <td className="px-4">
                        <input
                          type="number"
                          value={service.disc}
                          min="0"
                          onChange={(e) => handleChange(service.id, 'disc', e.target.value)}
                          className="w-16 border px-2 py-0 rounded"
                        />%
                      </td>
                      <td className="px-4">{service.amt.toFixed(2)}</td>
                      <td className="px-4">{service.tpaAmt.toFixed(2)}</td>
                      <td className="px-4 text-center">
                        <input
                          type="checkbox"
                          checked={service.tpa}
                          onChange={() => handleCheckbox(service.id, 'tpa')}
                        />
                      </td>
                      <td className="px-4 text-center">
                        <input
                          type="checkbox"
                          checked={service.exc}
                          onChange={() => handleCheckbox(service.id, 'exc')}
                        />
                      </td>
                      <td className="px-4 text-center">
                        <button onClick={() => deleteRow(service.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <textarea
  name="searchUHID"
  value={formData.searchUHID}
  onChange={handleInputChange}
  placeholder="Please Mention Discount or Credit...."
  className="w-full border border-gray-300 bg-white p-1 mt-5 rounded"
/>

        </div>

        {/* Payment Section */}
        <div className="w-[40%]">
          <h2 className="text-md font-semibold bg-teal-700 text-white p-2 text-center ">
            Payment Procedure
          </h2>

          <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-4">
  <div className="flex flex-col">
    <label>Payment Mode</label>
    <select
      name="billingType"
      value={formData.billingType}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-1 bg-white"
    >
      <option disabled value="">Cash Mode</option>
      <option value="OPD">Cash</option>
      <option value="Emergency">Credit</option>
      <option value="IPD">Phone Pe</option>
    </select>
  </div>

  <div className="flex flex-col">
    <label>Bill Type</label>
    <select
      name="paymentMode"
      value={formData.paymentMode}
      onChange={handleInputChange}
      className="w-full border border-gray-300 p-1 bg-white"
    >
      <option disabled value="">Select Type</option>
      <option value="ConnectIPS">Pathalogy</option>
      <option value="Cash">Radiology</option>
      <option value="Credit">Direct Billing</option>
     
    </select>
  </div>

  <div className="flex flex-col">
    <label>Amount</label>
    <input
      type="text"
      name="amount"
      value={formData.amount}
      onChange={handleInputChange}
      placeholder="Amount"
      className="w-full border border-gray-300 p-1 bg-white"
    />
  </div>
</div>


            <div
             disabled
              className="w-full bg-teal-700 text-white   mt-4 py-1"
            >
             
            </div>
            <div className="grid grid-cols-2 gap-4">
  <div className="flex flex-col">
    <label>Total Amount</label>
    <input
      type="text"
      name=" amount"
      value={formData.amount}
      onChange={handleInputChange}
      placeholder="Total Amount"
      className="w-full border border-gray-300 p-1 bg-white"
    />
  </div>

  <div className="flex flex-col">
    <label>Discount</label>
    <input
      type="text"
      name="Discount"
      value={formData.amount}
      onChange={handleInputChange}
      placeholder="Discount"
      className="w-full border border-gray-300 p-1 bg-white"
    />
  </div>

  <div className="flex flex-col">
    <label>Advance Amt</label>
    <input
      type="text"
      name=""
      value={formData.amount}
      onChange={handleInputChange}
      placeholder="Advance Amount"
      className="w-full border border-gray-300 p-1 bg-white"
    />
  </div>
  <div className="flex flex-col">
    <label>Net Payeble</label>
    <input
      type="text"
      name="amount"
      value={formData.amount}
      onChange={handleInputChange}
      placeholder="Net Payeble"
      className="w-full border border-gray-300 p-1 bg-white"
    />
  </div>
</div>
<button
              onClick={confirmAndPrint}
              className="w-full bg-teal-700 text-white rounded-md hover:bg-teal-800 mt-4 py-1"
            >
             Save & Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
