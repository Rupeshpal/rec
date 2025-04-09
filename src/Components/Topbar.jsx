import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const closeTimeout = useRef(null);

  const menus = [

      // Billing
      {
        name: "Billing",
        children: [
          { name: "OPD Ticket", path: "/opd-ticket" },
          { name: "EMR & IPD", path: "/emr" },
          {
            name: "My Statement",
            children: [
              { name: "Tabular", path: "/tabular" },
              { name: "Cumulative Data", path: "/cumulative-data" },
            ],
          },
          { name: "Billing Profile", path: "/Billing" },
          { name: "Services Billing", path: "/Services" },
          { name: "Refund", path: "/Refund" },
        ],
      },

 // Department
 {
  name: "Department",
  children: [
    { name: "All Departments", path: "/departments" },
    { name: "Add Department", path: "/add-department" 
    },
    {
      name: "Pathology",
      children: [
        { name: "Add Tests Result", path: "/Patholgy_b" },
        { name: "Reports", path: "/pathology/reports" },
        { name: "Lab Setup", path: "/pathology/setup" },
      ],
    },
  ],
},
// Opd
{ name: "OPD", path: "/opd" },
    // Setup

    
    { name: "IPD", path: "/ipd" },

    { name: "Pharmacy", path: "/pharmacy" },

    { name: "Insurance", path: "/insurance" },
    { name: "SSF", path: "/ssf" },

    {
      name: "Setup",
      children: [
      
        { name: "Service Charge", path: "/Service-Charge" },
        {name: "Department Setting" , path:"/Department_s"}
      ],
    },

    
    { name: "Reports", path: "/reports" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
    <header className="fixed top-0 left-0 w-full bg-teal-700 text-white shadow-md z-50">
      <div className="flex justify-between items-center h-12 px-6 max-w-screen-xl mx-auto">
        {/* Logo linking to dashboard */}
        <Link to="/dashboard" className="text-xl font-bold ">
         SwastikHMS
        </Link>

        {/* Navigation */}
        <nav className="flex justify-center items-center gap-6">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.name)}
              onMouseLeave={handleMouseLeave}
            >
              {menu.path ? (
                <Link
                  to={menu.path}
                  className="hover:bg-teal-800 p-2 rounded transition"
                >
                  {menu.name}
                </Link>
              ) : (
                <button
                  className="hover:bg-teal-800 p-2 rounded transition"
                  onClick={() => toggleDropdown(menu.name)}
                >
                  {menu.name}
                </button>
              )}

              {/* First-level dropdown */}
              {menu.children && openDropdown === menu.name && (
                <div className="absolute left-0 mt-2 w-52 bg-teal-500 rounded shadow-md border border-gray-300 z-10">
                  {menu.children.map((child, i) =>
                    child.children ? (
                      <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => handleNestedMouseEnter(child.name)}
                        onMouseLeave={handleNestedMouseLeave}
                      >
                        <button
                          className="block w-full text-left px-2 py-1 text-sm hover:bg-teal-600 transition border-b border-gray-300"
                          onClick={() => toggleNestedDropdown(child.name)}
                        >
                          {child.name}
                        </button>

                        {/* Sub-dropdown */}
                        {openNestedDropdown === child.name && (
                          <div className="absolute left-full top-0 w-52 bg-teal-400 rounded shadow-md border border-gray-300 z-20">
                            {child.children.map((nested, j) => (
                              <Link
                                key={j}
                                to={nested.path}
                                className="block px-2 py-1 text-sm hover:bg-teal-500 transition border-b border-gray-200 last:border-b-0"
                              >
                                {nested.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={i}
                        to={child.path}
                        className="block px-2 py-1 text-sm hover:bg-teal-600 transition border-b border-gray-200 last:border-b-0"
                      >
                        {child.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
