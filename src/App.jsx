import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";
import { isTokenExpired } from "./utills/checkToken";
import Cookies from "js-cookie";
import AutoLogout from "./Components/Autologout";
const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (location.pathname !== "/login" && isTokenExpired()) {
        console.log(isTokenExpired());
        Cookies.remove("authToken");
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        navigate("/Login");
      }
    }, 5000); // check every 5 seconds

    return () => clearInterval(interval);
  }, [location.pathname, navigate]);

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
      <AutoLogout /> {}
      {location.pathname === "/Login" ? (
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
