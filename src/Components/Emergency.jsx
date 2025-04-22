
import React from 'react';


const GeneralInformationForm = () => {
  return (
    <div className=" w-full min-h-screen p-1 py-1 flex gap-4">

      <div className="w-[65%] bg-white p-2 shadow rounded">
        <div className='grid grid-cols-3 gap-2'>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>Payer</option>
              <option>Private</option>
              <option>Insurance</option>
              <option>SSF</option>
            </select>
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option >Cash</option>
              <option >Insurance</option>
              <option >SSF</option>
            </select>
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Search by UHID"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
        </div>
        <h2 className="text-md font-bold mt-5">GENERAL INFORMATION</h2>
        <div className="grid grid-cols-3 gap-4">

          <div className="col-span-1">

            <input
              type="text"
              placeholder="First Name"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Middle Name"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="date"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="number"
              placeholder="Age*"
              readOnly
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="number"
              placeholder="Mobile No*"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1  border-b border-gray-300 focus:outline-none">
              <option disabled>District</option>
              <option>Parsa</option>
              <option>Bara</option>
            </select>
          </div>
          <div className="col-span-1">
            <input
              type="text"
              readOnly placeholder="Municipality*"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              readOnly placeholder="Village/Tole*"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>Marital Status*</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>Blood Group</option>
              <option>A+</option>
              <option>O+</option>
            </select>
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>Religion</option>
              <option>Hindu</option>
              <option>Muslim</option>
            </select>
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>Occupation</option>
              <option>Farmer</option>
              <option>Businesman</option>
            </select>
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option>Consultant</option>
              <option>Dr. Madhurendra</option>
              <option>Dr.IT</option>
            </select>
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="PAN/NID*"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              placeholder="Email"
              className="w-full mt-1 border-b border-gray-300 focus:outline-none"
            />
          </div>
          <div className="col-span-1">
            <select className="w-full mt-1 border-b border-gray-300 focus:outline-none">
              <option disabled>P. Type/Co-Pay Type</option>
              <option>Normal</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>

      </div>
      <div className="w-[35%] bg-white p-4 shadow rounded space-y-4">
  <h2 className="text-lg font-semibold text-gray-700">Payment Method</h2>
  <div className="space-y-4">
  <div className="grid grid-cols-3 gap-4">

    <select className="w-full border-b border-gray-300 py-2 focus:outline-none">
      <option disabled selected>Charge Category</option>
      <option>Opd</option>
      <option>Emergency</option>
    </select>

    <select className="w-full border-b border-gray-300 py-2 focus:outline-none">
      <option disabled selected>Select</option>
      <option>Opd Ticket</option>
      <option>FollowUp</option>
    </select>

    <input
      type="number"
      placeholder="Rs 0"
      className="w-full border-b border-gray-300  focus:outline-none"
    />
  </div>
    <div className="grid grid-cols-2 gap-4">
      <div className='grid-cols-1'>
    <select className="w-full border-b border-gray-300  focus:outline-none">
      <option disabled selected>Discount Scheme</option>
      <option>5%</option>
      <option>10%</option>
    </select>
      </div>
      <div className='grid-cols-1'>
      <input
      type="number"
      placeholder="Rs 0"
      className="w-full border-b border-gray-300  focus:outline-none"
    />
      </div>
    </div>
  
  <div className="grid grid-cols-2 gap-4">
    <select className="w-full border-b border-gray-300 py-2 focus:outline-none">
      <option disabled selected>Select Payment</option>
      <option>Cash</option>
      <option>Insurance</option>
    </select>
    <input
      type="number"
      placeholder="Rs 0"
      className="w-full border-b border-gray-300  focus:outline-none"
    />
  </div>
  
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
  <div className="flex h-[4rem] w-[9rem] items-center justify-center border rounded-lg  hover:shadow-md cursor-pointer">
    <img
      src="/esewa.png"
      alt="eSewa"
      className="w-30 h-auto"
    />
  </div>
  <div className="flex bg-pink-900 h-[4rem] w-[9rem]  items-center justify-center border rounded-lg  hover:shadow-md cursor-pointer">
    <img
      src="/khalti.png"
      alt="Khalti"
      className="w-30 h-auto"
    />
  </div>
  <div className="flex h-[4rem] w-[9rem] items-center justify-center border rounded-lg p-4 hover:shadow-md cursor-pointer ">
    <img
      src="/Fone-pe.png"
      alt="IME Pay"
      className="w-30 h-auto"
    />
  </div>
</div>
  <button className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition">
    Pay $599,00
  </button>
</div>
    </div>
  );
};
export default GeneralInformationForm;