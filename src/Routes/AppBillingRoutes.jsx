import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";

// Lazy-loaded components
const CulturalTest = lazy(() => import("../Components/CulturalTest"));
const Emr = lazy(() => import("../Components/Emergency"));
const Ipd = lazy(() => import("../Components/IPDRegistration"));
const ReportSearch = lazy(() => import("../Components/ReportSearch"));
const Billing = lazy(() => import("../Components/Billing-Profile"));
const Tabular = lazy(() => import("../Components/Tabular"));
const CumulativeData = lazy(() => import("../Components/CumulativeData"));
const Services = lazy(() => import("../Components/Services-Billing"));
const Refund = lazy(() => import("../Components/Refound"));
const Test_Opde = lazy(() => import("../Components/Test_Opde"));
const OPDTicket = lazy(() => import("../Components/OPDTicket"));

const AppBillingRoutes = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/opd-ticket" element={<OPDTicket />} />
        <Route path="/emr" element={<Emr />} />
        <Route path="/ipd" element={<Ipd />} />
        <Route path="/cultural" element={<CulturalTest />} />
        <Route path="/report-search" element={<ReportSearch />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/tabular" element={<Tabular />} />
        <Route path="/cumulative-data" element={<CumulativeData />} />
        <Route path="/services" element={<Services />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/test-opde" element={<Test_Opde />} />
      </Route>
    </Routes>
  );
};

export default AppBillingRoutes;
