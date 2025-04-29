import React from "react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaUserMd,
  FaMicroscope,
  FaBed,
  FaFileInvoiceDollar,
  FaCog,
  FaPrint,
  FaClipboardList,
  FaBuilding,
  FaCapsules,
  FaCogs,
  FaThLarge,
  FaFileAlt,
  FaUsers,
  FaShieldAlt,
  FaBriefcaseMedical,
  FaBoxes,
  FaSitemap,
} from "react-icons/fa";

const setupItems = [
  { name: "Charges", icon: <FaFileInvoiceDollar />, path: "/charges" },
  {
    name: "Hospital Department",
    icon: <FaHospital />,
    path: "/hospital-department",
  },
  { name: "HIB, Nepal Setting", icon: <FaCog />, path: "/hib-nepal-setting" },
  { name: "Human Resource", icon: <FaUsers />, path: "/human-resource" },
  { name: "Radiology", icon: <FaMicroscope />, path: "/radiology" },
  { name: "OPD Process", icon: <FaClipboardList />, path: "/opd-process" },
  { name: "Doctor Allotment", icon: <FaUserMd />, path: "/doctor-allotment" },
  { name: "Third Party Administrator", icon: <FaBuilding />, path: "/tpa" },
  { name: "Pathology", icon: <FaMicroscope />, path: "/pathology" },
  { name: "Diagnosis", icon: <FaFileAlt />, path: "/diagnosis" },
  { name: "Bed", icon: <FaBed />, path: "/bed" },
  {
    name: "Discount Scheme",
    icon: <FaFileInvoiceDollar />,
    path: "/discount-scheme",
  },
  {
    name: "Warehouse Allotment",
    icon: <FaBoxes />,
    path: "/warehouse-allotment",
  },
  {
    name: "Medicine Warehouse",
    icon: <FaCapsules />,
    path: "/medicine-warehouse",
  },
  { name: "Machine Allotment", icon: <FaCogs />, path: "/machine-allotment" },
  {
    name: "Department Register",
    icon: <FaSitemap />,
    path: "/department-register",
  },
  { name: "Print Setting", icon: <FaPrint />, path: "/print-setting" },
  { name: "Modules", icon: <FaThLarge />, path: "/modules" },
  { name: "Permission", icon: <FaShieldAlt />, path: "/permission" },
  { name: "Reception", icon: <FaBriefcaseMedical />, path: "/reception" },
];

const Setup = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Hospital Setup</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {setupItems.map((item, index) => (
          <Link
            to={item.path || "#"}
            key={index}
            className="bg-white shadow-md rounded-lg p-3 flex flex-col items-center justify-center text-blue-600 font-semibold hover:bg-blue-100 transition duration-300 cursor-pointer"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <span className="text-center">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Setup;
