import React from "react";
import { Save, Printer } from "lucide-react";

const ExternalMortuaryForm = () => {
  return (
    <div className="bg-cyan-100 p-6 mt-10 text-sm">
      <div className="flex justify-between mb-4">
        
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block font-semibold">Name <span className="text-red-600">*</span></label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Date Of Birth <span className="text-red-600">*</span></label>
          <input type="date" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Gender <span className="text-red-600">*</span></label>
          <select className="border rounded p-2 w-full">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Death Date And Time <span className="text-red-600">*</span></label>
          <input type="datetime-local" defaultValue="2025-04-08T18:04" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Attendant Name</label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Relation With Dead</label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Received By <span className="text-red-600">*</span></label>
          <select className="border rounded p-2 w-full">
            <option>Aakriti Aryal Shahi ( EMP18 )</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Chamber Name</label>
          <select className="border rounded p-2 w-full">
            <option>Select</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Remark</label>
          <textarea className="border rounded p-2 w-full" rows="2"></textarea>
        </div>

        <div>
          <label className="block font-semibold">Age (yy-mm-dd) <span className="text-red-600">*</span></label>
          <div className="flex gap-2">
            <input type="number" placeholder="Year" className="border rounded p-2 w-full" />
            <input type="number" placeholder="Month" className="border rounded p-2 w-full" />
            <input type="number" placeholder="Day" className="border rounded p-2 w-full" />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Address <span className="text-red-600">*</span></label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Place Of Birth</label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Death Reason <span className="text-red-600">*</span></label>
          <textarea className="border rounded p-2 w-full" rows="2"></textarea>
        </div>

        <div>
          <label className="block font-semibold">Attendant Mobile <span className="text-red-600">*</span></label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Identification Mark</label>
          <input type="text" className="border rounded p-2 w-full" />
        </div>

        <div>
          <label className="block font-semibold">Freezer Name <span className="text-red-600">*</span></label>
          <select className="border rounded p-2 w-full">
            <option>Select</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold">Case Type</label>
          <select className="border rounded p-2 w-full">
            <option>Select</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end mt-6 gap-2">
        <button className="bg-red-700 text-white px-4 py-2 rounded flex items-center gap-2">
          <Printer size={16} /> Save & Print
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center gap-2">
          <Save size={16} /> Save
        </button>
      </div>
    </div>
  );
};

export default ExternalMortuaryForm;
