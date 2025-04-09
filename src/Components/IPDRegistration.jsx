import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { jsPDF } from 'jspdf';

function App() {
  const [formData, setFormData] = useState({
    patientName: '',
    surname: '',
    dob: '',
    phoneNumber: '',
    admissionType: 'ADMIT PATIENT',
    admissionCategory: 'GENERAL ADMISSION',
    paymentMode: 'ConnectIPS',
    amount: 500.00,
    advance: 500,
    payableAmount: 500,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Add logic to save and print
    alert('Form submitted!');
  };

  // Create PDF function using jsPDF
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

  // Setup React-to-Print for printing the component
  const printRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onAfterPrint: handlePrintPDF,  // After printing, generate the PDF
  });

  const confirmAndPrint = () => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm('Do you want to print and save as PDF?');

    if (isConfirmed) {
    
    
      handlePrint();
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <div className="flex justify-between items-start gap-10">
        {/* IPD Registration Form */}
        <div className="w-1/2" ref={printRef}>
          <h2 className="text-xl font-semibold bg-blue-500 text-white p-3 text-center">
            IPD REGISTRATION
          </h2>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Refresh Page
          </button>
          <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  placeholder="Enter Surname"
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  placeholder="YY / MM / DD"
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Save & Print
              </button>
            </div>
          </div>
        </div>

        {/* Payment Record */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold bg-gray-700 text-white p-3 text-center">
            Payment Record
          </h2>

          <div className="p-4 space-y-4">
            {/* First row: Admission Type & Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Admission Type</label>
                <select
                  name="admissionType"
                  value={formData.admissionType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                >
                  <option>ADMIT PATIENT</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Admission Category</label>
                <select
                  name="admissionCategory"
                  value={formData.admissionCategory}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                >
                  <option>GENERAL ADMISSION</option>
                </select>
              </div>
            </div>

            {/* Second row: Payment Mode & Amount */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">Payment Mode</label>
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                >
                  <option>ConnectIPS</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Amount</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md bg-white"
                />
              </div>
            </div>

            {/* Third row: Advance & Payable Amount */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 w-full">
                <span className="text-green-600 font-semibold">Advance:</span>
                <input
                  type="text"
                  value={formData.advance}
                  className="w-3/4 border border-gray-300 p-3 rounded-md text-blue-600 font-bold text-lg text-center"
                  disabled
                />
              </div>
              <div className="flex items-center space-x-2 w-full">
                <span className="text-green-600 font-semibold">Payable Amount:</span>
                <input
                  type="text"
                  value={formData.payableAmount}
                  className="w-3/4 border border-gray-300 p-3 rounded-md text-blue-600 font-bold text-lg text-center"
                  disabled
                />
              </div>
            </div>

            {/* Save & Print Button */}
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={confirmAndPrint}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Print & Save as PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
