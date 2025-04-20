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
const Test_Opde = lazy(() => import("../Pages/Billing/Test_Opde"));
const Sales = lazy(() => import("../Pages/Pharmacy/Sales"));
const Test = lazy(() => import("../Components/Add_Services"));
const Discount_Scheme  = lazy(() => import("../Components/Discount_Scheme"));
const Opd  = lazy(() => import("../Components/Opd"));
const Department  = lazy(() => import("../Components/Department"));
const Doctor  = lazy(() => import("../Components/Doctor"));
const Login  = lazy(() => import("../Components/Login"));
const Charge = lazy(() => import("../Pages/Setup/Services_charge_list"));
const Department_setting = lazy(() => import("../Pages/Setup/Department_setting"));
const Patholgy_b = lazy(() => import("../Pages/Department/Pathology_Bill"));
const Caltural_Report = lazy(() => import("../Pages/Department/Caltural_Report"));
const OpdReport = lazy(() => import("../Pages/Upcomming_module/Opd_report_blance"));
const Pathloggy_S = lazy(() => import("../Pages/Upcomming_module/Pathloggy_Setup"));
const Opd_R = lazy(() => import("../Pages/Upcomming_module/OpdReport"));
const Opd_patient = lazy(() => import("../Pages/Upcomming_module/Opd_patient"));
const Rlease = lazy(() => import("../Pages/Upcomming_module/Rlease_Mortuary"));
const Apointment = lazy(() => import("../Components/Apointment"));
const ExternaL = lazy(() => import("../Pages/Upcomming_module/External_Mortuary"));
const Internal = lazy(() => import("../Pages/Upcomming_module/Internal_Mortuary"));
const Salary_Sheet = lazy(() => import("../Components/Salary_Sheet"));
const Insurance = lazy(() => import("../Pages/Upcomming_module/Insurance_Records"));
const Staff_Registration = lazy(() => import("../Components/Staff_Registration"));
const Medicine = lazy(() => import("../Pages/Upcomming_module/Isurance_Medicine"));
const Phamacy = lazy(() => import("../Pages/Pharmacy/Phamacy"));
const Phamacy_report = lazy(() => import("../Pages/Pharmacy/Pharamacy_Report"));
const Pathalogy_Patient = lazy(() => import("../Pages/Department/Pathalogy_Patient"));
const General_M = lazy(() => import("../Pages/Pharmacy/General_medicine_report"));
const Sales_return = lazy(() => import("../Pages/Pharmacy/Sales_return"));
const NotFound = lazy(() => import("../Components/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
      <Route path="/Test_Opde" element={<Test_Opde />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/cultural" element={<CulturalTest />} />
        <Route path="/report-search" element={<ReportSearch />} />
        <Route path="/opd-ticket" element={<OPDTicket />} />
        <Route path="/Sales_return" element={<Sales_return />} />
        <Route path="/emr" element={<EMR />} />
        <Route path="/tabular" element={<Tabular />} />
        <Route path="/Phamacy" element={<Phamacy />} />
        <Route path="/General_M" element={<General_M />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Apointment" element={<Apointment />} />
        <Route path="/Add-Department" element={<Department />} />
        <Route path="/cumulative-data" element={<CumulativeData />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Opd" element={<Opd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Discount_Scheme" element={<Discount_Scheme />} />
        <Route path="/Service-Charge" element={<Charge />} />
        <Route path="/Setup_Pathloggy" element={<Pathloggy_S />} />
        <Route path="/Caltural_Report" element={<Caltural_Report />} />
        <Route path="/Patholgy_b" element={<Patholgy_b />} />
        <Route path="/OpdReport" element={<OpdReport />} />
        <Route path="/Opd_Report" element={<Opd_R />} />
        <Route path="/Opd_Patient" element={<Opd_patient />} />
        <Route path="/Rlease" element={<Rlease />} />
        <Route path="/ExternaL" element={<ExternaL />} />
        <Route path="/Phamacy_report" element={<Phamacy_report />} />
        <Route path="/Pathalogy_Patient" element={<Pathalogy_Patient />} />
        <Route path="/Internal" element={<Internal />} />
        <Route path="/Salary_Sheet" element={<Salary_Sheet />} />
        <Route path="/Staff_Registration" element={<Staff_Registration />} />
        <Route path="/Department_s" element={<Department_setting />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/Insurance_m" element={<Medicine />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
