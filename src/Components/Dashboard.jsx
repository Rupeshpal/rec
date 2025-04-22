import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Auto import of Chart.js

const Dashboard = () => {
  const patientsChartRef = useRef(null);
  const revenueChartRef = useRef(null);

  useEffect(() => {
    // Function to destroy the previous chart if it exists
    const destroyChart = (chartInstance) => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };

    // Patients Statistics Chart
    const patientsCtx = patientsChartRef.current?.getContext('2d');
    let patientsChart = null;

    if (patientsCtx) {
      patientsChart = new Chart(patientsCtx, {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [{
            label: 'New Patients',
            data: [12, 19, 13, 15, 22, 30, 25],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true }
          }
        }
      });
    }

    // Revenue Trends Chart
    const revenueCtx = revenueChartRef.current?.getContext('2d');
    let revenueChart = null;

    if (revenueCtx) {
      revenueChart = new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Monthly Revenue ($)',
            data: [5000, 7000, 8000, 6500, 7200, 9000, 10000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false } },
            y: { beginAtZero: true }
          }
        }
      });
    }

    // Cleanup the charts when the component unmounts
    return () => {
      destroyChart(patientsChart);
      destroyChart(revenueChart);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
<div className="p-6 mb-8 mt-8 w-full  mx-auto">

      <h1 className="text-2xl font-bold text-center">Hospital Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-gray-100 p-6 shadow-md rounded-lg flex items-center justify-between w-full">
          <div>
            <p className="text-gray-500">Total Patients</p>
            <h2 className="text-2xl font-bold">1,230</h2>
          </div>
          <span className="text-teal-600 text-3xl">🩺</span>
        </div>

        <div className="bg-gray-100 p-6 shadow-md rounded-lg flex items-center justify-between w-full">
          <div>
            <p className="text-gray-500">Appointments Today</p>
            <h2 className="text-2xl font-bold">58</h2>
          </div>
          <span className="text-blue-600 text-3xl">📅</span>
        </div>

        <div className="bg-gray-100 p-6 shadow-md rounded-lg flex items-center justify-between w-full">
          <div>
            <p className="text-gray-500">Total Revenue</p>
            <h2 className="text-2xl font-bold">$48,500</h2>
          </div>
          <span className="text-green-600 text-3xl">💰</span>
        </div>

        <div className="bg-gray-100 p-6 shadow-md rounded-lg flex items-center justify-between w-full">
          <div>
            <p className="text-gray-500">Available Beds</p>
            <h2 className="text-2xl font-bold">72</h2>
          </div>
          <span className="text-red-600 text-3xl">🛏</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <div className="bg-gray-100 p-6 shadow-md rounded-lg w-full h-80">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Patients Statistics</h2>
          <canvas ref={patientsChartRef} className="w-full h-full"></canvas> {/* Ensure canvas takes full width and height */}
        </div>

        <div className="bg-gray-100 p-6 shadow-md rounded-lg w-full h-80">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Revenue Trends</h2>
          <canvas ref={revenueChartRef} className="w-full h-full"></canvas> {/* Ensure canvas takes full width and height */}
        </div>
      </div>

      <div className="bg-gray-100 p-6   shadow-md rounded-lg mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Patient Appointments</h2>
        <table className="min-w-full bg-gray-100 table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-gray-600">Patient Name</th>
              <th className="py-2 px-4 border-b text-left text-gray-600">Appointment Date</th>
              <th className="py-2 px-4 border-b text-left text-gray-600">Doctor</th>
              <th className="py-2 px-4 border-b text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-gray-600">John Doe</td>
              <td className="py-2 px-4 border-b text-gray-600">2025-03-19</td>
              <td className="py-2 px-4 border-b text-gray-600">Dr. Smith</td>
              <td className="py-2 px-4 border-b text-gray-600">Scheduled</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-gray-600">Jane Doe</td>
              <td className="py-2 px-4 border-b text-gray-600">2025-03-20</td>
              <td className="py-2 px-4 border-b text-gray-600">Dr. Johnson</td>
              <td className="py-2 px-4 border-b text-gray-600">Completed</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-gray-600">Emily Smith</td>
              <td className="py-2 px-4 border-b text-gray-600">2025-03-22</td>
              <td className="py-2 px-4 border-b text-gray-600">Dr. Williams</td>
              <td className="py-2 px-4 border-b text-gray-600">Scheduled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
