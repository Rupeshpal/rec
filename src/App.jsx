import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes/AppRoutes";
import Billing_Route from "./Routes/Billing_Route";

const NotFound = lazy(() => import("./Components/NotFound")); // Fixed path and moved outside component

const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Simulate loading
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
            <Topbar />
            <div className="p-2">
                <Routes>
                    <Route path="/*" element={<AppRoutes />} />
                    <Route path="/billing/*" element={<Billing_Route />} />
                    <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><NotFound /></Suspense>} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <AppContent />
    </Router>
);

export default AppWrapper;
