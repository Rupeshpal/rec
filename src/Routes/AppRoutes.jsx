import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Nested Billing Routes
import AppBillingRoutes from "./AppBillingRoutes";
import SetupRoute from "./SetupRoute";
import Pharmacy_Route from "./Pharmacy_Route";
import DepartmentRoute from  "./DepartmentRoute";

const Dashboard = lazy(() => import("../Components/Dashboard"));
const Test = lazy(() => import("../Components/Add_Services"));
const Discount_Scheme = lazy(() => import("../Components/Discount_Scheme"));
const Opd = lazy(() => import("../Components/Opd"));
const Department = lazy(() => import("../Components/Department"));
const Doctor = lazy(() => import("../Components/Doctor"));
const Login = lazy(() => import("../Components/Login"));
const Apointment = lazy(() => import("../Components/Apointment"));
const Salary_Sheet = lazy(() => import("../Components/Salary_Sheet"));
const Staff_Registration = lazy(() => import("../Components/Staff_Registration"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Apointment" element={<Apointment />} />
        <Route path="/Add-Department" element={<Department />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Opd" element={<Opd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Discount_Scheme" element={<Discount_Scheme />} />
        <Route path="/Salary_Sheet" element={<Salary_Sheet />} />
        <Route path="/Staff_Registration" element={<Staff_Registration />} />
      </Routes>
      <AppBillingRoutes/>
      <DepartmentRoute/>
      <SetupRoute/>
      <Pharmacy_Route/>
    </Suspense>
  );
};

export default AppRoutes;
