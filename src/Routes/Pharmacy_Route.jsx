import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";



const Sales = lazy(() => import("../Pages/Pharmacy/Sales"));
const Phamacy = lazy(() => import("../Pages/Pharmacy/Phamacy"));
const Phamacy_report = lazy(() => import("../Pages/Pharmacy/Pharamacy_Report"));
const General_M = lazy(() => import("../Pages/Pharmacy/General_medicine_report"));
const Sales_return = lazy(() => import("../Pages/Pharmacy/Sales_return"));


const Pharmacy_Route = () => {

  return (

      <Routes>

         
           <Route path="/Phamacy" element={<Phamacy />} />
             <Route path="/Sales_return" element={<Sales_return />} />
              <Route path="/Sales" element={<Sales />} />
                 <Route path="/Phamacy" element={<Phamacy />} />
                 <Route path="/General_M" element={<General_M />} />
                  <Route path="/Phamacy_report" element={<Phamacy_report />} />
                  </Routes>

  );
};

export default Pharmacy_Route;
