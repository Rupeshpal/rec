import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menus = [
  {
    name: "Billing",
    children: [
      { name: "OPD Ticket", path: "/opd-ticket" },
      { name: "EMR & IPD", path: "/emr" },
      { name: "Discharge Summary", path: "/Discharge" },
      { name: "Discount Scheme", path: "/Discount" },
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
  {
    name: "Department",
    children: [
      { name: "Pathalogy Patient", path: "/Pathalogy_Patient" },
      { name: "Caltural Report", path: "/Caltural_Report" },
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
  {
    name: "OPD",
    children: [{ name: "Opd Patients List", path: "/Opd" }],
  },
  { name: "IPD", path: "/ipd" },
  {
    name: "Pharmacy",
    children: [
      { name: "Sales", path: "/Sales" },
      { name: "Sales Return", path: "/Sales_return" },
      { name: "Purches", path: "/Phamacy" },
      { name: "Purches Report", path: "/Phamacy_report" },
    ],
  },
  { name: "Insurance", path: "/insurance" },
  { name: "SSF", path: "/ssf" },
  {
    name: "Payroll",
    children: [
      { name: "Staff Ragistration", path: "/Staff_Registration" },
      { name: "Appointment", path: "/Apointment" },
      { name: "Designation", path: "/designation" }, // Modified to /designation
      { name: "Salary Sheet", path: "/Salary_Sheet" },
    ],
  },
  {
    name: "Setup",
    children: [
      { name: "Charge", path: "/Charge" },
      { name: "Discount Scheme", path: "/Discount_Scheme" },
      { name: "Department Setting", path: "/Department_s" },
      { name: "Hospital Department", path: "/Add-Department" },
      { name: "Doctor Setup", path: "/Doctor" },
    ],
  },
  { name: "Reports", path: "/reports" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [openPages, setOpenPages] = useState([]); // { title, path }
  const location = useLocation();
  const closeTimeout = useRef(null);
  const nestedRef = useRef(null);

  const disableDropdown = location.pathname === "*" || location.pathname === "/notfound";

  const findTitleByPath = (items, path) => {
    for (const item of items) {
      if (item.path === path) return item.name;
      if (item.children) {
        const result = findTitleByPath(item.children, path);
        if (result) return result;
      }
    }
    return null;
  };

  useEffect(() => {
    const title = findTitleByPath(menus, location.pathname);
    if (title && !openPages.find((p) => p.path === location.pathname) && location.pathname !== "/") { // Filter out the dashboard page
      setOpenPages((prev) => [...prev, { title, path: location.pathname }]);
    }
  }, [location.pathname]);


  const handleClosePage = (path) => {
    setOpenPages((prev) => prev.filter((p) => p.path !== path));
  };
const  handleLogoClick = () =>{
  setOpenPages([]);
}
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (nestedRef.current && openNestedDropdown) {
      const rect = nestedRef.current.getBoundingClientRect();
      const shouldFlip = rect.right > window.innerWidth;
      nestedRef.current.style.left = shouldFlip ? "-224px" : "100%";
    }
  }, [openNestedDropdown]);

  const handleMouseEnter = (dropdown) => {
    if (!isMobile && !disableDropdown) {
      clearTimeout(closeTimeout.current);
      setOpenDropdown(dropdown);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !disableDropdown) {
      closeTimeout.current = setTimeout(() => {
        setOpenDropdown(null);
        setOpenNestedDropdown(null);
      }, 300);
    }
  };

  const handleNestedMouseEnter = (nestedDropdown) => {
    if (!isMobile && !disableDropdown) {
      clearTimeout(closeTimeout.current);
      setOpenNestedDropdown(nestedDropdown);
    }
  };

  const handleNestedMouseLeave = () => {
    if (!isMobile && !disableDropdown) {
      closeTimeout.current = setTimeout(() => setOpenNestedDropdown(null), 300);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (isMobile && !disableDropdown) {
      setOpenDropdown(openDropdown === dropdown ? null : dropdown);
      setOpenNestedDropdown(null);
    }
  };

  const toggleNestedDropdown = (nestedDropdown) => {
    if (isMobile && !disableDropdown) {
      setOpenNestedDropdown(openNestedDropdown === nestedDropdown ? null : nestedDropdown);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-teal-700 text-white shadow-md z-50">
        <div className="flex justify-between items-center h-14 px-6 max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white no-underline"
            onClick={handleLogoClick}
          >
            <img
              src="/SwasticHMS.png"
              alt="SwastikHMS Logo"
              className="w-12 h-12 object-contain brightness-100 contrast-125 drop-shadow"
              
            />
            <span className="hidden sm:inline">SwastikHMS</span>
          </Link>

          <nav className="flex justify-center items-center gap-4">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.name)}
                onMouseLeave={handleMouseLeave}
              >
                {menu.path && menu.path !== "/" ? ( // Exclude the "/" route
                  <Link to={menu.path} className="hover:bg-teal-800 p-2 rounded transition">
                    {menu.name}
                  </Link>
                ) : (
                  <button
                    className="hover:bg-teal-800 p-2 rounded transition"
                    onClick={() => toggleDropdown(menu.name)}
                    disabled={disableDropdown}
                  >
                    {menu.name}
                  </button>
                )}

                {menu.children && openDropdown === menu.name && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-52 bg-teal-500 rounded shadow-md border border-gray-300 z-10">
                    {menu.children.map((child, i) =>
                      child.children ? (
                        <div
                          key={i}
                          className="relative"
                          onMouseEnter={() => handleNestedMouseEnter(child.name)}
                          onMouseLeave={handleNestedMouseLeave}
                        >
                          <button
                            className="block w-full text-left px-3 py-2 text-sm hover:bg-teal-600 transition border-b border-gray-300"
                            onClick={() => toggleNestedDropdown(child.name)}
                          >
                            {child.name}
                          </button>

                          {openNestedDropdown === child.name && (
                            <div
                              ref={nestedRef}
                              className="absolute top-0 w-56 bg-teal-400 rounded shadow-lg border border-gray-300 z-20 transition-all duration-300"
                              style={{ left: "100%" }}
                            >
                              {child.children.map((nested, j) => (
                                <Link
                                  key={j}
                                  to={nested.path}
                                  className="block px-3 py-2 text-sm hover:bg-teal-500 transition border-b border-gray-200 last:border-b-0"
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
                          className="block px-3 py-2 text-sm hover:bg-teal-600 transition border-b border-gray-200 last:border-b-0"
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

      {/* Open Pages Header Chips */}
      <div className="mt-16 mb-1 flex flex-wrap gap-2 px-6 py-0">
      <button className="px-1 h-5 text-sm bg-green-500 text-white rounded">
                    Load
                  </button>
                  {openPages.map(({ title, path }) => {
          const active = location.pathname === path;
          return (
            <div
              key={path}
              className={`flex items-center gap-1 px-2 py-1 rounded shadow-sm text-sm cursor-pointer transition ${
                active ? "bg-teal-700 text-white" : "bg-teal-200 text-teal-900"
              }`}
            >
              <Link to={path}>{title}</Link>
              <button onClick={() => handleClosePage(path)} className="hover:text-red-600">
                ✕
              </button>
            </div>
          );
        })}
      </div>
  
      <hr />
    </>
  );
};

export default Navbar;
