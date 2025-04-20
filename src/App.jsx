import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Topbar from "./Components/Topbar";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./Components/Footer";
const App = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500); // Simulate loading
    }, []); 

    const isInvalidRoute = location.pathname === '/notfound' || location.pathname === '*';// You can extend this check as needed

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }
    return (
        <>
            <Topbar />
      <div className="p-2">
        <AppRoutes />
        
      </div>
      <Footer />
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
