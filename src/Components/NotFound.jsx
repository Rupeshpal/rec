// src/Components/NotFound.js

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-2xl mb-6 text-gray-700">Oops! Page Not Found</p>
      <Link
        to="/dashboard"
        className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
