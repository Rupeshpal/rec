// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded pages


const Phamacy_report = lazy(() => import("../Pages/Pharmacy/Pharamacy_Report"));
const General_M = lazy(() => import("../Pages/Pharmacy/General_medicine_report"));
const Sales_return = lazy(() => import("../Pages/Pharmacy/Sales_return"));
const Sales = lazy(() => import("../Pages/Pharmacy/Sales"));
const Phamacy = lazy(() => import("../Pages/Pharmacy/Phamacy"));
const Pharmacy_Route = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
           <Route path="/Phamacy" element={<Phamacy />} />
             <Route path="/Sales_return" element={<Sales_return />} />
              <Route path="/Sales" element={<Sales />} />
                 <Route path="/Phamacy" element={<Phamacy />} />
                 <Route path="/General_M" element={<General_M />} />
                  <Route path="/Phamacy_report" element={<Phamacy_report />} />
                  </Routes>
    </Suspense>
  );
};

export default Pharmacy_Route;
