import React from 'react';

const LabReport = () => {
  return (
    <div className=" font-sans p-4" id="lab-report">
      {/* Header Section */}
      <div className="text-center py-4 border-b-2 border-gray-700">
        <h1 className="text-xl font-bold">TEZ HEALTH CARE - A Fully Digital EMR</h1>
        <h2 className="text-lg">NEPAL GOVERNMENT</h2>
        <h3 className="text-base">Ministry Of Health And Population</h3>
        <h3 className="text-base">Gajendra Narayan Singh Hospital</h3>
        <h3 className="text-base">Rajbiraj, Saptari</h3>
      </div>

      {/* Patient and Bill Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b-2 border-gray-700">
        <div className="text-left">
          <p>Bill No : <span className="font-semibold">PATB35039</span></p>
          <p>Patient : <span className="font-semibold">Santoshi Sah (58630)</span></p>
          <p>Service No. : <span className="font-semibold">63326</span></p>
          <p>Merge Bill No : <span className="font-semibold">116830</span></p>
        </div>
        <div className="text-left">
          <p>Date : <span className="font-semibold">02/05/2025 11:41</span></p>
          <p>Age/Gender : <span className="font-semibold">28 Y/Female</span></p>
          <p>Lab No : <span className="font-semibold">54</span></p>
        </div>
      </div>

      {/* Test Parameter Table - CBC */}
      <div className="py-4 border-b-2 border-gray-700">
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border border-gray-400 text-left">Test Parameter Name</th>
              <th className="px-4 py-2 border border-gray-400 text-left">Result</th>
              <th className="px-4 py-2 border border-gray-400 text-left">Unit</th>
              <th className="px-4 py-2 border border-gray-400 text-left">Ref. Range</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['CBC', 'Haematology', '', ''],
              ['TC', '6.35', '10^3/uL', '4.0-11.0'],
              ['RBC COUNT', '4.53', '10^6/uL', '4.5-6.5'],
              ['PCV', '33.1', '%', 'M 40-54% F 36-47%'],
              ['Platelets', '257', '10^3/uL', '150-400'],
              ['Neutrophils', '66.3', '%', '40-75'],
              ['Lymphocytes', '26.5', '%', '20-45'],
              ['Monocytes', '5.9', '%', '2-10'],
              ['Eosinophils', '1.3', '%', '1-4'],
              ['Basophils', '0.0', '%', '0-1'],
              ['HB', '12.40', 'mg%', 'M 13-18 F 11.5-16.5'],
              ['MCV', '83.2', 'Femtolitres', '82-95'],
              ['MCH', '27.4', 'pg/cell', '27-31'],
              ['MCHC', '32.9', '%', '31.5-34.5'],
              ['RDW', '13.4', '%', '11.5-14.5']
            ].map(([name, result, unit, range], idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 border border-gray-400">{name}</td>
                <td className="px-4 py-2 border border-gray-400">{result}</td>
                <td className="px-4 py-2 border border-gray-400">{unit}</td>
                <td className="px-4 py-2 border border-gray-400">{range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer or Sign Section (Optional) */}
      <div className="text-right pt-4">
        <p className="italic">Lab Technician: <span className="font-semibold">Signature</span></p>
      </div>
    </div>
  );
};

export default LabReport;
