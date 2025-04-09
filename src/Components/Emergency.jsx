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
  <div className="flex justify-between items-start mt-10 gap-3">
    {/* IPD Registration Form */}
    <div className="w-full" ref={printRef}>
      <h2 className="text-xl font-semibold bg-teal-700 text-white p-1 ">
      Patient Registration
      </h2>
     
      <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
         
          <div className='flex items-center gap-2'>
            <label htmlFor=""> Payer</label>
            <select name="" id="" className="w-full border border-gray-300 p-1 rounded-md bg-white">
              <option value="">Private</option>
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <label htmlFor=""> INS/SSF</label>
             <select name="" id="" className="w-full border border-gray-300 p-1 rounded-md bg-white">
              <option value="">Insurance</option>
             </select>
          </div>

          <div className='flex items-center '>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Search by UHID"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
        </div>
      <div className="text-xl font-semibold bg-teal-700 text-white p-1  w-full">
           
        Personal Information
         
            </div>

      <div className="p-4 space-y-4">
        {/* First Row: 4 Columns */}
        <div className="grid grid-cols-3 gap-4">
          {/* <div>
            <select
              name="title"
              className=" border border-gray-300 p-1 rounded-md bg-white w-60"
            >
              <option value="">Mr.</option>
              <option value="">Miss.</option>
              <option value="">Mrs.</option>
            </select>
          </div> */}
          <div>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              placeholder="First Name*"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              placeholder="Middle Name"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name*"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
        </div>

        {/* Second Row: 3 Columns */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
           placeholder='DOB' />
          </div>
          <div>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
             readOnly placeholder="Age"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Mobile No"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
        </div>
        <div className="text-xl font-semibold bg-teal-700 text-white p-1  w-full">
           
        Detailed Information
         
            </div>
            <div className="grid grid-cols-3 gap-4">
         
            <div>
           <select name="
           " id=""  className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option disabled value="">District</option>
            <option value="">Parsa</option>
             <option value="">Bara</option>
           </select>
          </div>
          <div>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
             readOnly placeholder="Municipality*"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
             readOnly placeholder="Village/Tole*"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
           <select name="
           " id=""  className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option value="">Marital Status</option>
             <option value="">Single</option>
             <option value="">Mrried</option>
           </select>
          </div>
          <div>
            <select name="" id="" className="w-full border border-gray-300 p-1 rounded-md bg-white">
              <option disabled value="">Blood Group</option>
              <option value="">A+</option>
              <option value="">AB+</option>
              <option value="">O+</option>
              <option value="">OB-</option>
            </select>
          </div>
          <div>
           <select name="
           " id=""  className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option disabled value="">Gender</option>
             <option value="">Male</option>
             <option value="">Female</option>
             <option value="">Other</option>
           </select>
          </div>
          <div>
          <select name="" id=""   className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option disabled value="">Regliion</option>
            <option value="">Hindu</option>
            <option value="">Muslim</option>
          </select>
          </div>
          <div>
          <select name="" id=""   className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option disabled value="">Occupation</option>
            <option value="">Farmer</option>
            <option value="">Bussiman</option>
            <option value="">Doctor</option>
          </select>
          </div>
          <div>
          <select name="" id=""   className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option disabled value="">Doctor</option>
            <option value="">Dr.Rahul</option>
            <option value="">Dr.Madhurandra</option>
            <option value="">Dr.Rupesh</option>
          </select>
          </div>
          <div>
            <input
              type="number"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="PAN NO/ NID NO*"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Email*"
              className="w-full border border-gray-300 p-1 rounded-md bg-white"
            />
          </div>
          <div>
          <select name="
          " id=""  className="w-full border border-gray-300 p-1 rounded-md bg-white">
            <option disabled value="">P. Type/Co-Pay Type</option>
            <option value="">Normal</option>
          </select>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-6 py-1 rounded-md hover:bg-green-600"
          >
            Save & Print
          </button>
        </div>
      </div>
    </div>

    {/* Payment Record */}
    <div className="w-[60%]">
      
      <h2 className="text-xl font-semibold bg-teal-700 text-white p-1 text-center">
        Payment Procedure
      </h2>

      <div className="p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
         
         <div>
        <select name="
        " id=""  className="w-full border border-gray-300 p-1 rounded-md bg-white">
         <option disabled value="">OPD</option>
         <option value="">Emergency</option>
          <option value="">IPD</option>
        </select>
       </div>
       <div>
         <input
           type="text"
           name="middleName"
           value={formData.middleName}
           onChange={handleInputChange}
           placeholder="OPD Charge*"
           className="w-full border border-gray-300 p-1 rounded-md bg-white"
         />
       </div>
       <div>
         <input
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
          readOnly placeholder="Amount"
           className="w-full border border-gray-300 p-1 rounded-md bg-white"
         />
       </div>
       <div>
       <input
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
          readOnly placeholder="Discount"
           className="w-full border border-gray-300 p-1 rounded-md bg-white"
         />
       </div>
       <div>
         <select name="" id="" className="w-full border border-gray-300 p-1 rounded-md bg-white">
           <option disabled value=""></option>
           <option value="">Fixed</option>
           <option value="">%</option>
         </select>
       </div>
       <div>
       <input
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
          readOnly placeholder="0"
           className="w-full border border-gray-300 p-1 rounded-md bg-white"
         />
       </div>
       <div>
       <input
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
          readOnly placeholder="Cash"
           className="w-full border border-gray-300 p-1 rounded-md bg-white"
         />
       </div>
       <div>
       <select  name="" id=""   className="w-full border border-gray-300 p-1 rounded-md bg-white">
        
         
       </select>
       </div>
       <div>
       
       <input
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
          readOnly placeholder="0"
           className="w-full border border-gray-300 p-1 rounded-md bg-white"
         />
        
       
       </div>
       <div>
       <h2 className="text-xl font-semibold bg-teal-700 text-white p-1 text-center">
         Net Payable 👉
      </h2>
       </div>
       <div className="flex justify-end  space-x-4">
          <button
            onClick={confirmAndPrint}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
           Print OPD Ticket 
          </button>
        </div>
        <div className="flex justify-end  space-x-4">
          <button
            onClick={confirmAndPrint}
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600"
          >
            Print OPD Sticker 
          </button>
        </div>
       
     </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
