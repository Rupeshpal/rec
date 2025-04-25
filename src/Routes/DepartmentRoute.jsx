import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";




const Pathalogy_Patient = lazy(() => import("../Pages/Department/Pathalogy_Patient"));
const Department = lazy(() => import("../Components/Department"));
const Patholgy_b = lazy(() => import("../Pages/Department/Pathology_Bill"));
const Caltural_Report = lazy(() => import("../Pages/Department/Caltural_Report"));

const DepartmentRoute = () => {
  return (

      <Routes>

 
         
        <Route path="/Add-Department" element={<Department />} />
       <Route path="/Pathalogy_Patient" element={<Pathalogy_Patient />} />
        <Route path="/Patholgy_b" element={<Patholgy_b />} />
        <Route path="/Caltural_Report" element={<Caltural_Report />} />

        {/* Billing Routes (nested group) */}
    

  
      </Routes>

   
  );
};

export default DepartmentRoute;
