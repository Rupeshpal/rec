import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (dropdown) => {
    if (!isMobile) {
      clearTimeout(closeTimeout.current);
      setOpenDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      closeTimeout.current = setTimeout(() => setOpenDropdown(null), 300);
    }
  };

  const handleNestedMouseEnter = (nestedDropdown) => {
    if (!isMobile) {
      clearTimeout(closeTimeout.current);
      setOpenNestedDropdown(nestedDropdown);
    }
  };

  const handleNestedMouseLeave = () => {
    if (!isMobile) {
      closeTimeout.current = setTimeout(() => setOpenNestedDropdown(null), 300);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (isMobile) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
      setOpenNestedDropdown(null);
    }
  };

  const toggleNestedDropdown = (nestedDropdown) => {
    if (isMobile) {
      setOpenNestedDropdown(openNestedDropdown === nestedDropdown ? null : nestedDropdown);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-10 bg-teal-700 text-white shadow-md flex items-center justify-between px-6 z-50">
      <div className="text-xl font-bold">🏥 HospitalX</div>
      <nav className="flex items-center space-x-6">
        <Link to="/dashboard" className="hover:bg-teal-800 p-2 rounded">🏠 Dashboard</Link>

        {/* Department Dropdown */}
        <div className="relative" onMouseEnter={() => handleMouseEnter("department")} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-teal-800 p-2 rounded" onClick={() => toggleDropdown("department")}>🧑‍⚕️ Department</button>
          {openDropdown === "department" && (
            <div className="absolute left-0 mt-2 w-48 bg-teal-500 rounded shadow-lg">
              <button
                className="block w-full text-left p-2 hover:bg-teal-600"
                onClick={() => toggleNestedDropdown("pathology")}
                onMouseEnter={() => handleNestedMouseEnter("pathology")}
                onMouseLeave={handleNestedMouseLeave}
              >
                Pathology
              </button>
              {openNestedDropdown === "pathology" && (
                <div className="absolute left-full top-0 w-48 bg-teal-400 rounded shadow-lg">
                  <Link to="/pathology" className="block p-2 hover:bg-teal-500">Pathology</Link>
                  <Link to="/cultural" className="block p-2 hover:bg-teal-500">Cultural Test</Link>
                  <Link to="/report-search" className="block p-2 hover:bg-teal-500">Report Search by Bill</Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Setup Dropdown (fixed logic) */}
        <div className="relative" onMouseEnter={() => handleMouseEnter("setup")} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-teal-800 p-2 rounded" onClick={() => toggleDropdown("setup")}>⚙️ Setup</button>
          {openDropdown === "setup" && (
            <div className="absolute left-0 mt-2 w-48 bg-teal-500 rounded shadow-lg">
              <Link to="/Test" className="block p-2 hover:bg-teal-600">Test</Link>
              <Link to="/Service-Charge" className="block p-2 hover:bg-teal-600">Service Charge</Link>
            </div>
            
          )}
        </div>

        {/* Billing Dropdown */}
        <div className="relative" onMouseEnter={() => handleMouseEnter("billing")} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-teal-800 p-2 rounded" onClick={() => toggleDropdown("billing")}>💳 Billing</button>
          {openDropdown === "billing" && (
            <div className="absolute left-0 mt-2 w-48 bg-teal-500 rounded shadow-lg">
              <Link to="/opd-ticket" className="block p-2 hover:bg-teal-600">OPD Ticket</Link>
              <Link to="/emr" className="block p-2 hover:bg-teal-600">EMR & IPD</Link>

              <div className="relative" onMouseEnter={() => handleNestedMouseEnter("billing-statement")} onMouseLeave={handleNestedMouseLeave}>
                <button className="block w-full text-left p-2 hover:bg-teal-600">My Statement</button>
                {openNestedDropdown === "billing-statement" && (
                  <div className="absolute left-full top-0 w-48 bg-teal-400 rounded shadow-lg">
                    <Link to="/tabular" className="block p-2 hover:bg-teal-500">Tabular</Link>
                    <Link to="/cumulative-data" className="block p-2 hover:bg-teal-500">Cumulative Data</Link>
                  </div>
                )}
              </div>

              <Link to="/Billing" className="block p-2 hover:bg-teal-600">Billing Profile</Link>
              <Link to="/Services" className="block p-2 hover:bg-teal-600">Services Billing</Link>
              <Link to="/Refund" className="block p-2 hover:bg-teal-600">Refund</Link>
            </div>
          )}
        </div>

        {/* Appointments Dropdown */}
        <div className="relative" onMouseEnter={() => handleMouseEnter("appointments")} onMouseLeave={handleMouseLeave}>
          <button className="hover:bg-teal-800 p-2 rounded" onClick={() => toggleDropdown("appointments")}>📅 Appointments</button>
          {openDropdown === "appointments" && (
            <div className="absolute left-0 mt-2 w-48 bg-teal-500 rounded shadow-lg">
              <Link to="/appointments" className="block p-2 hover:bg-teal-600">View Appointments</Link>
              <Link to="/schedule" className="block p-2 hover:bg-teal-600">Schedule Appointment</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
