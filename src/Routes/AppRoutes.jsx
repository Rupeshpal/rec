// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded pages
const Dashboard = lazy(() => import("../Components/Dashboard"));
const Pathology = lazy(() => import("../Components/Pathology"));
const CulturalTest = lazy(() => import("../pages/Billing/CulturalTest"));
const ReportSearch = lazy(() => import("../pages/Billing/ReportSearch"));
const OPDTicket = lazy(() => import("../Components/OPDTicket"));
const EMR = lazy(() => import("../pages/Billing/EMR"));
const Billing = lazy(() => import("../pages/Billing/Billing-Profile"));
const Tabular = lazy(() => import("../pages/Billing/Tabular"));
const CumulativeData = lazy(() => import("../pages/Billing/CumulativeData"));
const Services = lazy(() => import("../pages/Billing/Services-Billing"));
const Refund = lazy(() => import("../Pages/Billing/Refound"));
const Test = lazy(() => import("../Components/Add_Services"));
const Charge = lazy(() => import("../Pages/Setup/Services_charge_list"));
const Department_setting = lazy(() => import("../Pages/Setup/Department_setting"));
const Patholgy_b = lazy(() => import("../Pages/Department/Pathology_Bill"));
const OpdReport = lazy(() => import("../Pages/Upcomming_module/Opd_report_blance"));
const Pathloggy_S = lazy(() => import("../Pages/Upcomming_module/Pathloggy_Setup"));
const Opd_R = lazy(() => import("../Pages/Upcomming_module/OpdReport"));
const Opd_patient = lazy(() => import("../Pages/Upcomming_module/Opd_patient"));
const Rlease = lazy(() => import("../Pages/Upcomming_module/Rlease_Mortuary"));
const ExternaL = lazy(() => import("../Pages/Upcomming_module/External_Mortuary"));
const Internal = lazy(() => import("../Pages/Upcomming_module/Internal_Mortuary"));
const Tax = lazy(() => import("../Pages/Upcomming_module/Tax_Category"));
const Insurance = lazy(() => import("../Pages/Upcomming_module/Insurance_Records"));
const Medicine = lazy(() => import("../Pages/Upcomming_module/Isurance_Medicine"));
const ScheduleAppointment = lazy(() => import("../pages/Billing/ScheduleAppointment"));
const NotFound = lazy(() => import("../Components/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/cultural" element={<CulturalTest />} />
        <Route path="/report-search" element={<ReportSearch />} />
        <Route path="/opd-ticket" element={<OPDTicket />} />
        <Route path="/emr" element={<EMR />} />
        <Route path="/tabular" element={<Tabular />} />
        <Route path="/cumulative-data" element={<CumulativeData />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Service-Charge" element={<Charge />} />
        <Route path="/Setup_Pathloggy" element={<Pathloggy_S />} />
        <Route path="/Patholgy_b" element={<Patholgy_b />} />
        <Route path="/OpdReport" element={<OpdReport />} />
        <Route path="/Opd_Report" element={<Opd_R />} />
        <Route path="/Opd_Patient" element={<Opd_patient />} />
        <Route path="/Rlease" element={<Rlease />} />
        <Route path="/ExternaL" element={<ExternaL />} />
        <Route path="/Internal" element={<Internal />} />
        <Route path="/Department_s" element={<Department_setting />} />
        <Route path="/Tax" element={<Tax />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/Insurance_m" element={<Medicine />} />
        <Route path="/schedule" element={<ScheduleAppointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
