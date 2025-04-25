import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded pages



const Pharmacy_Route = () => {

  return (

      <Routes>
           <Route path="/Phamacy" element={<Phamacy />} />
      </Routes>
    
  );
};

export default Pharmacy_Route;
