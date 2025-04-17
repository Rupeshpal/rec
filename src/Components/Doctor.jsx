import React, { useState } from 'react';
import Select from 'react-select'; // Importing Select from react-select

const departmentsData = [
  { department: 'Emergency', type: 'EMR', maternity: 'no', sheet: 'normal', agreement: 'No' },
  { department: 'opd', type: 'OPD', maternity: 'no', sheet: 'normal', agreement: 'No' },
];

export default function DepartmentTable() {
  const [departments, setDepartments] = useState(departmentsData);
  const [isOpen, setIsOpen] = useState(false);
  const [newDept, setNewDept] = useState({ department: '', type: '', maternity: 'no', sheet: 'normal', agreement: 'No' });
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const departmentOptions = [
    { value: 'Emergency(IPD)', label: 'Emergency(IPD)' },
    { value: 'DOTS(OPD)', label: 'DOTS(OPD)' },
    { value: 'Family Planning(OPD)', label: 'Family Planning(OPD)' },
    { value: 'ENT(OPD)', label: 'ENT(OPD)' },
    { value: 'Maternity(IPD)', label: 'Maternity(IPD)' },
  ];

  const handleAddDepartment = () => {
    setDepartments([...departments, { ...newDept, department: selectedDepartments.map((dep) => dep.label).join(', ') }]);
    setNewDept({ department: '', type: '', maternity: 'no', sheet: 'normal', agreement: 'No' });
    setSelectedDepartments([]);
    setIsOpen(false);
  };

  const handleChange = (selectedOptions) => {
    setSelectedDepartments(selectedOptions || []);
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Departments</h2>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Department
        </button>
      </div>

      <table className="table-auto w-full border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Department</th>
            <th className="border px-2 py-1">Ward</th>
          
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{dept.department}</td>
              <td className="border px-2 py-1">{dept.type}</td>
              <td className="border px-2 py-1">{dept.maternity}</td>
              <td className="border px-2 py-1">✎ ❌</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-gray-600">
        Records: 1 to {departments.length} of {departments.length}
      </p>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-xl">
            <h3 className="text-lg font-bold mb-4">Add Department</h3>

           

            <label className="block mb-1 text-sm font-medium">Doctor</label>
            <select
              value={newDept.sheet}
              onChange={(e) => setNewDept({ ...newDept, sheet: e.target.value })}
              className="border px-3 py-2 w-full mb-4"
            >
              <option value="normal">Normal</option>
              <option value="detailed">Detailed</option>
            </select>


            <label className="block mb-2 text-sm font-medium text-gray-700">
              Ward <span className="text-red-500">*</span>
            </label>
            <Select
              options={departmentOptions}
              isMulti
              value={selectedDepartments}
              onChange={handleChange}
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Select ..."
            />

            <div className="flex justify-between gap-4 mt-2">
              <button
                onClick={handleAddDepartment}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
              >
                Add
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded w-full"
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
