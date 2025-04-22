import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const CulturalTest = lazy(() => import("../Pages/Billing/CulturalTest"));
const ReportSearch = lazy(() => import("../Pages/Billing/ReportSearch"));
const Billing = lazy(() => import("../Pages/Billing/Billing-Profile"));
const Tabular = lazy(() => import("../Pages/Billing/Tabular"));
const CumulativeData = lazy(() => import("../Pages/Billing/CumulativeData"));
const Services = lazy(() => import("../Pages/Billing/Services-Billing"));
const Refund = lazy(() => import("../Pages/Billing/Refound"));
const Test_Opde = lazy(() => import("../Pages/Billing/Test_Opde"));

const BillingRoutes = () => {
 <Routes>
        <Route path="/cultural" element={<CulturalTest />} />
     <Route path="/report-search" element={<ReportSearch />} />
         <Route path="/Billing" element={<Billing />} />
           <Route path="/tabular" element={<Tabular />} />
               <Route path="/cumulative-data" element={<CumulativeData />} />
               <Route path="/services" element={<Services />} />
                 <Route path="/Refund" element={<Refund />} />
                    <Route path="/Test_Opde" element={<Test_Opde />} />
 </Routes>
}
export default BillingRoutes;