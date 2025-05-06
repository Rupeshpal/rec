// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const Charge = lazy(() => import("../Pages/Setup/Services_charge_list"));

const Department_setting = lazy(() => import("../Pages/Setup/Department_setting"));
const Print_setting = lazy(() => import("../Pages/Setup/Printing_Setting"));


const SetupRoute = () => {
  return (
   
      <Routes>
      <Route path="/Charge" element={<Charge />} />
          <Route path="/Department_s" element={<Department_setting />} />
          <Route path="/Print_S" element={< Print_setting/>} />
  
      </Routes>
    
  );
};

export default SetupRoute;



