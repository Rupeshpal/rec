import React from "react";
import { useState } from "react";
import axios from "axios";
export const Login = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}api/auth/login`, formData);
      localStorage.setItem("hms_token", response.data.token);
      console.log(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img
            alt="hms"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="email"
              className="mt-1 block w-full p-1 border-orange-300 shadow-sm focus:ring-orange-300 focus:border-orange-300 sm:text-md"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              autoComplete="current-password"
              className="mt-1 block w-full p-1 border-orange-300 shadow-sm focus:ring-orange-300 focus:border-orange-300 sm:text-md"
            />
          </div>

          <div>
            <button
              type="submit"
              style={{ backgroundColor: "#1a1a1a" }}
              className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
