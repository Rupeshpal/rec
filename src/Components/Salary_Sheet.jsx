import React, { useState } from 'react';

const EmployeeSalarySheet = () => {
  const [preparationDate, setPreparationDate] = useState('2025-04-17');
  const [miti, setMiti] = useState('04/01/2022');
  const [salaryMonth, setSalaryMonth] = useState('');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Ram Babul',
      maritalStatus: '',
      designation: 'Manager',
      daysInMonth: '0',
      workingDays: '25',
      totalOTDays: '10',
      basicSalary: '10000',
      ot: '0',
      ia: '0',
      ssfAdd: '1000'
    }
  ]);

  const handleInputChange = (id, field, value) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, [field]: value } : emp
    ));
  };

  const handleShowEmployees = () => {
    console.log('Showing employees...');
  };

  const handleCalculateSalary = () => {
    console.log('Calculating salary...');
  };

  return (
    <div className="container mt-10 mx-auto p-6 max-w-6xl bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Employee Salary Sheet</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Preparation Date: {preparationDate}</h2>
        <div className="flex items-center">
          <span className="font-medium mr-2">Miti:</span>
          <span>{miti}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Salary Month of:</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            value={salaryMonth}
            onChange={(e) => setSalaryMonth(e.target.value)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter month/year"
          />
          <button 
            onClick={handleShowEmployees}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Show Employee
          </button>
          <button 
            onClick={handleCalculateSalary}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Calculate Salary
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b"></th>
              <th className="py-3 px-4 border-b text-left">Employee Name</th>
              <th className="py-3 px-4 border-b text-left">Marital Status</th>
              <th className="py-3 px-4 border-b text-left">Designation</th>
              <th className="py-3 px-4 border-b text-left">Days in Month</th>
              <th className="py-3 px-4 border-b text-left">WorkingDay</th>
              <th className="py-3 px-4 border-b text-left">TotOTDays</th>
              <th className="py-3 px-4 border-b text-left">BASIC SALARY</th>
              <th className="py-3 px-4 border-b text-left">OT</th>
              <th className="py-3 px-4 border-b text-left">IA</th>
              <th className="py-3 px-4 border-b text-left">SSF Add</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b"></td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.name}
                    onChange={(e) => handleInputChange(employee.id, 'name', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.maritalStatus}
                    onChange={(e) => handleInputChange(employee.id, 'maritalStatus', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.designation}
                    onChange={(e) => handleInputChange(employee.id, 'designation', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.daysInMonth}
                    onChange={(e) => handleInputChange(employee.id, 'daysInMonth', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.workingDays}
                    onChange={(e) => handleInputChange(employee.id, 'workingDays', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.totalOTDays}
                    onChange={(e) => handleInputChange(employee.id, 'totalOTDays', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.basicSalary}
                    onChange={(e) => handleInputChange(employee.id, 'basicSalary', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.ot}
                    onChange={(e) => handleInputChange(employee.id, 'ot', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.ia}
                    onChange={(e) => handleInputChange(employee.id, 'ia', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <input
                    type="text"
                    value={employee.ssfAdd}
                    onChange={(e) => handleInputChange(employee.id, 'ssfAdd', e.target.value)}
                    className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeSalarySheet;
