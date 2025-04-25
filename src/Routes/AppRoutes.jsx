import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded components
const Dashboard = lazy(() => import("../Components/Dashboard"));
const Test = lazy(() => import("../Components/Add_Services"));
const Discount_Scheme = lazy(() => import("../Components/Discount_Scheme"));
const Opd = lazy(() => import("../Components/Opd"));
const Department = lazy(() => import("../Components/Department"));
const Doctor = lazy(() => import("../Components/Doctor"));


const Salary_Sheet = lazy(() => import("../Components/Salary_Sheet"));
const Staff_Registration = lazy(() => import("../Components/Staff_Registration"));

// ProtectedRoute
import ProtectedRoute from "../Components/ProtectedRoute";

// Nested Routes (for example, AppBillingRoutes)
import AppBillingRoutes from "./AppBillingRoutes";
import SetupRoute from "./SetupRoute";
import Pharmacy_Route from "./Pharmacy_Route";
import DepartmentRoute from "./DepartmentRoute";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
     <Routes>
  <Route path="/" element={<Navigate to="/dashboard" replace />} />

  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/Doctor" element={<Doctor />} />
    <Route path="/Opd" element={<Opd />} />
    <Route path="/Add-Department" element={<Department />} />
    <Route path="/Test" element={<Test />} />
    <Route path="/Discount_Scheme" element={<Discount_Scheme />} />
    <Route path="/Salary_Sheet" element={<Salary_Sheet />} />
    <Route path="/Staff_Registration" element={<Staff_Registration />} />

    {/* Paste routes from AppBillingRoutes, SetupRoute, etc. here directly */}
  </Route>
</Routes>

      <AppBillingRoutes />
      <DepartmentRoute />
      <SetupRoute />
      <Pharmacy_Route />
    </Suspense>
  );
};

export default AppRoutes;
