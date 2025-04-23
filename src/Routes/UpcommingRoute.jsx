import React, { lazy} from "react";
import { Routes, Route} from "react-router-dom";

// Lazy-loaded Pages





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


const UpcommingRoute = () => {
  return (

      <Routes>
       
    
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Apointment" element={<Apointment />} />
        <Route path="/Add-Department" element={<Department />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Opd" element={<Opd />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Discount_Scheme" element={<Discount_Scheme />} />
        <Route path="/Setup_Pathloggy" element={<Pathloggy_S />} />
        <Route path="/OpdReport" element={<OpdReport />} />
        <Route path="/Opd_Report" element={<Opd_R />} />
        <Route path="/Opd_Patient" element={<Opd_patient />} />
        <Route path="/Rlease" element={<Rlease />} />
        <Route path="/ExternaL" element={<ExternaL />} />
        <Route path="/Internal" element={<Internal />} />
        <Route path="/Salary_Sheet" element={<Salary_Sheet />} />
        <Route path="/Staff_Registration" element={<Staff_Registration />} />
        <Route path="/Insurance" element={<Insurance />} />
        <Route path="/Insurance_m" element={<Medicine />} />
      </Routes>

  );
};

export default UpcommingRoute;
