import React from 'react';

const GeneralInformationForm = () => {
  return (
    <div className=" w-full min-h-screen p-4 py-1 flex gap-4">

      <div className="w-[70%] bg-white p-2 shadow rounded">
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
      <div className="w-[30%] bg-gray-50 p-2 shadow rounded">
        <h2 className="text-lg font-bold mb-4 text-center">Payment Method</h2>
        <p className="text-sm text-gray-600">Additional content can go here.</p>
      </div>
    </div>
  );
};

export default GeneralInformationForm;