// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Charge = lazy(() => import("../Components/Services_charge_list"));
const Department_setting = lazy(() => import("../Pages/Setup/Department_setting"));



const AppRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
      <Route path="/Service-Charge" element={<Charge />} />
          <Route path="/Department_s" element={<Department_setting />} />
  
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;



