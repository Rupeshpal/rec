import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const CulturalTest = lazy(() => import("../Components/CumulativeData"));
const ReportSearch = lazy(() => import("../Components/ReportSearch"));
const Billing = lazy(() => import("../Components/Billing-Profile"));
const Tabular = lazy(() => import("../Components/Tabular"));
const CumulativeData = lazy(() => import("../Components/CumulativeData"));
const Services = lazy(() => import("../Components/Services-Billing"));
const Refund = lazy(() => import("../Components/Refound"));
const Test_Opde = lazy(() => import("../Components/Test_Opde"));
const OPDTicket = lazy(() => import("../Components/OPDTicket"));

const BillingRoutes = () => {
  return (

      <Routes>
        <Route path="/opd-ticket" element={<OPDTicket />} />
        <Route path="/cultural" element={<CulturalTest />} />
        <Route path="/report-search" element={<ReportSearch />} />
        <Route path="/billing-profile" element={<Billing />} />
        <Route path="/tabular" element={<Tabular />} />
        <Route path="/cumulative-data" element={<CumulativeData />} />
        <Route path="/services" element={<Services />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/test-opde" element={<Test_Opde />} />
        
      </Routes>
   
  );
};

export default BillingRoutes;
