import React, { useState } from 'react';

const departmentsData = [
  { department: 'Emergency', type: 'EMR', maternity: 'no', sheet: 'normal', agreement: 'No' },
  { department: 'Emergency', type: 'IPD', maternity: 'no', sheet: 'normal', agreement: 'No' },
  { department: 'opd', type: 'OPD', maternity: 'no', sheet: 'normal', agreement: 'No' },
  { department: 'DOTS', type: 'OPD', maternity: 'no', sheet: 'normal', agreement: 'No' },
  { department: 'Family Planning', type: 'OPD', maternity: 'no', sheet: 'normal', agreement: 'No' },
];

export default function DepartmentTable() {
  const [departments, setDepartments] = useState(departmentsData);
  const [isOpen, setIsOpen] = useState(false);
  const [newDept, setNewDept] = useState({ department: '', type: 'OPD', maternity: 'no', sheet: 'normal', agreement: 'No' });

  const handleAddDepartment = () => {
    setDepartments([...departments, newDept]);
    setIsOpen(false);
    setNewDept({ department: '', type: 'OPD', maternity: 'no', sheet: 'normal', agreement: 'No' });
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Department</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Add Department
        </button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-1 mb-4 w-full"
      />
      <table className="table-auto w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 py-1">Department</th>
            <th className="border px-2 py-1">OPD/IPD/EMR</th>
            <th className="border px-2 py-1">Is Maternity</th>
            <th className="border px-2 py-1">Sheet</th>
            <th className="border px-2 py-1">Agreement</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{dept.department}</td>
              <td className="border px-2 py-1">{dept.type}</td>
              <td className="border px-2 py-1">{dept.maternity}</td>
              <td className="border px-2 py-1">{dept.sheet}</td>
              <td className="border px-2 py-1">{dept.agreement}</td>
              <td className="border px-2 py-1">✎ ❌</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm mt-2">Records: 1 to {departments.length} of {departments.length}</p>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Add Department</h3>
            <input
              type="text"
              placeholder="Department Name"
              value={newDept.department}
              onChange={(e) => setNewDept({ ...newDept, department: e.target.value })}
              className="border px-3 py-2 w-full mb-4"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={handleAddDepartment}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded w-full"
              >
                Add
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
