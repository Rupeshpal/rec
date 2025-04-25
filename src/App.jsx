import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";
import { isTokenExpired } from "./utills/checkToken";

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token || isTokenExpired(token)) {
      localStorage.removeItem("authToken");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      {location.pathname === "/login" ? (
        <Login />
      ) : (
        <>
          <Topbar />
          <div className="p-2">
            <AppRoutes />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <AppContent />
  </Router>
);

export default AppWrapper;
