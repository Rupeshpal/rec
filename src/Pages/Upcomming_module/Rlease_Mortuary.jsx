import React from "react";
import { Save, Printer } from "lucide-react";

const MortuaryReleaseForm = () => {
  return (
    <div className="bg-cyan-100 p-6 mt-10 text-sm">
    
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block font-semibold">
              Mortuary Number <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Mortuary Admission Number"
                className="border rounded p-2 w-full"
              />
              <button className="bg-gray-600 text-white w-[10rem] py-[0.6rem] rounded text-xs">
                Check Status
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold">
              Handover To <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="border rounded p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Remark</label>
            <textarea
              className="border rounded p-2 w-full"
              rows="2"
            ></textarea>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold">
              Name <span className="text-red-600">*</span>
            </label>
            <input type="text" className="border rounded p-2 w-full" />
          </div>

          <div>
            <label className="block font-semibold">
              Released By <span className="text-red-600">*</span>
            </label>
            <select className="border rounded p-2 w-full">
              <option>Aakriti Aryal Shahi ( EMP18 )</option>
            </select>
          </div>
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

export default MortuaryReleaseForm;
