import React from "react";

const AddTestForm = () => {
  return (
    <div className="border mt-10 rounded overflow-hidden shadow-lg w-[75rem] mx-auto">
      <div className="bg-teal-700 text-white px-4 py-2 font-semibold">
       Add Services Details
      </div>
        <div className="mt-2 ml-5">
        <select className="px-3 border rounded h-[2rem]">
            <option selected disabled>Select Department *</option>
            <option value="">Pathlogy</option>
            <option value="">Radiology</option>
          </select>
        </div>
      <div className="bg-gray-200 p-4 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input className="p-2 border rounded" placeholder="Test Name *" />
          <input className="p-2 border rounded" placeholder="Short Name *" />
          <input className="p-2 border rounded" placeholder="Test Type" />
          <select className="p-2 border rounded">
            <option>Category Name *</option>
          </select>

          <input className="p-2 border rounded" placeholder="Sub Category" />
          <input className="p-2 border rounded" placeholder="Method" />
          <input className="p-2 border rounded" placeholder="Report Days" defaultValue={0} />
          <select className="p-2 border rounded">
            <option>Charge Category *</option>
          </select>

          <select className="p-2 border rounded">
            <option>Charge Name *</option>
          </select>
          <div className="flex">
            <input className="p-2 border rounded-l w-full" placeholder="Tax (%)" />
            <span className="p-2 border border-l-0 rounded-r bg-white">%</span>
          </div>
          <input className="p-2 border rounded" placeholder="Standard Charge (RS.) *" />
          <input className="p-2 border rounded" placeholder="Amount (RS.) *" />
        </div>

        <div className="bg-white border mt-4">
          <div className="grid grid-cols-12 bg-gray-100 p-2 font-semibold text-sm">
            <div className="col-span-5">Test Parameter Name *</div>
            <div className="col-span-5">Ref. Range *</div>
            <div className="col-span-1">Unit *</div>
            <div className="col-span-1 text-center">+</div>
          </div>
          <div className="grid grid-cols-4 p-2 gap-10">
            <input className=" p-2 border rounded" />
            <input className=" p-2 border rounded" />
            <input className=" p-2 border rounded" />
            <button className="col-span-1 bg-teal-700 text-white w-[10rem] rounded px-2">+</button>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="bg-gray-700 text-white px-4 py-2 rounded shadow">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddTestForm;
