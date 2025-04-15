// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded pages



const Pharmacy_Route = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
           <Route path="/Phamacy" element={<Phamacy />} />
      </Routes>
    </Suspense>
  );
};

export default Pharmacy_Route;
